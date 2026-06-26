import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { ArrowLeft, Sparkles } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { slugify } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const testimonials = [
  {
    name: "Peace Mukazi Ndekezi, Ph.D.",
    role: "PhD in Conflict Studies | Women-Led Peacebuilding & Community-Based Approaches | Researcher | Public Engagement and Advocacy",
    relationship: "Senior Colleague",
    timeKnown: "September 17, 2025",
    connection: "Results Canada volunteer collaboration",
    testimonial:
      "I have had the privilege of working with Adil through his volunteer engagement with Results Canada, and I have been continually impressed by his leadership, dedication, and passion for advocacy.",
    image: "/Peace-Mukazi-Ndekei.jpg",
  },
  {
    name: "Kai Flicker",
    role: "Youth Program Coordinator at Children First Canada | University of Ottawa Student",
    relationship: "Direct Manager",
    timeKnown: "September 15, 2025",
    connection: "SDG Accelerator Program Facilitator",
    testimonial:
      "I had the pleasure of working with Adil during the SDG Accelerator Program at Children First Canada, where he served as a Facilitator.",
    image: "/KaiFlicker.jpg",
  },
  {
    name: "Kate Tucker",
    role: "Medical Student at NOSM U",
    relationship: "Mentor",
    timeKnown: "September 29, 2025",
    connection: "STEM Fellowship mentorship program",
    testimonial:
      "I had the pleasure of mentoring Adil through the STEM Fellowship mentorship program. Since first meeting him, he has impressed me with his drive, leadership, and curiosity.",
    image: "/KateTucker.jpg",
  },
  {
    name: "Michael Furdyk",
    role: "Co-founder & Director of Innovation, TakingITGlobal",
    relationship: "Client",
    timeKnown: "September 23, 2025",
    connection: "Curriculum review for YVIP AI lessons and modules",
    testimonial:
      "We appreciate [Adil's] insights in your review of our new Artificial Intelligence lessons and curriculum modules, helping us tailor them to students across middle and high school.",
    image: "/MichaelFurdyk.jpg",
  },
]

export function generateStaticParams() {
  return testimonials.map((testimonial) => ({ slug: slugify(`${testimonial.name}-${testimonial.connection}`) }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const testimonial = testimonials.find((item) => slugify(`${item.name}-${item.connection}`) === params.slug)

  if (!testimonial) {
    return {
      title: "Testimonials",
      description: "Explore Adil Mukhi's indexed testimonial pages.",
    }
  }

  const title = `${testimonial.name} recommends Adil Mukhi`
  const description = testimonial.testimonial

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/testimonials/${params.slug}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}/testimonials/${params.slug}`,
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

export default function TestimonialDetailPage({ params }: { params: { slug: string } }) {
  const testimonial = testimonials.find((item) => slugify(`${item.name}-${item.connection}`) === params.slug)

  if (!testimonial) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${testimonial.name} recommends Adil Mukhi`,
    url: `${siteUrl}/testimonials/${params.slug}`,
    description: testimonial.testimonial,
    about: {
      "@id": `${siteUrl}/#person`,
    },
    mentions: [testimonial.relationship, testimonial.connection],
  }

  return (
    <>
      <Header />
      <Script id={`testimonial-${params.slug}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Testimonials", href: "/testimonials" },
                { label: testimonial.name, href: `/testimonials/${params.slug}`, active: true },
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
                  Indexed testimonial page
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
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
