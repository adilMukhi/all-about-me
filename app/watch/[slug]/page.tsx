import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { videos, getVideoBySlug, getVideoPath, getVideoThumbnail, getVideoEmbedUrl } from "@/data/videos"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const toIso = (d: string) => {
  const parsed = new Date(d)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

export function generateStaticParams() {
  return videos.map((video) => ({ slug: video.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const video = getVideoBySlug(slug)

  if (!video) {
    return {
      title: "Watch & Listen",
      description: "Watch and listen to Adil Mukhi's interviews, podcasts, and TEDx talks.",
    }
  }

  const canonicalUrl = `${siteUrl}${getVideoPath(video)}`
  const title = `${video.title} | ${video.category} | Adil Mukhi`
  const image = getVideoThumbnail(video, siteUrl)

  return {
    title: `${video.title} — ${video.category}`,
    description: video.description,
    keywords: [
      "Adil Mukhi",
      video.category,
      video.publisher,
      "youth advocate",
      "public speaker",
      "Dr. Interested",
      video.category === "TEDx Talk" ? "TEDx talk" : "interview",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "video.other",
      siteName: "Adil Mukhi",
      title,
      description: video.description,
      url: canonicalUrl,
      images: [{ url: image, width: 1280, height: 720, alt: video.title }],
      ...(video.platform === "youtube"
        ? { videos: [{ url: `https://www.youtube.com/watch?v=${video.videoId}` }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: video.description,
      creator: "@adilm_0",
      site: "@adilm_0",
      images: [image],
    },
  }
}

export default async function WatchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const video = getVideoBySlug(slug)

  if (!video) {
    notFound()
  }

  const canonicalPath = getVideoPath(video)
  const canonicalUrl = `${siteUrl}${canonicalPath}`
  const embedUrl = getVideoEmbedUrl(video)
  const thumbnail = getVideoThumbnail(video, siteUrl)

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": video.platform === "spotify" ? "PodcastEpisode" : "VideoObject",
      "@id": `${canonicalUrl}#video`,
      name: video.title,
      description: video.description,
      thumbnailUrl: [thumbnail],
      ...(toIso(video.date) ? { uploadDate: toIso(video.date), datePublished: toIso(video.date) } : {}),
      ...(video.duration ? { duration: video.duration } : {}),
      url: canonicalUrl,
      contentUrl: video.watchUrl,
      ...(video.platform === "youtube"
        ? { embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}` }
        : {}),
      inLanguage: "en-CA",
      publisher: { "@type": "Organization", name: video.publisher },
      productionCompany: { "@type": "Organization", name: video.publisher },
      about: { "@id": `${siteUrl}/#person` },
      actor: { "@id": `${siteUrl}/#person` },
      isFamilyFriendly: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: `${video.title} — ${video.category}`,
      url: canonicalUrl,
      description: video.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: thumbnail,
      mainEntity: { "@id": `${canonicalUrl}#video` },
      inLanguage: "en-CA",
    },
  ]

  return (
    <>
      <Header />
      <Script id={`watch-${video.slug}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-4xl">
            <SEOBreadcrumbs
              items={[
                { label: "Media", href: "/media" },
                { label: "Watch & Listen", href: "/watch" },
                { label: video.title, href: canonicalPath, active: true },
              ]}
            />

            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/watch">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Watch &amp; Listen
              </Link>
            </Button>

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              <Play className="h-4 w-4" />
              {video.category}
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
              {video.title}
            </h1>
            <p className="mt-4 text-xl font-semibold text-primary">{video.publisher}</p>
            <p className="mt-2 text-muted-foreground">
              {new Date(video.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
              {video.dateApproximate ? " (approx.)" : ""}
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-lg">
              {video.platform === "external" ? (
                <div className="flex flex-col items-center gap-4 p-10 text-center">
                  <p className="text-muted-foreground">This interview is hosted on {video.publisher}.</p>
                  <Button asChild>
                    <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch on {video.publisher}
                    </a>
                  </Button>
                </div>
              ) : (
                <div className={video.platform === "spotify" ? "" : "relative aspect-video"}>
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={video.platform === "spotify" ? "w-full" : "absolute inset-0 h-full w-full"}
                    style={video.platform === "spotify" ? { height: 232 } : undefined}
                  />
                </div>
              )}
            </div>

            <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">About this {video.category.toLowerCase()}</h2>
              <p className="text-muted-foreground leading-8">{video.description}</p>
              {video.notes ? <p className="mt-4 text-muted-foreground leading-8">{video.notes}</p> : null}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {video.platform === "spotify" ? "Listen on Spotify" : `Watch on ${video.publisher}`}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/media">See all media coverage</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-semibold mb-4">More to watch</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {videos
                  .filter((other) => other.slug !== video.slug)
                  .slice(0, 4)
                  .map((other) => (
                    <Link
                      key={other.slug}
                      href={getVideoPath(other)}
                      className="rounded-xl border bg-card p-4 shadow-sm transition-colors hover:border-primary"
                    >
                      <p className="text-xs text-muted-foreground">{other.category} · {other.publisher}</p>
                      <p className="mt-1 font-medium">{other.title}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
