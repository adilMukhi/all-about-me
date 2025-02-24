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
        <div className="mr-4 hidden md:flex" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/pixtin.jpg" alt="Profile picture" width={40} height={40} className="rounded-full" />
            <span className="hidden font-bold sm:inline-block" style={{ fontFamily: "Sour Gummy, latin", fontSize: "18px"}}>Adil Mukhi</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium" style={{ fontSize: "16px" }}>
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
          <div className="container py-4" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
            <Link href="#about" className="block py-2" onClick={toggleMenu} style={{ fontSize: "16px" }}>
              About
            </Link>
            <Link href="#skills" className="block py-2" onClick={toggleMenu} style={{ fontSize: "16px" }}>
              Skills
            </Link>
            <Link href="#projects" className="block py-2" onClick={toggleMenu} style={{ fontSize: "16px" }}>
              Projects
            </Link>
            <Link href="#contact" className="block py-2" onClick={toggleMenu} style={{ fontSize: "16px" }}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

