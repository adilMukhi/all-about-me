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
    link: "https://www.linkedin.com/in/adil-mukhi-6aba27246/#:~:text=and%20%2B15%20skills-,University%20of%20Toronto,-University%20of%20Toronto",
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
      "Grade 9-12. Active in leadership roles such as Vice President of the French Club and STEM Fellowship Chapter. Participates in DECA, HOSA, Peer Helper Tutor.",
    link: "https://glenforest.peelschools.org/",
    image: "/gfss-logo.jpg",
    slug: "high-school-diploma",
    longDescription:
      "Comprehensive high school education with focus on leadership development and extracurricular involvement. Active participation in various clubs and academic competitions.",
    achievements: [
      "Vice President of French Club",
      "STEM Fellowship Chapter member",
      "Peer Helper Tutor",
      "DECA participant",
      "HOSA member",
    ],
  },
  {
    degree: "IB MYP and IB DP Diploma, Core",
    institution: "International Baccalaureate",
    period: "Sep 2023 - May 2027",
    description: "Global education framework focusing on research, communication, and global understanding skills.",
    link: "https://www.ibo.org/benefits/",
    image: "/ib-logo.jpg",
    slug: "ib-diploma",
    longDescription:
      "International Baccalaureate program emphasizing critical thinking, research skills, and global perspective. Comprehensive curriculum preparing students for university-level work.",
    achievements: [
      "Extended Essay completion",
      "Theory of Knowledge course",
      "Creativity, Activity, Service (CAS) hours",
    ],
    courses: [
      "HL English",
      "SL French",
      "HL Biology",
      "SL Chemistry",
      "HL Psychology",
      "SL Math",
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
    institution: "SickKids Hospital",
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
    period: "Dec 2024 - Jun 2025",
    description: "Toronto-based outreach program with 7 courses leading to certificate.",
    link: "#",
    image: "/uhn-logo.jpg",
    slug: "uhn-stem-pathways",
    longDescription:
      "Comprehensive STEM education program providing exposure to healthcare research and medical technologies.",
    achievements: ["7 courses completed", "Certificate earned", "Healthcare research exposure"],
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
    period: "Apr 2024 - Present",
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
