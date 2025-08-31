import { blogPosts } from "@/data/blog-posts"
import { portfolioItems } from "@/data/portfolio-items"
import { mediaItems } from "@/data/media-items"

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  // Professional images from the sitemap
  const professionalImages = [
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Tedx%201.png`,
      title: "Adil Mukhi TEDx Speaker - Youth Advocate and Changemaker",
      description:
        "Adil Mukhi delivering keynote presentation at TEDx event - youth advocate and public speaker on stage with microphone",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Tedx%202.jpeg`,
      title: "Adil Mukhi TEDxMcFarren Speaker - Leadership and Innovation Presentation",
      description:
        "Adil Mukhi speaking at TEDxMcFarren conference - youth advocate presenting on leadership and innovation to audience",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Formal%20Pic.jpg`,
      title: "Adil Mukhi Professional Photo - Youth Advocate and Public Speaker",
      description:
        "Adil Mukhi professional headshot - youth advocate, public speaker, and founder of Dr. Interested organization",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Camera.JPG`,
      title: "Adil Mukhi Photographer - Youth Advocate and Content Creator",
      description:
        "Adil Mukhi with professional camera equipment - photographer and content creator documenting youth advocacy work",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Dr.%20Interested.JPG`,
      title: "Adil Mukhi Dr. Interested Founder - Youth Mentorship Program",
      description:
        "Adil Mukhi as founder of Dr. Interested organization - youth mentorship and advocacy program leader",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Labcoat.JPG`,
      title: "Adil Mukhi Medical Research - STEM Education and Healthcare Advocacy",
      description:
        "Adil Mukhi in laboratory setting wearing lab coat - STEM education advocate and medical research volunteer",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Tennis.jpg`,
      title: "Adil Mukhi Tennis Player - Play-to-Heal Movement Advocate",
      description:
        "Adil Mukhi playing tennis - athlete promoting Play-to-Heal movement for youth mental health through sports",
    },
  ]

  const rssItems = [
    // Professional Images Feature Post
    {
      title: "Adil Mukhi: Youth Advocate, Speaker & Changemaker - Professional Portfolio",
      description:
        "Explore the professional journey of Adil Mukhi - from TEDx speaking engagements to medical research, sports advocacy, and youth mentorship through Dr. Interested organization.",
      link: `${siteUrl}/about`,
      images: professionalImages,
      pubDate: new Date("2025-01-15").toUTCString(),
      category: "Professional Portfolio",
    },

    // Blog Posts/Experiences
    ...blogPosts.map((post) => ({
      title: `${post.title} - Medical Education & Research Experience`,
      description: `${post.description} Follow Adil Mukhi's journey in medical education, research, and healthcare advocacy.`,
      link: `${siteUrl}/experiences/${post.slug}`,
      images:
        post.images?.map((img) => ({
          url: `${siteUrl}${img}`,
          title: `${post.title} - Medical Education Experience`,
          description: `Visual documentation from ${post.title} - medical education and healthcare advocacy by Adil Mukhi`,
        })) || [],
      pubDate: new Date(post.date).toUTCString(),
      category: "Medical Education",
    })),

    // Portfolio Items
    ...portfolioItems.map((item) => ({
      title: `${item.title} - ${item.category} Project by Adil Mukhi`,
      description: `${item.description} Explore innovative projects and achievements in ${item.category.toLowerCase()} by youth advocate Adil Mukhi.`,
      link: `${siteUrl}/portfolio#${item.title.toLowerCase().replace(/\s+/g, "-")}`,
      images:
        item.images?.map((img) => ({
          url: `${siteUrl}${img}`,
          title: `${item.title} - ${item.category} Project`,
          description: `${item.title} project showcase - ${item.category.toLowerCase()} work by Adil Mukhi`,
        })) || [],
      pubDate: new Date().toUTCString(),
      category: item.category,
    })),

    // Media Coverage
    ...mediaItems.map((item) => ({
      title: `${item.title} - Media Coverage of Adil Mukhi`,
      description: `${item.description} Media coverage highlighting Adil Mukhi's work in youth advocacy, medical education, and community leadership.`,
      link: item.link,
      images: item.image
        ? [
            {
              url: `${siteUrl}${item.image}`,
              title: `${item.title} - Media Coverage`,
              description: `Media coverage: ${item.title} featuring Adil Mukhi's advocacy work`,
            },
          ]
        : [],
      pubDate: new Date(item.date).toUTCString(),
      category: "Media Coverage",
    })),
  ]

  // Generate RSS XML
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Adil Mukhi - Youth Advocate, Speaker & Medical Student</title>
    <description>Follow the journey of Adil Mukhi - youth advocate, TEDx speaker, medical student, and founder of Dr. Interested. Discover insights on medical education, youth mentorship, healthcare advocacy, and community leadership.</description>
    <link>${siteUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/pictures/Adil%20Mukhi%20-%20Formal%20Pic.jpg</url>
      <title>Adil Mukhi</title>
      <link>${siteUrl}</link>
    </image>
    
    ${rssItems
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <category><![CDATA[${item.category}]]></category>
      ${item.images
        .map(
          (img) => `
      <enclosure url="${img.url}" type="image/jpeg"/>
      <media:content url="${img.url}" type="image/jpeg">
        <media:title><![CDATA[${img.title}]]></media:title>
        <media:description><![CDATA[${img.description}]]></media:description>
      </media:content>`,
        )
        .join("")}
    </item>`,
      )
      .join("")}
    
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
