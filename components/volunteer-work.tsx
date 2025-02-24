import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const volunteerWork = [
  {
    role: "Tech Mentor",
    organization: "Local Coding Club",
    period: "2019 - Present",
    description: "Teach programming basics to underprivileged youth, organize coding workshops and hackathons.",
    image: "/placeholder.svg",
  },
  {
    role: "Web Developer",
    organization: "Environmental Non-Profit",
    period: "2018",
    description:
      "Developed and maintained the organization's website, improving their online presence and donation system.",
    image: "/placeholder.svg",
  },
  // Add more volunteer work as needed
]

export default function VolunteerWork() {
  return (
    <section id="volunteer-work" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Volunteer Work</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {volunteerWork.map((work, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{work.role}</CardTitle>
              <CardDescription>
                {work.organization} | {work.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.organization}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p>{work.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

