import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/structured-data'
import { ALL_CONTENT } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const top: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/research`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/teams`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/solutions`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/alternatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/learn`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/live/media-bias-tracker`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
  ]
  const content: MetadataRoute.Sitemap = ALL_CONTENT.map((p) => ({
    url: `${SITE_URL}/${p.collection}/${p.slug}`,
    lastModified: now,
    changeFrequency: p.collection === 'learn' ? 'monthly' : 'weekly',
    priority: p.collection === 'alternatives' ? 0.8 : p.collection === 'solutions' ? 0.7 : 0.7,
  }))
  return [...top, ...content]
}
