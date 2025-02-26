"use client"

import React, { useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const hardSkills = [
  "Professional Writing",
  "Research",
  "Mentoring",
  "Public Speaking",
  "Data Analysis",
  "Project Management",
  "First Aid & CPR/AED",
  "Research Collaboration",
  "Coding (JavaScript, HTML, CSS)",
  "Graphic Design",
]

const softSkills = [
  "Leadership",
  "Communication",
  "Time Management",
  "Problem-Solving",
  "Teamwork",
  "Adaptability",
  "Critical Thinking",
  "Creativity",
]

const SkillCard = React.memo(({ title, description, skills }) => (
  <Card className={`card-hover-effect`}>
    <CardHeader>
      <CardTitle style={{ fontFamily: "'Bubblegum Sans', 'Times New Roman', serif" }}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent style={{ fontFamily: "'Times New Roman', serif" }}>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
))

export default function Skills() {
  const memoizedHardSkills = useMemo(() => hardSkills, [])
  const memoizedSoftSkills = useMemo(() => softSkills, [])

  return (
    <section id="skills" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard title="Hard Skills" description="Technical proficiencies" skills={memoizedHardSkills} />
        <SkillCard
          title="Soft Skills"
          description="Interpersonal and professional skills"
          skills={memoizedSoftSkills}
        />
      </div>
    </section>
  )
}

