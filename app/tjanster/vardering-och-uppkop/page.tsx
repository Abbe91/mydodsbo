import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
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
            Värdering och uppköp
          </h2>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            Vem som gör värderingen
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Värderingen görs av en av våra medarbetare som har arbetat med värdering i över
            tjugo år. Han driver också en egen antikaffär och har sålt via Tradera under
            lång tid. Det betyder att bedömningen görs av någon som faktiskt vet vad saker
            säljs för, inte av en gissning på plats.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            Vad vi värderar
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Vi går igenom hela bohaget och tittar på allt som kan ha ett ekonomiskt värde:
            möbler, antikviteter, konst, mattor, porslin, silver, smycken, klockor och
            samlarföremål. Är du osäker på om något är värt något behöver du inte sortera
            i förväg — vi tittar på allt.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            När vi behöver en andra bedömning
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Är ett föremål svårbedömt eller kan vara värt mycket tar vi in en bedömning
            från auktionshus innan vi sätter ett värde. Vi gissar hellre inte än att du får
            för lite betalt.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            Hur uppköpet går till
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Vill du sälja direkt köper vi föremålen av dig och betalar ut summan.
            Alternativt räknas värdet av mot kostnaden för arbetet, så att du får en lägre
            faktura. Vilket som passar bäst beror på situationen, och du bestämmer — vad
            som gäller står i offerten innan du skriver under.
          </p>
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
