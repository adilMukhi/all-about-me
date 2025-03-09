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
    title: "Un monde laissé en attente",
    publisher: "La Nouvelle Union",
    date: "March 1, 2025",
    description: "An opinion piece reflecting on a world left on hold.",
    link: "https://www.lanouvelle.net/lettres-dopinion/un-monde-laisse-en-attente/",
  },
  {
    title: "Light-Based Medical Technologies",
    publisher: "The Bulleteen",
    date: "November 2024",
    description: "An article exploring the applications of light-based technologies in medicine.",
    link: "https://thebulleteen.com/nov-2024/",
  },
  {
    title: "Why Photonic Computing Could Be the Key to Solving the Energy Crisis",
    publisher: "The Bulleteen",
    date: "November 2024",
    description: "A deep dive into the potential of photonic computing in addressing energy challenges.",
    link: "https://thebulleteen.com/nov-2024/",
  },
  {
    title: "Astrocytoma: From Diagnosis to Management – A Comprehensive Overview",
    publisher: "Sunshine 4 Cancer Kids",
    date: "August 13, 2024",
    description:
      "A peer-reviewed research paper analyzing astrocytoma diagnosis, treatment, and management. Contributed to Treatments and Impacts sections.",
    link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/post/astrocytoma-from-diagnosis-to-management-a-comprehensive-overview",
  },
  {
    title: "Bioengineering Breakthroughs: The End of Organ Transplant Lists?",
    publisher: "The Bulleteen",
    date: "September 2024",
    description: "A discussion on how bioengineering innovations may revolutionize organ transplants.",
    link: "https://thebulleteen.com/sep-2024/",
  },
  {
    title: "Telemedicine’s Future: A Panacea for Healthcare Inequities or a Temporary Fix?",
    publisher: "The Bulleteen",
    date: "September 2024",
    description: "An analysis of the role of telemedicine in addressing healthcare disparities.",
    link: "https://thebulleteen.com/sep-2024/",
  },
  {
    title: "Vaccines: A Global Imperative for a Healthier Future",
    publisher: "The Fulcrum",
    date: "July 24, 2024",
    description: "An opinion piece advocating for global vaccine initiatives.",
    link: "https://thefulcrum.ca/opinions/letters/letter-to-the-editor-vaccines-a-global-imperative-for-a-healthier-future/",
  },
  {
    title: "Anthology #1",
    publisher: "Aid4NeedxVoice4Need",
    date: "May 20, 2024",
    description: "A collection of literary works compiled for advocacy and awareness.",
    link: "https://ko-fi.com/s/34b4610f05?published=true#shareNewShopItemModal",
  },
  {
    title: "Protéger les enfants en cas d’urgence",
    publisher: "Le Devoir",
    date: "May 11, 2024",
    description: "A letter to the editor addressing the importance of protecting children in emergencies.",
    link: "https://www.ledevoir.com/opinion/lettres/812816/proteger-enfants-cas-urgence",
  },
  {
    title: "Empowering Children: Calling on Canada to Prioritize Human Capital in IDA21",
    publisher: "The Fulcrum",
    date: "April 8, 2024",
    description: "A call for investment in children's futures through international development.",
    link: "https://thefulcrum.ca/opinions/letters/letter-to-the-editor-empowering-children-calling-on-canada-to-prioritize-human-capital-in-ida21/",
  },
  {
    title: "Investing in Children's Well-being",
    publisher: "Results Canada",
    date: "April 7, 2024",
    description: "An op-ed on the need for greater investment in children's health and education.",
    link: "https://resultscanada.ca/volunteer-voices-investing-in-childrens-well-being/",
  },
  {
    title: "Creative Mention: Navigating the Path to Sustainable Healthcare: Innovations and Challenges",
    publisher: "Human Nature Projects Ontario",
    date: "March 16, 2024",
    description: "An article exploring sustainable solutions in healthcare.",
    link: "bit.ly/creativemention_adilm",
  },
  {
    title: "Journée mondiale de la tuberculose : la Tour CN sera illuminée en rouge",
    publisher: "Le Courrier de la Nouvelle-Écosse",
    date: "March 15, 2024",
    description: "A letter discussing World Tuberculosis Day and its significance.",
    link: "https://lecourrier.com/lettre-ouverte/2024/03/15/journee-mondiale-de-la-tuberculose-la-tour-cn-sera-illuminee-en-rouge/",
  },
  {
    title: "Investing in Children's Well-being",
    publisher: "Issuu",
    date: "March 14, 2024",
    description: "An op-ed emphasizing the importance of children's welfare investments.",
    link: "https://issuu.com/make_a_difference/docs/op_ed_-_adil_mukhi_-_investing_in_children_s_well-",
  },
  {
    title: "A call to action: Let us unite for the future of children",
    publisher: "Le Courrier de la Nouvelle-école",
    date: "February 9, 2024",
    description: "A plea for collective action to secure children's futures.",
    link: "https://lecourrier.com/lettre-a-lediteur/2024/02/09/un-appel-a-laction-unissons-nous-pour-lavenir-des-enfants/",
  },
  {
    title: "Un appel à l’action : unissons-nous pour l’avenir des enfants",
    publisher: "La Nouvelle union",
    date: "February 6, 2024",
    description: "A French-language opinion piece advocating for children's rights and future.",
    link: "https://www.lanouvelle.net/lettres-dopinion/un-appel-a-laction-unissons-nous-pour-lavenir-des-enfants/",
  },
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
    title: "StemHiss Website",
    description:
      "A website developed for the non-profit organization StemHiss, designed to provide educational STEM resources.",
    image: "/portfolio/coding/stemhiss.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "https://stemhiss.vercel.app/",
    codeLink: "https://github.com/StemHiss-int/website",
  },
  {
    title: "Dr. Interested Website (In Progress)",
    description:
      "A website for the Dr. Interested club, featuring webinar schedules, research proposal competitions, and resources for aspiring medical professionals.",
    image: "/portfolio/coding/drinterested.jpg",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoLink: "https://drinterested.vercel.app/",
    codeLink: "https://github.com/kishys/drinterested-site",
  },
  {
    title: "My Personal Website",
    description: "A personal website showcasing projects, achievements, and experiences.",
    image: "/portfolio/coding/personal.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    demoLink: "#",
    codeLink: "https://github.com/adilMukhi/all-about-me",
  },
  {
    title: "Grade 10 CS Final Project - Escape the Algorythem",
    description: "A game developed using PyGame, where players navigate through algorithmic challenges to escape.",
    image: "/portfolio/coding/escape.jpg",
    tags: ["Python", "PyGame", "Game Development"],
    demoLink: "https://github.com/arghya-v/ICD208-Final-Project",
    codeLink: "https://github.com/arghya-v/ICD208-Final-Project",
  },
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
  videoId?: string // Add optional videoId field
  tags: string[]
  type: "sports"
}

export const sportsAchievements: SportsAchievement[] = [
  {
    title: "ROPSSAA Tennis Quarter-Finalist",
    description: "Quarter-Finalist in the ROPSSAA Boys Doubles Junior Tennis South East Qualifier 2024.",
    image: "/portfolio/sports/tennis.jpg",
    videoId: "YOUR_VIDEO_ID", // Replace with your actual YouTube video ID
    tags: ["Tennis", "Competition", "Team Sports"],
    type: "sports",
  },
  // Add more sports achievements here...
]

