import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certificates = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Professional level certification for designing distributed systems on AWS.",
  },
  {
    name: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    date: "2021",
    description: "Certification in Agile project management and Scrum methodologies.",
  },
  // Add more certificates as needed
]

export default function Certificates() {
  return (
    <section id="certificates" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certificates</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>
                {cert.issuer} | {cert.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

