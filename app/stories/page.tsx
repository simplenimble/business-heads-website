import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { testimonials, storiesHero } from '@/content/stories'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const metadata: Metadata = {
  title: 'Member Stories',
  description:
    'Business Heads members, in their own words. Real voices from business owners who have been part of the community.',
}

export default function StoriesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
            {storiesHero.overline}
          </p>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-bh-charcoal mb-6 leading-tight max-w-2xl">
            {storiesHero.heading}
          </h1>
          <p className="font-body text-lg text-bh-charcoal/55 max-w-xl">{storiesHero.body}</p>
        </div>
      </section>

      {/* ─── Testimonials ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          {testimonials.some((t) => t.type === 'early-feedback') && (
            <p className="font-body text-sm text-bh-charcoal/40 italic mb-10">
              Early feedback from founding members and beta testers. Real member voices will replace
              these post-launch.
            </p>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(({ id, quote, author, business, location, photoPlaceholder }) => (
              <blockquote
                key={id}
                className="bg-white rounded-2xl p-8 flex flex-col justify-between"
              >
                <p className="font-body text-bh-charcoal/75 italic leading-relaxed mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  {photoPlaceholder && (
                    <div className="w-10 h-10 rounded-full bg-bh-pink/30 mb-4 flex items-center justify-center">
                      <span className="font-body text-xs text-bh-charcoal/30">{author[0]}</span>
                    </div>
                  )}
                  <cite className="not-italic">
                    <p className="font-heading font-semibold text-sm text-bh-charcoal">{author}</p>
                    <p className="font-body text-xs text-bh-charcoal/45">
                      {business}, {location}
                    </p>
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-bh-charcoal px-6 py-24 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl text-white mb-6">
            Add your story.
          </h2>
          <p className="font-body text-white/50 mb-10">
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
