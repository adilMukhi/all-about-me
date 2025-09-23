import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Peace Mukazi Ndekezi, Ph.D.",
    role: "PhD in Conflict Studies | Women-Led Peacebuilding & Community-Based Approaches",
    relationship: "Senior Colleague",
    timeKnown: "September 2025",
    connection: "Results Canada volunteer collaboration",
    testimonial:
      "I've had the privilege of working with Adil through Results Canada and am continually impressed by his leadership, dedication, and advocacy. As High-School Advocacy Group Lead, he guided 49 members nationwide, contributing 200+ hours and publishing 12+ LTEs. His public-speaking and communication skills, including panel presentations, inspire and drive meaningful action. Adil consistently brings dedication, insight, and heart to everything he does.",
    image: "/Peace-Mukazi-Ndekei.jpg",
  },
  {
    name: "Kai Flicker",
    role: "Youth Program Coordinator at Children First Canada",
    relationship: "Direct Manager",
    timeKnown: "September 2025",
    connection: "SDG Accelerator Program Facilitator",
    testimonial:
      "Adil was an exceptional facilitator for the SDG Accelerator Program, demonstrating responsibility, preparation, and initiative. He guided youth through complex ideas with patience and clarity, fostering an inclusive and engaging learning environment. His confidence and professionalism set a strong example for both peers and participants.",
    image: "/KaiFlicker.jpg",
  },
  {
    name: "Zeynep Kaya",
    role: "Cyber Valkyries Founder & CEO",
    relationship: "Speaker at their event",
    timeKnown: "September 2025",
    connection: "Keynote Speaker at CyberValkyrie Cybersecurity Summit",
    testimonial:
      "Adil was truly an inspiring presence in the webinar. His words of advice were like that of a brother's, sweet and heartfelt. Not only did we feel seen and heard by listening to his story, but we also got an idea of how to pave our own way. I'll be forever grateful for Adil's participation as a speaker.",
    image: "/ZeynepKaya.jpeg",
  },
  {
    name: "Favour Yakubu",
    role: "President, Harmony Health Initiative",
    relationship: "Direct Manager",
    timeKnown: "September 2025",
    connection: "Assistant Director of Publications, HHI",
    testimonial:
      "Adil consistently produces high-quality health magazines and newsletters, ensuring well-written, factual articles. His creativity, attention to detail, and ability to meet deadlines make him an indispensable team member. He is a creative, talented, and reliable leader, and would be an asset to any community.",
    image: "/HHI.jpg",
  },
  {
    name: "Riya Dutta",
    role: "Founder & CEO @ Restoring Rainbows Southlake",
    relationship: "Direct Manager",
    timeKnown: "October 2024",
    connection: "Research Aid for international research collaboration",
    testimonial:
      "I directly managed Adil as a Research Aid, and he consistently impressed with his proactive mindset, attention to detail, and professionalism. He approaches tasks with precision and thoughtfulness, follows through reliably, and communicates exceptionally well. Any team would be lucky to have him.",
    image: "/RiyaDutta.jpeg",
  },
  {
    name: "Muhammad Idrees",
    role: "Results Mississauga Group Leader",
    relationship: "Direct Manager",
    timeKnown: "April 2024",
    connection: "Results volunteer advocacy work",
    testimonial:
      "Adil is a diligent, hard-working advocate who has made a significant impact through social media, LTEs, and MP engagement. He is engaged in discussions, eager to learn, and a valued member of the Results Mississauga group.",
    image: "/MuhammadIdrees.jpeg",
  },
  {
    name: "Richard Laurente RSSW",
    role: "Library Outreach Worker",
    relationship: "Teacher/Facilitator",
    timeKnown: "March 2024",
    connection: "Youth on the Rise Workshop Series",
    testimonial:
      "Adil excelled in the 'Youth on the Rise' workshop series, showing curiosity, professionalism, and enthusiasm. He engaged thoughtfully, applied knowledge to real-world situations, and fostered a supportive team environment. His work ethic and collaborative skills make him an asset to any team.",
    image: "/RichardLaurente.jpeg",
  },
  {
    name: "Kishan Suhirthan",
    role: "Logistics at Innovire | Deputy Executive Director at Dr. Interested",
    relationship: "Direct Report",
    timeKnown: "September 2025",
    connection: "Collaboration on Dr. Interested initiatives",
    testimonial:
      "Working alongside Adil at Dr. Interested has been a pleasure. His leadership and problem-solving skills turn challenges into opportunities, motivating everyone around him. He consistently goes above and beyond in his work, setting a strong example for peers and younger students.",
    image: "/KishanSuhirthan.jpg",
  },
  {
    name: "Arghya Vyas",
    role: "Director of IT @ Youth Venture International & Dr. Interested",
    relationship: "Direct Report",
    timeKnown: "September 2025",
    connection: "Mentorship and leadership at Dr. Interested",
    testimonial:
      "Working with Adil at Dr. Interested has been rewarding. He perseveres with his goals and consistently goes above and beyond. I look forward to continuing to collaborate with him.",
    image: "/ArghyaVyas.jpg",
  },
]

export default function Testimonials() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Bubblegum Sans, latin" }}>
          What People Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Recommendations and testimonials from colleagues, mentors, and collaborators who have worked with me.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50"
          >
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Section */}
                <div className="flex-shrink-0 lg:w-80">
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="relative mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{testimonial.role}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-1">
                        <span className="font-medium text-blue-600">Relationship:</span>
                        <span className="text-muted-foreground">{testimonial.relationship}</span>
                      </div>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-1">
                        <span className="font-medium text-blue-600">Since:</span>
                        <span className="text-muted-foreground">{testimonial.timeKnown}</span>
                      </div>
                      <div className="flex flex-col lg:flex-row lg:items-start gap-1">
                        <span className="font-medium text-blue-600">Context:</span>
                        <span className="text-muted-foreground leading-relaxed">{testimonial.connection}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-blue-500/20 mb-4" />
                  <blockquote className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
