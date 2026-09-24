import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:  'Sidan hittades inte',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="section container text-center max-w-lg mx-auto">
      <p className="text-6xl font-bold text-brand-200 mb-4">404</p>
      <h1 className="text-2xl font-semibold text-stone-800 mb-3">Sidan hittades inte</h1>
      <p className="text-stone-500 mb-8">
        Sidan du letar efter finns inte eller har flyttats.
      </p>
      <Link
        href="/"
        className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Tillbaka till startsidan
      </Link>
    </div>
  )
}
