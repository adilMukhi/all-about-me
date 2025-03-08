import { blogImages } from "./image-paths"

// Example data structure for blog posts
export type BlogPost = {
  title: string
  subtitle: string
  date: string
  image: string
  slug: string
  excerpt: string
  content: string
  images?: string[]
}

// Add or modify entries in this array
export const blogPosts: BlogPost[] = [
  {
    title: "My Journey in Medical Research",
    subtitle: "Exploring the intersection of technology and healthcare",
    date: "March 8, 2025",
    image: blogImages.medicalResearch,
    slug: "journey-in-medical-research",
    excerpt: "Join me as I share my experiences in medical research and healthcare innovation...",
    content: `
      <p>My journey into medical research began with a simple curiosity about how technology could improve healthcare outcomes. As a student with interests spanning both medicine and technology, I found myself drawn to the innovative ways these fields intersect.</p>
      
      <p>During my time at the University of Toronto's MedLinx Program, I was exposed to cutting-edge research in healthcare technology. The experience opened my eyes to the possibilities of using data analysis and artificial intelligence to enhance diagnostic accuracy and treatment planning.</p>
      
      <p>One of the most valuable lessons I learned was the importance of interdisciplinary collaboration. Medical research isn't just about understanding biology and chemistry—it's about bringing together experts from various fields to solve complex problems.</p>
      
      <p>As I continue my academic journey, I'm excited to further explore the potential of technology in healthcare and contribute to advancements that can make a real difference in patients' lives.</p>
    `,
    images: [blogImages.medicalResearch1, blogImages.medicalResearch2, blogImages.medicalResearch3],
  },
  {
    title: "Volunteering at the Hospital",
    subtitle: "Lessons learned from working with patients",
    date: "February 15, 2025",
    image: blogImages.hospitalVolunteer,
    slug: "volunteering-at-hospital",
    excerpt: "My time volunteering at the local hospital taught me valuable lessons about patient care...",
    content: `
      <p>Volunteering at the local hospital has been one of the most rewarding experiences of my academic journey. Working directly with patients and healthcare professionals has provided me with invaluable insights into the medical field.</p>
      
      <p>From assisting nurses with basic patient care to helping visitors navigate the complex hospital environment, each task taught me something new about healthcare delivery and the importance of compassion in medical settings.</p>
      
      <p>I was particularly struck by the resilience of patients facing challenging diagnoses and the dedication of the healthcare team working tirelessly to provide the best possible care. These observations have strengthened my resolve to pursue a career in medicine.</p>
      
      <p>The experience has also highlighted the importance of clear communication in healthcare settings. Whether explaining procedures to patients or coordinating with staff, effective communication is essential for quality care.</p>
    `,
    images: [],
  },
  // Add more blog posts here...
]

