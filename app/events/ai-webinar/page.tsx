import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const REGISTER_URL =
  'https://events.teams.microsoft.com/event/62a012f5-2c67-44c4-88e9-80bcad8d7e92@f9cb041d-7ca5-4491-8bbf-dd1cfb5860db'

const PAGE_TITLE = 'Off the record: Can AI give you half your week back?'
const SOCIAL_TITLE = `${PAGE_TITLE} | Business Heads x Horizon AI`
const PAGE_DESCRIPTION =
  'A free live webinar for business owners on getting AI to do actual work, not just answer questions. Thursday 24 September 2026, 11:00am-12:00pm AEST, hosted by Adam Dong, Director of Horizon AI.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://www.businessheads.com.au/events/ai-webinar',
    images: [
      {
        url: '/images/og-ai-webinar.png',
        width: 1200,
        height: 630,
        alt: 'Off the record: Can AI give you half your week back? — Business Heads x Horizon AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SOCIAL_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/og-ai-webinar.png'],
  },
}

const COVER_POINTS: { dot: string; text: ReactNode }[] = [
  {
    dot: 'bg-bh-blue',
    text: 'The three levels of business AI: from chatbot to connected tools to autonomous workflows',
  },
  {
    dot: 'bg-bh-yellow',
    text: 'Choosing the right AI account and protecting business information',
  },
  {
    dot: 'bg-bh-horizon-blue',
    text: 'Turning Claude into a practical work assistant',
  },
  {
    dot: 'bg-bh-blue',
    text: (
      <>
        <strong className="text-bh-horizon-navy">Live demonstration:</strong> connecting AI to
        Microsoft 365 and creating an inbox assistant and a calendar assistant
      </>
    ),
  },
  {
    dot: 'bg-bh-yellow',
    text: 'Real examples of AI working across business software and processes',
  },
  {
    dot: 'bg-bh-horizon-blue',
    text: 'Open Q&A about attendees’ businesses, systems and AI ideas',
  },
]

export default function AiWebinarPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #eef0ff 0%, #f6f7ff 400px, #ffffff 400px)' }}
    >
      <div className="max-w-[760px] mx-auto px-4 sm:px-5 py-10 md:py-16">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(7,17,38,0.12)]">
          {/* Top stripe */}
          <div className="flex h-2">
            <span className="flex-1 bg-bh-blue" />
            <span className="flex-1 bg-bh-yellow" />
          </div>

          {/* Hero */}
          <div className="bg-bh-horizon-navy px-6 sm:px-9 md:px-12 pt-9 md:pt-12 pb-8 md:pb-11">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full px-6 py-3 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/logo-horizontal.svg" alt="Business Heads" className="h-5 w-auto block" />
                <span className="text-bh-horizon-navy/35 text-base">&times;</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/horizon-ai-wordmark-navy.png"
                  alt="Horizon AI"
                  className="h-4 w-auto block"
                />
              </div>
            </div>
            <p className="font-body text-bh-yellow text-xs font-bold uppercase tracking-widest mb-4 text-center sm:text-left">
              Free webinar
            </p>
            <h1 className="font-heading font-extrabold text-[26px] sm:text-3xl md:text-4xl text-white leading-tight mb-6 text-center sm:text-left">
              <span className="text-[#7E8692]">Off the record:</span> Can AI give you half your
              week back?
            </h1>
            <div className="text-center sm:text-left">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-glow-blue inline-block bg-bh-blue text-white font-body font-extrabold text-sm tracking-[1.2px] px-9 py-4 rounded-full shadow-[0_8px_18px_rgba(79,72,255,0.35)] hover:-translate-y-0.5 transition-transform"
              >
                REGISTER NOW
              </a>
            </div>
          </div>

          {/* Detail strip */}
          <div className="bg-bh-horizon-navy border-t border-white/10 grid grid-cols-1 sm:grid-cols-2">
            <div className="px-6 sm:px-9 md:px-12 py-5 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1.5">
                Date
              </p>
              <p className="font-body text-sm text-white/90 font-bold">Thursday 24 September 2026</p>
            </div>
            <div className="px-6 sm:px-9 md:px-12 py-5 border-b sm:border-b-0 border-white/10">
              <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1.5">
                Time
              </p>
              <p className="font-body text-sm text-white/90 font-bold">11:00am&ndash;12:00pm AEST</p>
            </div>
            <div className="px-6 sm:px-9 md:px-12 py-5 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1.5">
                Format
              </p>
              <p className="font-body text-sm text-white/90 font-bold">Live webinar</p>
              <p className="font-body text-xs text-white/55 mt-1">via Microsoft Teams</p>
            </div>
            <div className="px-6 sm:px-9 md:px-12 py-5">
              <p className="font-body text-[11px] uppercase tracking-widest text-white/55 font-bold mb-1.5">
                Speaker
              </p>
              <p className="font-body text-sm text-white/90 font-bold">Adam Dong</p>
              <p className="font-body text-xs text-white/55 mt-1">Director of Horizon AI</p>
            </div>
          </div>

          {/* Content: intro + what Adam will cover */}
          <div className="bg-[#f5f8fc] px-6 sm:px-9 md:px-12 pt-9 md:pt-10 pb-2">
            <div className="border-l-4 border-bh-horizon-navy pl-4 sm:pl-5 mb-7 space-y-3">
              <p className="text-bh-charcoal text-base leading-relaxed">
                Most people use AI at work by opening a tab and asking it things. As a business
                owner, there&rsquo;s an opportunity to embed it far more effectively and get
                meaningful time back in your week.
              </p>
              <p className="text-bh-charcoal text-base leading-relaxed">
                Adam Dong, Director of Horizon AI, spends his week getting businesses over that
                &lsquo;AI hump&rsquo;. Once AI is properly connected to the systems you already run
                on, it stops answering questions and starts doing the work, and his clients
                typically get 20 to 30 percent of their day back.
              </p>
            </div>

            <div className="border-t-2 border-bh-yellow/30 mb-6" />

            <p className="font-body text-[11px] uppercase tracking-widest text-bh-horizon-navy font-bold mb-4">
              What Adam will cover
            </p>
            <ul className="grid gap-4 mb-8 list-none p-0 m-0">
              {COVER_POINTS.map((point, i) => (
                <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed text-bh-charcoal">
                  <span className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${point.dot}`} />
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-bh-charcoal/10 pt-4 pb-6">
              <p className="text-sm text-bh-charcoal leading-relaxed">
                If you have any specific questions you want to hear Adam&rsquo;s take on, please{' '}
                <a
                  href="mailto:hello@businessheads.com.au"
                  className="font-bold text-bh-horizon-navy underline underline-offset-2"
                >
                  email us
                </a>
                . We&rsquo;d love your input to make this as useful as possible!
              </p>
            </div>
          </div>

          {/* Freebie callout */}
          <div className="bg-[#f5f8fc] px-6 sm:px-9 md:px-12 pb-9">
            <div className="bg-[#fffdf2] rounded-2xl px-6 py-5 shadow-[0_6px_16px_rgba(253,206,0,0.18)]">
              <p className="font-body text-[11px] uppercase tracking-widest text-bh-horizon-navy font-bold mb-1.5">
                Yours free on the day
              </p>
              <p className="text-[13px] text-bh-charcoal leading-relaxed">
                Adam&rsquo;s own{' '}
                <strong className="text-bh-horizon-navy">Claude and Microsoft 365 setup guide</strong>.
                Which account to pick, how to connect it, and ideas to try the same afternoon. We
                will send it to everyone who attends.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#f5f8fc] text-center px-6 sm:px-9 md:px-12 pb-10">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow-blue inline-block bg-bh-blue text-white font-body font-bold text-base tracking-[1.5px] px-11 py-4 rounded-full shadow-[0_8px_18px_rgba(79,72,255,0.35)] hover:-translate-y-0.5 transition-transform"
            >
              REGISTER NOW
            </a>
            <p className="text-[13px] text-bh-charcoal/60 mt-4">
              Free to attend. Hosted live via Microsoft Teams.
            </p>
          </div>

          {/* About Business Heads */}
          <div className="bg-[#f5f8fc] px-6 sm:px-9 md:px-12 pb-9">
            <div className="border-l-4 border-bh-blue pl-4 sm:pl-5">
              <p className="font-body text-[11px] uppercase tracking-widest text-bh-horizon-navy font-bold mb-2">
                About Business Heads
              </p>
              <p className="text-[13px] text-bh-charcoal/80 leading-relaxed">
                Business Heads is a curated community for business owners who want honest
                conversation and useful ideas. Off the record is our webinar series, where we
                bring in people who really know their subject and let them talk plainly about it.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#f9f4f5] px-6 sm:px-9 md:px-12 pt-7 pb-9 text-center">
            <div className="flex items-center justify-center gap-2.5 mb-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/horizon-ai-wordmark-navy.png" alt="" className="h-[18px] w-auto block" />
              <span className="text-[13px] font-bold text-bh-horizon-navy">
                Business Heads x Horizon AI
              </span>
            </div>
            <p className="text-xs text-bh-charcoal/60 leading-relaxed">
              Questions?{' '}
              <a href="mailto:hello@businessheads.com.au" className="text-bh-horizon-navy underline">
                hello@businessheads.com.au
              </a>
              <br />
              Follow us on{' '}
              <a
                href="https://www.linkedin.com/company/business-heads-au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bh-horizon-navy underline"
              >
                LinkedIn
              </a>
              <br />
              <a
                href="https://www.businessheads.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bh-horizon-navy underline"
              >
                businessheads.com.au
              </a>
            </p>
          </div>

          {/* Bottom stripe */}
          <div className="flex h-2">
            <span className="flex-1 bg-bh-blue" />
            <span className="flex-1 bg-bh-yellow" />
          </div>
        </div>
      </div>
    </div>
  )
}
