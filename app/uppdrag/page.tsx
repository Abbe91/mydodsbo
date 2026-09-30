import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { uppdrag } from '@/content/uppdrag'

export const metadata: Metadata = {
  title:       'Genomförda uppdrag',
  description:
    uppdrag.length === 0
      ? 'Här publicerar vi framöver exempel på dödsbon vi hanterat i Göteborg — tömning, städning och bortforsling.'
      : 'Se exempel på dödsbon vi hanterat i Göteborg — tömning, städning och bortforsling i olika stadsdelar och bostadstyper.',
  alternates:  { canonical: '/uppdrag' },
}

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Uppdrag', href: '/uppdrag' },
]

export default function UppdragPage() {
  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Uppdrag
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl">
          Genomförda uppdrag
        </h1>
      </div>

      <div className="container pb-20 md:pb-28">
        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-12">
          {uppdrag.length === 0
            ? 'Här kommer vi framöver att publicera exempel på uppdrag vi genomfört i Göteborg. Varje dödsbo är unikt — storleken, bohagsmängden och vad som behövs varierar.'
            : 'Här delar vi exempel på uppdrag vi genomfört i Göteborg. Varje dödsbo är unikt — storleken, bohagsmängden och vad som behövs varierar.'}
        </p>

        {uppdrag.length === 0 ? (
          <p className="max-w-prose border border-dashed border-stone-300 bg-stone-100 px-4 py-3 text-sm text-stone-500">
            Vi publicerar våra uppdrag här när vi har genomfört dem.
          </p>
        ) : (
          <div className="max-w-prose divide-y divide-stone-200">
            {uppdrag.map(u => {
              const meta = [
                u.propertyType,
                u.city,
                u.size ? `${u.size} m²` : null,
                u.durationDays ? `${u.durationDays} ${u.durationDays === 1 ? 'dag' : 'dagar'}` : null,
              ].filter(Boolean).join(' · ')

              return (
                <Link key={u.slug} href={`/uppdrag/${u.slug}`} className="group block py-8 first:pt-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-brand-700 transition-colors">
                      {u.title}
                    </h2>
                    <span className="shrink-0 text-sm text-stone-400">
                      {new Date(u.completedDate).toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 mb-3">
                    {meta} · {u.services.join(', ')}
                  </p>
                  <p className="text-base text-stone-600 leading-relaxed">
                    {u.summary}
                  </p>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
