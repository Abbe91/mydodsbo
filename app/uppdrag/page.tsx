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

const serviceLabels: Record<string, string> = {
  dodsbotomning: 'Dödsbotömning',
  dodsbostadning: 'Dödsbostädning',
  vardering: 'Värdering',
  bortforsling: 'Bortforsling',
}

export default function UppdragPage() {
  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Genomförda uppdrag</h1>
            <p className="text-lg text-stone-500">
              {uppdrag.length === 0
                ? 'Här kommer vi framöver att publicera exempel på uppdrag vi genomfört i Göteborg. Varje dödsbo är unikt — storleken, bohagsmängden och vad som behövs varierar.'
                : 'Här delar vi exempel på uppdrag vi genomfört i Göteborg. Varje dödsbo är unikt — storleken, bohagsmängden och vad som behövs varierar.'}
            </p>
          </div>

          {uppdrag.length === 0 ? (
            <p className="rounded-md border border-dashed border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-500">
              Vi publicerar våra uppdrag här när vi har genomfört dem.
            </p>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uppdrag.map(u => (
              <Link
                key={u.slug}
                href={`/uppdrag/${u.slug}`}
                className="group block bg-white border border-stone-200 hover:border-brand-300 hover:shadow-md rounded-xl p-6 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-semibold text-stone-800 group-hover:text-brand-700 transition-colors">
                    {u.title}
                  </h2>
                  <span className="shrink-0 text-xs text-stone-400">
                    {new Date(u.completedDate).toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full">
                    {u.propertyType}
                  </span>
                  <span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full">
                    {u.size} m²
                  </span>
                  <span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full">
                    {u.durationDays} {u.durationDays === 1 ? 'dag' : 'dagar'}
                  </span>
                </div>

                <p className="text-sm text-stone-500 leading-relaxed mb-3 line-clamp-3">
                  {u.summary}
                </p>

                <div className="flex flex-wrap gap-1">
                  {u.services.map(s => (
                    <span key={s} className="px-2 py-0.5 bg-brand-50 text-brand-700 text-xs rounded-full">
                      {serviceLabels[s] ?? s}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          )}
        </div>
      </section>
    </>
  )
}
