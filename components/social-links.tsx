import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="social-icons-container flex flex-wrap gap-4 sm:gap-6">
      <Link
        href="https://github.com/adilMukhi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 tooltip"
        aria-label="GitHub"
      >
        <span className="tooltip-text">GitHub</span>
        <Github className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/adil-mukhi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 tooltip"
        aria-label="LinkedIn"
      >
        <span className="tooltip-text">LinkedIn</span>
        <Linkedin className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
      </Link>
      <Link
        href="https://x.com/adilm_0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 tooltip"
        aria-label="Twitter"
      >
        <span className="tooltip-text">Twitter</span>
        <Twitter className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
      </Link>
      <Link
        href="https://www.instagram.com/adilm.0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 tooltip"
        aria-label="Instagram"
      >
        <span className="tooltip-text">Instagram</span>
        <Instagram className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
      </Link>
      <Link
        href="mailto:contact@adilmukhi.com"
        className="text-gray-600 hover:text-blue-500 transition-colors duration-300 tooltip"
        aria-label="Email"
      >
        <span className="tooltip-text">Email</span>
        <Mail className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
      </Link>
    </div>
  )
}

