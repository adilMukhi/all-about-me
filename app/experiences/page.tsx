import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ExperiencesPage() {
  const blogPosts = [
    {
      title: "My Journey in Medical Research",
      subtitle: "Exploring the intersection of technology and healthcare",
      date: "March 8, 2025",
      image: "/blog/medical-research.jpg",
      slug: "journey-in-medical-research",
      excerpt: "Join me as I share my experiences in medical research and healthcare innovation...",
    },
    {
      title: "Volunteering at the Hospital",
      subtitle: "Lessons learned from working with patients",
      date: "February 15, 2025",
      image: "/blog/hospital-volunteer.jpg",
      slug: "volunteering-at-hospital",
      excerpt: "My time volunteering at the local hospital taught me valuable lessons about patient care...",
    },
    {
      title: "Leading the STEM Fellowship",
      subtitle: "Building a community of future scientists",
      date: "January 22, 2025",
      image: "/blog/stem-fellowship.jpg",
      slug: "leading-stem-fellowship",
      excerpt: "As Vice President of the STEM Fellowship, I've had the opportunity to inspire students...",
    },
    {
      title: "My First Research Publication",
      subtitle: "The challenges and rewards of academic writing",
      date: "December 10, 2024",
      image: "/blog/research-publication.jpg",
      slug: "first-research-publication",
      excerpt: "Publishing my first research paper was a journey filled with challenges and learning...",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <h1
              className="text-4xl font-bold tracking-tighter text-center mb-8 sm:text-5xl md:text-6xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Experiences
            </h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Personal stories and reflections from my journey in education, research, and leadership.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Link href={`/experiences/${post.slug}`} key={post.slug}>
                  <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg?height=200&width=400"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{post.title}</CardTitle>
                      <CardDescription>
                        {post.subtitle} • {post.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}

