import { blogPosts } from "@/data/blog-posts"

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")

// Google News sitemaps only accept articles published in the last 2 days.
const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
  const now = Date.now()

  const recent = blogPosts
    .filter((post) => post.slug && post.date)
    .map((post) => ({ post, published: new Date(post.date) }))
    .filter(({ published }) => !Number.isNaN(published.getTime()) && now - published.getTime() <= TWO_DAYS_MS)

  const urls = recent
    .map(
      ({ post, published }) => `  <url>
    <loc>${escapeXml(`${baseUrl}/experiences/${post.slug}`)}</loc>
    <news:news>
      <news:publication>
        <news:name>Adil Mukhi Experiences</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${published.toISOString()}</news:publication_date>
      <news:title>${escapeXml(post.title)}</news:title>
    </news:news>
  </url>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=900, stale-while-revalidate=3600",
    },
  })
}
