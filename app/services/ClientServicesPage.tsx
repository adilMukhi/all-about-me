"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { useState, useEffect } from "react"
import SocialLinks from "@/components/social-links"
import Image from "next/image"

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
      <h2
        className="text-4xl font-bold tracking-tighter text-center mb-16 sm:text-5xl md:text-6xl text-primary"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Speaking Engagements & Consulting
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="text-xl leading-relaxed text-muted-foreground">
          Book Adil as your next speaker or consultant for your event, organization, or initiative.
        </p>

        <div className="text-left max-w-3xl mx-auto">
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
              <h4 className="text-lg font-semibold text-primary mb-3">💰 Free Services</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  All speaking and consulting services are offered at <strong>no cost</strong> to support meaningful
                  causes and organizations.
                </p>
                <p>
                  <strong>Location:</strong> Available online worldwide or in-person in the Greater Toronto Area (GTA)
                </p>
              </div>
            </div>
          </div>
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

        <div className="mt-12 text-center">
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
                <p className="font-medium">Valedictorian, Grade 8 Graduation</p>
                <p className="text-sm text-muted-foreground">June 2023 - The Valleys Sr. PS</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">And many other Dr. Interested and club events</p>
                <p className="text-sm text-muted-foreground">Various dates</p>
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
