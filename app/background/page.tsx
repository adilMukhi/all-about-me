"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import Skills from "@/components/skills"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import VolunteerWork from "@/components/volunteer-work"
import HonorsAwards from "@/components/honors-awards"
import { Lightbulb, Briefcase, GraduationCap, Award, BadgeCheck, Heart, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Section = {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  component: React.ComponentType
  color: string
}

const sections: Section[] = [
  {
    id: "skills",
    title: "Skills",
    icon: Lightbulb,
    component: Skills,
    color: "bg-blue-50 hover:bg-blue-100",
  },
  {
    id: "work",
    title: "Work Experience",
    icon: Briefcase,
    component: WorkExperience,
    color: "bg-green-50 hover:bg-green-100",
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    component: Education,
    color: "bg-purple-50 hover:bg-purple-100",
  },
  {
    id: "projects",
    title: "Projects",
    icon: Award,
    component: Projects,
    color: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    id: "certificates",
    title: "Certificates",
    icon: BadgeCheck,
    component: Certificates,
    color: "bg-red-50 hover:bg-red-100",
  },
  {
    id: "volunteer",
    title: "Volunteer Work",
    icon: Heart,
    component: VolunteerWork,
    color: "bg-pink-50 hover:bg-pink-100",
  },
  {
    id: "honors",
    title: "Honors & Awards",
    icon: Trophy,
    component: HonorsAwards,
    color: "bg-orange-50 hover:bg-orange-100",
  },
]

export default function BackgroundPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const ActiveComponent = sections.find((s) => s.id === activeSection)?.component || sections[0].component

  // Handle URL hash for direct navigation
  useEffect(() => {
    // Get the hash from the URL (remove the # character)
    const hash = window.location.hash.replace("#", "")

    // If there's a hash and it matches one of our sections, set it as active
    if (hash && sections.some((section) => section.id === hash)) {
      setActiveSection(hash)

      // Scroll to the section with a slight delay to ensure rendering
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <h1
              className="text-4xl font-bold tracking-tighter text-center mb-8 sm:text-5xl md:text-6xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Background
            </h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Explore my professional journey, skills, education, and achievements that have shaped my career path.
            </p>

            {/* Mobile dropdown */}
            <div className="md:hidden mb-8">
              <Select
                value={activeSection}
                onValueChange={(value) => {
                  setActiveSection(value)
                  // Update URL hash
                  window.location.hash = value
                  // Scroll to the section
                  setTimeout(() => {
                    const element = document.getElementById(value)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }, 100)
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section.id} value={section.id}>
                      <div className="flex items-center gap-2">
                        <section.icon className="h-4 w-4" />
                        <span>{section.title}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Desktop buttons */}
            <div className="hidden md:flex justify-center mb-12">
              <div className="flex space-x-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id)
                      // Update URL hash
                      window.location.hash = section.id
                      // Scroll to the section
                      const element = document.getElementById(section.id)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-lg transition-all relative",
                      section.color,
                      activeSection === section.id ? "ring-2 ring-blue-500 shadow-lg scale-105" : "hover:scale-105",
                      // Add overflow-hidden to contain the pseudo-element
                      "overflow-hidden",
                    )}
                  >
                    <section.icon className="h-5 w-5" />
                    <span className="font-medium whitespace-nowrap">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Render all sections but only show the active one */}
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className={`mt-8 ${activeSection === section.id ? "block" : "hidden"}`}
              >
                <section.component />
              </div>
            ))}
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}

