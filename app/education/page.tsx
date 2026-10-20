import type { Metadata } from "next"
import { GraduationCap } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import EducationSection from "@/components/education"
import { educationIndexMetadata } from "../page-metadata"
import { educationData } from "@/data/education"
import { getEducationPath } from "@/lib/seo-paths"

export const metadata: Metadata = educationIndexMetadata

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const educationStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/education#webpage`,
  url: `${siteUrl}/education`,
  name: "Education & Training — Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: educationData.length,
    itemListElement: educationData.map((education, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${getEducationPath(education)}`,
      name: education.degree,
    })),
  },
}

export default function EducationIndexPage() {
  return (
    <>
      <script
          id="education-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: (JSON.stringify(educationStructuredData)).replace(/</g, "\\u003c") }}
        />
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Education", href: "/education", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <GraduationCap className="h-4 w-4" />
                Academics and training
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                Education & Training
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Academic achievements, programs, and training in medicine, research, and leadership. Select any item to see the full details, or open its own page.
              </p>
            </div>

            <EducationSection showHeading={false} />
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}