import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { experience } from '@/content/experience'

const JOIN_URL = '/join'

const SPACE_COLORS = [
  { bg: 'bg-bh-blue',     text: 'text-white',        sub: 'text-white/70' },
  { bg: 'bg-bh-red',      text: 'text-white',        sub: 'text-white/70' },
  { bg: 'bg-bh-green',    text: 'text-white',        sub: 'text-white/70' },
  { bg: 'bg-bh-charcoal', text: 'text-white',        sub: 'text-white/70' },
  { bg: 'bg-gray-100',    text: 'text-bh-charcoal',  sub: 'text-bh-charcoal/60' },
]

const BENEFIT_COLORS = [
  { bg: 'bg-bh-blue',  text: 'text-white', sub: 'text-white/70' },
  { bg: 'bg-bh-green', text: 'text-white', sub: 'text-white/70' },
  { bg: 'bg-bh-red',   text: 'text-white', sub: 'text-white/70' },
]

export const metadata: Metadata = {
  title: 'The Experience',
  description:
    'What actually happens at Business Heads. In-person events, the quarterly prize draw, the online platform, facilitated introductions, and co-coaching circles.',
}

export default function ExperiencePage() {
  const connectionBenefits = experience.softBenefits.items.filter(
    (item) => item.id !== 'discounts'
  )

  return (
    <>
      {/* â”€â”€â”€ Hero â€” split with professional conversation photo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-bh-blue overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
          <div className="px-6 py-24 md:py-32">
            <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
              {experience.hero.overline}
            </p>
            <h1 className="font-heading font-semibold text-4xl md:text-6xl text-white mb-8 leading-tight max-w-xl">
              {experience.hero.heading}
            </h1>
            <p className="font-body text-lg text-white/60 max-w-md leading-[1.8]">
              {experience.hero.body}
            </p>
          </div>

          <div className="relative h-72 lg:h-auto lg:min-h-[560px] hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photo-experience-event.png"
              alt="Business Heads members in conversation at an event"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-bh-blue/15" />
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Origin / Why members stay â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {experience.origin.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-10 max-w-xl leading-tight">
            {experience.origin.heading}
          </h2>

          {/* Body paragraphs */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {experience.origin.body.slice(0, 2).map((para) => (
              <p key={para} className="font-body text-white/65 leading-[1.8]">{para}</p>
            ))}
          </div>

          {/* Feature pull quote â€” only shown if content provides a third paragraph */}
          {experience.origin.body[2] && (
            <div className="border-t border-white/15 pt-10">
              <p
                className="font-heading font-semibold text-bh-yellow leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
              >
                {experience.origin.body[2]}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* â”€â”€â”€ Events â€” split with dark bar photo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
          {/* Dark bar photo â€” left */}
          <div className="relative h-72 lg:h-auto lg:min-h-[600px] hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photo-experience-hero.png"
              alt="Business Heads members at an evening event"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Text â€” right */}
          <div className="px-6 lg:px-16 py-24">
            <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
              {experience.events.overline}
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-8 leading-tight max-w-md">
              {experience.events.heading}
            </h2>
            <div className="space-y-5 mb-10">
              {experience.events.body.map((para) => (
                <p key={para} className="font-body text-bh-charcoal/65 leading-[1.8]">{para}</p>
              ))}
            </div>

            <div className="bg-bh-yellow/15 rounded-2xl p-6 mb-6">
              <p className="font-body text-xs text-bh-charcoal/40 uppercase tracking-widest mb-5">
                {experience.events.format.heading}
              </p>
              <ol className="space-y-5">
                {experience.events.format.steps.map((step, i) => (
                  <li key={step.label} className="flex gap-4">
                    <span className="font-heading font-semibold text-bh-blue/50 text-sm w-5 shrink-0 mt-0.5">
                      {i + 1}.
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-bh-charcoal text-sm mb-0.5">{step.label}</p>
                      <p className="font-body text-sm text-bh-charcoal/55 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className="font-body text-sm text-bh-charcoal/35">{experience.events.detail}</p>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Prize draw â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-bh-blue px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-6">
            {experience.prize.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-10 leading-tight max-w-2xl">
            {experience.prize.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-10 border-t border-white/15 pt-10">
            <div className="space-y-5">
              {experience.prize.body.map((para) => (
                <p key={para} className="font-body text-white/65 leading-[1.8]">{para}</p>
              ))}
            </div>
            <div className="flex md:items-end">
              <p className="font-body text-sm text-white/30 italic">
                {experience.prize.footnote}{' '}
                <Link href={experience.prize.footnoteLinkHref} className="underline underline-offset-2">
                  {experience.prize.footnoteLinkLabel}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Between Events â€” platform + connection, visually linked â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-white border-t border-bh-charcoal/8 px-6 pt-24 pb-24">

        {/* Platform â€” the Circle spaces */}
        <div className="max-w-5xl mx-auto mb-0">
          <p className="font-body text-bh-charcoal/50 text-sm uppercase tracking-widest mb-5">
            {experience.platform.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-6 max-w-xl leading-tight">
            {experience.platform.heading}
          </h2>
          <p className="font-body text-lg text-bh-charcoal/65 max-w-2xl mb-10 leading-[1.8]">
            {experience.platform.body}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {experience.platform.spaces.map(({ name, description }, i) => {
              const c = SPACE_COLORS[i % SPACE_COLORS.length]
              return (
                <div key={name} className={`${c.bg} rounded-2xl p-6 flex flex-col gap-3`}>
                  <h3 className={`font-heading font-semibold text-base ${c.text}`}>{name}</h3>
                  <p className={`font-body text-sm ${c.sub} leading-relaxed`}>{description}</p>
                </div>
              )
            })}
          </div>
          <p className="font-body text-sm text-bh-charcoal/35 italic mb-0">{experience.platform.note}</p>
        </div>

        {/* "+" connector â€” visually joins platform and connection sections */}
        <div className="max-w-5xl mx-auto flex items-center gap-5 py-12">
          <div className="flex-1 h-px bg-bh-charcoal/15" />
          <div className="w-11 h-11 rounded-full border-2 border-bh-charcoal/25 bg-bh-yellow flex items-center justify-center shrink-0">
            <span className="font-heading font-semibold text-bh-charcoal/40 text-xl leading-none">+</span>
          </div>
          <div className="flex-1 h-px bg-bh-charcoal/15" />
        </div>

        {/* Connection that goes somewhere â€” 3 tiles only, no discounts */}
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-charcoal/50 text-sm uppercase tracking-widest mb-5">
            {experience.softBenefits.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-10 max-w-xl leading-tight">
            {experience.softBenefits.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {connectionBenefits.map(({ id, heading, body }, i) => {
              const c = BENEFIT_COLORS[i % BENEFIT_COLORS.length]
              return (
                <div key={id} className={`${c.bg} rounded-2xl p-8 flex flex-col`}>
                  <h3 className={`font-heading font-semibold text-xl ${c.text} mb-4`}>{heading}</h3>
                  <p className={`font-body text-sm ${c.sub} leading-[1.75]`}>{body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ Ethos + Join CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-5 leading-tight">
            {experience.ethos.heading}
          </h2>
          <p className="font-body text-white/55 leading-[1.8] max-w-xl mx-auto mb-12">
            {experience.ethos.body}
          </p>
          <Button href={JOIN_URL} variant="white" size="lg">
            Join Business Heads
          </Button>
        </div>
      </section>
    </>
  )
}

