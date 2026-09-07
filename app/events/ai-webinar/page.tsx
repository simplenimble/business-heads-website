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

const MONO = "Consolas, Menlo, Monaco, 'Courier New', monospace"

const DETAIL_ROWS = [
  { label: '// when', value: 'Thursday 24 September, 11am to 12pm AEST' },
  { label: '// where', value: 'Live on Microsoft Teams' },
  { label: '// host', value: 'Adam Dong, Director of Horizon AI' },
]

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
    dot: 'bg-bh-sky',
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
    <div className="min-h-screen" style={{ backgroundColor: '#F5F8FC' }}>
      <div className="max-w-[600px] mx-auto px-4 sm:px-5 py-10 md:py-14">
        <div
          className="rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(7,17,38,0.12)]"
          style={{ backgroundColor: '#F5FBFE' }}
        >
          {/* Top stripe */}
          <div className="flex h-[18px]">
            <span className="flex-1 bg-bh-blue" />
            <span className="flex-1 bg-bh-yellow" />
          </div>

          {/* Logo row */}
          <div className="flex justify-center pt-8 px-6 sm:px-10">
            <div className="bg-white rounded-full px-6 py-3 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/logo-horizontal.svg"
                alt="Business Heads"
                className="h-4 w-auto shrink-0 block"
              />
              <span className="text-bh-horizon-navy/30 text-base shrink-0">&times;</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/horizon-ai-wordmark-navy.png"
                alt="Horizon AI"
                className="h-4 w-[118px] object-contain object-left shrink-0 block"
              />
            </div>
          </div>

          {/* Invite tag */}
          <div className="px-6 sm:px-10 pt-4">
            <p
              className="uppercase font-black tracking-[1.8px] text-bh-blue"
              style={{ fontFamily: 'Arial Black, Arial, Helvetica, sans-serif', fontSize: 20 }}
            >
              Free webinar
            </p>
          </div>

          {/* Headline */}
          <div className="px-6 sm:px-10 pt-3 pb-1">
            <h1 className="font-heading font-extrabold text-[26px] sm:text-[28px] leading-[1.25] text-bh-horizon-navy">
              <span style={{ color: '#7E8692' }}>Off the record:</span> Can AI give you half your
              week back?
            </h1>
          </div>

          {/* Subtext */}
          <div className="px-6 sm:px-10 pt-3 pb-6 space-y-3.5">
            <p className="text-[15px] leading-[1.65] text-bh-charcoal">
              Most people use AI at work by opening a tab and asking it things. As a business
              owner, there&rsquo;s an opportunity to embed it far more effectively and get
              meaningful time back in your week.
            </p>
            <p className="text-[15px] leading-[1.65] text-bh-charcoal">
              Adam Dong, Director of Horizon AI, spends his week getting businesses over that
              &lsquo;AI hump&rsquo;. Once AI is properly connected to the systems you already run
              on, it stops answering questions and starts doing the work, and his clients
              typically get 20 to 30 percent of their day back.
            </p>
          </div>

          {/* Details card */}
          <div className="px-6 sm:px-10 pb-6">
            <div className="bg-white rounded-2xl shadow-[0_6px_16px_rgba(7,17,38,0.08)] overflow-hidden">
              {/* a) the ask */}
              <div className="px-5 sm:px-[22px] pt-5 pb-[18px]">
                <div className="pl-3" style={{ borderLeft: '3px solid #e2e4ec' }}>
                  <p className="text-[11px] leading-5 mb-1" style={{ fontFamily: MONO, color: '#4f48ff' }}>
                    {'// you asked'}
                  </p>
                  <p className="text-[13px] leading-[1.55]" style={{ fontFamily: MONO, color: '#8a8690' }}>
                    Pull together the details for that Business Heads AI session.
                  </p>
                </div>
              </div>

              {/* b) the done bar */}
              <div
                className="px-5 sm:px-[22px] py-[13px] flex items-center gap-3"
                style={{ backgroundColor: '#EEEDFF' }}
              >
                <span className="w-[18px] h-[18px] rounded-full bg-bh-blue text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  &#10003;
                </span>
                <span className="flex-1 text-[13px] leading-[1.4] font-bold text-bh-horizon-navy">
                  Found it, and added to your calendar <span style={{ color: '#2453EE' }}>&#9632;</span>
                </span>
                <span
                  className="shrink-0 rounded-full bg-bh-blue text-white text-[10px] px-[9px] py-1 whitespace-nowrap"
                  style={{ fontFamily: MONO }}
                >
                  ai_agent
                </span>
              </div>

              {/* c) when / where / host */}
              <div className="px-5 sm:px-[22px] py-1 divide-y divide-[#f0f2f6]">
                {DETAIL_ROWS.map((row) => (
                  <div key={row.label} className="flex gap-0 py-3">
                    <span
                      className="w-[86px] shrink-0 text-[11px] leading-5"
                      style={{ fontFamily: MONO, color: '#4f48ff' }}
                    >
                      {row.label}
                    </span>
                    <span className="text-sm leading-5 font-bold text-bh-horizon-navy">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top CTA */}
          <div className="text-center px-6 sm:px-10 pb-8">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-glow-blue inline-block bg-bh-blue text-white font-body font-extrabold text-sm tracking-[1.2px] px-9 py-4 rounded-full shadow-[0_8px_18px_rgba(79,72,255,0.35)] hover:-translate-y-0.5 transition-transform"
            >
              REGISTER NOW
            </a>
          </div>

          {/* What Adam will cover */}
          <div className="px-6 sm:px-10 pb-6">
            <div className="bg-white rounded-2xl shadow-[0_6px_16px_rgba(7,17,38,0.08)] px-5 sm:px-[26px] py-5 sm:py-[22px]">
              <p className="text-[11px] uppercase tracking-widest font-bold text-bh-horizon-navy mb-4">
                What Adam will cover
              </p>
              <ul className="grid gap-3 mb-0 list-none p-0 m-0">
                {COVER_POINTS.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-[1.55] text-bh-charcoal">
                    <span className={`mt-[7px] w-[7px] h-[7px] rounded-full shrink-0 ${point.dot}`} />
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-[18px] pt-4 border-t" style={{ borderColor: '#eef1f6' }}>
                <p className="text-[13px] leading-[1.62] text-bh-charcoal">
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
          </div>

          {/* Freebie callout */}
          <div className="px-6 sm:px-10 pb-8">
            <div
              className="rounded-2xl px-[26px] py-[22px] shadow-[0_6px_16px_rgba(253,206,0,0.18)]"
              style={{ backgroundColor: '#FFFDF2' }}
            >
              <p className="text-[11px] uppercase tracking-widest font-bold text-bh-horizon-navy mb-1.5">
                Yours free on the day
              </p>
              <p className="text-[13px] leading-[1.55] text-bh-charcoal">
                Adam&rsquo;s own{' '}
                <strong className="text-bh-horizon-navy">Claude and Microsoft 365 setup guide</strong>.
                Which account to pick, how to connect it, and ideas to try the same afternoon. We
                will send it to everyone who attends.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center px-6 sm:px-10 pb-8">
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

          {/* Footer divider */}
          <div className="px-6 sm:px-10">
            <div className="border-t" style={{ borderColor: '#eeecec' }} />
          </div>

          {/* Footer */}
          <div className="px-6 sm:px-10 pt-6 pb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/logo-icon.svg" alt="" className="h-[22px] w-auto block" />
              <span className="text-[13px] font-bold text-bh-horizon-navy">
                Business Heads x Horizon AI
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/horizon-ai-mark.png" alt="" className="h-6 w-6 block rounded-md" />
            </div>
            <p className="text-xs text-bh-charcoal/70 leading-relaxed">
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
          <div className="flex h-[18px]">
            <span className="flex-1 bg-bh-blue" />
            <span className="flex-1 bg-bh-yellow" />
          </div>
        </div>
      </div>
    </div>
  )
}
