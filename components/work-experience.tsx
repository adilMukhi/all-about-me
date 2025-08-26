"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"
import { workExperiences } from "@/data/work-experience"
import WorkExperienceModal from "@/components/work-experience-modal"

const experiences = workExperiences

export default function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState<(typeof experiences)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (hasInitialized.current) return
    hasInitialized.current = true

    const urlParams = new URLSearchParams(window.location.search)
    const experienceSlug = urlParams.get("experience")

    if (experienceSlug) {
      const experience = experiences.find((exp) => exp.slug === experienceSlug)
      if (experience) {
        setSelectedExperience(experience)
        setIsModalOpen(true)
      }
    }
  }, [])

  const openExperience = (experience: (typeof experiences)[0]) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)

    const url = new URL(window.location.href)
    url.searchParams.set("experience", experience.slug)
    window.history.pushState({}, "", url.toString())
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedExperience(null)

    const url = new URL(window.location.href)
    url.searchParams.delete("experience")
    window.history.pushState({}, "", url.toString())
  }

  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const experienceSlug = urlParams.get("experience")

      if (experienceSlug) {
        const experience = experiences.find((exp) => exp.slug === experienceSlug)
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
      <section id="work" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <h2
          className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          style={{ fontFamily: "Sour Gummy, latin" }}
        >
          Work Experience
        </h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visibleExperiences.map((exp, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg relative group ${
                index >= 6 ? "md:col-span-1" : "md:col-span-2 lg:col-span-2"
              }`}
              onClick={() => openExperience(exp)}
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
                    openExperience(exp)
                  }}
                >
                  <Maximize2 className="h-3 w-3" />
                </Button>
              </div>

              {index < 6 ? (
                <>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                      {exp.title}
                      {exp.progression && exp.progression.length > 1 && (
                        <div className="text-sm font-normal text-muted-foreground mt-2">
                          {exp.progression
                            .slice(0, -1)
                            .reverse()
                            .map((role, index) => (
                              <div key={index} className="text-sm">
                                Previously: {role.role}
                              </div>
                            ))}
                        </div>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-4 items-start">
                    <Image
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.company}
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
                      alt={exp.company}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover mx-auto mb-2"
                    />
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                      {exp.title}
                      {exp.progression && exp.progression.length > 1 && (
                        <div className="text-xs font-normal text-muted-foreground mt-1">
                          {exp.progression
                            .slice(0, -1)
                            .reverse()
                            .map((role, index) => (
                              <div key={index} className="text-xs">
                                Previously: {role.role}
                              </div>
                            ))}
                        </div>
                      )}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      <WorkExperienceModal experience={selectedExperience} isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
