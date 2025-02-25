"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const honorsAwards = [
  {
    title: "SemiFinalist, (p + q = 1) exam",
    issuer: "Mitosisphere",
    year: "Feb 2025",
    description:
      "Awarded for placing among the top 22 out of 180+ competitors worldwide in the highly competitive 1/25 (p + q = 1) exam. This achievement recognizes excellence in problem-solving and analytical skills in a rigorous academic competition.",
    image: "/pq1.jpg",
    skills: [
      "Problem-Solving",
      "Analytical Thinking",
      "Time Management",
      "Mathematical Reasoning",
      "Competitive Spirit",
    ],
    link: "https://www.linkedin.com/posts/adil-mukhi-6aba27246_stem-competition-biology-activity-7293441881592471553-Me9S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0FLSMB3_L4EKnCnx8-DLU46vGQ6JbfCiE",
  },
  {
    title: "Distinction, Beaver Competition",
    issuer: "University of Waterloo, Centre for Education in Mathematics and Computing (CEMC)",
    year: "Nov 2024",
    description:
      "Achieved a perfect score of 90/90 in the Beaver Computing Challenge, a rare accomplishment shared by only four students at Glenforest Secondary School.",
    image: "/beaver.jpg",
    skills: [
      "Computational Thinking",
      "Logical Reasoning",
      "Pattern Recognition",
      "Algorithm Design",
      "Attention to Detail",
      link: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024BCCResults.pdf",
    ],
  },
  {
    title: "Honors, Academic Distinction (Science, IB Design, Gym)",
    issuer: "Glenforest Secondary School",
    year: "Oct 2024",
    description:
      "Earned the highest mark in Science, IB Design, and Physical Education during the grade 9 (2023-2024) academic year.",
    image: "/distinction.jpg",
    skills: ["Scientific Knowledge", "Design Thinking", "Physical Fitness", "Time Management", "Academic Excellence"],
    link: "https://glenforest.peelschools.org/",
  },
  {
    title: "Quarter-Finalist at ROPSSAA Tennis",
    issuer: "Glenforest Secondary School",
    year: "Oct 2024",
    description: "Quarter-Finalist in the ROPSSAA Boys Doubles Junior Tennis South East Qualifier 2024.",
    image: "/tennis.jpg",
    skills: ["Tennis Skills", "Teamwork", "Sportsmanship", "Physical Endurance", "Strategic Thinking"],
    link: "https://www.ropssaa.org/blog/wp-content/uploads/2024/10/Jr-South-East-Qualifying-Draws.pdf",
  },
  {
    title: "Valedictorian, Middle School Graduation",
    issuer: "The Valleys",
    year: "2023",
    description: "Delivered a graduation speech to the 2023 graduating grade 8 class, their parents, and school staff.",
    image: "/valleys_speech.jpg",
    skills: ["Public Speaking", "Leadership", "Writing Skills", "Emotional Intelligence", "Audience Engagement"],
    link: "https://thevalleys.peelschools.org/",
  },
  {
    title: "2nd Place, Biopage Writing Competition",
    issuer: "Biopage",
    year: "2025",
    description:
      "Placed 2nd in the Biopage Writing Competition, competing against talented writers from around the world.",
    image: "/biopage.jpg",
    skills: ["Creative Writing", "Storytelling", "Grammar and Composition", "Research Skills", "Self-Expression"],
    link: "https://www.biopage.com/post/10435",
  },
]

export default function HonorsAwards() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const visibleHonorsAwards = showAll ? honorsAwards : honorsAwards.slice(0, 3)

  return (
    <section id="honors-awards" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Honors & Awards
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleHonorsAwards.map((award, index) => (
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
              {expandedCard === index && (
                <div className="mt-4 w-full">
                  <h4 className="font-semibold">Skills Gained:</h4>
                  <ul className="list-disc list-inside">
                    {award.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                    <Button className="mt-4 button-hover-effect">
                      <a href= {award.link} target="_blank" rel="noopener noreferrer">
                      Learn More </a>
                    </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {!showAll && honorsAwards.length > 3 && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(true)} className="button-hover-effect">
            Show More
          </Button>
        </div>
      )}
    </section>
  )
}