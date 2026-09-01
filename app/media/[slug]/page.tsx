import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { ArrowLeft, ExternalLink, Play, Sparkles } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mediaItems } from "@/data/media-items"
import { getMediaBySlug, getMediaPath } from "@/lib/seo-paths"
import { mediaIndexMetadata } from "@/app/page-metadata"
import { videos, getVideoPath } from "@/data/videos"

const findMatchingVideo = (link: string) =>
  videos.find((video) => video.watchUrl === link) ||
  videos.find((video) => video.videoId.length > 0 && link.includes(video.videoId))

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export function generateStaticParams() {
  return mediaItems.map((item) => ({ slug: getMediaPath(item).split("/").pop() as string }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getMediaBySlug(params.slug)

  if (!item) {
    return mediaIndexMetadata
  }

  const title = `${item.title} | Adil Mukhi`
  const description = item.quote

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${getMediaPath(item)}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}${getMediaPath(item)}`,
      title,
      description,
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  }
}

export default function MediaDetailPage({ params }: { params: { slug: string } }) {
  const item = getMediaBySlug(params.slug)

  if (!item) {
    notFound()
  }

  const canonicalPath = getMediaPath(item)
  const canonicalUrl = `${siteUrl}${canonicalPath}`
  const matchingVideo = findMatchingVideo(item.link)
  const toIso = (d: string) => {
    const parsed = new Date(d)
    return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
  }
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: item.title,
      url: canonicalUrl,
      description: item.quote,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-CA",
      mainEntity: { "@id": `${canonicalUrl}#article` },
    },
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${canonicalUrl}#article`,
      headline: item.title,
      description: item.quote,
      url: item.link,
      ...(toIso(item.date) ? { datePublished: toIso(item.date) } : {}),
      isBasedOn: item.link,
      publisher: { "@type": "Organization", name: item.publication },
      author: { "@type": "Organization", name: item.publication },
      about: { "@id": `${siteUrl}/#person` },
      mentions: { "@id": `${siteUrl}/#person` },
    },
  ]

  return (
    <>
      <Header />
      <Script id={`media-${params.slug}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <AnimatedSection>
          <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container max-w-4xl">
              <SEOBreadcrumbs
                items={[
                  { label: "Media", href: "/media" },
                  ...(matchingVideo ? [{ label: "Watch & Listen", href: "/watch" }] : []),
                  { label: item.title, href: canonicalPath, active: true },
                ]}
              />
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href="/media">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Media
                </Link>
              </Button>
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
                  <div className="relative aspect-[4/5]">
                    <Image src="/og-image.png" alt={item.title} fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                    <Sparkles className="h-4 w-4" />
                    Indexed media page
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                    {item.title}
                  </h1>
                  <p className="mt-4 text-2xl font-semibold text-primary">{item.publication}</p>
                  <p className="mt-2 text-lg text-muted-foreground">{item.date}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary">{item.type}</Badge>
                  </div>
                  <blockquote className="mt-8 rounded-2xl border bg-card p-6 text-lg leading-8 text-muted-foreground italic">
                    {item.quote}
                  </blockquote>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {matchingVideo ? (
                      <Button asChild>
                        <Link href={getVideoPath(matchingVideo)}>
                          <Play className="mr-2 h-4 w-4" />
                          Watch on this site
                        </Link>
                      </Button>
                    ) : null}
                    <Button asChild variant={matchingVideo ? "outline" : "default"}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {matchingVideo ? "Original source" : "Read original coverage"}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
