import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'

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

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Värdering & uppköp av dödsbo</h1>

              {/* TODO: Skriv om varför en noggrann inventering är viktig för anhöriga */}

              <div className="prose-content">
                <h2>Vad vi inventerar och värderar</h2>
                {/* TODO: Beskriv vilka kategorier av föremål ni tittar på och hur ni bedömer dem */}

                <h2>Så går en värdering till</h2>
                {/* TODO: Beskriv processen steg för steg — hur ni dokumenterar, hur ni kommunicerar med familjen */}

                <h2>Uppköp direkt på plats</h2>
                {/* TODO: Förklara hur uppköpsprocessen fungerar — hur ni sätter pris, hur betalning sker */}

                <h2>När vi inte kan värdera</h2>
                {/* TODO: Var ärlig om gränserna för er kompetens och hur ni hjälper vidare */}
              </div>

              <div className="mt-10 border-t border-stone-200 pt-10">
                <h2 className="text-xl font-semibold mb-6">Vanliga frågor om värdering</h2>
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
