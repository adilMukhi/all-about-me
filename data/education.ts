export type Education = {
  degree: string
  institution: string
  period: string
  description: string
  link: string
  image: string
}

export const educationData: Education[] = [
  {
    degree: "High School Diploma, International Baccalaureate",
    institution: "Glenforest Secondary School",
    period: "Sep 2023 - Jun 2027",
    description:
      "Grade 9-12. Active in leadership roles such as Vice President of the French Club and STEM Fellowship Chapter. Participates in DECA, HOSA, Peer Helper Tutor.",
    link: "https://glenforest.peelschools.org/",
    image: "/glenforest.jpg",
  },
  {
    degree: "IB MYP and IB DP Diploma, Core",
    institution: "International Baccalaureate",
    period: "Sep 2023 - May 2027",
    description: "Global education framework focusing on research, communication, and global understanding skills.",
    link: "https://www.ibo.org/benefits/",
    image: "/ib-logo.jpg",
  },
  {
    degree: "MedLinx Program",
    institution: "The University of Toronto, Temerty Faculty of Medicine, Office of Access and Outreach",
    period: "Dec 2024 - Apr 2025",
    description:
      "Real-world experience in healthcare through hands-on activities, mentorship, and academic workshops. I took the U of T course Introduction to the Role of the Human Development Index and Social Determinants of Health on the Global Burden of Disease - Taught by Dr. Andrea K. Boggild, BSc, MSc, MD",
    link: "https://www.linkedin.com/in/adil-mukhi-6aba27246/#:~:text=and%20%2B15%20skills-,University%20of%20Toronto,-University%20of%20Toronto",
    image: "/uoft-logo.jpg",
  },
]

