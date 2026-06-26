import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Briefcase, ExternalLink } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { experienceIndexMetadata } from "../page-metadata"
import { workExperiences } from "@/data/work-experience"
import { getWorkExperiencePath } from "@/lib/seo-paths"

export const metadata: Metadata = experienceIndexMetadata

export default function ExperienceIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Experience", href: "/experience", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Briefcase className="h-4 w-4" />
                Indexed role pages
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                Experience Library
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Browse the individual pages for each leadership role, research appointment, and public impact project.
                These pages are designed to be easily discovered by search engines and AI systems.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {workExperiences.map((experience, index) => {
                const href = getWorkExperiencePath(experience)

                return (
                  <Card
                    key={experience.slug}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                    }`}
                  >
                    <Link href={href} className="block h-full">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={experience.image || "/placeholder.svg?height=300&width=500"}
                          alt={`${experience.title} at ${experience.company}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-sm uppercase tracking-[0.2em] text-white/75">{experience.period}</p>
                          <h2 className="mt-1 text-2xl font-bold leading-tight" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                            {experience.title}
                          </h2>
                          <p className="text-sm text-white/85">{experience.company}</p>
                        </div>
                      </div>
                    </Link>
                    <CardHeader>
                      <CardDescription>{experience.period}</CardDescription>
                      <CardTitle className="text-xl" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                        {experience.company}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                        {experience.skills.length > 4 && <Badge variant="outline">+{experience.skills.length - 4}</Badge>}
                      </div>
                      <div className="flex items-center justify-between gap-3 pt-2">
                        {experience.link && experience.link.startsWith("http") && (
                          <Button asChild variant="ghost" size="sm">
                            <a href={experience.link} target="_blank" rel="noopener noreferrer">
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