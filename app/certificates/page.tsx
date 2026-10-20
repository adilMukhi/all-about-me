import type { Metadata } from "next"
import { BadgeCheck } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import CertificatesSection from "@/components/certificates"
import { certificateIndexMetadata } from "../page-metadata"
import { certificates } from "@/data/certificates"
import { getCertificatePath } from "@/lib/seo-paths"

export const metadata: Metadata = certificateIndexMetadata

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const certificatesStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/certificates#webpage`,
  url: `${siteUrl}/certificates`,
  name: "Certificates & Credentials — Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: certificates.length,
    itemListElement: certificates.map((certificate, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${getCertificatePath(certificate)}`,
      name: certificate.name,
    })),
  },
}

export default function CertificatesIndexPage() {
  return (
    <>
      <script
          id="certificates-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: (JSON.stringify(certificatesStructuredData)).replace(/</g, "\\u003c") }}
        />
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Certificates", href: "/certificates", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <BadgeCheck className="h-4 w-4" />
                Credentials
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                Certificates & Credentials
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Certificates in healthcare, first aid, research, accessibility, and leadership. Select any certificate to see the full details, or open its own page.
              </p>
            </div>

            <CertificatesSection showHeading={false} />
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}