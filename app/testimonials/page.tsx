import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MessageSquareQuote } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { testimonialsIndexMetadata } from "../page-metadata"
import { slugify } from "@/lib/seo-paths"

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

export const metadata: Metadata = testimonialsIndexMetadata

export default function TestimonialsIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Testimonials", href: "/testimonials", active: true }]} />
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <MessageSquareQuote className="h-4 w-4" />
                Indexed testimonial pages
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                Testimonials
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Public testimonial pages for recommendations, mentorship notes, and collaboration feedback.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => {
                const slug = slugify(`${testimonial.name}-${testimonial.connection}`)
                const href = `/testimonials/${slug}`

                return (
                  <Card key={href} className={index === 0 ? "md:col-span-2" : ""}>
                    <Link href={href} className="block h-52 overflow-hidden relative">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </Link>
                    <CardHeader>
                      <CardDescription>{testimonial.relationship}</CardDescription>
                      <CardTitle className="text-xl" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-4">{testimonial.testimonial}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{testimonial.timeKnown}</Badge>
                        <Badge variant="outline">{testimonial.connection}</Badge>
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
