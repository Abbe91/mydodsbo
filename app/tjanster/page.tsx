import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ServiceCard } from '@/components/ui/ServiceCard'

export const metadata: Metadata = {
  title:       'Våra tjänster – dödsbotömning och städning',
  description: 'Komplett utbud av tjänster för dödsbon i Göteborg: tömning, städning, värdering och bortforsling. Vi anpassar uppdraget efter dina behov.',
  alternates:  { canonical: '/tjanster' },
}

const services = [
  {
    href:        '/tjanster/dodsbotomning',
    title:       'Dödsbotömning',
    description: 'Vi tömmer bostaden noggrant och hanterar allt bohag med respekt. Sortering, återbruk och bortforsling ingår.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href:        '/tjanster/dodsbostadning',
    title:       'Dödsbostädning',
    description: 'Grundlig städning efter tömning. Vi lämnar bostaden i inflyttningsklart skick — redo för visning, uthyrning eller försäljning.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href:        '/tjanster/vardering-och-uppkop',
    title:       'Värdering & uppköp',
    description: 'Vi inventerar och värderar bohaget, och kan köpa upp föremål av värde direkt — enkelt och smidigt för dig som anhörig.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 10V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    href:        '/tjanster/bortforsling',
    title:       'Bortforsling',
    description: 'Vi transporterar bort allt som ska lämnas — till återvinning, second hand eller tipp. Miljöansvarigt och dokumenterat.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Tjänster', href: '/tjanster' },
]

export default function TjansterPage() {
  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tjänster för dödsbon i Göteborg</h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              Vi erbjuder ett komplett utbud av tjänster för tömning och städning av dödsbon.
              Du väljer de tjänster du behöver — eller låter oss ta hand om hela processen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {services.map(s => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>

          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 md:p-8 max-w-2xl">
            <h2 className="text-xl font-semibold mb-2">Osäker på vad du behöver?</h2>
            <p className="text-stone-600 mb-4">
              Vi hjälper dig att lista ut vad som passar din situation. Kontakta oss för en
              kostnadsfri bedömning — inga förbindelser.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Kostnadsfri bedömning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
