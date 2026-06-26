"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { useState, useEffect } from "react"
import SocialLinks from "@/components/social-links"
import Image from "next/image"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import Script from "next/script"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

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

const InstagramEmbedScript = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}

const TikTokEmbedScript = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}

const SpeakingEngagementsHero = () => (
  <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
    <div className="container">
      <SEOBreadcrumbs items={[{ label: "Services", href: "/services", active: true }]} />
      <h2
        className="text-4xl font-bold tracking-tighter text-center mb-16 sm:text-5xl md:text-6xl text-primary"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Speaking Engagements & Consulting
      </h2>

      <div className="max-w-6xl mx-auto text-center space-y-8">
        <p className="text-xl leading-relaxed text-muted-foreground">
          Book Adil as your next speaker or consultant for your event, organization, or initiative.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
          If you are looking to hire a Mississauga youth public speaker, a Greater Toronto Area keynote speaker, or a
          youth advisor and consultant for workshops, panels, and strategy sessions, Adil works with schools,
          nonprofits, community groups, and organizations worldwide.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="text-left">
          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">What I Offer</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Speaking Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Keynote Presentations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Interactive Workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Panel Discussions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Event Facilitation & MC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Interviews</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Consulting Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Youth Advocacy & Engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Mental Health Program Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Policy Review & Feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Research Collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Educational Curriculum Input</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/50 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-primary mb-3">Paid Services</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  All speaking and consulting services are offered as <strong>paid engagements</strong>. Rates are
                  tailored based on your event scope, format, and required preparation.
                </p>
                <p>
                  <strong>Location:</strong> Available online worldwide or in-person (based in Greater Toronto Area, available for travel)
                </p>
              </div>
            </div>

            <div id="booking" className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/30">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h4 className="text-lg font-semibold text-primary">Approximate Rates</h4>
                <Button
                  size="lg"
                  className="px-12 py-3 text-lg font-semibold"
                  data-cal-link="adilm.0/15min"
                  data-cal-namespace="15min"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                >
                  Get your tailored rate
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">
                The rates below are approximate. All rates are <strong>tailored</strong> based on your specific needs, event scope, and preparation requirements. To discuss your project and receive an official quote, book a meeting below.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-base font-semibold text-primary mb-3">Public Speaking</h5>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">For-Profit Companies</p>
                      <ul className="ml-3 space-y-1 mt-1">
                        <li>• <strong>In-Person:</strong> $400/hour <span className="text-xs">(+ travel, accommodation, meals if needed)</span></li>
                        <li>• <strong>Online:</strong> $200/hour</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Non-Profit & Social Good</p>
                      <ul className="ml-3 space-y-1 mt-1">
                        <li>• <strong>In-Person:</strong> $200/hour <span className="text-xs">(+ travel, accommodation, meals if needed)</span></li>
                        <li>• <strong>Online:</strong> $100/hour</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-base font-semibold text-primary mb-3">Consulting Services</h5>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <ul className="space-y-2">
                        <li>• <strong>In-Person:</strong> $150/hour</li>
                        <li>• <strong>Online:</strong> $75/hour</li>
                      </ul>
                    </div>
                    <p className="text-xs italic mt-4">Minimum engagement varies by project scope</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start">
            <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1781722321176-f110d64b544a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Adil Mukhi speaking about AI"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
              <p className="text-xs text-muted-foreground text-center mt-2 italic">Speaking on AI topics</p>
            </div>
            <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1781722321115-bb3dcfd224cd?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Adil Mukhi at Kids Help Phone Walk"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <p className="text-xs text-muted-foreground text-center mt-2 italic">Leading Kids Help Phone Walk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ServicesStructuredData = () => {
  const siteUrl = "https://adilmukhi.vercel.app"

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Adil Mukhi",
        description:
          "Public speaking, youth advocacy, consulting, and advisory services focused on youth, education, mental health, and social impact.",
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/services`,
        url: `${siteUrl}/services`,
        name: "Speaking & Consulting Services – Adil Mukhi",
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
        about: {
          "@id": `${siteUrl}#adil`,
        },
        description:
          "Hire youth public speaker and consultant Adil Mukhi for keynotes, workshops, panels, MC, and youth advocacy consulting.",
        inLanguage: "en",
        breadcrumb: {
          "@id": `${siteUrl}/services#breadcrumb`,
        },
        mainEntity: {
          "@id": `${siteUrl}/services#professional-service`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          xpath: [
            "/html/head/title",
            "/html/body//h1",
            "/html/body//h2",
            "/html/body//section[@id='services']",
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": `${siteUrl}#website`,
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": `${siteUrl}/services`,
              name: "Services",
            },
          },
        ],
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}#adil`,
        name: "Adil Mukhi",
        url: siteUrl,
        givenName: "Adil",
        familyName: "Mukhi",
        jobTitle: "Public Speaker, Youth Advocate, Consultant, and Advisor",
        description:
          "Youth public speaker, advocate, and consultant specializing in youth leadership, mental health, education, policy, and community impact.",
        sameAs: [siteUrl],
        knowsAbout: [
          "Youth Leadership",
          "Youth Advocacy",
          "Youth Engagement",
          "Mental Health",
          "Mental Health Literacy",
          "Student Leadership",
          "Health Equity",
          "Healthcare Careers",
          "Medicine",
          "Medical Education",
          "Public Speaking",
          "Keynote Speaking",
          "Workshop Facilitation",
          "Master of Ceremonies",
          "Conference Facilitation",
          "Panel Moderation",
          "Education",
          "Educational Leadership",
          "Student Success",
          "Volunteer Management",
          "Volunteer Engagement",
          "Community Development",
          "Public Policy",
          "Youth Policy",
          "Artificial Intelligence in Education",
          "Research",
          "Knowledge Mobilization",
          "Health Research",
          "Community Health",
          "Nonprofit Leadership",
          "Social Impact",
          "Accessibility",
          "Disability Advocacy",
          "Cochlear Implant Awareness",
          "Sports Policy",
          "Future of Healthcare",
          "Future of Education",
          "Career Development",
          "Mentorship",
          "Science Communication",
          "Global Citizenship",
          "Civic Engagement",
          "Advocacy Campaigns",
        ],
        areaServed: [
          {
            "@type": "Country",
            name: "Canada",
          },
          {
            "@type": "Country",
            name: "United States",
          },
          {
            "@type": "Country",
            name: "United Kingdom",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
          {
            "@type": "AdministrativeArea",
            name: "Ontario",
          },
          {
            "@type": "City",
            name: "Mississauga",
          },
          {
            "@type": "City",
            name: "Toronto",
          },
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
        ],
        award: [
          "Ontario Volunteer Service Award",
          "Top 50 Youth in Canada",
          "Canadian Biology Olympiad Bronze Medal",
          "Canadian Computing Competition Distinction",
          "Beaver Computing Challenge Distinction",
          "TEDx Speaker",
          "Published Author",
        ],
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Public Speaker",
            description:
              "Keynote speaker, guest speaker, conference speaker, and youth-focused presenter for schools, organizations, and events.",
          },
          {
            "@type": "Occupation",
            name: "Consultant and Advisor",
            description:
              "Youth advisory, policy feedback, curriculum input, and strategic consulting for organizations and institutions.",
          },
          {
            "@type": "Occupation",
            name: "Youth Advocate",
            description:
              "Advocacy for youth mental health, education, accessibility, and social impact across communities and institutions.",
          },
        ],
        memberOf: [
          {
            "@id": `${siteUrl}#dr-interested`,
          },
          {
            "@id": `${siteUrl}#future-interested`,
          },
        ],
        hasOfferCatalog: {
          "@id": `${siteUrl}/services#offer-catalog`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}#dr-interested`,
        name: "Dr. Interested",
        description:
          "Youth-led initiative and organization focused on curiosity, learning, and future-focused education and health exploration.",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}#future-interested`,
        name: "Future Interested",
        description:
          "Youth organization and platform empowering students to explore future careers, education, and social impact pathways.",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/services#professional-service`,
        name: "Professional Speaking and Consulting Services",
        provider: {
          "@id": `${siteUrl}#adil`,
        },
        serviceType: "Public Speaking and Consulting",
        areaServed: [
          {
            "@type": "Country",
            name: "Canada",
          },
          {
            "@type": "Country",
            name: "United States",
          },
          {
            "@type": "Country",
            name: "United Kingdom",
          },
          {
            "@type": "Country",
            name: "Australia",
          },
          {
            "@type": "AdministrativeArea",
            name: "Ontario",
          },
          {
            "@type": "City",
            name: "Mississauga",
          },
          {
            "@type": "City",
            name: "Toronto",
          },
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: [
            "Schools",
            "School Boards",
            "Universities",
            "Colleges",
            "Students",
            "Teachers",
            "Parents",
            "Healthcare Organizations",
            "Hospitals",
            "Medical Schools",
            "Governments",
            "Municipal Governments",
            "Federal Organizations",
            "Youth Organizations",
            "Community Organizations",
            "Foundations",
            "Nonprofits",
            "Corporations",
            "Professional Associations",
            "Conferences",
            "Summits",
            "Libraries",
            "Sports Organizations",
            "Mental Health Organizations",
            "Volunteer Organizations",
            "Research Institutes",
          ],
        },
        hasOfferCatalog: {
          "@id": `${siteUrl}/services#offer-catalog`,
        },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${siteUrl}/services#offer-catalog`,
        name: "Professional Speaking & Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            "@id": `${siteUrl}/services#offer-keynote-speaking`,
            itemOffered: {
              "@id": `${siteUrl}/services#service-keynote-speaking`,
            },
            priceSpecification: [
              {
                "@type": "PriceSpecification",
                price: "400",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "InPerson",
                description:
                  "Approximate in-person keynote speaking rate for for-profit companies, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "Online",
                description: "Approximate online keynote speaking rate for for-profit companies.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "InPerson",
                description:
                  "Approximate in-person keynote speaking rate for nonprofits and social good organizations, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "100",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "Online",
                description: "Approximate online keynote speaking rate for nonprofits and social good organizations.",
              },
            ],
            url: `${siteUrl}/services#booking`,
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/services#offer-workshops`,
            itemOffered: {
              "@id": `${siteUrl}/services#service-interactive-workshops`,
            },
            priceSpecification: [
              {
                "@type": "PriceSpecification",
                price: "400",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "InPerson",
                description:
                  "Approximate in-person interactive workshop rate for for-profit companies, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "Online",
                description: "Approximate online interactive workshop rate for for-profit companies.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "InPerson",
                description:
                  "Approximate in-person interactive workshop rate for nonprofits and social good organizations, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "100",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "Online",
                description: "Approximate online interactive workshop rate for nonprofits and social good organizations.",
              },
            ],
            url: `${siteUrl}/services#booking`,
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/services#offer-panel-discussions`,
            itemOffered: {
              "@id": `${siteUrl}/services#service-panel-discussions`,
            },
            priceSpecification: [
              {
                "@type": "PriceSpecification",
                price: "400",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "InPerson",
                description:
                  "Approximate in-person panel speaking or moderation rate for for-profit companies, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "Online",
                description: "Approximate online panel speaking or moderation rate for for-profit companies.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "InPerson",
                description:
                  "Approximate in-person panel speaking or moderation rate for nonprofits and social good organizations, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "100",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "Online",
                description:
                  "Approximate online panel speaking or moderation rate for nonprofits and social good organizations.",
              },
            ],
            url: `${siteUrl}/services#booking`,
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/services#offer-event-mc`,
            itemOffered: {
              "@id": `${siteUrl}/services#service-event-facilitation-mc`,
            },
            priceSpecification: [
              {
                "@type": "PriceSpecification",
                price: "400",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "InPerson",
                description:
                  "Approximate in-person event facilitation and MC rate for for-profit companies, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "Online",
                description: "Approximate online event facilitation and MC rate for for-profit companies.",
              },
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "InPerson",
                description:
                  "Approximate in-person event facilitation and MC rate for nonprofits and social good organizations, plus travel, accommodation, and meals if needed.",
              },
              {
                "@type": "PriceSpecification",
                price: "100",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "Online",
                description:
                  "Approximate online event facilitation and MC rate for nonprofits and social good organizations.",
              },
            ],
            url: `${siteUrl}/services#booking`,
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/services#offer-interviews`,
            itemOffered: {
              "@id": `${siteUrl}/services#service-interviews`,
            },
            priceSpecification: [
              {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "CAD",
                eligibleCustomerType: "For-Profit Company",
                priceType: "Online",
                description:
                  "Approximate online interview, podcast guest, or media appearance rate for for-profit organizations.",
              },
              {
                "@type": "PriceSpecification",
                price: "100",
                priceCurrency: "CAD",
                eligibleCustomerType: "Nonprofit Organization",
                priceType: "Online",
                description:
                  "Approximate online interview, podcast guest, or media appearance rate for nonprofits and social good organizations.",
              },
            ],
            url: `${siteUrl}/services#booking`,
          },
          {
            "@type": "Offer",
            "@id": `${siteUrl}/services#offer-consulting`,
            itemOffered: {
              "@id": `${siteUrl}/services#service-consulting`,
            },
            priceSpecification: [
              {
                "@type": "PriceSpecification",
                price: "150",
                priceCurrency: "CAD",
                eligibleCustomerType: "Organization",
                priceType: "InPerson",
                description:
                  "Approximate in-person consulting rate for youth advocacy, engagement, policy review, research collaboration, and curriculum input.",
              },
              {
                "@type": "PriceSpecification",
                price: "75",
                priceCurrency: "CAD",
                eligibleCustomerType: "Organization",
                priceType: "Online",
                description:
                  "Approximate online consulting rate for youth advocacy, engagement, policy review, research collaboration, and curriculum input.",
              },
            ],
            url: `${siteUrl}/services#booking`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services#service-keynote-speaking`,
        name: "Keynote Speaking",
        serviceType: "Keynote Speaker",
        provider: {
          "@id": `${siteUrl}#adil`,
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
          {
            "@type": "City",
            name: "Mississauga",
          },
          {
            "@type": "City",
            name: "Toronto",
          },
          {
            "@type": "AdministrativeArea",
            name: "Ontario",
          },
          {
            "@type": "Country",
            name: "Canada",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: [
            "Schools",
            "School Boards",
            "Universities",
            "Colleges",
            "Youth Organizations",
            "Community Organizations",
            "Healthcare Organizations",
            "Nonprofits",
            "Corporations",
            "Conferences",
            "Summits",
          ],
        },
        description:
          "Keynote presentations on youth leadership, mental health, education, social impact, accessibility, and future of healthcare and education.",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services#service-interactive-workshops`,
        name: "Interactive Workshops",
        serviceType: "Workshop Facilitation",
        provider: {
          "@id": `${siteUrl}#adil`,
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
          {
            "@type": "City",
            name: "Mississauga",
          },
          {
            "@type": "City",
            name: "Toronto",
          },
          {
            "@type": "AdministrativeArea",
            name: "Ontario",
          },
          {
            "@type": "Country",
            name: "Canada",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: [
            "Students",
            "Teachers",
            "Parents",
            "Youth Organizations",
            "Community Organizations",
            "Mental Health Organizations",
            "Volunteer Organizations",
          ],
        },
        description:
          "Interactive workshops on youth mental health literacy, leadership, advocacy, global citizenship, civic engagement, and career development.",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services#service-panel-discussions`,
        name: "Panel Discussions",
        serviceType: ["Panel Speaker", "Panel Moderator"],
        provider: {
          "@id": `${siteUrl}#adil`,
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
          {
            "@type": "City",
            name: "Mississauga",
          },
          {
            "@type": "City",
            name: "Toronto",
          },
          {
            "@type": "AdministrativeArea",
            name: "Ontario",
          },
          {
            "@type": "Country",
            name: "Canada",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: [
            "Conferences",
            "Summits",
            "Professional Associations",
            "Youth Organizations",
            "Community Organizations",
            "Governments",
          ],
        },
        description:
          "Panel speaking and moderation on youth policy, health equity, education, accessibility, social impact, and future-focused topics.",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services#service-event-facilitation-mc`,
        name: "Event Facilitation & MC",
        serviceType: ["Master of Ceremonies", "Host", "Conference Facilitator"],
        provider: {
          "@id": `${siteUrl}#adil`,
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
          {
            "@type": "City",
            name: "Mississauga",
          },
          {
            "@type": "City",
            name: "Toronto",
          },
          {
            "@type": "AdministrativeArea",
            name: "Ontario",
          },
          {
            "@type": "Country",
            name: "Canada",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: [
            "Conferences",
            "Summits",
            "Schools",
            "Universities",
            "Youth Organizations",
            "Community Organizations",
          ],
        },
        description:
          "Event facilitation, hosting, and MC services for youth events, conferences, summits, and community gatherings.",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services#service-interviews`,
        name: "Interviews & Media Appearances",
        serviceType: ["Podcast Guest", "Interview Guest", "Webinar Speaker"],
        provider: {
          "@id": `${siteUrl}#adil`,
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: [
            "Podcasts",
            "Media Outlets",
            "Webinar Hosts",
            "Online Conferences",
          ],
        },
        description:
          "Interviews, podcast guest appearances, and webinar speaking on youth advocacy, mental health, education, and social impact.",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services#service-consulting`,
        name: "Youth Advocacy & Consulting",
        serviceType: [
          "Consultant",
          "Advisor",
          "Youth Advisor",
          "Strategic Advisor",
          "Research Collaborator",
          "Curriculum Reviewer",
          "Policy Consultant",
        ],
        provider: {
          "@id": `${siteUrl}#adil`,
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Worldwide (Virtual)",
          },
          {
            "@type": "Country",
            name: "Canada",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: [
            "Governments",
            "School Boards",
            "Universities",
            "Colleges",
            "Healthcare Organizations",
            "Nonprofits",
            "Foundations",
            "Youth Organizations",
            "Research Institutes",
          ],
        },
        description:
          "Consulting services in youth advocacy and engagement, mental health program development, policy review and feedback, research collaboration, and educational curriculum input.",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/services#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I hire Adil Mukhi as a public speaker in Mississauga or the Greater Toronto Area?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Adil Mukhi is available for speaking engagements in Mississauga, Toronto, the Greater Toronto Area, and worldwide (virtual).",
            },
          },
          {
            "@type": "Question",
            name: "Does Adil provide both speaking and consulting services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Adil offers keynote speaking, interactive workshops, panels, event facilitation and MC, interviews, and consulting services including youth advocacy, mental health program development, policy review, research collaboration, and curriculum input.",
            },
          },
          {
            "@type": "Question",
            name: "What topics does Adil speak on?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adil speaks on youth leadership, youth advocacy, mental health and mental health literacy, education, student success, health equity, accessibility, disability advocacy, cochlear implant awareness, global citizenship, civic engagement, social impact, and the future of healthcare and education.",
            },
          },
          {
            "@type": "Question",
            name: "What audiences does Adil work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adil works with schools, school boards, universities, colleges, students, teachers, parents, youth organizations, community organizations, nonprofits, foundations, healthcare organizations, hospitals, medical schools, governments, corporations, professional associations, conferences, summits, sports organizations, mental health organizations, volunteer organizations, and research institutes.",
            },
          },
          {
            "@type": "Question",
            name: "Are Adil’s speaking and consulting services paid?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All speaking and consulting services are offered as paid engagements. Rates are tailored based on event scope, format, audience, and preparation requirements, with approximate hourly rates provided for for-profit and nonprofit organizations.",
            },
          },
          {
            "@type": "Question",
            name: "What are the approximate speaking rates for for-profit organizations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For for-profit organizations, approximate rates are $400/hour for in-person speaking (plus travel, accommodation, and meals if needed) and $200/hour for online speaking.",
            },
          },
          {
            "@type": "Question",
            name: "What are the approximate speaking rates for nonprofits and social good organizations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For nonprofits and social good organizations, approximate rates are $200/hour for in-person speaking (plus travel, accommodation, and meals if needed) and $100/hour for online speaking.",
            },
          },
          {
            "@type": "Question",
            name: "What are the approximate consulting rates?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Consulting services are approximately $150/hour for in-person engagements and $75/hour for online engagements. Minimum engagement varies by project scope.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Adil based and does he offer virtual services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adil is based in the Greater Toronto Area (Mississauga, Ontario) and offers both in-person services locally and virtual services worldwide.",
            },
          },
          {
            "@type": "Question",
            name: "How can I get a tailored quote for my event or project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can request a tailored quote by booking a meeting or contacting Adil through the services page to discuss your event scope, audience, format, and preparation needs.",
            },
          },
        ],
      },
    ],
  }

  return (
    <Script id="services-schema" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

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
      id: "youth",
      title: "Youth",
      content:
        "Specialized consulting and speaking services focused on youth engagement, advocacy, and empowerment. I work with organizations to develop comprehensive youth programs, facilitate meaningful youth participation in decision-making, and create engaging presentations that resonate with young audiences.",
    },
    {
      id: "mental-health",
      title: "Mental Health",
      content:
        "Mental health advocacy and program development with a focus on youth mental wellness. Drawing from extensive experience with research organizations and advocacy groups, I provide consulting on mental health initiatives, community outreach programs, and evidence-based support systems.",
    },
    {
      id: "sports",
      title: "Sports",
      content:
        "Sports-related consulting and speaking services, including youth sports development, policy recommendations, and advocacy work. I contribute to discussions on the future of sport and help organizations create inclusive, healthy sporting environments for young people.",
    },
    {
      id: "policy",
      title: "Policy",
      content:
        "Policy consultation and review services with a youth perspective. I provide feedback on policy development, participate in roundtables and consultations, and help organizations understand how policies impact young people. Experience includes work with government agencies and advocacy organizations.",
    },
    {
      id: "education-research",
      title: "Education & Research",
      content:
        "Educational consulting services including curriculum development, research methodology training, and academic program evaluation. I help educational institutions enhance their programs through evidence-based approaches and collaborate on research projects focused on youth outcomes.",
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      content:
        "Tailored consulting and speaking services designed around your organization's specific needs. Whether it's program evaluation, research collaboration, specialized presentations on emerging topics, or unique advocacy initiatives, I work with you to create solutions that fit your goals and audience.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Service Areas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection(service.id)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                {openSection === service.id ? (
                  <Minus className="h-6 w-6 text-primary" />
                ) : (
                  <Plus className="h-6 w-6 text-primary" />
                )}
              </button>
              {openSection === service.id && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{service.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div id="booking" className="mt-12 text-center scroll-mt-24">
          <div className="bg-primary/5 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The button below is for connecting with me to discuss your event. Use it if you'd like to explore working
              together, confirm details, or invite me to speak or consult. I'll work with you to understand your needs
              and create a customized approach that fits your organization and budget.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Let's discuss how we can make your event or initiative impactful and engaging.
            </p>
          </div>

          <Button
            size="lg"
            className="px-12 py-3 text-lg font-semibold"
            data-cal-link="adilm.0/15min"
            data-cal-namespace="15min"
            data-cal-config='{"layout":"month_view","theme":"light"}'
          >
            👉 Work With Me
          </Button>
        </div>
      </div>
    </section>
  )
}

const PastEngagements = () => (
  <section className="py-16 bg-gradient-to-b from-background to-primary/5">
    <div className="container max-w-6xl ml-auto pr-8">
      <h2 className="text-3xl font-bold text-primary mb-8">Past Engagements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Speaking Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6">Speaking</h3>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src="/ZeynepKaya.jpg"
                alt="Zeynep Kaya"
                width={60}
                height={60}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-muted-foreground italic">
                  "Adil was truly an inspiring presence. His words of advice were like that of a brother's, sweet and
                  heartfelt. We felt seen and heard by listening to his story and got an idea of how to pave our own
                  way."
                </p>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-primary">Zeynep Kaya</p>
              <p className="text-muted-foreground">Cyber Valkyries / Keynote Coordinator</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Guest Speaker for the NACY Emerging Leaders Group</p>
                <p className="text-sm text-muted-foreground">July 2025 - NACY</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Tedx Speaker: Stress, Memory, and Why You Can't Find Your Keys</p>
                <p className="text-sm text-muted-foreground">July 2025 - TEDxMcFarren</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Keynote Speaker: MockTank and CyberValkyrie Cybersecurity Summit</p>
                <p className="text-sm text-muted-foreground">September 7, 2025 · MockTank and CyberValkyries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">1st Place – Story Slam Awards Ceremony and Readout</p>
                <p className="text-sm text-muted-foreground">September 2025 - Mississauga Literary Festival.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Speaker in World Youth Skills Day Message</p>
                <p className="text-sm text-muted-foreground">2025 - Results Canada</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Speaker at Results Canada November AKO: How to Publish LTEs</p>
                <p className="text-sm text-muted-foreground">November 2025 - Results Canada</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Panel Speaker for the Results Action Kickoff</p>
                <p className="text-sm text-muted-foreground">May 2025 - Results Canada</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Guest Speaker on the BEYOND THE HELIX Podcast</p>
                <p className="text-sm text-muted-foreground">August 2025 - MediQuills & Revitalized Medicine</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">SDG Accelerator Program Facilitator</p>
                <p className="text-sm text-muted-foreground">2025 - Children First Canada</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Commencement Speech at Culture and Psychology Conference</p>
                <p className="text-sm text-muted-foreground">October 2025 - Dr. Interested</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Grade 11 Speaker for IB Info Night</p>
                <p className="text-sm text-muted-foreground">October 2025 - Glenforest Secondary School</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">MC, Resilient Minds</p>
                <p className="text-sm text-muted-foreground">April 2025 - Dr. Interested & YSA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">AMA with the ED of Dr. Interested</p>
                <p className="text-sm text-muted-foreground">August 2025 - Dr. Interested</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">MC, WOW Program</p>
                <p className="text-sm text-muted-foreground">September 2025 - DBNC</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">MC, Job/Volunteer Fair</p>
                <p className="text-sm text-muted-foreground">March 2024 - Volunteer MBC</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Speaker, GFSS Staff Meeting</p>
                <p className="text-sm text-muted-foreground">April 13, 2026 - Glenforest Secondary School</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Speaking at the Global Youth Summit</p>
                <p className="text-sm text-muted-foreground">April 18, 2026 - The World is Your Bowl of Noodles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6">Consulting as a Youth Advocate</h3>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src="/MichaelFurdyk.jpg"
                alt="Michael Furdyk"
                width={60}
                height={60}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="text-muted-foreground italic">
                  "We appreciate [Adil's] insights in your review of our new Artificial Intelligence lessons and
                  curriculum modules, helping us tailor them to students across middle and high school."
                </p>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-primary">Michael Furdyk</p>
              <p className="text-muted-foreground">Co-founder & Director of Innovation, TakingITGlobal</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Children's Privacy Code Consultation</p>
                <p className="text-sm text-muted-foreground">
                  July 2025 - Office of the Privacy Commissioner of Canada
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Highlighted in Presentation at Clinton Global Initiative Annual Meeting</p>
                <p className="text-sm text-muted-foreground">September 2025 - Project Green Challenge</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">UN Article on Children's Digital Rights</p>
                <p className="text-sm text-muted-foreground">November 20, 2025 - United Nations OHCHR (5Rights Program)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Supporter & Signatory: Upcoming Youth Mental Health Report</p>
                <p className="text-sm text-muted-foreground">November 20, 2025 - UN Youth Office & UNU-IIGH</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Submitted Youth Mental Health Video</p>
                <p className="text-sm text-muted-foreground">
                  September 2025 - United Nations Youth Office, Youth Mental Health & Well-Being
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Youth Tech Consultation</p>
                <p className="text-sm text-muted-foreground">August 2025 - UNICEF</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Contributor, OPTIMAL (CIHR Healthy Youth Team Grant)</p>
                <p className="text-sm text-muted-foreground">2025 - SickKids & YCRH</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Youth Advocate, Future of Sport Commission Recommendations</p>
                <p className="text-sm text-muted-foreground">2025 - UofTKPE</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Op-Ed Highlight, Policy in the Age of AI</p>
                <p className="text-sm text-muted-foreground">July 2025 - NACY</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Youth Collective Member</p>
                <p className="text-sm text-muted-foreground">2025 - University of Toronto, Faculty of KPE</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Youth Reviewer, Raising Canada Report</p>
                <p className="text-sm text-muted-foreground">2024 - Children First Canada</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Mental Health Focus Group</p>
                <p className="text-sm text-muted-foreground">
                  2024 - University of Western Ontario & School Mental Health Ontario
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Participant, Right to a Healthy Environment Roundtable</p>
                <p className="text-sm text-muted-foreground">2024 - Break the Divide</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Youth Council Member</p>
                <p className="text-sm text-muted-foreground">2024–2025 - Eco Brothers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">And my other work as a member of the YCRH, the NYAC of the MDSC, and CFC</p>
                <p className="text-sm text-muted-foreground">Ongoing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const WatchMeSpeak = () => (
  <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
    <div className="container max-w-6xl">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Watch Me Speak</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* YouTube Shorts */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[9/16] max-w-[315px] overflow-hidden rounded-lg">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/PvS46xFqAtc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Instagram Reel */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[9/16] max-w-[315px] overflow-hidden rounded-lg">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DQIECglD4iO/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "0 auto",
                maxWidth: "315px",
                minWidth: "315px",
                padding: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href="https://www.instagram.com/reel/DQIECglD4iO/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: 0,
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this post on Instagram
                </a>
              </div>
            </blockquote>
          </div>
        </div>

        {/* TikTok */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[9/16] max-w-[315px] overflow-hidden rounded-lg">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@adilm.0/video/7564888481281920263"
              data-video-id="7564888481281920263"
              style={{
                maxWidth: "315px",
                minWidth: "315px",
                margin: "0 auto",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <section>
                <a
                  target="_blank"
                  title="@adilm.0"
                  href="https://www.tiktok.com/@adilm.0?refer=embed"
                  rel="noopener noreferrer"
                >
                  @adilm.0
                </a>
              </section>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default function ClientServicesPage() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <CalBookingScript />
      <InstagramEmbedScript />
      <TikTokEmbedScript />
      <Header />
      <ServicesStructuredData />
      <h1 className="sr-only">Adil Mukhi - Public Speaker, Advisor, and Consultant in Mississauga and the Greater Toronto Area</h1>
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
      <AnimatedSection delay={225}>
        <WatchMeSpeak />
      </AnimatedSection>
      <AnimatedSection delay={250}>
        <SocialLinks />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
