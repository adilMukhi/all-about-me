import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Github, Link, Building } from "lucide-react"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/adil-mukhi-6aba27246", color: "text-blue-500" },
  { name: "GitHub", icon: Github, url: "https://github.com/adilMukhi", color: "text-gray-700" },
  { name: "My Club", icon: Building, url: "https://linktr.ee/dr.interested", color: "text-sky-400" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/adilm.0/", color: "text-pink-500" },
  { name: "Linktree", icon: Link, url: "https://linktr.ee/adilm.0", color: "text-green-500" },
]

export default function Contact() {
  return (
    <section id="contact" className="container py-16">
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Contact Me
      </h2>
      <Card className="bg-gradient-to-br from-blue-100 to-teal-100">
        <CardHeader>
          <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/profile-pic.jpg"
              alt="Adil Mukhi"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${social.color} hover:text-primary transition-colors`}
                >
                  <social.icon className="h-6 w-6" />
                  <span style={{ fontFamily: "'Kirang Haerang', cursive", fontSize: "18px" }}>{social.name}</span>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <Button asChild>
                <a href="mailto:mukhiadil2009@gmail.com">Email Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://calendly.com/yourusername" target="_blank" rel="noopener noreferrer">
                  Book a Meeting
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

