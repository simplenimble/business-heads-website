'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'bh-webinar-popup-dismissed-at'
const SHOW_DELAY_MS = 2500
const SUPPRESS_MS = 24 * 60 * 60 * 1000
const REGISTER_URL = '/events/frequent-flyer-webinar'

export function WebinarPopup() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dismissedAt = Number(window.localStorage.getItem(STORAGE_KEY) ?? 0)
    if (Date.now() - dismissedAt < SUPPRESS_MS) return

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const handleClose = () => {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="webinar-popup-heading"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(1,41,93,0.25)]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors text-lg"
        >
          &times;
        </button>

        {/* Hero */}
        <div className="bg-[#01295D] px-8 pt-8 pb-6">
          <div className="flex justify-center mb-5">
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.ibb.co/mVfwXFwh/bramelle-partners-logo.png"
                alt="Bramelle Partners"
                className="h-4 w-auto block"
              />
              <span className="text-[#01295D]/35 text-sm">&times;</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.ibb.co/vCWFWvr4/business-heads-logo.png"
                alt="Business Heads"
                className="h-3 w-auto block"
              />
            </div>
          </div>
          <p className="font-body text-bh-yellow text-xs font-bold uppercase tracking-widest mb-3">
            You&rsquo;re invited
          </p>
          <h2
            id="webinar-popup-heading"
            className="font-heading font-extrabold text-2xl text-white leading-tight mb-1"
          >
            Off the record: Getting real value from your frequent flyer points
          </h2>
        </div>

        {/* Detail strip */}
        <div className="bg-[#011b3d] grid grid-cols-2">
          <div className="px-6 py-4 border-r border-white/10">
            <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1">
              Date
            </p>
            <p className="font-body text-sm text-white/90 font-bold">Thu 20 Aug 2026</p>
          </div>
          <div className="px-6 py-4">
            <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1">
              Time
            </p>
            <p className="font-body text-sm text-white/90 font-bold">12:00&ndash;1:00PM AEST</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#f5f8fc] text-center px-8 py-7">
          <Link
            href={REGISTER_URL}
            onClick={handleClose}
            className="inline-block bg-[#f06925] text-white font-body font-bold text-sm tracking-widest px-9 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </div>
  )
}
