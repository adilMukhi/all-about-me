"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Camera, Palette, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { artProjects, sportsAchievements } from "@/data/portfolio-items"
import { ArtModal } from "@/components/art-modal"

// Declare YouTube Player API type
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId: string
          playerVars?: {
            autoplay?: 1 | 0
            controls?: 1 | 0
            loop?: 1 | 0
            mute?: 1 | 0
            modestbranding?: 1 | 0
            playsinline?: 1 | 0
            rel?: 1 | 0
            showinfo?: 0
            fs?: 0 | 1
            iv_load_policy?: 3
            playlist?: string
          }
          events?: {
            onReady?: (event: any) => void
          }
        },
      ) => void
    }
    onYouTubeIframeAPIReady: () => void
  }
}

export default function ArtSportsPortfolioPageClient() {
  // Map icons to art projects
  const artProjectsWithIcons = artProjects.map((project) => ({
    ...project,
    icon: project.title.includes("Photography") ? Camera : Palette,
  }))

  const playerRefs = useRef<{ [key: string]: any }>({})
  const [selectedArtProject, setSelectedArtProject] = useState<{
    title: string
    images: string[]
  } | null>(null)

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize players when API is ready
    window.onYouTubeIframeAPIReady = () => {
      sportsAchievements.forEach((achievement, index) => {
        if (achievement.videoId) {
          const playerId = `youtube-player-${index}`
          playerRefs.current[playerId] = new window.YT.Player(playerId, {
            videoId: achievement.videoId,
            playerVars: {
              autoplay: 1,
              controls: 0,
              loop: 1,
              mute: 1,
              modestbranding: 1,
              playsinline: 1,
              rel: 0,
              showinfo: 0,
              fs: 0,
              iv_load_policy: 3,
              playlist: achievement.videoId,
            },
            events: {
              onReady: (event) => {
                // Set playback rate to 25% when player is ready
                event.target.setPlaybackRate(0.75)
                event.target.playVideo()
              },
            },
          })
        }
      })
    }

    // Cleanup
    return () => {
      // Clean up players
      Object.values(playerRefs.current).forEach((player: any) => {
        if (player && typeof player.destroy === "function") {
          player.destroy()
        }
      })
      // Remove the global callback
      delete window.onYouTubeIframeAPIReady
    }
  }, [])

  const openArtModal = (title: string, images: string[]) => {
    setSelectedArtProject({ title, images })
  }

  const closeArtModal = () => {
    setSelectedArtProject(null)
  }

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

              <div className="mb-8">
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">NCSA Sports Profile</h3>
                        <p className="text-muted-foreground">
                          Check out my official NCSA recruiting profile for tennis achievements and statistics.
                        </p>
                      </div>
                      <Button asChild variant="outline">
                        <Link
                          href="https://www.ncsasports.org/mens-tennis-recruiting/international/can/adil-mukhi"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View NCSA Profile
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Intramural Sports</h3>
                    <p className="text-muted-foreground mb-4">
                      I actively participate in various intramural sports, staying engaged in competitive athletics
                      across multiple disciplines:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Badminton", "Volleyball", "Dodgeball", "Table Tennis", "Soccer"].map((sport) => (
                        <Badge key={sport} variant="secondary" className="bg-green-100 text-green-800">
                          {sport}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {sportsAchievements.map((achievement, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg mb-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <div className="relative aspect-video w-full">
                        {/* Replace iframe with div for YouTube API */}
                        <div id={`youtube-player-${index}`} className="absolute inset-0 w-full h-full"></div>
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 bg-transparent"
                        onClick={() => openArtModal(project.title, project.images || [project.image])}
                      >
                        <Eye className="h-4 w-4" />
                        See Final Piece
                      </Button>
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

      {/* Art Modal */}
      {selectedArtProject && (
        <ArtModal
          isOpen={!!selectedArtProject}
          onClose={closeArtModal}
          title={selectedArtProject.title}
          images={selectedArtProject.images}
        />
      )}

      <PageLayout />
    </>
  )
}
