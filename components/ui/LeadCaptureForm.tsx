'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

type Props = {
  dark?: boolean  // true = dark/charcoal background (default), false = light/yellow background
}

export function LeadCaptureForm({ dark = true }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, businessName }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-2xl px-8 py-10 text-center ${dark ? 'bg-white/10' : 'bg-white'}`}>
        <p className={`font-heading font-semibold text-xl mb-2 ${dark ? 'text-white' : 'text-bh-charcoal'}`}>
          Got it. Thank you.
        </p>
        <p className={`font-body text-sm ${dark ? 'text-white/60' : 'text-bh-charcoal/60'}`}>
          We will be in touch before the founding rate closes.
        </p>
      </div>
    )
  }

  const labelClass = `block font-body text-sm mb-1.5 ${dark ? 'text-white/50' : 'text-bh-charcoal/60'}`
  const inputClass = dark
    ? 'w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-bh-blue transition-colors'
    : 'w-full rounded-xl bg-white border border-bh-charcoal/15 px-4 py-3 font-body text-sm text-bh-charcoal placeholder:text-bh-charcoal/30 focus:outline-none focus:border-bh-blue transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="lcf-name" className={labelClass}>Your name</label>
        <input
          id="lcf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Amy Kelley"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lcf-email" className={labelClass}>Email address</label>
        <input
          id="lcf-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="lcf-business" className={labelClass}>Business name</label>
        <input
          id="lcf-business"
          type="text"
          required
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Your Business"
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <p className="font-body text-sm text-bh-red">
          Something went wrong. Try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-bh-blue text-white font-heading font-semibold py-3 text-base hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Registering...' : 'Register your interest'}
      </button>
    </form>
  )
}
