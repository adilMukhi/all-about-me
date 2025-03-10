import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adilmukhi.vercel.app"

  // Main pages
  const routes = [
    "",
    "/experiences",
    "/background",
    "/portfolio",
    "/portfolio/writing",
    "/portfolio/coding",
    "/portfolio/research",
    "/portfolio/art-sports",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/portfolio") ? 0.7 : 0.8,
  }))

  // Blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/experiences/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}

