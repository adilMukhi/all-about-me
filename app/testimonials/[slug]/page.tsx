import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sparkles } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { testimonials } from "@/data/testimonials"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { slugify, metaDescription, seoTitle } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"


export function generateStaticParams() {
  return testimonials.map((testimonial) => ({ slug: slugify(`${testimonial.name}-${testimonial.connection}`) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const testimonial = testimonials.find((item) => slugify(`${item.name}-${item.connection}`) === slug)

  if (!testimonial) {
    return {
      title: "Testimonials",
      description: "Explore Adil Mukhi's testimonial.",
    }
  }

  const title = `${testimonial.name} recommends Adil Mukhi`
  const description = metaDescription(testimonial.testimonial)

  return {
    title: seoTitle(title),
    description,
    alternates: {
      canonical: `${siteUrl}/testimonials/${slug}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}/testimonials/${slug}`,
      title,
      description,
      images: [{ url: `${siteUrl}${testimonial.image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${testimonial.image}`],
    },
  }
}

export default async function TestimonialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const testimonial = testimonials.find((item) => slugify(`${item.name}-${item.connection}`) === slug)

  if (!testimonial) {
    notFound()
  }

  const canonicalUrl = `${siteUrl}/testimonials/${slug}`
  const toIso = (d: string) => {
    const parsed = new Date(d)
    return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
  }
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: `${testimonial.name} recommends Adil Mukhi`,
      url: canonicalUrl,
      description: testimonial.testimonial,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-CA",
      mainEntity: { "@id": `${canonicalUrl}#quote` },
    },
    // A recommendation of a person, so a Quotation rather than a Review: Google only supports review
    // snippets for products, businesses and similar items, and these testimonials carry no rating
    {
      "@context": "https://schema.org",
      "@type": "Quotation",
      "@id": `${canonicalUrl}#quote`,
      url: canonicalUrl,
      text: testimonial.testimonial,
      ...(toIso(testimonial.timeKnown) ? { dateCreated: toIso(testimonial.timeKnown) } : {}),
      about: { "@id": `${siteUrl}/#person` },
      creator: {
        "@type": "Person",
        name: testimonial.name,
        jobTitle: testimonial.role,
      },
    },
  ]

  return (
    <>
      <Header />
      <script
        id={`testimonial-${slug}-structured-data`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: (JSON.stringify(structuredData)).replace(/</g, "\\u003c") }}
      />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Testimonials", href: "/testimonials" },
                { label: testimonial.name, href: `/testimonials/${slug}`, active: true },
              ]}
            />
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/testimonials">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonials
              </Link>
            </Button>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
                <div className="relative aspect-[4/5]">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <Sparkles className="h-4 w-4" />
                  Testimonial
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                  {testimonial.name}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">{testimonial.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">{testimonial.relationship}</Badge>
                  <Badge variant="outline">{testimonial.timeKnown}</Badge>
                  <Badge variant="outline">{testimonial.connection}</Badge>
                </div>
                <blockquote className="mt-8 text-lg leading-8 text-muted-foreground whitespace-pre-line">
                  {testimonial.testimonial}
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
