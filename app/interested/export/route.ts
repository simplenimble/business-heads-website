import { createHash, timingSafeEqual } from 'node:crypto'
import { createClient } from '@supabase/supabase-js'

/*
 * Private CSV export of Business Show sign-ups: /interested/export
 *
 * Not linked anywhere, not in the sitemap, and sent with X-Robots-Tag noindex.
 * Protected by HTTP basic auth (the browser shows a login prompt). Any username
 * is accepted; only the password is checked.
 *
 * Needs two server-only Vercel env vars (never commit them, never NEXT_PUBLIC_):
 *   LEADS_EXPORT_PASSWORD  - the password typed into the browser prompt
 *   SUPABASE_SECRET_KEY    - Supabase secret (or legacy service_role) key, used
 *                            only here to read the leads table. RLS on `leads`
 *                            is left as insert-only for the public key.
 */

const SOURCE = 'Business Show'
const TIME_ZONE = 'Australia/Hobart'
const PAGE_SIZE = 1000

const noIndexHeaders = {
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'Cache-Control': 'no-store, private',
}

type LeadRow = {
  name: string | null
  email: string | null
  business_name: string | null
  consent: boolean | null
  source: string | null
  submitted_at: string | null
}

function sha256(value: string) {
  return createHash('sha256').update(value, 'utf8').digest()
}

// Constant-time comparison (hashing first makes both buffers the same length).
function passwordMatches(supplied: string, expected: string) {
  return timingSafeEqual(sha256(supplied), sha256(expected))
}

function suppliedPassword(request: Request): string | null {
  const header = request.headers.get('authorization')
  if (!header || !header.startsWith('Basic ')) return null
  try {
    const decoded = Buffer.from(header.slice(6), 'base64').toString('utf8')
    const colon = decoded.indexOf(':')
    return colon === -1 ? null : decoded.slice(colon + 1)
  } catch {
    return null
  }
}

function unauthorized() {
  return new Response('Authentication required', {
    status: 401,
    headers: {
      ...noIndexHeaders,
      'WWW-Authenticate': 'Basic realm="Business Heads export", charset="UTF-8"',
    },
  })
}

// Quote every field; neutralise values Excel would treat as a formula.
function csvField(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value
  return `"${safe.replace(/"/g, '""')}"`
}

const dateParts = new Intl.DateTimeFormat('en-AU', {
  timeZone: TIME_ZONE,
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

function hobartDateTime(iso: string | null) {
  if (!iso) return ''
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  const p = Object.fromEntries(dateParts.formatToParts(date).map((x) => [x.type, x.value]))
  return `${p.day}/${p.month}/${p.year} ${p.hour}:${p.minute}`
}

function hobartToday() {
  // en-CA formats as YYYY-MM-DD
  return new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE }).format(new Date())
}

export async function GET(request: Request) {
  const expectedPassword = process.env.LEADS_EXPORT_PASSWORD
  const secretKey = process.env.SUPABASE_SECRET_KEY
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

  if (!expectedPassword || !secretKey || !supabaseUrl) {
    console.error('[interested/export] Missing LEADS_EXPORT_PASSWORD, SUPABASE_SECRET_KEY or NEXT_PUBLIC_SUPABASE_URL')
    return new Response('Export is not configured.', { status: 503, headers: noIndexHeaders })
  }

  const supplied = suppliedPassword(request)
  if (supplied === null || !passwordMatches(supplied, expectedPassword)) {
    return unauthorized()
  }

  const admin = createClient(supabaseUrl, secretKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const rows: LeadRow[] = []
  for (let from = 0; ; from += PAGE_SIZE) {
    const { data, error } = await admin
      .from('leads')
      .select('name, email, business_name, consent, source, submitted_at')
      .eq('source', SOURCE)
      .order('submitted_at', { ascending: true })
      .range(from, from + PAGE_SIZE - 1)

    if (error) {
      console.error('[interested/export] Supabase read error:', error.message)
      return new Response('Could not load sign-ups. Please try again.', { status: 500, headers: noIndexHeaders })
    }
    rows.push(...(data as LeadRow[]))
    if (!data || data.length < PAGE_SIZE) break
  }

  const lines = [
    ['Name', 'Email', 'Business', 'Consent', 'Source', 'Date'].map(csvField).join(','),
    ...rows.map((r) =>
      [
        r.name ?? '',
        r.email ?? '',
        r.business_name ?? '',
        r.consent ? 'Yes' : 'No',
        r.source ?? '',
        hobartDateTime(r.submitted_at),
      ]
        .map(csvField)
        .join(','),
    ),
  ]

  // UTF-8 BOM + CRLF so Excel opens it cleanly (accents, apostrophes etc.).
  const csv = '﻿' + lines.join('\r\n') + '\r\n'
  const filename = `business-show-signups-${hobartToday()}.csv`

  return new Response(csv, {
    status: 200,
    headers: {
      ...noIndexHeaders,
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  })
}
