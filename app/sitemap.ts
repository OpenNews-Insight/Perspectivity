import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/structured-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/research`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/teams`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
