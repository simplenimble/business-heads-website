import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { experience } from '@/content/experience'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const metadata: Metadata = {
  title: 'The Experience',
  description:
    'What actually happens at Business Heads. In-person events, the online platform, facilitated introductions, and co-coaching circles.',
}

const SPACE_COLORS = [
  { bg: 'bg-bh-yellow',   text: 'text-bh-charcoal', sub: 'text-bh-charcoal/70', icon: 'text-bh-charcoal/40' },
  { bg: 'bg-bh-blue',     text: 'text-white',        sub: 'text-white/70',       icon: 'text-white/40' },
  { bg: 'bg-bh-red',      text: 'text-white',        sub: 'text-white/70',       icon: 'text-white/40' },
  { bg: 'bg-bh-green',    text: 'text-white',        sub: 'text-white/70',       icon: 'text-white/40' },
  { bg: 'bg-bh-charcoal', text: 'text-white',        sub: 'text-white/70',       icon: 'text-white/40' },
]

export default function ExperiencePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-bh-blue px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {experience.hero.overline}
          </p>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-white mb-6 leading-tight max-w-3xl">
            {experience.hero.heading}
          </h1>
          <p className="font-body text-lg text-white/60 max-w-xl">{experience.hero.body}</p>
        </div>
      </section>

      {/* ─── In-person events ─────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            {experience.events.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-6 max-w-xl leading-tight">
            {experience.events.heading}
          </h2>
          <p className="font-body text-lg text-white/65 max-w-2xl mb-14">
            {experience.events.body}
          </p>

          <div className="bg-white/5 rounded-2xl p-8 mb-8 max-w-2xl">
            <p className="font-body text-xs text-white/35 uppercase tracking-widest mb-6">
              {experience.events.format.heading}
            </p>
            <ol className="space-y-6">
              {experience.events.format.steps.map((step, i) => (
                <li key={step.label} className="flex gap-5">
                  <span className="font-heading font-semibold text-bh-yellow/60 text-sm w-5 shrink-0 mt-0.5">
                    {i + 1}.
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-white text-sm mb-1">{step.label}</p>
                    <p className="font-body text-sm text-white/55 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="font-body text-sm text-white/35">{experience.events.detail}</p>
        </div>
      </section>

      {/* ─── The Platform (coloured card grid) ────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
            {experience.platform.overline}
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-bh-charcoal mb-6 max-w-xl leading-tight">
            {experience.platform.heading}
          </h2>
          <p className="font-body text-lg text-bh-charcoal/55 max-w-2xl mb-12">
            {experience.platform.body}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            {experience.platform.spaces.map(({ name, description }, i) => {
              const c = SPACE_COLORS[i % SPACE_COLORS.length]
              return (
                <div key={name} className={`${c.bg} rounded-2xl p-6 flex flex-col gap-4`}>
                  <div className={`w-8 h-8 rounded-full border-2 ${i === 0 ? 'border-bh-charcoal/30' : 'border-white/30'} flex items-center justify-center`}>
                    <span className={`${c.icon} text-lg leading-none`}>+</span>
                  </div>
                  <h3 className={`font-heading font-semibold text-lg ${c.text}`}>{name}</h3>
                  <p className={`font-body text-sm ${c.sub} leading-relaxed`}>{description}</p>
                </div>
              )
            })}
          </div>
          <p className="font-body text-sm text-bh-charcoal/35 italic">{experience.platform.note}</p>
        </div>
      </section>

      {/* ─── Introductions + Coaching ──────────────────────────────────────── */}
      <section className="bg-bh-yellow px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-body text-bh-charcoal/50 text-sm uppercase tracking-widest mb-5">
              {experience.introductions.overline}
            </p>
            <h2 className="font-heading font-semibold text-3xl text-bh-charcoal mb-5 leading-tight">
              {experience.introductions.heading}
            </h2>
            <p className="font-body text-lg text-bh-charcoal/75 mb-5">{experience.introductions.body}</p>
            <p className="font-body text-sm text-bh-charcoal/45 italic">{experience.introductions.detail}</p>
          </div>
          <div>
            <p className="font-body text-bh-charcoal/50 text-sm uppercase tracking-widest mb-5">
              {experience.coaching.overline}
            </p>
            <h2 className="font-heading font-semibold text-3xl text-bh-charcoal mb-5 leading-tight">
              {experience.coaching.heading}
            </h2>
            <p className="font-body text-lg text-bh-charcoal/75 mb-5">{experience.coaching.body}</p>
            <p className="font-body text-sm text-bh-charcoal/45 italic">{experience.coaching.detail}</p>
          </div>
        </div>
      </section>

      {/* ─── What you won't find ───────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-semibold text-2xl text-white mb-8">
            {experience.notHere.heading}
          </h2>
          <ul className="flex flex-wrap gap-3 mb-12">
            {experience.notHere.items.map((item) => (
              <li key={item} className="font-body text-sm text-white/60 border border-white/15 rounded-full px-5 py-2">
                {item}
              </li>
            ))}
          </ul>
          <Button href={JOIN_URL} variant="white">
            Join Business Heads
          </Button>
        </div>
      </section>
    </>
  )
}
