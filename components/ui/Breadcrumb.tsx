import Link from 'next/link'
import { BreadcrumbJsonLd, type BreadcrumbItem } from '@/components/seo/BreadcrumbJsonLd'

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav aria-label="Brödsmulor" className="text-sm text-stone-500">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={item.href} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true" className="text-stone-300">/</span>}
                {isLast ? (
                  <span className="text-stone-700 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-brand-700 transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
