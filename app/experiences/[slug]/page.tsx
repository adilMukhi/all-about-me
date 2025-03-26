import type { Metadata } from "next"
import { blogPosts } from "@/data/blog-posts"
import BlogPostClient from "./client"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import Script from "next/script"

// Generate metadata for each blog post dynamically
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.subtitle || post.excerpt,
    alternates: {
      canonical: `${siteUrl}/experiences/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle || post.excerpt,
      type: "article",
      url: `${siteUrl}/experiences/${post.slug}`,
      images: [
        {
          url: post.image || "/og-blog-default.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle || post.excerpt,
      images: [post.image || "/og-blog-default.jpg"],
    },
  }
}

// This would typically come from your CMS or database
const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

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
        },
        publisher: {
          "@type": "Person",
          name: "Adil Mukhi",
          url: siteUrl,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/experiences/${params.slug}`,
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
          { label: post?.title || "Blog Post", href: `/experiences/${params.slug}`, active: true },
        ]}
      />

      <BlogPostClient post={post} slug={params.slug} />
    </>
  )
}

