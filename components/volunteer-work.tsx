"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const volunteerWork = [
  {
    role: "Junior Team Lead at Ismaili Volunteers",
    organization: "Ismaili Volunteers",
    period: "Jan 2024 - Present (1 year 2 months)",
    description:
      "Appointed as Junior Team Lead to train junior volunteers and take on additional responsibilities. Focuses on event planning, youth development, and fostering inclusivity and accessibility.",
    image: "/ismalivolunteers.jpg",
    skills: ["Leadership", "Event Coordination", "Youth Mentorship", "Team Management", "Community Engagement"],
    link: "https://www.linkedin.com/in/adil-mukhi-6aba27246/details/experience/#:~:text=Management%20%C2%B7%20Reading%20Comprehension-,Ismaili%20Volunteers%20(IV),-Ismaili%20Volunteers%20(IV",
  },
  {
    role: "Activist (Volunteer)",
    organization: "Results Canada",
    period: "Feb 2024 - Present",
    description:
      "Raising awareness of poverty and its causes through monthly focus topics and engaging in impactful campaigns.",
    image: "/results.jpg",
    skills: ["Advocacy", "Public Speaking", "Policy Research", "Writing & Communication", "Campaign Management"],
    link: "https://resultscanada.ca/youth-skills-day-celebrating-our-rising-stars-in-advocacy/",
  },
  {
    role: "Medical Writer",
    organization: "HEAL for Health",
    period: "Jan 2024 - Oct 2024",
    description:
      "Contributing to a booklet on Respiratory Syncytial Virus (RSV) to inform underprivileged communities.",
    image: "/healforhealth.jpg",
    skills: [
      "Medical Writing",
      "Health Communication",
      "Scientific Research",
      "Technical Writing",
      "Community Education",
    ],
    link: "https://www.instagram.com/heal.ontario/p/C9U2GeiRj8i/?img_index=2",
  },
  {
    role: "Auditory Research",
    organization: "The Hospital for Sick Children",
    period: "Sep 2023 - Present (1 yr 6 mos)",
    description: "Helping in auditory research for the cochlear implant program.",
    image: "/sickkids.jpg",
    skills: ["Research Assistance", "Data Collection", "Medical Research", "Analytical Thinking", "Collaboration"],
    link: "https://lab.research.sickkids.ca/harrison/",
  },
  {
    role: "Job Fair Volunteer",
    organization: "Dixie Bloor Neighbourhood Centre",
    period: "Mar 2024 (1 month)",
    description: "Setup, helping people connect with different booths that match what they want, and packing up.",
    image: "/dbnc.jpg",
    skills: ["Event Setup", "Public Relations", "Communication", "Networking", "Organization"],
    link: "https://www.dixiebloor.ca/",
  },
  {
    role: "Care Packages Maker",
    organization: "The Flourish Foundation",
    period: "Dec 2023 (1 month)",
    description:
      "Helped make care packages for children in need at the University of Toronto (Mississauga Campus), raising awareness and supporting children in need with care packages containing lollipops, pens, stickers, fidget toys, and chains.",
    image: "/floursihfoundation.jpg",
    skills: ["Community Service", "Teamwork", "Logistics", "Philanthropy", "Organization"],
    link: "https://www.flourishfoundation.org/",
  },
]

export default function VolunteerWork() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const visibleVolunteerWork = showAll ? volunteerWork : volunteerWork.slice(0, 4)

  return (
    <section id="volunteer-work" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Volunteer Work
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {visibleVolunteerWork.map((work, index) => (
          <Card
            key={index}
            className="card-hover-effect"
            onMouseEnter={() => toggleExpand(index)}
            onMouseLeave={() => toggleExpand(null)}
          >
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{work.role}</CardTitle>
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
              <div className="flex-1">
                <p>{work.description}</p>
                <div className={`expanded-content ${expandedCard === index ? "show" : ""}`}>
                  <div className="mt-4">
                    <h4 className="font-semibold">Skills Learned:</h4>
                    <ul className="list-disc list-inside">
                      {work.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                    <Button className="mt-4 button-hover-effect">
                      <a href={work.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {!showAll && volunteerWork.length > 4 && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(true)} className="button-hover-effect">
            Show More
          </Button>
        </div>
      )}
    </section>
  )
}

