import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-posts"
import { certificates } from "@/data/certificates"
import { educationData } from "@/data/education"
import { honorsAwards } from "@/data/honors-awards"
import { mediaItems } from "@/data/media-items"
import { portfolioItems } from "@/data/portfolio-items"
import { workExperiences } from "@/data/work-experience"
import { getCertificatePath, getEducationPath, getHonorPath, getMediaPath, getWorkExperiencePath, getVolunteerPath } from "@/lib/seo-paths"
import { volunteerWork } from "@/data/volunteer-work"

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
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience/drinterested`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/volunteer`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/honors`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
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
      url: `${baseUrl}/profiles`,
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
    {
      url: `${baseUrl}/sitemap-images.xml`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.4,
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

  const experienceRoutes: MetadataRoute.Sitemap = workExperiences
    .filter((experience) => experience.company !== "Dr. Interested")
    .map((experience) => ({
      url: `${baseUrl}${getWorkExperiencePath(experience)}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    }))

  const certificateRoutes: MetadataRoute.Sitemap = certificates.map((certificate) => ({
    url: `${baseUrl}${getCertificatePath(certificate)}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const educationRoutes: MetadataRoute.Sitemap = educationData.map((education) => ({
    url: `${baseUrl}${getEducationPath(education)}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.65,
  }))

  const volunteerRoutes: MetadataRoute.Sitemap = volunteerWork.map((volunteer) => ({
    url: `${baseUrl}${getVolunteerPath(volunteer)}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const honorRoutes: MetadataRoute.Sitemap = honorsAwards.map((award) => ({
    url: `${baseUrl}${getHonorPath(award)}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const mediaRoutes: MetadataRoute.Sitemap = mediaItems.map((item) => ({
    url: `${baseUrl}${getMediaPath(item)}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [
    ...mainPages,
    ...blogRoutes,
    ...portfolioRoutes,
    ...experienceRoutes,
    ...certificateRoutes,
    ...educationRoutes,
    ...volunteerRoutes,
    ...honorRoutes,
    ...mediaRoutes,
  ]
}
