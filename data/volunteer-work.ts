export type VolunteerWork = {
  role: string
  organization: string
  period: string
  description: string
  image: string
  skills: string[]
  link: string
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
    description:
      "Appointed as Junior Team Lead (JTL) for a one-year term to train junior volunteers and take on more responsibilities. Focuses on youth development, event planning, inclusivity, and accessibility.",
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
    role: "STEM Club Volunteer",
    organization: "Glenforest Secondary School STEM Club",
    period: "2024 – 2025",
    description:
      "Contributed to STEM outreach events, supporting student engagement and logistics.",
    image: "/gfss-stem.jpg",
    skills: ["STEM Outreach", "Logistics", "Photography", "Event Coordination"],
    link: "",
    progression: [
      {
        role: "STEM Symposium Volunteer",
        period: "Jan 2025",
        description:
          "Took photos and supported event coordination as middle school students attended STEM workshops and speaker sessions.",
      },
      {
        role: "STEM Speaker Usher",
        period: "May 2025",
        description: "Escorted speakers during the WOW STEM program, ensuring smooth event operations.",
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
    image: "/flourishfoundation.jpg",
    skills: ["Teamwork", "Philanthropy", "Logistics", "Community Service"],
    link: "https://www.flourishfoundation.org/",
  },
  {
    role: "Holiday Cards Volunteer",
    organization: "Power to the Youth Toronto",
    period: "Dec 2023",
    description:
      "Created 40 thank-you and holiday cards for youth and staff at local shelters to spread kindness and encouragement.",
    image: "/ptyt.jpg",
    skills: ["Creativity", "Community Support", "Empathy"],
    link: "",
  },
  {
    role: "Peer Helpers Volunteer",
    organization: "Glenforest Secondary School",
    period: "Oct – Nov 2023",
    description:
      "Helped during Parent’s Night by greeting families, offering information, and assisting with event logistics.",
    image: "/peer-helpers.jpg",
    skills: ["Public Relations", "Communication", "Event Support"],
    link: "",
  },
  {
    role: "School Event Volunteer",
    organization: "Glenforest Secondary School",
    period: "Dec 2023",
    description:
      "Supported school-led events including Christmas celebrations to create an inclusive and fun environment for younger students.",
    image: "/gfss-logo.jpg",
    skills: ["Team Support", "Student Engagement", "Leadership"],
    link: "",
    progression: [
      {
        role: "Enchanted Glenforest Volunteer",
        period: "Dec 2023",
        description: "Handed out presents and supported holiday activities for kids.",
      },
      {
        role: "AI Presentation Volunteer",
        period: "Jan – Feb 2024",
        description: "Presented on Artificial Intelligence to Peel Board members, helping raise student awareness on technology.",
      },
    ],
  },
]
