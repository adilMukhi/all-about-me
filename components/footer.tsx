import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Your Name. Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

