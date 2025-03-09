export type Award = {
    title: string
    issuer: string
    year: string
    description: string
    image: string
    skills: string[]
    link: string
  }
  
  export const honorsAwards: Award[] = [
    {
      title: "SemiFinalist, (p + q = 1) exam",
      issuer: "Mitosisphere",
      year: "Feb 2025",
      description:
        "Awarded for placing among the top 22 out of 180+ competitors worldwide in the highly competitive 1/25 (p + q = 1) exam. This achievement recognizes excellence in problem-solving and analytical skills in a rigorous academic competition.",
      image: "/pq1.jpg",
      skills: [
        "Problem-Solving",
        "Analytical Thinking",
        "Time Management",
        "Mathematical Reasoning",
        "Competitive Spirit",
      ],
      link: "https://www.linkedin.com/posts/adil-mukhi-6aba27246_stem-competition-biology-activity-7293441881592471553-Me9S",
    },
    {
      title: "Distinction, Beaver Competition",
      issuer: "University of Waterloo, Centre for Education in Mathematics and Computing (CEMC)",
      year: "Nov 2024",
      description:
        "Achieved a perfect score of 90/90 in the Beaver Computing Challenge, a rare accomplishment shared by only four students at Glenforest Secondary School.",
      image: "/beaver.jpg",
      skills: [
        "Computational Thinking",
        "Logical Reasoning",
        "Pattern Recognition",
        "Algorithm Design",
        "Attention to Detail",
      ],
      link: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024BCCResults.pdf",
    },
    {
      title: "Honors, Academic Distinction (Science, IB Design, Gym)",
      issuer: "Glenforest Secondary School",
      year: "Oct 2024",
      description:
        "Earned the highest mark in Science, IB Design, and Physical Education during the grade 9 (2023-2024) academic year.",
      image: "/distinction.jpg",
      skills: ["Scientific Knowledge", "Design Thinking", "Physical Fitness", "Time Management", "Academic Excellence"],
      link: "https://glenforest.peelschools.org/",
    },
    {
      title: "Quarter-Finalist at ROPSSAA Tennis",
      issuer: "Glenforest Secondary School",
      year: "Oct 2024",
      description: "Quarter-Finalist in the ROPSSAA Boys Doubles Junior Tennis South East Qualifier 2024.",
      image: "/tennis.jpg",
      skills: ["Tennis Skills", "Teamwork", "Sportsmanship", "Physical Endurance", "Strategic Thinking"],
      link: "https://www.ropssaa.org/blog/wp-content/uploads/2024/10/Jr-South-East-Qualifying-Draws.pdf",
    },
    {
      title: "Valedictorian, Middle School Graduation",
      issuer: "The Valleys",
      year: "2023",
      description: "Delivered a graduation speech to the 2023 graduating grade 8 class, their parents, and school staff.",
      image: "/valleys_speech.jpg",
      skills: ["Public Speaking", "Leadership", "Writing Skills", "Emotional Intelligence", "Audience Engagement"],
      link: "https://thevalleys.peelschools.org/",
    },
    {
      title: "2nd Place, Biopage Writing Competition",
      issuer: "Biopage",
      year: "2025",
      description:
        "Placed 2nd in the Biopage Writing Competition, competing against talented writers from around the world.",
      image: "/biopage.jpg",
      skills: ["Creative Writing", "Storytelling", "Grammar and Composition", "Research Skills", "Self-Expression"],
      link: "https://www.biopage.com/post/10435",
    },
  ] 
