import type { ReactNode } from 'react'
import Link from 'next/link'

type ServiceCardProps = {
  href:        string
  icon:        ReactNode
  title:       string
  description: string
}

export function ServiceCard({ href, icon, title, description }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-stone-200 hover:border-brand-300 hover:shadow-md rounded-xl p-6 transition-all"
    >
      <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-700 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-stone-800 group-hover:text-brand-700 transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-700 group-hover:gap-1.5 transition-all gap-1">
        Läs mer
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
