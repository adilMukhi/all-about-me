"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { navConfig } from "@/config/nav"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Add this component inside the Header component
  const MobileNavItem = ({ item }: { item: any }) => {
    const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

    return (
      <Link
        href={item.href}
        className={`block py-2 transition-colors ${isActive ? "text-blue-500 font-medium" : "hover:text-blue-500"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
          <Link href="/" className="mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/pixtin.jpg" alt="Profile picture" width={40} height={40} className="rounded-full" />
            <span
              className="hidden font-bold sm:inline-block text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-hover-effect"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Adil Mukhi
            </span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <MainNav items={navConfig.mainNav} />
        </div>
        <div className="flex-1 flex justify-end">
          <Button className="hidden md:inline-flex button-hover-effect">
            <a
              href="https://drive.google.com/file/d/1xIuHrE6H3Lf-Oj3S-PrXI15dIHi9XtDi/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 pt-16">
          <div className="container py-6">
            <nav className="flex flex-col space-y-4" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
              {navConfig.mainNav.map((item) => (
                <div key={item.title} className="mb-2">
                  <MobileNavItem item={item} />
                </div>
              ))}
              <div className="pt-4 mt-4 border-t">
                <Button className="w-full button-hover-effect">
                  <a
                    href="https://drive.google.com/file/d/1xIuHrE6H3Lf-Oj3S-PrXI15dIHi9XtDi/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Resume
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

