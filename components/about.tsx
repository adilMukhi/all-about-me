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
                <strong>The Beginning:</strong> I'm a Grade 10 IB MYP student at Glenforest Secondary School, where my
                journey began with a simple philosophy: <em>"With curiosity as my guide, I will never go wrong."</em>{" "}
                This mindset has shaped everything I do, from maintaining a 98% academic average to exploring the
                frontiers of medical research.
              </p>

              <p className="leading-7">
                <strong>Building Dreams:</strong> My passion for medicine led me to found{" "}
                <strong>Dr. Interested</strong>, where I serve as President, leading a global team to inspire future
                medical professionals through mentorship and research. What started as personal curiosity has grown into
                a platform that connects aspiring doctors worldwide.
              </p>

              <p className="leading-7">
                <strong>Research & Discovery:</strong> My research journey includes fascinating studies on stress
                hormones and astrocytomas, work that has deepened my understanding of the human body and mind. As a
                Youth Advisor at the University of Toronto Faculty of Kinesiology and Physical Education, I bridge the
                gap between student perspectives and academic excellence.
              </p>

              <p className="leading-7">
                <strong>Leadership in Action:</strong> Beyond academics, I actively lead in French Club and STEM
                Fellowship, while contributing to my community through Peer Helpers. I've earned Distinction in the
                Beaver Computing Challenge and am currently enrolled in UofT's MedLinx Program, constantly expanding my
                horizons.
              </p>

              <p className="leading-7">
                <strong>Looking Forward:</strong> Every experience, from research labs to leadership roles, shapes my
                path toward making a meaningful impact in healthcare and education. I believe in the power of curiosity,
                dedication, and community to create positive change.
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
              src="/tedx-speaking.jpeg"
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
