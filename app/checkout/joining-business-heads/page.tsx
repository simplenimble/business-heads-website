import type { Metadata } from 'next'

// 31 August 2026, 1:59 PM UTC — mirrors the API route logic
const FOUNDING_OFFER_EXPIRY = new Date('2026-08-31T13:59:00Z')

const MONTHLY_INCLUDES = [
  'One entry per month into the quarterly $10,000 prize draw',
  'Discounted member tickets to quarterly events',
  'Full access to the member community',
  'Invitations to member-only online events',
  'Member discounts and offers',
]

const ANNUAL_INCLUDES = [
  'Five entries per quarterly $10,000 prize draw (20 per year)',
  'One month free',
  'Discounted member tickets to quarterly events',
  'Full access to the member community',
  'Invitations to member-only online events',
  'Member discounts and offers',
]

export const metadata: Metadata = {
  title: 'Join Business Heads',
  description: 'Choose your Business Heads membership — monthly or annual.',
  robots: { index: false },
}

export default function JoiningCheckoutPage() {
  const showFoundingOffer = new Date() < FOUNDING_OFFER_EXPIRY

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-4">
          Join Business Heads
        </h1>
        <p className="font-body text-lg text-bh-charcoal/60">
          Choose the membership that works for you.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Monthly */}
        <div className="bg-white border border-bh-charcoal/10 rounded-2xl p-8 flex flex-col">
          <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-4">
            Monthly
          </h2>
          <span
            className="font-heading font-semibold text-5xl text-bh-charcoal mb-1"
            style={{ lineHeight: 1 }}
          >
            $220
          </span>
          <p className="font-body text-sm text-bh-charcoal/45 mb-8">per month (inc. GST)</p>
          <ul className="space-y-3 mb-8 flex-1">
            {MONTHLY_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-bh-blue shrink-0 mt-0.5 font-bold">&#10003;</span>
                <span className="font-body text-sm text-bh-charcoal/70 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="/api/checkout?plan=monthly"
            className="block w-full text-center font-body font-semibold text-white py-3.5 px-6 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#ff452b' }}
          >
            Pay now
          </a>
        </div>

        {/* Annual */}
        <div className="bg-white border border-bh-charcoal/10 rounded-2xl p-8 flex flex-col relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span
              className="font-body text-xs font-bold text-white px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap"
              style={{ backgroundColor: '#ff452b' }}
            >
              Most Popular
            </span>
          </div>
          <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-4 mt-2">
            Annual
          </h2>
          <span
            className="font-heading font-semibold text-5xl text-bh-charcoal mb-1"
            style={{ lineHeight: 1 }}
          >
            $2,400
          </span>
          <p className="font-body text-sm text-bh-charcoal/45 mb-5">per year (inc. GST)</p>
          {showFoundingOffer && (
            <div className="rounded-xl bg-bh-yellow px-4 py-3 mb-5">
              <p className="font-body text-sm text-bh-charcoal font-semibold leading-snug">
                30% off until 31 August — pay just $1,680 for your first year.
              </p>
            </div>
          )}
          <ul className="space-y-3 mb-8 flex-1">
            {ANNUAL_INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-bh-blue shrink-0 mt-0.5 font-bold">&#10003;</span>
                <span className="font-body text-sm text-bh-charcoal/70 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="/api/checkout?plan=annual"
            className="block w-full text-center font-body font-semibold text-white py-3.5 px-6 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#ff452b' }}
          >
            Pay now
          </a>
        </div>
      </div>
    </section>
  )
}
