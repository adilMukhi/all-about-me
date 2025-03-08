// Example data structures for portfolio items

// Writing portfolio
export type Publication = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
  tags: string[]
}

export const publications: Publication[] = [
  {
    title: "Viruses Unveiled: A Blog on the West Nile Virus",
    publisher: "Substack",
    date: "January 2025",
    description:
      "A research-driven blog featuring 12 posts analyzing the West Nile virus, referencing 35+ peer-reviewed sources.",
    link: "https://virusesunveiled.substack.com/",
    tags: ["Medical Communications", "Public Health", "Research"],
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

