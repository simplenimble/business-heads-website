import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const ANNUAL_PRICE_ID = 'price_1TnsA03M9uP4QmIUVkTShwAy'
const ANNUAL_PROMO_ID = 'promo_1TnsHo3M9uP4QmIU'

// 31 August 2026, 1:59 PM UTC
const FOUNDING_OFFER_EXPIRY = new Date('2026-08-31T13:59:00Z')

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const plan = searchParams.get('plan')

  if (plan !== 'annual') {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const origin = process.env.NEXT_PUBLIC_BASE_URL ?? `https://${req.headers.get('host')}`

  const applyPromo = new Date() < FOUNDING_OFFER_EXPIRY

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: ANNUAL_PRICE_ID, quantity: 1 }],
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/join`,
    ...(applyPromo ? { discounts: [{ promotion_code: ANNUAL_PROMO_ID }] } : {}),
  })

  return NextResponse.redirect(session.url!)
}
