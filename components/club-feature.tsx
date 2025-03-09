import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Users, BookOpen, Globe } from "lucide-react"

export default function ClubFeature() {
  return (
    <section className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        My Club: Dr. Interested
      </h2>
      <Card className="bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[300px]">
            <Image src="/drinterested.jpg" alt="Dr. Interested Club" fill className="object-cover" />
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <CardHeader className="p-0 mb-4">
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }} className="text-2xl md:text-3xl">
                Inspiring Future Medical Professionals
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                A student-led initiative connecting aspiring healthcare professionals
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="mb-4">
                Dr. Interested is a global community I founded to inspire and support students interested in healthcare
                careers through research, mentorship, and collaborative opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>30+ Executive Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-500" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span>Research Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span>375+ Cards Distributed</span>
                </div>
              </div>
              <Button size="lg" className="button-hover-effect">
                <a href="https://linktr.ee/dr.interested" target="_blank" rel="noopener noreferrer">
                  Visit Dr. Interested
                </a>
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  )
}

