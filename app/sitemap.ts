import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://smarterfoundry.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date().toISOString().slice(0, 10)

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
