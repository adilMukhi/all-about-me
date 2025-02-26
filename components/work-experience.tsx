"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const experiences = [
  {
    title: "President and Founder",
    company: "Dr. Interested",
    period: "Dec 2024 - Present (3 months)",
    description:
      "Dr. Interested is a student-led initiative aiming to inspire future medical professionals through research, mentorship, and outreach. The organization has 30+ executives, 300+ Instagram followers, 120+ Discord members, and 100+ linkedIn followers, with significant reach and collaboration with organizations like Aid4Need to support healthcare workers.",
    image: "/drinterested.jpg",
    skills: ["Leadership", "Project Management", "Community Building", "Medical Education", "Networking"],
    link: "https://linktr.ee/dr.interested",
  },
  {
    title: "Youth Advisor",
    company: "University of Toronto Faculty of Kinesiology and Physical Education",
    period: "Nov 2024 - Present (4 months)",
    description:
      "Collaborates on the KPE Rethink Sports research project, providing insights on inclusivity in sports initiatives. Recognized with an honorarium for contributions.",
    image: "/uoftkpe_logo.jpg",
    skills: ["Research", "Sports Inclusivity", "Advisory Skills", "Data Analysis", "Presentation Skills"],
    link: "https://www.linkedin.com/in/adil-mukhi-6aba27246/#:~:text=and%20%2B3%20skills-,Youth%20Advisor,-Youth%20Advisor",
  },
  {
    title: "General Member",
    company: "YCRH - Young Canadians Roundtable on Health",
    period: "Jul 2024 - Present (8 months)",
    description:
      "Collaborates with youth to address critical health issues affecting Canadians, advocating for improved youth health and well-being.",
    image: "/ycrh.jpg",
    skills: ["Health Advocacy", "Policy Analysis", "Teamwork", "Public Speaking", "Problem-Solving"],
    link: "https://sandboxproject.ca/about-the-ycrh",
  },
  {
    title: "Director of Research & Development",
    company: "NeuroGenesis Pakistan",
    period: "Oct 2024 - Present (5 months)",
    description:
      "Oversees research for educational content and helps develop new ideas for posts and events focused on healthcare education.",
    image: "/neurogensis.jpg",
    skills: [
      "Research Management",
      "Content Development",
      "Neuroscience Knowledge",
      "Event Planning",
      "Cross-Cultural Communication",
    ],
    link: "https://www.instagram.com/neurogenesis.pk/",
  },
  {
    title: "Assistant Director of Publications",
    company: "Harmony Health Initiative",
    period: "Oct 2024 - Present",
    description:
      "As Assistant Director, I oversee the publications department, contributing to magazine and newsletter content with a focus on health and wellness.",
    image: "/HHI.jpg",
    skills: ["Editorial Skills", "Content Creation", "Team Management", "Health Writing", "Publication Process"],
    link: "https://harmonyhealthiniti.wixsite.com/harmony-health-initi",
  },
  {
    title: "Summer Camp Counselor",
    company: "Dixie Bloor Neighbourhood Centre",
    period: "Jun 2024 - Aug 2024",
    description:
      "Led activities and provided mentorship for youth, creating a positive environment for over 35 students.",
    image: "/dbnc.jpg",
    skills: ["Youth Mentorship", "Activity Planning", "Leadership", "Conflict Resolution", "Child Safety"],
    link: "https://www.dixiebloor.ca/",
  },
  {
    title: "Vice President for STEM Fellowship Chapter",
    company: "Glenforest Secondary School",
    period: "Oct 2024 - Present (5 months)",
    description:
      "Leads projects to inspire students to pursue careers in STEM fields, including planning workshops, contests, and outreach programs. Manages collaborations, organizes events, and ensures initiatives assist future scholars and innovators.",
    image: "/stemfellowship.jpg",
    skills: ["STEM Education", "Event Organization", "Project Management", "Public Speaking", "Peer Leadership"],
    link: "https://live.stemfellowship.org/",
  },
  {
    title: "Vice President at French Club",
    company: "Glenforest Secondary School",
    period: "Sep 2024 - Present (6 months)",
    description:
      "Leads initiatives to promote French language and culture, organizing events and fostering student engagement. Collaborates with the team to create a dynamic and inclusive environment for language learning.",
    image: "/frenchclub.jpg",
    skills: ["French Language", "Cultural Awareness", "Event Planning", "Team Collaboration", "Language Education"],
    link: "https://www.instagram.com/gfssfrenchclub/",
  },
  {
    title: "Event Coordinator at Newcomers Club",
    company: "Glenforest Secondary School",
    period: "Sep 2024 - Present (6 months)",
    description:
      "Organizes events to help new students integrate into the school community, planning and promoting social and cultural activities while managing event logistics to ensure a welcoming atmosphere.",
    image: "/newcomersclub.jpg",
    skills: ["Event Coordination", "Cultural Sensitivity", "Social Integration", "Time Management", "Communication"],
    link: "https://www.instagram.com/gfssnewcomersclub/",
  },
  {
    title: "General Member",
    company: "HOSA Canada",
    period: "Sep 2023 - Present",
    description:
      "Developing leadership and technical skills in healthcare through workshops, competitions, and collaborative projects.",
    image: "/hosa.jpg",
    skills: ["Healthcare Knowledge", "Competitive Skills", "Teamwork", "Medical Ethics", "Problem-Solving"],
    link: "https://hosacanada.org/home/",
  },
  {
    title: "Pediatrics Cancer Research Writer",
    company: "Sunshine 4 Kids Cancer",
    period: "Jul 2024 - Aug 2024",
    description:
      "Contributed to research and presentation on Astrocytomas in the context of brain and spinal cord tumors.",
    image: "/sun4cancer.jpg",
    skills: ["Medical Writing", "Cancer Research", "Data Analysis", "Scientific Communication", "Pediatric Oncology"],
    link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/research#:~:text=5-,sunshine4cancerkid,Astrocytoma%3A%20From%20Diagnosis%20to%20Management%20%E2%80%93%20A%20Comprehensive%20Overview,-Adil%20Mukhi%2C%20Nimeesha",
  },
  {
    title: "Youth Advisor",
    company: "Children First Canada",
    period: "Jul 2024",
    description:
      "Provided input for the Raising Canada Report, representing the youth perspective on critical issues affecting children in Canada.",
    image: "/childernfirstcanada.jpg",
    skills: ["Policy Analysis", "Youth Advocacy", "Report Writing", "Critical Thinking", "Child Welfare"],
    link: "https://childrenfirstcanada.org/wp-content/uploads/2024/10/Raising-Canada-2024-Final.pdf",
  },
]

export default function WorkExperience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 4)

  return (
    <section id="work-experience" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Work Experience
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence>
          {visibleExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`card-hover-effect`}
                onMouseEnter={() => toggleExpand(index)}
                onMouseLeave={() => toggleExpand(null)}
              >
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{exp.title}</CardTitle>
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
                  <div className="flex-1">
                    <p>{exp.description}</p>
                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <h4 className="font-semibold">Skills Learned:</h4>
                          <ul className="list-disc list-inside">
                            {exp.skills.map((skill, skillIndex) => (
                              <li key={skillIndex}>{skill}</li>
                            ))}
                          </ul>
                          <Button className="mt-4 button-hover-effect">
                            <a href={exp.link} target="_blank" rel="noopener noreferrer">
                              Learn More
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {!showAll && experiences.length > 4 && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(true)} className="button-hover-effect">
            Show More
          </Button>
        </div>
      )}
    </section>
  )
}