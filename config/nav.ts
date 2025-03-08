import type { NavConfig } from "@/types/nav"
import { blogPosts } from "@/data/blog-posts"

// Use the blog posts from the data file
const blogPostItems = blogPosts.map((post) => ({
  title: post.title,
  slug: post.slug,
}))

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Background",
      href: "/background",
      items: [
        {
          title: "Skills",
          href: "/background#skills",
          description: "Professional and technical capabilities",
        },
        {
          title: "Work Experience",
          href: "/background#work",
          description: "Professional journey and achievements",
        },
        {
          title: "Education",
          href: "/background#education",
          description: "Academic qualifications and training",
        },
        {
          title: "Projects",
          href: "/background#projects",
          description: "Key projects and initiatives",
        },
        {
          title: "Certificates",
          href: "/background#certificates",
          description: "Professional certifications",
        },
        {
          title: "Volunteer Work",
          href: "/background#volunteer",
          description: "Community involvement",
        },
        {
          title: "Honors & Awards",
          href: "/background#honors",
          description: "Achievements and recognition",
        },
      ],
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      items: [
        {
          title: "Writing",
          href: "/portfolio/writing",
          description: "Published works and articles",
        },
        {
          title: "Coding",
          href: "/portfolio/coding",
          description: "Software development projects",
        },
        {
          title: "Art & Sports",
          href: "/portfolio/art-sports",
          description: "Creative works and athletic achievements",
        },
        {
          title: "Research",
          href: "/portfolio/research",
          description: "Academic and scientific research",
        },
      ],
    },
    {
      title: "Experiences",
      href: "/experiences",
      items: blogPostItems.map((post) => ({
        title: post.title,
        href: `/experiences/${post.slug}`,
        description: "Personal story and reflection",
      })),
    },
  ],
}

