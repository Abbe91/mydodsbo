import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
import { company } from '@/lib/company'

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

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Priser
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Priser för dödsbotömning och städning
        </h1>
        <a
          href={`tel:${company.phoneTel}`}
          className="text-stone-700 hover:text-brand-700 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-brand-700 transition-colors"
        >
          Ring oss direkt: {company.phone}
        </a>
      </div>

      <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
        <picture>
          <source type="image/avif" srcSet="/images/dodsbo-trygg-600w.avif" />
          <source type="image/webp" srcSet="/images/dodsbo-trygg-600w.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/dodsbo-trygg-600w.jpg"
            alt="Trygg Dödsbo – dödsbotömning i Göteborg"
            width={600}
            height={450}
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      <div className="container">
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Vad kostar det?
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-12">
            Vi lämnar alltid ett fast pris efter hembesöket. Du vet exakt vad arbetet
            kostar innan vi sätter igång, och priset ändras inte längs vägen.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            Varför vi inte har en prislista
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Två dödsbon är sällan lika. Priset beror på hur mycket bohag som finns, hur
            bostaden ser ut och vad som ska göras. Därför sätter vi priset först när vi
            har varit på plats och sett utrymmena — det är enda sättet att ge dig en
            siffra som håller.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            Ibland kostar det ingenting
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Finns det möbler, konst eller annat av värde räknas det av mot kostnaden för
            arbetet. Ibland täcker värdet hela jobbet, och ibland blir det pengar över
            till dig. Hur det ser ut i ditt fall får du veta i offerten, innan du
            bestämmer dig.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            Det här påverkar priset
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
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

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            Du betalar efteråt
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Fakturan kommer när arbetet är utfört och du har godkänt resultatet. Ingen
            förskottsbetalning.
          </p>
        </div>

        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Vanliga frågor om priser</h2>
          <div className="divide-y divide-stone-200">
            {faqs.map(f => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>

        <div className="pb-20 md:pb-28">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6 max-w-prose">
            Få en kostnadsfri offert
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi besiktar alltid på plats och lämnar ett fast pris — utan förbindelser.
          </p>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
