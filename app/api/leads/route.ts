import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

/*
 * Supabase setup — run this once in the Supabase SQL editor before going live:
 *
 * CREATE TABLE leads (
 *   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name text NOT NULL,
 *   email text NOT NULL,
 *   business_name text NOT NULL,
 *   submitted_at timestamptz DEFAULT now() NOT NULL
 * );
 * ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
 * CREATE POLICY "Allow anonymous inserts" ON leads
 *   FOR INSERT TO anon WITH CHECK (true);
 *
 * Email notification: set LEAD_NOTIFICATION_EMAIL in .env.local and wire up
 * an email service (Resend recommended) once the recipient address is confirmed.
 */

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; businessName?: string }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { name, email, businessName } = body

  if (!name?.trim() || !email?.trim() || !businessName?.trim()) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const { error } = await supabase.from('leads').insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    business_name: businessName.trim(),
  })

  if (error) {
    console.error('[leads] Supabase insert error:', error.message)
    return NextResponse.json({ error: 'Failed to save. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
