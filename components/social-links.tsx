import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Github, Link, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/adil-mukhi-6aba27246", color: "text-blue-500" },
  { name: "GitHub", icon: Github, url: "https://github.com/adilMukhi", color: "text-gray-700" },
  { name: "My Club", icon: Building, url: "https://linktr.ee/dr.interested", color: "text-sky-400" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/adilm.0/", color: "text-pink-500" },
  { name: "Linktree", icon: Link, url: "https://linktr.ee/adilm.0", color: "text-green-500" },
]

export default function SocialLinks() {
  return (
    <section id="social-links" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Bangers, cursive" }}>Connect With Me</h2>
      <Card className="bg-gradient-to-br from-card to-background shadow-md">
        <CardHeader>
          <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>Let's Stay in Touch</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              className="w-full h-20 flex flex-col items-center justify-center gap-2 transition-all hover:scale-105"
              asChild
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:text-primary`}
                style={{ fontFamily: "'Kirang Haerang', cursive" }}
              >
                <social.icon className="h-6 w-6" />
                <span>{social.name}</span>
              </a>
            </Button>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}