import type { MetadataRoute } from 'next';
import { getPublishedCities } from '@/lib/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000';
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/rentcar`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/checklist`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    ...getPublishedCities().map((city) => ({
      url: `${baseUrl}/rentcar/${city.countrySlug}/${city.citySlug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }))
  ];
}
