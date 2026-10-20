import type { Metadata } from "next"
import { Heart } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import VolunteerWorkSection from "@/components/volunteer-work"
import { volunteerIndexMetadata } from "../page-metadata"
import { volunteerWork } from "@/data/volunteer-work"
import { getVolunteerPath } from "@/lib/seo-paths"

export const metadata: Metadata = volunteerIndexMetadata

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const volunteerStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/volunteer#webpage`,
  url: `${siteUrl}/volunteer`,
  name: "Volunteer Work — Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: volunteerWork.length,
    itemListElement: volunteerWork.map((volunteer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${getVolunteerPath(volunteer)}`,
      name: `${volunteer.role} — ${volunteer.organization}`,
    })),
  },
}

export default function VolunteerIndexPage() {
  return (
    <>
      <script
          id="volunteer-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: (JSON.stringify(volunteerStructuredData)).replace(/</g, "\\u003c") }}
        />
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Volunteer Work", href: "/volunteer", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Heart className="h-4 w-4" />
                Community service
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                Volunteer Work
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Volunteer roles in hospitals, research, advocacy, and community programs. Select any role to see the full story, or open its own page.
              </p>
            </div>

            <VolunteerWorkSection showHeading={false} />
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}