import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
      <div className="grid gap-12 lg:grid-cols-2">
        <Card className="bg-card shadow-md">
          <CardHeader>
            <CardTitle>A Bit About Myself</CardTitle>
            <CardDescription>Get to know me better</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I'm a passionate developer with a keen interest in creating innovative solutions. With a background in
              computer science and years of experience in web development, I strive to build applications that are not
              only functional but also user-friendly and visually appealing.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities. I believe in continuous learning and always push myself to stay updated with
              the latest trends in the tech world.
            </p>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
          <Image src="/profile-pic.jpg" alt="Your Name" width={600} height={400} className="rounded-full" />
        </div>
      </div>
    </section>
  )
}

