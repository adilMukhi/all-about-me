import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function WritingPortfolioPage() {
  const publications = [
    {
      title: "Viruses Unveiled: A Blog on the West Nile Virus",
      publisher: "Substack",
      date: "January 2025",
      description:
        "A research-driven blog featuring 12 posts analyzing the West Nile virus, referencing 35+ peer-reviewed sources.",
      link: "https://virusesunveiled.substack.com/",
      tags: ["Medical Communications", "Public Health", "Research"],
    },
    {
      title: "Astrocytoma: From Diagnosis to Management",
      publisher: "Sunshine 4 Cancer Kids",
      date: "November 2024",
      description: "A peer-reviewed research paper analyzing astrocytoma diagnosis, treatment, and management.",
      link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/post/astrocytoma-from-diagnosis-to-management-a-comprehensive-overview",
      tags: ["Medical Research", "Oncology", "Peer-Reviewed"],
    },
    {
      title: "Stress and Its Impact on Memory",
      publisher: "Academic Journal",
      date: "October 2024",
      description:
        "This study explores the relationship between stress and cognitive functions, focusing on how stress hormones affect memory retention and recall.",
      link: "https://drive.google.com/file/d/1hsuDwq_5UjnS9a4G984gqhuAkOkmabe8/view?usp=sharing",
      tags: ["Psychology", "Neuroscience", "Cognitive Science"],
    },
    {
      title: "The Future of Healthcare Technology",
      publisher: "Medium",
      date: "August 2024",
      description: "An exploration of emerging technologies in healthcare and their potential impact on patient care.",
      link: "#",
      tags: ["Healthcare", "Technology", "Innovation"],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-blue-50 to-background">
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
              Writing Portfolio
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-16">
              A collection of my published works, research papers, and articles across various platforms and topics.
            </p>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{pub.title}</CardTitle>
                    <CardDescription>
                      {pub.publisher} • {pub.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{pub.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        Read Publication
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
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

