export type Education = {
  degree: string
  institution: string
  period: string
  description: string
  link: string
  image: string
  longDescription?: string
  achievements?: string[]
  courses?: string[]
  images?: string[]
  slug: string
  stats?: string[]
}

export const educationData: Education[] = [
  {
    degree: "MedLinx Program",
    institution: "The University of Toronto, Temerty Faculty of Medicine, Office of Access and Outreach",
    period: "Dec 2024 - Apr 2025",
    description:
      "Real-world experience in healthcare through hands-on activities, mentorship, and academic workshops. I took the U of T course Introduction to the Role of the Human Development Index and Social Determinants of Health on the Global Burden of Disease - Taught by Dr. Andrea K. Boggild, BSc, MSc, MD",
    link: "https://www.linkedin.com/in/adil-mukhi",
    image: "/uoft-logo.jpg",
    slug: "medlinx-program",
    longDescription:
      "Comprehensive healthcare program providing real-world experience through hands-on activities, mentorship, and academic workshops. Gained exposure to medical research, patient care, and healthcare systems.",
    courses: [
      "Introduction to the Role of the Human Development Index and Social Determinants of Health on the Global Burden of Disease",
    ],
  },
  {
    degree: "High School Diploma, International Baccalaureate",
    institution: "Glenforest Secondary School",
    period: "Sep 2023 - Jun 2027",
    description:
      "In progress: Grade 12. 96.3% average across 24 completed courses and an ACT composite of 33 in one sitting.",
    link: "https://glenforest.peelschools.org/",
    image: "/gfss-logo.jpg",
    slug: "high-school-diploma",
    longDescription:
      "In progress: Grade 12. I've maintained a 96.3% average across my 24 completed courses, including a 97% average across my three completed 4U courses and distinctions, the highest grade in my cohort, in 8 of my 16 Grade nine and ten courses. I also earned 99% in both 3U Biology and 4U Chemistry.",
    achievements: [
      "96.3% average across 24 completed courses",
      "97% average across 3 completed 4U courses",
      "Distinctions (highest grade in my cohort) in 8 of 16 Grade 9 and 10 courses",
      "99% in 3U Biology and 4U Chemistry",
      "ACT 33 in one sitting: Math 34, Science 36, English 30, Reading 35, Writing 8",
    ],
  },
  {
    degree: "IB MYP and IB DP Diploma, Core",
    institution: "International Baccalaureate",
    period: "Sep 2023 - May 2027",
    description:
      "In progress: IB DP 2. Global education framework focusing on research, communication, and global understanding skills.",
    link: "https://www.ibo.org/benefits/",
    image: "",
    slug: "ib-diploma",
    longDescription:
      "In progress: IB DP 2. International Baccalaureate program emphasizing critical thinking, research skills, and global perspective. Comprehensive curriculum preparing students for university-level work.",
    achievements: [
      "Completed IB scores: SL Math AA 6 and SL Chemistry 7 (pending until the diploma is awarded)",
      "Creativity, Activity, Service (CAS) hours",
    ],
    courses: [
      "HL English",
      "HL Psychology",
      "HL Biology",
      "SL French",
      "SL Math AA",
      "SL Chemistry",
      "Theory of Knowledge (TOK)",
      "Extended Essay",
    ],
  },
  {
    degree: "Google Data Analytics Certification",
    institution: "CKSTEM Learning",
    period: "Jun 2025 - Oct 2025",
    description: "Professional certificate program in data analytics and visualization.",
    link: "https://www.coursera.org/programs/google-data-analytics-certification-by-ckstem-xroo3/my-learning?myLearningTab=IN_PROGRESS",
    image: "/googledataanalytics.jpg",
    slug: "google-data-analytics",
    longDescription:
      "Comprehensive data analytics certification covering data collection, cleaning, analysis, and visualization using industry-standard tools.",
  },
  {
    degree: "Immigrant and Refugee Mental Health Online Course",
    institution: "Continuing Professional Development, Temerty Faculty of Medicine, University of Toronto and CAMH",
    period: "Jul 2025 - Aug 2025",
    description: "Specialized course on mental health support for immigrant and refugee populations.",
    link: "https://learn-irmhp-psmir.camhx.ca/course/view.php?id=42",
    image: "/uoft-logo.jpg",
    slug: "immigrant-refugee-mental-health",
    longDescription:
      "Specialized training in providing mental health support to immigrant and refugee communities, covering cultural competency and trauma-informed care.",
  },
  {
    degree: "Social Epidemiology Course: Fundamentals of Social Epidemiology Research",
    institution: "University of British Columbia & University of Toronto",
    period: "Jul 2025 - Jul 2025",
    description: "Research fundamentals in social epidemiology and population health equity.",
    link: "https://phesc.instructure.com/courses/403/discussion_topics/978",
    image: "/socialepidemiology-uft-ubc.png",
    slug: "social-epidemiology",
    longDescription:
      "Advanced course covering social determinants of health, population health equity research methods, and epidemiological analysis techniques.",
    achievements: ["Research methodology training", "Population health analysis", "Social determinants study"],
    courses: ["Fundamentals of Social Epidemiology Research"],
  },
  {
    degree: "Young Canadians Parliament Certificate",
    institution: "Children's First Canada",
    period: "Jun 2025",
    description: "Certificate of completion for Young Canadians Parliament 2025 Sessions.",
    link: "#",
    image: "/young-canadians-paralament.png",
    slug: "young-canadians-parliament",
    longDescription:
      "Intensive program focused on Sustainable Development Goals implementation and social impact initiatives.",
  },
  {
    degree: "PharmPath Experiential Day",
    institution: "Leslie Dan Faculty of Pharmacy, UofT",
    period: "Mar 2025",
    description: "In-person experiential day with campus tour and focus groups.",
    link: "#",
    image: "/uoft-logo.jpg",
    slug: "pharmpath-experiential",
    longDescription:
      "Hands-on experience in pharmaceutical sciences with campus exploration and interactive learning sessions.",
  },
  {
    degree: "UHN STEM Pathways",
    institution: "University Health Network",
    period: "Dec 2024 to Jun 2026",
    description: "Toronto-based outreach program with 7 courses leading to a certificate, earned twice (2024 to 2025 and 2025 to 2026).",
    link: "#",
    image: "/uhn-logo.jpg",
    images: [
      "/certificates/uhn-stem-pathways.png",
      "/certificates/UHN StemPathways - Certificate of Participation 2026 - Adil Mukhi.png",
    ],
    slug: "uhn-stem-pathways",
    longDescription:
      "Comprehensive STEM education program providing exposure to healthcare research and medical technologies. Earned the UHN STEM Pathways Certificate of Participation twice, for the 2024 to 2025 and 2025 to 2026 program years.",
    achievements: [
      "Certificate of Participation earned twice: 2024 to 2025 and 2025 to 2026",
      "7 courses completed",
      "Healthcare research exposure",
    ],
  },
  {
    degree: "Youth On The Rise",
    institution: "Dixie Bloor Neighbourhood Centre",
    period: "Jan 2024 - Mar 2024",
    description: "Completed First Aid & Food Handling. Received employability & hard/soft skills training.",
    link: "#",
    image: "/dbnc.jpg",
    slug: "youth-on-the-rise",
    longDescription:
      "Youth development program focusing on practical life skills, employability training, and personal development.",
    achievements: ["First Aid certification", "Food Handling certification", "Employability skills training"],
  },
  {
    degree: "Leaders in Training (LiT)",
    institution: "Dixie Bloor Neighbourhood Centre",
    period: "Apr 2024 to May 2024",
    description: "Learned effective skills to help me be a camp counselor.",
    link: "#",
    image: "/dbnc.jpg",
    slug: "leaders-in-training",
    longDescription:
      "Leadership development program preparing participants for camp counselor roles through practical training and mentorship.",
  },
  {
    degree: "Autism Awareness Event",
    institution: "Words for the World",
    period: "Apr 2024",
    description: "Learnt about autism and how to support neurodivergent community.",
    link: "#",
    image: "/wftw-autism.png",
    slug: "autism-awareness",
    longDescription:
      "Educational event focused on autism awareness, neurodiversity acceptance, and inclusive community support strategies.",
  },
]
