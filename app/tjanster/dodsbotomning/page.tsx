import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
import { VadHanderMedSakerna } from '@/components/content/VadHanderMedSakerna'
import { company } from '@/lib/company'

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

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Tjänster
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Dödsbotömning i Göteborg
        </h1>
        <a
          href={`tel:${company.phoneTel}`}
          className="text-stone-700 hover:text-brand-700 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-brand-700 transition-colors"
        >
          Ring oss direkt: {company.phone}
        </a>
      </div>

      <div className="w-full aspect-[21/9] md:aspect-[3/1] border-y border-dashed border-stone-300 bg-stone-100 flex items-center justify-center">
        <p className="text-sm text-stone-400 italic">Bildplats — foto från en tömning tillkommer</p>
      </div>

      <div className="container">
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Vad ingår i en dödsbotömning?
          </h2>
          {/* TODO: Beskriv exakt vad ni gör steg för steg — var specifik och ärlig */}

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-6">
            Så går en dödsbotömning till
          </h2>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            1. Inventering och genomgång
          </h3>
          {/* TODO: Beskriv hur ni börjar varje uppdrag — vad ni tittar på, vad ni frågar */}

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            2. Hantering av värdesaker
          </h3>
          {/* TODO: Beskriv hur ni identifierar och hanterar värdesaker */}

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            3. Bortforsling
          </h3>
          {/* TODO: Beskriv hur bortforsling går till och var ni lämnar gods */}

          <div className="mt-12">
            <VadHanderMedSakerna />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-4">
            Vad påverkar priset?
          </h2>
          {/* TODO: Skriv ärligt om vilka faktorer som påverkar priset — utan att locka med påhittade rabatter */}

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-4">
            Varför anlita oss?
          </h2>
          {/* TODO: Skriv med dina egna ord — inte generiska säljfraser */}
        </div>

        {/* Contained image slot — second photo goes here later */}
        <div className="max-w-3xl aspect-video border border-dashed border-stone-300 bg-stone-100 flex items-center justify-center mb-16 md:mb-24">
          <p className="text-sm text-stone-400 italic">Bildplats — foto från ett tömningsuppdrag tillkommer</p>
        </div>

        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Vanliga frågor om dödsbotömning</h2>
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
