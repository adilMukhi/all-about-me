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
import { workExperiences } from "@/data/work-experience"
import { getWorkExperienceBySlug, getWorkExperiencePath } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export function generateStaticParams() {
  return workExperiences
    .filter((experience) => experience.company !== "Dr. Interested")
    .map((experience) => ({ slug: experience.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const experience = getWorkExperienceBySlug(params.slug)

  if (!experience || experience.company === "Dr. Interested") {
    return {
      title: "Experience",
      description: "Explore Adil Mukhi's indexed experience pages.",
    }
  }

  const title = `${experience.title} at ${experience.company} | Adil Mukhi`
  const description = experience.longDescription || experience.description

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${getWorkExperiencePath(experience)}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}${getWorkExperiencePath(experience)}`,
      title,
      description,
      images: [{ url: `${siteUrl}${experience.image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${experience.image}`],
    },
  }
}

export default function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const experience = getWorkExperienceBySlug(params.slug)

  if (!experience || experience.company === "Dr. Interested") {
    notFound()
  }

  const canonicalPath = getWorkExperiencePath(experience)
  const pageTitle = `${experience.title} at ${experience.company}`
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${siteUrl}${canonicalPath}`,
    description: experience.longDescription || experience.description,
    about: {
      "@id": `${siteUrl}/#person`,
    },
    mentions: [experience.company, ...experience.skills],
  }

  return (
    <>
      <Header />
      <Script id={`experience-${experience.slug}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Experience", href: "/experience" },
                { label: experience.company, href: canonicalPath, active: true },
              ]}
            />

            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Experience Library
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <Sparkles className="h-4 w-4" />
                  Indexed experience page
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                  {experience.title}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">{experience.company}</p>
                <p className="mt-2 text-lg text-muted-foreground">{experience.period}</p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {experience.longDescription || experience.description}
                </p>

                {experience.progression && experience.progression.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Role Progression</h2>
                    <div className="space-y-4">
                      {experience.progression.map((role) => (
                        <div key={`${role.role}-${role.period}`} className="rounded-xl border bg-card p-4 shadow-sm">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-semibold">{role.role}</h3>
                            <Badge variant="outline">{role.period}</Badge>
                          </div>
                          {role.description && <p className="mt-2 text-sm text-muted-foreground">{role.description}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={experience.image || "/placeholder.svg?height=600&width=800"}
                      alt={`${experience.title} at ${experience.company}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {experience.images && experience.images.length > 0 && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {experience.images.map((image, index) => (
                      <div key={image} className="relative aspect-video overflow-hidden rounded-xl border">
                        <Image src={image} alt={`${experience.company} image ${index + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {experience.stats && experience.stats.length > 0 && (
                  <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Key Impact</h2>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {experience.stats.map((stat) => (
                        <li key={stat} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Skills Developed</h2>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              {experience.link && (
                <div className="mt-6">
                  <Button asChild>
                    <a href={experience.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Organization
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}