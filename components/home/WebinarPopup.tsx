'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const SHOW_DELAY_MS = 2500
const REGISTER_URL = '/events/ai-webinar'
const EVENT_URL = `https://www.businessheads.com.au${REGISTER_URL}`
const FORWARD_SUBJECT = "Thought you'd want to see this: AI webinar with Horizon AI"
const FORWARD_BODY = `Hey, thought this might be useful for you.

Off the record: Can AI give you half your week back?
Thu 24 Sep 2026, 11:00am-12:00pm AEST, hosted by Adam Dong (Horizon AI)

Register here: ${EVENT_URL}`
const FORWARD_MAILTO = `mailto:?subject=${encodeURIComponent(FORWARD_SUBJECT)}&body=${encodeURIComponent(FORWARD_BODY)}`

export function WebinarPopup() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleClose()
        return
      }
      if (e.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="webinar-popup-heading"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden border-[3px] border-bh-yellow shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors text-xl"
        >
          &times;
        </button>

        {/* Hero */}
        <div className="bg-bh-horizon-navy px-10 pt-10 pb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full px-7 py-4 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/logo-horizontal.svg" alt="Business Heads" className="h-7 w-auto block" />
              <span className="text-bh-horizon-navy/35 text-lg">&times;</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/horizon-ai-wordmark-navy.png"
                alt="Horizon AI"
                className="h-6 w-auto block"
              />
            </div>
          </div>
          <p className="font-body text-bh-yellow text-xs font-bold uppercase tracking-widest mb-4">
            Free webinar
          </p>
          <h2
            id="webinar-popup-heading"
            className="font-heading font-extrabold text-3xl text-white leading-tight mb-1"
          >
            <span className="text-[#7E8692]">Off the record:</span> Can AI give you half your week
            back?
          </h2>
        </div>

        {/* Detail strip */}
        <div className="bg-bh-horizon-navy border-t border-white/10 grid grid-cols-2">
          <div className="px-8 py-5 border-r border-white/10">
            <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1">
              Date
            </p>
            <p className="font-body text-sm text-white/90 font-bold">Thu 24 Sep 2026</p>
          </div>
          <div className="px-8 py-5">
            <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1">
              Time
            </p>
            <p className="font-body text-sm text-white/90 font-bold">11:00am&ndash;12:00pm AEST</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#f5f8fc] text-center px-10 py-6">
          <p className="font-body text-xs text-gray-400 mb-4">
            Free to attend &middot; Live via Microsoft Teams
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={REGISTER_URL}
              onClick={handleClose}
              className="cta-glow-blue inline-block whitespace-nowrap bg-bh-blue text-white font-body font-bold text-base tracking-widest px-14 py-5 rounded-full hover:-translate-y-0.5 transition-transform"
            >
              REGISTER NOW
            </Link>
            <a
              href={FORWARD_MAILTO}
              className="inline-block whitespace-nowrap bg-transparent text-bh-horizon-navy border-2 border-bh-horizon-navy font-body font-bold text-xs tracking-wide px-6 py-5 rounded-full hover:bg-bh-horizon-navy/5 transition-colors"
            >
              FORWARD TO A FRIEND
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
