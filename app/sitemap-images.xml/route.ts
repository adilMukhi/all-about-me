import { blogPosts } from "@/data/blog-posts"

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;")

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  const staticEntries = [
    {
      loc: `${baseUrl}/`,
      images: [
        {
          loc: `${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg`,
          title: "Adil Mukhi Professional Headshot",
          caption: "Adil Mukhi professional photo",
        },
        {
          loc: `${baseUrl}/og-image.png`,
          title: "Adil Mukhi Website OG Image",
          caption: "Official Open Graph image for Adil Mukhi website",
        },
      ],
    },
    {
      loc: `${baseUrl}/portfolio`,
      images: [
        {
          loc: `${baseUrl}/portfolio/coding.jpg`,
          title: "Coding Portfolio",
          caption: "Adil Mukhi coding projects portfolio cover",
        },
        {
          loc: `${baseUrl}/portfolio/research.jpg`,
          title: "Research Portfolio",
          caption: "Adil Mukhi research portfolio cover",
        },
      ],
    },
  ]

  const blogEntries = blogPosts
    .filter((post) => post.slug && post.image)
    .map((post) => ({
      loc: `${baseUrl}/experiences/${post.slug}`,
      images: [
        {
          loc: `${baseUrl}${post.image}`,
          title: post.title,
          caption: post.subtitle || post.excerpt || post.title,
        },
      ],
    }))

  const entries = [...staticEntries, ...blogEntries]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${entry.images
  .map(
    (image) => `    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
  )
  .join("\n")}
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
