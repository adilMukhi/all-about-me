import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, BadgeIcon as Certificate, Heart, Trophy, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function BackgroundPage() {
  const sections = [
    {
      id: "skills",
      title: "Skills",
      description: "Professional and technical capabilities",
      icon: Lightbulb,
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      id: "work",
      title: "Work Experience",
      description: "Professional journey and achievements",
      icon: Briefcase,
      color: "bg-green-100 hover:bg-green-200",
    },
    {
      id: "education",
      title: "Education",
      description: "Academic qualifications and training",
      icon: GraduationCap,
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      id: "projects",
      title: "Projects",
      description: "Key projects and initiatives",
      icon: Award,
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      id: "certificates",
      title: "Certificates",
      description: "Professional certifications",
      icon: Certificate,
      color: "bg-red-100 hover:bg-red-200",
    },
    {
      id: "volunteer",
      title: "Volunteer Work",
      description: "Community involvement",
      icon: Heart,
      color: "bg-pink-100 hover:bg-pink-200",
    },
    {
      id: "honors",
      title: "Honors & Awards",
      description: "Achievements and recognition",
      icon: Trophy,
      color: "bg-orange-100 hover:bg-orange-200",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <h1
              className="text-4xl font-bold tracking-tighter text-center mb-8 sm:text-5xl md:text-6xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Background
            </h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Explore my professional journey, skills, education, and achievements that have shaped my career path.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <Link href={`/background#${section.id}`} key={section.id}>
                  <Card className={`transition-all duration-300 hover:scale-105 ${section.color}`}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <section.icon className="h-8 w-8" />
                      <div>
                        <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{section.title}</CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Individual sections */}
        <div id="skills">
          <section className="container py-16">
            <h2
              className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Skills
            </h2>
            {/* Skills content here - you can reuse your existing Skills component */}
          </section>
        </div>

        <div id="work">
          <section className="container py-16 bg-slate-50">
            <h2
              className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Work Experience
            </h2>
            {/* Work Experience content here */}
          </section>
        </div>

        <div id="education">
          <section className="container py-16">
            <h2
              className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Education
            </h2>
            {/* Education content here */}
          </section>
        </div>

        <div id="projects">
          <section className="container py-16 bg-slate-50">
            <h2
              className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Projects
            </h2>
            {/* Projects content here */}
          </section>
        </div>

        <div id="certificates">
          <section className="container py-16">
            <h2
              className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Certificates
            </h2>
            {/* Certificates content here */}
          </section>
        </div>

        <div id="volunteer">
          <section className="container py-16 bg-slate-50">
            <h2
              className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Volunteer Work
            </h2>
            {/* Volunteer Work content here */}
          </section>
        </div>

        <div id="honors">
          <section className="container py-16">
            <h2
              className="text-3xl font-bold tracking-tighter mb-8 sm:text-4xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Honors & Awards
            </h2>
            {/* Honors & Awards content here */}
          </section>
        </div>
      </main>
      <PageLayout />
    </>
  )
}

