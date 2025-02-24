import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const volunteerWork = [
  {
    title: "Junior Team Lead at Ismaili Volunteers",
    company: "Ismaili Volunteers",
    period: "Jan 2024 - Present (1 year 2 months)",
    description:
      "Appointed as Junior Team Lead to train junior volunteers and take on additional responsibilities. Focuses on event planning, youth development, and fostering inclusivity and accessibility.",
    image: "/placeholder.svg",
  },
  {
    title: "Activist (Volunteer)",
    company: "Results Canada",
    period: "Feb 2024 - Present",
    description:
      "Raising awareness of poverty and its causes through monthly focus topics and engaging in impactful campaigns.",
    image: "/placeholder.svg",
  },
  {
    title: "General Member",
    company: "HOSA Canada",
    period: "Sep 2023 - Present",
    description:
      "Developing leadership and technical skills in healthcare through workshops, competitions, and collaborative projects.",
    image: "/placeholder.svg",
  },
  {
    title: "Auditory Research",
    company: "The Hospital for Sick Children",
    period: "Sep 2023 - Present (1 yr 6 mos)",
    description:
      "Helping in auditory research for the cochlear implant program.",
    image: "/placeholder.svg",
  },
  {
    title: "Job Fair Volunteer",
    company: "Dixie Bloor Neighbourhood Centre",
    period: "Mar 2024 (1 month)",
    description:
      "Setup, helping people connect with different booths that match what they want, and packing up.",
    image: "/placeholder.svg",
  },
  {
    title: "Care Packages Maker",
    company: "The Flourish Foundation",
    period: "Dec 2023 (1 month)",
    description:
      "Helped make care packages for children in need at the University of Toronto (Mississauga Campus), raising awareness and supporting children in need with care packages containing lollipops, pens, stickers, fidget toys, and chains.",
    image: "/placeholder.svg",
  },
  // Add more volunteer work as needed
]

export default function VolunteerWork() {
  return (
    <section id="volunteer-work" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Bangers, cursive" }}>Volunteer Work</h2>
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

