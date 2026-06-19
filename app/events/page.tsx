import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { events, eventFormat } from '@/content/events'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming Business Heads events in Sydney. Quarterly evenings for business owners who want conversation, not pitch rounds.',
}

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === 'upcoming')
  const past = events.filter((e) => e.status === 'past')

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">Events</p>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-bh-charcoal mb-6 leading-tight max-w-2xl">
            Quarterly. Sydney.
          </h1>
          <p className="font-body text-lg text-bh-charcoal/55 max-w-xl">
            One evening per quarter. A question-and-connection activity, the quarterly prize draw,
            and open conversation with business owners who are not there to pitch you anything.
          </p>
        </div>
      </section>

      {/* ─── Upcoming events ───────────────────────────────────────────────── */}
      {upcoming.length > 0 && (
        <section className="bg-bh-blue px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
              Upcoming
            </p>
            {upcoming.map((event) => (
              <div key={event.id} className="bg-white/10 rounded-2xl p-8 mb-6 last:mb-0">
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3">
                  {event.name}
                </h2>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
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
                  <div>
                    <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">
                      Tickets
                    </p>
                    <p className="font-body text-white/80">{event.ticketPrice}</p>
                  </div>
                </div>
                {event.rsvpUrl && event.rsvpUrl !== '[RSVP link to be added — Eventbrite or Circle]' ? (
                  <Button href={event.rsvpUrl} variant="secondary" className="border-white text-white hover:bg-white hover:text-bh-blue">
                    RSVP
                  </Button>
                ) : (
                  <p className="font-body text-sm text-white/40 italic">
                    RSVP link coming soon. Register your interest on the homepage to be notified.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Run of the evening (also serves as on-screen agenda) ─────────── */}
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

      {/* ─── Past events ───────────────────────────────────────────────────── */}
      {past.length > 0 && (
        <section className="bg-white px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">
              Past events
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {past.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-bh-charcoal mb-2">{event.name}</h3>
                  <p className="font-body text-sm text-bh-charcoal/50 mb-4">{event.date}</p>
                  {event.recap && (
                    <p className="font-body text-sm text-bh-charcoal/65 leading-relaxed">
                      {event.recap}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-bh-yellow px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading font-semibold text-3xl text-bh-charcoal mb-6">
            Members get in at member price. Join before 31 August.
          </h2>
          <Button href={JOIN_URL} variant="primary">
            Join Business Heads
          </Button>
        </div>
      </section>
    </>
  )
}
