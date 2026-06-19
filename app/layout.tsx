import type { Metadata } from 'next'
import { Nunito, Jost } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const headingFont = Nunito({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-heading-var',
  display: 'swap',
})

const bodyFont = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body-var',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.businessheads.com.au'),
  title: {
    default: 'Business Heads | A Community for Business Owners',
    template: '%s | Business Heads',
  },
  description:
    'Business Heads is for business owners who want genuine peer connection, not another pitch-fest. $10,000 back to the community every quarter. Based in Sydney, Australia.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.businessheads.com.au',
    siteName: 'Business Heads',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Business Heads' }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
