import { Button } from "@/components/ui/button"
import { Building, BookOpen, Mail, Linkedin, Instagram, Github, Twitter, Cloud, Code, Hash, Ghost } from "lucide-react"

export default function Hero() {
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

  // Calculate how many icons per row for mobile
  const totalIcons = socialLinks.length
  const iconsPerRow = Math.ceil(totalIcons / 2)

  // Split icons into two rows for mobile
  const firstRowIcons = socialLinks.slice(0, iconsPerRow)
  const secondRowIcons = socialLinks.slice(iconsPerRow)

  return (
    <section className="bg-primary/10 py-16">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h2
          className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl normal-case text-hover-effect"
          style={{ fontFamily: "DynaPuff, serif", letterSpacing: "0.1em" }}
        >
          Hi, I'm Adil Mukhi!
        </h2>

        {/* Social Media Icons - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 my-4">
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

        {/* Social Media Icons - Mobile (two rows) */}
        <div className="flex flex-col gap-3 md:hidden my-4">
          <div className="flex justify-center gap-3">
            {firstRowIcons.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-all duration-300 hover:scale-125`}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-3">
            {secondRowIcons.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-all duration-300 hover:scale-125`}
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <p
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ fontFamily: "'Times New Roman', Times, latin" }}
        >
          I'm a passionate student and aspiring researcher with a strong interest in science, medicine, and research. I
          enjoy exploring complex topics, conducting research, and creating engaging content.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button asChild className="button-hover-effect">
            <a href="#contact">Contact Me!</a>
          </Button>
          <Button variant="secondary" asChild className="button-hover-effect">
            <a
              href="https://drive.google.com/file/d/1pcggPR8oLREeZlc2H5wCt1O_DxVH2fQ7/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </Button>
          <Button variant="secondary" asChild className="button-hover-effect">
            <a
              href="https://drive.google.com/file/d/1xIuHrE6H3Lf-Oj3S-PrXI15dIHi9XtDi/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Resume
            </a>
          </Button>
          <Button asChild className="button-hover-effect">
            <a href="/experiences">See More!</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

