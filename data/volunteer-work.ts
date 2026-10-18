import type { SchoolRole } from "@/data/work-experience"

export type VolunteerWork = {
  role: string
  organization: string
  period: string
  description: string
  image: string
  skills: string[]
  link: string
  stats?: string[]
  // School club roles; the entry renders them grouped by club and by grade from this one list
  schoolRoles?: SchoolRole[]
  // Small one-off or short school volunteering roles, shown as side notes
  sideRoles?: { role: string; period: string }[]
  progression?: {
    role: string
    period: string
    description?: string
  }[]
}

export const volunteerWork: VolunteerWork[] = [
  {
    role: "Junior Team Lead",
    organization: "Ismaili Volunteers (IV)",
    period: "Jan 2024 – Present",
    description: "Twice appointed Junior Team Lead, training volunteers and managing events with focus on youth development, inclusivity, and accessibility.",
    image: "/ismalivolunteers.jpg",
    skills: [
      "Leadership",
      "Event Planning",
      "Youth Development",
      "Accessibility",
      "Inclusivity",
      "Public Speaking",
      "Project Management",
      "Time Management",
      "Tutoring",
    ],
    link: "https://the.ismaili/volunteers",
    progression: [
      {
        role: "General Volunteer",
        period: "2020 – 2023",
        description: "Supported events and community initiatives after training, contributing whenever needed.",
      },
      {
        role: "Junior Volunteer",
        period: "2016 – 2019",
        description: "Trained in various volunteer roles under mentorship to develop service, communication, and inclusivity skills.",
      },
    ],
  },
  {
    role: "Auditory Research Volunteer",
    organization: "The Hospital for Sick Children",
    period: "Sep 2023 – Present",
    description:
      "Support auditory research for the cochlear implant program. Assist with data collection, research tasks, and collaboration in a clinical research environment.",
    image: "/sickkids.jpg",
    skills: ["Medical Research", "Research Assistance", "Data Collection", "Analytical Thinking", "Collaboration"],
    link: "https://lab.research.sickkids.ca/harrison/",
  },
  {
    role: "School Clubs and Student Leadership",
    organization: "Glenforest Secondary School",
    period: "2023 to 2027",
    description: "Progressive leadership across school clubs and councils, from junior executive to Vice President and President.",
    image: "/gfss-logo.jpg",
    skills: ["Leadership", "Event Planning", "Mentorship", "Teamwork", "STEM Outreach"],
    link: "",
    stats: [
      "Peer Helper: tutored and mentored about 40 students in Math and English over 110 hours",
      "Newcomers Club: leading events with over 50 participants and a team of 7",
      "Athletic Council award: Exemplary Contribution to Athletics",
      "STEM Club: photographed the STEM Symposium (Jan 2025) and ushered speakers for the WOW STEM program (May 2025)",
    ],
    schoolRoles: [
      { club: "HOSA chapter", role: "Member and Competitor", period: "2023 to 2025", grades: [9, 10], gradeLabel: "HOSA Member and Competitor" },
      { club: "HOSA chapter", role: "Vice President", period: "2025 to 2026", grades: [11], gradeLabel: "HOSA Vice President" },
      { club: "STEM Fellowship chapter", role: "Vice President", period: "2024 to 2026", grades: [10, 11], gradeLabel: "STEM Fellowship Vice President" },
      { club: "STEM Club", role: "Volunteer, STEM Symposium photographer and speaker usher", period: "2024 to 2025", grades: [10], gradeLabel: "STEM Club Volunteer" },
      { club: "STEM Club", role: "Vice President", period: "2025 to Present", grades: [11, 12], gradeLabel: "STEM Club Vice President" },
      { club: "French Club", role: "Junior Executive", period: "2023 to 2024", grades: [9], gradeLabel: "French Club Junior Executive" },
      { club: "French Club", role: "Vice President", period: "2024 to 2026", grades: [10, 11], gradeLabel: "French Club Vice President" },
      { club: "Newcomers Club", role: "Events Coordinator", period: "2024 to 2025", grades: [10], gradeLabel: "Newcomers Club Events Coordinator" },
      { club: "Newcomers Club", role: "President", period: "2025 to Present", grades: [11, 12], gradeLabel: "Newcomers Club President" },
      { club: "IBSL (International Baccalaureate Student League)", role: "Junior Executive", period: "2023 to 2024", grades: [9], gradeLabel: "IBSL (International Baccalaureate Student League) Junior Executive" },
      { club: "Peer Helpers", role: "Peer Helper and Tutor", period: "2023 to 2026", grades: [9, 10, 11], gradeLabel: "Peer Helper and Tutor" },
      { club: "Athletic Council", role: "Member", period: "2023 to 2026", grades: [9, 10, 11], gradeLabel: "Athletic Council Member" },
      { club: "Varsity Tennis", role: "Varsity Team Member, Grades 9 to 11", period: "2023 to 2026", grades: [9, 10, 11], gradeLabel: "Varsity Tennis" },
      { club: "Student Super Council", role: "Member", period: "2024 to 2027", grades: [10, 11, 12], gradeLabel: "Super Council Member" },
      { club: "Grow With Google, Peel District School Board", role: "Ambassador", period: "2026 to Present", grades: [12], gradeLabel: "Grow With Google Ambassador" },
    ],
    sideRoles: [
      { role: "Parent Night Volunteer with Peer Helpers, greeting families and helping with event logistics", period: "Nov 2023, Apr 2025, Oct 2025" },
      { role: "AV Crew, helped run two school events", period: "2023 to 2024" },
      { role: "Eco Club Member", period: "2023 to 2025" },
      { role: "Enchanted Glenforest Volunteer, handed out presents and ran holiday activities for kids", period: "Dec 2023" },
      { role: "AI Presentation to Peel Board members", period: "Jan 2024 to Feb 2024" },
      { role: "Grade 11 Speaker, IB Student Night", period: "Oct 2025" },
      { role: "Guest Speaker, Parents Night at the MYP Personal Project exhibition", period: "Apr 2026" },
      { role: "Link Crew, Grade 9 orientation", period: "2026" },
    ],
  },
  {
    role: "Medical Writer",
    organization: "HEAL for Health Ontario",
    period: "Mar 2024 – Aug 2024",
    description:
      "Created a medical booklet on Respiratory Syncytial Virus (RSV) for underprivileged communities, supporting health education and accessibility.",
    image: "/healforhealth.jpg",
    skills: ["Medical Writing", "Health Communication", "Scientific Research", "Community Education"],
    link: "https://www.instagram.com/heal.ontario/p/C9U2GeiRj8i/",
  },
  {
    role: "World of Welcome Program Volunteer",
    organization: "Dixie Bloor Neighbourhood Centre (DBNC)",
    period: "Jun 2024 – Aug 2024",
    description:
      "Helped newcomer families adapt to Canada through orientation, event support, and youth engagement activities in the WOW program.",
    image: "/dbnc.jpg",
    skills: ["Community Engagement", "Youth Support", "Cross-Cultural Communication"],
    link: "https://www.dixiebloor.ca/",
    progression: [
      {
        role: "WOW Program Volunteer",
        period: "2025",
        description: "Supported World of Welcome (WOW) summer program, continuing work from 2024 and assisting with community events.",
      },
    ],
  },
  {
    role: "Community Event Volunteer",
    organization: "Volunteering Peel",
    period: "2023 – 2024",
    description:
      "Helped at large-scale community festivals and events with traffic guidance, participant check-ins, and community engagement.",
    image: "/volunteeringpeel.png",
    skills: ["Event Support", "Community Engagement", "Organization"],
    link: "https://volunteeringpeel.org/",
    progression: [
      {
        role: "Diwali RazMataz Volunteer",
        period: "Oct 2023",
        description: "Assisted at Celebration Square festival with setup and participant support.",
      },
      {
        role: "Coptic Egyptian Festival Volunteer",
        period: "Sep 2024",
        description: "Helped guide traffic, check in attendees, and assign seating.",
      },
    ],
  },
  {
    role: "Care Package Volunteer",
    organization: "The Flourish Foundation",
    period: "Dec 2023",
    description:
      "Assembled care packages with school supplies, toys, and essentials for children in need at the University of Toronto (Mississauga Campus).",
    image: "/floursihfoundation.jpg",
    skills: ["Teamwork", "Philanthropy", "Logistics", "Community Service"],
    link: "https://www.flourishfoundation.org/",
  },
  {
    role: "Holiday Cards Volunteer",
    organization: "Power to the Youth Toronto",
    period: "Dec 2023",
    description:
      "Created 40 thank-you and holiday cards for youth and staff at local shelters to spread kindness and encouragement.",
    image: "/ptyt.jpeg",
    skills: ["Creativity", "Community Support", "Empathy"],
    link: "",
  },
]
