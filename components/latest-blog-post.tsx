import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog-posts"
import { blogImages, placeholder } from "@/data/image-paths"

export function LatestBlogPost() {
  // Get the most recent blog post from the data file
  const latestPost =
    blogPosts.length > 0
      ? blogPosts[0]
      : {
          title: "My Journey in Medical Research",
          subtitle: "Exploring the intersection of technology and healthcare",
          date: "March 8, 2025",
          image: blogImages.medicalResearch,
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
      <Card className="card-hover-effect">
        <CardHeader>
          <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{latestPost.title}</CardTitle>
          <CardDescription>
            {latestPost.subtitle} • {latestPost.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Image
              src={latestPost.image || placeholder(400, 300)}
              alt={latestPost.title}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">
              Join me as I share my latest experiences in medical research and healthcare innovation...
            </p>
            <Button asChild>
              <Link href={`/experiences/${latestPost.slug}`}>Read More</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

