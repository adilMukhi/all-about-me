"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { useState, useEffect } from "react"

const CalBookingScript = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://app.cal.com"});
      Cal.ns["15min"]("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#bbd3e5"},"dark":{"cal-brand":"#bbd3e5"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

const SpeakingEngagementsHero = () => (
  <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
    <div className="container">
      <h2
        className="text-4xl font-bold tracking-tighter text-center mb-16 sm:text-5xl md:text-6xl text-primary"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Speaking Engagements
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="text-xl leading-relaxed text-muted-foreground">
          Book Adil as your next speaker at your event/engagement.
        </p>

        <div className="text-left max-w-2xl mx-auto">
          <p className="text-lg mb-6 text-muted-foreground">He provides the following services:</p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
              <span className="text-muted-foreground">Presentations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
              <span className="text-muted-foreground">Workshops</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
              <span className="text-muted-foreground">Facilitation/Moderation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
              <span className="text-muted-foreground">Panels</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
              <span className="text-muted-foreground">Interviews</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
              <span className="text-muted-foreground">and more!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const ServicesHero = () => (
  <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
    <div className="container">
      <h1
        className="text-4xl font-bold tracking-tighter text-center mb-8 sm:text-5xl md:text-6xl text-primary"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        My Services
      </h1>
    </div>
  </section>
)

const ServicesAccordion = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const services = [
    {
      id: "youth-mental-health",
      title: "Youth Mental Health",
      content:
        "Specialized consulting and speaking services focused on youth mental health initiatives, program development, and community outreach. I work with organizations to develop comprehensive mental health support systems for young people.",
    },
    {
      id: "youth-engagement",
      title: "Youth Engagement",
      content:
        "Dynamic presentations and workshops designed to engage young audiences in meaningful conversations about health, education, and personal development. Perfect for schools, youth organizations, and community groups.",
    },
    {
      id: "education",
      title: "Education",
      content:
        "Educational consulting services including curriculum development, research methodology training, and academic program evaluation. I help educational institutions enhance their programs and student outcomes.",
    },
    {
      id: "others",
      title: "Others by Request!",
      content:
        "Custom consulting and speaking services tailored to your organization's specific needs. Whether it's research collaboration, program evaluation, or specialized presentations, I'm here to help.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleSection(service.id)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                {openSection === service.id ? (
                  <Minus className="h-6 w-6 text-primary" />
                ) : (
                  <Plus className="h-6 w-6 text-primary" />
                )}
              </button>
              {openSection === service.id && (
                <div className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{service.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <p className="text-muted-foreground mb-4">
              I offer both <strong>free and paid services</strong> depending on your organization's mission and
              non-profit status. All services are available both <strong>online and in-person</strong> anywhere in or
              around the <strong>Greater Toronto Area (GTA)</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              Contact me to discuss your specific needs and how we can work together.
            </p>
          </div>

          <Button
            size="lg"
            className="px-12 py-3 text-lg"
            data-cal-link="adilm.0/15min"
            data-cal-namespace="15min"
            data-cal-config='{"layout":"month_view","theme":"light"}'
          >
            Book
          </Button>
        </div>
      </div>
    </section>
  )
}

const PastEngagements = () => (
  <section className="py-16 bg-gradient-to-b from-background to-primary/5">
    <div className="container max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-8">Past Engagements</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <p className="font-medium">Lorem Ipsum Dolor Sit Amet Consectetur</p>
            <p className="text-sm text-muted-foreground">2024 - Adipiscing, Elit</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <p className="font-medium">Sed Do Eiusmod Tempor Incididunt Ut Labore</p>
            <p className="text-sm text-muted-foreground">2023 - Magna, Aliqua</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <p className="font-medium">Ut Enim Ad Minim Veniam Quis Nostrud</p>
            <p className="text-sm text-muted-foreground">2023 - Exercitation, Ullamco</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <p className="font-medium">Duis Aute Irure Dolor In Reprehenderit</p>
            <p className="text-sm text-muted-foreground">2022 - Voluptate, Velit</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <CalBookingScript />
      <Header />
      <h1 className="sr-only">Services - Adil Mukhi</h1>
      <AnimatedSection>
        <SpeakingEngagementsHero />
      </AnimatedSection>
      <AnimatedSection delay={50}>
        <ServicesHero />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <ServicesAccordion />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <PastEngagements />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
