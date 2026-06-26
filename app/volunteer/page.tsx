import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowRight, ExternalLink } from "lucide-react"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { volunteerIndexMetadata } from "../page-metadata"
import { volunteerWork } from "@/data/volunteer-work"
import { getVolunteerPath } from "@/lib/seo-paths"

export const metadata: Metadata = volunteerIndexMetadata

export default function VolunteerIndexPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <SEOBreadcrumbs items={[{ label: "Volunteer Work", href: "/volunteer", active: true }]} />

            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Heart className="h-4 w-4" />
                Indexed volunteer pages
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
                Volunteer Work
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Each volunteer role now has its own discoverable page, helping explain the scope of my community service,
                research support, and leadership work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {volunteerWork.map((volunteer, index) => {
                const href = getVolunteerPath(volunteer)

                return (
                  <Card
                    key={href}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                    }`}
                  >
                    <Link href={href} className="block h-52 overflow-hidden relative">
                      <Image
                        src={volunteer.image || "/placeholder.svg?height=300&width=500"}
                        alt={`${volunteer.role} at ${volunteer.organization}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    <CardHeader>
                      <CardDescription>{volunteer.period}</CardDescription>
                      <CardTitle className="text-xl" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                        {volunteer.role}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{volunteer.organization}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{volunteer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {volunteer.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                        {volunteer.skills.length > 4 && <Badge variant="outline">+{volunteer.skills.length - 4}</Badge>}
                      </div>
                      <div className="flex items-center justify-between gap-3 pt-2">
                        <Button asChild size="sm">
                          <Link href={href}>
                            Read full page
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        {volunteer.link && volunteer.link.startsWith("http") && (
                          <Button asChild variant="ghost" size="sm">
                            <a href={volunteer.link} target="_blank" rel="noopener noreferrer">
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