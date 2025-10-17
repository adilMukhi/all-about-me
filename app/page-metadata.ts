import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export const homeMetadata: Metadata = {
  title: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
  description:
    "Adil Mukhi is a youth advocate, public speaker, and changemaker. Founder of Dr. Interested reaching 60,000+ youth globally. TEDx speaker, Ontario Volunteer Service Award recipient, and advocate for mental health and youth empowerment.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
    description:
      "Youth advocate, public speaker, and changemaker. Founder of Dr. Interested reaching 60,000+ youth globally. TEDx speaker and advocate for mental health and youth empowerment.",
    url: `${siteUrl}/`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
      },
    ],
  },
}

export const backgroundMetadata: Metadata = {
  title: "Background",
  description:
    "Explore Adil Mukhi's background as a youth advocate and changemaker. Ontario Volunteer Service Award recipient, TEDx speaker, research volunteer at SickKids Hospital, and founder of Dr. Interested reaching 60,000+ youth globally.",
  alternates: {
    canonical: `${siteUrl}/background`,
  },
  openGraph: {
    title: "Background",
    description:
      "Youth advocate and changemaker with extensive experience in research, advocacy, and community service. Ontario Volunteer Service Award recipient and TEDx speaker.",
    url: `${siteUrl}/background`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Background",
      },
    ],
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
    title: "Portfolio",
    description:
      "Diverse portfolio of youth advocacy projects, research initiatives, published writings, and technology solutions making impact globally.",
    url: `${siteUrl}/portfolio`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Portfolio",
      },
    ],
  },
}

export const experiencesMetadata: Metadata = {
  title: "Experiences",
  description:
    "Read about Adil Mukhi's experiences as a youth advocate, TEDx speaker, and changemaker. Insights from leading Dr. Interested, research at SickKids Hospital, and advocacy work with national organizations.",
  alternates: {
    canonical: `${siteUrl}/experiences`,
  },
  openGraph: {
    title: "Experiences",
    description:
      "Personal experiences and insights from a youth advocate and changemaker working in research, policy advocacy, and community empowerment.",
    url: `${siteUrl}/experiences`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Experiences",
      },
    ],
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
    title: "Writing Portfolio",
    description:
      "Published articles, research papers, and advocacy writings on youth empowerment, mental health, and healthcare policy by youth advocate Adil Mukhi.",
    url: `${siteUrl}/portfolio/writing`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Writing Portfolio",
      },
    ],
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
    title: "Coding Portfolio",
    description:
      "Software development projects and technology solutions by youth advocate and developer Adil Mukhi, including platforms reaching 60,000+ users globally.",
    url: `${siteUrl}/portfolio/coding`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Coding Portfolio",
      },
    ],
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
    title: "Research Portfolio",
    description:
      "Academic and scientific research projects by youth researcher Adil Mukhi, focusing on healthcare, neuroscience, and youth mental health initiatives.",
    url: `${siteUrl}/portfolio/research`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Research Portfolio",
      },
    ],
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
    title: "Art & Sports Portfolio",
    description:
      "Creative works and athletic achievements by youth advocate Adil Mukhi, including published poetry and artistic projects.",
    url: `${siteUrl}/portfolio/art-sports`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Art & Sports Portfolio",
      },
    ],
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
    title: "Services - Speaking & Consulting",
    description:
      "Professional speaking and consulting services by youth advocate and TEDx speaker Adil Mukhi. Specializing in youth advocacy, mental health, and policy consultation.",
    url: `${siteUrl}/services`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Speaking & Consulting Services",
      },
    ],
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
    title: "Media Coverage",
    description:
      "Press coverage and media features highlighting the advocacy work and achievements of youth leader Adil Mukhi.",
    url: `${siteUrl}/media`,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi Media Coverage",
      },
    ],
  },
}
