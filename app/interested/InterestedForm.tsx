'use client'

import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const labelClass = 'block font-body text-sm mb-1.5 text-white/60'
const inputClass =
  'w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3.5 font-body text-base text-white placeholder:text-white/30 focus:outline-none focus:border-bh-blue transition-colors'

export function InterestedForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/interested', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, businessName, consent }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setName('')
    setEmail('')
    setBusinessName('')
    setConsent(false)
    setStatus('idle')
    window.scrollTo({ top: 0 })
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white/10 px-6 py-10 text-center" role="status">
        <p className="font-heading font-semibold text-2xl text-white mb-2">
          Thanks, you&rsquo;re on the list!
        </p>
        <p className="font-body text-sm text-white/60 mb-8">We will be in touch about upcoming events.</p>
        <button
          type="button"
          onClick={reset}
          className="w-full rounded-full bg-bh-yellow text-bh-charcoal font-heading font-semibold py-3.5 text-base hover:opacity-90 active:scale-[0.98] transition-all"
        >
          Add another person
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div>
        <label htmlFor="int-name" className={labelClass}>Name</label>
        <input
          id="int-name"
          type="text"
          required
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="int-email" className={labelClass}>Email</label>
        <input
          id="int-email"
          type="email"
          inputMode="email"
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="int-business" className={labelClass}>
          Business name <span className="text-white/35">(optional)</span>
        </label>
        <input
          id="int-business"
          type="text"
          autoComplete="off"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className={inputClass}
        />
      </div>

      <label htmlFor="int-consent" className="flex items-start gap-3 cursor-pointer py-1">
        <input
          id="int-consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-6 w-6 shrink-0 accent-bh-blue"
        />
        <span className="font-body text-sm text-white/80 leading-relaxed">
          Yes, I&rsquo;m happy for Business Heads to email me about upcoming events.
        </span>
      </label>

      {status === 'error' && (
        <p className="font-body text-sm text-bh-red" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-bh-blue text-white font-heading font-semibold py-3.5 text-base hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Saving...' : 'Keep me posted'}
      </button>
    </form>
  )
}
