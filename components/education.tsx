"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { educationData } from "@/data/education"
import EducationModal from "./education-modal"
import { Maximize2 } from "lucide-react"

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState<(typeof educationData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleUrlParams = () => {
      if (typeof window === "undefined") return

      const urlParams = new URLSearchParams(window.location.search)
      const educationSlug = urlParams.get("education")

      if (educationSlug) {
        const education = educationData.find((edu) => edu.slug === educationSlug)
        if (education) {
          setSelectedEducation(education)
          setIsModalOpen(true)
        }
      }
    }

    handleUrlParams()
    window.addEventListener("popstate", handleUrlParams)
    return () => window.removeEventListener("popstate", handleUrlParams)
  }, [])

  const openModal = (education: (typeof educationData)[0]) => {
    setSelectedEducation(education)
    setIsModalOpen(true)
    const url = new URL(window.location.href)
    url.searchParams.set("education", education.slug)
    window.history.pushState({}, "", url.toString())
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEducation(null)
    const url = new URL(window.location.href)
    url.searchParams.delete("education")
    window.history.pushState({}, "", url.toString())
  }

  return (
    <section id="education" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Education
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {educationData.slice(0, 3).map((edu, index) => (
          <Card key={index} className="card-hover-effect group relative cursor-pointer" onClick={() => openModal(edu)}>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <Button
                size="sm"
                variant="secondary"
                className="backdrop-blur-sm bg-background/80"
                onClick={(e) => {
                  e.stopPropagation()
                  openModal(edu)
                }}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{edu.degree}</CardTitle>
              <CardDescription>
                {edu.institution} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <Image
                  src={edu.image || "/placeholder.svg"}
                  alt={edu.institution}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="md:w-2/3">
                <p>{edu.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {educationData.length > 3 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
            Additional Certifications & Training
          </h3>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {educationData.slice(3).map((edu, index) => (
              <Card
                key={index + 3}
                className="card-hover-effect group relative cursor-pointer p-4"
                onClick={() => openModal(edu)}
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="backdrop-blur-sm bg-background/80 h-8 w-8 p-0"
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(edu)
                    }}
                  >
                    <Maximize2 className="h-3 w-3" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={edu.image || "/placeholder.svg"}
                      alt={edu.institution}
                      width={32}
                      height={32}
                      className="rounded object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4
                        className="font-semibold text-sm leading-tight"
                        style={{ fontFamily: "'Bubblegum Sans', cursive" }}
                      >
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <EducationModal education={selectedEducation} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
