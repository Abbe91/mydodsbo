'use client'

import { useState } from 'react'
import Link from 'next/link'

type NavLink = { href: string; label: string }

const links: NavLink[] = [
  { href: '/',                label: 'Hem' },
  { href: '/tjanster',        label: 'Tjänster' },
  { href: '/tjanster/dodsbotomning',      label: '— Dödsbotömning' },
  { href: '/tjanster/dodsbostadning',     label: '— Dödsbostädning' },
  { href: '/tjanster/vardering-och-uppkop', label: '— Värdering & uppköp' },
  { href: '/tjanster/bortforsling',       label: '— Bortforsling' },
  { href: '/priser',          label: 'Priser' },
  { href: '/uppdrag',         label: 'Uppdrag' },
  { href: '/om-oss',          label: 'Om oss' },
  { href: '/kontakt',         label: 'Kontakt' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label={open ? 'Stäng meny' : 'Öppna meny'}
        className="p-2 rounded-md text-brand-800 hover:bg-brand-100 transition-colors"
      >
        <span className="block w-6 h-0.5 bg-current mb-1.5" />
        <span className="block w-6 h-0.5 bg-current mb-1.5" />
        <span className="block w-6 h-0.5 bg-current" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-stone-200 shadow-lg z-50">
          <nav aria-label="Mobilmeny">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-stone-700 hover:bg-brand-50 hover:text-brand-700 text-sm border-b border-stone-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-4 bg-stone-50">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-warm-600 hover:bg-warm-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Kostnadsfri bedömning
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
