import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { benefits } from '@/content/benefits'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const metadata: Metadata = {
  title: 'Member Benefits',
  description:
    'Member discounts, the directory, learning sessions, co-coaching circles, and facilitated introductions. The rational case for $200 a month.',
}

export default function BenefitsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
            {benefits.hero.overline}
          </p>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-bh-charcoal mb-6 leading-tight max-w-2xl">
            {benefits.hero.heading}
          </h1>
          <p className="font-body text-lg text-bh-charcoal/55 max-w-xl">{benefits.hero.body}</p>
        </div>
      </section>

      {/* ─── Benefits list ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.items.map(({ id, heading, subheading, body, detail }) => (
              <div key={id} className="bg-white rounded-2xl p-8">
                <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-1">
                  {heading}
                </h2>
                {subheading && (
                  <p className="font-body text-xs text-bh-charcoal/35 mb-4">{subheading}</p>
                )}
                {!subheading && <div className="mb-4" />}
                <p className="font-body text-bh-charcoal/70 mb-4 leading-relaxed">{body}</p>
                <p className="font-body text-sm text-bh-charcoal/40 italic leading-relaxed">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl text-white mb-6">
            Join before 31 August. Lock in your founding rate.
          </h2>
          <p className="font-body text-white/50 mb-10">
            $200/month or $2,200/year. One tier, one price. Cancel any time.
          </p>
          <Button href={JOIN_URL} variant="primary" size="lg">
            Join Business Heads
          </Button>
        </div>
      </section>
    </>
  )
}
