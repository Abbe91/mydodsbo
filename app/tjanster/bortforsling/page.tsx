import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'

export const metadata: Metadata = {
  title:       'Bortforsling av dödsbo i Göteborg',
  description: 'Miljöansvarigt bortforsling av dödsbo i Göteborg. Vi transporterar bohag till återvinning, second hand och tipp. Kostnadsfri bedömning.',
  alternates:  { canonical: '/tjanster/bortforsling' },
}

const faqs = [
  {
    question: 'Vart tar godset vägen?',
    answer:   'Vi sorterar noggrant och ser till att återbrukbart gods skänks eller säljs vidare. Det som inte kan återbrukas lämnas till godkänd återvinningscentral. Vi kan redovisa vart allting tagit vägen.',
  },
  {
    question: 'Kan ni forsla bort tunga möbler från övervåning?',
    answer:   'Ja, vi hanterar tunglyft och bärning av möbler i alla typer av bostäder. Det kan påverka priset, vilket vi redovisar i offerten.',
  },
  {
    question: 'Ingår bortforsling i tömningsuppdraget?',
    answer:   'Bortforsling ingår normalt i ett tömningsuppdrag. Om du bara behöver hjälp med att forsla bort specifika föremål kan vi diskutera ett separat uppdrag.',
  },
  {
    question: 'Behöver jag anlita er för hela tömningen för att få bortforsling?',
    answer:   'Nej, vi kan hjälpa med enbart bortforsling om du och familjen redan tömt bostaden och bara behöver få bort resterna.',
  },
]

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Tjänster', href: '/tjanster' },
  { name: 'Bortforsling', href: '/tjanster/bortforsling' },
]

export default function BortforslingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Bortforsling av dödsbo i Göteborg"
        description="Miljöansvarigt bortforsling av bohag från dödsbon i Göteborg. Vi transporterar till återvinning, second hand och tipp."
        url="/tjanster/bortforsling"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Bortforsling av dödsbo i Göteborg</h1>

              {/* TODO: Skriv om vikten av ansvarsfull bortforsling och miljöhänsyn */}

              <div className="prose-content">
                <h2>Hur vi hanterar bortforsling</h2>
                {/* TODO: Beskriv er process — hur ni sorterar, väljer mottagare, dokumenterar */}

                <h2>Återbruk och återvinning</h2>
                {/* TODO: Förklara hur ni prioriterar återbruk och vad ni lämnar till välgörenhet */}

                <h2>Transport och fordon</h2>
                {/* TODO: Beskriv er fordonsflotta och hur ni hanterar transport praktiskt */}

                <h2>Dokumentation</h2>
                {/* TODO: Beskriv om/hur ni dokumenterar vart gods tagit vägen */}
              </div>

              <div className="mt-10 border-t border-stone-200 pt-10">
                <h2 className="text-xl font-semibold mb-6">Vanliga frågor om bortforsling</h2>
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
            <Link href="/tjanster/vardering-och-uppkop" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Värdering & uppköp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
