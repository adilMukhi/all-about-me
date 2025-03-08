"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { volunteerWork } from "@/data/volunteer-work"
import { useState } from "react"

export default function VolunteerWork() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="volunteer-work" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Volunteer Work
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {volunteerWork.map((work, index) => (
          <Card
            key={index}
            className="card-hover-effect"
            onMouseEnter={() => toggleExpand(index)}
            onMouseLeave={() => toggleExpand(null)}
          >
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{work.role}</CardTitle>
              <CardDescription>
                {work.organization} | {work.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.organization}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <p>{work.description}</p>
                <div className={`expanded-content ${expandedCard === index ? "show" : ""}`}>
                  <div className="mt-4">
                    <h4 className="font-semibold">Skills Learned:</h4>
                    <ul className="list-disc list-inside">
                      {work.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                    <Button className="mt-4 button-hover-effect">
                      <a href={work.link} target="_blank" rel="noopener noreferrer">
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

