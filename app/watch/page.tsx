import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Play, Mic, ExternalLink } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { videos, getVideoPath, getVideoThumbnail } from "@/data/videos"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export const metadata: Metadata = {
  title: "Watch & Listen — Interviews, Podcasts & TEDx Talks",
  description:
    "Watch and listen to Adil Mukhi's TEDx talk, media interviews, and podcast appearances on youth advocacy, public speaking, mental health, healthcare, and social impact.",
  keywords: [
    "Adil Mukhi TEDx",
    "Adil Mukhi interview",
    "Adil Mukhi podcast",
    "Adil Mukhi talk",
    "youth advocate interview",
    "TEDxMcfarren Boulevard Youth",
    "Dr. Interested founder interview",
  ],
  alternates: { canonical: `${siteUrl}/watch` },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Watch & Listen — Interviews, Podcasts & TEDx Talks",
    description:
      "Adil Mukhi's TEDx talk, media interviews, and podcast appearances on youth advocacy, mental health, and social impact.",
    url: `${siteUrl}/watch`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Adil Mukhi — Watch & Listen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch & Listen — Adil Mukhi",
    description: "Adil Mukhi's TEDx talk, media interviews, and podcast appearances.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

const toIso = (d: string) => {
  const parsed = new Date(d)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

const watchStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/watch#webpage`,
    url: `${siteUrl}/watch`,
    name: "Watch & Listen — Adil Mukhi",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#person` },
    inLanguage: "en-CA",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: videos.length,
      itemListElement: videos.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${getVideoPath(video)}`,
        name: video.title,
      })),
    },
  },
  ...videos
    .filter((video) => video.platform === "youtube")
    .map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "@id": `${siteUrl}${getVideoPath(video)}#video`,
      name: video.title,
      description: video.description,
      thumbnailUrl: [getVideoThumbnail(video, siteUrl)],
      ...(toIso(video.date) ? { uploadDate: toIso(video.date) } : {}),
      ...(video.duration ? { duration: video.duration } : {}),
      contentUrl: video.watchUrl,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`,
      url: `${siteUrl}${getVideoPath(video)}`,
      publisher: { "@type": "Organization", name: video.publisher },
      about: { "@id": `${siteUrl}/#person` },
      actor: { "@id": `${siteUrl}/#person` },
    })),
]

export default function WatchIndexPage() {
  return (
    <>
      <Header />
      <Script id="watch-structured-data" type="application/ld+json">
        {JSON.stringify(watchStructuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Media", href: "/media" },
                { label: "Watch & Listen", href: "/watch", active: true },
              ]}
            />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Play className="h-4 w-4" />
                Watch & listen
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                Interviews, Podcasts & TEDx Talks
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Every interview and talk has its own page with the full video or episode embedded, a summary, and a link
                to the original source.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {videos.map((video, index) => {
                const href = getVideoPath(video)
                const thumb = video.platform === "youtube" ? getVideoThumbnail(video, siteUrl) : null

                return (
                  <Card
                    key={video.slug}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                    }`}
                  >
                    <Link href={href} className="block">
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        {thumb ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={thumb || "/placeholder.svg"}
                            alt={video.title}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Mic className="h-10 w-10 text-muted-foreground" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-white">
                            <Play className="h-6 w-6" />
                          </span>
                        </div>
                      </div>
                    </Link>
                    <CardHeader>
                      <CardDescription className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{video.category}</Badge>
                        <span>{video.publisher}</span>
                      </CardDescription>
                      <CardTitle className="text-lg" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                        <Link href={href} className="hover:text-primary">
                          {video.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">{video.description}</p>
                      <div className="flex items-center gap-4">
                        <Link href={href} className="text-sm font-medium text-primary hover:underline">
                          Watch here
                        </Link>
                        <a
                          href={video.watchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Original <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
