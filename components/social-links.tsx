"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Link, Building, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/adil-mukhi-6aba27246", color: "text-blue-500" },
  { name: "My Club", icon: Building, url: "https://linktr.ee/dr.interested", color: "text-sky-400" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/adilm.0/", color: "text-pink-500" },
  { name: "Linktree", icon: Link, url: "https://linktr.ee/adilm.0", color: "text-green-500" },
]

const CalBookingScript = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://app.cal.com"});
      Cal.ns["15min"]("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#bbd3e5"},"dark":{"cal-brand":"#bbd3e5"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

export default function SocialLinks() {
  return (
    <>
      <CalBookingScript />
      <section
        id="social-links"
        className="py-6 bg-gradient-to-b from-background to-primary/5"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <div className="container max-w-6xl">
          <div className="text-left mb-6">
            <h2
              className="mb-4 text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl normal-case"
              style={{ fontFamily: "Sour Gummy, latin" }}
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
                <CardTitle className="text-xl text-primary" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
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
                      style={{ fontFamily: "'Kirang Haerang', cursive" }}
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
                  style={{ fontFamily: "'Bubblegum Sans', cursive" }}
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
                <Button
                  size="default"
                  className="w-full px-6 py-3 font-semibold relative overflow-hidden group"
                  data-cal-link="adilm.0/15min"
                  data-cal-namespace="15min"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book a Meeting
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
