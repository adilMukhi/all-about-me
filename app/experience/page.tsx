import type { Metadata } from "next"
import { Briefcase } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import WorkExperienceSection from "@/components/work-experience"
import { workExperiences } from "@/data/work-experience"
import { getWorkExperiencePath } from "@/lib/seo-paths"
import { experienceIndexMetadata } from "../page-metadata"

export const metadata: Metadata = experienceIndexMetadata

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const experienceStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/experience#webpage`,
  url: `${siteUrl}/experience`,
  name: "Work Experience of Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: workExperiences.length,
    itemListElement: workExperiences.map((experience, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${getWorkExperiencePath(experience)}`,
      name: `${experience.title}, ${experience.company}`,
    })),
  },
}

export default function ExperienceIndexPage() {
  return (
    <>
      <script
        id="experience-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceStructuredData).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Experience", href: "/experience", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Briefcase className="h-4 w-4" />
                Roles and leadership
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                Experience Library
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Leadership roles, research appointments, advisory work, and public impact projects. Select any role to see the full story, or open its own page.
              </p>
            </div>

            <WorkExperienceSection showHeading={false} />
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}