'use client'

import { useState } from 'react'

const MONTHS = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DEFAULT_ACTIVE = 'Aug'

/* Visual match for the "What's next" month pills. Purely decorative —
   toggling a pill does not filter the past events listed below. */
export function PastEventsMonthPills() {
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {MONTHS.map((month) => (
        <button
          key={month}
          type="button"
          onClick={() => setActive(month)}
          className={`font-body text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
            month === active
              ? 'bg-bh-yellow text-bh-charcoal'
              : 'border border-white/20 text-white/45 hover:border-white/40 hover:text-white'
          }`}
        >
          {month}
        </button>
      ))}
    </div>
  )
}
