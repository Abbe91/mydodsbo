import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCallButton } from '@/components/layout/StickyCallButton'
import { ConsentInit } from '@/components/analytics/ConsentInit'
import { GTMHeadScript, GTMBodyScript } from '@/components/analytics/GTMScript'
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd'
import { company } from '@/lib/company'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const isLaunched = process.env.SITE_LAUNCHED === 'true'

// Analytics IDs — empty string means "not configured yet", nothing loads.
// ▶ When you create your GTM container:  edit lib/company.ts → gtmId
// ▶ When you create your CookieYes acct: edit lib/company.ts → cookieYesId
const gtmActive      = Boolean(company.gtmId)
const cookieYesSrc   = company.cookieYesId
  ? `https://cdn-cookieyes.com/client_data/${company.cookieYesId}/script.js`
  : null

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default:  `Dödsbotömning & städning i Göteborg – ${company.name}`,
    template: `%s – ${company.name}`,
  },
  description:
    'Vi hjälper dig tömma och städa dödsbon i Göteborg med omsorg och respekt. Kontakta oss för en kostnadsfri bedömning.',
  openGraph: {
    type:      'website',
    locale:    'sv_SE',
    url:       company.siteUrl,
    siteName:  company.name,
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: company.name }],
  },
  robots: isLaunched
    ? { index: true, follow: true }
    : { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={inter.variable}>
      <head>
        {/* Analytics loads only when both IDs are configured in lib/company.ts */}
        {gtmActive && (
          <>
            {/* 1. Consent Mode v2 defaults — must precede GTM */}
            <ConsentInit />
            {/* 2. CookieYes — reads saved consent and fires gtag('consent','update',…) */}
            {cookieYesSrc && (
              // eslint-disable-next-line @next/next/no-sync-scripts
              <script id="cookieyes" type="text/javascript" src={cookieYesSrc} async />
            )}
            {/* 3. Google Tag Manager */}
            <GTMHeadScript />
          </>
        )}
      </head>
      <body className="flex flex-col min-h-screen">
        {gtmActive && <GTMBodyScript />}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
        {/* LocalBusiness JSON-LD on every page */}
        <LocalBusinessJsonLd />
      </body>
    </html>
  )
}
