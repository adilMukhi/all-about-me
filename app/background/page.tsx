"use client"

import { useEffect, useState } from "react"
import type React from "react"
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
  const getInitialSection = () => {
    if (typeof window !== "undefined") {
      const sectionFromUrl = window.location.hash.replace("#", "")
      return sections.some((s) => s.id === sectionFromUrl) ? sectionFromUrl : "skills"
    }
    return "skills"
  }

  const [activeSection, setActiveSection] = useState(getInitialSection)
  const ActiveComponent = sections.find((s) => s.id === activeSection)?.component || sections[0].component

  useEffect(() => {
    const handleHashChange = () => {
      const sectionFromUrl = window.location.hash.replace("#", "")
      if (sections.some((s) => s.id === sectionFromUrl)) {
        setActiveSection(sectionFromUrl)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleSectionChange = (id: string) => {
    setActiveSection(id)
    window.location.hash = id // Update the URL without refreshing
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
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
              <Select value={activeSection} onValueChange={handleSectionChange}>
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
                    onClick={() => handleSectionChange(section.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-lg transition-all relative",
                      section.color,
                      activeSection === section.id ? "ring-2 ring-blue-500 shadow-lg scale-105" : "hover:scale-105",
                      "overflow-hidden",
                    )}
                  >
                    <section.icon className="h-5 w-5" />
                    <span className="font-medium whitespace-nowrap">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8" id={activeSection}>
              <ActiveComponent />
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
