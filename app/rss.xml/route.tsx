import { NextResponse } from "next/server"
import { blogPosts } from "@/data/blog-posts"
import { portfolioItems } from "@/data/portfolio-items"
import { mediaItems } from "@/data/media-items"

// XML encoding function to escape special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      case "'":
        return "&apos;"
      case '"':
        return "&quot;"
      default:
        return c
    }
  })
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  // Professional photos from sitemap
  const professionalPhotos = [
    "/pictures/adil-mukhi-tedx-speaking-1.jpg",
    "/pictures/adil-mukhi-tedx-speaking-2.jpg",
    "/pictures/adil-mukhi-formal-headshot.jpg",
    "/pictures/adil-mukhi-camera-photographer.jpg",
    "/pictures/adil-mukhi-dr-interested-founder.jpg",
    "/pictures/adil-mukhi-informal-portrait.jpg",
    "/pictures/adil-mukhi-lab-coat-medical-research.jpg",
    "/pictures/adil-mukhi-tennis-sports.jpg",
    "/pictures/adil-mukhi-graduation.jpg",
  ]

  const rssItems: string[] = []

  // Add professional photos portfolio
  rssItems.push(`
    <item>
      <title>${escapeXml("Adil Mukhi - Professional Portfolio Photos")}</title>
      <link>${baseUrl}/about</link>
      <description>${escapeXml("Professional photos of Adil Mukhi including TEDx speaking, medical research, tennis, and formal portraits. Medical student, researcher, and entrepreneur.")}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/portfolio/professional-photos</guid>
      ${professionalPhotos
        .map(
          (photo) => `
      <enclosure url="${baseUrl}${photo}" type="image/jpeg" />
      <media:content url="${baseUrl}${photo}" type="image/jpeg" medium="image" />
      `,
        )
        .join("")}
    </item>
  `)

  // Add blog posts/experiences
  blogPosts.forEach((post) => {
    const images = post.images || []
    const imageElements = images
      .map(
        (image) => `
      <enclosure url="${baseUrl}${image}" type="image/jpeg" />
      <media:content url="${baseUrl}${image}" type="image/jpeg" medium="image" />
    `,
      )
      .join("")

    rssItems.push(`
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${baseUrl}/experiences/${post.slug}</link>
        <description>${escapeXml(post.description)}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>${baseUrl}/experiences/${post.slug}</guid>
        ${imageElements}
      </item>
    `)
  })

  // Add portfolio items
  portfolioItems.forEach((item) => {
    const images = item.images || []
    const imageElements = images
      .map(
        (image) => `
      <enclosure url="${baseUrl}${image}" type="image/jpeg" />
      <media:content url="${baseUrl}${image}" type="image/jpeg" medium="image" />
    `,
      )
      .join("")

    rssItems.push(`
      <item>
        <title>${escapeXml(`${item.type}: ${item.title}`)}</title>
        <link>${baseUrl}/${item.type === "Research Project" ? "research" : "portfolio"}</link>
        <description>${escapeXml(item.description)}</description>
        <pubDate>${new Date().toUTCString()}</pubDate>
        <guid>${baseUrl}/portfolio/${item.title.toLowerCase().replace(/\s+/g, "-")}</guid>
        ${imageElements}
      </item>
    `)
  })

  // Add media coverage
  mediaItems.forEach((item) => {
    rssItems.push(`
      <item>
        <title>${escapeXml(`Media Coverage: ${item.title}`)}</title>
        <link>${item.url}</link>
        <description>${escapeXml(`${item.description} - Featured in ${item.publication}`)}</description>
        <pubDate>${new Date(item.date).toUTCString()}</pubDate>
        <guid>${item.url}</guid>
        <enclosure url="${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg" type="image/jpeg" />
        <media:content url="${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg" type="image/jpeg" medium="image" />
      </item>
    `)
  })

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml("Adil Mukhi - Medical Student, Researcher & Entrepreneur")}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml("Follow Adil Mukhi's journey in medicine, research, and entrepreneurship. Medical student at McMaster University, founder of Dr. Interested, and passionate about healthcare innovation.")}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg</url>
      <title>${escapeXml("Adil Mukhi")}</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems.join("")}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
