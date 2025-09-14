import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phenomsec.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/factorial-separation-duties`,
      lastModified: new Date('2023-03-21'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/calculus-crossroads-policy-pyramid`,
      lastModified: new Date('2023-04-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}