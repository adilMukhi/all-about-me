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
              I’m <strong>Adil Mukhi</strong>; public speaker, youth advocate & changemaker! As someone who’s navigated the challenges of the IB program while leading initiatives that reach tens of thousands of young people, I’ve learned how <em>curiosity, resilience, and purpose</em> can transform ideas into action. My journey began with a simple philosophy: <em>"With curiosity as my guide, I will never go wrong."</em> My work is guided by the belief that meaningful change begins when young people are given the opportunity and support to lead.
              </p>

              <p className="leading-7">
              A cornerstone of my work is the <strong>Play-to-Heal movement</strong>, where I explore how sport, mental health, and policy intersect. From mentoring young athletes to contributing to national-level research on youth well-being, I’ve supported evidence-based policy by signing onto recommendations submitted in person to the <strong>Future of Sport in Canada Commission</strong>. Tennis, for me, isn’t just a sport—it’s a way to build community, resilience, and focus.
              </p>

              <p className="leading-7">
              Beyond sports, I’ve built initiatives that give young people a voice in research, policy, and advocacy. As Founder of <strong>Dr. Interested</strong>, I’ve led hundreds of students through mentorship programs, organized major events, and launched campaigns that connect youth to real-world challenges. I’ve also contributed to submitting a CIHR grant with SickKids for the <strong>OPTIMAL Project</strong>, a national research initiative studying youth social media use and informing policy guidelines.
              </p>

              <p className="leading-7">
              Public speaking, research, and leadership roles have taught me that impact comes from curiosity, collaboration, and persistence. Whether it’s mentoring peers, consulting on policy, or presenting at <strong>TEDx</strong>, I aim to create opportunities for youth to make a difference.
              </p>

              <p className="leading-7">
              At my core, I’m committed to shaping spaces where young people are empowered to innovate, lead, and challenge the status quo. I believe that with the right guidance, tools, and confidence, youth have the power to transform communities—and the world.
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
              src="/pictures/adil-mukhi-tedx-speaking-2.jpeg"
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
