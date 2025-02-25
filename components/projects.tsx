import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Viruses Unveiled: A Blog on the West Nile Virus",
    description:
      "A research-driven blog featuring 12 posts analyzing the West Nile virus, referencing 35+ peer-reviewed sources. Reached 3,000+ readers and was featured by three organizations.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Professional Writing", "Medical Communications", "Public Health Awareness"],
    demoLink: "https://virusesunveiled.substack.com/",
    codeLink: "https://www.linkedin.com/in/adil-mukhi-6aba27246/overlay/projects/716508831/multiple-media-viewer/?profileId=ACoAAD0FLSMB3_L4EKnCnx8-DLU46vGQ6JbfCiE&treasuryMediaId=1740178264464",
  },
  {
    title: "Astrocytoma: From Diagnosis to Management – A Comprehensive Overview",
    description:
      "A peer-reviewed research paper analyzing astrocytoma diagnosis, treatment, and management. Published by Sunshine 4 Cancer Kids and awarded a Certificate of Achievement.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Research Collaboration", "Professional Writing", "Medical Research"],
    demoLink: "#",
    codeLink: "#",
  },
    title: "Project 3",
    description: "Key points about Project 3 and the technologies used.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Sour Gummy, latin"}}>Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className={`card-hover-effect`}>
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
                  Veiw
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

