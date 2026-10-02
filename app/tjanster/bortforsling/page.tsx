import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
import { company } from '@/lib/company'

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

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Tjänster
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Bortforsling av dödsbo i Göteborg
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
          <source type="image/avif" srcSet="/images/bortforsling-600w.avif" />
          <source type="image/webp" srcSet="/images/bortforsling-600w.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bortforsling-600w.jpg"
            alt="Bortforsling av dödsbo i Göteborg"
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
            Bortforsling och återvinning
          </h2>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            Vi tar hand om hela bohaget
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Vi tömmer och forslar bort allt som ska ut ur bostaden — möbler, husgeråd,
            vitvaror, kartonger och det som står kvar i förråd, källare och på vinden.
            Du behöver inte sortera eller bära ut något själv innan vi kommer.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            Fordon och bemanning
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Vi har både lastbil och skåpbil och väljer fordon efter hur mycket som ska ut
            och hur bostaden ligger till. Vi kör alltid inom tillåten lastvikt.
          </p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Hur många vi är beror på uppdraget. En mindre bostad klarar vi med tre
            personer, och vid större uppdrag är vi upp till sex. Det gör att vi oftast blir
            klara på en till två dagar.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            Farligt avfall
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Färg, lösningsmedel, kemikalier och batterier räknas som farligt avfall och
            har egna regler för transport och hantering. Vi lämnar sådant på rätt
            mottagningsstation — du behöver inte ta hand om det själv, men vi går igenom
            det med dig innan så att du vet vad som gäller.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            Dokumentation om du vill ha det
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Vill du ha dokumentation på vad som forslats bort och var det lämnats ordnar vi
            det. Säg till innan vi skriver avtalet så lägger vi in det i uppdraget. Det är
            vanligt när anhöriga bor på annan ort eller utomlands och inte kan vara på
            plats.
          </p>
        </div>

        <div className="relative max-w-3xl aspect-video mb-16 md:mb-24 overflow-hidden rounded-lg">
          <picture>
            <source type="image/avif" srcSet="/images/bortforsling-600w.avif" />
            <source type="image/webp" srcSet="/images/bortforsling-600w.webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bortforsling-600w.jpg"
              alt="Bortforsling av dödsbo i Göteborg"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </picture>
        </div>

        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Vanliga frågor om bortforsling</h2>
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
            <Link href="/tjanster/vardering-och-uppkop" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Värdering & uppköp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
