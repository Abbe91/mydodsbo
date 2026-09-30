import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ContactForm } from '@/components/forms/ContactForm'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title:       'Kontakta oss',
  description: `Kontakta ${company.name} för en kostnadsfri bedömning av dödsboet. Ring, skicka meddelande eller fyll i formuläret.`,
  alternates:  { canonical: '/kontakt' },
}

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Kontakt', href: '/kontakt' },
]

const dagSv: Record<string, string> = {
  Monday: 'Måndag', Tuesday: 'Tisdag', Wednesday: 'Onsdag',
  Thursday: 'Torsdag', Friday: 'Fredag', Saturday: 'Lördag', Sunday: 'Söndag',
}

export default function KontaktPage() {
  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Kontakt
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Kontakta oss
        </h1>
        <a
          href={`tel:${company.phoneTel}`}
          className="text-stone-700 hover:text-brand-700 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-brand-700 transition-colors"
        >
          Ring oss direkt: {company.phone}
        </a>
      </div>

      <div className="container">
        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose pb-12 md:pb-16">
          Vi erbjuder alltid en kostnadsfri bedömning på plats — i Göteborg och
          hela Västra Götaland. Hör av dig, inga förbindelser.
        </p>

        <dl className="max-w-prose space-y-6 mb-12 md:mb-16">
          <div>
            <dt className="text-xs text-stone-400 uppercase tracking-wide mb-1">Telefon</dt>
            <dd>
              <a
                href={`tel:${company.phoneTel}`}
                className="text-lg font-medium text-brand-700 hover:text-brand-800 transition-colors"
              >
                {company.phone}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-xs text-stone-400 uppercase tracking-wide mb-1">WhatsApp</dt>
            <dd>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-stone-700 hover:text-brand-700 transition-colors"
              >
                Skicka meddelande
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-xs text-stone-400 uppercase tracking-wide mb-1">E-post</dt>
            <dd>
              <a
                href={`mailto:${company.email}`}
                className="text-lg font-medium text-stone-700 hover:text-brand-700 transition-colors"
              >
                {company.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-xs text-stone-400 uppercase tracking-wide mb-1">Adress</dt>
            <dd className="text-lg font-medium text-stone-700">
              {company.address.street}<br />
              {company.address.zip} {company.address.city}
            </dd>
          </div>

          <div>
            <dt className="text-xs text-stone-400 uppercase tracking-wide mb-1">Öppettider</dt>
            <dd>
              {company.openingHours.map((h, i) => (
                <p key={i} className="text-lg font-medium text-stone-700">
                  {h.days.length > 1
                    ? `${dagSv[h.days[0]]} – ${dagSv[h.days[h.days.length - 1]]}`
                    : dagSv[h.days[0]]}: {h.opens}–{h.closes}
                </p>
              ))}
            </dd>
          </div>
        </dl>

        <div className="pb-20 md:pb-28">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6 max-w-prose">
            Skicka en förfrågan
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi återkommer inom en arbetsdag med en kostnadsfri bedömning.
          </p>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
