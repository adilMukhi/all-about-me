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
import { certificates } from "@/data/certificates"
import { getCertificateBySlug, getCertificatePath } from "@/lib/seo-paths"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export function generateStaticParams() {
  return certificates.map((certificate) => ({ slug: certificate.slug || certificate.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const certificate = getCertificateBySlug(params.slug)

  if (!certificate) {
    return {
      title: "Certificates",
      description: "Explore Adil Mukhi's indexed certificate pages.",
    }
  }

  const title = `${certificate.name} | Adil Mukhi`
  const description = certificate.description

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${getCertificatePath(certificate)}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adil Mukhi",
      url: `${siteUrl}${getCertificatePath(certificate)}`,
      title,
      description,
      images: [{ url: `${siteUrl}${certificate.image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${certificate.image}`],
    },
  }
}

export default function CertificateDetailPage({ params }: { params: { slug: string } }) {
  const certificate = getCertificateBySlug(params.slug)

  if (!certificate) {
    notFound()
  }

  const canonicalPath = getCertificatePath(certificate)
  const pageTitle = `${certificate.name} | ${certificate.issuer}`
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${siteUrl}${canonicalPath}`,
    description: certificate.description,
    about: {
      "@id": `${siteUrl}/#person`,
    },
    mentions: [certificate.issuer, ...certificate.skills],
  }

  return (
    <>
      <Header />
      <Script id={`certificate-${certificate.slug}-structured-data`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs
              items={[
                { label: "Certificates", href: "/certificates" },
                { label: certificate.name, href: canonicalPath, active: true },
              ]}
            />

            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/certificates">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Certificates
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                  <Sparkles className="h-4 w-4" />
                  Indexed credential page
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                  {certificate.name}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">{certificate.issuer}</p>
                <p className="mt-2 text-lg text-muted-foreground">{certificate.date}</p>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{certificate.description}</p>

                <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Skills & Knowledge</h2>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border bg-card shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={certificate.image || "/placeholder.svg?height=600&width=800"}
                      alt={certificate.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {certificate.link && certificate.link.startsWith("http") && (
                  <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Credential Source</h2>
                    <Button asChild>
                      <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Issuer
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