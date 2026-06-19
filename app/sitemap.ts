import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.businessheads.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/experience', '/benefits', '/events', '/stories', '/about', '/join', '/faq']

  return pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
