import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/*
 * Event sign-ups from the hidden /interested page. Saves into the same `leads`
 * table as the homepage form, tagged with source 'Business Show'.
 * Needs the consent/source columns added in Supabase (see the SQL in the PR notes).
 * submitted_at is filled in by the database.
 */

const SOURCE = 'Business Show'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; businessName?: string; consent?: boolean }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim().toLowerCase()
  const businessName = body.businessName?.trim() || null

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: 'Consent is required' }, { status: 400 })
  }

  const { error } = await supabase.from('leads').insert({
    name,
    email,
    business_name: businessName,
    consent: true,
    source: SOURCE,
  })

  if (error) {
    console.error('[interested] Supabase insert error:', error.message)
    return NextResponse.json({ error: 'Failed to save. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
