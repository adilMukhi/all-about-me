import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Github, Link, Building } from "lucide-react"
import Script from "next/script"

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
        <CardContent className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-8">
            <div className="w-64 h-64 relative">
              <Image
                src="/secondpic.jpg"
                alt="Adil Mukhi"
                width={256}
                height={256}
                className="rounded-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {socialLinks.slice(0, 4).map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${social.color} hover:text-primary transition-colors justify-center`}
                >
                  <social.icon className="h-5 w-5" />
                  <span style={{ fontFamily: "'Kirang Haerang', cursive", fontSize: "16px" }}>{social.name}</span>
                </a>
              ))}
            </div>
            <div className="flex justify-center w-full">
              {socialLinks.slice(4).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${social.color} hover:text-primary transition-colors`}
                >
                  <social.icon className="h-5 w-5" />
                  <span style={{ fontFamily: "'Kirang Haerang', cursive", fontSize: "16px" }}>{social.name}</span>
                </a>
              ))}
            </div>
            <Button asChild className="button-hover-effect w-full max-w-md">
              <a href="mailto:mukhiadil2009@gmail.com">Email Me</a>
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/adilm0/15-minute-meeting?hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </CardContent>
      </Card>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </section>
  )
}
