"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const educationData = [
  {
    degree: "High School Diploma, International Baccalaureate",
    institution: "Glenforest Secondary School",
    period: "Sep 2023 - Jun 2027",
    description:
      "Grade 9-12. Active in leadership roles such as Vice President of the French Club and STEM Fellowship Chapter. Participates in DECA, HOSA, Peer Helper Tutor.",
    link: "https://link.com",
  },
  {
    degree: "IB MYP and IB DP Diploma, Core",
    institution: "International Baccalaureate",
    period: "Sep 2023 - May 2027",
    description: "Global education framework focusing on research, communication, and global understanding skills.",
    link: "https://link.com",
  },
  {
    degree: "MedLinx Program",
    institution: "The University of Toronto, Temerty Faculty of Medicine, Office of Access and Outreach",
    period: "Dec 2024 - Apr 2025",
    description:
      "Real-world experience in healthcare through hands-on activities, mentorship, and academic workshops. I took the U of T course Introduction to the Role of the Human Development Index and Social Determinants of Health on the Global Burden of Disease - Taught by Dr. Andrea K. Boggild, BSc, MSc, MD",
    link: "https://link.com",
  },
]

export default function Education() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
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
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className={`card-hover-effect`}
            onMouseEnter={() => toggleExpand(index)}
            onMouseLeave={() => toggleExpand(null)}
          >
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{edu.degree}</CardTitle>
              <CardDescription>
                {edu.institution} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent className={`flex ${index === 2 ? "flex-row" : "flex-col"} gap-4`}>
              <div>
                <p>{edu.description}</p>
                {expandedCard === index && (
                  <div className="mt-4">
                    <Button className="mt-4 button-hover-effect">
                      <a href= {edu.link} target="_blank" rel="noopener noreferrer">
                      Learn More  </a>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

