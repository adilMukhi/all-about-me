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
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/profile-pic.jpg" alt="Profile picture" width={32} height={32} className="rounded-full" />
            <span className="hidden font-bold sm:inline-block">Your Name</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">{/* Theme toggle button removed */}</nav>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <div className="container py-4">
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
          </div>
        </nav>
      )}
    </header>
  )
}

