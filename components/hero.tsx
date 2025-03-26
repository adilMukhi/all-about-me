"use client"

import { Button } from "@/components/ui/button"
import { Building, BookOpen, Mail, Linkedin, Instagram, Github, Twitter, Cloud, Code, Hash, Ghost } from "lucide-react"
import { useEffect, useState } from "react"

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
      icon: BookOpen,
      url: "https://virusesunveiled.substack.com/?r=48c132&utm_campaign=pub-share-checklist",
      label: "My Blog",
      color: "text-green-600 hover:text-green-800",
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
      icon: Github,
      url: "https://github.com/adilMukhi",
      label: "GitHub",
      color: "text-gray-800 hover:text-black",
    },
    {
      icon: Twitter,
      url: "https://x.com/adilm_0",
      label: "X",
      color: "text-gray-700 hover:text-gray-900",
    },
    {
      icon: Cloud,
      url: "https://bsky.app/profile/adilm0.bsky.social",
      label: "BlueSky",
      color: "text-sky-500 hover:text-sky-700",
    },
    {
      icon: Code,
      url: "https://devpost.com/AdilM",
      label: "DevPost",
      color: "text-indigo-600 hover:text-indigo-800",
    },
    {
      icon: Hash,
      url: "https://www.threads.net/@adilm.0",
      label: "Threads",
      color: "text-black hover:text-gray-800",
    },
    {
      icon: Ghost,
      url: "https://www.snapchat.com/add/adilm.0",
      label: "Snapchat",
      color: "text-yellow-500 hover:text-yellow-600",
    },
  ]
  
  // Only show the most important social links on mobile
  const mobileSocialLinks = socialLinks.slice(0, 5)

  return (
    <section className="bg-gradient-to-b from-primary/5 to-primary/10 py-16 relative overflow-hidden">
      {/* Simplified background elements with better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-96 -right-24 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container flex flex-col items-center justify-center gap-4 text-center relative z-10">
        <h1
          className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-primary to-teal-500 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Hi, I'm Adil Mukhi!
        </h1>

        {/* Social Media Icons - Desktop */}
        <div
          className={`hidden md:flex flex-wrap justify-center gap-4 my-4 transition-all duration-700 delay-300 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-all duration-300 hover:scale-125`}
              aria-label={social.label}
              title={social.label}
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile social links - optimized grid */}
        <div className="grid grid-cols-5 gap-x-2 gap-y-3 md:hidden my-4 mx-auto w-full max-w-xs">
          {mobileSocialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-all duration-300 flex justify-center items-center`}
              aria-label={social.label}
              title={social.label}
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>

        <p
          className={`max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 transition-all duration-700 delay-500 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          I'm a passionate student and aspiring researcher with a strong interest in science, medicine, and research. I
          enjoy exploring complex topics, conducting research, and creating engaging content.
        </p>
        <div
          className={`flex gap-4 flex-wrap justify-center transition-all duration-700 delay-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
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
          <Button asChild className="button-hover-effect relative overflow-hidden group">
            <a href="/experiences">
              <span className="relative z-10">See More!</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

