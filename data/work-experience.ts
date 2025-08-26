// Update work experiences to use direct image paths
// Example data structure for work experience
export type WorkExperience = {
  title: string
  company: string
  period: string
  description: string
  longDescription?: string
  stats?: string[]
  image: string
  images?: string[] // Additional images for the popup
  skills: string[]
  link: string
  slug: string
  progression?: {
    role: string
    period: string
    description?: string
  }[]
}

export const workExperiences: WorkExperience[] = [
  {
    title: "Founder & President",
    company: "Dr. Interested",
    period: "2024–Present",
    description: "Built a global youth-led health and advocacy organization active across 6 continents.",
    longDescription:
      "Impact: 55,000+ youth reached, 110+ participants in research/webinars, 5+ major events, 375+ appreciation cards sent to nurses, 330+ members with 40+ exec leaders. Partnered with Caritas Canada (Development & Peace) for global advocacy networks.",
    stats: [
      "55,000+ youth reached",
      "110+ participants in research/webinars",
      "5+ major events",
      "375+ appreciation cards",
      "800+ members",
      "6 Med Student Advisors"
    ],
    image: "/drinterested.png",
    skills: ["Leadership", "Advocacy", "Global Outreach", "Public Speaking", "Program Management"],
    link: "https://impact2025.drinterested.tech/",
    slug: "dr-interested-founder",
    progression: [
      {
        role: "Explore3 Program Club Lead",
        period: "2025–Present",
        description: "Co-leading with HIEH, YLA, and LibSci to make a Case Competition at TMU's Ted Rogers School of Management.",
      },
    ],
  },
  {
    title: "Camp Director",
    company: "Dixie Bloor Neighbourhood Centre",
    period: "Summer 2025",
    description: "Led 30+ campers and 6 staff, overseeing programming, safety, and team coordination.",
    stats: ["~40 campers", "5 staff managed", "8 weeks of camp", "3 field trips organized"],
    image: "/dbnc.jpg",
    skills: ["Leadership", "Team Management", "Youth Engagement", "Program Planning"],
    link: "",
    slug: "camp-director",
    progression: [
      {
        role: "Summer Camp Counselor",
        period: "Summer 2024",
        description: "Supported daily camp activities and student engagement.",
      },
    ],
  },
  {
    title: "General Member",
    company: "Young Canadian Roundtable on Health (YCRH)",
    period: "2024–Present",
    description: "Engaged in national youth health advocacy projects and policy initiatives.",
    longDescription:
      "Worked on the OPTIMAL Project (SickKids, CIHR grant) studying youth social media use and contributing to policy guidelines. Engaged in youth-focused health equity projects.",
    stats: ["1 national research project", "Policy recommendations submitted"],
    image: "/ycrh.jpg",
    skills: ["Health Policy", "Research", "Advocacy", "Collaboration"],
    link: "",
    slug: "ycrh-general-member",
  },
  {
    title: "Youth Advisor",
    company: "Children First Canada",
    period: "2024-2025",
    description: "Reviewed the Raising Canada Report (2024) and provided feedback from youth perspective. Participated in consultations with the Office of the Privacy Commissioner to advise on children’s privacy regulations.",
    longDescription:
      "Reviewed the Raising Canada Report (2024) and a consultation with the Office of the Privacy Commissioner.",
    stats: ["Report reviewed", "Recommendations submitted", "Consultation attended", "Policy feedback provided"],
    image: "/childernfirstcanada.jpg",
    skills: ["Youth Advocacy", "Policy Input", "Report Analysis", "Policy Consultation", "Youth Advocacy", "Research"],
    link: "",
    slug: "children-first-advising",
  },
    {
    title: "Youth Collective Member",
    company: "KPE Rethink Sport Collective, University of Toronto",
    period: "2024–Present",
    description: "Contributed to national research and youth advocacy initiatives aimed at shaping the future of sport in Canada, including policy recommendations and evidence-based proposals.",
    stats: ["Supported the Poster presented at NASPSPA Conference", "Signed onto recommendations submitted to Future of Sport Commission"],
    image: "/uoftkpe_logo.jpg",
    skills: ["Research", "Advocacy", "Data Analysis", "Public Speaking"],
    link: "https://www.rethinksportproject.com/general-5",
    slug: "kpe-youth-collective",
  },
  {
    title: "National High School Group Lead",
    company: "Results Canada",
    period: "2024–Present",
    description: "Led campaigns to raise awareness on global poverty and youth engagement. Received the Outstanding Youth Award.",
    longDescription: "Led campaigns to raise awareness on global poverty and youth engagement. Panel speaker for May 2025 Action Kickoff. Recognized on World Youth Skills Day and published by Results Canada.",
    stats: ["12+ LTEs Published", "200+ hours contributed", "Panel speaker", "Campaigns led", "Featured in World Youth Skills Day"],
    image: "/results.jpg",
    skills: ["Advocacy", "Writing", "Public Speaking", "Leadership", "Campaign Management"],
    link: "https://resultscanada.ca/celebrating-our-volunteer-award-winners-2/#:~:text=2025%20volunteers%20award,Mukhi%20(Mississauga%20group)",
    slug: "results-canada-advocate",
    progression: [
      {
        role: "General Member (with voting rights)",
        period: "2023–2024",
        description: "Participated in advocacy campaigns and contributed to group decisions."
      }
    ]
  },
  {
    title: "SDG Accelerator Program Facilitator",
    company: "Children First Canada",
    period: "2025",
    description: "Taught Sustainable Development Goals to youth ages 6–16.",
    stats: ["6–16 year-olds taught", "Workshops facilitated"],
    image: "/childernfirstcanada.jpg",
    skills: ["Education", "Youth Engagement", "Workshop Facilitation"],
    link: "",
    slug: "children-first-sdg",
  },
  {
    title: "Head of Writing",
    company: "MedMind",
    period: "2024–Present",
    description: "Directed content creation for youth mental health platform.",
    stats: ["Content strategy developed", "Articles published"],
    image: "/medmind.png",
    skills: ["Writing", "Content Strategy", "Youth Engagement", "Health Communication"],
    link: "https://medmindblog.wixsite.com/medmind/team-4#:~:text=Adil%20Mukhi,Head%20of%20Writing",
    slug: "medmind-writing",
  },
  {
    title: "Director of R&D",
    company: "NeuroGenesis",
    period: "2024–Present",
    description: "Led youth research projects in health and neuroscience, connecting students with mentors.",
    stats: ["15+ projects led", "Students mentored"],
    image: "/neurogensis.jpg",
    skills: ["Research", "Leadership", "Mentorship", "Neuroscience"],
    link: "https://www.linkedin.com/company/neurogenesis-pakistan/posts/?feedView=all",
    slug: "neurogenesis-rd",
  },
  {
    title: "Assistant Director of Publications",
    company: "Harmony Health Initiative",
    period: "2024–Present",
    description: "Managed communications and publications for youth health initiatives.",
    stats: ["5 publications managed"],
    image: "/HHI.jpg",
    skills: ["Communication", "Editing", "Publishing", "Leadership"],
    link: "https://harmonyhealthiniti.wixsite.com/harmony-health-initi/blank-1",
    slug: "hhi-publications",
  },
  {
    title: "Youth Council Member",
    company: "Eco Brothers Youth Council",
    period: "2024-Present",
    description: "Contributed to local environmental advocacy and youth initiatives.",
    stats: ["3 projects led", "Local community engagement"],
    image: "/ecobrothers.png",
    skills: ["Environmental Advocacy", "Leadership", "Event Planning"],
    link: "https://www.ecobrothersinc.org/meet-the-team-1?pgid=lyhb4q9o-a578f188-2145-41e8-ae65-89b812b0333c",
    slug: "eco-brothers",
  },
  {
    title: "Events Director",
    company: "World In Focus",
    period: "2025–Present",
    description: "Organized global awareness campaigns and youth engagement events.",
    stats: ["5 events organized", "100+ participants reached"],
    image: "/WiF.png",
    skills: ["Event Planning", "Leadership", "Advocacy", "Project Management"],
    link: "https://www.worldinfocus.ca/meet-the-team",
    slug: "world-in-focus-events",
  },
  {
    title: "Vice-President",
    company: "StemHiss",
    period: "2025–Present",
    description: "Oversaw STEM-related youth engagement and organizational leadership.",
    stats: ["20 members led", "STEM workshops hosted"],
    image: "/stemhiss.jpg",
    skills: ["Leadership", "STEM Education", "Organization Management"],
    link: "https://stemhiss.vercel.app/contact",
    slug: "stemhiss-vp",
  },
  {
    title: "Director of Technology",
    company: "Liberation Science",
    period: "2025–Present",
    description: "Led tech strategy and supported youth in scientific advocacy.",
    stats: ["Technology initiatives led", "Events supported"],
    image: "/libscitech.png",
    skills: ["Technology Strategy", "Leadership", "STEM Advocacy"],
    link: "https://libsci.tech/members",
    slug: "libsci-tech",
  },
    {
    title: "Peer Helper",
    company: "Glenforest Secondary School",
    period: "2023-Present",
    description: "Tutored peers and supported academic success.",
    stats: ["10 students assisted", "Peer mentorship provided"],
    image: "/peer-helpers.png",
    skills: ["Tutoring", "Mentorship", "Communication"],
    link: "",
    slug: "glenforest-peer-helper",
  },
  {
    title: "Athletics Council Member",
    company: "Glenforest Secondary School",
    period: "2023–Present",
    description: "Organized school events, ensuring student safety and engagement.",
    stats: ["Events organized", "Award: Exemplary Contribution to Athletics"],
    image: "/athletic-council.jpg",
    skills: ["Event Planning", "Leadership", "Teamwork"],
    link: "https://www.instagram.com/p/DKkCYoUxil7/?hl=en&img_index=6",
    slug: "glenforest-athletics",
  },
  {
    title: "French Club Vice-President",
    company: "Glenforest Secondary School",
    period: "2024–2025",
    description: "Led French Club activities and initiatives.",
    stats: ["Club events organized", "Membership growth"],
    image: "/frenchclub.jpg",
    skills: ["Leadership", "Event Planning", "Teamwork"],
    link: "",
    slug: "glenforest-french-vp",
    progression: [
      {
        role: "French Club Junior Exec",
        period: "2023–2024",
        description: "Supported French Club activities and events.",
      },
    ],
  },
  {
    title: "Newcomers Club Events Coordinator",
    company: "Glenforest Secondary School",
    period: "2024–2025",
    description: "Organized events for newcomer students to support integration.",
    stats: ["3 events organized", "50+ participants engaged"],
    image: "/newcomersclub.jpg",
    skills: ["Event Planning", "Coordination", "Leadership"],
    link: "",
    slug: "glenforest-newcomers",
    progression: [
      {
        role: "Member",
        period: "2023–2024",
        description: "Participated in club activities and assisted with events."
      }
    ]
  },
  {
    title: "Stem Fellowship Vice-President",
    company: "Glenforest Secondary School",
    period: "2024–2025",
    description: "Oversaw STEM-related student initiatives and led organizational activities.",
    stats: ["20 members led", "STEM workshops hosted"],
    image: "/stemfellowship.jpg",
    skills: ["Leadership", "STEM Education", "Organization Management"],
    link: "",
    slug: "stemfellowship-vp",
    progression: [
      {
        role: "General Member",
        period: "2023–2024",
        description: "Contributed to STEM projects and club activities."
      }
    ]
  },
  {
    title: "IBSL Junior Exec",
    company: "Glenforest Secondary School",
    period: "2023–2024",
    description: "Supported IBSL activities and administration.",
    stats: ["Club activities assisted", "10+ events supported"],
    image: "/ibslgfss.jpg",
    skills: ["Teamwork", "Organization"],
    link: "",
    slug: "glenforest-ibsl",
  },
  {
    title: "UI/UX Design Intern",
    company: "Jammy",
    period: "2025-Present",
    description: "Developed user-friendly interfaces for health-tech platforms.",
    stats: ["3 designs completed", "Usability improvements implemented"],
    image: "/jammy.png",
    skills: ["UI/UX Design", "Prototyping", "User Research", "Product Design"],
    link: "",
    slug: "jammy-ux-intern",
  },
    {
    title: "Director of Technology",
    company: "Youth Law Advocacy",
    period: "2025–Present",
    description: "Developed tech systems to support youth-led legal advocacy initiatives.",
    stats: ["2 systems implemented", "Tech workshops conducted"],
    image: "/yla-logo.png",
    skills: ["Technology Management", "Leadership", "Advocacy", "Problem Solving"],
    link: "",
    slug: "youth-law-tech",
  },
  {
    title: "Director of Technology",
    company: "Hope In Every Hand",
    period: "2025–Present",
    description: "Managed technology platforms to support youth initiatives.",
    stats: ["Platform launched", "Volunteer engagement improved"],
    image: "/hieh.jpg",
    skills: ["Technology", "Project Management", "Youth Leadership"],
    link: "",
    slug: "hope-in-every-hand-tech",
  },
  {
    title: "STEM Op-Ed Contributor",
    company: "The Bullteen",
    period: "2024",
    description: "Wrote accessible articles on STEM topics and youth advocacy.",
    stats: ["6 articles written", "Audience reach 500+"],
    image: "/bulleteen.png",
    skills: ["Writing", "STEM Knowledge", "Communication"],
    link: "https://thebulleteen.com/nov-2024/",
    slug: "bullteen-stem-oped",
  },
  {
    title: "Math Question Writer",
    company: "CompetifyHub",
    period: "2024",
    description: "Designed competition-level math questions for middle and high school contests.",
    stats: ["20 High Level Math Questions Created"],
    image: "/competifyhub.jpg",
    skills: ["Mathematics", "Problem Solving", "Content Creation"],
    link: "https://competifyhub.com/",
    slug: "competifyhub-math",
  },
  {
    title: "Research Aid",
    company: "Restoring Rainbows Southlake",
    period: "2024",
    description: "Conducted research on education crisis mitigation strategies.",
    stats: ["Over 30 pages of research created"],
    image: "/RRsouthlake.jpg",
    skills: ["Research", "Data Analysis", "Education Policy"],
    link: "https://www.instagram.com/restoring_rainbows_southlake/",
    slug: "restoring-rainbows-research",
  },
]
