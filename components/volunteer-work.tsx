"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"
import { volunteerWork } from "@/data/volunteer-work"
import VolunteerWorkModal from "@/components/volunteer-work-modal"

const experiences = volunteerWork

export default function VolunteerWork() {
  const [selectedExperience, setSelectedExperience] = useState<(typeof experiences)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (hasInitialized.current) return
    hasInitialized.current = true

    const urlParams = new URLSearchParams(window.location.search)
    const volunteerSlug = urlParams.get("volunteer")

    if (volunteerSlug) {
      const experience = experiences.find((exp, index) => index.toString() === volunteerSlug)
      if (experience) {
        setSelectedExperience(experience)
        setIsModalOpen(true)
      }
    }
  }, [])

  const openExperience = (experience: (typeof experiences)[0], index: number) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)

    const url = new URL(window.location.href)
    url.searchParams.set("volunteer", index.toString())
    window.history.pushState({}, "", url.toString())
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedExperience(null)

    const url = new URL(window.location.href)
    url.searchParams.delete("volunteer")
    window.history.pushState({}, "", url.toString())
  }

  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const volunteerSlug = urlParams.get("volunteer")

      if (volunteerSlug) {
        const experience = experiences.find((exp, index) => index.toString() === volunteerSlug)
        if (experience) {
          setSelectedExperience(experience)
          setIsModalOpen(true)
        }
      } else {
        setIsModalOpen(false)
        setSelectedExperience(null)
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const visibleExperiences = experiences

  return (
    <>
      <section id="volunteer" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <h2
          className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          style={{ fontFamily: "Sour Gummy, latin" }}
        >
          Volunteer Work
        </h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visibleExperiences.map((exp, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg relative group ${
                index >= 6 ? "md:col-span-1" : "md:col-span-2 lg:col-span-2"
              }`}
              onClick={() => openExperience(exp, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute top-2 right-2 z-10 transition-opacity duration-200 ${hoveredCard === index ? "opacity-100" : "opacity-0"}`}
              >
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-6 w-6 p-0 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={(e) => {
                    e.stopPropagation()
                    openExperience(exp, index)
                  }}
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
              </div>

              {index < 6 ? (
                <>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                      {exp.role}
                      {exp.progression && exp.progression.length > 0 && (
                        <div className="text-sm font-normal text-muted-foreground mt-2">
                          {exp.progression.map((role, index) => (
                            <div key={index} className="text-sm">
                              Previously: {role.role}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {exp.organization} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-4 items-start">
                    <Image
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.organization}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm mb-3 line-clamp-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {exp.skills.slice(0, 2).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 2 && (
                          <span className="text-xs text-muted-foreground px-2 py-1">+{exp.skills.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4">
                  <div className="text-center">
                    <Image
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.organization}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover mx-auto mb-2"
                    />
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                      {exp.role}
                      {exp.progression && exp.progression.length > 0 && (
                        <div className="text-xs font-normal text-muted-foreground mt-1">
                          {exp.progression.map((role, index) => (
                            <div key={index} className="text-xs">
                              Previously: {role.role}
                            </div>
                          ))}
                        </div>
                      )}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">{exp.organization}</p>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      <VolunteerWorkModal experience={selectedExperience} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
