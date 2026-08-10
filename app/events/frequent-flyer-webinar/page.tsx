import type { Metadata } from 'next'
import styles from './webinar.module.css'

const REGISTER_URL =
  'https://events.teams.microsoft.com/event/2b0d04b1-bcd2-4195-9a61-f53c1e339b87@f9cb041d-7ca5-4491-8bbf-dd1cfb5860db'
const MAILING_LIST_URL =
  'https://06722179.sibforms.com/serve/MUIFANCtc32ZHuQbvQ-aUhQ6gYBcgZ_DWuCX1uVYOu2fVqxdyqIf8QVPCalxRUr2CJ-o1Ui40RtYBwNmPxv_deXqmvQbCFugxnP4GYckVrif-YhPtxE4zw0HlLaBv3w4UZCe0o84AVUllGf-ZNnZ_uRaSb_N5TmrU36Smu9PmCTXLKJ7a7Ztt4JeP3pfbxWOAuJ7-j3PBDIh6ef5Cw=='

const PAGE_TITLE =
  'Off the record: Getting real value from your frequent flyer points | Bramelle Partners x Business Heads'
const PAGE_DESCRIPTION =
  'A free live webinar for business owners on getting real value from frequent flyer points. Thursday 20 August 2026, 12:00-1:00PM AEST, hosted by Brad Seeto.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://www.businessheads.com.au/events/frequent-flyer-webinar',
    images: [
      {
        url: '/images/og-frequent-flyer-webinar.png',
        width: 1200,
        height: 630,
        alt: 'Off the record: Getting real value from your frequent flyer points — Bramelle Partners x Business Heads',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/images/og-frequent-flyer-webinar.png'],
  },
}

export default function FrequentFlyerWebinarPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.stripe}>
            <span className={styles.s1} />
            <span className={styles.s2} />
          </div>

          <div className={styles.hero}>
            <div className={styles.logos}>
              <div className={styles.logoPill}>
                <a href="https://bramellepartners.com.au/" target="_blank" rel="noopener">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.ibb.co/mVfwXFwh/bramelle-partners-logo.png" alt="Bramelle Partners" />
                </a>
                <span className={styles.logoDivider}>&times;</span>
                <a href="https://www.businessheads.com.au/" target="_blank" rel="noopener">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.bhLogo} src="https://i.ibb.co/vCWFWvr4/business-heads-logo.png" alt="Business Heads" />
                </a>
              </div>
            </div>
            <p className={styles.eyebrow}>You&rsquo;re invited</p>
            <h1 className={styles.heading}>
              <span className={styles.muted}>Off the record:</span> Getting real value from your frequent flyer points
            </h1>
            <p className={styles.heroSub}>
              A conversation for business owners on how to get the most out of your frequent flyer points.
            </p>
          </div>

          <div className={styles.details}>
            <div className={styles.detailCell}>
              <p className={styles.detailLabel}>Date</p>
              <p className={styles.detailValue}>Thursday, 20th August 2026</p>
            </div>
            <div className={styles.detailCell}>
              <p className={styles.detailLabel}>Time</p>
              <p className={styles.detailValue}>12:00PM &ndash; 1:00PM AEST</p>
            </div>
            <div className={styles.detailCell}>
              <p className={styles.detailLabel}>Format</p>
              <p className={styles.detailValue}>Live webinar</p>
              <p className={styles.detailSub}>via Microsoft Teams</p>
            </div>
            <div className={styles.detailCell}>
              <p className={styles.detailLabel}>Hosted by</p>
              <p className={styles.detailValue}>Brad Seeto</p>
              <p className={styles.detailSub}>Bramelle Partners</p>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.intro}>
              Collecting points without a plan means most of that value quietly goes to waste. This session covers
              both sides: practical ways to grow your points, plus <strong>the part everyone skips</strong>, finding
              and redeeming good value, so nothing you&rsquo;ve earned just sits there losing worth.
            </p>
            <div className={styles.rule} />
            <p className={styles.sectionLabel}>What we&rsquo;ll cover</p>
            <ul className={styles.coverList}>
              <li>
                <span className={`${styles.dot} ${styles.c1}`} />
                <span>
                  <strong>Cards and earning, the basics</strong>: a quick overview of card types and how points
                  actually accrue
                </span>
              </li>
              <li>
                <span className={`${styles.dot} ${styles.c2}`} />
                <span>
                  <strong>Maximising collection for business owners</strong>: turning everyday business spend into
                  real point volume
                </span>
              </li>
              <li>
                <span className={`${styles.dot} ${styles.c3}`} />
                <span>
                  <strong>Understanding redemption value</strong>: what your points are actually worth, and how to
                  spot good value versus bad
                </span>
              </li>
              <li>
                <span className={`${styles.dot} ${styles.c4}`} />
                <span>
                  <strong>How to actually redeem</strong>: the practical part everyone skips
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.ctaBlock}>
            <a className={styles.ctaBtn} href={REGISTER_URL} target="_blank" rel="noopener">
              REGISTER
            </a>
            <p className={styles.ctaNote}>
              Free to attend. Hosted live via Microsoft Teams.
              <br />
              The recording will also be available afterward, but it won&rsquo;t replace being there for the Q&amp;A.
            </p>
          </div>

          <div className={styles.about}>
            <div className={styles.aboutInner}>
              <p className={styles.aboutLabel}>About Business Heads</p>
              <p className={styles.aboutText}>
                Business Heads is a curated community for business owners built on real conversation, not sales
                pitches. We run regular in-person and online events to connect, test ideas, learn and grow with other
                business heads. Alongside our own program of events, we work with professional services firms to
                deliver sessions for their clients. This session is one of those, delivered in partnership with
                Bramelle Partners.{' '}
                <a href={MAILING_LIST_URL} target="_blank" rel="noopener">
                  Join our mailing list
                </a>{' '}
                to stay in the loop.
              </p>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.footerBrand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.ibb.co/0VprYpL4/bramelle-icon-footer.png" alt="" />
              <span>Bramelle Partners x Business Heads</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://i.ibb.co/1GXKyJ3Y/business-heads-icon-footer.png" alt="" />
            </div>
            <p className={styles.footerText}>
              Questions? <a href="mailto:hello@businessheads.com.au">hello@businessheads.com.au</a>
              <br />
              Follow us on{' '}
              <a href="https://www.linkedin.com/company/business-heads-au/" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <br />
              <a href="https://bramellepartners.com.au/" target="_blank" rel="noopener">
                bramellepartners.com.au
              </a>{' '}
              &middot;{' '}
              <a href="https://www.businessheads.com.au/" target="_blank" rel="noopener">
                businessheads.com.au
              </a>
            </p>
          </div>

          <div className={styles.stripe}>
            <span className={styles.s1} />
            <span className={styles.s2} />
          </div>
        </div>
      </div>
    </div>
  )
}
