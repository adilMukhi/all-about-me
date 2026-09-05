import type { NavConfig } from "@/types/nav"
import { blogPosts } from "@/data/blog-posts"

const blogPostItems = blogPosts.slice(0, 4).map((post) => ({
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
      items: [],
    },
    {
      title: "Media",
      href: "/media",
      items: [
        {
          title: "Media Coverage",
          href: "/media",
          description: "Press, articles, interviews, and features",
        },
        {
          title: "Watch & Listen",
          href: "/watch",
          description: "Interviews, podcasts, and TEDx talks",
        },
        {
          title: "Media Inquiries",
          href: "/media-inquiries",
          description: "Contact and press kit for journalists",
        },
      ],
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Portfolios",
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
