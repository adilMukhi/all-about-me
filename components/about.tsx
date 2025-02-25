"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function About() {
  const [step, setStep] = useState(0)

  const increaseStep = () => {
    setStep((prev) => (prev < 3 ? prev + 1 : prev))
  }

  const decreaseStep = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : prev))
  }

  return (
    <section id="about" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        About Me
      </h2>
      <div className="grid gap-12 lg:grid-cols-2">
        <Card className="bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>A Bit About Myself</CardTitle>
            <CardDescription>Get to know me better</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I'm a Grade 10 IB MYP student at Glenforest Secondary School who is dedicated to both academic success and
              effective leadership. I am a curious student with a passion for improvement, knowledge, and trying new things.
            </p>
            {step >= 1 && (
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                "With curiosity as my guide, I will never go wrong." I am always looking for new opportunities to learn and grow.
                Whether it’s academic research, leadership, or extracurricular activities, I strive to make an impact.
              </p>
            )}
            {step >= 2 && (
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                As the President and Founder of Dr. Interested, I lead a global team to inspire future medical professionals
                through mentorship and research. I maintain a 98% average in the IB program while holding leadership roles
                in the French Club and STEM Fellowship.
              </p>
            )}
            {step >= 3 && (
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                My research experience includes studies on stress hormones and astrocytomas. I also serve as a Youth Advisor
                at the University of Toronto Faculty of Kinesiology and Physical Education. Additionally, I have earned
                Distinction in the Beaver Computing Challenge and am currently enrolled in UofT’s MedLinx Program, furthering
                my passion for healthcare and advocacy.
              </p>
            )}
            <div className="flex gap-2 mt-4">
              <Button variant="link" onClick={decreaseStep} className="p-0" disabled={step === 0}>
                Show Less
              </Button>
              <Button variant="link" onClick={increaseStep} className="p-0" disabled={step === 3}>
                Show More
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
          <Image src="/profile-pic.jpg" alt="Your Name" width={600} height={400} className="rounded-full" />
        </div>
      </div>
    </section>
  )
}