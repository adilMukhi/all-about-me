import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sparkles } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { testimonials, getTestimonialBySlug, getTestimonialPath, getTestimonialShortRole, getTestimonialSlug, type Testimonial } from "@/data/testimonials"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { metaDescription, seoTitle } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"


const toIso = (d: string) => {
  const parsed = new Date(d)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

// Names the recommender up front, so the search snippet says who is vouching before the quote begins
const describe = (testimonial: Testimonial) => metaDescription(`${testimonial.name} on Adil Mukhi: ${testimonial.testimonial}`)

export function generateStaticParams() {
  return testimonials.map((testimonial) => ({ slug: getTestimonialSlug(testimonial) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const testimonial = getTestimonialBySlug(slug)

  if (!testimonial) {
    return {
      title: "Testimonial not found",
      description: "This recommendation could not be found. See all recommendations for Adil Mukhi.",
      robots: { index: false },
    }
  }

  const title = `${testimonial.name} recommends Adil Mukhi`
  const description = describe(testimonial)
  const url = `${siteUrl}${getTestimonialPath(testimonial)}`
  const image = { url: `${siteUrl}${testimonial.image}`, alt: `Photo of ${testimonial.name}` }

  return {
    title: seoTitle(title),
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      siteName: "Adil Mukhi",
      url,
      title,
      description,
      ...(toIso(testimonial.timeKnown) ? { publishedTime: toIso(testimonial.timeKnown) } : {}),
      authors: [testimonial.name],
      images: [image],
    },
    // The photos are small squares, so the compact card shows them without cropping
    twitter: {
      card: "summary",
      title,
      description,
      images: [image.url],
    },
  }
}

export default async function TestimonialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const testimonial = getTestimonialBySlug(slug)

  if (!testimonial) {
    notFound()
  }

  const canonicalUrl = `${siteUrl}${getTestimonialPath(testimonial)}`
  const shortRole = getTestimonialShortRole(testimonial)
  const description = describe(testimonial)
  const others = testimonials.filter((item) => item !== testimonial)
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      name: `${testimonial.name} recommends Adil Mukhi`,
      url: canonicalUrl,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}${testimonial.image}`, caption: `Photo of ${testimonial.name}` },
      ...(toIso(testimonial.timeKnown) ? { datePublished: toIso(testimonial.timeKnown) } : {}),
      inLanguage: "en-CA",
      mainEntity: { "@id": `${canonicalUrl}#quote` },
      relatedLink: others.map((item) => `${siteUrl}${getTestimonialPath(item)}`),
    },
    // A recommendation of a person, so a Quotation rather than a Review: Google only supports review
    // snippets for products, businesses and similar items, and these testimonials carry no rating
    {
      "@context": "https://schema.org",
      "@type": "Quotation",
      "@id": `${canonicalUrl}#quote`,
      url: canonicalUrl,
      name: `Recommendation for Adil Mukhi from ${testimonial.name}`,
      text: testimonial.testimonial,
      ...(toIso(testimonial.timeKnown) ? { dateCreated: toIso(testimonial.timeKnown) } : {}),
      about: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/testimonials#webpage` },
      keywords: [testimonial.relationship, testimonial.connection],
      creator: {
        "@type": "Person",
        name: testimonial.name,
        jobTitle: shortRole,
        description: testimonial.role,
        image: `${siteUrl}${testimonial.image}`,
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
                { label: testimonial.name, href: getTestimonialPath(testimonial), active: true },
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
                  <Image src={testimonial.image} alt={`Photo of ${testimonial.name}, ${shortRole}`} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Testimonial
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                  <span className="mb-2 block text-xl font-semibold tracking-normal text-muted-foreground sm:text-2xl">
                    Recommendation for Adil Mukhi from
                  </span>{" "}
                  {testimonial.name}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">{testimonial.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">{testimonial.relationship}</Badge>
                  <Badge variant="outline">{testimonial.timeKnown}</Badge>
                  <Badge variant="outline">{testimonial.connection}</Badge>
                </div>
                <figure className="mt-8">
                  <blockquote className="text-lg leading-8 text-muted-foreground whitespace-pre-line">
                    {testimonial.testimonial}
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-medium text-foreground">
                    {testimonial.name}, {shortRole}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="more-testimonials" className="container pb-16">
          <h2 id="more-testimonials" className="mb-6 text-2xl font-bold tracking-tighter sm:text-3xl">
            More recommendations for Adil
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={getTestimonialSlug(item)}>
                <Link
                  href={getTestimonialPath(item)}
                  className="flex h-full items-center gap-4 rounded-xl border bg-card p-4 transition-colors hover:border-primary/60 hover:bg-accent"
                >
                  <Image src={item.image} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full object-cover" />
                  <span className="min-w-0">
                    <span className="block font-semibold text-card-foreground">{item.name}</span>
                    <span className="block truncate text-sm text-muted-foreground">{getTestimonialShortRole(item)}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/testimonials" className="font-medium text-primary underline-offset-4 hover:underline">
              See all testimonials together
            </Link>
          </p>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
