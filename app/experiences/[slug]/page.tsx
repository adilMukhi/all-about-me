import type { Metadata } from "next"
import { blogPosts } from "@/data/blog-posts"
import BlogPostClient from "./client"

// Generate metadata for each blog post dynamically
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

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
      canonical: `/experiences/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle || post.excerpt,
      type: "article",
      url: `/experiences/${post.slug}`,
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

  return <BlogPostClient post={post} slug={params.slug} />
}

