"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="container py-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        About Me
      </h2>
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <Card className="bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 card-hover-effect">
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>My Journey</CardTitle>
            <CardDescription>From curiosity to leadership</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <p className="leading-7">
              I’m <strong>Adil Mukhi</strong>; <strong>public speaker, youth advocate & changemaker</strong>! As someone who’s navigated the challenges of the IB program while leading initiatives that reach tens of thousands of young people, I’ve learned how <em>curiosity, resilience, and purpose</em> can transform ideas into action. My journey began with a simple philosophy: <em>"With curiosity as my guide, I will never go wrong."</em> This mindset has shaped everything I do, from maintaining a <strong>98% academic average</strong> to exploring the frontiers of medical research.
              </p>

              <p className="leading-7">
              My passion for medicine led me to found <strong>Dr. Interested</strong>, where I serve as President, mentoring hundreds of students, organizing major events, and creating programs that connect youth to real-world challenges. Beyond mentorship, I’ve contributed to national-level research on youth health and social media by submitting a CIHR grant with SickKids for the <strong>OPTIMAL Project</strong>, as well as signing onto evidence-based recommendations presented in person to the <strong>Future of Sport in Canada Commission</strong>.
              </p>

              <p className="leading-7">
              I’m also active in the <strong>Play-to-Heal movement</strong>, exploring how sport, mental health, and policy intersect, and tennis has been a personal outlet for building resilience and focus. My research includes studies on <em>stress hormones</em> and <em>astrocytomas</em>, deepening my understanding of the human body and mind.
              </p>

              <p className="leading-7">
              Public speaking at <strong>TEDx</strong>, consulting on youth policy, and leading initiatives in French Club, STEM Fellowship, and Peer Helpers have taught me that <em>impact comes from curiosity, collaboration, and persistence</em>. Every experience, from research labs to leadership roles, shapes my path toward making meaningful change in healthcare, education, and youth advocacy.
              </p>

              <p className="leading-7">
              I believe that when young people are given the <em>tools, support, and confidence to lead</em>, the possibilities for impact are <strong>limitless</strong>.
              </p>
              <div className="pt-4">
                <Link
                  href="/background"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Explore my full background →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center justify-start space-y-4">
          <div className="relative w-full aspect-[3/5] max-w-md">
            <Image
              src="/pictures/Adil Mukhi - Tedx 2.jpeg"
              alt="Adil Mukhi speaking at TEDxMcFarren"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center italic">
            Speaking at TEDxMcFarren - sharing insights on leadership and innovation
          </p>
        </div>
      </div>
    </section>
  )
}
