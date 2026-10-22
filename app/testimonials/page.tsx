import type { Metadata } from "next"
import { MessageSquareQuote } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import Testimonials from "@/components/testimonials"
import { testimonials } from "@/data/testimonials"
import { testimonialsIndexMetadata } from "../page-metadata"
import { slugify } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"


export const metadata: Metadata = testimonialsIndexMetadata

const toIso = (d: string) => {
  const parsed = new Date(d)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

const testimonialsStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/testimonials#webpage`,
    url: `${siteUrl}/testimonials`,
    name: "Testimonials for Adil Mukhi",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#person` },
    inLanguage: "en-CA",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: testimonials.length,
      itemListElement: testimonials.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}/testimonials/${slugify(`${t.name}-${t.connection}`)}`,
      })),
    },
  },
  // Recommendations are listed as quotations; Google does not support review snippets about a person
  ...testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Quotation",
    text: t.testimonial,
    ...(toIso(t.timeKnown) ? { dateCreated: toIso(t.timeKnown) } : {}),
    about: { "@id": `${siteUrl}/#person` },
    creator: { "@type": "Person", name: t.name, jobTitle: t.role },
  })),
]

export default function TestimonialsIndexPage() {
  return (
    <>
      <script
          id="testimonials-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: (JSON.stringify(testimonialsStructuredData)).replace(/</g, "\\u003c") }}
        />
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Testimonials", href: "/testimonials", active: true }]} />
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <MessageSquareQuote className="h-4 w-4" />
                In their words
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                Testimonials
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Recommendations from colleagues, managers, mentors, and clients who have worked with me. Select a name to read that recommendation on its own page.
              </p>
            </div>
            <Testimonials showHeading={false} />
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
