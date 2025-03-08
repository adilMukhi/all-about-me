"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { educationData } from "@/data/education"

export default function Education() {
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
          <Card key={index} className="card-hover-effect">
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{edu.degree}</CardTitle>
              <CardDescription>
                {edu.institution} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <Image
                  src={edu.image || "/placeholder.svg"}
                  alt={edu.institution}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="md:w-2/3">
                <p>{edu.description}</p>
                <Button className="mt-4 button-hover-effect">
                  <a href={edu.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

