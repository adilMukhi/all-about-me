"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"
import { honorsAwards } from "@/data/honors-awards"
import HonorsAwardsModal from "@/components/honors-awards-modal"

const awards = honorsAwards

export default function HonorsAwards() {
  const [selectedAward, setSelectedAward] = useState<(typeof awards)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (hasInitialized.current) return
    hasInitialized.current = true

    const urlParams = new URLSearchParams(window.location.search)
    const awardSlug = urlParams.get("award")

    if (awardSlug) {
      const award = awards.find((award) => award.slug === awardSlug)
      if (award) {
        setSelectedAward(award)
        setIsModalOpen(true)
      }
    }
  }, [])

  const openAward = (award: (typeof awards)[0]) => {
    setSelectedAward(award)
    setIsModalOpen(true)

    const url = new URL(window.location.href)
    url.searchParams.set("award", award.slug)
    if (window.location.hash) {
      url.hash = window.location.hash
    }
    window.history.pushState({}, "", url.toString())
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedAward(null)

    const url = new URL(window.location.href)
    url.searchParams.delete("award")
    if (window.location.hash) {
      url.hash = window.location.hash
    }
    window.history.pushState({}, "", url.toString())
  }

  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const awardSlug = urlParams.get("award")

      if (awardSlug) {
        const award = awards.find((award) => award.slug === awardSlug)
        if (award) {
          setSelectedAward(award)
          setIsModalOpen(true)
        }
      } else {
        setIsModalOpen(false)
        setSelectedAward(null)
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const visibleAwards = awards

  return (
    <>
      <section id="honors" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <h2
          className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          style={{ fontFamily: "Sour Gummy, latin" }}
        >
          Honors & Awards
        </h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visibleAwards.map((award, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg relative group ${
                index >= 6 ? "md:col-span-1" : "md:col-span-2 lg:col-span-2"
              }`}
              onClick={() => openAward(award)}
            >
              <div className="absolute top-2 right-2 z-10">
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-6 w-6 p-0 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={(e) => {
                    e.stopPropagation()
                    openAward(award)
                  }}
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
              </div>

              {index < 6 ? (
                <>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                      {award.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {award.issuer} | {award.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-4 items-start">
                    <Image
                      src={award.image || "/placeholder.svg"}
                      alt={award.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm mb-3 line-clamp-3">{award.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {award.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {award.skills.length > 2 && (
                          <span className="text-xs text-muted-foreground px-2 py-1">+{award.skills.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4">
                  <div className="text-center">
                    <Image
                      src={award.image || "/placeholder.svg"}
                      alt={award.title}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover mx-auto mb-2"
                    />
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                      {award.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">{award.issuer}</p>
                    <p className="text-xs text-muted-foreground">{award.year}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      <HonorsAwardsModal award={selectedAward} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
