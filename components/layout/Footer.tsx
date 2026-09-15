import Link from 'next/link'

const JOIN_URL = '/join'
const CIRCLE_LOGIN_URL = 'https://businessheads.circle.so/sign_in'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bh-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand — reverse (white) horizontal logo on charcoal */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="Business Heads home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/logo-horizontal-reverse.svg"
                alt="Business Heads"
                height={30}
                width={228}
                className="h-[30px] w-auto"
              />
            </Link>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-48">
              A community for business owners who help each other win.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-body text-white/30 text-xs uppercase tracking-widest mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {[
                { href: '/experience', label: 'The Experience' },
                { href: '/events', label: 'Events' },
                { href: '/about', label: 'About' },
                { href: '/join', label: 'Pricing & Join' },
                { href: '/faq', label: 'FAQ' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Members */}
          <div>
            <p className="font-body text-white/30 text-xs uppercase tracking-widest mb-5">
              Members
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={CIRCLE_LOGIN_URL}
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  Member Login
                </a>
              </li>
              <li>
                <a
                  href={JOIN_URL}
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  Join Business Heads
                </a>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-body text-white/30 text-xs uppercase tracking-widest mb-5">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  Membership Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/25">
            &copy; {year} Business Heads. ABN 78 693 566 326.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/business-heads-au"
              className="font-body text-xs text-white/25 hover:text-white/60 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/businessheadsau"
              className="font-body text-xs text-white/25 hover:text-white/60 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
