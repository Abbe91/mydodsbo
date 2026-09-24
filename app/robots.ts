import type { MetadataRoute } from 'next'
import { company } from '@/lib/company'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_LAUNCHED !== 'true') {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules:   { userAgent: '*', allow: '/', disallow: ['/tack'] },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  }
}
