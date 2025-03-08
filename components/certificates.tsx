import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { certificates } from "@/data/certificates"

export default function Certificates() {
  return (
    <section id="certificates" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Certificates
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card key={index} className="card-hover-effect">
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{cert.name}</CardTitle>
              <CardDescription>
                {cert.issuer} | {cert.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p>{cert.description}</p>
              <div className="w-full">
                <h4 className="font-semibold">Skills Gained:</h4>
                <ul className="list-disc list-inside">
                  {cert.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
                <Button className="mt-4 button-hover-effect">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

