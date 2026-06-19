import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm'
import { faqs } from '@/content/faq'

const JOIN_URL = 'https://www.businessheads.com.au/checkout/joining-business-heads'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Direct answers to the real questions business owners have about Business Heads. Time, cost, the prize, what is expected.',
}

export default function FaqPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-bh-blue text-sm uppercase tracking-widest mb-5">FAQ</p>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-bh-charcoal leading-tight max-w-xl">
            The questions people actually ask.
          </h1>
        </div>
      </section>

      {/* ─── FAQ list ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {faqs.map(({ question, answer }, i) => (
              <div
                key={question}
                className={`py-8 ${i < faqs.length - 1 ? 'border-b border-black/8' : ''}`}
              >
                <h2 className="font-heading font-semibold text-xl text-bh-charcoal mb-4">
                  {question}
                </h2>
                <p className="font-body text-bh-charcoal/65 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Register interest (for people who read this far) ─────────────── */}
      <section className="bg-bh-charcoal px-6 py-24">
        <div className="max-w-md mx-auto text-center">
          <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-5">
            Still not sure?
          </p>
          <h2 className="font-heading font-semibold text-2xl text-white mb-4">
            Register your interest.
          </h2>
          <p className="font-body text-white/50 mb-10 text-sm">
            No commitment. We will keep you across what is happening and reach out before the
            founding rate closes.
          </p>
          <LeadCaptureForm />
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-body text-bh-charcoal/35 text-sm mb-8">
            Ready to join before 31 August?
          </p>
          <Button href={JOIN_URL} variant="primary" size="lg">
            Join Business Heads
          </Button>
        </div>
      </section>
    </>
  )
}
