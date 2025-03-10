"use client"

import type { Metadata } from "next"
import { useEffect, useState, useCallback } from "react"
import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    if (post?.images && post.images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % post.images.length)
    }
  }, [post?.images])

  const goToPrev = useCallback(() => {
    if (post?.images && post.images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + post.images.length) % post.images.length)
    }
  }, [post?.images])

  // Auto-advance images
  useEffect(() => {
    if (!isPaused && post?.images && post.images.length > 1) {
      const interval = setInterval(goToNext, 5000)
      return () => clearInterval(interval)
    }
    return undefined
  }, [isPaused, post?.images, goToNext])

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen container py-16">
          <h1>Post not found</h1>
          <Button asChild className="mt-4">
            <Link href="/experiences">Back to Experiences</Link>
          </Button>
        </main>
        <PageLayout />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/experiences">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Experiences
                </Link>
              </Button>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-transparent p-8 rounded-lg mb-12">
              <h1
                className="text-4xl font-bold tracking-tighter mb-4 sm:text-5xl"
                style={{ fontFamily: "Sour Gummy, latin" }}
              >
                {post.title}
              </h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-lg">
                  {post.subtitle} • {post.date}
                </span>
              </div>

              {post.images && post.images.length > 0 && (
                <div className="mb-12 relative">
                  <div
                    className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {post.images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                          index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg?height=400&width=800"}
                          alt={`${post.title} - Image ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}

                    {/* Navigation arrows */}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        goToPrev()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-3 hover:bg-black/50 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        goToNext()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-3 hover:bg-black/50 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Pagination dots */}
                  <div className="flex justify-center gap-1.5 mt-4">
                    {post.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex ? "bg-primary w-4" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="prose prose-lg max-w-none mx-auto text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.learnMoreUrl && (
              <div className="mt-12 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 hover:bg-primary hover:text-white transition-colors"
                >
                  <a
                    href={post.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/experiences">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to All Experiences
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <PageLayout />
    </>
  )
}

