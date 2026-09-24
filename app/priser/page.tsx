import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'

export const metadata: Metadata = {
  title:       'Priser för dödsbotömning och städning',
  description: 'Vad kostar det att tömma och städa ett dödsbo i Göteborg? Vi ger alltid kostnadsfri bedömning på plats. Transparenta priser utan dolda avgifter.',
  alternates:  { canonical: '/priser' },
}

const faqs = [
  {
    question: 'Hur sätter ni priset?',
    answer:   'Vi besiktar alltid bostaden innan vi lämnar en offert. Priset baseras på storlek, mängd bohag, tillgänglighet (hiss, avstånd till bil) och vilka tjänster du önskar. Offerten är fast — inga överraskningar efteråt.',
  },
  {
    question: 'Är bedömningen verkligen kostnadsfri?',
    answer:   'Ja. Vi besiktar på plats utan kostnad och utan att du förbinder dig till något. Du får en skriftlig offert och bestämmer sedan om du vill gå vidare.',
  },
  {
    question: 'Kan priset minska om bohaget har värde?',
    answer:   'Ja, om det finns föremål av ekonomiskt värde i dödsboet kan det påverka det totala priset. Vi berättar mer om detta vid bedömningen.',
  },
  {
    question: 'Gäller RUT-avdrag för dödsbon?',
    answer:   'RUT-avdrag kan tillämpas på städtjänster utförda i en bostad. Huruvida det är tillämpligt på just er situation beror på omständigheterna — vi hjälper er att reda ut det.',
  },
  {
    question: 'Kan ni fakturera dödsboet?',
    answer:   'Ja, vi kan fakturera dödsboet direkt. Vi diskuterar betalningsalternativ i samband med offerten.',
  },
  {
    question: 'Tar ni betalt per timme eller fast pris?',
    answer:   'Vi erbjuder i första hand fast pris för hela uppdraget, baserat på vår bedömning. Det ger dig förutsägbarhet och inga otrevliga överraskningar.',
  },
]

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Priser', href: '/priser' },
]

export default function PriserPage() {
  return (
    <>
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Priser för dödsbotömning och städning
              </h1>
              <p className="text-lg text-stone-500 mb-10">
                Vi tror på transparens. Inga dolda avgifter, inga överraskningar —
                bara ett tydligt fast pris baserat på din specifika situation.
              </p>

              {/* Pricing overview */}
              <div className="space-y-6 mb-12">
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-1">Dödsbotömning</h2>
                  <p className="text-stone-500 text-sm mb-3">
                    Inkluderar inventering, sortering, hantering av bohag och bortforsling.
                  </p>
                  {/* TODO: Ange ditt faktiska prisintervall när du känner dig trygg med det */}
                  <p className="text-sm text-stone-400 italic">Pris anges vid kostnadsfri bedömning på plats.</p>
                </div>

                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-1">Dödsbostädning</h2>
                  <p className="text-stone-500 text-sm mb-3">
                    Grundlig städning av hela bostaden efter tömning.
                  </p>
                  {/* TODO: Ange ditt faktiska prisintervall */}
                  <p className="text-sm text-stone-400 italic">Pris anges vid kostnadsfri bedömning på plats.</p>
                </div>

                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-1">Kombinationspaket – tömning & städning</h2>
                  <p className="text-stone-500 text-sm mb-3">
                    Det kompletta paketet: vi hanterar allt från tömning till slutstädning.
                  </p>
                  {/* TODO: Beskriv paketerbjudandet och eventuell prisförmån */}
                  <p className="text-sm text-stone-400 italic">Pris anges vid kostnadsfri bedömning på plats.</p>
                </div>

                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h2 className="text-lg font-semibold mb-1">Värdering & bortforsling</h2>
                  <p className="text-stone-500 text-sm mb-3">
                    Inventering, värdering av bohag och transport.
                  </p>
                  {/* TODO: Beskriv prissättning för dessa tjänster */}
                  <p className="text-sm text-stone-400 italic">Pris anges vid kostnadsfri bedömning på plats.</p>
                </div>
              </div>

              <div className="mt-10 border-t border-stone-200 pt-10">
                <h2 className="text-xl font-semibold mb-6">Vanliga frågor om priser</h2>
                <div className="divide-y divide-stone-200">
                  {faqs.map(f => (
                    <FaqItem key={f.question} question={f.question} answer={f.answer} />
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-brand-50 border border-brand-200 rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-2">Få en kostnadsfri offert</h2>
                <p className="text-stone-500 text-sm mb-5">
                  Vi besiktar alltid på plats och lämnar ett fast pris — utan förbindelser.
                </p>
                <ContactForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
