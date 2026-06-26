import type { Metadata } from 'next'
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm'
import { join } from '@/content/join'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

const MONTHLY_INCLUDES = [
  'One entry per month into our $10k prize pool (up to 3 per quarter)',
  'Discount member tickets to our network events',
  'Full member access to our member built community',
  'Invitations to member-only online events',
  'Cash savings and discounts with exclusive member benefits',
]

const ANNUAL_INCLUDES = [
  'Twelve entries into our $10k prize pool each quarter',
  'One month free',
  'Discount member tickets to our network events',
  'Full member access to our member built community',
  'Invitations to member-only online events',
  'Cash savings and discounts with exclusive member benefits',
]

export const metadata: Metadata = {
  title: 'Pricing & Join',
  description:
    '$200/month or $2,200/year. One tier. Join before 31 August to lock in your founding member rate for life.',
}

export default function JoinPage() {
  const { foundingOffer, afterJoining } = join

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
      <section className="bg-white border-t border-bh-charcoal/8 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-heading font-semibold text-2xl md:text-3xl text-bh-charcoal leading-tight mb-6">
            One good introduction. One subscription saved. One conversation that changes your direction.
          </p>
          <p className="font-heading font-semibold text-xl text-bh-charcoal">
            This membership earns its keep.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Monthly */}
          <div className="bg-white border border-bh-charcoal/10 rounded-2xl p-8 flex flex-col">
            <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-4">
              Monthly subscription
            </h2>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-heading font-semibold text-5xl text-bh-charcoal">$200</span>
            </div>
            <span className="inline-block bg-bh-yellow text-bh-charcoal font-body text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              + GST
            </span>
            <p className="font-body text-sm text-bh-charcoal/55 mb-6 leading-relaxed">
              Perfect for business owners who want to dip their toes in and see what we are about
            </p>
            <p className="font-body text-sm text-bh-charcoal/50 mb-3">Includes:</p>
            <ul className="space-y-3 mb-8 flex-1">
              {MONTHLY_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-bh-blue shrink-0 mt-0.5 font-bold">&#10003;</span>
                  <span className="font-body text-sm text-bh-charcoal/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={JOIN_URL}
              className="block w-full text-center font-body font-semibold text-white py-3.5 px-6 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#ff452b' }}
            >
              Purchase Now
            </a>
          </div>

          {/* Annual — most popular */}
          <div className="bg-white border border-bh-charcoal/10 rounded-2xl p-8 flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span
                className="font-body text-xs font-bold text-white px-4 py-1.5 rounded-full uppercase tracking-widest"
                style={{ backgroundColor: '#ff452b' }}
              >
                Most Popular
              </span>
            </div>
            <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-4 mt-2">
              Annual subscription with one month free
            </h2>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-body text-2xl text-bh-charcoal/30 line-through">$2,400</span>
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-heading font-semibold text-5xl text-bh-charcoal">$2,200</span>
            </div>
            <span className="inline-block bg-bh-yellow text-bh-charcoal font-body text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
              + GST
            </span>
            <p className="font-body text-sm text-bh-charcoal/55 mb-6 leading-relaxed">
              Our most popular option, because this network is worth it and why not get a month free
            </p>
            <p className="font-body text-sm text-bh-charcoal/50 mb-3">Includes:</p>
            <ul className="space-y-3 mb-8 flex-1">
              {ANNUAL_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-bh-blue shrink-0 mt-0.5 font-bold">&#10003;</span>
                  <span className="font-body text-sm text-bh-charcoal/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={JOIN_URL}
              className="block w-full text-center font-body font-semibold text-white py-3.5 px-6 rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#ff452b' }}
            >
              Purchase Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── Founding offer ────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-white mb-6 leading-tight">
            {foundingOffer.heading}
          </h2>
          <p className="font-body text-xl text-white/60 mb-10">{foundingOffer.body}</p>
          <a
            href={JOIN_URL}
            className="inline-block font-body font-semibold text-white py-4 px-10 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#ff452b' }}
          >
            Join Business Heads
          </a>
          <p className="font-body text-sm text-white/30 mt-4">
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

      {/* ─── Lead capture ──────────────────────────────────────────────────── */}
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
