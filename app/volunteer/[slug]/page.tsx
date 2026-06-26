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
import { volunteerWork } from "@/data/volunteer-work"
import { getVolunteerBySlug, getVolunteerPath } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export function generateStaticParams() {
  return volunteerWork.map((volunteer) => ({ slug: getVolunteerPath(volunteer).split("/").pop() as string }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const volunteer = getVolunteerBySlug(params.slug)

  if (!volunteer) {
    return {
      title: "Volunteer Work",
      description: "Explore Adil Mukhi's indexed volunteer pages.",
    }
  }

  const title = `${volunteer.role} at ${volunteer.organization} | Adil Mukhi`
  const description = volunteer.description

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${getVolunteerPath(volunteer)}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}${getVolunteerPath(volunteer)}`,
      title,
      description,
      images: [{ url: `${siteUrl}${volunteer.image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${volunteer.image}`],
    },
  }
}

export default function VolunteerDetailPage({ params }: { params: { slug: string } }) {
  const volunteer = getVolunteerBySlug(params.slug)

  if (!volunteer) {
    notFound()
  }

  const canonicalPath = getVolunteerPath(volunteer)
  const pageTitle = `${volunteer.role} | ${volunteer.organization}`
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${siteUrl}${canonicalPath}`,
    description: volunteer.description,
    about: {
      "@id": `${siteUrl}/#person`,
    },
    mentions: [volunteer.organization, ...volunteer.skills],
  }

  return (
    <>
      <Header />
      <Script id={`volunteer-${volunteer.role}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Volunteer Work", href: "/volunteer" },
                { label: volunteer.role, href: canonicalPath, active: true },
              ]}
            />

            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/volunteer">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Volunteer Work
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <Sparkles className="h-4 w-4" />
                  Indexed volunteer page
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                  {volunteer.role}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">{volunteer.organization}</p>
                <p className="mt-2 text-lg text-muted-foreground">{volunteer.period}</p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{volunteer.description}</p>

                {volunteer.progression && volunteer.progression.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Progression</h2>
                    <div className="space-y-4">
                      {volunteer.progression.map((role) => (
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
                      src={volunteer.image || "/placeholder.svg?height=600&width=800"}
                      alt={`${volunteer.role} at ${volunteer.organization}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {volunteer.progression && volunteer.progression.length > 0 && (
                  <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Earlier Roles</h2>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {volunteer.progression.map((role) => (
                        <li key={role.role} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{role.role}</span>
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
                {volunteer.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              {volunteer.link && (
                <div className="mt-6">
                  <Button asChild>
                    <a href={volunteer.link} target="_blank" rel="noopener noreferrer">
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