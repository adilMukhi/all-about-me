import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
const defaultOgImage = {
  url: `${siteUrl}/og-image.png`,
  width: 1200,
  height: 630,
}

const defaultTwitter = {
  card: "summary_large_image" as const,
  creator: "@adilm_0",
  site: "@adilm_0",
  images: ["/og-image.png"],
}

export const homeMetadata: Metadata = {
  title: { absolute: "Adil Mukhi | TEDx Speaker, Youth Advocate & Founder" },
  description:
    "TEDx speaker, youth advocate, and founder of Dr. Interested, reaching 160,000+ people in 106 countries. Ontario Medal for Young Volunteers recipient.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Adil Mukhi: Youth Advocate, Public Speaker, Founder, and Research Leader",
    description:
      "Youth advocate, public speaker, advisor, consultant, and changemaker from the Greater Toronto Area. Founder and Executive Director of Dr. Interested, an organization reaching 160,000+ individuals across 106 countries with 2,100+ members, 367 executives, 400+ mentor hours, and 20+ events. TEDx speaker and advocate for mental health and youth empowerment.",
    url: `${siteUrl}/`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Adil Mukhi: Youth Advocate, Public Speaker, Founder, and Research Leader",
    description:
      "Youth advocate, public speaker, advisor, consultant, and changemaker. Founder and Executive Director of Dr. Interested, an organization reaching 160,000+ individuals across 106 countries with 2,100+ members and 367 executives.",
  },
}

export const backgroundMetadata: Metadata = {
  title: "Background",
  description:
    "Adil Mukhi's work experience, volunteering, education, certificates, awards, and testimonials, from SickKids research to founding Dr. Interested.",
  alternates: {
    canonical: `${siteUrl}/background`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Background",
    description:
      "Youth advocate, public speaker, advisor, and consultant with extensive experience in research, advocacy, mentoring, and community service across the Greater Toronto Area and worldwide. Ontario Volunteer Service Award recipient and TEDx speaker.",
    url: `${siteUrl}/background`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Background" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Background | Adil Mukhi",
    description:
      "Youth advocate, public speaker, advisor, and consultant with extensive experience in research, advocacy, and community service.",
  },
}

export const portfolioMetadata: Metadata = {
  title: "Portfolio",
  description:
    "Adil Mukhi's portfolios: published writing and op-eds, medical research, coding projects, and art and sports, all in one place.",
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Portfolio",
    description:
      "Diverse portfolio of youth advocacy projects, research initiatives, published writings, and technology solutions making impact globally.",
    url: `${siteUrl}/portfolio`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Portfolio" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Portfolio | Adil Mukhi",
    description:
      "Diverse portfolio of youth advocacy projects, research initiatives, published writings, and technology solutions.",
  },
}

export const experiencesMetadata: Metadata = {
  title: "Experiences News & Updates",
  description:
    "Read news-style updates and featured experiences from Adil Mukhi across youth advocacy, healthcare research, community leadership, and public speaking.",
  keywords: [
    "Adil Mukhi news",
    "Adil Mukhi experiences",
    "news updates",
    "youth advocacy",
    "research experience",
    "public speaking",
    "community leadership",
    "SickKids",
    "Children First Canada",
    "Dr. Interested",
    "portfolio experiences",
    "leadership stories",
  ],
  alternates: {
    canonical: `${siteUrl}/experiences`,
  },
  openGraph: {
    type: "website",
    title: "Experiences News & Updates | Adil Mukhi",
    description:
      "News-style stories and updates from youth advocacy, research, community leadership, and public speaking.",
    url: `${siteUrl}/experiences`,
    siteName: "Adil Mukhi",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Experiences",
      },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Experiences News & Updates | Adil Mukhi",
    description:
      "News-style stories and updates from youth advocacy, research, community leadership, and public speaking.",
  },
}

export const experienceIndexMetadata: Metadata = {
  title: "Experience Library",
  description:
    "Explore Adil Mukhi's indexed experience pages for leadership roles, youth advocacy work, research, public speaking, and community impact.",
  alternates: {
    canonical: `${siteUrl}/experience`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Experience Library",
    description:
      "Indexed landing pages for Adil Mukhi's roles and leadership experiences across youth advocacy, research, and public service.",
    url: `${siteUrl}/experience`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Experience Library" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Experience Library | Adil Mukhi",
    description:
      "Indexed landing pages for Adil Mukhi's leadership roles, public speaking, research, and youth advocacy work.",
  },
}

export const certificateIndexMetadata: Metadata = {
  title: "Certificates & Credentials",
  description:
    "Adil Mukhi's certificates and credentials in healthcare, research, first aid, leadership, and data, each with its own page.",
  alternates: {
    canonical: `${siteUrl}/certificates`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Certificates & Credentials",
    description:
      "Indexed certificate pages highlighting Adil Mukhi's training, credentials, and continuing education.",
    url: `${siteUrl}/certificates`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Certificates and Credentials" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Certificates & Credentials | Adil Mukhi",
    description:
      "Indexed certificate pages highlighting Adil Mukhi's healthcare, accessibility, and leadership credentials.",
  },
}

export const educationIndexMetadata: Metadata = {
  title: "Education & Training",
  description:
    "Explore Adil Mukhi's education, professional training, and academic programs through dedicated indexable pages.",
  alternates: {
    canonical: `${siteUrl}/education`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Education & Training",
    description:
      "Indexed education pages covering Adil Mukhi's academic background, training, and professional development.",
    url: `${siteUrl}/education`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Education and Training" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Education & Training | Adil Mukhi",
    description:
      "Indexed education pages covering Adil Mukhi's academic background, training, and professional development.",
  },
}

export const volunteerIndexMetadata: Metadata = {
  title: "Volunteer Work",
  description:
    "Explore Adil Mukhi's indexed volunteer work pages covering community service, youth leadership, research volunteering, and public engagement.",
  alternates: {
    canonical: `${siteUrl}/volunteer`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Volunteer Work",
    description:
      "Indexed volunteer pages covering Adil Mukhi's community service, youth leadership, and research volunteering.",
    url: `${siteUrl}/volunteer`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Volunteer Work" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Volunteer Work | Adil Mukhi",
    description:
      "Indexed volunteer pages covering Adil Mukhi's community service, youth leadership, and research volunteering.",
  },
}

export const honorsIndexMetadata: Metadata = {
  title: "Honors & Awards",
  description:
    "Explore Adil Mukhi's indexed honors and awards pages, including national recognition, academic distinctions, and community awards.",
  alternates: {
    canonical: `${siteUrl}/honors`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Honors & Awards",
    description:
      "Indexed honors and awards pages for Adil Mukhi's academic distinctions, national awards, and community recognition.",
    url: `${siteUrl}/honors`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Honors and Awards" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Honors & Awards | Adil Mukhi",
    description:
      "Indexed honors and awards pages for Adil Mukhi's academic distinctions, national awards, and community recognition.",
  },
}

export const testimonialsIndexMetadata: Metadata = {
  title: "Testimonials",
  description:
    "Explore recommendations and testimonials from colleagues, mentors, and collaborators who have worked with Adil Mukhi.",
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Testimonials",
    description:
      "Public testimonial pages featuring recommendations from colleagues, mentors, and collaborators.",
    url: `${siteUrl}/testimonials`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Testimonials" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Testimonials | Adil Mukhi",
    description: "Public testimonial pages featuring recommendations from colleagues, mentors, and collaborators.",
  },
}

export const mediaIndexMetadata: Metadata = {
  title: "Media Coverage",
  description:
    "Explore indexed media coverage pages featuring interviews, articles, and spotlights on Adil Mukhi's work.",
  alternates: {
    canonical: `${siteUrl}/media`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Media Coverage",
    description:
      "Indexed media pages featuring interviews, articles, and public coverage of Adil Mukhi's work.",
    url: `${siteUrl}/media`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Media Coverage" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Media Coverage | Adil Mukhi",
    description: "Indexed media pages featuring interviews, articles, and public coverage of Adil Mukhi's work.",
  },
}

export const writingPortfolioMetadata: Metadata = {
  title: "Writing Portfolio",
  description:
    "Adil Mukhi's writing: books, op-eds, letters to the editor, and blogs on youth health, education, and advocacy, published across Canada.",
  alternates: {
    canonical: `${siteUrl}/portfolio/writing`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Writing Portfolio",
    description:
      "Published articles, research papers, and advocacy writings on youth empowerment, mental health, and healthcare policy by youth advocate Adil Mukhi.",
    url: `${siteUrl}/portfolio/writing`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Writing Portfolio" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Writing Portfolio | Adil Mukhi",
    description:
      "Published articles, research papers, and advocacy writings on youth empowerment, mental health, and healthcare policy.",
  },
}

export const codingPortfolioMetadata: Metadata = {
  title: "Coding Portfolio",
  description:
    "Coding projects by Adil Mukhi, including the Dr. Interested website and tools that support youth education and healthcare outreach.",
  alternates: {
    canonical: `${siteUrl}/portfolio/coding`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Coding Portfolio",
    description:
      "Software development projects and technology solutions by youth advocate and developer Adil Mukhi, including platforms reaching 160,000+ users globally.",
    url: `${siteUrl}/portfolio/coding`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Coding Portfolio" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Coding Portfolio | Adil Mukhi",
    description:
      "Software development projects and technology solutions by youth advocate and developer Adil Mukhi.",
  },
}

export const researchPortfolioMetadata: Metadata = {
  title: "Research Portfolio",
  description:
    "Adil Mukhi's research, from neuroscience and oncology reviews to a UN youth mental health report contribution, with DOIs and links.",
  alternates: {
    canonical: `${siteUrl}/portfolio/research`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Research Portfolio",
    description:
      "Academic and scientific research projects by youth researcher Adil Mukhi, focusing on healthcare, neuroscience, and youth mental health initiatives.",
    url: `${siteUrl}/portfolio/research`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Research Portfolio" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Research Portfolio | Adil Mukhi",
    description:
      "Academic and scientific research projects focused on healthcare, neuroscience, and youth mental health.",
  },
}

export const artSportsPortfolioMetadata: Metadata = {
  title: "Art & Sports Portfolio",
  description:
    "Adil Mukhi's art and sports: photography, design, tennis, and the Play-to-Heal movement linking sport and youth mental health.",
  alternates: {
    canonical: `${siteUrl}/portfolio/art-sports`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Art & Sports Portfolio",
    description:
      "Creative works and athletic achievements by youth advocate Adil Mukhi, including published poetry and artistic projects.",
    url: `${siteUrl}/portfolio/art-sports`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Art & Sports Portfolio" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Art & Sports Portfolio | Adil Mukhi",
    description: "Creative works and athletic achievements by youth advocate Adil Mukhi.",
  },
}

export const servicesMetadata: Metadata = {
  title: "Services - Speaking & Consulting",
  description:
    "Book TEDx speaker Adil Mukhi for keynotes, workshops, panels, MC work, and youth engagement consulting, in the GTA or online.",
  keywords: [
    "Mississauga public speaker hire",
    "Mississauga youth public speaker",
    "Greater Toronto Area speaker",
    "youth advisor",
    "consultant",
    "keynote speaker",
    "speaking engagements",
    "public speaking services",
    "youth advocacy consulting",
    "GTA speaker",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Services - Speaking & Consulting",
    description:
      "Professional speaking, advising, and consulting services by youth advocate and TEDx speaker Adil Mukhi. Specializing in youth advocacy, mental health, public engagement, and policy consultation.",
    url: `${siteUrl}/services`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Speaking & Consulting Services" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Mississauga Public Speaker Hire | Adil Mukhi",
    description:
      "Professional speaking, advising, and consulting services by youth advocate and TEDx speaker Adil Mukhi.",
  },
}

export const mediaMetadata: Metadata = {
  title: "Media Coverage",
  description:
    "News coverage, interviews, and features on Adil Mukhi, from CBC and the United Nations to inSauga and The Global Indian.",
  alternates: {
    canonical: `${siteUrl}/media`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Media Coverage",
    description:
      "Press coverage and media features highlighting the advocacy work and achievements of youth leader Adil Mukhi.",
    url: `${siteUrl}/media`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi Media Coverage" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Media Coverage | Adil Mukhi",
    description: "Press coverage and media features highlighting the advocacy work and achievements of Adil Mukhi.",
  },
}

export const profilesMetadata: Metadata = {
  title: "Follow & Profiles",
  description:
    "Find and follow Adil Mukhi on LinkedIn, Instagram, YouTube, and more, plus Dr. Interested's official profiles.",
  alternates: {
    canonical: `${siteUrl}/profiles`,
  },
  openGraph: {
    type: "profile",
    siteName: "Adil Mukhi",
    title: "Follow & Profiles | Adil Mukhi",
    description:
      "Official profile hub for Adil Mukhi across social media and web platforms.",
    url: `${siteUrl}/profiles`,
    images: [{ ...defaultOgImage, alt: "Adil Mukhi Follow & Profiles" }],
  },
  twitter: {
    ...defaultTwitter,
    title: "Follow & Profiles | Adil Mukhi",
    description: "Official profile hub for Adil Mukhi across social channels and websites.",
  },
}
