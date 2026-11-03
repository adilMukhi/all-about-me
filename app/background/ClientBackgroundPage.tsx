"use client"
import type React from "react"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"
import Testimonials from "@/components/testimonials"
import Certificates from "@/components/certificates"
import VolunteerWork from "@/components/volunteer-work"
import HonorsAwards from "@/components/honors-awards"
import { Briefcase, GraduationCap, MessageSquare, BadgeCheck, Heart, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"

type Section = {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  component: React.ComponentType
  // Icon tint; the button itself uses theme colours so it reads well in light and dark
  iconColor: string
}

const sections: Section[] = [
  {
    id: "work",
    title: "Work Experience",
    icon: Briefcase,
    component: WorkExperience,
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    component: Education,
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    icon: MessageSquare,
    component: Testimonials,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "certificates",
    title: "Certificates",
    icon: BadgeCheck,
    component: Certificates,
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    id: "volunteer",
    title: "Volunteer Work",
    icon: Heart,
    component: VolunteerWork,
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: "honors",
    title: "Honors & Awards",
    icon: Trophy,
    component: HonorsAwards,
    iconColor: "text-orange-600 dark:text-orange-400",
  },
]

export default function ClientBackgroundPage() {
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
            <SEOBreadcrumbs items={[{ label: "Background", href: "/background", active: true }]} />
            <h1
              className="text-4xl font-bold tracking-tighter text-center mb-8 sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
            >
              Background
            </h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Explore my professional journey, skills, education, and achievements that have shaped my career path.
            </p>

            <div className="xl:hidden mb-8">
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
                <SelectTrigger className="w-full" aria-label="Choose a background section">
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section.id} value={section.id}>
                      <div className="flex items-center gap-2">
                        <section.icon className={cn("h-4 w-4", section.iconColor)} aria-hidden="true" />
                        <span>{section.title}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <nav aria-label="Background sections" className="hidden xl:flex justify-center mb-12">
              <div className="flex justify-center gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    aria-pressed={activeSection === section.id}
                    aria-controls={section.id}
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
                      "flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all",
                      activeSection === section.id
                        ? "border-primary bg-primary text-primary-foreground shadow-lg"
                        : "border-border bg-card text-card-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <section.icon
                      className={cn("h-4 w-4", activeSection === section.id ? "text-primary-foreground" : section.iconColor)}
                      aria-hidden="true"
                    />
                    <span className="font-medium whitespace-nowrap">{section.title}</span>
                  </button>
                ))}
              </div>
            </nav>

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
