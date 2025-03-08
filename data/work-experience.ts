// Update work experiences to use direct image paths
// Example data structure for work experience
export type WorkExperience = {
  title: string
  company: string
  period: string
  description: string
  image: string
  skills: string[]
  link: string
}

// Add or modify entries in this array
export const workExperiences: WorkExperience[] = [
  {
    title: "President and Founder",
    company: "Dr. Interested",
    period: "Dec 2024 - Present (3 months)",
    description:
      "Dr. Interested is a student-led initiative aiming to inspire future medical professionals through research, mentorship, and outreach. The organization has 30+ executives, 300+ Instagram followers, 120+ Discord members, and 100+ linkedIn followers, with significant reach and collaboration with organizations like Aid4Need to support healthcare workers.",
    image: "/drinterested.jpg",
    skills: ["Leadership", "Project Management", "Community Building", "Medical Education", "Networking"],
    link: "https://linktr.ee/dr.interested",
  },
  {
    title: "Youth Advisor",
    company: "University of Toronto Faculty of Kinesiology and Physical Education",
    period: "Nov 2024 - Present (4 months)",
    description:
      "Collaborates on the KPE Rethink Sports research project, providing insights on inclusivity in sports initiatives. Recognized with an honorarium for contributions.",
    image: "/uoftkpe_logo.jpg",
    skills: ["Research", "Sports Inclusivity", "Advisory Skills", "Data Analysis", "Presentation Skills"],
    link: "https://www.linkedin.com/in/adil-mukhi-6aba27246/#:~:text=and%20%2B3%20skills-,Youth%20Advisor,-Youth%20Advisor",
  },
  // Add more experiences here...
]

