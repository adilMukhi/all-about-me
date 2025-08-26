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
}

// Add or modify entries in this array
export const workExperiences: WorkExperience[] = [
  {
    title: "President and Founder",
    company: "Dr. Interested",
    period: "Dec 2024 - Present (3 months)",
    description:
      "Dr. Interested is a student-led initiative aiming to inspire future medical professionals through research, mentorship, and outreach.",
    longDescription:
      "Dr. Interested is a comprehensive student-led initiative that I founded to bridge the gap between aspiring medical professionals and the healthcare industry. Through strategic partnerships and innovative programs, we've created a platform that not only educates but also provides hands-on experience and mentorship opportunities. Our multi-faceted approach includes research programs, community outreach, appreciation initiatives for healthcare workers, and educational content that reaches thousands of students globally.",
    stats: [
      "Educated 20,000+ people through initiatives",
      "Enrolled 40+ individuals in research programs",
      "Sent 375+ appreciation cards to nurses",
      "Grown to 200+ members with 30+ executives",
      "Received $100 grant for mission advancement",
    ],
    image: "/drinterested.png",
    skills: ["Leadership", "Project Management", "Community Building", "Medical Education", "Networking"],
    link: "https://linktr.ee/dr.interested",
    slug: "dr-interested-founder",
  },
  {
    title: "Youth Advisor",
    company: "University of Toronto Faculty of Kinesiology and Physical Education",
    period: "Nov 2024 - Present (4 months)",
    description:
      "Collaborates on the KPE Rethink Sports research project, providing insights on inclusivity in sports initiatives.",
    longDescription:
      "As a Youth Advisor for the University of Toronto's Faculty of Kinesiology and Physical Education, I contribute valuable youth perspectives to the groundbreaking KPE Rethink Sports research project. This role involves analyzing current sports programs, identifying barriers to participation, and developing innovative solutions to make sports more inclusive and accessible for all demographics. My contributions have been recognized with an honorarium, reflecting the value of youth input in academic research.",
    stats: [
      "Contributed to major research publication",
      "Received honorarium for valuable contributions",
      "Collaborated with university faculty and researchers",
      "Provided insights on youth sports participation",
    ],
    image: "/uoftkpe_logo.jpg",
    skills: ["Research", "Sports Inclusivity", "Advisory Skills", "Data Analysis", "Presentation Skills"],
    link: "https://www.linkedin.com/in/adil-mukhi-6aba27246/#:~:text=and%20%2B3%20skills-,Youth%20Advisor,-Youth%20Advisor",
    slug: "uoft-youth-advisor",
  },
  {
    title: "General Member",
    company: "YCRH - Young Canadians Roundtable on Health",
    period: "Jul 2024 - Present (8 months)",
    description:
      "Collaborates with youth to address critical health issues affecting Canadians, advocating for improved youth health and well-being.",
    longDescription:
      "The Young Canadians Roundtable on Health brings together passionate youth from across Canada to tackle the most pressing health challenges facing our generation. As a General Member, I participate in policy discussions, contribute to research initiatives, and help develop actionable recommendations for government and healthcare organizations. This role has provided me with deep insights into Canada's healthcare system and the unique challenges facing young Canadians.",
    stats: [
      "Participated in national health policy discussions",
      "Contributed to multiple research initiatives",
      "Collaborated with youth from across Canada",
      "Developed policy recommendations for government",
    ],
    image: "/ycrh.jpg",
    skills: ["Health Advocacy", "Policy Analysis", "Teamwork", "Public Speaking", "Problem-Solving"],
    link: "https://sandboxproject.ca/about-the-ycrh",
    slug: "ycrh-member",
  },
  {
    title: "Director of Research & Development",
    company: "NeuroGenesis Pakistan",
    period: "Oct 2024 - Present (5 months)",
    description:
      "Oversees research for educational content and helps develop new ideas for posts and events focused on healthcare education.",
    longDescription:
      "Leading the Research & Development division at NeuroGenesis Pakistan, I spearhead the creation of evidence-based educational content that makes complex neuroscience concepts accessible to diverse audiences. This role involves coordinating with international healthcare professionals, developing innovative educational strategies, and ensuring all content meets the highest standards of scientific accuracy while remaining engaging for our target audience.",
    stats: [
      "Developed 50+ educational posts and materials",
      "Coordinated with international healthcare professionals",
      "Increased engagement by 200% through innovative content",
      "Organized 5+ educational events and workshops",
    ],
    image: "/neurogensis.jpg",
    skills: [
      "Research Management",
      "Content Development",
      "Neuroscience Knowledge",
      "Event Planning",
      "Cross-Cultural Communication",
    ],
    link: "https://www.instagram.com/neurogenesis.pk/",
    slug: "neurogenesis-director",
  },
  {
    title: "Assistant Director of Publications",
    company: "Harmony Health Initiative",
    period: "Oct 2024 - Present",
    description:
      "As Assistant Director, I oversee the publications department, contributing to magazine and newsletter content with a focus on health and wellness.",
    image: "/HHI.jpg",
    skills: ["Editorial Skills", "Content Creation", "Team Management", "Health Writing", "Publication Process"],
    link: "https://harmonyhealthiniti.wixsite.com/harmony-health-initi",
    slug: "harmony-health-publications",
  },
  {
    title: "Summer Camp Counselor",
    company: "Dixie Bloor Neighbourhood Centre",
    period: "Jun 2024 - Aug 2024",
    description:
      "Led activities and provided mentorship for youth, creating a positive environment for over 35 students.",
    image: "/dbnc.jpg",
    skills: ["Youth Mentorship", "Activity Planning", "Leadership", "Conflict Resolution", "Child Safety"],
    link: "https://www.dixiebloor.ca/",
    slug: "summer-camp-counselor",
  },
  {
    title: "Vice President for STEM Fellowship Chapter",
    company: "Glenforest Secondary School",
    period: "Oct 2024 - Present (5 months)",
    description:
      "Leads projects to inspire students to pursue careers in STEM fields, including planning workshops, contests, and outreach programs.",
    image: "/stemfellowship.jpg",
    skills: ["STEM Education", "Event Organization", "Project Management", "Public Speaking", "Peer Leadership"],
    link: "https://live.stemfellowship.org/",
    slug: "stem-fellowship-vp",
  },
  {
    title: "Vice President at French Club",
    company: "Glenforest Secondary School",
    period: "Sep 2024 - Present (6 months)",
    description:
      "Leads initiatives to promote French language and culture, organizing events and fostering student engagement.",
    image: "/frenchclub.jpg",
    skills: ["French Language", "Cultural Awareness", "Event Planning", "Team Collaboration", "Language Education"],
    link: "https://www.instagram.com/gfssfrenchclub/",
    slug: "french-club-vp",
  },
  {
    title: "Event Coordinator at Newcomers Club",
    company: "Glenforest Secondary School",
    period: "Sep 2024 - Present (6 months)",
    description:
      "Organizes events to help new students integrate into the school community, planning and promoting social and cultural activities.",
    image: "/newcomersclub.jpg",
    skills: ["Event Coordination", "Cultural Sensitivity", "Social Integration", "Time Management", "Communication"],
    link: "https://www.instagram.com/gfssnewcomersclub/",
    slug: "newcomers-club-coordinator",
  },
  {
    title: "General Member",
    company: "HOSA Canada",
    period: "Sep 2023 - Present",
    description:
      "Developing leadership and technical skills in healthcare through workshops, competitions, and collaborative projects.",
    image: "/hosa.jpg",
    skills: ["Healthcare Knowledge", "Competitive Skills", "Teamwork", "Medical Ethics", "Problem-Solving"],
    link: "https://hosacanada.org/home/",
    slug: "hosa-member",
  },
  {
    title: "Pediatrics Cancer Research Writer",
    company: "Sunshine 4 Kids Cancer",
    period: "Jul 2024 - Aug 2024",
    description:
      "Contributed to research and presentation on Astrocytomas in the context of brain and spinal cord tumors.",
    image: "/sun4cancer.jpg",
    skills: ["Medical Writing", "Cancer Research", "Data Analysis", "Scientific Communication", "Pediatric Oncology"],
    link: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/research#:~:text=5-,sunshine4cancerkid,Astrocytoma%3A%20From%20Diagnosis%20to%20Management%20%E2%80%93%20A%20Comprehensive%20Overview,-Adil%20Mukhi%2C%20Nimeesha",
    slug: "cancer-research-writer",
  },
  {
    title: "Youth Advisor",
    company: "Children First Canada",
    period: "Jul 2024",
    description:
      "Provided input for the Raising Canada Report, representing the youth perspective on critical issues affecting children in Canada.",
    image: "/childernfirstcanada.jpg",
    skills: ["Policy Analysis", "Youth Advocacy", "Report Writing", "Critical Thinking", "Child Welfare"],
    link: "https://childrenfirstcanada.org/wp-content/uploads/2024/10/Raising-Canada-2024-Final.pdf",
    slug: "children-first-advisor",
  },
]
