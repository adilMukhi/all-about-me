import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "President and Founder",
    company: "Dr. Interested",
    period: "Dec 2024 - Present (3 months)",
    description:
      "Dr. Interested is a student-led initiative aiming to inspire future medical professionals through research, mentorship, and outreach. The organization has 30+ executives, 300+ Instagram followers, 120+ Discord members, and 100+ LinkedIn followers, with significant reach and collaboration with organizations like Aid4Need to support healthcare workers.",
    image: "/placeholder.svg",
  },
  {
    title: "Youth Advisor",
    company: "University of Toronto Faculty of Kinesiology and Physical Education",
    period: "Nov 2024 - Present (4 months)",
    description:
      "Collaborates on the KPE Rethink Sports research project, providing insights on inclusivity in sports initiatives. Recognized with an honorarium for contributions.",
    image: "/placeholder.svg",
  },
  {
    title: "General Member",
    company: "YCRH - Young Canadians Roundtable on Health",
    period: "Jul 2024 - Present (8 months)",
    description:
      "Collaborates with youth to address critical health issues affecting Canadians, advocating for improved youth health and well-being.",
    image: "/placeholder.svg",
  },
  {
    title: "Director of Research & Development",
    company: "NeuroGenesis Pakistan",
    period: "Oct 2024 - Present (5 months)",
    description:
      "Oversees research for educational content and helps develop new ideas for posts and events focused on healthcare education.",
    image: "/placeholder.svg",
  },
  {
    title: "Assistant Director of Publications",
    company: "Harmony Health Initiative",
    period: "Oct 2024 - Present",
    description:
      "As Assistant Director, I oversee the publications department, contributing to magazine and newsletter content with a focus on health and wellness.",
    image: "/placeholder.svg",
  },
  {
    title: "Summer Camp Counselor",
    company: "Dixie Bloor Neighbourhood Centre",
    period: "Jun 2024 - Aug 2024",
    description:
      "Led activities and provided mentorship for youth, creating a positive environment for over 35 students.",
    image: "/placeholder.svg",
  },
  {
    title: "Vice President for STEM Fellowship Chapter",
    company: "Glenforest Secondary School",
    period: "Oct 2024 - Present (5 months)",
    description:
      "Leads projects to inspire students to pursue careers in STEM fields, including planning workshops, contests, and outreach programs. Manages collaborations, organizes events, and ensures initiatives assist future scholars and innovators.",
    image: "/placeholder.svg",
  },
  {
    title: "Vice President at French Club",
    company: "Glenforest Secondary School",
    period: "Sep 2024 - Present (6 months)",
    description:
      "Leads initiatives to promote French language and culture, organizing events and fostering student engagement. Collaborates with the team to create a dynamic and inclusive environment for language learning.",
    image: "/placeholder.svg",
  },
  {
    title: "Event Coordinator at Newcomers Club",
    company: "Glenforest Secondary School",
    period: "Sep 2024 - Present (6 months)",
    description:
      "Organizes events to help new students integrate into the school community, planning and promoting social and cultural activities while managing event logistics to ensure a welcoming atmosphere.",
    image: "/placeholder.svg",
  },
  {
    title: "Medical Writer",
    company: "HEAL for Health",
    period: "Jan 2024 - Oct 2024",
    description:
      "Contributing to a booklet on Respiratory Syncytial Virus (RSV) to inform underprivileged communities.",
    image: "/placeholder.svg",
  },
  {
    title: "Pediatrics Cancer Research Writer",
    company: "Sunshine 4 Kids Cancer",
    period: "Jul 2024 - Aug 2024",
    description:
      "Contributed to research and presentation on Astrocytomas in the context of brain and spinal cord tumors.",
    image: "/placeholder.svg",
  },
  {
    title: "Youth Advisor",
    company: "Children First Canada",
    period: "Jul 2024",
    description:
      "Provided input for the Raising Canada Report, representing the youth perspective on critical issues affecting children in Canada.",
    image: "/placeholder.svg",
  },
  // Add more experiences as needed
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Bangers, cursive" }}>Work Experience</h2>
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

