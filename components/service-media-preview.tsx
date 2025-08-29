import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Newspaper } from "lucide-react"

const ServiceMediaPreview = () => {
  return (
    <section className="container py-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Services & Media
      </h2>
      <div className="grid md:grid-cols-2 gap-8 h-full">
        {/* Services Preview */}
        <div className="bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 card-hover-effect rounded-lg p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
              Services
            </h3>
          </div>

          <div className="flex-1 space-y-4 mb-6">
            <p className="text-muted-foreground leading-relaxed">
              Book Adil for speaking engagements, workshops, and consulting services focused on youth mental health,
              education, and community engagement.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-muted-foreground">Youth Mental Health Consulting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-muted-foreground">Educational Workshops</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-muted-foreground">Speaking Engagements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm text-muted-foreground">Panel Discussions & More</span>
              </div>
            </div>
          </div>

          <Link href="/services">
            <Button className="w-full group button-hover-effect relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
          </Link>
        </div>

        {/* Media Preview */}
        <div className="bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 card-hover-effect rounded-lg p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
              Media
            </h3>
          </div>

          <div className="flex-1 space-y-4 mb-6">
            <p className="text-muted-foreground leading-relaxed">
              Discover media coverage and press articles featuring Adil's work in youth mental health, community
              initiatives, and research contributions.
            </p>

            <div className="space-y-3">
              <div className="border-l-2 border-primary/20 pl-4">
                <h4 className="font-medium text-sm text-primary">Featured Publications</h4>
                <p className="text-xs text-muted-foreground">The Global Indian, Rising Phenom Magazine, and More!</p>
              </div>
              <div className="border-l-2 border-primary/20 pl-4">
                <h4 className="font-medium text-sm text-primary">Recent Coverage</h4>
                <p className="text-xs text-muted-foreground">Youth mental health initiatives and community impact</p>
              </div>
              <div className="border-l-2 border-primary/20 pl-4">
                <h4 className="font-medium text-sm text-primary">Media Appearances</h4>
                <p className="text-xs text-muted-foreground">Interviews, panels, and feature stories</p>
              </div>
            </div>
          </div>

          <Link href="/media">
            <Button variant="secondary" className="w-full group button-hover-effect relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                View Media Coverage
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceMediaPreview
