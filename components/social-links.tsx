import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Calendar, Facebook, Twitter, Youtube, Music2, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CAL_BOOKING_URL } from "@/lib/site"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/adil-mukhi", color: "text-blue-600" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/adilm.0/", color: "text-pink-500" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/adilm.0/", color: "text-blue-500" },
  { name: "X", icon: Twitter, url: "https://x.com/adilm_0", color: "text-gray-700" },
  { name: "Bluesky", icon: Cloud, url: "https://bsky.app/profile/adilm0.bsky.social", color: "text-sky-500" },
  { name: "TikTok", icon: Music2, url: "https://www.tiktok.com/@adilm.0", color: "text-gray-900" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@AdilMukhi", color: "text-red-500" },
]

export default function SocialLinks() {
  return (
    <section
      id="social-links"
      className="py-6 bg-gradient-to-b from-background to-primary/5"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="container max-w-6xl">
        <div className="text-left mb-6">
          <h2
            className="mb-4 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl normal-case"
            style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
          >
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let's collaborate, share ideas, or simply stay connected. I'm always excited to meet new people and
            explore opportunities together.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Social Links Card */}
          <Card className="card-hover-effect h-fit">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-primary" style={{ fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}>
                Follow My Journey
              </CardTitle>
              <p className="text-sm text-muted-foreground">Stay updated with my latest work</p>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 pt-0">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  className="h-12 flex items-center justify-start gap-3 transition-all hover:scale-105 button-hover-effect group bg-transparent"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    style={{ fontFamily: "'Kirang Haerang', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
                  >
                    <social.icon className={`h-5 w-5 ${social.color} group-hover:text-primary transition-colors`} />
                    <span className="group-hover:text-primary transition-colors text-sm">{social.name}</span>
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="card-hover-effect bg-primary/5 border-primary/20">
            <CardHeader className="text-center pb-4">
              <CardTitle
                className="text-xl text-primary flex items-center justify-center gap-2"
                style={{ fontFamily: "'Bubblegum Sans', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
              >
                <Calendar className="h-5 w-5" />
                Let's Meet
              </CardTitle>
              <p className="text-sm text-muted-foreground">Schedule a conversation</p>
            </CardHeader>
            <CardContent className="text-center space-y-4 pt-0">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Interested in speaking engagements, consulting, or just want to connect? Let's chat.
                </p>
              </div>
              <Button asChild size="default" className="w-full px-6 py-3 font-semibold">
                <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book a Meeting
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
