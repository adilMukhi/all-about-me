"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { navConfig } from "@/config/nav"
import { blogPosts } from "@/data/blog-posts"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Add this component inside the Header component
  const MobileNavItem = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false)
    const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

    // Don't show dropdown for Background
    if (item.title === "Background") {
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
      <>
        <div className="flex items-center justify-between py-2">
          <Link
            href={item.href}
            className={`hover:text-blue-500 transition-colors ${isActive ? "text-blue-500 font-medium" : ""}`}
            onClick={(e) => {
              if (item.items && item.items.length > 0) {
                e.preventDefault()
              } else {
                setIsMenuOpen(false)
              }
            }}
          >
            {item.title}
          </Link>
          {item.items && item.items.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
            >
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          )}
        </div>

        {isOpen && item.items && item.items.length > 0 && (
          <div className="pl-4">
            {item.title === "Experiences"
              ? // Show only the latest 3 blog posts
                blogPosts
                  .slice(0, 3)
                  .map((post) => (
                    <Link
                      key={post.slug}
                      href={`/experiences/${post.slug}`}
                      className={`block py-2 transition-colors ${
                        pathname === `/experiences/${post.slug}` ? "text-blue-500 font-medium" : "hover:text-blue-500"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {post.title}
                    </Link>
                  ))
              : item.items.map((subItem: any) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className={`block py-2 transition-colors ${
                      pathname === subItem.href ? "text-blue-500 font-medium" : "hover:text-blue-500"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                ))}
          </div>
        )}
      </>
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
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="fixed top-16 left-0 right-0 bottom-0 z-50 overflow-y-auto">
            <nav className="md:hidden">
              <div className="container py-4 relative" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute right-4 top-4"
                >
                  <X />
                </Button>

                {navConfig.mainNav.map((item) => (
                  <div key={item.title} className="mb-2">
                    <MobileNavItem item={item} />
                  </div>
                ))}

                <div className="mt-6">
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
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

