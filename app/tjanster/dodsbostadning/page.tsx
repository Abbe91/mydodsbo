import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'

export const metadata: Metadata = {
  title:       'Dödsbostädning i Göteborg',
  description: 'Grundlig dödsbostädning i Göteborg. Vi städar hela bostaden efter tömning och lämnar den inflyttningsklar. Kostnadsfri bedömning.',
  alternates:  { canonical: '/tjanster/dodsbostadning' },
}

const faqs = [
  {
    question: 'Vad skiljer dödsbostädning från vanlig städning?',
    answer:   'Dödsbostädning är mer genomgripande — vi rengör utrymmen som kylskåp, ugn, badrumsskåp och garderober inifrån. Målet är att lämna bostaden helt ren och redo för nästa ägare eller hyresgäst.',
  },
  {
    question: 'Kan ni utföra städning separat utan att tömma?',
    answer:   'Ja, vi kan utföra enbart städning om bostaden redan är tömd. Vi kan också kombinera tömning och städning i ett och samma uppdrag om det passar bättre.',
  },
  {
    question: 'Ingår fönsterputs?',
    answer:   'Vi frågar alltid vad du önskar. Fönsterputs kan ingå i uppdraget — det stämmer vi av i samband med bedömningen.',
  },
  {
    question: 'Håller ni för godkänd slutbesiktning?',
    answer:   'Vi städar efter en tydlig standard. Om din bostadsrätt eller hyresrätt kräver godkänd besiktning berättar vi vad vi inkluderar och vad som kan behövas utöver det.',
  },
]

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Tjänster', href: '/tjanster' },
  { name: 'Dödsbostädning', href: '/tjanster/dodsbostadning' },
]

export default function DodsbostadningPage() {
  return (
    <>
      <ServiceJsonLd
        name="Dödsbostädning i Göteborg"
        description="Grundlig städning av dödsbon i Göteborg. Vi lämnar bostaden ren och inflyttningsklar."
        url="/tjanster/dodsbostadning"
      />
      <FaqPageJsonLd faqs={faqs} />

      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Dödsbostädning i Göteborg</h1>

              {/* TODO: Skriv din ingress om vad som är viktigt i en dödsbostädning */}

              <div className="prose-content">
                <h2>Vad ingår i en dödsbostädning?</h2>
                {/* TODO: Lista vad ni städar — rum för rum, vad ni rengör, vad som är standard */}

                <h2>Så utför vi städningen</h2>

                <h3>Kök</h3>
                {/* TODO: Beskriv köksrengöringen — ugn, kylskåp, skåp, ytor */}

                <h3>Badrum</h3>
                {/* TODO: Beskriv badrumsrengöringen */}

                <h3>Övriga rum</h3>
                {/* TODO: Beskriv hur ni städar vardagsrum, sovrum, hall */}

                <h2>Städning i kombination med tömning</h2>
                {/* TODO: Förklara fördelen med att boka tömning och städning tillsammans */}

                <h2>Varför anlita oss för städningen?</h2>
                {/* TODO: Skriv med egna ord — vad ni faktiskt gör som andra kanske inte gör */}
              </div>

              <div className="mt-10 border-t border-stone-200 pt-10">
                <h2 className="text-xl font-semibold mb-6">Vanliga frågor om dödsbostädning</h2>
                <div className="divide-y divide-stone-200">
                  {faqs.map(f => (
                    <FaqItem key={f.question} question={f.question} answer={f.answer} />
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-stone-50 rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-2">Kostnadsfri bedömning</h2>
                <p className="text-stone-500 text-sm mb-5">
                  Vi besiktar och lämnar offert utan kostnad eller förbindelser.
                </p>
                <ContactForm />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-stone-50">
        <div className="container">
          <h2 className="text-xl font-semibold mb-4">Relaterade tjänster</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tjanster/dodsbotomning" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Dödsbotömning
            </Link>
            <Link href="/tjanster/vardering-och-uppkop" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Värdering & uppköp
            </Link>
            <Link href="/tjanster/bortforsling" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Bortforsling
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
