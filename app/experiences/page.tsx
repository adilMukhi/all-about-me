import type { Metadata } from "next"
import { experiencesMetadata } from "../page-metadata"
import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = experiencesMetadata

export default function ExperiencesPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
  const experiencesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/experiences#blog`,
    name: "Adil Mukhi Experiences",
    url: `${siteUrl}/experiences`,
    author: {
      "@type": "Person",
      name: "Adil Mukhi",
      url: siteUrl,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/experiences/${post.slug}`,
      datePublished: post.date,
      image: post.image ? `${siteUrl}${post.image}` : undefined,
      sameAs: post.learnMoreUrl || undefined,
    })),
  }

  return (
    <>
      <Header />
      <Script id="experiences-structured-data" type="application/ld+json">
        {JSON.stringify(experiencesStructuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Experiences", href: "/experiences", active: true }]} />
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
                <div key={post.slug} className="group">
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
                      <Link href={`/experiences/${post.slug}`} className="block h-full" aria-label={`Read ${post.title}`}>
                        <Image
                          src={post.image || "/placeholder.svg?height=200&width=400"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                        <div className="flex items-center text-sm mb-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }} className="transition-colors">
                        <Link href={`/experiences/${post.slug}`} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base">{post.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                      <p className="mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="mt-auto flex items-center gap-4">
                        <Link
                          href={`/experiences/${post.slug}`}
                          className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform"
                        >
                          Read more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                        {post.learnMoreUrl && (
                          <a
                            href={post.learnMoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            Original post <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
