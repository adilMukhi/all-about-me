"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { honorsAwards } from "@/data/honors-awards"
// Import the useState hook at the top
import { useState } from "react"

// Add expandedCard state inside the component
export default function HonorsAwards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="honors" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Honors & Awards
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {honorsAwards.map((award, index) => (
          <Card
            key={index}
            className="card-hover-effect"
            onMouseEnter={() => toggleExpand(index)}
            onMouseLeave={() => toggleExpand(null)}
          >
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{award.title}</CardTitle>
              <CardDescription>
                {award.issuer} | {award.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={award.image || "/placeholder.svg"}
                alt={award.title}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p>{award.description}</p>
              <div className={`expanded-content w-full ${expandedCard === index ? "show" : ""}`}>
                <div>
                  <h4 className="font-semibold">Skills Gained:</h4>
                  <ul className="list-disc list-inside">
                    {award.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                  <Button className="mt-4 button-hover-effect">
                    <a href={award.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
