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
      title: "Bronze Medal – Canadian Biology Olympiad",
      issuer: "Canadian Biology Olympiad Committee",
      year: "2025",
      description:
          "Awarded the Bronze Medal in the Canadian Biology Olympiad, placing within the top 60% of all youth across Canada in the highest-level national biology competition for high school students. The competition tested knowledge in subjects including cell biology, molecular genetics, physiology, and ecology, recognizing top performers for their academic excellence and critical thinking skills.",
      image: "/CBO.png",
      skills: [
          "Biology",
          "Critical Thinking",
          "Problem Solving",
          "Academic Excellence",
          "Research",
      ],
      link: "https://www.canadianbiologyolympiad.ca/Medal%20Winners%202025.pdf",  // Replace with the official CBO link if necessary
    },
    {
      title: "Congress of Future Medical Leaders Nomination",
      issuer: "National Academy of Future Physicians and Medical Scientists",
      year: "Apr 2025",
      description:
          "Nominated to attend the Congress of Future Medical Leaders for academic excellence, leadership potential, and dedication to the medical field. The Congress is a prestigious honors program where top high school students learn from Nobel Laureates, medical school deans, and leaders in healthcare innovation.",
      image: "/Congress Medical Leaders.png",
      skills: [
          "Leadership",
          "Academic Excellence",
          "Medical Knowledge",
          "Networking",
          "Professional Development",
      ],
      link: "https://www.futuredocs.com/m0625-wl-lug?utm_source=AdaptiveMailer&utm_medium=email&utm_campaign=M0625%20Web%20Leads%20LUG",
    },
    {
      title: "Published Author – Polar Expressions Youth Poetry Anthologies",
      issuer: "Polar Expressions Publishing",
      year: "May 2025",
      description:
        "Selected for publication in two national youth poetry anthologies: Born of Embers (ISBN: 978-1-990243-38-7) and Echoes of the Deep (ISBN: 978-1-990243-42-4). Both books are archived in the Library and Archives Canada, recognizing excellence in youth literary expression across Canada.",
      image: "/polar_expressions.png", // Replace with actual image path or placeholder
      skills: [
        "Creative Writing",
        "Poetry",
        "Literary Expression",
        "Youth Advocacy",
        "Publication"
      ],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7326016820383993856/",
    },
    {
      title: "Distinction – Canadian Computing Competition (Junior Division)",
      issuer: "University of Waterloo – Centre for Education in Mathematics and Computing (CEMC)",
      year: "2025",
      description: "Earned a Distinction in the Canadian Computing Competition (CCC) – Junior Division, placing 2nd overall at Glenforest Secondary School. The CCC challenges students to solve complex algorithmic problems using programming and logical thinking.",
      image: "/ccc.jpg", // Replace with actual certificate or proof if available
      skills: ["Problem Solving", "Algorithmic Thinking", "Programming", "Computational Logic", "Time Management"],
      link: "https://www.cemc.uwaterloo.ca/contests/computing.html"
    },
    {
      title: "Semifinalist, 2025 High School Health Research Challenge",
      issuer: "High School Health Research Forum",
      year: "Mar 2025",
      description:
          "Selected as a semifinalist in the 2025 High School Health Research Challenge, a prestigious competition recognizing outstanding high school research in health sciences. My research project was recognized among the top 10 submissions out of nearly 100 applicants for its creativity, feasibility, and impact in addressing a critical health issue. As a semifinalist, my research will be showcased on the official HSHRF platform, contributing to the broader discourse on health innovation.",
      image: "/HSHRF.png",
      skills: [
          "Research",
          "Health Sciences",
          "Innovation",
          "Scientific Communication",
          "Critical Thinking",
      ],
      link: "https://www.instagram.com/p/DHP0sZeOkC1/",
    },
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
