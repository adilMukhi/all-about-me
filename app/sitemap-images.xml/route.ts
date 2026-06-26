import { blogPosts } from "@/data/blog-posts"
import { certificates } from "@/data/certificates"
import { educationData } from "@/data/education"
import { honorsAwards } from "@/data/honors-awards"
import { books, blogs, clubPublications, ltes, researchProjects, codingProjects, artProjects, sportsAchievements } from "@/data/portfolio-items"
import { volunteerWork } from "@/data/volunteer-work"
import { workExperiences } from "@/data/work-experience"

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;")

type ImageEntry = {
  loc: string
  title: string
  caption: string
}

type UrlEntry = {
  loc: string
  images: ImageEntry[]
}

function titleFromPath(source: string): string {
  const trimmed = source.trim()
  const path = trimmed.startsWith("http://") || trimmed.startsWith("https://") ? new URL(trimmed).pathname : trimmed
  const fileName = decodeURIComponent(path.split("/").pop() || path)
    .split("?")[0]
    .split("#")[0]
    .replace(/\.[^.]+$/, "")

  const normalized = fileName.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim()
  if (!normalized) {
    return "Image"
  }

  return normalized.replace(/\b\w/g, (character) => character.toUpperCase())
}

function toImageEntry(source: string, baseUrl: string, title?: string, caption?: string): ImageEntry {
  const trimmed = source.trim()
  const loc = trimmed.startsWith("http://") || trimmed.startsWith("https://") ? trimmed : `${baseUrl}${trimmed}`
  const fallback = titleFromPath(trimmed)

  return {
    loc,
    title: title || fallback,
    caption: caption || fallback,
  }
}

function makeEntry(loc: string, images: Array<ImageEntry | null | undefined>): UrlEntry | null {
  const filteredImages = images.filter((image): image is ImageEntry => Boolean(image))

  if (filteredImages.length === 0) {
    return null
  }

  return {
    loc,
    images: filteredImages.sort((left, right) => left.loc.localeCompare(right.loc)),
  }
}

export function GET() {
  const baseUrl =
    (globalThis as typeof globalThis & { process?: { env?: { NEXT_PUBLIC_SITE_URL?: string } } }).process?.env
      ?.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  const homeImages: ImageEntry[] = [
    toImageEntry("/pictures/adil-mukhi-formal-headshot.jpg", baseUrl, "Adil Mukhi Professional Headshot", "Adil Mukhi professional photo"),
    toImageEntry("/og-image.png", baseUrl, "Adil Mukhi Website OG Image", "Official Open Graph image for Adil Mukhi website"),
    ...certificates.map((certificate) =>
      toImageEntry(
        certificate.image,
        baseUrl,
        certificate.name,
        `${certificate.issuer} certificate for ${certificate.name}`,
      ),
    ),
    ...educationData
      .flatMap((education) => [
        education.image ? toImageEntry(education.image, baseUrl, education.degree, education.description) : null,
        ...(education.images || []).map((image, index) =>
          toImageEntry(image, baseUrl, `${education.degree} image ${index + 1}`, education.institution),
        ),
      ])
      .filter((image): image is ImageEntry => Boolean(image)),
    ...honorsAwards.flatMap((award) => {
      const awardImages = Array.isArray(award.image) ? award.image : [award.image]

      return awardImages.map((image, index) =>
        toImageEntry(image, baseUrl, award.title, `${award.issuer} award image ${index + 1}`),
      )
    }),
    ...workExperiences
      .flatMap((experience) => [
        experience.image ? toImageEntry(experience.image, baseUrl, experience.title, experience.company) : null,
        ...(experience.images || []).map((image, index) =>
          toImageEntry(image, baseUrl, `${experience.title} image ${index + 1}`, experience.company),
        ),
      ])
      .filter((image): image is ImageEntry => Boolean(image)),
    ...volunteerWork.map((work) => toImageEntry(work.image, baseUrl, work.role, work.organization)),
  ].sort((left, right) => left.loc.localeCompare(right.loc))

  const portfolioWritingImages: ImageEntry[] = [
    ...books.flatMap((book) => (book.image ? [toImageEntry(book.image, baseUrl, book.title, book.publisher)] : [])),
      ...ltes
        .filter((letter): letter is (typeof ltes)[number] & { image: string } => Boolean(letter.image))
        .map((letter) => toImageEntry(letter.image, baseUrl, letter.title, letter.publisher)),
    ...blogs.flatMap((blog) => (blog.image ? [toImageEntry(blog.image, baseUrl, blog.title, blog.publisher)] : [])),
    ...clubPublications.flatMap((publication) =>
      publication.image ? [toImageEntry(publication.image, baseUrl, publication.title, publication.publisher)] : [],
    ),
  ].sort((left, right) => left.loc.localeCompare(right.loc))

  const researchImages: ImageEntry[] = researchProjects
    .map((project) => toImageEntry(project.image, baseUrl, project.title, project.institution))
    .sort((left, right) => left.loc.localeCompare(right.loc))

  const codingImages: ImageEntry[] = codingProjects
    .map((project) => toImageEntry(project.image, baseUrl, project.title, "Coding project"))
    .sort((left, right) => left.loc.localeCompare(right.loc))

  const artAndSportsImages: ImageEntry[] = [
    ...artProjects.flatMap((project) => [
      toImageEntry(project.image, baseUrl, project.title, project.description),
      ...(project.images || []).map((image, index) =>
        toImageEntry(image, baseUrl, `${project.title} image ${index + 1}`, project.description),
      ),
    ]),
    ...sportsAchievements.map((achievement) =>
      toImageEntry(achievement.image, baseUrl, achievement.title, achievement.description),
    ),
  ].sort((left, right) => left.loc.localeCompare(right.loc))

  const externalImages = [
    "https://i.imgur.com/ym74D8N.png",
    "https://i.imgur.com/H06QMls.png",
    "https://i.postimg.cc/VvFD3DwW/Adil-Mukhi-Hosting-Code-Blue-Planet-at-Toronto-Climate-Week.png",
    "https://i.postimg.cc/gjKNfNdb/Adil-Mukhi-Leading-Kids-Help-Phone-Walk-so-Kids-Can-Talk-in-Mississauga.jpg",
    "https://i.postimg.cc/T2j7LYb5/Adil-Mukhi-MC-at-AI-Fireside-Chat.jpg",
    "https://i.postimg.cc/bY0CDNns/Adil-Mukhi-Presenting.png",
    "https://i.postimg.cc/SQLT2N9K/Adil-Mukhi-Presenting-at-Explore-3-Case-Competition.jpg",
    "https://i.postimg.cc/FFbWdsS0/Adil-Mukhi.png",
    "https://i.postimg.cc/TYMKSfHx/1.png",
    "https://i.postimg.cc/L6KJ720d/2.png",
    "https://i.postimg.cc/pXfmM436/3.png",
    "https://i.postimg.cc/9F5DSCNj/4.png",
    "https://i.postimg.cc/vHF4jbSs/5.png",
    "https://i.postimg.cc/hjv2H9vF/Adil-Mukhi-Hosting-The-Minds-Project-Panel.png",
    "https://i.postimg.cc/Kzj0dnzH/Culture-and-Psychology-Conference-Delegation.png",
    "https://i.postimg.cc/qRq198R1/Dr-Interested-Volunteer-Team-Group-Photo.jpg",
    "https://i.postimg.cc/pTrsgDTw/Explore-3-Case-Competition-Team-Leadership.png",
    "https://i.postimg.cc/yNvfQf1q/MP-Peter-Fonseca-and-Councillor-Chris-Fonseca-Keynote-at-Explore-3.png",
    "https://i.postimg.cc/43B8L8JD/tudent-Networking-at-Psychology-Conference.png",
    "https://images.unsplash.com/photo-1781722733616-34a88b77e68e?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1781722733634-747679929ebf?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1781722321176-f110d64b544a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1781722321163-4a86d37df143?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1781722526001-d3197c7a8088?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaW5nZWxhfGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1781722321115-bb3dcfd224cd?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaW5nZWxhfGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1781722511463-a8141071736d?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaW5nZWxhfGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1781722321232-57af4f674435?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaW5nZWxhfGVufDB8fHx8fA%3D%3D",
  ].map((imageUrl) => toImageEntry(imageUrl, baseUrl, titleFromPath(imageUrl), "Additional portfolio image"))

  const staticEntries: UrlEntry[] = [
    makeEntry(`${baseUrl}/`, homeImages),
    makeEntry(`${baseUrl}/portfolio/writing`, portfolioWritingImages),
    makeEntry(`${baseUrl}/portfolio/research`, researchImages),
    makeEntry(`${baseUrl}/portfolio/coding`, codingImages),
    makeEntry(`${baseUrl}/portfolio/art-sports`, artAndSportsImages),
  ].filter((entry): entry is UrlEntry => Boolean(entry))

  const blogEntries = blogPosts
    .filter((post) => post.slug)
    .map((post) => {
      const images = [
        post.image ? toImageEntry(post.image, baseUrl, post.title, post.subtitle || post.excerpt || post.title) : null,
        ...(post.images || []).map((image, index) =>
          toImageEntry(image, baseUrl, `${post.title} image ${index + 1}`, post.subtitle || post.excerpt || post.title),
        ),
      ]

      return makeEntry(`${baseUrl}/experiences/${post.slug}`, images)
    })
    .filter((entry): entry is UrlEntry => Boolean(entry))

  const entries = [...staticEntries, ...blogEntries].sort((left, right) => left.loc.localeCompare(right.loc))

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
