import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'

export const metadata: Metadata = {
  title:       'Dödsbotömning i Göteborg',
  description: 'Professionell dödsbotömning i Göteborg. Vi tömmer bostaden med omsorg, sorterar bohaget och hanterar bortforsling. Kostnadsfri bedömning.',
  alternates:  { canonical: '/tjanster/dodsbotomning' },
}

const faqs = [
  {
    question: 'Vad ingår i en dödsbotömning?',
    answer:   'Tömning innebär att vi tar hand om allt bohag i bostaden — möbler, kläder, husgeråd, papper och övrigt. Vi sorterar vad som kan återbrukas, vad som skänks och vad som ska till tippen.',
  },
  {
    question: 'Behöver vi närvara under tömningen?',
    answer:   'Det är inte nödvändigt, men om du vill vara med och visa vad som ska tas tillvara är det välkommet. Många anhöriga föredrar att inte närvara, och det fungerar lika bra.',
  },
  {
    question: 'Vad händer med saker vi vill behålla?',
    answer:   'Innan vi börjar stämmer vi av vilka föremål som ska sparas för familjen. Dessa märker vi och ställer undan. Allt övrigt hanteras enligt överenskommelse.',
  },
  {
    question: 'Kan ni tömma en lägenhet på övervåning utan hiss?',
    answer:   'Ja, vi hanterar alla typer av bostäder inklusive utan hiss. Det kan påverka tidsåtgången och priset, vilket vi redovisar tydligt i offerten.',
  },
]

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Tjänster', href: '/tjanster' },
  { name: 'Dödsbotömning', href: '/tjanster/dodsbotomning' },
]

export default function DodsbotomningPage() {
  return (
    <>
      <ServiceJsonLd
        name="Dödsbotömning i Göteborg"
        description="Professionell tömning av dödsbon i Göteborg. Vi hanterar hela processen med omsorg och respekt."
        url="/tjanster/dodsbotomning"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Dödsbotömning i Göteborg</h1>

              {/* TODO: Skriv din personliga ingress om varför ni startade och vad som driver er */}

              <div className="prose-content">
                <h2>Vad ingår i en dödsbotömning?</h2>
                {/* TODO: Beskriv exakt vad ni gör steg för steg — var specifik och ärlig */}

                <h2>Så går en dödsbotömning till</h2>

                <h3>1. Inventering och genomgång</h3>
                {/* TODO: Beskriv hur ni börjar varje uppdrag — vad ni tittar på, vad ni frågar */}

                <h3>2. Sortering av bohag</h3>
                {/* TODO: Beskriv hur ni sorterar — vad går till återbruk, välgörenhet, tipp */}

                <h3>3. Hantering av värdesaker</h3>
                {/* TODO: Beskriv hur ni identifierar och hanterar värdesaker */}

                <h3>4. Bortforsling</h3>
                {/* TODO: Beskriv hur bortforsling går till och var ni lämnar gods */}

                <h2>Vad påverkar priset?</h2>
                {/* TODO: Skriv ärligt om vilka faktorer som påverkar priset — utan att locka med påhittade rabatter */}

                <h2>Varför anlita oss?</h2>
                {/* TODO: Skriv med dina egna ord — inte generiska säljfraser */}
              </div>

              <div className="mt-10 border-t border-stone-200 pt-10">
                <h2 className="text-xl font-semibold mb-6">Vanliga frågor om dödsbotömning</h2>
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
            <Link href="/tjanster/dodsbostadning" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Dödsbostädning
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
