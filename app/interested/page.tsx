import type { Metadata } from 'next'
import { InterestedForm } from './InterestedForm'

// Hidden page for collecting sign-ups at events. Not linked anywhere and not in the sitemap.
export const metadata: Metadata = {
  title: 'Stay in the loop',
  robots: { index: false, follow: false, nocache: true },
}

export default function InterestedPage() {
  return (
    <section className="bg-bh-charcoal px-5 py-12 md:py-20 min-h-[80vh]">
      <div className="max-w-md mx-auto">
        <p className="font-body text-bh-yellow text-sm uppercase tracking-widest mb-4">
          Business Heads
        </p>
        <h1 className="font-heading font-semibold text-3xl text-white mb-3 leading-tight">
          Stay in the loop.
        </h1>
        <p className="font-body text-white/55 mb-8 leading-relaxed">
          Leave your details and we will let you know about upcoming events.
        </p>
        <InterestedForm />
      </div>
    </section>
  )
}
