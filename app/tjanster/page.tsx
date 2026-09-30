import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { company } from '@/lib/company'

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
  },
  {
    href:        '/tjanster/dodsbostadning',
    title:       'Dödsbostädning',
    description: 'Grundlig städning efter tömning. Vi lämnar bostaden i inflyttningsklart skick — redo för visning, uthyrning eller försäljning.',
  },
  {
    href:        '/tjanster/vardering-och-uppkop',
    title:       'Värdering & uppköp',
    description: 'Vi inventerar och värderar bohaget, och kan köpa upp föremål av värde direkt — enkelt och smidigt för dig som anhörig.',
  },
  {
    href:        '/tjanster/bortforsling',
    title:       'Bortforsling',
    description: 'Vi transporterar bort allt som ska lämnas — till återvinning, second hand eller tipp. Miljöansvarigt och dokumenterat.',
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

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Tjänster
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Tjänster för dödsbon i Göteborg
        </h1>
        <a
          href={`tel:${company.phoneTel}`}
          className="text-stone-700 hover:text-brand-700 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-brand-700 transition-colors"
        >
          Ring oss direkt: {company.phone}
        </a>
      </div>

      <div className="container">
        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose pb-12 md:pb-16">
          Vi erbjuder ett komplett utbud av tjänster för tömning och städning av dödsbon.
          Du väljer de tjänster du behöver — eller låter oss ta hand om hela processen.
        </p>

        <div className="max-w-prose divide-y divide-stone-200 mb-16 md:mb-24">
          {services.map(s => (
            <Link key={s.href} href={s.href} className="group block py-6 first:pt-0">
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-brand-700 transition-colors mb-2">
                {s.title}
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>

        <div className="max-w-prose pb-20 md:pb-28">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Osäker på vad du behöver?
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-6">
            Vi hjälper dig att lista ut vad som passar din situation. Kontakta oss för en
            kostnadsfri bedömning — inga förbindelser.
          </p>
          <Link
            href="/kontakt"
            className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
          >
            Kostnadsfri bedömning →
          </Link>
        </div>
      </div>
    </>
  )
}
