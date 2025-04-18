import type { Metadata } from "next"
import { portfolioMetadata } from "../page-metadata"
import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { FileText, Code, Palette, Microscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = portfolioMetadata

export default function PortfolioPage() {
  const portfolioCategories = [
    {
      title: "Writing",
      description: "Published works and articles",
      icon: FileText,
      image: "/portfolio/writing.jpg",
      href: "/portfolio/writing",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Coding",
      description: "Software development projects",
      icon: Code,
      image: "/portfolio/coding.jpg",
      href: "/portfolio/coding",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Art & Sports",
      description: "Creative works and athletic achievements",
      icon: Palette,
      image: "/portfolio/art-sports.jpg",
      href: "/portfolio/art-sports",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Research",
      description: "Academic and scientific research",
      icon: Microscope,
      image: "/portfolio/research.jpg",
      href: "/portfolio/research",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <h1
              className="text-4xl font-bold tracking-tighter text-center mb-8 sm:text-5xl md:text-6xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              My Portfolios
            </h1>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
              Explore my diverse collection of work across different disciplines and interests.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {portfolioCategories.map((category) => (
                <Link href={category.href} key={category.title} className="block">
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="relative h-64">
                      <Image
                        src={category.image || "/placeholder.svg?height=200&width=400"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                        <h2
                          className="text-4xl md:text-5xl font-bold mb-4"
                          style={{ fontFamily: "'Bubblegum Sans', cursive" }}
                        >
                          {category.title}
                        </h2>
                        <p className="text-lg md:text-xl text-white/90">{category.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}

