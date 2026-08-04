'use client'

import { useState, type KeyboardEvent } from 'react'
import type { UpcomingEventCard } from '@/content/events'
import { Button } from '@/components/ui/Button'

export function UpcomingEventsTabs({ cards }: { cards: UpcomingEventCard[] }) {
  const [index, setIndex] = useState(0)

  if (cards.length === 0) return null

  const card = cards[index]

  const focusTab = (i: number) => {
    document.getElementById(`event-tab-${i}`)?.focus()
  }

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const next = e.key === 'ArrowRight'
        ? (i + 1) % cards.length
        : (i - 1 + cards.length) % cards.length
      setIndex(next)
      focusTab(next)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setIndex(0)
      focusTab(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setIndex(cards.length - 1)
      focusTab(cards.length - 1)
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="Upcoming events by month" className="flex flex-wrap gap-2 mb-6">
        {cards.map((c, i) => (
          <button
            key={c.id}
            id={`event-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === index}
            aria-controls="upcoming-event-panel"
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
            onKeyDown={(e) => onTabKeyDown(e, i)}
            className={`font-body text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
              i === index
                ? 'bg-bh-yellow text-bh-charcoal'
                : 'border border-bh-charcoal/15 text-bh-charcoal/45 hover:border-bh-charcoal/40 hover:text-bh-charcoal'
            }`}
          >
            {c.tabLabel}
          </button>
        ))}
      </div>

      <div
        key={card.id}
        id="upcoming-event-panel"
        role="tabpanel"
        aria-labelledby={`event-tab-${index}`}
        tabIndex={0}
        className="panel-fade-in bg-bh-charcoal rounded-3xl px-10 py-9"
      >
        {card.label && (
          <p className="font-body text-bh-yellow text-xs uppercase tracking-widest mb-3">
            {card.label}
          </p>
        )}
        {(card.date || card.time) && (
          <p className="font-body text-white/40 text-sm mb-2">
            {[card.date, card.time].filter(Boolean).join(' · ')}
          </p>
        )}
        <h3 className="font-heading font-semibold text-2xl md:text-3xl text-white mb-3 leading-tight min-h-[2.5em] md:min-h-[2em]">
          {card.heading}
        </h3>
        <p className="font-body text-white/55 leading-relaxed max-w-xl">
          {card.body}
        </p>
        {card.subtext && (
          <p className="font-body text-sm text-bh-yellow/70 italic mt-2">
            {card.subtext}
          </p>
        )}
        {card.ctaUrl && (
          <Button href={card.ctaUrl} variant="primary" size="sm" className="mt-6">
            {card.ctaLabel ?? 'Learn more'}
          </Button>
        )}
      </div>
    </div>
  )
}
