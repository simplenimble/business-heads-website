import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm'
import { home } from '@/content/home'

export const metadata: Metadata = {
  title: 'Business Heads | A Community for Business Owners Who Help Each Other Win',
  description:
    'Not a referral machine. Not a pitch-fest. A community that genuinely pays its members back. $10,000 back to the community every quarter. Sydney, Australia.',
}

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-bh-blue overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
          <div className="px-6 py-24 md:py-32 flex flex-col justify-center">
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-10">
              {home.hero.heading}
            </h1>
            <p className="font-body text-xl text-white/80 max-w-md mb-3 leading-relaxed">
              {home.hero.sub1}
            </p>
            <p className="font-body text-lg text-white/55 max-w-md mb-12 leading-relaxed">
              {home.hero.sub2}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={home.join_url} variant="white" size="lg">
                {home.hero.cta}
              </Button>
              <Button href="/experience" variant="ghost" size="lg">
                Learn more
              </Button>
            </div>
          </div>

          {/* Circle photo with brand icon accents */}
          <div className="hidden lg:flex items-center justify-center px-8 py-16">
            <div className="relative">
              <div className="rounded-full overflow-hidden shrink-0" style={{ width: '560px', height: '560px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/photo-event.jpg"
                  alt="Business Heads members at a networking event"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Top-left: red circle + green lancet */}
              <div className="absolute flex items-center" style={{ top: '-24px', left: '-8px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/shape-red-circle.png" alt="" aria-hidden="true" style={{ width: '118px', height: '118px' }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/shape-green-lancet.png" alt="" aria-hidden="true" style={{ width: '30px', height: '86px', marginLeft: '-20px', position: 'relative', zIndex: 1 }} />
              </div>
              {/* Bottom-right: yellow a shape */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/shape-yellow-a.png" alt="" aria-hidden="true" style={{ position: 'absolute', bottom: '-16px', right: '-16px', width: '136px', height: '136px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── The People ───────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
              {home.people.overline}
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white leading-tight">
              {home.people.heading}
            </h2>
          </div>
          <div>
            <p className="font-body text-lg text-white/65 leading-[1.8] mb-6">
              {home.people.body}
            </p>
            <Link href={home.people.link.href} className="font-body text-sm font-medium text-bh-yellow hover:underline">
              {home.people.link.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── The Prize ────────────────────────────────────────────────────── */}
      <section className="bg-bh-blue px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {home.prize.overline}
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white leading-tight">
              {home.prize.heading}
            </h2>
            <div>
              <p className="font-body text-lg text-white/65 leading-[1.8] mb-6">
                {home.prize.body}
              </p>
              <p className="font-body text-sm text-white/35 italic leading-relaxed">
                {home.prize.footnote}{' '}
                <Link href={home.prize.footnoteLinkHref} className="underline underline-offset-2">
                  {home.prize.footnoteLinkLabel}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
              {home.benefits.overline}
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal leading-tight">
              {home.benefits.heading}
            </h2>
          </div>
          <div>
            <p className="font-body text-lg text-bh-charcoal/60 leading-[1.8] mb-6">
              {home.benefits.body}
            </p>
            <Link href={home.benefits.link.href} className="font-body text-sm font-medium text-bh-blue hover:underline">
              {home.benefits.link.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Who it's for ──────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal border-t border-white/8 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-heading font-semibold text-lg text-white/50 mb-8">
            {home.audience.heading}
          </p>
          <div className="space-y-0 divide-y divide-white/10">
            {home.audience.groups.map(({ heading, body }) => (
              <div key={heading} className="py-7 grid md:grid-cols-[280px_1fr] gap-4 md:gap-10 items-baseline">
                <h3 className="font-heading font-semibold text-xl text-white leading-snug">{heading}</h3>
                <p className="font-body text-white/65 leading-[1.75]">{body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-white/40 italic mt-8">{home.audience.footer}</p>
        </div>
      </section>

      {/* ─── Next event — standalone clickable card ────────────────────────── */}
      <section className="bg-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <a
            href={home.eventProof.link.href}
            className="group flex items-center justify-between gap-8 bg-bh-charcoal rounded-3xl px-10 py-9 hover:bg-bh-blue transition-colors duration-200"
          >
            <div>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3 leading-tight">
                {home.eventProof.heading}
              </h2>
              <p className="font-body text-white/55 leading-relaxed max-w-xl">
                {home.eventProof.body}
              </p>
            </div>
            <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/60 transition-colors text-lg">
              →
            </div>
          </a>
        </div>
      </section>

      {/* ─── Pricing / Founding offer ──────────────────────────────────────── */}
      <section className="border-t border-bh-charcoal/8 px-6 py-24" style={{ backgroundColor: 'rgba(79, 72, 255, 0.07)' }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-body text-bh-charcoal/50 text-sm uppercase tracking-widest mb-4">
            {home.pricing.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-bh-charcoal mb-5 leading-tight">
            {home.pricing.heading}
          </h2>
          <p className="font-body text-lg text-bh-charcoal/65 leading-[1.7] max-w-xl mx-auto">
            {home.pricing.subheading}
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          {home.pricing.plans.map((plan) => (
            <div key={plan.id} className="bg-white border border-bh-charcoal/10 rounded-3xl overflow-hidden flex flex-col relative">
              {/* Most popular badge */}
              {plan.badge && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <span
                    className="font-body text-xs font-bold text-white px-4 py-1.5 rounded-b-full uppercase tracking-widest block"
                    style={{ backgroundColor: '#ff452b' }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                {/* Plan name */}
                <h3 className="font-heading font-semibold text-xl text-bh-charcoal mb-5 mt-3">
                  {plan.name}
                </h3>

                {/* Prices */}
                <div className="mb-1">
                  {plan.foundingPrice ? (
                    <>
                      {/* Original price strikethrough (annual only) */}
                      {plan.originalPrice && (
                        <p className="font-body text-lg text-bh-charcoal/30 line-through mb-1">
                          {plan.originalPrice}
                        </p>
                      )}
                      {/* Regular price struck through — founding price is the deal */}
                      <p className="font-body text-lg text-bh-charcoal/35 line-through mb-1">
                        {plan.price}
                      </p>
                      {/* Founding price — hero number */}
                      <span className="font-heading font-semibold text-bh-charcoal" style={{ fontSize: '3.25rem', lineHeight: 1 }}>
                        {plan.foundingPrice}
                      </span>
                    </>
                  ) : (
                    /* No founding price — regular price is the hero */
                    <span className="font-heading font-semibold text-bh-charcoal" style={{ fontSize: '3.25rem', lineHeight: 1 }}>
                      {plan.price}
                    </span>
                  )}
                </div>
                <p className="font-body text-sm text-bh-charcoal/45 mb-5">{plan.priceNote}</p>

                <p className="font-body text-sm text-bh-charcoal/55 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Founding discount band — annual only */}
                {plan.foundingNote && (
                  <div className="rounded-xl bg-bh-yellow px-4 py-3 mb-6">
                    <p className="font-body text-sm text-bh-charcoal font-semibold leading-snug">
                      {plan.foundingNote}
                    </p>
                  </div>
                )}

                {/* Includes */}
                <p className="font-body text-xs text-bh-charcoal/40 uppercase tracking-widest mb-3">
                  Includes
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-bh-green shrink-0 mt-0.5 font-bold text-sm">&#10003;</span>
                      <span className="font-body text-sm text-bh-charcoal/70 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href={plan.ctaUrl}
                  className="block w-full text-center font-body font-semibold text-white py-3.5 px-6 rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#ff452b' }}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-bh-charcoal/40 text-center">
          {home.pricing.footnote}
        </p>
      </section>

      {/* ─── Lead capture ──────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-md mx-auto text-center">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {home.leadCapture.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl text-white mb-4 leading-tight">
            {home.leadCapture.heading}
          </h2>
          <p className="font-body text-white/55 mb-10 leading-relaxed">{home.leadCapture.body}</p>
          <LeadCaptureForm />
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-bh-blue px-6 py-28 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-body text-white/40 text-lg italic mb-10 leading-relaxed">
            {home.finalCta.quote}
          </p>
          <Button href={home.join_url} variant="white" size="lg">
            {home.finalCta.cta}
          </Button>
        </div>
      </section>
    </>
  )
}
