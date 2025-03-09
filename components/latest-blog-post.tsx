import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

export function LatestBlogPost() {
  const latestPost =
    blogPosts.length > 0
      ? blogPosts[0]
      : {
          title: "My Journey in Medical Research",
          subtitle: "Exploring the intersection of technology and healthcare",
          date: "March 8, 2025",
          image: "/blog/medical-research.jpg",
          slug: "journey-in-medical-research",
        }

  return (
    <section className="container py-16">
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        My Latest Experience
      </h2>

      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-transparent">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative h-[250px] md:h-auto">
            <Image
              src={latestPost.image || "/placeholder.svg?height=400&width=300"}
              alt={latestPost.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                {latestPost.title}
              </h3>
              <p className="text-muted-foreground">
                {latestPost.subtitle} • {latestPost.date}
              </p>
            </div>
            <p className="mb-6 line-clamp-2">
              Join me as I share my latest experiences in medical research and healthcare innovation...
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href={`/experiences/${latestPost.slug}`}>Read More</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/experiences" className="flex items-center">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

