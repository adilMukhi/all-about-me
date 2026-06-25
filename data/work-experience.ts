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
    title: "Founder & Executive Director",
    company: "Dr. Interested",
    period: "2024–Present",
    description: "Leading Dr. Interested, I design programs and initiatives that empower youth through mentorship, advocacy, and impactful events. I guide a team of students, fostering community engagement and creating opportunities that reach thousands nationally and internationally.",
    longDescription: "As Founder & Executive Director, I lead Dr. Interested to engage youth globally, organize impactful events, and foster mentorship programs, connecting 60,000+ youth and collaborating with medical student advisors to create research, advocacy, and educational opportunities across multiple continents.",
    stats: [
      "60,000+ youth reached",
      "11+ major events",
      "1,000,000+ marketing reach",
      "900+ members",
      "6 Med Student Advisors",
      "Over 250 participants in our 2025 research competition",
    ],
    image: "/drinterested.png",
    skills: ["Leadership", "Advocacy", "Global Outreach", "Public Speaking", "Program Management"],
    link: "/experience/drinterested",
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
    description: "Directed a nonprofit summer camp, leading 40 campers and 5 staff, ensuring safe, engaging programs and coordinating interdepartmental activities.",
    longDescription: "As Camp Director, I managed 40 campers and 5 staff across 8 weeks, organized 3 major field trips, and collaborated with multiple departments to deliver safe, educational, and fun experiences. Focused on leadership, team coordination, and enhancing youth engagement throughout the program.",
    stats: ["40 campers led", "5 staff managed", "8 weeks of camp", "3 field trips organized"],
    image: "/dbnc.jpg",
    skills: ["Leadership", "Team Management", "Youth Engagement", "Program Planning"],
    link: "",
    slug: "camp-director",
    progression: [
      {
        role: "Summer Camp Counselor",
        period: "Summer 2024",
        description: "Assisted with daily activities, supporting engagement and learning for 40 campers.",
      },
    ],
  },
  {
    title: "Co–Knowledge Mobilization Champion",
    company: "The Hospital for Sick Children",
    period: "May 2026 – Present",
    description: "Currently serving as Co–Knowledge Mobilization Champion for the CIHR Team Grant: Healthy Youth study; previously served as Youth Advisor on the OPTIMAL research project.",
    longDescription: "Originally worked as a contract part-time Youth Advisor on the OPTIMAL research project at The Hospital for Sick Children. Continuation of this role as Co–Knowledge Mobilization Champion includes co-facilitating youth engagement sessions, leading qualitative data collection through participant discussions, and supporting the design of inclusive, youth-centered research environments with strategies to promote healthier digital habits.",
    stats: [
      "Co–Knowledge Mobilization Champion (current)",
      "Previously Youth Advisor on the OPTIMAL research project",
      "Supported CIHR-funded youth social media and well-being research",
      "Co-facilitated youth engagement sessions",
      "Led qualitative data collection through participant discussions"
    ],
    image: "/sickkids.jpg",
    skills: ["Research", "Youth Engagement", "Qualitative Data Collection", "Health Advocacy", "Facilitation"],
    link: "",
    slug: "sickkids-youth-advisor",
    progression: [
      {
        role: "Youth Advisor",
        period: "Jan 2026 – May 2026",
        description: "Served as a Youth Advisor on the OPTIMAL research project, supporting youth engagement and qualitative data collection."
      }
    ],
  },
  {
    title: "Youth Advisor",
    company: "Children First Canada",
    period: "2024-2025",
    description: "Reviewed the Raising Canada Report (2024) and provided feedback from youth perspective. Participated in consultations with the Office of the Privacy Commissioner to advise on children’s privacy regulations.",
    longDescription:
      "Reviewed the Raising Canada Report (2024) and attended a consultation with the Office of the Privacy Commissioner of Canada. In November 2025, I was invited to co-host the Young Children’s Parliament, a program empowering youth to engage directly in government and policymaking.",
    stats: [
      "Report reviewed",
      "Recommendations submitted",
      "Consultation attended",
      "Policy feedback provided",
      "Invited co-host – Young Children’s Parliament (Nov 2025)"
    ],
    image: "/childernfirstcanada.jpg",
    skills: ["Youth Advocacy", "Policy Input", "Report Analysis", "Policy Consultation", "Youth Advocacy", "Research"],
    link: "",
    slug: "children-first-advising",
  },
  {
    title: "Youth Advisory Committee Member",
    company: "Aga Khan Foundation Canada",
    period: "Apr 2026 – Dec 2026",
    description: "Serving on AKFC's Youth Advisory Committee, contributing to content creation, outreach and engagement, research and evaluation, and subcommittee work.",
    longDescription: "As a member of AKFC's Youth Advisory Committee, I collaborate with peers across Canada on content creation, outreach and engagement, and research and evaluation. I also participate in up to two subcommittees focused on areas such as communications, research, and priority initiatives.",
    stats: [
      "Content creation",
      "Outreach and engagement",
      "Research and evaluation",
      "Up to 2 subcommittees"
    ],
    image: "/akfc-yac-2026.png",
    skills: ["Youth Advisory", "Content Creation", "Outreach", "Research", "Community Engagement"],
    link: "https://www.akfc.ca/yac-recruitment/#1748574966734-b6fa013e-4f95",
    slug: "akfc-yac-2026",
  },
  {
    title: "Co-Chair",
    company: "5Rights Youth Council (5Rights Foundation)",
    period: "May 2026 – Present",
    description: "Elected as one of two Co-Chairs (spokespersons) of the 5Rights Youth Council, helping advance children's digital rights, online safety, and youth-centered policy and research.",
    longDescription: "As Co-Chair of the 5Rights Youth Council, I was elected as one of two youth spokespersons to help lead the council's work on digital rights, online safety, and policy engagement. I represent youth voice in research, advocacy, and initiatives that shape safer digital environments for children and young people, including contributing to a video for the AI for Good Summit in Geneva.",
    stats: [
      "Elected Co-Chair (1 of 2 spokespersons)",
      "Youth digital rights advocacy",
      "Policy and research input",
      "Online safety focus"
    ],
    image: "/5rights-youth-council-2026.png",
    skills: ["Digital Rights", "Youth Advocacy", "Policy Engagement", "Online Safety", "Research"],
    link: "https://5rightsfoundation.com/",
    slug: "5rights-youth-council-2026",
    progression: [
      {
        role: "Youth Council Member",
        period: "2025 – May 2026",
        description: "Joined the 5Rights Youth Council to help advance children's digital rights, online safety, and youth-centered policy and research before being elected Co-Chair.",
      },
    ],
  },
  {
    title: "High School Committee Chair",
    company: "National Youth Advisory Council (NYAC) of the Mood Disorders Society of Canada",
    period: "Feb 2026 – Present",
    description: "Leading the High School Committee within the National Youth Advisory Council to advance youth-led mental health initiatives across Canada.",
    longDescription: "As High School Committee Chair, I lead and mentor a national network of student leaders to design and implement advocacy, awareness, and engagement campaigns. I collaborate with council members and stakeholders to strengthen youth voice in mental health policy and programming, spearheading projects focused on accessibility, equity, and peer support while facilitating strategic planning and execution with measurable community impact.",
    stats: [
      "Leading the NYAC High School Committee",
      "Mentoring a national network of student leaders",
      "Driving advocacy, awareness, and engagement campaigns",
      "Collaborating on youth mental health policy and programming",
      "Facilitating planning and implementation of high-impact initiatives"
    ],
    image: "/NYACofMDSC.png",
    skills: ["Youth Advocacy", "Mental Health Awareness", "Leadership", "Strategic Planning", "Community Engagement"],
    link: "https://mdsc.ca/nyac/#:~:text=of%20Fundraising%20Professionals.-,High%20School%20Committee,-Adil%20Mukhi%20%7C%20High",
    slug: "nyac-mdsc-volunteer",
    progression: [
      {
        role: "General Volunteer",
        period: "Jun 2025 – Jan 2026",
        description: "Contributed to national youth mental health initiatives and supported advocacy efforts across Canada."
      }
    ]
  },
  {
    title: "Youth Collective Member",
    company: "KPE Rethink Sport Collective, University of Toronto",
    period: "2024–Present",
    description: "Engaging in national sport research and youth advocacy, reviewing work and signing recommendations shaping the future of sport in Canada.",
    longDescription: "As a Youth Collective Member, I contribute to national research and youth advocacy initiatives focused on shaping the future of sport in Canada. Reviewed and provided feedback on a poster presented at the NASPSPA Conference, and signed recommendations submitted to the Future of Sport in Canada Commission, supporting evidence-based youth engagement in sport.",
    stats: ["Poster reviewed for NASPSPA Conference", "Recommendations signed for Future of Sport Commission", "National research collaboration"],
    image: "/uoftkpe_logo.jpg",
    skills: ["Research", "Advocacy", "Data Analysis", "Public Speaking"],
    link: "https://www.rethinksportproject.com/general-5",
    slug: "kpe-youth-collective",
  },
  {
    title: "General Member",
    company: "Young Canadian Roundtable on Health (YCRH)",
    period: "2024–Present",
    description: "Participated in national youth health projects, contributing to research, policy, and advocacy initiatives across Canada.",
    longDescription: "Supported the CIHR grant submission for the OPTIMAL Project (SickKids) studying youth social media use. Collaborated with 20+ members nationwide on youth health equity projects, policy recommendations, and consultations. Created over 8 social media posts for the YCRH network to amplify youth voices in health policy and advocacy.",
    stats: [
      "20+ members collaborated with",
      "1 national research project",
      "Policy recommendations submitted",
      "8+ social media posts created for YCRH network"
    ],
    image: "/ycrh.jpg",
    skills: ["Health Policy", "Research", "Advocacy", "Collaboration"],
    link: "",
    slug: "ycrh-general-member"
  },
  {
    title: "National High School Group Lead",
    company: "Results Canada",
    period: "2024–Present",
    description: "Led campaigns to raise awareness on global poverty and youth engagement. Received the Outstanding Youth Award.",
    longDescription: "Led a group of 49 members nationwide, raising awareness on global poverty and youth engagement. Served as a Panel Speaker for the Results Action Kickoff in May 2025 and delivered a November 2025 Action Kickoff talk on how to publish LTEs. Awarded the Outstanding Youth Award (one of two nationally). Featured in World Youth Skills Day in both 2024 and 2025, with 12+ LTEs published and 200+ hours of advocacy contributed.",
    stats: [
      "Led a group of 49 members nationwide",
      "12+ LTEs published",
      "Contributed 200+ hours",
      "Panel Speaker – Results Action Kickoff May 2025",
      "Speaker – November 2025 Action Kickoff (How to Publish LTEs)",
      "Awarded Outstanding Youth Award (1 of 2 nationally)",
      "Featured in World Youth Skills Day (2024 & 2025)"
    ],
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
    title: "Committee Lead, Dress Loud Day 2026",
    company: "VOICE for Deaf and Hard of Hearing Children",
    period: "Dec 2025–Present",
    description: "Working with VOICE to support Deaf and hard of hearing children through advocacy and youth-focused initiatives.",
    longDescription: "Since December 2025, I have supported VOICE for Deaf and Hard of Hearing Children through community initiatives and youth engagement. In February 2026, I took on a leadership role as Committee Lead for Dress Loud Day 2026, helping coordinate planning, collaboration, and outreach.",
    stats: [
      "Started with VOICE in Dec 2025",
      "Promoted to Committee Lead in Feb 2026",
      "Leading Dress Loud Day 2026 planning and coordination"
    ],
    image: "/voice-logo-2023-large.png",
    skills: ["Leadership", "Advocacy", "Event Coordination", "Youth Engagement", "Community Outreach"],
    link: "https://www.voicefordeafkids.com/page-1075425",
    slug: "voice-dress-loud-day",
    progression: [
      {
        role: "Volunteer",
        period: "Dec 2025–Jan 2026",
        description: "Supported VOICE initiatives and youth-centered community engagement activities."
      }
    ]
  },
  {
    title: "SDG Accelerator Program Facilitator",
    company: "Children First Canada",
    period: "2025",
    description: "Taught Sustainable Development Goals to youth ages 6–16.",
    stats: ["6–16 year-olds taught", "8 Workshops facilitated", "Led Group of 6 students"],
    image: "/childernfirstcanada.jpg",
    skills: ["Education", "Youth Engagement", "Workshop Facilitation"],
    link: "",
    slug: "children-first-sdg",
  },
  {
    title: "Youth Council Member",
    company: "Eco Brothers Youth Council",
    period: "2024-Present",
    description: "Contributed to local environmental advocacy and youth initiatives.",
    image: "/ecobrothers.png",
    skills: ["Environmental Advocacy", "Leadership", "Event Planning"],
    link: "https://www.ecobrothersinc.org/meet-the-team-1?pgid=lyhb4q9o-a578f188-2145-41e8-ae65-89b812b0333c",
    slug: "eco-brothers",
  },
  {
    title: "Head of Writing",
    company: "MedMind",
    period: "Dec 2024 – Oct 2025",
    description: "As Head of Writing at MedMind, I oversaw a team of 36 and the creation of 18 articles, serving for over one year and contributing 30+ hours of voluntary service in management and mentorship.",
    longDescription: "Directed content creation and team mentorship for MedMind, leading 36 members and publishing 18 articles. Focused on youth mental health communication and supporting peers through writing, editing, and guidance.",
    stats: ["36 team members managed", "18 articles published", "30+ volunteer hours", "1+ year of service", "Mentorship provided"],
    image: "/medmind.png",
    skills: ["Writing", "Content Strategy", "Youth Engagement", "Health Communication", "Mentorship"],
    link: "https://medmindblog.wixsite.com/medmind/team-4#:~:text=Head%20of%20Writing-,Adil%20Mukhi,-Head%20of%20Writing",
    slug: "medmind-writing"
  },
  {
    title: "Assistant Director of Publications",
    company: "Harmony Health Initiative",
    period: "Oct 2024 – Oct 2025",
    description: "As Assistant Director of Publications at Harmony Health Initiative, I committed over one year and 20+ hours of service, publishing 8 articles and leading a team of 7.",
    longDescription: "Managed and coordinated publications for Harmony Health Initiative, contributing to the creation of 8 articles and providing leadership for a 7-member team. Supported youth health awareness through communication and outreach.",
    stats: ["7 team members led", "8 articles published", "20+ volunteer hours", "1+ year of service", "Health publications managed"],
    image: "/HHI.jpg",
    skills: ["Communication", "Editing", "Publishing", "Leadership", "Team Management"],
    link: "https://harmonyhealthiniti.wixsite.com/harmony-health-initi/blank-1",
    slug: "hhi-publications"
  },
  {
    title: "Director of R&D",
    company: "NeuroGenesis",
    period: "Oct 2024 – Oct 2025",
    description: "As Director of R&D at NeuroGenesis, I worked with a team of 5 to produce 13 social media posts, dedicating over one year and 20+ hours to advancing youth research and mentorship.",
    longDescription: "Directed research development initiatives at NeuroGenesis, working with 5 members to create 13 social media posts focused on neuroscience and health advocacy. Supported mentorship and youth-driven research projects.",
    stats: ["5 team members collaborated with", "13 social posts created", "20+ volunteer hours", "1+ year of service", "Research initiatives led"],
    image: "/neurogensis.jpg",
    skills: ["Research", "Leadership", "Mentorship", "Neuroscience", "Science Communication"],
    link: "https://www.linkedin.com/company/neurogenesis-pakistan/posts/?feedView=all",
    slug: "neurogenesis-rd"
  },
  {
    title: "Peer Helper",
    company: "Glenforest Secondary School",
    period: "2023–Present",
    description: "Provided academic support and mentorship in Math and English, helping peers succeed over two years of dedicated service.",
    longDescription: "As a Peer Helper, I tutored and mentored approximately 40 students in Math and English over two years, dedicating 110 hours to supporting academic growth. Focused on improving understanding, building confidence, and fostering positive peer relationships through effective communication and guidance.",
    stats: ["40 students assisted", "110 hours of tutoring and mentorship", "2 years of service"],
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
    title: "President",
    company: "Glenforest Secondary School Newcomers Club",
    period: "2025–2026",
    description: "President of Glenforest Secondary School's Newcomers Club for the 2025–26 school year. Leading events with over 50 participants and a team of 7, while working closely with teachers and community partners.",
    image: "/newcomersclub.png",
    skills: ["Leadership", "Event Planning", "Team Management", "Community Engagement"],
    link: "",
    slug: "glenforest-newcomers",
    progression: [
      {
        role: "Events Coordinator",
        period: "2024–2025",
        description: "Organized events for newcomer students to support integration."
      },
      {
        role: "Member",
        period: "2023–2024",
        description: "Participated in club activities and assisted with events."
      }
    ]
  },
  {
    title: "Research Aid",
    company: "Restoring Rainbows Southlake",
    period: "2024",
    description: "Supported research on education crisis strategies, analyzing data and contributing to actionable insights.",
    longDescription: "As a Research Aid, I conducted over 30 pages of research on education crisis mitigation strategies for Restoring Rainbows Southlake. Focused on data analysis, synthesizing information, and providing insights to support organizational planning and evidence-based decision-making.",
    stats: ["30+ pages of research created", "Education policy insights contributed"],
    image: "/RRsouthlake.jpg",
    skills: ["Research", "Data Analysis", "Education Policy"],
    link: "https://www.instagram.com/restoring_rainbows_southlake/",
    slug: "restoring-rainbows-research",
  },
]
