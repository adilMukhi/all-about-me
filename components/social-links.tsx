import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Link } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/yourusername" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
  { name: "Linktree", icon: Link, url: "https://linktr.ee/yourusername" },
]

export default function SocialLinks() {
  return (
    <section id="social-links" className="container py-12">
      <Card>
        <CardContent className="flex justify-center space-x-6 py-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

