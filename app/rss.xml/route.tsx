import { NextResponse } from "next/server"
import { blogPosts } from "@/data/blog-posts"
import { portfolioItems } from "@/data/portfolio-items"
import { mediaItems } from "@/data/media-items"

// XML encoding function to escape special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return ""
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
  try {
    console.log("[v0] RSS feed generation started")
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

    try {
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
      console.log("[v0] Added professional photos to RSS")
    } catch (error) {
      console.log("[v0] Error adding professional photos:", error)
    }

    try {
      blogPosts?.forEach((post, index) => {
        try {
          const images = post?.images || []
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
              <title>${escapeXml(post?.title || "Untitled Post")}</title>
              <link>${baseUrl}/experiences/${post?.slug || ""}</link>
              <description>${escapeXml(post?.description || "")}</description>
              <pubDate>${new Date(post?.date || new Date()).toUTCString()}</pubDate>
              <guid>${baseUrl}/experiences/${post?.slug || index}</guid>
              ${imageElements}
            </item>
          `)
        } catch (postError) {
          console.log("[v0] Error processing blog post:", post?.title, postError)
        }
      })
      console.log("[v0] Added blog posts to RSS")
    } catch (error) {
      console.log("[v0] Error adding blog posts:", error)
    }

    try {
      portfolioItems?.forEach((item, index) => {
        try {
          const images = item?.images || []
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
              <title>${escapeXml(`${item?.type || "Portfolio"}: ${item?.title || "Untitled"}`)}</title>
              <link>${baseUrl}/${item?.type === "Research Project" ? "research" : "portfolio"}</link>
              <description>${escapeXml(item?.description || "")}</description>
              <pubDate>${new Date().toUTCString()}</pubDate>
              <guid>${baseUrl}/portfolio/${(item?.title || `item-${index}`).toLowerCase().replace(/\s+/g, "-")}</guid>
              ${imageElements}
            </item>
          `)
        } catch (itemError) {
          console.log("[v0] Error processing portfolio item:", item?.title, itemError)
        }
      })
      console.log("[v0] Added portfolio items to RSS")
    } catch (error) {
      console.log("[v0] Error adding portfolio items:", error)
    }

    try {
      mediaItems?.forEach((item, index) => {
        try {
          rssItems.push(`
            <item>
              <title>${escapeXml(`Media Coverage: ${item?.title || "Untitled"}`)}</title>
              <link>${item?.url || baseUrl}</link>
              <description>${escapeXml(`${item?.description || ""} - Featured in ${item?.publication || ""}`)}</description>
              <pubDate>${new Date(item?.date || new Date()).toUTCString()}</pubDate>
              <guid>${item?.url || `${baseUrl}/media/${index}`}</guid>
              <enclosure url="${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg" type="image/jpeg" />
              <media:content url="${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg" type="image/jpeg" medium="image" />
            </item>
          `)
        } catch (itemError) {
          console.log("[v0] Error processing media item:", item?.title, itemError)
        }
      })
      console.log("[v0] Added media items to RSS")
    } catch (error) {
      console.log("[v0] Error adding media items:", error)
    }

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

    console.log("[v0] RSS feed generated successfully with", rssItems.length, "items")

    return new NextResponse(rssXml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "X-Robots-Tag": "index, follow",
        Vary: "User-Agent",
      },
    })
  } catch (error) {
    console.error("[v0] RSS feed generation failed:", error)
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>RSS Feed Error</title>
    <description>RSS feed temporarily unavailable</description>
  </channel>
</rss>`

    return new NextResponse(errorXml, {
      status: 200,
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }
}
