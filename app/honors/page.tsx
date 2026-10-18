import type { Metadata } from "next"
import { Trophy } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import HonorsAwards from "@/components/honors-awards"
import Script from "next/script"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { honorsIndexMetadata } from "../page-metadata"
import { honorsAwards } from "@/data/honors-awards"
import { getHonorPath } from "@/lib/seo-paths"

export const metadata: Metadata = honorsIndexMetadata

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const honorsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/honors#webpage`,
  url: `${siteUrl}/honors`,
  name: "Honors & Awards — Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: honorsAwards.length,
    itemListElement: honorsAwards.map((award, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${getHonorPath(award)}`,
      name: `${award.title} — ${award.issuer}`,
    })),
  },
}

export default function HonorsIndexPage() {
  return (
    <>
      <Script id="honors-structured-data" type="application/ld+json">
        {JSON.stringify(honorsStructuredData)}
      </Script>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Honors & Awards", href: "/honors", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Trophy className="h-4 w-4" />
                Awards and recognition
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                Honors & Awards
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Recognition for my work in youth advocacy, healthcare, research, and community service. Select any
                award to see the full story.
              </p>
            </div>

            <HonorsAwards showHeading={false} />
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}