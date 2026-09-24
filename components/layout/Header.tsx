import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { company } from '@/lib/company'

const navLinks = [
  { href: '/tjanster', label: 'Tjänster' },
  { href: '/priser',   label: 'Priser' },
  { href: '/uppdrag',  label: 'Uppdrag' },
  { href: '/om-oss',   label: 'Om oss' },
]

function Logo() {
  return (
    <svg
      width="160"
      height="32"
      viewBox="0 0 160 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={company.name}
      role="img"
    >
      {/* Shield / checkmark mark */}
      <path
        d="M4 6 L14 2 L24 6 L24 16 C24 22 14 28 14 28 C14 28 4 22 4 16 Z"
        fill="#1a5472"
      />
      <path d="M9 15 L13 19 L20 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Wordmark */}
      <text x="30" y="13" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#1a5472" letterSpacing="0.5">
        TRYGG
      </text>
      <text x="30" y="26" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="400" fill="#1a5472" letterSpacing="0.5">
        DÖDSBO
      </text>
    </svg>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" aria-label={`${company.name} – startsidan`}>
            <Logo />
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
