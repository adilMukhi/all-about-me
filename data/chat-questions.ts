import { CAL_BOOKING_URL, CONTACT_EMAIL, WORK_PHONE_DISPLAY, WORK_PHONE_TEL } from "@/lib/site"

// Pre-approved questions for the site chat. Answers only restate what the site already says,
// so the chat can't make anything up; this list is the starting point for a future AI assistant.
export type ChatLink = { label: string; href: string; external?: boolean }
export type ChatQuestion = { id: string; question: string; answer: string; links: ChatLink[] }

export const chatQuestions: ChatQuestion[] = [
  {
    id: "book",
    question: "How can I book Adil to speak?",
    answer:
      "Adil speaks at conferences, schools, and community events, in person across the Greater Toronto Area or online anywhere. Have a look at his speaking and consulting services, or book a short call to talk about your event.",
    links: [
      { label: "Speaking & consulting", href: "/services" },
      { label: "Book a call", href: CAL_BOOKING_URL, external: true },
    ],
  },
  {
    id: "topics",
    question: "What does Adil speak about?",
    answer:
      "Youth mental health, healthcare careers, digital rights, and youth leadership. He gives keynotes, leads workshops, joins panels, MCs events, and consults on youth engagement. His TEDx talk is a good example of his style.",
    links: [
      { label: "Watch the TEDx talk", href: "/watch/tedx-stress-memory-and-why-you-cant-find-your-keys" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    id: "dr-interested",
    question: "What is Dr. Interested?",
    answer:
      "Dr. Interested is a youth-led global pre-med organization Adil founded to help students explore healthcare, research, and advocacy. It has reached more than 160,000 people in 106 countries and has over 2,100 members.",
    links: [{ label: "Visit Dr. Interested", href: "https://www.drinterested.org/", external: true }],
  },
  {
    id: "awards",
    question: "What awards has Adil received?",
    answer:
      "Recent honours include the Ontario Medal for Young Volunteers (2025), Top 20 Under 18 in Canada (2026), three Ontario Volunteer Service Awards, and two City of Mississauga Civic Awards.",
    links: [{ label: "See every award", href: "/honors" }],
  },
  {
    id: "contact",
    question: "How do I contact Adil?",
    answer: `Email ${CONTACT_EMAIL} or call the work line at ${WORK_PHONE_DISPLAY}. Hours vary, so booking a call is the most reliable way to find a time that works.`,
    links: [
      { label: "Send an email", href: `mailto:${CONTACT_EMAIL}`, external: true },
      { label: "Call", href: `tel:${WORK_PHONE_TEL}`, external: true },
      { label: "Book a call", href: CAL_BOOKING_URL, external: true },
    ],
  },
  {
    id: "media",
    question: "I'm with the media. Where do I start?",
    answer: "The media kit has Adil's biography, press photos, and everything you need for a story or interview request.",
    links: [
      { label: "Media inquiries", href: "/media-inquiries" },
      { label: "Press photos", href: "/media-inquiries/headshots" },
    ],
  },
]
