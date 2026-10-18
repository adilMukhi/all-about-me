export type Award = {
  title: string
  issuer: string
  year: string
  description: string
  image: string | string[]
  skills: string[]
  link: string
  // "nomination" entries render in a separate Nominations group after the awards
  group?: "nomination"
}

export const honorsAwards: Award[] = [
  {
    title: "Ontario Medal for Young Volunteers",
    issuer: "Province of Ontario",
    year: "2026",
    description:
      "Recipient of the Ontario Medal for Young Volunteers, the highest honour a young person can receive from the Province of Ontario for volunteer service. To be presented by the Lieutenant Governor of Ontario on October 19, 2026 at Queen's Park.",
    image: "/ontario-medal-young-volunteers-2026.jpg",
    skills: ["Volunteerism", "Community Engagement", "Youth Leadership"],
    link: "",
  },
  {
    title: "Top 20 Under 18 in Canada",
    issuer: "Children First Canada",
    year: "2026",
    description:
      "Named one of the Top 20 youth under 18 in Canada by Children First Canada as a finalist for The Future is NOW! Awards 2026, recognizing leadership in making Canada the best place for kids to grow up.",
    image: "/top-20-under-18-2026.jpg",
    skills: ["Youth Leadership", "Child Advocacy"],
    link: "",
  },
  {
    title: "National Biology Scholar with Distinction",
    issuer: "University of Toronto — National Biology Competition",
    year: "2026",
    description:
      "Designated National Biology Scholar with Distinction for placing in the top 0.4% nationally in the 2026 National Biology Competition. Also tied for 5th place nationally on the Canadian Honour Roll out of 2,220 contestants.",
    image: "/certificates/nbc-distinction.png",
    skills: ["Biology", "Exam Excellence", "Scientific Knowledge"],
    link: "https://bioexplorerchallenge.com/student",
  },
  {
    title: "Canadian Choice Award, Non-Profit Organizations (Mississauga), Winner",
    issuer: "Canadian Choice Awards",
    year: "2026",
    description:
      "Dr. Interested, founded and led by Adil Mukhi, won the 2026 Canadian Choice Award in the Non-Profit Organizations category for Mississauga.",
    image: "/canadian-choice-award-2026.png",
    skills: ["Non-Profit", "Leadership", "Dr. Interested"],
    link: "",
  },
  {
    title: "Ontario Volunteer Service Award (x3)",
    issuer: "Province of Ontario",
    year: "Aug 2025 and May 2026",
    description:
      "Recipient of three Ontario Volunteer Service Awards for two to four years of service. One was awarded for volunteer service with the Ismaili Council for Mississauga Jamatkhana and recognized at a ceremony on September 1, 2025. Two were awarded for service with Dr. Interested and Results Canada and recognized at a ceremony on May 19, 2026. Each was presented with a certificate and lapel pin.",
    image: [
      "/ovsa.png",
      "/ovsa-2026-dr-interested.jpg",
      "/ovsa-2026-results-canada.jpg",
    ],
    skills: ["Volunteerism", "Community Engagement"],
    link: "https://www.instagram.com/p/DOkH6cQAKV5/",
  },
  {
    title: "City of Mississauga Civic Awards",
    issuer: "City of Mississauga",
    year: "Jun 2025 and Jul 2026",
    description:
      "Two-time recipient of a City of Mississauga Civic Award. In June 2025, received the Civic Award of Recognition for Youth Community and Civic Engagement. On July 7, 2026, received a second Civic Award alongside six other Dr. Interested members, recognizing youth community and civic engagement.",
    image: [
      "/Mississauga.jpg",
      "/mississauga-civic-award-2026.jpg",
    ],
    skills: ["Civic Leadership", "Community Engagement"],
    link: "",
  },
  {
    title: "Award of Distinction — Peel District School Board",
    issuer: "Peel District School Board",
    year: "May 2026",
    description:
      "Received an Award of Distinction from the Peel District School Board, after being nominated by my Vice Principal for Excellence in Innovation in Education.",
    image: "/certificates/award of distintion (1).png",
    skills: ["Education Leadership", "Community Contribution", "Recognition"],
    link: "https://www.peelschools.org",
  },
  {
    title: "Top 50 Youth across Canada",
    issuer: "Children First Canada",
    year: "2025",
    description:
      "Selected as one of the top 50 exceptional youth across Canada by Children First Canada, a national charitable organization dedicated to making Canada the best place in the world for kids to grow up. This prestigious recognition honors young leaders who demonstrate outstanding commitment to child advocacy, community impact, and positive social change. Selected from thousands of youth nationwide, this distinction celebrates dedication to improving the lives of children and youth across the country through innovative leadership, meaningful advocacy, and transformative community engagement.",
    image: "/adilmukhitop50u18.jpg",
    skills: ["Youth Leadership", "Child Advocacy", "Community Impact", "Social Change", "National Recognition"],
    link: "https://www.instagram.com/p/DQhjpqbgOnz/?img_index=1",
  },
  {
    title: "Global Youth Awards Finalist – Empowerment Category",
    issuer: "Legacy Project",
    year: "Jul 2025",
    description:
      "Named one of nine finalists in the Empowerment category and one of three finalists in the Change sub-category for the Global Youth Awards 2025, selected from over 400 nominations from more than 90 countries. The Global Youth Awards celebrate inspiring young leaders making positive social impact worldwide. The awards ceremony was held on November 8, 2025, at PRYZM Kingston, London, and livestreamed globally.",
    image: "/GYA-finalists.png",
    skills: ["Leadership", "Global Citizenship", "Youth Advocacy", "Innovation", "Community Impact"],
    link: "https://www.instagram.com/p/DQElQUvk7Nh/",
  },
  {
    title: "Silver Medal – Canadian Biology Olympiad",
    issuer: "Canadian Biology Olympiad Committee",
    year: "2026",
    description:
      "Awarded the Silver Medal in the 2026 Canadian Biology Olympiad (CBO). Improved on last year's Bronze result; coached/mentored by Ms. Virdi.",
    image: "/certificates/cbo-silver.png",
    skills: ["Biology", "Competition Excellence", "Analytical Reasoning", "Experimental Design"],
    link: "https://www.canadianbiologyolympiad.ca/CBO2026_Results-levels.pdf",
  },
  {
    title: "Distinction – Canadian Computing Competition (Junior Division)",
    issuer: "University of Waterloo – Centre for Education in Mathematics and Computing (CEMC)",
    year: "2025",
    description:
      "Earned a Distinction in the Canadian Computing Competition (CCC) – Junior Division, placing 2nd overall at Glenforest Secondary School. The CCC challenges students to solve complex algorithmic problems using programming and logical thinking.",
    image: "/ccc.jpg",
    skills: ["Problem Solving", "Algorithmic Thinking", "Programming", "Computational Logic", "Time Management"],
    link: "https://www.cemc.uwaterloo.ca/contests/computing.html",
  },
  {
    title: "Distinction – Beaver Computing Challenge (Perfect Score)",
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
    title: "Bronze Medal – Canadian Biology Olympiad",
    issuer: "Canadian Biology Olympiad Committee",
    year: "2025",
    description:
      "Awarded the Bronze Medal in the Canadian Biology Olympiad, placing within the top 60% of all youth across Canada in the highest-level national biology competition for high school students. The competition tested knowledge in subjects including cell biology, molecular genetics, physiology, and ecology, recognizing top performers for their academic excellence and critical thinking skills.",
    image: "/CBO.png",
    skills: ["Biology", "Critical Thinking", "Problem Solving", "Academic Excellence", "Research"],
    link: "https://www.canadianbiologyolympiad.ca/Medal%20Winners%202025.pdf",
  },
  {
    title: "Certificate of Achievement — National Biology Competition (Glenforest Secondary)",
    issuer: "University of Toronto — National Biology Competition",
    year: "April 8, 2026",
    description:
      "Awarded Certificate of Achievement for obtaining the highest score in the 2026 National Biology Competition among participating students from Glenforest Secondary.",
    image: "/certificates/nbc-achevement.png",
    skills: ["Exam Excellence", "School Achievement", "Biology Knowledge"],
    link: "https://bioexplorerchallenge.com/student",
  },
  {
    title: "SemiFinalist – (p + q = 1) Exam",
    issuer: "Mitosisphere",
    year: "Jan 2025",
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
    title: "Semifinalist – High School Health Research Challenge",
    issuer: "High School Health Research Forum",
    year: "Mar 2025",
    description:
      "Selected as a semifinalist in the 2025 High School Health Research Challenge, a prestigious competition recognizing outstanding high school research in health sciences. My research project was recognized among the top 10 submissions out of nearly 100 applicants for its creativity, feasibility, and impact in addressing a critical health issue.",
    image: "/HSHRF.png",
    skills: ["Research", "Health Sciences", "Innovation", "Scientific Communication", "Critical Thinking"],
    link: "https://www.instagram.com/p/DHP0sZeOkC1/",
  },
  {
    title: "Honourable Mention – International Medical Journalism Olympiad",
    issuer: "Journalism Society & Olympiads",
    year: "2024",
    description:
      "Awarded Honourable Mention in the 2024 International Medical Journalism Olympiad, an online examination held on September 29th, 2024 from 1:00-3:00 PM. This prestigious competition recognizes excellence in medical journalism and communication skills among students worldwide.",
    image: "/IMJO-cert.png",
    skills: ["Medical Journalism", "Writing", "Communication", "Research", "Critical Analysis"],
    link: "https://journalismsociety.org/medical-journalism-olympiad",
  },
  {
    title: "Published Author – Polar Expressions Youth Poetry Anthologies",
    issuer: "Polar Expressions Publishing",
    year: "May 2025",
    description:
      "Selected for publication in two national youth poetry anthologies: Born of Embers (ISBN: 978-1-990243-38-7) and Echoes of the Deep (ISBN: 978-1-990243-42-4). Both books are archived in the Library and Archives Canada, recognizing excellence in youth literary expression across Canada.",
    image: "/polar_expressions.png",
    skills: ["Creative Writing", "Poetry", "Literary Expression", "Youth Advocacy", "Publication"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7326016820383993856/",
  },
  {
    title: "Congress of Future Medical Leaders Nomination",
    issuer: "National Academy of Future Physicians and Medical Scientists",
    year: "Apr 2025",
    description:
      "Nominated to attend the Congress of Future Medical Leaders for academic excellence, leadership potential, and dedication to the medical field. The Congress is a prestigious honors program where top high school students learn from Nobel Laureates, medical school deans, and leaders in healthcare innovation.",
    image: "/Congress Medical Leaders.png",
    skills: ["Leadership", "Academic Excellence", "Medical Knowledge", "Networking", "Professional Development"],
    link: "https://www.futuredocs.com/m0625-wl-lug?utm_source=AdaptiveMailer&utm_medium=email&utm_campaign=M0625%20Web%20Leads%20LUG",
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
    title: "Quarter-Finalist – ROPSSAA Tennis",
    issuer: "Glenforest Secondary School",
    year: "Oct 2024",
    description: "Quarter-Finalist in the ROPSSAA Boys Doubles Junior Tennis South East Qualifier 2024.",
    image: "/tennis.jpg",
    skills: ["Tennis Skills", "Teamwork", "Sportsmanship", "Physical Endurance", "Strategic Thinking"],
    link: "https://www.ropssaa.org/blog/wp-content/uploads/2024/10/Jr-South-East-Qualifying-Draws.pdf",
  },
  {
    title: "Valedictorian – Middle School Graduation",
    issuer: "The Valleys",
    year: "2023",
    description: "Delivered a graduation speech to the 2023 graduating grade 8 class, their parents, and school staff.",
    image: "/valleys-grad.png",
    skills: ["Public Speaking", "Leadership", "Writing Skills", "Emotional Intelligence", "Audience Engagement"],
    link: "https://thevalleys.peelschools.org/",
  },
  {
    title: "Queen Elizabeth II Ontario Medal for Good Citizenship, nominee",
    issuer: "Province of Ontario",
    year: "Nov 2025",
    description:
      "Nominated for the Queen Elizabeth II Ontario Medal for Good Citizenship.",
    image: "",
    skills: ["Citizenship", "Community Engagement"],
    link: "",
    group: "nomination",
  },
  {
    title: "Diana Award nominee",
    issuer: "The Diana Award",
    year: "Oct 2025",
    description:
      "Nominated for the Diana Award, which recognizes young people making a lasting difference in their communities.",
    image: "",
    skills: ["Youth Leadership", "Service"],
    link: "",
    group: "nomination",
  },
  {
    title: "Commonwealth Youth Awards for Excellence in Development Work, nominee",
    issuer: "The Commonwealth",
    year: "Sep 2025",
    description:
      "Nominated for the Commonwealth Youth Awards for Excellence in Development Work.",
    image: "",
    skills: ["Development", "Youth Leadership"],
    link: "",
    group: "nomination",
  },
]
