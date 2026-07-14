'use client'

import { useEffect, useState } from 'react'
import type { UpcomingEventCard } from '@/content/events'

const AUTO_SWIPE_MS = 5000

export function UpcomingEventsCarousel({ cards }: { cards: UpcomingEventCard[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (cards.length <= 1) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % cards.length)
    }, AUTO_SWIPE_MS)
    return () => clearInterval(timer)
  }, [cards.length])

  if (cards.length === 0) return null

  const card = cards[index]
  const goPrev = () => setIndex((i) => (i - 1 + cards.length) % cards.length)
  const goNext = () => setIndex((i) => (i + 1) % cards.length)

  return (
    <div className="bg-bh-charcoal rounded-3xl px-10 py-9">
      {card.label && (
        <p className="font-body text-bh-yellow text-xs uppercase tracking-widest mb-3">
          {card.label}
        </p>
      )}
      <h3 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3 leading-tight min-h-[2.5em] md:min-h-[2em]">
        {card.heading}
      </h3>
      <p className="font-body text-white/55 leading-relaxed max-w-xl mb-8">
        {card.body}
      </p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous event"
          className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors text-lg"
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next event"
          className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors text-lg"
        >
          &rarr;
        </button>

        <div className="flex gap-1.5 ml-2">
          {cards.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${c.heading}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === index ? 'bg-bh-yellow' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
