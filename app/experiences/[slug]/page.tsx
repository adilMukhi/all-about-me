import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { blogPosts } from "@/data/blog-posts"

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
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {post.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-[400px] w-full">
                          <Image
                            src={image || "/placeholder.svg?height=400&width=800"}
                            alt={`${post.title} - Image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
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

