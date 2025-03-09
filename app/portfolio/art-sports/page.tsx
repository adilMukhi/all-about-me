import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Camera, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { artProjects, sportsAchievements } from "@/data/portfolio-items"

export default function ArtSportsPortfolioPage() {
  // Map icons to art projects
  const artProjectsWithIcons = artProjects.map((project) => ({
    ...project,
    icon: project.title.includes("Photography") ? Camera : Palette,
  }))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-orange-50 to-background">
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
              Art & Sports Portfolio
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-16">
              A showcase of my creative works and athletic achievements.
            </p>

            {/* Sports Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                Sports Achievements
              </h2>
              {sportsAchievements.map((achievement, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg mb-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <div className="relative aspect-video w-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${achievement.videoId || "dQw4w9WgXcQ"}?si=sAgHr_qsrjbKXWyJ&controls=0&autoplay=1&mute=1&loop=1&playlist=${achievement.videoId || "dQw4w9WgXcQ"}`}
                          title={achievement.title}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          frameBorder="0"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <CardHeader>
                        <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {achievement.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Art Projects Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                Art Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {artProjectsWithIcons.map((project, index) => (
                  <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg?height=200&width=400"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <project.icon className="h-8 w-8" />
                      <div>
                        <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
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
                  </Card>
                ))}
              </div>
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

