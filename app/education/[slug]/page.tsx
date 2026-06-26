import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { educationData } from "@/data/education"
import { getEducationBySlug, getEducationPath } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export function generateStaticParams() {
  return educationData.map((education) => ({ slug: education.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const education = getEducationBySlug(params.slug)

  if (!education) {
    return {
      title: "Education",
      description: "Explore Adil Mukhi's indexed education pages.",
    }
  }

  const title = `${education.degree} | Adil Mukhi`
  const description = education.longDescription || education.description

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${getEducationPath(education)}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}${getEducationPath(education)}`,
      title,
      description,
      images: [{ url: `${siteUrl}${education.image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${education.image}`],
    },
  }
}

export default function EducationDetailPage({ params }: { params: { slug: string } }) {
  const education = getEducationBySlug(params.slug)

  if (!education) {
    notFound()
  }

  const canonicalPath = getEducationPath(education)
  const pageTitle = `${education.degree} | ${education.institution}`
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${siteUrl}${canonicalPath}`,
    description: education.longDescription || education.description,
    about: {
      "@id": `${siteUrl}/#person`,
    },
    mentions: [education.institution, ...(education.achievements || []), ...(education.courses || [])],
  }

  return (
    <>
      <Header />
      <Script id={`education-${education.slug}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Education", href: "/education" },
                { label: education.degree, href: canonicalPath, active: true },
              ]}
            />

            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/education">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Education
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <Sparkles className="h-4 w-4" />
                  Indexed education page
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                  {education.degree}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">{education.institution}</p>
                <p className="mt-2 text-lg text-muted-foreground">{education.period}</p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {education.longDescription || education.description}
                </p>

                {education.courses && education.courses.length > 0 && (
                  <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Courses</h2>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {education.courses.map((course) => (
                        <li key={course} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={education.image || "/placeholder.svg?height=600&width=800"}
                      alt={education.degree}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {(education.achievements && education.achievements.length > 0) && (
                  <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                    <div className="flex flex-wrap gap-2">
                      {education.achievements.map((achievement) => (
                        <Badge key={achievement} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {education.link && education.link.startsWith("http") && (
                  <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Source</h2>
                    <Button asChild>
                      <a href={education.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Program
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}