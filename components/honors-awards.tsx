import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const honorsAwards = [
  {
    title: "SemiFinalist, (p + q = 1) exam",
    issuer: "Mitosisphere",
    year: "Feb 2025",
    description: "Awarded for placing among the top 22 out of 180+ competitors worldwide in the highly competitive 1/25 (p + q = 1) exam. This achievement recognizes excellence in problem-solving and analytical skills in a rigorous academic competition.",
    image: "/placeholder.svg",
  },
  {
    title: "Distinction, Beaver Competition",
    issuer: "University of Waterloo, Centre for Education in Mathematics and Computing (CEMC)",
    year: "Nov 2024",
    description: "Achieved a perfect score of 90/90 in the Beaver Computing Challenge, a rare accomplishment shared by only four students at Glenforest Secondary School.",
    image: "/placeholder.svg",
  },
  {
    title: "Honors, Academic Distinction (Science, IB Design, Gym)",
    issuer: "Glenforest Secondary School",
    year: "Oct 2024",
    description: "Earned honors in Science, IB Design, and Physical Education during the grade 9 (2023-2024) academic year.",
    image: "/placeholder.svg",
  },
  {
    title: "Quarter-Finalist at ROPSSAA Tennis",
    issuer: "Glenforest Secondary School",
    year: "Oct 2024",
    description: "Quarter-Finalist in the ROPSSAA Boys Doubles Junior Tennis South East Qualifier 2024.",
    image: "/placeholder.svg",
  },
  {
    title: "Valedictorian, Middle School Graduation",
    issuer: "The Valleys",
    year: "2023",
    description: "Delivered a graduation speech to the 2023 graduating grade 8 class, their parents, and school staff.",
    image: "/placeholder.svg",
  },
  {
    title: "2nd Place, Biopage Writing Competition",
    issuer: "Biopage",
    year: "2025",
    description: "Placed 2nd in the Biopage Writing Competition, competing against talented writers from around the world.",
    image: "/placeholder.svg",
  },
  // Add more honors and awards as needed
];

export default function HonorsAwards() {
  return (
    <section id="honors-awards" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Sour Gummy, latin"}}>Honors & Awards</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {honorsAwards.map((award, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{award.title}</CardTitle>
              <CardDescription>
                {award.issuer} | {award.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={award.image || "/placeholder.svg"}
                alt={award.title}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p>{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

