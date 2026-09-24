import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/lib/company'

// Always noindex — this page is the Netlify form success redirect, never in sitemap.
export const metadata: Metadata = {
  title:  'Tack – vi återkommer',
  robots: { index: false, follow: false },
}

export default function TackPage() {
  return (
    <section className="section">
      <div className="container max-w-lg text-center">
        <div className="w-16 h-16 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Tack för din förfrågan!</h1>
        <p className="text-stone-500 mb-2">
          Vi har tagit emot ditt meddelande och återkommer till dig inom en arbetsdag.
        </p>
        <p className="text-stone-500 mb-8">
          Behöver du komma i kontakt med oss direkt?{' '}
          <a
            href={`tel:${company.phoneTel}`}
            className="text-brand-700 font-medium hover:underline"
          >
            Ring oss på {company.phone}
          </a>.
        </p>
        <Link
          href="/"
          className="inline-block border border-stone-300 hover:border-brand-300 text-stone-700 hover:text-brand-700 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </section>
  )
}
