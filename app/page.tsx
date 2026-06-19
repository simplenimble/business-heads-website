import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm'
import { home } from '@/content/home'

export const metadata: Metadata = {
  title: 'Business Heads | A Community for Business Owners Who Help Each Other Win',
  description:
    'Not a referral machine. Not a pitch-fest. A community that genuinely pays its members back. $10,000 to the community every quarter. Sydney, Australia.',
}

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-sm text-bh-charcoal/40 uppercase tracking-widest mb-8">
            {home.hero.overline}
          </p>
          <h1 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bh-charcoal leading-tight mb-10">
            {home.hero.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-bh-blue">{home.hero.highlight}</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-bh-charcoal/70 max-w-2xl mb-3">
            {home.hero.sub1}
          </p>
          <p className="font-body text-lg text-bh-charcoal/50 max-w-2xl mb-14">
            {home.hero.sub2}
          </p>
          <Button href={home.join_url} variant="primary" size="lg">
            {home.hero.cta}
          </Button>
        </div>
      </section>

      {/* ─── The People ───────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {home.people.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-10 max-w-xl leading-tight">
            {home.people.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5">
              {home.people.body.map((para) => (
                <p key={para} className="font-body text-lg text-white/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <blockquote className="border-l-4 border-bh-yellow pl-6 flex flex-col justify-center">
              <p className="font-body text-lg text-white/80 italic mb-4">
                {home.people.testimonialPlaceholder}
              </p>
              <cite className="font-body text-sm text-white/40 not-italic">
                {home.people.testimonialAuthorPlaceholder}
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── The Prize ─────────────────────────────────────────────────────── */}
      <section className="bg-bh-blue px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
                {home.prize.overline}
              </p>
              <p className="font-heading font-semibold text-8xl md:text-9xl text-white leading-none mb-3">
                {home.prize.number}
              </p>
              <p className="font-body text-xl text-white/70">{home.prize.tagline}</p>
            </div>
            <div>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-6 leading-tight">
                {home.prize.heading}
              </h2>
              <div className="space-y-4 mb-6">
                {home.prize.body.map((para) => (
                  <p key={para} className="font-body text-lg text-white/70">
                    {para}
                  </p>
                ))}
              </div>
              <p className="font-body text-sm text-white/40">{home.prize.footnote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Benefits ──────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
            {home.benefits.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-12 max-w-lg leading-tight">
            {home.benefits.heading}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            {home.benefits.items.map(({ title, body }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-base text-bh-charcoal mb-2">
                  {title}
                </h3>
                <p className="font-body text-sm text-bh-charcoal/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <Link href={home.benefits.link.href} className="font-body text-sm text-bh-blue hover:underline">
            {home.benefits.link.label} &rarr;
          </Link>
        </div>
      </section>

      {/* ─── Who it's for ──────────────────────────────────────────────────── */}
      <section className="bg-bh-pink/15 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-12 max-w-xl leading-tight">
            {home.audience.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {home.audience.groups.map(({ heading, body }) => (
              <div key={heading} className="bg-white rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-xl text-bh-charcoal mb-5">
                  {heading}
                </h3>
                <div className="space-y-4">
                  {body.map((para) => (
                    <p key={para} className="font-body text-bh-charcoal/65 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-bh-charcoal/40 italic">{home.audience.footer}</p>
        </div>
      </section>

      {/* ─── Event proof ───────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
            {home.eventProof.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-4">
            {home.eventProof.heading}
          </h2>
          <p className="font-body text-bh-charcoal/55 mb-10 max-w-lg">{home.eventProof.body}</p>
          <div className="bg-gray-50 rounded-2xl p-7 inline-block mb-6">
            <p className="font-body text-xs text-bh-charcoal/40 uppercase tracking-widest mb-4">
              What to expect on the night
            </p>
            <ul className="space-y-3">
              {home.eventProof.format.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-bh-charcoal/75">
                  <span className="text-bh-green mt-0.5 shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href={home.eventProof.link.href} className="font-body text-sm text-bh-blue hover:underline">
              {home.eventProof.link.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Founding offer ────────────────────────────────────────────────── */}
      <section className="bg-bh-yellow px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-bh-charcoal/50 text-sm uppercase tracking-widest mb-6">
            {home.foundingOffer.overline}
          </p>
          <h2 className="font-heading font-semibold text-4xl md:text-6xl text-bh-charcoal mb-6 leading-tight">
            {home.foundingOffer.heading}
          </h2>
          <p className="font-body text-xl text-bh-charcoal/70 mb-10 max-w-md mx-auto">
            {home.foundingOffer.body}
          </p>
          <Button href={home.join_url} variant="primary" size="lg">
            {home.foundingOffer.cta}
          </Button>
          <p className="font-body text-sm text-bh-charcoal/40 mt-5">{home.foundingOffer.footnote}</p>
        </div>
      </section>

      {/* ─── Lead capture ──────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-md mx-auto text-center">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {home.leadCapture.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl text-white mb-4">
            {home.leadCapture.heading}
          </h2>
          <p className="font-body text-white/50 mb-10">{home.leadCapture.body}</p>
          <LeadCaptureForm />
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-28 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-body text-bh-charcoal/35 text-sm italic mb-8">
            {home.finalCta.quote}
          </p>
          <Button href={home.join_url} variant="primary" size="lg">
            {home.finalCta.cta}
          </Button>
        </div>
      </section>
    </>
  )
}
