"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"

export default function About() {
  const [showMore, setShowMore] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <section id="about" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        About Me
      </h2>
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} transition={{ duration: 0.8, ease: "easeOut" }}>
          <Card className={`card-hover-effect bg-gradient-to-br from-blue-100 to-teal-100`}>
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>A Bit About Myself</CardTitle>
              <CardDescription>Get to know me better</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                I'm a Grade 10 IB MYP student at Glenforest Secondary School who is dedicated to both academic success
                and effective leadership. I am a curious student with a passion for improvement, knowledge and trying
                new things. "With curiosity as my guide, I will never go wrong." Read the specifics below: 👇🏼
              </p>
              {showMore && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="leading-7 [&:not(:first-child)]:mt-6"
                >
                  I am a driven student leader, researcher, and advocate passionate about medicine and education. As the
                  President and Founder of Dr. Interested, I lead a global team to inspire future medical professionals
                  through mentorship and research. In the IB I maintain a 98% average while holding leadership roles in
                  French Club and STEM Fellowship, and actively helping in Peer Helpers. My research experience includes
                  studies on stress hormones and astrocytomas, and I serve as a Youth Advisor at the University of
                  Toronto Faculty of Kinesiology and Physical Education. I have earned Distinction in the Beaver
                  Computing Challenge and am currently enrolled in UofT's MedLinx Program, furthering my passion for
                  healthcare and advocacy.
                </motion.p>
              )}
              <Button variant="link" onClick={() => setShowMore(!showMore)} className="mt-4 p-0">
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <Image src="/profile-pic.jpg" alt="Your Name" width={600} height={400} className="rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
