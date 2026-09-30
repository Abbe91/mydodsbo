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

              <div className="prose-content">
                <h2>Vad kostar det?</h2>
                <p>
                  Vi lämnar alltid ett fast pris efter hembesöket. Du vet exakt vad arbetet
                  kostar innan vi sätter igång, och priset ändras inte längs vägen.
                </p>

                <h3>Varför vi inte har en prislista</h3>
                <p>
                  Två dödsbon är sällan lika. Priset beror på hur mycket bohag som finns, hur
                  bostaden ser ut och vad som ska göras. Därför sätter vi priset först när vi
                  har varit på plats och sett utrymmena — det är enda sättet att ge dig en
                  siffra som håller.
                </p>

                <h3>Ibland kostar det ingenting</h3>
                <p>
                  Finns det möbler, konst eller annat av värde räknas det av mot kostnaden för
                  arbetet. Ibland täcker värdet hela jobbet, och ibland blir det pengar över
                  till dig. Hur det ser ut i ditt fall får du veta i offerten, innan du
                  bestämmer dig.
                </p>

                <h3>Det här påverkar priset</h3>
                <ul>
                  <li>Mängden bohag som ska tömmas</li>
                  <li>Bostadens storlek</li>
                  <li>
                    Våningsplan och hiss — saknas hiss, eller är hissen för liten för möbler,
                    behöver allt bäras i trappan
                  </li>
                  <li>
                    Vilka tjänster du vill ha med, till exempel flyttstädning eller röjning
                    av trädgården
                  </li>
                </ul>

                <h3>Du betalar efteråt</h3>
                <p>
                  Fakturan kommer när arbetet är utfört och du har godkänt resultatet. Ingen
                  förskottsbetalning.
                </p>
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
