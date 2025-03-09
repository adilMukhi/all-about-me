"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { navConfig } from "@/config/nav"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleExpanded = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title)
  }

  // Mobile navigation item with dropdown support
  const MobileNavItem = ({ item }: { item: any }) => {
    const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
    const hasItems = item.items && item.items.length > 0
    const isExpanded = expandedItem === item.title

    return (
      <div className="w-full">
        <div className="flex items-center justify-between">
          <Link
            href={item.href}
            className={cn(
              "block py-2 transition-colors",
              isActive ? "text-blue-500 font-medium" : "hover:text-blue-500",
            )}
            onClick={() => {
              if (!hasItems) {
                setIsMenuOpen(false)
              }
            }}
          >
            {item.title}
          </Link>
          {hasItems && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                toggleExpanded(item.title)
              }}
              className="p-2"
            >
              {isExpanded ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          )}
        </div>

        {/* Dropdown items */}
        {hasItems && isExpanded && (
          <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
            {item.items.map((subItem: any) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className={cn(
                  "block py-2 text-sm transition-colors",
                  pathname === subItem.href ? "text-blue-500 font-medium" : "hover:text-blue-500",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {subItem.title}
                {subItem.description && (
                  <span className="block text-xs text-muted-foreground">{subItem.description}</span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
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
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative z-50">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background">
          <div className="pt-20 pb-6 h-full overflow-y-auto">
            <div className="container">
              <nav className="flex flex-col space-y-4" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                {navConfig.mainNav.map((item) => (
                  <div key={item.title} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
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
        </div>
      )}
    </header>
  )
}

