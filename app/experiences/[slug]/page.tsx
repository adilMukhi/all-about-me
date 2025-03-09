"use client"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { blogPosts } from "@/data/blog-posts"
import { useEffect, useState } from "react"

// This would typically come from your CMS or database
const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

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
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/experiences">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Experiences
                </Link>
              </Button>
            </div>

            <h1
              className="text-4xl font-bold tracking-tighter mb-4 sm:text-5xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {post.subtitle} • {post.date}
            </p>

            {post.images && post.images.length > 0 && (
              <div className="mb-12">
                <BlogPostCarousel images={post.images} title={post.title} />
              </div>
            )}

            <div className="prose prose-lg max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/experiences">
                  <ArrowLeft className="mr-2 h-4 w-4" />
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

// New component for blog post carousel with auto-advancing
function BlogPostCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className={index === currentIndex ? "block" : "hidden"}>
              <div className="relative h-[400px] w-full">
                <Image
                  src={image || "/placeholder.svg?height=400&width=800"}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
        />
        <CarouselNext onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)} />
      </Carousel>

      {/* Pagination dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, index) => (
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
  )
}

