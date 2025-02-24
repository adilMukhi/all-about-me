import { Github, Linkedin, Link } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
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
        </div>
        <div className="flex gap-8">
          <a href="https://github.com/adilMukhi" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black">
            <Github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linktr.ee/adilm.0" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">
            <Link className="h-7 w-7" />
            <span className="sr-only">LinkTree</span>
          </a>
          <a href="https://linkedin.com/in/adil-mukhi-6aba27246" target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-800">
            <Linkedin className="h-7 w-7" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
