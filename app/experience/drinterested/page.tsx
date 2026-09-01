import { Metadata } from "next"
import DrInterestedClient from "./client"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

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
  alternates: {
    canonical: `${siteUrl}/experience/drinterested`,
  },
  openGraph: {
    title: "Dr. Interested - Executive Director & Founder",
    description:
      "Leading a global youth mentorship platform connecting 60,000+ students to research, advocacy, and educational opportunities.",
    type: "website",
    url: `${siteUrl}/experience/drinterested`,
    siteName: "Adil Mukhi",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Dr. Interested - Founded by Adil Mukhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Interested - Executive Director & Founder",
    description:
      "Leading a global youth mentorship platform connecting 60,000+ students to research, advocacy, and educational opportunities.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

export default function DrInterestedPage() {
  return <DrInterestedClient />
}
