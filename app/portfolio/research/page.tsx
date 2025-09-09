import { CardFooter } from "@/components/ui/card"
import type { Metadata } from "next"
import { researchPortfolioMetadata } from "../../page-metadata"
import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { researchProjects } from "@/data/portfolio-items"

export const metadata: Metadata = researchPortfolioMetadata

export default function ResearchPortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-green-50 to-background">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to My Portfolios
                </Link>
              </Button>
            </div>

            <h1
              className="text-4xl font-bold tracking-tighter mb-8 sm:text-5xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Research Portfolio
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-8">
              A collection of my academic and scientific research projects across various disciplines.
            </p>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Research Profiles</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button
                  variant="outline"
                  asChild
                  className="h-auto p-4 bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-300"
                >
                  <a href="https://orcid.org/0009-0007-2147-3164" target="_blank" rel="noopener noreferrer">
                    <div className="text-center">
                      <div className="mb-2">
                        <svg className="w-8 h-8 mx-auto text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.946-.422-.946-.947 0-.516.421-.947.946-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.303 3.588-3.722 0-2.359-1.303-3.722-3.644-3.722h-2.241z" />
                        </svg>
                      </div>
                      <div className="font-semibold text-green-700">ORCID</div>
                      <div className="text-sm text-green-600">Academic Profile</div>
                    </div>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="h-auto p-4 bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
                >
                  <a
                    href="https://scholar.google.ca/citations?view_op=list_works&hl=en&hl=en&user=k_j8BxQAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-center">
                      <div className="mb-2">
                        <svg className="w-8 h-8 mx-auto text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                        </svg>
                      </div>
                      <div className="font-semibold text-blue-700">Google Scholar</div>
                      <div className="text-sm text-blue-600">Citations & Publications</div>
                    </div>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="h-auto p-4 bg-teal-50 border-teal-200 hover:bg-teal-100 hover:border-teal-300"
                >
                  <a
                    href="https://www.researchgate.net/profile/Adil-Mukhi-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-center">
                      <div className="mb-2">
                        <svg className="w-8 h-8 mx-auto text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.586 0H4.414A4.414 4.414 0 0 0 0 4.414v15.172A4.414 4.414 0 0 0 4.414 24h15.172A4.414 4.414 0 0 0 24 19.586V4.414A4.414 4.414 0 0 0 19.586 0zM8.129 19.129c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.742-9.129L12 6.129 8.129 10l3.871 3.871L15.871 10z" />
                        </svg>
                      </div>
                      <div className="font-semibold text-teal-700">ResearchGate</div>
                      <div className="text-sm text-teal-600">Research Network</div>
                    </div>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="h-auto p-4 bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300"
                >
                  <a href="https://independent.academia.edu/AdilMukhi" target="_blank" rel="noopener noreferrer">
                    <div className="text-center">
                      <div className="mb-2">
                        <svg className="w-8 h-8 mx-auto text-red-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 10.5H6.75L12 3.75l5.25 6.75h-4.177v7.5h-2.146v-7.5z" />
                        </svg>
                      </div>
                      <div className="font-semibold text-red-700">Academia.edu</div>
                      <div className="text-sm text-red-600">Academic Papers</div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {researchProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg?height=200&width=400"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{project.title}</CardTitle>
                    <CardDescription>
                      {project.institution} • {project.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {project.doiLinks?.map((doiLink, linkIndex) => (
                        <Button key={linkIndex} variant="outline" size="sm" asChild>
                          <a
                            href={doiLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 p-0 h-auto bg-transparent border-0 hover:bg-transparent"
                          >
                            <span className="bg-gray-500 text-white px-2 py-1 rounded-sm text-xs font-medium">DOI</span>
                            <span className="text-blue-600 hover:text-blue-800 px-1">{doiLink.doiNumber}</span>
                          </a>
                        </Button>
                      ))}
                      {project.otherLinks?.map((otherLink, linkIndex) => (
                        <Button key={linkIndex} variant="default" size="sm" asChild>
                          <a href={otherLink.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {otherLink.text}
                          </a>
                        </Button>
                      ))}
                      {/* Legacy support for old link format */}
                      {project.link && !project.doiLinks && !project.otherLinks && (
                        <Button asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            View Research
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Portfolios
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
