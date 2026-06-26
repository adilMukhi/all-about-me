import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { GraduationCap, ExternalLink } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { educationIndexMetadata } from "../page-metadata"
import { educationData } from "@/data/education"
import { getEducationPath } from "@/lib/seo-paths"

export const metadata: Metadata = educationIndexMetadata

export default function EducationIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Education", href: "/education", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <GraduationCap className="h-4 w-4" />
                Indexed education pages
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                Education & Training
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Explore academic programs, professional learning, and training experiences through searchable pages
                that help explain my background to both people and AI systems.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {educationData.map((education, index) => {
                const href = getEducationPath(education)

                return (
                  <Card
                    key={education.slug}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                    }`}
                  >
                    <Link href={href} className="block h-52 overflow-hidden relative">
                      <Image
                        src={education.image || "/placeholder.svg?height=300&width=500"}
                        alt={education.degree}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    <CardHeader>
                      <CardDescription>{education.period}</CardDescription>
                      <CardTitle className="text-xl" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                        {education.degree}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{education.institution}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{education.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {(education.achievements || education.courses || []).slice(0, 4).map((item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between gap-3 pt-2">
                        {education.link && education.link.startsWith("http") && (
                          <Button asChild variant="ghost" size="sm">
                            <a href={education.link} target="_blank" rel="noopener noreferrer">
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