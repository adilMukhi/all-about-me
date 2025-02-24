import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "Jan 2020 - Present",
    description:
      "Lead development of cloud-based solutions, mentored junior developers, and implemented agile methodologies.",
    image: "/placeholder.svg",
  },
  {
    title: "Software Developer",
    company: "Digital Solutions Ltd.",
    period: "Jun 2017 - Dec 2019",
    description:
      "Developed and maintained web applications, collaborated with cross-functional teams, and optimized database performance.",
    image: "/placeholder.svg",
  },
  // Add more experiences as needed
  //extra
]

export default function WorkExperience() {
  return (
    <section id="work-experience" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <Image
                src={exp.image || "/placeholder.svg"}
                alt={exp.company}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

