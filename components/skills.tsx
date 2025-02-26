import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const hardSkills = [
  "Professional Writing",
  "Research",
  "Menotring",
  "Public Speaking",
  "Data Analysis",
  "Project Management",
  "First Aid & CPR/AED",
  "Research Collaboration",
  "Coding (JavaScript, HTML, CSS)",
  "Graphic Design",
]

const softSkills = [
  "Leadership",
  "Communication",
  "Time Management",
  "Problem-Solving",
  "Teamwork",
  "Adaptability",
  "Critical Thinking",
  "Leadership",
  "Creativity",
]

export default function Skills() {
  return (
    <section id="skills" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className={`card-hover-effect`}>
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Bubblegum Sans', 'Times New Roman', serif" }}>Hard Skills</CardTitle>
            <CardDescription>Technical proficiencies</CardDescription>
          </CardHeader>
          <CardContent style={{ fontFamily: "'Times New Roman', serif" }}>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className={`card-hover-effect`}>
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Bubblegum Sans', 'Times New Roman', serif" }}>Soft Skills</CardTitle>
            <CardDescription>Interpersonal and professional skills</CardDescription>
          </CardHeader>
          <CardContent style={{ fontFamily: "'Times New Roman', serif" }}>
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

