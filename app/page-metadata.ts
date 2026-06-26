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
  title: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
  description:
    "Adil Mukhi is a youth advocate, public speaker, and changemaker. Founder and Executive Director of Dr. Interested, an organization impacting 160,000+ individuals across 106 countries with 1,400+ members. TEDx speaker, Ontario Volunteer Service Award recipient, and advocate for mental health and youth empowerment.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
    description:
      "Youth advocate, public speaker, and changemaker. Founder and Executive Director of Dr. Interested, an organization reaching 160,000+ individuals across 106 countries with 1,400+ members. TEDx speaker and advocate for mental health and youth empowerment.",
    url: `${siteUrl}/`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
    description:
      "Youth advocate, public speaker, and changemaker. Founder and Executive Director of Dr. Interested, an organization reaching 160,000+ individuals across 106 countries.",
  },
}

export const backgroundMetadata: Metadata = {
  title: "Background",
  description:
    "Explore Adil Mukhi's background as a youth advocate and changemaker. Ontario Volunteer Service Award recipient, TEDx speaker, research volunteer at SickKids Hospital, and founder and Executive Director of Dr. Interested, an organization impacting 160,000+ individuals across 106 countries with 1,400+ members.",
  alternates: {
    canonical: `${siteUrl}/background`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Background",
    description:
      "Youth advocate and changemaker with extensive experience in research, advocacy, and community service. Ontario Volunteer Service Award recipient and TEDx speaker.",
    url: `${siteUrl}/background`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Background" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Background | Adil Mukhi",
    description:
      "Youth advocate and changemaker with extensive experience in research, advocacy, and community service.",
  },
}

export const portfolioMetadata: Metadata = {
  title: "Portfolio",
  description:
    "Discover Adil Mukhi's diverse portfolio including Dr. Interested (reaching 60,000+ youth), research projects, published writings, coding projects, and creative works across advocacy, healthcare, and technology.",
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
  title: "Experiences News & Updates | Adil Mukhi",
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
    "Browse Adil Mukhi's indexed certificate pages, training credentials, and verified learning experiences across healthcare, leadership, accessibility, and youth advocacy.",
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
    "Explore Adil Mukhi's published articles, research papers, and written works on youth advocacy, mental health, healthcare policy, and social change. Featured in national publications and policy consultations.",
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
    "View Adil Mukhi's software development projects including Dr. Interested platform, web applications, and technology solutions for youth advocacy and healthcare. Canadian Computing Competition distinction recipient.",
  alternates: {
    canonical: `${siteUrl}/portfolio/coding`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Coding Portfolio",
    description:
      "Software development projects and technology solutions by youth advocate and developer Adil Mukhi, including platforms reaching 60,000+ users globally.",
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
    "Discover Adil Mukhi's research projects in healthcare, neuroscience, and youth mental health. Research volunteer at SickKids Hospital, Canadian Biology Olympiad medalist, and contributor to national health initiatives.",
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
    "Explore Adil Mukhi's creative works and athletic achievements. Published poet in national youth anthologies, creative projects, and sports accomplishments showcasing well-rounded talents beyond advocacy work.",
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
    "Book Adil Mukhi for speaking engagements and consulting services. TEDx speaker offering keynote presentations, workshops, and youth advocacy consulting. Free services for meaningful causes worldwide.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Services - Speaking & Consulting",
    description:
      "Professional speaking and consulting services by youth advocate and TEDx speaker Adil Mukhi. Specializing in youth advocacy, mental health, and policy consultation.",
    url: `${siteUrl}/services`,
    images: [
      { ...defaultOgImage, alt: "Adil Mukhi's Speaking & Consulting Services" },
    ],
  },
  twitter: {
    ...defaultTwitter,
    title: "Services | Adil Mukhi",
    description:
      "Professional speaking and consulting services by youth advocate and TEDx speaker Adil Mukhi.",
  },
}

export const mediaMetadata: Metadata = {
  title: "Media Coverage",
  description:
    "Media coverage and press articles featuring Adil Mukhi's work as a youth advocate, TEDx speaker, and changemaker. Featured in national publications for advocacy and research contributions.",
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
    "Find all official Adil Mukhi profiles and social channels in one place, including LinkedIn, Instagram, Facebook, X, Bluesky, TikTok, YouTube, and official websites.",
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
