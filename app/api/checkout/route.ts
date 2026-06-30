import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const MONTHLY_PRICE_ID = 'price_1TK7813M9uP4QmlUv31g9KCt'
const ANNUAL_PRICE_ID = 'price_1TnsA03M9uP4QmlUVkTShwAy'
const ANNUAL_PROMO_ID = 'promo_1TnsHo3M9uP4QmlUcZs6cfyQ'

// 31 August 2026, 1:59 PM UTC
const FOUNDING_OFFER_EXPIRY = new Date('2026-08-31T13:59:00Z')

export async function GET(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const { searchParams } = req.nextUrl
  const plan = searchParams.get('plan')

  if (plan !== 'annual' && plan !== 'monthly') {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const origin = process.env.NEXT_PUBLIC_BASE_URL ?? `https://${req.headers.get('host')}`

  const priceId = plan === 'annual' ? ANNUAL_PRICE_ID : MONTHLY_PRICE_ID
  const applyPromo = plan === 'annual' && new Date() < FOUNDING_OFFER_EXPIRY

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout/joining-business-heads`,
    ...(applyPromo ? { discounts: [{ promotion_code: ANNUAL_PROMO_ID }] } : {}),
  })

  return NextResponse.redirect(session.url!)
}
