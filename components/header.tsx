"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex flex-1" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/pixtin.jpg" alt="Profile picture" width={40} height={40} className="rounded-full" />
            <span
              className="hidden font-bold sm:inline-block text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Adil Mukhi
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex-1 flex justify-end">
          <Button variant="outline" className="hidden md:inline-flex">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <div className="container py-4" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
            <Link href="#about" className="block py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#skills" className="block py-2" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#projects" className="block py-2" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#contact" className="block py-2" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/resume.pdf" className="block py-2" onClick={toggleMenu}>
              Resume
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

