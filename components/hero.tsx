"use client"

import { Button } from "@/components/ui/button"
import { Building, Mail, Linkedin, Instagram, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    {
      icon: Building,
      url: "https://linktr.ee/dr.interested",
      label: "My Club",
      color: "text-blue-500 hover:text-blue-700",
    },
    {
      icon: Mail,
      url: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mukhiadil2009@gmail.com",
      label: "Email Me",
      color: "text-red-500 hover:text-red-700",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/adil-mukhi",
      label: "LinkedIn",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/adilm.0",
      label: "Instagram",
      color: "text-pink-600 hover:text-pink-800",
    },
    {
      icon: ExternalLink,
      url: "https://linktr.ee/adilm.0",
      label: "Linktree",
      color: "text-green-600 hover:text-green-800",
    },
  ]

  return (
    <section className="py-4 pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-96 -right-24 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container lg:max-w-none lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 text-center lg:text-left relative z-10">
        {/* Social Media Icons - Desktop */}
        <div className="hidden lg:flex flex-col gap-6 order-1">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-all duration-300 hover:scale-125 hover:rotate-6`}
              aria-label={social.label}
              title={social.label}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <social.icon className="h-8 w-8" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start gap-3 order-1 lg:order-3">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-teal-500 mb-0.5">
              Hi, I'm
            </h1>
            <h1
              className="font-fredoka text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-teal-500"
              style={{
                textShadow: "0 0 10px rgba(59, 130, 246, 0.25), 0 0 20px rgba(59, 130, 246, 0.15)",
                animation: "none",
                transition: "none",
              }}
            >
              Adil Mukhi!
            </h1>
          </div>

          {/* Mobile social links - centered grid */}
          <div className="flex justify-center lg:justify-start gap-4 lg:hidden my-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-all duration-300 hover:scale-125 flex justify-center items-center`}
                aria-label={social.label}
                title={social.label}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>

          <p
            className={`max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 transition-all duration-700 delay-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ fontFamily: "'Times New Roman', Times, latin" }}
          >
            I'm a passionate student and aspiring researcher with a strong interest in science, medicine, and research.
            I enjoy exploring complex topics, conducting research, and creating engaging content.
          </p>
          <div
            className={`flex gap-4 flex-wrap justify-center lg:justify-start transition-all duration-700 delay-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button asChild className="button-hover-effect relative overflow-hidden group">
              <a href="#contact">
                <span className="relative z-10">Contact Me!</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
            </Button>
            <Button variant="secondary" asChild className="button-hover-effect relative overflow-hidden group">
              <a
                href="https://drive.google.com/file/d/1pcggPR8oLREeZlc2H5wCt1O_DxVH2fQ7/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">My Resume</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
            </Button>
            <Button variant="secondary" asChild className="button-hover-effect relative overflow-hidden group">
              <a
                href="https://drive.google.com/file/d/1xIuHrE6H3Lf-Oj3S-PrXI15dIHi9XtDi/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Visual Resume</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
            </Button>
            <Button asChild className="button-hover-effect relative overflow-hidden group">
              <a href="/blog">
                <span className="relative z-10">See More!</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
            </Button>
          </div>

          <p
            className={`text-foreground font-medium text-base sm:text-lg lg:text-xl mt-4 transition-all duration-700 delay-900 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            I'm currently available for{" "}
            <a
              href="/services"
              className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors font-semibold"
            >
              consulting engagements
            </a>{" "}
            and{" "}
            <a
              href="/services"
              className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors font-semibold"
            >
              public speaking opportunities
            </a>
            .
          </p>
        </div>

        <div className="flex-shrink-0 order-2 lg:order-2">
          <Image
            src="/pictures/Adil Mukhi - Tedx 1.png"
            alt="Adil Mukhi - Tedx Photo"
            width={350}
            height={450}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
