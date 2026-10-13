import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { guides } from '@/content/guides'

export const metadata: Metadata = {
  title:       'Guider om dödsbo',
  description: 'Praktisk information om dödsbo — vad som ska göras, i vilken ordning och vad du behöver tänka på.',
  alternates:  { canonical: '/guide' },
}

const breadcrumbs = [
  { name: 'Hem',    href: '/' },
  { name: 'Guider', href: '/guide' },
]

export default function GuideIndexPage() {
  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Guider
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Guider om dödsbo
        </h1>
        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
          Praktisk information om dödsbo — vad som ska göras, i vilken ordning och vad du behöver tänka på.
        </p>
      </div>

      <div className="container pb-20 md:pb-28">
        <div className="max-w-prose divide-y divide-stone-200">
          {guides.map(g => {
            const formattedDate = new Date(g.publishedDate).toLocaleDateString('sv-SE', {
              month: 'long', year: 'numeric',
            })
            return (
              <Link key={g.slug} href={`/guide/${g.slug}`} className="group block py-8 first:pt-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-brand-700 transition-colors">
                    {g.title}
                  </h2>
                  <span className="shrink-0 text-sm text-stone-400">{formattedDate}</span>
                </div>
                <p className="text-base text-stone-600 leading-relaxed">
                  {g.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
