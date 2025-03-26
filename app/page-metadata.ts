import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

export const homeMetadata: Metadata = {
  title: "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
  description:
    "Adil Mukhi is a Grade 10 IB MYP student passionate about medicine, research, and leadership. Explore his projects, achievements, and experiences.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
    description:
      "Adil Mukhi is a Grade 10 IB MYP student passionate about medicine, research, and leadership. Explore his projects, achievements, and experiences.",
    url: `${siteUrl}/`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
      },
    ],
  },
}

export const backgroundMetadata: Metadata = {
  title: "Background & Experience | Adil Mukhi",
  description:
    "Explore Adil Mukhi's professional background, skills, education, work experience, and achievements in healthcare, research, and leadership.",
  alternates: {
    canonical: `${siteUrl}/background`,
  },
  openGraph: {
    title: "Background & Experience | Adil Mukhi",
    description:
      "Explore Adil Mukhi's professional background, skills, education, work experience, and achievements in healthcare, research, and leadership.",
    url: `${siteUrl}/background`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Background & Experience",
      },
    ],
  },
}

export const portfolioMetadata: Metadata = {
  title: "Portfolio | Adil Mukhi",
  description:
    "Discover Adil Mukhi's diverse portfolio of writing, coding projects, research papers, and creative works across various disciplines.",
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  openGraph: {
    title: "Portfolio | Adil Mukhi",
    description:
      "Discover Adil Mukhi's diverse portfolio of writing, coding projects, research papers, and creative works across various disciplines.",
    url: `${siteUrl}/portfolio`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Portfolio",
      },
    ],
  },
}

export const experiencesMetadata: Metadata = {
  title: "Experiences & Blog | Adil Mukhi",
  description:
    "Read about Adil Mukhi's personal experiences, reflections, and insights from his journey in education, research, and healthcare leadership.",
  alternates: {
    canonical: `${siteUrl}/experiences`,
  },
  openGraph: {
    title: "Experiences & Blog | Adil Mukhi",
    description:
      "Read about Adil Mukhi's personal experiences, reflections, and insights from his journey in education, research, and healthcare leadership.",
    url: `${siteUrl}/experiences`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Experiences & Blog",
      },
    ],
  },
}

export const writingPortfolioMetadata: Metadata = {
  title: "Writing Portfolio | Adil Mukhi",
  description:
    "Explore Adil Mukhi's published articles, research papers, and written works on healthcare, science, and advocacy topics.",
  alternates: {
    canonical: `${siteUrl}/portfolio/writing`,
  },
  openGraph: {
    title: "Writing Portfolio | Adil Mukhi",
    description:
      "Explore Adil Mukhi's published articles, research papers, and written works on healthcare, science, and advocacy topics.",
    url: `${siteUrl}/portfolio/writing`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Writing Portfolio",
      },
    ],
  },
}

export const codingPortfolioMetadata: Metadata = {
  title: "Coding Portfolio | Adil Mukhi",
  description:
    "View Adil Mukhi's software development projects, web applications, and coding experiments showcasing technical skills and creativity.",
  alternates: {
    canonical: `${siteUrl}/portfolio/coding`,
  },
  openGraph: {
    title: "Coding Portfolio | Adil Mukhi",
    description:
      "View Adil Mukhi's software development projects, web applications, and coding experiments showcasing technical skills and creativity.",
    url: `${siteUrl}/portfolio/coding`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Coding Portfolio",
      },
    ],
  },
}

export const researchPortfolioMetadata: Metadata = {
  title: "Research Portfolio | Adil Mukhi",
  description:
    "Discover Adil Mukhi's academic and scientific research projects in healthcare, neuroscience, and medical innovation.",
  alternates: {
    canonical: `${siteUrl}/portfolio/research`,
  },
  openGraph: {
    title: "Research Portfolio | Adil Mukhi",
    description:
      "Discover Adil Mukhi's academic and scientific research projects in healthcare, neuroscience, and medical innovation.",
    url: `${siteUrl}/portfolio/research`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Research Portfolio",
      },
    ],
  },
}

export const artSportsPortfolioMetadata: Metadata = {
  title: "Art & Sports Portfolio | Adil Mukhi",
  description:
    "Explore Adil Mukhi's creative works and athletic achievements, showcasing artistic talent and sports accomplishments.",
  alternates: {
    canonical: `${siteUrl}/portfolio/art-sports`,
  },
  openGraph: {
    title: "Art & Sports Portfolio | Adil Mukhi",
    description:
      "Explore Adil Mukhi's creative works and athletic achievements, showcasing artistic talent and sports accomplishments.",
    url: `${siteUrl}/portfolio/art-sports`,
    images: [
      {
        url: `${siteUrl}/profile-pic.jpg`,
        width: 1200,
        height: 630,
        alt: "Adil Mukhi's Art & Sports Portfolio",
      },
    ],
  },
}

