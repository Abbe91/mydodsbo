import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { company } from '@/lib/company'

const navLinks = [
  { href: '/tjanster', label: 'Tjänster' },
  { href: '/priser',   label: 'Priser' },
  { href: '/uppdrag',  label: 'Uppdrag' },
  { href: '/om-oss',   label: 'Om oss' },
]

// logo.png has no baked-in transparency and no wordmark text of its own —
// it's the house/heart/hand mark only. Pair it with a plain-text wordmark
// so the brand name stays legible without relying on a raster image for it.
// logo-header.png/.webp are pre-generated 128x128 exports of the original
// public/images/logo.png (1254x1254) — regenerate both if the source logo
// changes; the header should never ship the full-size original.
function Logo() {
  return (
    <picture>
      <source srcSet="/images/logo-header.webp" type="image/webp" />
      <img
        src="/images/logo-header.png"
        alt={company.name}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
      />
    </picture>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" aria-label={`${company.name} – startsidan`} className="flex items-center gap-2.5">
            <Logo />
            <span className="leading-tight">
              <span className="block text-sm font-bold text-brand-700 tracking-wide">TRYGG</span>
              <span className="block text-sm font-medium text-brand-700 tracking-wide -mt-0.5">DÖDSBO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Huvudnavigation" className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-brand-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${company.phoneTel}`}
              className="text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors"
            >
              {company.phone}
            </a>
            <Link
              href="/kontakt"
              className="bg-warm-600 hover:bg-warm-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Kostnadsfri bedömning
            </Link>
          </div>

          {/* Mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
