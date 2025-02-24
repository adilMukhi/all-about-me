import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const hardSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "SQL",
  "MongoDB",
]

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Leadership",
  "Creativity",
]

export default function Skills() {
  return (
    <section id="skills" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-card to-background shadow-md">
          <CardHeader>
            <CardTitle>Hard Skills</CardTitle>
            <CardDescription>Technical proficiencies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-card to-background shadow-md">
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
            <CardDescription>Interpersonal and professional skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

