import type { MetadataRoute } from 'next'
import { company } from '@/lib/company'

export const dynamic = 'force-static'
// Note: public/__forms.html (Netlify Forms detection stub) is intentionally
// never listed here — see also its disallow entry in app/robots.ts.
import { uppdrag } from '@/content/uppdrag'
import { guides } from '@/content/guides'

const base = company.siteUrl

type SitemapEntry = MetadataRoute.Sitemap[number]

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.SITE_LAUNCHED !== 'true') {
    return []
  }

  const now = new Date()

  const staticPages: SitemapEntry[] = [
    { url: base,                                     priority: 1.0,  changeFrequency: 'weekly',  lastModified: now },
    { url: `${base}/tjanster`,                       priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/tjanster/dodsbotomning`,         priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/tjanster/dodsbostadning`,        priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/tjanster/vardering-och-uppkop`,  priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/tjanster/bortforsling`,          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/priser`,                         priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/omraden/goteborg`,               priority: 0.85, changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/uppdrag`,                        priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${base}/om-oss`,                         priority: 0.6,  changeFrequency: 'yearly',  lastModified: now },
    { url: `${base}/kontakt`,                        priority: 0.8,  changeFrequency: 'yearly',  lastModified: now },
  ]

  const uppdragPages: SitemapEntry[] = uppdrag.map(u => ({
    url:             `${base}/uppdrag/${u.slug}`,
    lastModified:    new Date(u.completedDate),
    changeFrequency: 'never' as const,
    priority:        0.5,
  }))

  const guidePages: SitemapEntry[] = guides.map(g => ({
    url:             `${base}/guide/${g.slug}`,
    lastModified:    new Date(g.publishedDate),
    changeFrequency: 'monthly' as const,
    priority:        0.75,
  }))

  return [...staticPages, ...uppdragPages, ...guidePages]
}
