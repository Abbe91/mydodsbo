import Link from 'next/link'
import { company } from '@/lib/company'

type HeroSectionProps = {
  heading:    string
  subheading: string
  ctaHref?:   string
  ctaLabel?:  string
}

export function HeroSection({
  heading,
  subheading,
  ctaHref  = '/kontakt',
  ctaLabel = 'Kostnadsfri bedömning',
}: HeroSectionProps) {
  return (
    <section className="bg-hero-gradient text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-brand-200 leading-relaxed mb-8">
            {subheading}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={ctaHref}
              className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {ctaLabel}
            </Link>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
