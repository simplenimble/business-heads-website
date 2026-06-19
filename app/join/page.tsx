import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm'
import { join } from '@/content/join'

export const metadata: Metadata = {
  title: 'Pricing & Join',
  description:
    '$200/month or $2,200/year. One tier. Join before 31 August to lock in your founding member rate for life.',
}

export default function JoinPage() {
  const { pricing, foundingOffer, afterJoining, cta } = join

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {join.hero.overline}
          </p>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-white leading-tight max-w-xl">
            {join.hero.heading}
          </h1>
        </div>
      </section>

      {/* ─── Pricing ───────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {/* Monthly */}
            <div className="border-2 border-black/10 rounded-2xl p-8">
              <p className="font-body text-sm text-bh-charcoal/40 mb-2">{pricing.monthly.label}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading font-semibold text-5xl text-bh-charcoal">
                  {pricing.monthly.price}
                </span>
                <span className="font-body text-bh-charcoal/50">{pricing.monthly.period}</span>
              </div>
              <p className="font-body text-sm text-bh-charcoal/40">{pricing.monthly.note}</p>
            </div>
            {/* Annual */}
            <div className="bg-bh-blue rounded-2xl p-8">
              <p className="font-body text-sm text-bh-yellow mb-2">{pricing.annual.label}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading font-semibold text-5xl text-white">
                  {pricing.annual.price}
                </span>
                <span className="font-body text-white/60">{pricing.annual.period}</span>
              </div>
              <p className="font-body text-sm text-white/50">{pricing.annual.note}</p>
            </div>
          </div>

          {/* What's included */}
          <div>
            <p className="font-body text-xs text-bh-charcoal/40 uppercase tracking-widest mb-5">
              Both plans include
            </p>
            <ul className="space-y-3 mb-12">
              {pricing.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-bh-green shrink-0 mt-0.5">&#10003;</span>
                  <span className="font-body text-bh-charcoal/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button href={cta.url} variant="primary" size="lg">
            {cta.primary}
          </Button>
        </div>
      </section>

      {/* ─── Founding offer ────────────────────────────────────────────────── */}
      <section className="bg-bh-yellow px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-bh-charcoal mb-6 leading-tight">
            {foundingOffer.heading}
          </h2>
          <p className="font-body text-xl text-bh-charcoal/70 mb-10">{foundingOffer.body}</p>
          <Button href={cta.url} variant="primary" size="lg">
            {cta.primary}
          </Button>
          <p className="font-body text-sm text-bh-charcoal/40 mt-4">
            Deadline: {foundingOffer.deadline}
          </p>
        </div>
      </section>

      {/* ─── What happens after ────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-semibold text-2xl text-bh-charcoal mb-8">
            {afterJoining.heading}
          </h2>
          <ol className="space-y-5 mb-10">
            {afterJoining.steps.map((step, i) => (
              <li key={step} className="flex gap-5">
                <span className="font-heading font-semibold text-bh-blue/50 shrink-0 w-5 mt-0.5">
                  {i + 1}.
                </span>
                <p className="font-body text-bh-charcoal/70">{step}</p>
              </li>
            ))}
          </ol>
          <p className="font-body text-sm text-bh-charcoal/35 italic">{afterJoining.note}</p>
        </div>
      </section>

      {/* ─── Lead capture (for people not quite ready) ─────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-20">
        <div className="max-w-md mx-auto text-center">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            Not ready yet?
          </p>
          <h2 className="font-heading font-semibold text-2xl text-white mb-4">
            Register your interest.
          </h2>
          <p className="font-body text-white/50 mb-10 text-sm">
            No commitment. We will be in touch before the founding rate closes.
          </p>
          <LeadCaptureForm />
        </div>
      </section>
    </>
  )
}
