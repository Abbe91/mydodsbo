import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
import { company } from '@/lib/company'

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

      {/* Intro — eyebrow is the one accent moment on this page */}
      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Tjänster
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Dödsbostädning i Göteborg
        </h1>
        <a
          href={`tel:${company.phoneTel}`}
          className="text-stone-700 hover:text-brand-700 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-brand-700 transition-colors"
        >
          Ring oss direkt: {company.phone}
        </a>
      </div>

      {/* Before / after slider */}
      <div className="container pb-10 md:pb-14">
        <p className="text-sm text-stone-500 mb-3">Dra i linjen för att se skillnaden</p>
        <BeforeAfterSlider
          beforeSrc="/images/stadning-innan-768w.webp"
          afterSrc="/images/stadning-efter-768w.webp"
          beforeAvifSrc="/images/stadning-innan-768w.avif"
          afterAvifSrc="/images/stadning-efter-768w.avif"
          beforeWebpSrc="/images/stadning-innan-768w.webp"
          afterWebpSrc="/images/stadning-efter-768w.webp"
          beforeAlt="Dödsbo innan städning"
          afterAlt="Dödsbo efter städning"
          beforeLabel="Innan städning"
          afterLabel="Efter städning"
        />
      </div>

      <div className="container">
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-md md:max-w-lg mb-12">
            När bostaden är tömd återstår städningen. Ska lägenheten lämnas tillbaka till
            hyresvärden eller visas för en köpare behöver den vara ordentligt ren — inte
            bara dammsugen.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Vad som ingår
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-12">
            Vi gör en komplett flyttstädning av hela bostaden: kök med ugn, kyl och frys
            avfrostad, fläkt och skåp rengjorda invändigt, badrum, fönster, golv och
            dörrar. Vi går igenom varje rum så att bostaden är redo att lämnas över.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Vi står för resultatet
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Får du anmärkningar från hyresvärden, mäklaren eller köparen kommer vi tillbaka
            och gör om det som behöver göras. Du ska inte behöva betala för en städning som
            inte höll.
          </p>
        </div>

        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Hur lång tid det tar
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-12">
            En vanlig lägenhet tar normalt en dag. Bokar du tömning och städning tillsammans
            gör vi städningen direkt efter att bostaden är tömd, så att allt är klart i ett
            sammanhang.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Bara städning går också bra
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Du behöver inte anlita oss för tömningen för att få hjälp med städningen. Är
            bostaden redan tömd kommer vi och städar ändå.
          </p>
        </div>

        {/* FAQ — plain, thin rule as separator */}
        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Vanliga frågor om dödsbostädning</h2>
          <div className="divide-y divide-stone-200">
            {faqs.map(f => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>

        {/* Kontakta oss + form, plain — no card, no sidebar */}
        <div className="pb-20 md:pb-28">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6 max-w-prose">
            Kostnadsfri bedömning
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi besiktar och lämnar offert utan kostnad eller förbindelser.
          </p>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </div>
      </div>

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
