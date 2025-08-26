export type Certificate = {
  name: string
  issuer: string
  date: string
  description: string
  skills: string[]
  link: string
  image: string
  slug?: string
}

export const certificates: Certificate[] = [
  {
    name: "First Aid & CPR/AED Level C",
    issuer: "Canadian Red Cross",
    date: "Mar 2024 · Expires Mar 2027",
    description:
      "Comprehensive training in CPR, AED operation, and first aid techniques for adults, children, and infants. Covers emergency response strategies, injury assessment, and life-saving interventions.",
    skills: ["Emergency Response", "CPR Techniques", "AED Operation", "Wound Management", "Patient Assessment"],
    link: "https://www.redcross.ca/training-and-certification",
    image: "/redcross.jpg",
    slug: "first-aid-cpr-aed",
  },
  {
    name: "Food Handler Certification",
    issuer: "Food Safety Training Canada",
    date: "Feb 2024 · Expires Feb 2029",
    description:
      "Provides knowledge on food safety practices, cross-contamination prevention, proper food storage, and sanitation protocols to ensure compliance with health regulations.",
    skills: [
      "Foodborne Illness Prevention",
      "Cross-Contamination Control",
      "Sanitation Standards",
      "Allergen Awareness",
      "Safe Food Storage",
    ],
    link: "https://www.foodsafety.ca/",
    image: "/foodsafety.jpg",
    slug: "food-handler-certification",
  },
  {
    name: "High-Five Training (PCHD)",
    issuer: "HIGH FIVE® Global",
    date: "Jun 2024",
    description:
      "Focuses on child and youth development principles, effective recreation program design, and creating inclusive and engaging environments for young participants.",
    skills: [
      "Child Engagement Strategies",
      "Positive Coaching",
      "Recreational Program Development",
      "Behavioral Guidance",
      "Youth Leadership",
    ],
    link: "https://www.highfive.org/certifications",
    image: "/highfive.jpg",
    slug: "high-five-training",
  },
  {
    name: "Be There Certificate",
    issuer: "Born This Way Foundation",
    date: "Oct 2024",
    description:
      "Equips individuals with the tools to recognize and support someone struggling with mental health challenges, emphasizing active listening, empathy, and crisis intervention strategies.",
    skills: [
      "Mental Health Support",
      "Active Listening",
      "Empathy Building",
      "Suicide Prevention Awareness",
      "Crisis Communication",
    ],
    link: "https://www.channelkindness.org/be-there/",
    image: "/betherecert.jpg",
    slug: "be-there-certificate",
  },
  {
    name: "AODA & Ontario Human Rights Code",
    issuer: "Ontario Human Rights Commission",
    date: "Feb 2024",
    description:
      "Explores accessibility laws and human rights principles, focusing on inclusive practices, anti-discrimination policies, and advocating for equitable opportunities.",
    skills: [
      "Disability Accommodation",
      "Anti-Discrimination Advocacy",
      "Legal Compliance",
      "Policy Analysis",
      "Inclusive Communication",
    ],
    link: "https://www3.ohrc.on.ca/en/online-learning/working-together-code-and-aoda",
    image: "/aoda.jpg",
    slug: "aoda-human-rights",
  },
  {
    name: "NHCPS – Save a Life PALS Certification 2024",
    issuer: "The Postgraduate Institute for Medicine",
    date: "Feb 2024",
    description:
      "Advanced certification in pediatric emergency care, emphasizing resuscitation techniques, airway management, and rapid assessment of critically ill or injured children.",
    skills: [
      "Pediatric Emergency Care",
      "Advanced Airway Management",
      "Resuscitation Techniques",
      "Medication Administration",
      "Cardiac Arrest Response",
    ],
    link: "https://nhcps.com/course/pals-pediatric-advanced-life-support-certification-course/?srsltid=AfmBOoptvXp8tglX26fv7EuF2cqW-iQACjgIQA5q1drq5UM9JZ3lShKz",
    image: "/pals.jpg",
    slug: "nhcps-pals-certification",
  },
  {
    name: "Ministry of Labour, Training and Skills Development - Worker Health and Safety Awareness",
    issuer: "Labour, Immigration, Training and Skills Development",
    date: "Jun 2024",
    description:
      "Covers fundamental workplace safety principles, employee rights, hazard identification, and strategies for maintaining a safe and inclusive work environment.",
    skills: [
      "Workplace Hazard Identification",
      "Occupational Safety Standards",
      "Workplace Rights & Responsibilities",
      "Accident Prevention",
      "Risk Assessment",
    ],
    link: "https://www.ontario.ca/page/worker-health-and-safety-awareness-four-steps",
    image: "/healthsafety.jpg",
    slug: "ministry-labour-health-safety",
  },
]
