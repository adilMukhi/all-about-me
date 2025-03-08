import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CodingPortfolioPage() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      image: "/portfolio/coding/portfolio.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      demoLink: "#",
      codeLink: "https://github.com/adilMukhi/all-about-me",
    },
    {
      title: "Medical Data Visualization",
      description: "Interactive data visualization tool for medical research data using D3.js and React.",
      image: "/portfolio/coding/data-viz.jpg",
      tags: ["React", "D3.js", "Data Visualization", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Study Timer App",
      description: "A Pomodoro timer application with task tracking and statistics.",
      image: "/portfolio/coding/timer-app.jpg",
      tags: ["React Native", "Mobile App", "Productivity"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Healthcare Chatbot",
      description: "An AI-powered chatbot that provides basic medical information and guidance.",
      image: "/portfolio/coding/chatbot.jpg",
      tags: ["Python", "Natural Language Processing", "Healthcare"],
      demoLink: "#",
      codeLink: "#",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-purple-50 to-background">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>

            <h1
              className="text-4xl font-bold tracking-tighter mb-8 sm:text-5xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Coding Portfolio
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-16">
              A showcase of my software development projects, web applications, and coding experiments.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
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
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
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

