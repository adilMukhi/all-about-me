import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Camera, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArtSportsPortfolioPage() {
  const artProjects = [
    {
      title: "Photography Collection",
      description: "A series of nature and urban landscape photographs taken during my travels.",
      image: "/portfolio/art/photography.jpg",
      tags: ["Photography", "Nature", "Urban"],
      type: "art",
      icon: Camera,
    },
    {
      title: "Digital Art Series",
      description: "Digital illustrations exploring themes of science and technology.",
      image: "/portfolio/art/digital-art.jpg",
      tags: ["Digital Art", "Illustration", "Science"],
      type: "art",
      icon: Palette,
    },
  ]

  const sportsAchievements = [
    {
      title: "ROPSSAA Tennis Quarter-Finalist",
      description: "Quarter-Finalist in the ROPSSAA Boys Doubles Junior Tennis South East Qualifier 2024.",
      image: "/portfolio/sports/tennis.jpg",
      tags: ["Tennis", "Competition", "Team Sports"],
      type: "sports",
      icon: Trophy,
    },
    {
      title: "Badminton Tournament",
      description: "Participated in regional badminton tournaments representing Glenforest Secondary School.",
      image: "/portfolio/sports/badminton.jpg",
      tags: ["Badminton", "Competition", "School Sports"],
      type: "sports",
      icon: Trophy,
    },
    {
      title: "Volleyball Team",
      description: "Member of the school volleyball team, participating in local competitions.",
      image: "/portfolio/sports/volleyball.jpg",
      tags: ["Volleyball", "Team Sports", "School Sports"],
      type: "sports",
      icon: Trophy,
    },
  ]

  const allItems = [...artProjects, ...sportsAchievements]

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
                  Back to Portfolio
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

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                Art Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {artProjects.map((project, index) => (
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

            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                Sports Achievements
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {sportsAchievements.map((achievement, index) => (
                  <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={achievement.image || "/placeholder.svg?height=200&width=400"}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <achievement.icon className="h-8 w-8" />
                      <div>
                        <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </div>
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

