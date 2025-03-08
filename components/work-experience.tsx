"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { workExperiences } from "@/data/work-experience"

// The experiences array is now imported from the data file
const experiences = workExperiences

export default function WorkExperience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const visibleExperiences = experiences

  return (
    <section id="work-experience" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Work Experience
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {visibleExperiences.map((exp, index) => (
          <Card
            key={index}
            className={`card-hover-effect`}
            onMouseEnter={() => toggleExpand(index)}
            onMouseLeave={() => toggleExpand(null)}
          >
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <Image
                src={exp.image || "/placeholder.svg"}
                alt={exp.company}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <p>{exp.description}</p>
                <div className={`expanded-content ${expandedCard === index ? "show" : ""}`}>
                  <div className="mt-4">
                    <h4 className="font-semibold">Skills Learned:</h4>
                    <ul className="list-disc list-inside">
                      {exp.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                    <Button className="mt-4 button-hover-effect">
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

