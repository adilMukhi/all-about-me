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
    image: "/blog/medical-research.jpg",
    slug: "journey-in-medical-research",
    excerpt: "Join me as I share my experiences in medical research and healthcare innovation...",
    content: `
      <p>My journey into medical research began with a simple curiosity about how technology could improve healthcare outcomes. As a student with interests spanning both medicine and technology, I found myself drawn to the innovative ways these fields intersect.</p>
      
      <p>During my time at the University of Toronto's MedLinx Program, I was exposed to cutting-edge research in healthcare technology. The experience opened my eyes to the possibilities of using data analysis and artificial intelligence to enhance diagnostic accuracy and treatment planning.</p>
      
      <p>One of the most valuable lessons I learned was the importance of interdisciplinary collaboration. Medical research isn't just about understanding biology and chemistry—it's about bringing together experts from various fields to solve complex problems.</p>
      
      <p>As I continue my academic journey, I'm excited to further explore the potential of technology in healthcare and contribute to advancements that can make a real difference in patients' lives.</p>
    `,
    images: ["/blog/medical-research-1.jpg", "/blog/medical-research-2.jpg", "/blog/medical-research-3.jpg"],
  },
  // Add more blog posts here...
]

