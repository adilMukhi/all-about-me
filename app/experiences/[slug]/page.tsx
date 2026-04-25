import type { Metadata } from "next"
import { blogPosts } from "@/data/blog-posts"
import BlogPostClient from "./client"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import Script from "next/script"
import { notFound } from "next/navigation"

const socialProfiles = [
  "https://www.linkedin.com/in/adil-mukhi",
  "https://www.instagram.com/adilm.0",
  "https://www.facebook.com/adilm.0/",
  "https://x.com/adilm_0",
  "https://bsky.app/profile/adilm0.bsky.social",
  "https://www.tiktok.com/@adilm.0",
  "https://www.youtube.com/@AdilMukhi",
]

// Generate metadata for each blog post dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const keywords = [
    post.title,
    post.subtitle,
    "Adil Mukhi",
    "Experiences",
    "youth advocacy",
    "research",
    "leadership",
  ].filter(Boolean) as string[]

  return {
    title: post.title,
    description: post.subtitle || post.excerpt,
    keywords,
    authors: [{ name: "Adil Mukhi", url: siteUrl }],
    category: "article",
    alternates: {
      canonical: `${siteUrl}/experiences/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle || post.excerpt,
      type: "article",
      url: `${siteUrl}/experiences/${post.slug}`,
      siteName: "Adil Mukhi",
      images: [
        {
          url: post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-blog-default.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: ["Adil Mukhi"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle || post.excerpt,
      creator: "@adilm_0",
      images: [post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-blog-default.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// This would typically come from your CMS or database
const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug)
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  if (!post) {
    notFound()
  }

  // Generate structured data for the article
  const articleStructuredData = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.subtitle || post.excerpt,
        image: post.image ? [`${siteUrl}${post.image}`] : [],
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: "Adil Mukhi",
          url: siteUrl,
          sameAs: socialProfiles,
        },
        publisher: {
          "@type": "Person",
          name: "Adil Mukhi",
          url: siteUrl,
          sameAs: socialProfiles,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/experiences/${slug}`,
        },
        url: `${siteUrl}/experiences/${slug}`,
        isPartOf: {
          "@type": "Blog",
          "@id": `${siteUrl}/experiences#blog`,
          name: "Adil Mukhi Experiences",
          url: `${siteUrl}/experiences`,
        },
      }
    : null

  return (
    <>
      {post && articleStructuredData && (
        <Script id="article-structured-data" type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </Script>
      )}

      <SEOBreadcrumbs
        items={[
          { label: "Experiences", href: "/experiences" },
          { label: post?.title || "Blog Post", href: `/experiences/${slug}`, active: true },
        ]}
      />

      <BlogPostClient post={post} slug={slug} />
    </>
  )
}
