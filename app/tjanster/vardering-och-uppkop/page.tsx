import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
import { vadHanderMedSakernaId } from '@/content/vad-hander-med-sakerna'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title:       'Värdering & uppköp av dödsbo i Göteborg',
  description: 'Vi inventerar och värderar bohaget i dödsbon i Göteborg. Kan köpa upp föremål av värde direkt. Kostnadsfri bedömning.',
  alternates:  { canonical: '/tjanster/vardering-och-uppkop' },
}

const faqs = [
  {
    question: 'Vad kan ni värdera?',
    answer:   'Vi tittar på möbler, konst, silver, smycken, antika föremål och övrigt bohag som kan ha ekonomiskt värde. Vi berättar ärligt vad vi bedömer och vad vi inte har kompetens att värdera — i sådana fall hjälper vi dig vidare.',
  },
  {
    question: 'Köper ni upp saker direkt?',
    answer:   'Ja, vi kan köpa upp föremål av värde direkt om du och vi är överens om priset. Det förenklar processen och du slipper sälja separat.',
  },
  {
    question: 'Kostar värderingen något?',
    answer:   'Värderingen ingår när vi utför tömning eller annat uppdrag åt dig. Kontakta oss för att diskutera ditt specifika fall.',
  },
  {
    question: 'Vad händer om ni hittar något oväntat värdefullt?',
    answer:   'Vi informerar alltid dig som beställare direkt. Inget säljs eller avyttras utan ditt godkännande.',
  },
]

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Tjänster', href: '/tjanster' },
  { name: 'Värdering & uppköp', href: '/tjanster/vardering-och-uppkop' },
]

export default function VarderingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Värdering och uppköp av dödsbo i Göteborg"
        description="Vi inventerar och värderar bohag i dödsbon och kan köpa upp föremål av värde direkt."
        url="/tjanster/vardering-och-uppkop"
      />
      <FaqPageJsonLd faqs={faqs} />

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
          Värdering &amp; uppköp av dödsbo
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
          <source type="image/avif" srcSet="/images/vardering-600w.avif" />
          <source type="image/webp" srcSet="/images/vardering-600w.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vardering-600w.jpg"
            alt="Värdering och uppköp av dödsbo"
            width={600}
            height={448}
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      <div className="container">
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Vad vi inventerar och värderar
          </h2>
          {/* TODO: Beskriv vilka kategorier av föremål ni tittar på och hur ni bedömer dem */}

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-4">
            Så går en värdering till
          </h2>
          {/* TODO: Beskriv processen steg för steg — hur ni dokumenterar, hur ni kommunicerar med familjen */}

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-4">
            Uppköp direkt på plats
          </h2>
          {/* TODO: Förklara hur uppköpsprocessen fungerar — hur ni sätter pris, hur betalning sker */}
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Föremål vi inte köper upp direkt kan vi sälja vidare åt dig — läs mer under{' '}
            <Link href={`/tjanster/dodsbotomning#${vadHanderMedSakernaId}`} className="text-brand-700 underline hover:text-brand-800">
              Vad händer med sakerna?
            </Link>{' '}
            på sidan om dödsbotömning.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-4">
            När vi inte kan värdera
          </h2>
          {/* TODO: Var ärlig om gränserna för er kompetens och hur ni hjälper vidare */}
        </div>

        <div className="relative max-w-3xl aspect-video mb-16 md:mb-24 overflow-hidden rounded-lg">
          <picture>
            <source type="image/avif" srcSet="/images/vardering-600w.avif" />
            <source type="image/webp" srcSet="/images/vardering-600w.webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/vardering-600w.jpg"
              alt="Värdering och uppköp av dödsbo"
              width={600}
              height={448}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </picture>
        </div>

        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Vanliga frågor om värdering</h2>
          <div className="divide-y divide-stone-200">
            {faqs.map(f => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>

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
            <Link href="/tjanster/dodsbostadning" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Dödsbostädning
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
