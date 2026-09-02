import type { ReactNode } from "react"
import Script from "next/script"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

interface LegalPageProps {
  title: string
  slug: string
  /** e.g. "February 2, 2026" */
  lastUpdated: string
  intro: ReactNode
  children: ReactNode
}

export function LegalPage({ title, slug, lastUpdated, intro, children }: LegalPageProps) {
  const url = `${siteUrl}/${slug}`
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${title} — Adil Mukhi`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#person` },
    dateModified: new Date(lastUpdated).toString() === "Invalid Date" ? undefined : new Date(lastUpdated).toISOString(),
    inLanguage: "en-CA",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: title, item: url },
      ],
    },
  }

  return (
    <>
      <Header />
      <Script id={`legal-${slug}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-3xl">
            <SEOBreadcrumbs items={[{ label: title, href: `/${slug}`, active: true }]} />

            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl"
              style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
            >
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

            <div className="mt-8 space-y-6 text-[15px] leading-7 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:marker:text-primary">
              {intro}
              {children}
              <p className="border-t pt-6 text-xs">
                This document is a general template provided for transparency. It is not legal advice. For questions,
                contact{" "}
                <a href="mailto:adilm@drinterested.org">adilm@drinterested.org</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
