'use client'

import { useState, type KeyboardEvent } from 'react'
import type { EventItem } from '@/content/events'
import { PastEventPhotoCarousel } from './PastEventPhotoCarousel'

export function PastEventsTabs({ events }: { events: EventItem[] }) {
  const months = Array.from(new Set(events.map((e) => e.month)))
  const [month, setMonth] = useState(months[months.length - 1])

  if (events.length === 0) return null

  const focusTab = (i: number) => {
    document.getElementById(`past-event-tab-${i}`)?.focus()
  }

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const next = e.key === 'ArrowRight'
        ? (i + 1) % months.length
        : (i - 1 + months.length) % months.length
      setMonth(months[next])
      focusTab(next)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setMonth(months[0])
      focusTab(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setMonth(months[months.length - 1])
      focusTab(months.length - 1)
    }
  }

  const visibleEvents = events.filter((e) => e.month === month)

  return (
    <div>
      <div role="tablist" aria-label="Past events by month" className="flex flex-wrap gap-2 mb-8">
        {months.map((m, i) => (
          <button
            key={m}
            id={`past-event-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={m === month}
            aria-controls="past-event-panel"
            tabIndex={m === month ? 0 : -1}
            onClick={() => setMonth(m)}
            onKeyDown={(e) => onTabKeyDown(e, i)}
            className={`font-body text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
              m === month
                ? 'bg-bh-yellow text-bh-charcoal'
                : 'border border-white/20 text-white/45 hover:border-white/40 hover:text-white'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div id="past-event-panel" role="tabpanel" aria-labelledby={`past-event-tab-${months.indexOf(month)}`}>
        {visibleEvents.map((event) => (
          <div key={event.id} className="panel-fade-in bg-white/10 rounded-2xl p-8 mb-6 last:mb-0">
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
              {event.venue ? (
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">
                    Venue
                  </p>
                  <p className="font-body text-white/80">
                    {event.venue}, {event.suburb}
                  </p>
                  <p className="font-body text-sm text-white/40">{event.city}</p>
                </div>
              ) : event.host ? (
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">
                    Host
                  </p>
                  <p className="font-body text-white/80">{event.host}</p>
                </div>
              ) : null}
            </div>
            {event.recap && (
              <p className="font-body text-sm text-bh-yellow/85 leading-relaxed">
                {event.recap}
              </p>
            )}
            {event.photos && event.photos.length > 0 && (
              <>
                <PastEventPhotoCarousel photos={event.photos} eventName={event.name} />
                {event.photoCredit && (
                  <div className="mt-6 text-center font-body text-xs text-white/40 leading-relaxed">
                    <p>Photography by {event.photoCredit.name}</p>
                    {event.photoCredit.studio && <p>{event.photoCredit.studio}</p>}
                    {event.photoCredit.url && (
                      <p>
                        <a
                          href={event.photoCredit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white/70 transition-colors"
                        >
                          {event.photoCredit.url.replace(/^https?:\/\//, '')}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
