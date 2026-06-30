import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Welcome to Business Heads',
  description: "You're in. Welcome to Business Heads.",
}

export default function CheckoutSuccessPage() {
  return (
    <section className="bg-bh-blue min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-lg text-center">
        <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-6">
          You&rsquo;re in.
        </h1>
        <p className="font-body text-xl text-white/70 mb-10 leading-relaxed">
          Welcome to Business Heads. Check your email — your account details and next steps are on their way.
        </p>
        <Link
          href="/"
          className="inline-block font-body font-semibold text-bh-blue bg-white py-4 px-10 rounded-full hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
