import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import Skills from "@/components/skills"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import VolunteerWork from "@/components/volunteer-work"
import HonorsAwards from "@/components/honors-awards"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Background | Adil Mukhi",
  description: "My skills, work experience, education, projects, certificates, volunteer work, and honors & awards",
  openGraph: {
    title: "Background | Adil Mukhi",
    description: "My skills, work experience, education, projects, certificates, volunteer work, and honors & awards",
  },
}

export default function BackgroundPage() {
  return (
    <PageLayout>
      <Header />
      <main className="container py-12">
        <h1 className="mb-12 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Background</h1>
        <div className="space-y-20">
          <Skills />
          <WorkExperience />
          <Education />
          <Projects />
          <Certificates />
          <VolunteerWork />
          <HonorsAwards />
        </div>
      </main>
    </PageLayout>
  )
}

