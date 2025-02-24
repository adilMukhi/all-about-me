import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const honorsAwards = [
  {
    title: "Employee of the Year",
    issuer: "Tech Innovators Inc.",
    year: "2022",
    description: "Recognized for outstanding performance and contributions to the company.",
    image: "/placeholder.svg",
  },
  {
    title: "Best Paper Award",
    issuer: "International Conference on AI and Machine Learning",
    year: "2020",
    description: "Awarded for the research paper on 'Innovative Approaches in Natural Language Processing'.",
    image: "/placeholder.svg",
  },
  // Add more honors and awards as needed
]

export default function HonorsAwards() {
  return (
    <section id="honors-awards" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Honors & Awards</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {honorsAwards.map((award, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{award.title}</CardTitle>
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

