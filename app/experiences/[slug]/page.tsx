import type { Metadata } from "next"
import { blogPosts } from "@/data/blog-posts"
import BlogPostClient from "./client"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import Script from "next/script"
import { notFound } from "next/navigation"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const socialProfiles = [
  "https://www.linkedin.com/in/adil-mukhi",
  "https://www.instagram.com/adilm.0",
  "https://www.facebook.com/adilm.0/",
  "https://x.com/adilm_0",
  "https://bsky.app/profile/adilm0.bsky.social",
  "https://www.tiktok.com/@adilm.0",
  "https://www.youtube.com/@AdilMukhi",
]

const toIsoDate = (dateString: string) => {
  const parsedDate = new Date(dateString)
  return Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate.toISOString()
}

/** Absolute, URL-encoded image URL (blog filenames contain spaces and parentheses). */
const imageUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) return path
  return `${siteUrl}${encodeURI(path).replace(/\(/g, "%28").replace(/\)/g, "%29")}`
}

/** All images for a post, absolute + encoded, deduplicated, main image first. */
const postImages = (post: (typeof blogPosts)[number]) => {
  const all = [post.image, ...(post.images ?? [])].filter(Boolean) as string[]
  return Array.from(new Set(all.map(imageUrl)))
}

/** Google News caps headlines at 110 characters. */
const clampHeadline = (value: string) => (value.length <= 110 ? value : `${value.slice(0, 107).trimEnd()}…`)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Experience Not Found",
      description: "The requested experience could not be found.",
      robots: { index: false, follow: true },
    }
  }

  const images = postImages(post)
  const description = post.subtitle || post.excerpt

  return {
    title: post.title,
    description,
    keywords: [post.title, post.subtitle, "Adil Mukhi", "Experiences", "youth advocacy", "research", "leadership"].filter(
      Boolean,
    ) as string[],
    authors: [{ name: "Adil Mukhi", url: siteUrl }],
    category: "news",
    alternates: {
      canonical: `${siteUrl}/experiences/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `${siteUrl}/experiences/${post.slug}`,
      siteName: "Adil Mukhi",
      images: (images.length ? images : [`${siteUrl}/og-image.png`]).map((url) => ({
        url,
        width: 1200,
        height: 630,
        alt: post.title,
      })),
      publishedTime: toIsoDate(post.date),
      modifiedTime: toIsoDate(post.date),
      authors: ["Adil Mukhi"],
      section: "Experiences",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      creator: "@adilm_0",
      site: "@adilm_0",
      images: images.length ? images : [`${siteUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  }
}

export function generateStaticParams() {
  return blogPosts.filter((post) => post.slug).map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const url = `${siteUrl}/experiences/${slug}`
  const images = postImages(post)
  const published = toIsoDate(post.date)

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    headline: clampHeadline(post.title),
    alternativeHeadline: post.subtitle,
    description: post.subtitle || post.excerpt,
    image: images.map((contentUrl) => ({
      "@type": "ImageObject",
      url: contentUrl,
      contentUrl,
    })),
    datePublished: published,
    dateModified: published,
    articleSection: "Experiences",
    inLanguage: "en-CA",
    isAccessibleForFree: true,
    keywords: [post.title, post.subtitle, "Adil Mukhi", "news", "experiences"].filter(Boolean),
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Adil Mukhi",
      url: siteUrl,
      sameAs: socialProfiles,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Adil Mukhi",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/pixtin.jpg`,
        width: 512,
        height: 512,
      },
      sameAs: socialProfiles,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    url,
    isPartOf: {
      "@type": "Blog",
      "@id": `${siteUrl}/experiences#blog`,
      name: "Adil Mukhi Experiences",
      url: `${siteUrl}/experiences`,
    },
  }

  return (
    <>
      <Script id="article-structured-data" type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </Script>

      <SEOBreadcrumbs
        items={[
          { label: "Experiences", href: "/experiences" },
          { label: post.title, href: `/experiences/${slug}`, active: true },
        ]}
      />

      <BlogPostClient post={post} slug={slug} />
    </>
  )
}
