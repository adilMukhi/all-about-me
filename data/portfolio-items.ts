// Update portfolio items to use direct image paths
// Writing portfolio
export type Publication = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
}

export const publications: Publication[] = [
  {
    title: "Viruses Unveiled: A Blog on the West Nile Virus",
    publisher: "Substack",
    date: "January 2025",
    description:
      "A research-driven blog featuring 12 posts analyzing the West Nile virus, referencing 35+ peer-reviewed sources.",
    link: "https://virusesunveiled.substack.com/",
  },
  {
    title: "Astrocytoma: From Diagnosis to Management",
    publisher: "Sunshine 4 Cancer Kids",
    date: "November 2024",
    description: "A peer-reviewed research paper analyzing astrocytoma diagnosis, treatment, and management.",
    link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/post/astrocytoma-from-diagnosis-to-management-a-comprehensive-overview",
  },
  // Add more publications here...
]

// Coding portfolio
export type CodingProject = {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  codeLink: string
}

export const codingProjects: CodingProject[] = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/portfolio/coding/portfolio.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    demoLink: "#",
    codeLink: "https://github.com/adilMukhi/all-about-me",
  },
  {
    title: "Medical Data Visualization",
    description: "Interactive data visualization tool for medical research data using D3.js and React.",
    image: "/portfolio/coding/data-viz.jpg",
    tags: ["React", "D3.js", "Data Visualization", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
  },
  // Add more coding projects here...
]

// Research portfolio
export type ResearchProject = {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  institution: string
  year: string
}

export const researchProjects: ResearchProject[] = [
  {
    title: "Astrocytoma: From Diagnosis to Management",
    description: "A comprehensive overview of astrocytoma diagnosis, treatment options, and management strategies.",
    image: "/portfolio/research/astrocytoma.jpg",
    tags: ["Oncology", "Neuroscience", "Medical Research"],
    link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/post/astrocytoma-from-diagnosis-to-management-a-comprehensive-overview",
    institution: "Sunshine 4 Cancer Kids",
    year: "2024",
  },
  // Add more research projects here...
]

// Art projects
export type ArtProject = {
  title: string
  description: string
  image: string
  tags: string[]
  type: "art"
}

export const artProjects: ArtProject[] = [
  {
    title: "Photography Collection",
    description: "A series of nature and urban landscape photographs taken during my travels.",
    image: "/portfolio/art/photography.jpg",
    tags: ["Photography", "Nature", "Urban"],
    type: "art",
  },
  // Add more art projects here...
]

// Sports achievements
export type SportsAchievement = {
  title: string
  description: string
  image: string
  tags: string[]
  type: "sports"
}

export const sportsAchievements: SportsAchievement[] = [
  {
    title: "ROPSSAA Tennis Quarter-Finalist",
    description: "Quarter-Finalist in the ROPSSAA Boys Doubles Junior Tennis South East Qualifier 2024.",
    image: "/portfolio/sports/tennis.jpg",
    tags: ["Tennis", "Competition", "Team Sports"],
    type: "sports",
  },
  // Add more sports achievements here...
]

