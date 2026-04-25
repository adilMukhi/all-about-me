import { Github } from "lucide-react"

const profileLinks = [
  { label: "Profiles Hub", href: "/profiles", external: false },
  { label: "Website", href: "https://adilmukhi.vercel.app/", external: true },
  { label: "Alt Site", href: "https://adilm.drinterested.org/", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adil-mukhi", external: true },
  { label: "Instagram", href: "https://www.instagram.com/adilm.0", external: true },
  { label: "Facebook", href: "https://www.facebook.com/adilm.0/", external: true },
  { label: "X", href: "https://x.com/adilm_0", external: true },
  { label: "Bluesky", href: "https://bsky.app/profile/adilm0.bsky.social", external: true },
  { label: "TikTok", href: "https://www.tiktok.com/@adilm.0", external: true },
  { label: "YouTube", href: "https://www.youtube.com/@AdilMukhi", external: true },
]

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container flex flex-col items-center justify-between gap-4 py-8">
        <div className="flex flex-col items-center gap-4 px-8 text-center">
          <p
            className="text-center text-sm leading-loose md:text-left"
            style={{ fontFamily: "Sour Gummy, latin", fontSize: "16px" }}
          >
            Built by Adil Mukhi. The source code is available on{" "}
            <a
              href="https://github.com/adilMukhi/all-about-me"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <a
            href="https://github.com/adilMukhi"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <Github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
