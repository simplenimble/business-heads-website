import type { Metadata } from 'next'
import Link from 'next/link'
import { events, upcomingEventCards, eventFormat, eventsHero, eventsIntro } from '@/content/events'
import { testimonials } from '@/content/stories'
import { UpcomingEventsCarousel } from '@/components/events/UpcomingEventsCarousel'
import { Button } from '@/components/ui/Button'

const JOIN_URL = '/join'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming Business Heads events in Sydney. Quarterly evenings for business owners who want conversation, not pitch rounds.',
}

export default function EventsPage() {
  const past = events.filter((e) => e.status === 'past')

  return (
    <>
      {/* Hero */}
      <section className="bg-bh-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
          <div className="px-6 py-24 md:py-32">
            <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
              {eventsHero.overline}
            </p>
            <h1 className="font-heading font-semibold text-4xl md:text-6xl text-white mb-6 leading-tight max-w-xl">
              {eventsHero.heading}
            </h1>
            <p className="font-body text-lg text-white/55 max-w-md leading-relaxed">
              {eventsHero.body}
            </p>
          </div>

          <div className="relative h-72 lg:h-auto lg:min-h-[520px] hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photo-experience-hero.png"
              alt="Business Heads members at an evening event"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-bh-charcoal/20" />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-bh-charcoal leading-tight">
            {eventsIntro.heading}
          </h2>
          <div>
            <p className="font-body text-bh-charcoal/65 leading-[1.8] mb-5">
              {eventsIntro.body}
            </p>
            <Link
              href={eventsIntro.link.href}
              className="font-body text-sm font-medium text-bh-blue hover:underline"
            >
              {eventsIntro.link.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Past events */}
      {past.length > 0 && (
        <section className="bg-bh-blue px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl text-white mb-10">
              Past events
            </h2>
            {past.map((event) => (
              <div key={event.id} className="bg-white/10 rounded-2xl p-8 mb-6 last:mb-0">
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-6">
                  {event.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">
                      Date
                    </p>
                    <p className="font-body text-white/80">{event.date}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">
                      Venue
                    </p>
                    <p className="font-body text-white/80">
                      {event.venue}, {event.suburb}
                    </p>
                    <p className="font-body text-sm text-white/40">{event.city}</p>
                  </div>
                </div>
                {event.recap && (
                  <p className="font-body text-sm text-bh-yellow/85 leading-relaxed">
                    {event.recap}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What's next */}
      {upcomingEventCards.length > 0 && (
        <section className="bg-white px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl text-bh-charcoal mb-5">
              What&rsquo;s next
            </h2>
            <p className="font-body text-lg text-bh-charcoal/60 leading-relaxed mb-10">
              More events on the way.
            </p>
            <UpcomingEventsCarousel cards={upcomingEventCards} />
          </div>
        </section>
      )}

      {/* Format */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            The format
          </p>
          <h2 className="font-heading font-semibold text-3xl text-white mb-10">
            What happens on the night.
          </h2>
          <div className="max-w-xl">
            {eventFormat.map(({ time, description }, i) => (
              <div
                key={time}
                className={`flex gap-6 pb-8 ${i < eventFormat.length - 1 ? 'border-b border-white/10 mb-8' : ''}`}
              >
                <div className="font-heading font-semibold text-bh-yellow/60 text-sm w-6 shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white mb-2">{time}</p>
                  <p className="font-body text-sm text-white/55 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In their words */}
      {testimonials.filter(t => t.type === 'member').length > 0 && (
        <section className="bg-bh-charcoal px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-10">
              In their words
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.filter(t => t.type === 'member').map(({ id, quote, author, business, location }) => (
                <blockquote key={id} className="bg-white/8 rounded-2xl p-8 flex flex-col justify-between">
                  <p className="font-body text-white/75 italic leading-relaxed mb-8">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <cite className="not-italic">
                    <p className="font-heading font-semibold text-sm text-white">{author}</p>
                    <p className="font-body text-xs text-white/40">{business}, {location}</p>
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white border-t border-bh-charcoal/8 px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl text-bh-charcoal mb-6">
            Join before 31 August for 30% off your first annual subscription.
          </h2>
          <Button href={JOIN_URL} variant="primary">
            Join Business Heads
          </Button>
        </div>
      </section>
    </>
  )
}
