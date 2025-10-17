import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-posts"
import { portfolioItems } from "@/data/portfolio-items"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  // Current date for lastModified
  const currentDate = new Date()

  // Main pages with comprehensive coverage
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/background`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio/writing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/coding`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/research`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/art-sports`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/media`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rss.xml`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.5,
    },
  ]

  // Blog posts (experiences) with proper date handling
  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.slug && post.date)
    .map((post) => ({
      url: `${baseUrl}/experiences/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    }))

  // Portfolio items if they have individual pages
  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems
    .filter((item) => "link" in item && item.link && item.link.startsWith("/"))
    .map((item) => ({
      url: `${baseUrl}${(item as any).link}`,
      lastModified: "date" in item && item.date ? new Date(item.date) : currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    }))

  return [...mainPages, ...blogRoutes, ...portfolioRoutes]
}
