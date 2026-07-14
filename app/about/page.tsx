import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { about } from '@/content/about'

const JOIN_URL = '/join'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Business Heads was started by three business owners tired of networking events that felt transactional. Here is the origin story and the people behind it.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero image - full width */}
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={about.hero.image}
          alt="Business Heads community event"
          className="w-full h-auto block"
        />
      </div>

      {/* Story */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-3xl mx-auto">

          {/* Opening hook - large heading */}
          <h1 className="font-heading font-semibold text-3xl md:text-5xl text-white leading-tight mb-12">
            {about.hero.heading}
          </h1>

          {/* Opening paragraphs */}
          <div className="space-y-5 mb-12">
            {about.storyOpening.map((para) => (
              <p key={para} className="font-body text-lg text-white/70 leading-[1.8]">{para}</p>
            ))}
          </div>

          {/* Three punchy highlight lines */}
          <div className="border-l-2 border-bh-yellow/50 pl-6 space-y-4 mb-12">
            {about.storyHighlights.map((line) => (
              <p key={line} className="font-body text-lg text-white/85 leading-relaxed italic">{line}</p>
            ))}
          </div>

          {/* Origin */}
          <div className="space-y-5 mb-12">
            {about.storyOrigin.map((para) => (
              <p key={para} className="font-body text-lg text-white/70 leading-[1.8]">{para}</p>
            ))}
          </div>

          {/* Emphatic line */}
          <p className="font-heading font-semibold text-2xl md:text-3xl text-bh-yellow mb-12 leading-tight">
            {about.storyMissing}
          </p>

          {/* Community paragraphs */}
          <div className="space-y-5 mb-10">
            {about.storyCommunity.map((para) => (
              <p key={para} className="font-body text-lg text-white/70 leading-[1.8]">{para}</p>
            ))}
          </div>

          {/* Growth */}
          <p className="font-body text-white/50 mb-10 leading-relaxed">{about.storyGrowth}</p>

          {/* Closing statement */}
          <p className="font-heading font-semibold text-2xl md:text-3xl text-white leading-tight">
            {about.storyClosing}
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-10">
            The founders
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {about.founders.map(({ name, role, bio, photo }) => (
              <div key={name}>
                <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden bg-bh-pink/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-body text-xs text-bh-blue uppercase tracking-widest mb-1">
                  {role}
                </p>
                <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-3">{name}</h2>
                <p className="font-body text-sm text-bh-charcoal/65 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center font-body text-xs text-bh-charcoal/40 leading-relaxed">
            <p>Founder portraits by Oscar Colman</p>
            <p>
              <a
                href="https://oscarcolman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bh-charcoal/70 transition-colors"
              >
                oscarcolman.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
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

      {/* CTA */}
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
