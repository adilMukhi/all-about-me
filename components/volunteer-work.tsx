import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const volunteerWork = [
  {
    role: "Junior Team Lead at Ismaili Volunteers",
    organization: "Ismaili Volunteers",
    period: "Jan 2024 - Present (1 year 2 months)",
    description:
      "Appointed as Junior Team Lead to train junior volunteers and take on additional responsibilities. Focuses on event planning, youth development, and fostering inclusivity and accessibility.",
    image: "/ismalivolunteers.jpg",
  },
  {
    role: "Activist (Volunteer)",
    organization: "Results Canada",
    period: "Feb 2024 - Present",
    description:
      "Raising awareness of poverty and its causes through monthly focus topics and engaging in impactful campaigns.",
    image: "/results.jpg",
  },
  {
    role: "Medical Writer",
    organization: "HEAL for Health",
    period: "Jan 2024 - Oct 2024",
    description:
      "Contributing to a booklet on Respiratory Syncytial Virus (RSV) to inform underprivileged communities.",
    image: "/healforhealth.jpg",
  },
  {
    role: "Auditory Research",
    organization: "The Hospital for Sick Children",
    period: "Sep 2023 - Present (1 yr 6 mos)",
    description:
      "Helping in auditory research for the cochlear implant program.",
    image: "/sickkids.jpg",
  },
  {
    role: "Job Fair Volunteer",
    organization: "Dixie Bloor Neighbourhood Centre",
    period: "Mar 2024 (1 month)",
    description:
      "Setup, helping people connect with different booths that match what they want, and packing up.",
    image: "/dbnc.jpg",
  },
  {
    role: "Care Packages Maker",
    organization: "The Flourish Foundation",
    period: "Dec 2023 (1 month)",
    description:
      "Helped make care packages for children in need at the University of Toronto (Mississauga Campus), raising awareness and supporting children in need with care packages containing lollipops, pens, stickers, fidget toys, and chains.",
    image: "/floursihfoundation.jpg",
  },
  // Add more volunteer work as needed
]

export default function VolunteerWork() {
  return (
    <section id="volunteer-work" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Sour Gummy, latin"}}>Volunteer Work</h2>
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

