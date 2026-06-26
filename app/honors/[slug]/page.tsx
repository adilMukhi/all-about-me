import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { honorsAwards } from "@/data/honors-awards"
import { getHonorBySlug, getHonorPath } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export function generateStaticParams() {
  return honorsAwards.map((award) => ({ slug: getHonorPath(award).split("/").pop() as string }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const award = getHonorBySlug(params.slug)

  if (!award) {
    return {
      title: "Honors & Awards",
      description: "Explore Adil Mukhi's indexed honors and award pages.",
    }
  }

  const title = `${award.title} | Adil Mukhi`
  const description = award.description

  const image = Array.isArray(award.image) ? award.image[0] : award.image

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${getHonorPath(award)}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}${getHonorPath(award)}`,
      title,
      description,
      images: [{ url: `${siteUrl}${image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${image}`],
    },
  }
}

export default function HonorDetailPage({ params }: { params: { slug: string } }) {
  const award = getHonorBySlug(params.slug)

  if (!award) {
    notFound()
  }

  const canonicalPath = getHonorPath(award)
  const pageTitle = `${award.title} | ${award.issuer}`
  const image = Array.isArray(award.image) ? award.image[0] : award.image
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${siteUrl}${canonicalPath}`,
    description: award.description,
    about: {
      "@id": `${siteUrl}/#person`,
    },
    mentions: [award.issuer, ...award.skills],
  }

  return (
    <>
      <Header />
      <Script id={`honor-${award.title}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Honors & Awards", href: "/honors" },
                { label: award.title, href: canonicalPath, active: true },
              ]}
            />

            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/honors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Honors & Awards
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <Sparkles className="h-4 w-4" />
                  Indexed award page
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                  {award.title}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">{award.issuer}</p>
                <p className="mt-2 text-lg text-muted-foreground">{award.year}</p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{award.description}</p>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image src={image} alt={award.title} fill className="object-cover" />
                  </div>
                </div>

                {award.link && award.link.startsWith("http") && (
                  <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Source</h2>
                    <Button asChild>
                      <a href={award.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Reference
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Skills Recognized</h2>
              <div className="flex flex-wrap gap-2">
                {award.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
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