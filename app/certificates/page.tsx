import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BadgeCheck, ExternalLink } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { certificateIndexMetadata } from "../page-metadata"
import { certificates } from "@/data/certificates"
import { getCertificatePath } from "@/lib/seo-paths"

export const metadata: Metadata = certificateIndexMetadata

export default function CertificatesIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Certificates", href: "/certificates", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <BadgeCheck className="h-4 w-4" />
                Indexed credential pages
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                Certificates & Credentials
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Every certificate here has its own discoverable page, helping search engines connect my training with
                the work I do in healthcare, leadership, accessibility, and youth advocacy.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {certificates.map((certificate, index) => {
                const href = getCertificatePath(certificate)

                return (
                  <Card
                    key={href}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                    }`}
                  >
                    <Link href={href} className="block h-52 overflow-hidden relative">
                      <Image
                        src={certificate.image || "/placeholder.svg?height=300&width=500"}
                        alt={certificate.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    <CardHeader>
                      <CardDescription>{certificate.date}</CardDescription>
                      <CardTitle className="text-xl" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                        {certificate.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{certificate.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                        {certificate.skills.length > 4 && <Badge variant="outline">+{certificate.skills.length - 4}</Badge>}
                      </div>
                      <div className="flex items-center justify-between gap-3 pt-2">
                        {certificate.link && certificate.link.startsWith("http") && (
                          <Button asChild variant="ghost" size="sm">
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                              Source
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}