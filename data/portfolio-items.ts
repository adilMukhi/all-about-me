import SocialLinks from "@/components/social-links"

// Writing portfolio
export type Book = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
  isbn?: string
  authors?: string
  image?: string
  buyLinks?: {
    onlineChannels?: Array<{
      name: string
      url: string
    }>
    ebookChannels?: Array<{
      name: string
      url: string
    }>
    customLinks?: Array<{
      name: string
      url: string
    }>
  }
}

export const books: Book[] = [
  {
    title: "Doctor Defender Versus RSV",
    publisher: "Heal for Health",
    date: "2025",
    description:
      "Doctor Defender Versus RSV is a children's book that explains what Respiratory Syncytial Virus (RSV) is and how young kids can protect themselves from it. Written in simple, engaging language, the book teaches important prevention tips in a way that's easy for children to understand. Distributed by Heal for Health, it is shared with families in low-income communities to help spread awareness and support healthier futures.",
    link: "https://doi.org/10.5281/zenodo.16989982",
    authors: "Adil Mukhi et al",
    image: "/RSVbook.png",
    buyLinks: {
      customLinks: [
        {
          name: "View Publication",
          url: "https://doi.org/10.5281/zenodo.16989982",
        },
      ],
    },
  },
  {
    title: "Born of Embers",
    publisher: "Polar Expressions Publishing",
    date: "May 2025",
    description:
      "A national youth poetry anthology featuring my original work. Archived in the Library and Archives Canada.",
    link: "https://www.polarexpressions.ca/Shop.html",
    isbn: "978-1-990243-38-7",
    authors: "Adil Mukhi et al",
    image: "/BornofEmbers.jpeg",
    buyLinks: {
      customLinks: [
        {
          name: "Buy from Polar Expressions",
          url: "https://www.polarexpressions.ca/Shop.html",
        },
      ],
    },
  },
  {
    title: "Echoes of the Deep",
    publisher: "Polar Expressions Publishing",
    date: "May 2025",
    description:
      "A published poetry collection showcasing youth voices across Canada. Includes my original piece, archived in the Library and Archives Canada.",
    link: "https://www.polarexpressions.ca/Shop.html",
    isbn: "978-1-990243-42-4",
    authors: "Adil Mukhi et al",
    image: "/echosofthedeep.jpeg",
    buyLinks: {
      customLinks: [
        {
          name: "Buy from Polar Expressions",
          url: "https://www.polarexpressions.ca/Shop.html",
        },
      ],
    },
  },
]

export type LTE = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
  authors?: string
  image?: string
  buyLinks?: {
    customLinks?: Array<{
      name: string
      url: string
    }>
  }
}

export const ltes: LTE[] = [
  {
    title: "Continue support",
    publisher: "The London Free Press",
    date: "July 5, 2025",
    description:
      "A letter to the editor of The London Free Press, addressing the need for continued support for the work of the Global Fund.",
    link: "https://lfpress.com/opinion/letters/letters-to-the-editor-july-5-2025#:~:text=Article%20content-,Continue%20support,-Article%20content",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/letter.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://lfpress.com/opinion/letters/letters-to-the-editor-july-5-2025#:~:text=Article%20content-,Continue%20support,-Article%20content",
        },
      ],
    },
  },
  {
    title: "Canada, Let's Not Turn Our Backs on the World",
    publisher: "Results Canada",
    date: "April 19, 2025",
    description:
      "Published in the Volunteer Voices series by Results Canada, this opinion piece advocates for Canada's global commitments amid the 2025 national election.",
    link: "https://resultscanada.ca/volunteer-voices-canada-lets-not-turn-our-backs-on-the-world/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/canada.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://resultscanada.ca/volunteer-voices-canada-lets-not-turn-our-backs-on-the-world/",
        },
      ],
    },
  },
  {
    title: "A World Left Waiting",
    publisher: "Merritt Herald",
    date: "March 27, 2025",
    description:
      "A reflective article exploring the themes of societal anticipation and the consequences of waiting for change, analyzing how these dynamics impact communities and individuals.",
    link: "https://issuu.com/merritt-herald/docs/merritt_herald_march_27_2025/6",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/world.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://issuu.com/merritt-herald/docs/merritt_herald_march_27_2025/6",
        },
      ],
    },
  },
  {
    title: "Un monde laissé en attente",
    publisher: "La Nouvelle Union",
    date: "March 1, 2025",
    description: "An opinion piece reflecting on a world left on hold.",
    link: "https://www.lanouvelle.net/lettres-dopinion/un-monde-laisse-en-attente/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/world_french.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Letter",
          url: "https://www.lanouvelle.net/lettres-dopinion/un-monde-laisse-en-attente/",
        },
      ],
    },
  },
  {
    title: "Vaccines: A Global Imperative for a Healthier Future",
    publisher: "The Fulcrum",
    date: "July 24, 2024",
    description: "An opinion piece advocating for global vaccine initiatives.",
    link: "https://thefulcrum.ca/opinions/letters/letter-to-the-editor-vaccines-a-global-imperative-for-a-healthier-future/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/vaccines.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://thefulcrum.ca/opinions/letters/letter-to-the-editor-vaccines-a-global-imperative-for-a-healthier-future/",
        },
      ],
    },
  },
  {
    title: "Protéger les enfants en cas d'urgence",
    publisher: "Le Devoir",
    date: "May 11, 2024",
    description: "A letter to the editor addressing the importance of protecting children in emergencies.",
    link: "https://www.ledevoir.com/opinion/lettres/812816/proteger-enfants-cas-urgence",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/protect_children.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Letter",
          url: "https://www.ledevoir.com/opinion/lettres/812816/proteger-enfants-cas-urgence",
        },
      ],
    },
  },
  {
    title: "Empowering Children: Calling on Canada to Prioritize Human Capital in IDA21",
    publisher: "The Fulcrum",
    date: "April 8, 2024",
    description: "A call for investment in children's futures through international development.",
    link: "https://thefulcrum.ca/opinions/letters/letter-to-the-editor-empowering-children-calling-on-canada-to-prioritize-human-capital-in-ida21/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/empowering_children.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://thefulcrum.ca/opinions/letters/letter-to-the-editor-empowering-children-calling-on-canada-to-prioritize-human-capital-in-ida21/",
        },
      ],
    },
  },
  {
    title: "Investing in Children's Well-being",
    publisher: "Results Canada",
    date: "April 7, 2024",
    description: "An op-ed on the need for greater investment in children's health and education.",
    link: "https://resultscanada.ca/volunteer-voices-investing-in-childrens-well-being/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/investing_wellbeing.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://resultscanada.ca/volunteer-voices-investing-in-childrens-well-being/",
        },
      ],
    },
  },
  {
    title: "Journée mondiale de la tuberculose : la Tour CN sera illuminée en rouge",
    publisher: "Le Courrier de la Nouvelle-Écosse",
    date: "March 15, 2024",
    description: "A letter discussing World Tuberculosis Day and its significance.",
    link: "https://lecourrier.com/lettre-ouverte/2024/03/15/journee-mondiale-de-la-tuberculose-la-tour-cn-sera-illuminee-en-rouge/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/tuberculosis.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Letter",
          url: "https://lecourrier.com/lettre-ouverte/2024/03/15/journee-mondiale-de-la-tuberculose-la-tour-cn-sera-illuminee-en-rouge/",
        },
      ],
    },
  },
  {
    title: "Investing in Children's Well-being",
    publisher: "Issuu",
    date: "March 14, 2024",
    description: "An op-ed emphasizing the importance of children's welfare investments.",
    link: "https://issuu.com/make_a_difference/docs/op_ed_-_adil_mukhi_-_investing_in_children_s_well-",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/investing_wellbeing_issuu.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://issuu.com/make_a_difference/docs/op_ed_-_adil_mukhi_-_investing_in_children_s_well-",
        },
      ],
    },
  },
  {
    title: "A call to action: Let us unite for the future of children",
    publisher: "Le Courrier de la Nouvelle-école",
    date: "February 9, 2024",
    description: "A plea for collective action to secure children's futures.",
    link: "https://lecourrier.com/lettre-a-lediteur/2024/02/09/un-appel-a-laction-unissons-nous-pour-lavenir-des-enfants/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/call_to_action.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Letter",
          url: "https://lecourrier.com/lettre-a-lediteur/2024/02/09/un-appel-a-laction-unissons-nous-pour-lavenir-des-enfants/",
        },
      ],
    },
  },
  {
    title: "Un appel à l'action : unissons-nous pour l'avenir des enfants",
    publisher: "La Nouvelle union",
    date: "February 6, 2024",
    description: "A French-language opinion piece advocating for children's rights and future.",
    link: "https://www.lanouvelle.net/lettres-dopinion/un-appel-a-laction-unissons-nous-pour-lavenir-des-enfants/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/call_to_action_french.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Letter",
          url: "https://www.lanouvelle.net/lettres-dopinion/un-appel-a-laction-unissons-nous-pour-lavenir-des-enfants/",
        },
      ],
    },
  },
]

export type Blog = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
  authors?: string
  image?: string
  blogArticles?: Array<{
    title: string
    subtitle: string
    date: string
    views: number
  }>
}

export const blogs: Blog[] = [
  {
    title: "Viruses Unveiled: A Blog on the West Nile Virus",
    publisher: "Substack",
    date: "January 2025",
    description:
      "A research-driven blog featuring 12 posts analyzing the West Nile virus, referencing 35+ peer-reviewed sources.",
    link: "https://virusesunveiled.substack.com/",
    authors: "Adil Mukhi",
    image: "/virusesunveiled.png",
    blogArticles: [
      {
        title: "The End & A New Beginning",
        subtitle: "My new club Dr. Interested is officially out!",
        date: "Feb 7",
        views: 224,
      },
      {
        title: "Wrapping Up The West Nile Virus",
        subtitle: "Key Takeaways and Future Outlook",
        date: "Feb 6",
        views: 284,
      },
      {
        title: "The Future of West Nile Virus",
        subtitle: "The Next Chapter—Where Science is Headed!",
        date: "Feb 4",
        views: 285,
      },
      {
        title: "Prevention and Control of West Nile Virus",
        subtitle: "A Game Plan to Outfox Mosquitoes!",
        date: "Jan 28",
        views: 276,
      },
      {
        title: "Winged Carriers: How Birds Spread West Nile Virus",
        subtitle: "What do crows, sparrows, and mosquitoes have in common?",
        date: "Jan 21",
        views: 284,
      },
      {
        title: "Diagnosing and Treating West Nile Virus",
        subtitle: "A Plain-English Guide",
        date: "Jan 14",
        views: 286,
      },
      {
        title: "Cracking the Code: The Chemical Structure",
        subtitle: "Unlocking the Secrets of West Nile Virus",
        date: "Jan 8",
        views: 254,
      },
      {
        title: "Toll of West Nile Virus: Symptoms and Health Impacts",
        subtitle: "What Happens When a Mosquito Bite Turns Deadly?",
        date: "Dec 27, 2024",
        views: 247,
      },
      {
        title: "Climate Change and Mosquito Populations",
        subtitle: "A Rising Threat",
        date: "Dec 23, 2024",
        views: 237,
      },
      {
        title: "West Nile Virus in Canada: An Overview",
        subtitle: "How a Tiny Mosquito is Driving Big Public Health Challenges",
        date: "Dec 19, 2024",
        views: 268,
      },
      {
        title: "West Nile Virus: What You Need to Know",
        subtitle: "From Discovery in Africa to Growing Risks in Ontario",
        date: "Dec 6, 2024",
        views: 362,
      },
      { title: "Welcome", subtitle: "Our new blog... and chat!", date: "Nov 23, 2024", views: 269 },
    ],
  },
]

export type ClubPublication = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
  authors?: string
  image?: string
  buyLinks?: {
    customLinks?: Array<{
      name: string
      url: string
    }>
  }
}

export const clubPublications: ClubPublication[] = [
  {
    title: "Anthology #1",
    publisher: "Aid4NeedxVoice4Need",
    date: "May 20, 2024",
    description: "A collection of literary works compiled for advocacy and awareness.",
    link: "https://ko-fi.com/s/34b4610f05?published=true#shareNewShopItemModal",
    authors: "Adil Mukhi et al",
    image: "https://blob.v0.dev/anthology.png",
    buyLinks: {
      customLinks: [
        {
          name: "View Collection",
          url: "https://ko-fi.com/s/34b4610f05?published=true#shareNewShopItemModal",
        },
      ],
    },
  },
  {
    title: "Creative Mention: Navigating the Path to Sustainable Healthcare: Innovations and Challenges",
    publisher: "Human Nature Projects Ontario",
    date: "March 16, 2024",
    description: "An article exploring sustainable solutions in healthcare.",
    link: "https://adilmukhi.vercel.app/portfolio/bit.ly/creativemention_adilm",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/creative_mention.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://adilmukhi.vercel.app/portfolio/bit.ly/creativemention_adilm",
        },
      ],
    },
  },
  {
    title: "Light-Based Medical Technologies",
    publisher: "The Bulleteen",
    date: "November 2024",
    description: "An article exploring the applications of light-based technologies in medicine.",
    link: "https://thebulleteen.com/nov-2024/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/light_based.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://thebulleteen.com/nov-2024/",
        },
      ],
    },
  },
  {
    title: "Why Photonic Computing Could Be the Key to Solving the Energy Crisis",
    publisher: "The Bulleteen",
    date: "November 2024",
    description: "A deep dive into the potential of photonic computing in addressing energy challenges.",
    link: "https://thebulleteen.com/nov-2024/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/photonic_computing.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://thebulleteen.com/nov-2024/",
        },
      ],
    },
  },
  {
    title: "Bioengineering Breakthroughs: The End of Organ Transplant Lists?",
    publisher: "The Bulleteen",
    date: "September 2024",
    description: "A discussion on how bioengineering innovations may revolutionize organ transplants.",
    link: "https://thebulleteen.com/sep-2024/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/bioengineering.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://thebulleteen.com/sep-2024/",
        },
      ],
    },
  },
  {
    title: "Telemedicine's Future: A Panacea for Healthcare Inequities or a Temporary Fix?",
    publisher: "The Bulleteen",
    date: "September 2024",
    description: "An analysis of the role of telemedicine in addressing healthcare disparities.",
    link: "https://thebulleteen.com/sep-2024/",
    authors: "Adil Mukhi",
    image: "https://blob.v0.dev/telemedicine.png",
    buyLinks: {
      customLinks: [
        {
          name: "Read Article",
          url: "https://thebulleteen.com/sep-2024/",
        },
      ],
    },
  },
]

// Research portfolio
export type ResearchProject = {
  title: string
  description: string
  image: string
  tags: string[]
  institution: string
  year: string
  doiLinks?: Array<{
    doiNumber: string // Changed from 'text' to 'doiNumber' to separate DOI numbers from URLs
    url: string
  }>
  otherLinks?: Array<{
    text: string
    url: string
  }>
  link?: string
}

export const researchProjects: ResearchProject[] = [
  {
    title: "From Stress to Forgetfulness: Understanding How Stress Hormones Shape Your Memory",
    description:
      "An in-depth 6741 word exploration of how stress hormones affect memory, from short-term impacts to long-term neurological changes.",
    image: "/project3.jpg",
    tags: ["Neuroscience", "Psychology", "Medical Research"],
    institution: "NOSM and GFSS",
    year: "2023-2025",
    doiLinks: [
      {
        doiNumber: "10.13140/RG.2.2.22259.23849", // Updated to use doiNumber field
        url: "https://doi.org/10.13140/RG.2.2.22259.23849",
      },
    ],
    otherLinks: [
        {
          text: "Google Scholar Link",
          url: "https://scholar.google.ca/scholar?q=related:YJckOSRjJKUJ:scholar.google.com/&scioq=From+Stress+to+Forgetfulness:+Understanding+How+Stress+Hormones+Shape+Your+Memory&hl=en&as_sdt=0,5",
        },
    ],
  },
  {
    title: "Astrocytoma: From Diagnosis to Management",
    description: "A comprehensive overview of astrocytoma diagnosis, treatment options, and management strategies.",
    image: "/project2.jpg",
    tags: ["Oncology", "Neuroscience", "Medical Research"],
    institution: "Sunshine 4 Cancer Kids",
    year: "2024",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.16990359",
        url: "https://doi.org/10.5281/zenodo.16990359",
      },
    ],
    otherLinks: [
        {
          text: "Google Scholar Link",
          url: "https://scholar.google.ca/scholar?oi=bibs&hl=en&q=related:CMU0P3CC8KMJ:scholar.google.com/",
        },
        {
          text: "Conference Presentation Link",
          url: "https://doi.org/10.5281/zenodo.16990394",
        },
    ],
  },
  {
    title: "Overcrowding in Emergency Departments: Causes, Consequences, and Solutions",
    description:
      "A research poster presented at the IHL Innovate & Educate 2025 competition, examining the systemic causes and potential solutions for ED overcrowding in Canadian hospitals.",
    image: "/emergency_overcrowding.png",
    tags: ["Public Health", "Emergency Medicine", "Health Systems"],
    institution: "IHL Innovate & Educate",
    year: "2025",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.15763819", // Updated to use doiNumber field
        url: "https://doi.org/10.5281/zenodo.15763819",
      },
    ],
  },
  {
    title: "Synbiotic Therapy with LGG in Stage 3 COPD: Inflammation and Lung Function",
    description:
      "A research project investigating the Effect of Synbiotic Therapy Using Lactobacillus Rhamnosus GG on Systemic Inflammatory Markers (IL-6, TNF-α) and Pulmonary Function (FEV1) in Patients with Stage 3 COPD. Conference: StemBuddies Research Competition, Virtual (Session 1, Part 1)",
    image: "/portfolio/research/copd.png",
    tags: ["Pulmonology", "Microbiology", "Medical Research"],
    institution: "StemBuddies",
    year: "2025",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.16990556",
        url: "https://doi.org/10.5281/zenodo.16990556",
      },
    ],
  },
  {
    title: "Integrating AI in Alzheimer's: Diagnosis Methods, Prevention Strategies, and more!",
    description:
      "A comprehensive research project examining the role of AI in Alzheimer's, covering diagnosis methods, prevention strategies, treatment options, and clinical trials.",
    image: "/alzheimers_research.png",
    tags: ["AI", "Alzheimer's Disease", "Medical Research", "Neurology"],
    institution: "Personal Research",
    year: "2025",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.16990404",
        url: "https://doi.org/10.5281/zenodo.16990404",
      },
    ],
  },
  {
    title: "Mini-Medical Booklet - Heal for Health",
    description:
      "A concise medical booklet providing essential health information for various conditions and treatments.",
    image: "/portfolio/research/booklet.jpg",
    tags: ["Health Education", "Medical Research", "Public Health"],
    institution: "Heal for Health",
    year: "2024",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.16989982",
        url: "https://doi.org/10.5281/zenodo.16989982",
      },
    ],
    otherLinks: [
      {
        text: "View Booklet",
        url: "https://drive.google.com/file/d/18PFkzwb5aEaP7VK-Eg3y1ZntnttjTALH/view?usp=sharing",
      },
    ],
  },
  {
    title: "Research Dump - School Supplies and Education",
    description:
      "A research initiative focused on improving access to school supplies and education for underprivileged students.",
    image: "/portfolio/research/rrs.jpg",
    tags: ["Education", "Social Impact", "Community Research"],
    institution: "Restoring Rainbows SouthLake",
    year: "2024",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.16990412",
        url: "https://doi.org/10.5281/zenodo.16990412",
      },
    ],
  },
  {
    title: "Immunology's Next Frontier: From Classic Vaccines to Cutting-Edge Targeted Therapies",
    description:
      "A deep dive into the evolution of immunology, from traditional vaccines to advanced targeted therapies. Presented at BioMedizone's Immunology Research Competition (Session 1, Part 1)",
    image: "/portfolio/research/biomedizone.jpg",
    tags: ["Immunology", "Medical Research", "Biotechnology"],
    institution: "BioMedizone",
    year: "2024",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.16990489",
        url: "https://doi.org/10.5281/zenodo.16990489",
      },
    ],
  },
  {
    title: "Precision Medicine Unveiled: Nanoparticles in Targeted Drug Delivery Systems",
    description:
      "An exploration of how nanoparticles are revolutionizing precision medicine and targeted drug delivery systems. Presented at the CosmicUs Research Competition (Virtual)",
    image: "/portfolio/research/targeted.jpg",
    tags: ["Nanotechnology", "Pharmacology", "Medical Research"],
    institution: "CosmicUs",
    year: "2023",
    doiLinks: [
      {
        doiNumber: "10.5281/zenodo.16990498",
        url: "https://doi.org/10.5281/zenodo.16990498",
      },
    ],
    otherLinks: [
      {
        text: "View Research Proposal",
        url: "https://doi.org/10.5281/zenodo.16990516",
      },
    ],
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
    title: "Dr. Interested Website",
    description:
      "A website for the Dr. Interested club, featuring webinar schedules, research proposal competitions, and resources for aspiring medical professionals.",
    image: "/portfolio/coding/drinterested.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoLink: "https://drinterested-int.vercel.app/",
    codeLink: "https://github.com/drinterested/drinterested-final",
  },
  {
    title: "Youth Law Advocacy Website",
    description:
      "A website created to support youth in understanding their legal rights and accessing legal resources.",
    image: "/portfolio/coding/youthlaw.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoLink: "https://yla.vercel.app/",
    codeLink: "https://github.com/youthlawadvocacy/website",
  },
  {
    title: "Explore3 Case Comp Website",
    description: "A website created for the Explore3 case competition, showcasing innovative solutions and projects.",
    image: "/portfolio/coding/explore3.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demoLink: "https://explore3.vercel.app/",
    codeLink: "https://github.com/adilMukhi/explore3",
  },
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
    title: "LibSci Website",
    description:
      "A modern and interactive website built for the Lib Sci Club to highlight scientific discussions, projects, and events. Designed for accessibility and ease of navigation.",
    image: "/portfolio/coding/libsci.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    demoLink: "https://libsci.tech/",
    codeLink: "https://github.com/NatSciTech-Int/website",
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
    description:
      "Story 'Illumination' art - An artistic representation of the story 'Illumination,' exploring themes of mythology and space.",
    image: "/portfolio/art/moon (1).jpg",
    images: [
      "/portfolio/art/moon (1).jpg",
      "/portfolio/art/moon (2).jpg",
      "/portfolio/art/moon (3).jpg",
      "/portfolio/art/moon (4).jpg",
      "/portfolio/art/moon (5).jpg",
      "/portfolio/art/moon (6).jpg",
      "/portfolio/art/moon (7).jpg",
      "/portfolio/art/moon (8).jpg",
    ],
    tags: ["Mythology", "Space", "Story Art"],
    type: "art",
  },
  {
    title: "Hello It's Me",
    description:
      "Gif design - A dynamic and expressive GIF design that visually represents self-reflection and identity.",
    image: "/portfolio/art/gifdesign.gif",
    tags: ["GIF", "Digital Art", "Identity"],
    type: "art",
  },
  {
    title: "Buildings Of Pakistan & The UAE",
    description: "Sensory lantern - A sensory lantern inspired by the architectural heritage of Pakistan and the UAE.",
    image: "/portfolio/art/lantern1.jpg",
    images: [
      "/portfolio/art/lantern1.jpg",
      "/portfolio/art/lantern2.jpg",
      "/portfolio/art/lantern3.jpg",
      "/portfolio/art/lantern4.jpg",
    ],
    tags: ["Architecture", "Cultural Art", "Lantern"],
    type: "art",
  },
  {
    title: "A Train Ride Away",
    description:
      "Zine design - A visually captivating zine design depicting the emotions and experiences of a train journey.",
    image: "/portfolio/art/zine_design1.jpg",
    images: [
      "/portfolio/art/zine_design1.jpg",
      "/portfolio/art/zine_design2.jpg",
      "/portfolio/art/zine_design3.jpg",
      "/portfolio/art/zine_design4.jpg",
      "/portfolio/art/zine_design5.jpg",
      "/portfolio/art/zine_design6.jpg",
      "/portfolio/art/zine_design7.jpg",
      "/portfolio/art/zine_design8.jpg",
      "/portfolio/art/zine_design9.jpg",
      "/portfolio/art/zine_design10.jpg",
      "/portfolio/art/zine_design11.jpg",
    ],
    tags: ["Zine", "Travel", "Illustration"],
    type: "art",
  },
  {
    title: "Easter/Navroz: The Blending Of Tradition",
    description:
      "Clay tic-tac-toe design - A handcrafted clay tic-tac-toe board symbolizing the fusion of Easter and Navroz traditions.",
    image: "/portfolio/art/clay_tictactoe1.jpg",
    images: [
      "/portfolio/art/clay_tictactoe1.jpg",
      "/portfolio/art/clay_tictactoe2.jpg",
      "/portfolio/art/clay_tictactoe3.jpg",
      "/portfolio/art/clay_tictactoe4.jpg",
    ],
    tags: ["Cultural Art", "Tradition", "Clay"],
    type: "art",
  },
  {
    title: "Contour Drawings",
    description: "A collection of contour drawings emphasizing form and structure through minimalistic lines.",
    image: "/portfolio/art/contour_drawing (6).jpg",
    images: [
      "/portfolio/art/contour_drawing (1).jpg",
      "/portfolio/art/contour_drawing (2).jpg",
      "/portfolio/art/contour_drawing (3).jpg",
      "/portfolio/art/contour_drawing (4).jpg",
      "/portfolio/art/contour_drawing (5).jpg",
      "/portfolio/art/contour_drawing (6).jpg",
      "/portfolio/art/contour_drawing (7).jpg",
    ],
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
    description:
      "transformation project - a transformation art project that visualizes the devastating impact of plastic pollution on the planet.",
    image: "/portfolio/art/transformation.jpg",
    tags: ["Environmental Art", "Plastic Pollution", "Transformation"],
    type: "art",
  },
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
    description:
      "Achieved Quarter-Finalist placement in the ROPSSAA (Region of Peel Secondary Schools Athletic Association) Boys Doubles Junior Tennis South East Qualifier 2024. Demonstrated strong teamwork, strategic play, and resilience against competitive opponents, showcasing significant improvement from previous seasons. Trained extensively in the off-season to refine technical skills, endurance, and match tactics, contributing to a successful performance in the tournament",
    image: "/portfolio/sports/tennis.jpg",
    videoId: "ztSkKMdQpE0", // Updated with the correct YouTube video ID
    tags: ["Tennis", "Competition", "Team Sports"],
    type: "sports",
  },
]
