import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

export function LatestBlogPost() {
  // Get the most recent blog post from the data file
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
    <section className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl" style={{ fontFamily: "Sour Gummy, latin" }}>
          My Latest Experience
        </h2>
        <Button variant="outline" asChild size="sm" className="flex items-center gap-2">
          <Link href="/experiences">
            View All
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-transparent">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <Image
              src={latestPost.image || "/placeholder.svg?height=400&width=300"}
              alt={latestPost.title}
              width={400}
              height={300}
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />
          </div>
          <div className="p-4 md:p-6 md:w-2/3">
            <div className="mb-2">
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                {latestPost.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {latestPost.subtitle} • {latestPost.date}
              </p>
            </div>
            <p className="mb-4 line-clamp-2">
              Join me as I share my latest experiences in medical research and healthcare innovation...
            </p>
            <Button asChild size="sm">
              <Link href={`/experiences/${latestPost.slug}`}>Read More</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}

