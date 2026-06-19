import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { about } from '@/content/about'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Business Heads was started by three business owners tired of networking events that felt transactional. Here is the origin story and the people behind it.',
}

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
            {about.hero.overline}
          </p>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-bh-charcoal leading-tight max-w-3xl">
            {about.hero.heading}
          </h1>
        </div>
      </section>

      {/* ─── Origin story ──────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {about.story.map((para) => (
              <p key={para} className="font-body text-lg text-white/70 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Founders ──────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-10">
            The founders
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {about.founders.map(({ name, role, bio, imagePlaceholder }) => (
              <div key={name}>
                {/* Photo placeholder */}
                <div className="w-full aspect-square bg-bh-pink/20 rounded-2xl mb-6 flex items-end p-4">
                  <p className="font-body text-xs text-bh-charcoal/30 italic">{imagePlaceholder}</p>
                </div>
                <p className="font-body text-xs text-bh-blue uppercase tracking-widest mb-1">
                  {role}
                </p>
                <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-3">{name}</h2>
                <p className="font-body text-sm text-bh-charcoal/65 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vision ────────────────────────────────────────────────────────── */}
      <section className="bg-bh-blue px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-6">
            Our vision
          </p>
          <blockquote>
            <p className="font-heading font-semibold text-2xl md:text-3xl text-white leading-relaxed italic">
              &ldquo;{about.vision}&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-body text-bh-charcoal/40 text-sm mb-8">
            Join before 31 August and lock in your founding member rate.
          </p>
          <Button href={JOIN_URL} variant="primary" size="lg">
            Join Business Heads
          </Button>
        </div>
      </section>
    </>
  )
}
