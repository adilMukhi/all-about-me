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
    title: "A World Left Waiting",
    publisher: "Merritt Herald",
    date: "March 27, 2025",
    description:
      "A reflective article exploring the themes of societal anticipation and the consequences of waiting for change, analyzing how these dynamics impact communities and individuals.",
    link: "https://issuu.com/merritt-herald/docs/merritt_herald_march_27_2025/6",  // Replace with the actual article URL if available
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
    title: "Dr. Interested Website",
    description:
      "A website for the Dr. Interested club, featuring webinar schedules, research proposal competitions, and resources for aspiring medical professionals.",
    image: "/portfolio/coding/drinterested.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoLink: "https://drinterested-int.vercel.app/",
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
    title: "Integrating AI in Alzheimer's: Diagnosis Methods, Prevention Strategies, and more!",
    description: "A comprehensive research project examining the role of AI in Alzheimer's, covering diagnosis methods, prevention strategies, treatment options, and clinical trials.",
    image: "/alzheimers_research.png", // Replace with the image path if available
    tags: ["AI", "Alzheimer's Disease", "Medical Research", "Neurology"],
    link: "https://drive.google.com/file/d/1ykansS3_jAV1_o77_3ZYOJC4LKApo4qJ/view?usp=sharing",
    institution: "Personal Research",
    year: "2025",
  },
  {
    title: "Astrocytoma: From Diagnosis to Management",
    description: "A comprehensive overview of astrocytoma diagnosis, treatment options, and management strategies.",
    image: "/project2.jpg",
    tags: ["Oncology", "Neuroscience", "Medical Research"],
    link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/post/astrocytoma-from-diagnosis-to-management-a-comprehensive-overview",
    institution: "Sunshine 4 Cancer Kids",
    year: "2024",
  },
  {
    title: "From Stress to Forgetfulness: Understanding How Stress Hormones Shape Your Memory",
    description: "An in-depth 6741 word exploration of how stress hormones affect memory, from short-term impacts to long-term neurological changes.",
    image: "/project3.jpg",
    tags: ["Neuroscience", "Psychology", "Medical Research"],
    link: "https://drive.google.com/file/d/17nAfJSKQjbB-A5mNme4fTODOxydKA3G1/view?usp=drive_link",
    institution: "NOSM and GFSS",
    year: "2023-2025",
  },
  {
    title: "Mini-Medical Booklet - Heal for Health",
    description: "A concise medical booklet providing essential health information for various conditions and treatments.",
    image: "/portfolio/research/booklet.jpg",
    tags: ["Health Education", "Medical Research", "Public Health"],
    link: "https://drive.google.com/file/d/18PFkzwb5aEaP7VK-Eg3y1ZntnttjTALH/view?usp=sharing",
    institution: "Heal for Health",
    year: "2024",
  },
  {
    title: "Research Dump - School Supplies and Education",
    description: "A research initiative focused on improving access to school supplies and education for underprivileged students.",
    image: "/portfolio/research/rrs.jpg",
    tags: ["Education", "Social Impact", "Community Research"],
    link: "https://drive.google.com/file/d/1K7tkkKjVaTmcyP2uJK3fU1BEA758G2aj/view?usp=sharing",
    institution: "Restoring Rainbows SouthLake",
    year: "2024",
  },
  {
    title: "Immunology's Next Frontier: From Classic Vaccines to Cutting-Edge Targeted Therapies",
    description: "A deep dive into the evolution of immunology, from traditional vaccines to advanced targeted therapies.",
    image: "/portfolio/research/biomedizone.jpg",
    tags: ["Immunology", "Medical Research", "Biotechnology"],
    link: "https://drive.google.com/file/d/1CuMHv3eoGpjlWz2uoueTL3eIoxOFi0qK/view?usp=sharing",
    institution: "BioMedizone",
    year: "2024",
  },
  {
    title: "Precision Medicine Unveiled: Nanoparticles in Targeted Drug Delivery Systems",
    description: "An exploration of how nanoparticles are revolutionizing precision medicine and targeted drug delivery systems.",
    image: "/portfolio/research/targeted.jpg",
    tags: ["Nanotechnology", "Pharmacology", "Medical Research"],
    link: "https://drive.google.com/file/d/11Sw8EDXzCxuaV6vbrX26YrM6E53-9mVP/view?usp=sharing",
    institution: "CosmicUs",
    year: "2023",
  },
];


// Art projects
export type ArtProject = {
  title: string
  description: string
  image: string
  images?: string[] // Add support for multiple images
  tags: string[]
  type: "art"
}

export const artProjects: ArtProject[] = [
  {
    title: "Cosmos: From Olympus To The Moon",
    description: "Story 'Illumination' art - An artistic representation of the story 'Illumination,' exploring themes of mythology and space.",
    image: "/portfolio/art/moon (1).jpg",
    images: ["/portfolio/art/moon (1).jpg", "/portfolio/art/moon (2).jpg", "/portfolio/art/moon (3).jpg", "/portfolio/art/moon (4).jpg", "/portfolio/art/moon (5).jpg", "/portfolio/art/moon (6).jpg", "/portfolio/art/moon (7).jpg", "/portfolio/art/moon (8).jpg"],
    tags: ["Mythology", "Space", "Story Art"],
    type: "art",
  },
  {
    title: "Hello It's Me",
    description: "Gif design - A dynamic and expressive GIF design that visually represents self-reflection and identity.",
    image: "/portfolio/art/gifdesign.gif",
    tags: ["GIF", "Digital Art", "Identity"],
    type: "art",
  },
  {
    title: "Buildings Of Pakistan & The UAE",
    description: "Sensory lantern - A sensory lantern inspired by the architectural heritage of Pakistan and the UAE.",
    image: "/portfolio/art/lantern1.jpg",
    images: ["/portfolio/art/lantern1.jpg", "/portfolio/art/lantern2.jpg", "/portfolio/art/lantern3.jpg", "/portfolio/art/lantern4.jpg"],
    tags: ["Architecture", "Cultural Art", "Lantern"],
    type: "art",
  },
  {
    title: "A Train Ride Away",
    description: "Zine design - A visually captivating zine design depicting the emotions and experiences of a train journey.",
    image: "/portfolio/art/zine_design1.jpg",
    images: ["/portfolio/art/zine_design1.jpg", "/portfolio/art/zine_design2.jpg", "/portfolio/art/zine_design3.jpg", "/portfolio/art/zine_design4.jpg", "/portfolio/art/zine_design5.jpg", "/portfolio/art/zine_design6.jpg", "/portfolio/art/zine_design7.jpg", "/portfolio/art/zine_design8.jpg", "/portfolio/art/zine_design9.jpg", "/portfolio/art/zine_design10.jpg", "/portfolio/art/zine_design11.jpg"],
    tags: ["Zine", "Travel", "Illustration"],
    type: "art",
  },
  {
    title: "Easter/Navroz: The Blending Of Tradition",
    description: "Clay tic-tac-toe design - A handcrafted clay tic-tac-toe board symbolizing the fusion of Easter and Navroz traditions.",
    image: "/portfolio/art/clay_tictactoe1.jpg",
    images: ["/portfolio/art/clay_tictactoe1.jpg", "/portfolio/art/clay_tictactoe2.jpg", "/portfolio/art/clay_tictactoe3.jpg", "/portfolio/art/clay_tictactoe4.jpg"],
    tags: ["Cultural Art", "Tradition", "Clay"],
    type: "art",
  },
  {
    title: "Contour Drawings",
    description: "A collection of contour drawings emphasizing form and structure through minimalistic lines.",
    image: "/portfolio/art/contour_drawing (6).jpg",
    images: ["/portfolio/art/contour_drawing (1).jpg", "/portfolio/art/contour_drawing (2).jpg", "/portfolio/art/contour_drawing (3).jpg", "/portfolio/art/contour_drawing (4).jpg", "/portfolio/art/contour_drawing (5).jpg", "/portfolio/art/contour_drawing (6).jpg", "/portfolio/art/contour_drawing (7).jpg"],
    tags: ["Drawing", "Minimalism", "Line Art"],
    type: "art",
  },
  {
    title: "Layers Of Perception",
    description: "A mixed media artwork exploring how layers of color and texture influence perception.",
    image: "/portfolio/art/layers_of_perception.jpg",
    tags: ["Mixed Media", "Perception", "Color"],
    type: "art",
  },
  {
    title: "Earth’s Demise: The Metamorphosis Of Plastic Litter",
    description: "transformation project - a transformation art project that visualizes the devastating impact of plastic pollution on the planet.",
    image: "/portfolio/art/transformation.jpg",
    tags: ["Environmental Art", "Plastic Pollution", "Transformation"],
    type: "art",
  }
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
    description: "Achieved Quarter-Finalist placement in the ROPSSAA (Region of Peel Secondary Schools Athletic Association) Boys Doubles Junior Tennis South East Qualifier 2024. Demonstrated strong teamwork, strategic play, and resilience against competitive opponents, showcasing significant improvement from previous seasons. Trained extensively in the off-season to refine technical skills, endurance, and match tactics, contributing to a successful performance in the tournament",
    image: "/portfolio/sports/tennis.jpg",
    videoId: "ztSkKMdQpE0", // Updated with the correct YouTube video ID
    tags: ["Tennis", "Competition", "Team Sports"],
    type: "sports",
  },
  // Add more sports achievements here...
]

