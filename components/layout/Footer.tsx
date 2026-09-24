import Link from 'next/link'
import { company } from '@/lib/company'

const services = [
  { href: '/tjanster/dodsbotomning',        label: 'Dödsbotömning' },
  { href: '/tjanster/dodsbostadning',       label: 'Dödsbostädning' },
  { href: '/tjanster/vardering-och-uppkop', label: 'Värdering & uppköp' },
  { href: '/tjanster/bortforsling',         label: 'Bortforsling' },
]

const info = [
  { href: '/priser',             label: 'Priser' },
  { href: '/omraden/goteborg',   label: 'Göteborg' },
  { href: '/uppdrag',            label: 'Genomförda uppdrag' },
  { href: '/om-oss',             label: 'Om oss' },
  { href: '/kontakt',            label: 'Kontakt' },
]

const legal = [
  { href: '/integritetspolicy', label: 'Integritetspolicy' },
  { href: '/cookies',           label: 'Cookiepolicy' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-900 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-white font-semibold text-lg mb-1">{company.name}</p>
            <p className="text-sm text-stone-400 mb-4">{company.serviceArea}</p>
            <p className="text-sm">Org.nr: {company.orgNr}</p>
            <p className="text-sm mt-1">{company.address.street}</p>
            <p className="text-sm">{company.address.zip} {company.address.city}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Tjänster</h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Information</h3>
            <ul className="space-y-2">
              {info.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Öppettider</h4>
              {company.openingHours.map((h, i) => (
                <p key={i} className="text-xs text-stone-500">
                  {h.days.length > 1
                    ? `${h.days[0].slice(0, 3)}–${h.days[h.days.length - 1].slice(0, 3)}`
                    : h.days[0].slice(0, 3)}{' '}
                  {h.opens}–{h.closes}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-stone-500">
            © {currentYear} {company.legalName}. Alla rättigheter förbehållna.
          </p>
          <ul className="flex gap-4">
            {legal.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
