import { NextResponse } from "next/server"
import { blogPosts } from "@/data/blog-posts"
import { portfolioItems } from "@/data/portfolio-items"
import { mediaItems } from "@/data/media-items"

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

  // Add professional photos portfolio post
  rssItems.push(`
    <item>
      <title>Adil Mukhi - Professional Portfolio Photos</title>
      <link>${baseUrl}/about</link>
      <description><![CDATA[Professional photos of Adil Mukhi including TEDx speaking engagements, medical research, tennis achievements, and graduation moments. Medical student, researcher, and entrepreneur.]]></description>
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
    rssItems.push(`
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/experiences/${post.slug}</link>
        <description><![CDATA[${post.description} - Medical student experience and research insights.]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>${baseUrl}/experiences/${post.slug}</guid>
        ${images
          .map(
            (image) => `
          <enclosure url="${baseUrl}${image}" type="image/jpeg" />
          <media:content url="${baseUrl}${image}" type="image/jpeg" medium="image" />
        `,
          )
          .join("")}
      </item>
    `)
  })

  // Add portfolio items
  portfolioItems.forEach((item, index) => {
    const images = item.images || []
    rssItems.push(`
      <item>
        <title><![CDATA[${item.title}]]></title>
        <link>${baseUrl}/${item.type === "book" ? "writing" : "portfolio"}</link>
        <description><![CDATA[${item.description} - ${item.type} by medical student and researcher Adil Mukhi.]]></description>
        <pubDate>${new Date().toUTCString()}</pubDate>
        <guid>${baseUrl}/portfolio/${item.type}-${index}</guid>
        ${images
          .map(
            (image) => `
          <enclosure url="${baseUrl}${image}" type="image/jpeg" />
          <media:content url="${baseUrl}${image}" type="image/jpeg" medium="image" />
        `,
          )
          .join("")}
      </item>
    `)
  })

  // Add media coverage
  mediaItems.forEach((item, index) => {
    const imageUrl = item.image || "/pictures/adil-mukhi-formal-headshot.jpg"
    rssItems.push(`
      <item>
        <title><![CDATA[${item.title}]]></title>
        <link>${item.url}</link>
        <description><![CDATA[${item.description} - Media coverage of medical student and researcher Adil Mukhi.]]></description>
        <pubDate>${new Date(item.date).toUTCString()}</pubDate>
        <guid>${baseUrl}/media/${index}</guid>
        <enclosure url="${baseUrl}${imageUrl}" type="image/jpeg" />
        <media:content url="${baseUrl}${imageUrl}" type="image/jpeg" medium="image" />
      </item>
    `)
  })

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Adil Mukhi - Medical Student, Researcher & Entrepreneur</title>
    <link>${baseUrl}</link>
    <description>Professional portfolio and experiences of Adil Mukhi - medical student, researcher, entrepreneur, and TEDx speaker. Featuring medical research, educational content, and professional achievements.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg</url>
      <title>Adil Mukhi</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems.join("")}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
