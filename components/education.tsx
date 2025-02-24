import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    period: "2015 - 2017",
    description: "Specialized in Artificial Intelligence and Machine Learning.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Engineering College",
    period: "2011 - 2015",
    description: "Graduated with honors. Participated in various coding competitions.",
  },
  // Add more education entries as needed
]

export default function Education() {
  return (
    <section id="education" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
              <CardDescription>
                {edu.institution} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

