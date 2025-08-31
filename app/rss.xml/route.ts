const generateRSSFeed = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

  // Professional images from the sitemap
  const professionalImages = [
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Tedx%201.png`,
      title: "Adil Mukhi TEDx Speaker - Youth Advocate and Changemaker",
      description:
        "Adil Mukhi delivering keynote presentation at TEDx event - youth advocate and public speaker on stage with microphone",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Tedx%202.jpeg`,
      title: "Adil Mukhi TEDxMcFarren Speaker - Leadership and Innovation Presentation",
      description:
        "Adil Mukhi speaking at TEDxMcFarren conference - youth advocate presenting on leadership and innovation to audience",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Formal%20Pic.jpg`,
      title: "Adil Mukhi Professional Photo - Youth Advocate and Public Speaker",
      description:
        "Adil Mukhi professional headshot - youth advocate, public speaker, and founder of Dr. Interested organization",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Camera.JPG`,
      title: "Adil Mukhi Photographer - Youth Advocate and Content Creator",
      description:
        "Adil Mukhi with professional camera equipment - photographer and content creator documenting youth advocacy work",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Dr.%20Interested.JPG`,
      title: "Adil Mukhi Dr. Interested Founder - Youth Mentorship Program",
      description:
        "Adil Mukhi as founder of Dr. Interested organization - youth mentorship and advocacy program leader",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Labcoat.JPG`,
      title: "Adil Mukhi Medical Research - STEM Education and Healthcare Advocacy",
      description:
        "Adil Mukhi in laboratory setting wearing lab coat - STEM education advocate and medical research volunteer",
    },
    {
      url: `${siteUrl}/pictures/Adil%20Mukhi%20-%20Tennis.jpg`,
      title: "Adil Mukhi Tennis Player - Play-to-Heal Movement Advocate",
      description:
        "Adil Mukhi playing tennis - athlete promoting Play-to-Heal movement for youth mental health through sports",
    },
  ]

  const rssItems = [
    // Professional Images Feature Post
    {
      title: "Adil Mukhi: Youth Advocate, Speaker & Changemaker - Professional Portfolio",
      description:
        "Explore the professional journey of Adil Mukhi - from TEDx speaking engagements to medical research, sports advocacy, and youth mentorship through Dr. Interested organization.",
      link: `${siteUrl}/about`,
      images: professionalImages,
      pubDate: new Date("2025-01-15").toUTCString(),
      category: "Professional Portfolio",
    },
  ]
}
