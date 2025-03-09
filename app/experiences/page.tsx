import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"
import { Calendar, ArrowRight } from "lucide-react"

export default function ExperiencesPage() {
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
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 text-lg">
              Personal stories and reflections from my journey in education, research, and leadership.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <Link href={`/experiences/${post.slug}`} key={post.slug} className="block group">
                  <Card
                    className={`h-full transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden 
                    ${
                      index % 4 === 0
                        ? "bg-gradient-to-br from-blue-50 to-transparent"
                        : index % 4 === 1
                          ? "bg-gradient-to-br from-green-50 to-transparent"
                          : index % 4 === 2
                            ? "bg-gradient-to-br from-purple-50 to-transparent"
                            : "bg-gradient-to-br from-amber-50 to-transparent"
                    }`}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg?height=200&width=400"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center text-sm mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle
                        style={{ fontFamily: "'Bubblegum Sans', cursive" }}
                        className="group-hover:text-primary transition-colors"
                      >
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">{post.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                      <p className="mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="mt-auto flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
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

