import { Metadata } from "next"
import DrInterestedClient from "./client"

export const metadata: Metadata = {
  title: "Dr. Interested - Executive Director & Founder | Adil Mukhi",
  description:
    "Discover Dr. Interested, founded by Adil Mukhi. A global youth mentorship platform reaching 60,000+ youth with research, advocacy, and educational opportunities across 6 continents.",
  keywords: [
    "Dr. Interested",
    "Youth Mentorship",
    "Adil Mukhi",
    "Executive Director",
    "Founder",
    "Youth Advocacy",
    "Medical Mentorship",
    "Global Youth Initiative",
  ],
  openGraph: {
    title: "Dr. Interested - Executive Director & Founder",
    description:
      "Leading a global youth mentorship platform connecting 60,000+ students to research, advocacy, and educational opportunities.",
    type: "website",
  },
}

export default function DrInterestedPage() {
  return <DrInterestedClient />
}
