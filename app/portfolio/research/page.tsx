import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResearchPortfolioPage() {
  const researchProjects = [
    {
      title: "Astrocytoma: From Diagnosis to Management",
      description: "A comprehensive overview of astrocytoma diagnosis, treatment options, and management strategies.",
      image: "/portfolio/research/astrocytoma.jpg",
      tags: ["Oncology", "Neuroscience", "Medical Research"],
      link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/post/astrocytoma-from-diagnosis-to-management-a-comprehensive-overview",
      institution: "Sunshine 4 Cancer Kids",
      year: "2024",
    },
    {
      title: "Stress and Its Impact on Memory",
      description: "Research exploring the relationship between stress hormones and memory retention in adolescents.",
      image: "/portfolio/research/stress-memory.jpg",
      tags: ["Psychology", "Neuroscience", "Cognitive Science"],
      link: "https://drive.google.com/file/d/1hsuDwq_5UjnS9a4G984gqhuAkOkmabe8/view?usp=sharing",
      institution: "Independent Research",
      year: "2024",
    },
    {
      title: "West Nile Virus: Epidemiology and Public Health Impact",
      description: "Analysis of West Nile Virus transmission patterns and public health implications.",
      image: "/portfolio/research/west-nile.jpg",
      tags: ["Virology", "Epidemiology", "Public Health"],
      link: "https://virusesunveiled.substack.com/",
      institution: "Viruses Unveiled Blog",
      year: "2025",
    },
    {
      title: "The Role of Technology in Modern Healthcare",
      description:
        "Exploration of how emerging technologies are transforming healthcare delivery and patient outcomes.",
      image: "/portfolio/research/healthcare-tech.jpg",
      tags: ["Healthcare", "Technology", "Innovation"],
      link: "#",
      institution: "University of Toronto MedLinx Program",
      year: "2025",
    },
  ]

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
            <p className="text-muted-foreground max-w-3xl mb-16">
              A collection of my academic and scientific research projects across various disciplines.
            </p>

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
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        View Research
                      </a>
                    </Button>
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

