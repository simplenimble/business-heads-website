'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'
const CIRCLE_LOGIN_URL = 'https://businessheads.circle.so/sign_in'

const NAV_LINKS = [
  { href: '/experience', label: 'Experience' },
  { href: '/benefits', label: 'Benefits' },
  { href: '/events', label: 'Events' },
  { href: '/stories', label: 'Stories' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="font-heading font-semibold text-bh-charcoal text-lg shrink-0">
          Business Heads
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 flex-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm text-bh-charcoal/60 hover:text-bh-charcoal transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <a
            href={CIRCLE_LOGIN_URL}
            className="font-body text-sm text-bh-charcoal/40 hover:text-bh-charcoal/70 transition-colors"
          >
            Member Login
          </a>
          <Button href={JOIN_URL} variant="primary" size="sm">
            Join Business Heads
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-bh-charcoal rounded-full transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-bh-charcoal rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-bh-charcoal rounded-full transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-bh-charcoal"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a href={CIRCLE_LOGIN_URL} className="font-body text-sm text-bh-charcoal/40">
            Member Login
          </a>
          <Button href={JOIN_URL} variant="primary" className="w-full justify-center">
            Join Business Heads
          </Button>
        </div>
      )}
    </header>
  )
}
