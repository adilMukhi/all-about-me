import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Summarizer",
    description: "Summarize articles using OpenAI",
    image: "/ai-summarizer.png",
    tags: ["React", "OpenAI", "Tailwind CSS"],
    demoLink: "https://ai-summarizer-jm.netlify.app/",
    codeLink: "https://github.com/joshmadakor1/ai-summarizer",
  },
  {
    title: "JavaScript Mastery",
    description: "Full Stack E-Commerce Store",
    image: "/javascriptmastery.png",
    tags: ["React", "Stripe", "Sanity"],
    demoLink: "https://javascriptmastery-ecommerce.netlify.app/",
    codeLink: "https://github.com/joshmadakor1/JavaScript-Mastery",
  },
  {
    title: "Metaversus",
    description: "Metaverse Madness",
    image: "/metaversus.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoLink: "https://metaversus-madness.netlify.app/",
    codeLink: "https://github.com/joshmadakor1/metaversus",
  },
  {
    title: "GPT-3",
    description: "Modern UI/UX Website",
    image: "/gpt3.png",
    tags: ["React", "CSS"],
    demoLink: "https://gpt3-jm.netlify.app/",
    codeLink: "https://github.com/joshmadakor1/gpt3",
  },
  {
    title: "Gericht Restaurant",
    description: "Modern UI/UX Website",
    image: "/gericht.png",
    tags: ["React", "CSS"],
    demoLink: "https://gericht-restaurant-jm.netlify.app/",
    codeLink: "https://github.com/joshmadakor1/gericht-restaurant",
  },
  {
    title: "HooBank",
    description: "Modern UI/UX Website",
    image: "/hoobank.png",
    tags: ["React", "Tailwind CSS"],
    demoLink: "https://hoobank-modern-ui-ux-jm.netlify.app/",
    codeLink: "https://github.com/joshmadakor1/hoobank-modern-ui-ux",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <Card className={`card-hover-effect`}>
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <div className="mt-4 flex flex-wrap gap-2">
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
                    View
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

