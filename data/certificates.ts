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
    name: "Immigrant and Refugee Mental Health Course - Health Service Providers Stream",
    issuer: "Temerty Faculty of Medicine, University of Toronto & Centre for Addiction and Mental Health (CAMH)",
    date: "July 14 – August 25, 2025",
    description: "Evidence-based course on immigrant and refugee mental health, covering social determinants of health, migration trajectory, and equitable access to care. Accredited by CFPC and RCPSC for up to 30 Mainpro+ credits.",
    skills: [
      "Immigrant and refugee mental health",
      "Social determinants of health",
      "Equitable access to care",
      "Interdisciplinary partnerships",
      "Evidence-based clinical practice"
    ],
    link: "",
    image: "/certificates/immigrant-mentalhealth-course.png",
    slug: "immigrant-refugee-mental-health-course"
  },
  {
    name: "Fundamentals of Social Epidemiology Research: An Overview of Current Theories and Methods",
    issuer: "University of British Columbia & University of Toronto",
    date: "July 28, 2025",
    description: "Course on key theories and methods in social epidemiology research, focusing on the intersection of health, equity, and population outcomes.",
    skills: [
      "Social epidemiology",
      "Health equity research",
      "Epidemiological methods",
      "Population health analysis"
    ],
    link: "",
    image: "/certificates/Fundamentals of Social Epidemiology Research.png",
    slug: "fundamentals-social-epidemiology-research"
  },
  {
    name: "Google Data Analytics Professional Certificate (v2)",
    issuer: "Google via Coursera",
    date: "May 2025",
    description: "A comprehensive, hands-on program designed to equip beginners with the skills and tools needed for entry-level data analyst roles. The curriculum includes data cleaning, analysis, visualization, and communication using spreadsheets, SQL, R, and Tableau. The certificate is recognized for approximately 187 learning hours and is endorsed at EQF levels 5 and 6, equivalent to 7 ECTS credits. :contentReference[oaicite:6]{index=6}",
    skills: [
    "Data Cleaning",
    "Data Analysis",
    "Data Visualization",
    "SQL",
    "R Programming",
    "Tableau",
    "Spreadsheets",
    "Data Storytelling",
    "Stakeholder Communication"
    ],
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
    image: "/certificates/googledatacert.png",
    slug: "google-data-analytics-professional-v2"
  },
  {
    name: "See Different – Principles of DEI Certificate of Completion",
    issuer: "Canadian Centre for Diversity and Inclusion (CCDI)",
    date: "September 18, 2025",
    description: "Completed Certificate One of CCDI's national youth education initiative, See Different, focused on advancing diversity, equity, and inclusion. More information about the program is available at https://ccdi.ca/learning/see-different.",
    skills: [
      "Diversity, Equity, and Inclusion",
      "Youth Leadership",
      "Cultural Competency",
      "Inclusive Practices"
    ],
    link: "https://ccdi.ca/learning/see-different",
    image: "/certificates/seedifferentcert.png",
    slug: "see-different-principles-dei"
  },
  {
    name: "See Different Sticker Design Contest – Honourable Mention",
    issuer: "See Different",
    date: "September 7, 2025",
    description:
      "Submitted a design to the 'What does belonging mean to you?' contest, receiving an Honourable Mention for the Inclusion Cat artwork.",
    skills: [
      "Creative Expression",
      "Diversity, Equity, and Inclusion",
      "Youth Advocacy",
      "Design Thinking"
    ],
    link: "#",
    image: "/SeeDifferentHonorableMention.png",
    slug: "see-different-honourable-mention"
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
  {
    name: "Outstanding Youth Award",
    issuer: "Results Canada",
    date: "May 31, 2025",
    description:
      "Recognition for a young advocate demonstrating exceptional passion and dedication. Commitment to advocacy and impactful action have contributed greatly to Results Canada's mission to end extreme poverty.",
    skills: ["Youth Advocacy", "Social Impact", "Poverty Alleviation", "Community Leadership", "Policy Advocacy"],
    link: "#",
    image: "/certificates/results-canada-outstanding-youth.png",
    slug: "results-canada-outstanding-youth",
  },
  {
    name: "MFOTG: Recognize, Respond, Refer and Reflect",
    issuer: "MoreFeetOnTheGround.ca",
    date: "September 14, 2025",
    description: "Successfully completed the 'MFOTG: Recognize, Respond, Refer and Reflect' training, focused on recognizing, responding, and referring individuals experiencing mental health challenges, and reflecting on best practices for support.",
    skills: [
      "Mental Health Awareness",
      "Crisis Response",
      "Support Strategies",
      "Referral Skills",
      "Reflection Practices"
    ],
    link: "https://morefeetontheground.ca/",
    image: "/MoreFeetOnTheGroundcourse.png",
    slug: "mfotg-certification"
  },
  {
    name: "Certificate of Recognition - International Health Leaders Program",
    issuer: "International Health Leaders Program",
    date: "2024",
    description:
      "Recognized for successful completion of the International Health Leaders Program and presentation of a research project of high caliber and scholarly merit.",
    skills: [
      "Global Health Leadership",
      "Research Presentation",
      "International Health",
      "Academic Research",
      "Healthcare Policy",
    ],
    link: "#",
    image: "/certificates/international-health-leaders.png",
    slug: "international-health-leaders-recognition",
  },
  {
    name: "Certificate of Global Perspective Leadership",
    issuer: "MEDLIFE",
    date: "May 13, 2025",
    description:
      "Completed the Global Perspective Leadership Workshop, demonstrating commitment to leadership in global health and development through comprehensive training and coursework.",
    skills: [
      "Global Health Leadership",
      "International Development",
      "Leadership Development",
      "Healthcare Systems",
      "Global Perspective",
    ],
    link: "https://www.medlifemovement.org",
    image: "/certificates/medlife-leadership.png",
    slug: "medlife-global-leadership",
  },
  {
    name: "Certificate of Achievement - Research Program",
    issuer: "Gen Writers x Sunshine 4 Cancer Kids",
    date: "2024",
    description:
      "Successfully completed the 2024 Gen Writers x Sunshine 4 Cancer Kids Research Program and Research Paper, contributing to cancer research and awareness initiatives.",
    skills: ["Medical Research", "Academic Writing", "Cancer Awareness", "Research Methodology", "Healthcare Advocacy"],
    link: "#",
    image: "/certificates/gen-writers-achievement.png",
    slug: "gen-writers-research-achievement",
  },
  {
    name: "Third Place Award - Summer Research Program",
    issuer: "STEMBuddies",
    date: "2025",
    description:
      "Awarded third place for outstanding work and dedication to the 2025 STEMBuddies Summer Research Program, demonstrating excellence in STEM research and innovation.",
    skills: [
      "STEM Research",
      "Scientific Innovation",
      "Research Excellence",
      "Problem Solving",
      "Academic Achievement",
    ],
    link: "#",
    image: "/certificates/stembuddies-third-place.png",
    slug: "stembuddies-third-place",
  },
    {
    name: "Certificate of Completion - Genetics & Beyond",
    issuer: "STEMBuddies",
    date: "October 2025",
    description:
      "Successfully completed the Genetics & Beyond course, gaining knowledge in genetics, building STEM connections, and exploring future career pathways.",
    skills: [
      "Genetics",
      "STEM Education",
      "Critical Thinking",
      "Scientific Learning",
    ],
    link: "#",
    image: "/certificates/Certificate_of_Completion_Adil_Mukhi_Genetics_and_Beyond.png",
    slug: "genetics-and-beyond-completion",
  },
  {
    name: "Certificate of Appreciation - Silver Medal",
    issuer: "Biopage",
    date: "July 18, 2025",
    description:
      "Awarded silver medal in the Biopage Storytelling Writing Contest, demonstrating excellence in scientific storytelling and communication skills.",
    skills: ["Scientific Writing", "Storytelling", "Creative Writing", "Science Communication", "Content Creation"],
    link: "https://biopage.com",
    image: "/certificates/biopage-appreciation.png",
    slug: "biopage-silver-medal",
  },
  {
    name: "Your Voice is Power - Runner Up",
    issuer: "TakingITGlobal, UBC, and Amazon Future Engineer",
    date: "September 23, 2025",
    description:
      "Recognized as one of 40 Runner Up awardees out of hundreds of entries across Canada in the 2024-25 Your Voice is Power competition. Submitted a song (code) titled 'Time to change the world'.",
    skills: ["Music Coding", "Creativity", "STEM & Arts Integration", "Innovation", "Youth Empowerment"],
    link: "https://www.yourvoiceispower.ca/winner-and-judges/2025-winners#:~:text=Adil%2C%20Glenforest%20Secondary%20School%20(Mississauga)",
    image: "/certificates/voiceispower.png",
    slug: "your-voice-is-power-runner-up",
  },
  {
    name: "Certificate of Accomplishment - STEMHiss Vice President",
    issuer: "STEMHiss",
    date: "2024",
    description:
      "Recognized for dedicating 47.4 hours of volunteering to the STEMHiss non-profit organization and serving as Vice President, demonstrating leadership and commitment to STEM education.",
    skills: [
      "STEM Leadership",
      "Volunteer Service",
      "Non-profit Management",
      "Vice President Role",
      "Educational Outreach",
    ],
    link: "#",
    image: "/certificates/stemhiss-accomplishment-vp.png",
    slug: "stemhiss-accomplishment-vp",
  },
  {
    name: "Certificate of Accomplishment - STEM History International Scholar Award",
    issuer: "STEMHiss",
    date: "2024",
    description:
      "Recognized for representing the STEMHiss non-profit in achieving the STEM History International Scholar Award in the field of engineering, demonstrating excellence in STEM education and research.",
    skills: [
      "STEM Research",
      "Engineering Excellence",
      "International Recognition",
      "Academic Achievement",
      "STEM Education",
    ],
    link: "#",
    image: "/certificates/stemhiss-accomplishment-scholar.png",
    slug: "stemhiss-stem-history-scholar",
  },
  {
    name: "Certificate of Outstanding Civic Engagement",
    issuer: "Dixie Bloor Neighbourhood Centre",
    date: "2025",
    description:
      "Recognized for exceptional dedication and commitment to the WOW program at Glenforest Secondary School, demonstrating significant contributions and leadership in civic engagement.",
    skills: ["Civic Engagement", "Community Leadership", "Program Development", "Youth Mentorship", "Social Impact"],
    link: "#",
    image: "/certificates/dbnc-civic-engagement.png",
    slug: "dbnc-civic-engagement",
  },
  {
    name: "Semifinalist Certificate - Mitosisphere Exam",
    issuer: "Mitosisphere",
    date: "January 25, 2025",
    description:
      "Achieved semifinalist status in the January 25th, 2025 p + q = 1 exam, demonstrating advanced mathematical and scientific problem-solving abilities.",
    skills: [
      "Mathematical Problem Solving",
      "Scientific Analysis",
      "Competition Excellence",
      "STEM Knowledge",
      "Academic Achievement",
    ],
    link: "#",
    image: "/certificates/mitosisphere-semifinalist.png",
    slug: "mitosisphere-semifinalist",
  },

  // ✅ Strong Tier
  {
    name: "Certificate of Participation - DNA Day Essay Contest",
    issuer: "American Society of Human Genetics (ASHG)",
    date: "2025",
    description:
      "Participated in the 2025 DNA Day Essay Contest organized by the American Society of Human Genetics, demonstrating knowledge in genetics and scientific writing.",
    skills: ["Genetics Knowledge", "Scientific Writing", "Essay Competition", "Human Genetics", "Academic Writing"],
    link: "#",
    image: "/certificates/ashg-dna-day-essay.png",
    slug: "ashg-dna-day-essay-participation",
  },
  {
    name: "Certificate of Honor - Cosmic Research Initiative",
    issuer: "Cosmic-Us",
    date: "April 1 - May 31, 2024",
    description:
      "Received Honorable Mention in the 'Cosmic Research Initiative Program' as a researcher from Science Group, demonstrating excellence in space science research and cosmic exploration.",
    skills: ["Space Science Research", "Cosmic Research", "Scientific Research", "Astronomy", "Research Excellence"],
    link: "#",
    image: "/certificates/cosmic-us-honor-mention.png",
    slug: "cosmic-us-honor-mention",
  },
  {
    name: "Certificate of Contribution - Earth Day Competition",
    issuer: "Human Nature Projects Canada",
    date: "2025",
    description:
      "Recognized for reducing carbon footprint using the Commit2Act Platform for HNP Canada's 2025 Earth Day Competition, demonstrating commitment to environmental awareness and sustainability.",
    skills: [
      "Environmental Sustainability",
      "Carbon Footprint Reduction",
      "Climate Action",
      "Environmental Awareness",
      "Sustainability Practices",
    ],
    link: "#",
    image: "/certificates/hnp-contribution.png",
    slug: "hnp-earth-day-contribution",
  },
  {
    name: "Certificate of Recognition - Earth Day Competition Third Place",
    issuer: "Human Nature Projects Ontario",
    date: "June 13-24, 2024",
    description:
      "Achieved 3rd place in the Earth Day competition's Carbon Reduction Challenge sector, demonstrating commitment to environmental sustainability and carbon footprint reduction.",
    skills: [
      "Environmental Sustainability",
      "Carbon Reduction",
      "Climate Action",
      "Competition Achievement",
      "Environmental Awareness",
    ],
    link: "#",
    image: "/certificates/hnp-ontario-third-place.png",
    slug: "hnp-ontario-third-place",
  },
  {
    name: "Certificate of Appreciation - Biopage Silver Medal",
    issuer: "Biopage",
    date: "February 18, 2025",
    description:
      "Awarded silver medal in the Biopage Storytelling Writing Contest, demonstrating excellence in scientific storytelling and communication from Philadelphia, United States.",
    skills: ["Scientific Writing", "Storytelling", "Writing Competition", "Science Communication", "Creative Writing"],
    link: "https://biopage.com",
    image: "/certificates/biopage-appreciation-silver.png",
    slug: "biopage-appreciation-silver",
  },
  {
    name: "Certificate of Participation - Immunology Research Competition",
    issuer: "BioMedizone",
    date: "August 29, 2024",
    description:
      "Participated in the Immunology Research Competition organized by BioMedizone, demonstrating knowledge and research skills in immunology and biomedical sciences.",
    skills: [
      "Immunology Research",
      "Biomedical Sciences",
      "Research Competition",
      "Medical Research",
      "Scientific Knowledge",
    ],
    link: "#",
    image: "/certificates/biomedizone-immunology-research.png",
    slug: "biomedizone-immunology-research",
  },
  {
    name: "Medicine4Youth Research Contribution Certificate",
    issuer: "Medicine4Youth",
    date: "2024",
    description:
      "Contributed to the creation of a student-led Research Review Article within Medicine4Youth's 2024 Summer Research Project, advancing medical education for youth.",
    skills: ["Medical Research", "Research Writing", "Literature Review", "Medical Education", "Youth Leadership"],
    link: "#",
    image: "/certificates/medicine4youth-contribution.png",
    slug: "medicine4youth-research-contribution",
  },
  {
    name: "Certificate of Completion - Preventing Dementia Course",
    issuer: "University of Tasmania - Wicking Dementia Research and Education Centre",
    date: "October 2024",
    description:
      "Successfully completed all modules of the 'Preventing Dementia' Massive Open Online Course, gaining comprehensive knowledge about dementia prevention strategies and research.",
    skills: ["Dementia Prevention", "Medical Education", "Online Learning", "Healthcare Research", "Neuroscience"],
    link: "#",
    image: "/certificates/wicking-preventing-dementia.png",
    slug: "wicking-preventing-dementia",
  },
  {
    name: "Maroon Certification of Leadership",
    issuer: "HOSA Canada",
    date: "2024-2025",
    description:
      "Earned Maroon Certification for attending at least 4 seminars and 10 workshops over the course of the 2024-2025 academic year, demonstrating commitment to healthcare leadership.",
    skills: [
      "Healthcare Leadership",
      "Professional Development",
      "Workshop Participation",
      "Medical Education",
      "Leadership Training",
    ],
    link: "#",
    image: "/certificates/hosa-maroon-leadership.png",
    slug: "hosa-maroon-leadership-certification",
  },
  {
    name: "Navy Certification of Leadership",
    issuer: "HOSA Canada",
    date: "2023-2024",
    description:
      "Earned Navy Certification for attending at least 3 seminars and 4 workshops throughout the 2023/2024 HOSA Canada academic year, demonstrating commitment to healthcare leadership development.",
    skills: [
      "Healthcare Leadership",
      "Professional Development",
      "Workshop Participation",
      "Medical Education",
      "Leadership Training",
    ],
    link: "#",
    image: "/certificates/hosa-navy-leadership.png",
    slug: "hosa-navy-leadership",
  },

  // 📘 Medium Tier
  {
    name: "Certificate of Graduation - Young Canadians' Parliament",
    issuer: "Young Canadians' Parliament",
    date: "March 1, 2025",
    description:
      "Successfully graduated from the Young Canadians' Parliament 2024/2025 Sessions, demonstrating commitment to civic engagement and parliamentary procedures.",
    skills: ["Parliamentary Procedures", "Civic Engagement", "Public Speaking", "Policy Development", "Leadership"],
    link: "#",
    image: "/certificates/young-canadians-parliament.png",
    slug: "young-canadians-parliament-graduation",
  },
  {
    name: "Certificate of Participation - UHN STEM Pathways",
    issuer: "University Health Network (UHN)",
    date: "2024-2025",
    description:
      "Recognized for dedication to furthering understanding of Science, Technology, Engineering and Math (STEM) and successful participation in sessions with the University Health Network.",
    skills: [
      "STEM Education",
      "Healthcare Technology",
      "Medical Research",
      "Scientific Learning",
      "University Collaboration",
    ],
    link: "#",
    image: "/certificates/uhn-stem-pathways.png",
    slug: "uhn-stem-pathways-participation",
  },
  {
    name: "Certification of Service - Aid4Need Volunteer",
    issuer: "Aid4Need",
    date: "2024",
    description:
      "Recognized for serving as a volunteer and social media ambassador for Aid4Need, contributing to healthcare awareness and community outreach initiatives.",
    skills: [
      "Volunteer Service",
      "Social Media Management",
      "Healthcare Advocacy",
      "Community Outreach",
      "Ambassador Role",
    ],
    link: "#",
    image: "/certificates/aid4need-service-certification.png",
    slug: "aid4need-service-certification",
  },
  {
    name: "Letter of Participation - International Legal Essay Competition",
    issuer: "Youthful Lawyers",
    date: "2025",
    description:
      "Submitted entry to the Youthful Lawyers 2025 International Legal Essay Competition under the prompt 'Does affirmative action create true equality or simply reverse discrimination?', demonstrating engagement with complex legal and social issues.",
    skills: ["Legal Writing", "Critical Analysis", "Social Justice", "Essay Competition", "Legal Research"],
    link: "#",
    image: "/certificates/youthful-lawyers-legal-essay.png",
    slug: "youthful-lawyers-legal-essay",
  },
  {
    name: "Certificate of Participation - Sketch for Survival Junior",
    issuer: "Explorers Against Extinction",
    date: "2025",
    description:
      "Submitted original artwork to Sketch for Survival Junior 2025, supporting campaigns to recover key species and restore ecosystems. Seedballs containing indigenous tree and plant seeds will be distributed in Kenya's Masai Mara by the Mara Elephant Project.",
    skills: [
      "Environmental Conservation",
      "Wildlife Protection",
      "Artistic Expression",
      "Ecosystem Restoration",
      "Conservation Awareness",
    ],
    link: "#",
    image: "/certificates/sketch-for-survival-junior.png",
    slug: "sketch-for-survival-junior",
  },
  {
    name: "Certificate of Completion - Blue Ocean Strategy",
    issuer: "Blue Ocean Competition",
    date: "September 24, 2024",
    description:
      "Successfully completed the Blue Ocean Student Entrepreneurs Mini-Course, learning the basics of Blue Ocean Strategy and how to develop a blue ocean pitch to win competitions.",
    skills: ["Blue Ocean Strategy", "Entrepreneurship", "Business Strategy", "Pitch Development", "Innovation"],
    link: "#",
    image: "/certificates/blue-ocean-completion.png",
    slug: "blue-ocean-completion",
  },
  {
    name: "Certificate of Participation - Youth Employment Workshop",
    issuer: "Dixie Bloor Neighbourhood Centre",
    date: "March 24 - April 14, 2025",
    description:
      "Participated in the Youth Employment Workshop Series, earning 4 community involvement hours for active support in the development of employment skills for students.",
    skills: [
      "Employment Skills",
      "Youth Development",
      "Community Involvement",
      "Career Development",
      "Workshop Facilitation",
    ],
    link: "#",
    image: "/certificates/dixie-bloor-participation.png",
    slug: "dixie-bloor-youth-employment",
  },
  {
    name: "Certificate of Recognition - Liberal Arts Competition",
    issuer: "Human Nature Projects Ontario",
    date: "March 18, 2024",
    description:
      "Received Honourable Creativity Mention for exceptional submission in the 2024 Human Nature Projects Ontario Liberal Arts Competition, demonstrating creative excellence and artistic merit.",
    skills: ["Liberal Arts", "Creative Writing", "Artistic Expression", "Competition Excellence", "Creative Thinking"],
    link: "#",
    image: "/certificates/hnp-ontario-creativity-mention.png",
    slug: "hnp-ontario-creativity-mention",
  },
  {
    name: "Certificate of Participation - Literary Competition",
    issuer: "Project Scruto",
    date: "2024",
    description:
      "Participated in Project Scruto's virtual literary competition, demonstrating creative writing skills and literary engagement in a competitive academic environment.",
    skills: [
      "Creative Writing",
      "Literary Analysis",
      "Competition Participation",
      "Academic Writing",
      "Literary Engagement",
    ],
    link: "#",
    image: "/certificates/project-scruto-participation.png",
    slug: "project-scruto-literary",
  },
  {
    name: "Certificate of Recognition - Literary Competition Consolation",
    issuer: "Project Scruto",
    date: "2024",
    description:
      "Received consolation position in Project Scruto's literary competition, demonstrating strong creative writing abilities and literary engagement.",
    skills: [
      "Creative Writing",
      "Literary Competition",
      "Writing Excellence",
      "Literary Analysis",
      "Academic Achievement",
    ],
    link: "#",
    image: "/certificates/project-scruto-recognition.png",
    slug: "project-scruto-literary-recognition",
  },
  {
    name: "Certificate of Participation - Cosmic-US Research Initiative",
    issuer: "Cosmic-US",
    date: "June 9, 2024",
    description:
      "Participated in the Cosmic-US Research Initiative 2024, contributing to research programs focused on space science and cosmic exploration.",
    skills: ["Space Science Research", "Scientific Research", "Astronomy", "Research Participation", "STEM Education"],
    link: "#",
    image: "/certificates/cosmic-us-participation.png",
    slug: "cosmic-us-research-participation",
  },
  {
    name: "Certificate of Participation - Healthcare Poster Contest",
    issuer: "Aid4Need",
    date: "2024",
    description:
      "Participated in Aid4Need's healthcare poster contest and created awareness posters on healthcare-related topics, demonstrating commitment to health education and community awareness.",
    skills: [
      "Healthcare Awareness",
      "Poster Design",
      "Community Engagement",
      "Health Education",
      "Visual Communication",
    ],
    link: "#",
    image: "/certificates/aid4need-participation.png",
    slug: "aid4need-participation",
  },
  {
    name: "Certificate of Participation - Forest of Reading",
    issuer: "Forest of Reading & Scene Bean",
    date: "2024",
    description:
      "Successfully read or had read official selections and is eligible to vote for the Yellow Cedar Award, demonstrating commitment to literacy and reading engagement.",
    skills: ["Reading Comprehension", "Literary Engagement", "Literacy Advocacy", "Book Selection", "Reading Awards"],
    link: "#",
    image: "/certificates/forest-of-reading-participation.png",
    slug: "forest-of-reading-participation",
  },
  {
    name: "Certificate of Participation - Earth Day Carbon Reduction Challenge",
    issuer: "Human Nature Projects Ontario",
    date: "June 13-24, 2024",
    description:
      "Participated in the Earth Day competition's Carbon Reduction Challenge sector, demonstrating commitment to environmental sustainability and carbon footprint reduction initiatives.",
    skills: [
      "Carbon Reduction",
      "Environmental Sustainability",
      "Climate Action",
      "Earth Day Participation",
      "Environmental Awareness",
    ],
    link: "#",
    image: "/certificates/hnp-ontario-carbon-reduction.png",
    slug: "hnp-ontario-carbon-reduction",
  },
  {
    name: "Certificate of Participation - Dental Professions Career Session",
    issuer: "HOSA Future Health Professionals & ADEA",
    date: "February 27, 2025",
    description:
      "Completed the 'More Than Just Nice Teeth: The Many Benefits of a Dental Professions Career' Virtual Career Mini-Series session, learning about career pathways and networking opportunities in dentistry.",
    skills: [
      "Dental Career Awareness",
      "Healthcare Careers",
      "Professional Development",
      "Career Exploration",
      "Health Professions",
    ],
    link: "#",
    image: "/certificates/hosa-dental-professions.png",
    slug: "hosa-dental-professions-career",
  },
  {
    name: "Certificate of Participation - Gauss Contest 2023",
    issuer: "University of Waterloo - Centre for Education in Mathematics and Computing",
    date: "2023",
    description:
      "Accepted the challenge to write the Gauss Contest in 2023, continuing commitment to mathematical excellence and competitive problem-solving at the university level.",
    skills: [
      "Mathematical Problem Solving",
      "Competition Mathematics",
      "Academic Challenge",
      "STEM Excellence",
      "Mathematical Reasoning",
    ],
    link: "https://www.cemc.uwaterloo.ca",
    image: "/certificates/waterloo-gauss-contest-2023.png",
    slug: "waterloo-gauss-contest-2023",
  },
  {
    name: "Certificate of Participation - Gauss Contest 2022",
    issuer: "University of Waterloo - Centre for Education in Mathematics and Computing",
    date: "2022",
    description:
      "Accepted the challenge to write the Gauss Contest in 2022, demonstrating mathematical problem-solving abilities and academic engagement with competitive mathematics.",
    skills: [
      "Mathematical Problem Solving",
      "Competition Mathematics",
      "Academic Challenge",
      "STEM Excellence",
      "Mathematical Reasoning",
    ],
    link: "https://www.cemc.uwaterloo.ca",
    image: "/certificates/waterloo-gauss-contest-2022.png",
    slug: "waterloo-gauss-contest-2022",
  },
  {
    name: "Certificate of Completion - Peel District Summer Coding Camp",
    issuer: "Peel District School Board",
    date: "July 29, 2022",
    description:
      "Participated in the Peel District School Board Summer Coding Camp, gaining hands-on programming experience and coding skills development under instructor Michael Bacchus.",
    skills: [
      "Programming Skills",
      "Coding Education",
      "Summer Learning",
      "Technology Training",
      "Software Development",
    ],
    link: "#",
    image: "/certificates/peel-coding-camp.png",
    slug: "peel-coding-camp",
  },
  {
    name: "Certificate of Python",
    issuer: "StudySection",
    date: "June 9, 2022",
    description:
      "Successfully passed the Python (Foundation) Exam conducted online by StudySection, demonstrating foundational programming skills and Python language proficiency.",
    skills: [
      "Python Programming",
      "Programming Fundamentals",
      "Software Development",
      "Coding Skills",
      "Computer Science",
    ],
    link: "https://www.studysection.com",
    image: "/certificates/studysection-python.png",
    slug: "studysection-python",
  },
  {
    name: "Certificate of Graphic Design",
    issuer: "StudySection",
    date: "June 9, 2022",
    description:
      "Successfully passed the Graphic Design (Foundation) Exam conducted online by StudySection, demonstrating foundational skills in visual design, layout principles, and creative communication.",
    skills: ["Graphic Design", "Visual Communication", "Design Principles", "Creative Design", "Digital Design"],
    link: "https://www.studysection.com",
    image: "/certificates/studysection-graphic-design.png",
    slug: "studysection-graphic-design",
  },
  {
    name: "Certificate of E-Marketing",
    issuer: "StudySection",
    date: "June 9, 2022",
    description:
      "Successfully passed the E-Marketing (Foundation) Exam conducted online by StudySection, demonstrating knowledge of digital marketing strategies, online advertising, and e-commerce fundamentals.",
    skills: ["Digital Marketing", "E-Marketing", "Online Advertising", "Marketing Strategy", "E-Commerce"],
    link: "https://www.studysection.com",
    image: "/certificates/studysection-e-marketing.png",
    slug: "studysection-e-marketing",
  },
  {
    name: "Certificate of Structured Query Language (SQL)",
    issuer: "StudySection",
    date: "August 10, 2022",
    description:
      "Successfully passed the Structured Query Language (SQL) (Foundation) Exam conducted online by StudySection, demonstrating proficiency in database management, query writing, and data manipulation.",
    skills: ["SQL Programming", "Database Management", "Data Querying", "Database Design", "Data Analysis"],
    link: "https://www.studysection.com",
    image: "/certificates/studysection-sql.png",
    slug: "studysection-sql",
  },
  {
    name: "Certificate of Project Management",
    issuer: "StudySection",
    date: "June 9, 2022",
    description:
      "Successfully passed the Project Management (Foundation) Exam conducted online by StudySection, demonstrating understanding of project planning, execution, monitoring, and team leadership principles.",
    skills: ["Project Management", "Project Planning", "Team Leadership", "Resource Management", "Project Execution"],
    link: "https://www.studysection.com",
    image: "/certificates/studysection-project-management.png",
    slug: "studysection-project-management",
  },
  {
    name: "Certificate of Completion - Hour of Code",
    issuer: "Code.org",
    date: "2022",
    description:
      "Successfully completed 'The Hour of Code' and demonstrated understanding of basic concepts of Computer Science, with generous sponsorship support from Facebook.",
    skills: [
      "Computer Science Basics",
      "Programming Concepts",
      "Coding Fundamentals",
      "Technology Education",
      "STEM Learning",
    ],
    link: "https://code.org",
    image: "/certificates/code-org-hour-of-code.png",
    slug: "code-org-hour-of-code",
  },
  {
    name: "Certificate of English Grammar",
    issuer: "StudySection",
    date: "June 9, 2022",
    description:
      "Successfully passed the English Grammar (Foundation) Exam conducted online by StudySection, demonstrating proficiency in English grammar fundamentals and language skills.",
    skills: ["English Grammar", "Language Proficiency", "Foundation Skills", "Online Assessment", "Language Arts"],
    link: "https://www.studysection.com",
    image: "/certificates/studysection-english-grammar.png",
    slug: "studysection-english-grammar",
  },
  {
    name: "Certificate of Completion - Child Neurology",
    issuer: "MedSchoolCoach",
    date: "July 10, 2024",
    description:
      "Successfully completed one hour of Child Neurology from the Virtual Clinical Education Series, gaining specialized knowledge in pediatric neurological conditions and treatments.",
    skills: [
      "Child Neurology",
      "Pediatric Medicine",
      "Medical Education",
      "Neurological Disorders",
      "Clinical Knowledge",
    ],
    link: "#",
    image: "/certificates/medschool-child-neurology.png",
    slug: "medschool-child-neurology",
  },
  {
    name: "Certificate of Completion - General Surgery",
    issuer: "MedSchoolCoach",
    date: "July 10, 2024",
    description:
      "Successfully completed one hour of General Surgery from the Virtual Clinical Education Series, gaining foundational knowledge in surgical procedures and patient care.",
    skills: ["General Surgery", "Surgical Procedures", "Medical Education", "Patient Care", "Clinical Knowledge"],
    link: "#",
    image: "/certificates/medschool-general-surgery.png",
    slug: "medschool-general-surgery",
  },
  {
    name: "Certificate of Completion - Emergency Medicine",
    issuer: "MedSchoolCoach",
    date: "July 10, 2024",
    description:
      "Successfully completed one hour of Emergency Medicine from the Virtual Clinical Education Series, gaining knowledge in emergency care protocols and critical patient management.",
    skills: ["Emergency Medicine", "Critical Care", "Medical Education", "Emergency Protocols", "Patient Management"],
    link: "#",
    image: "/certificates/medschool-emergency-medicine.png",
    slug: "medschool-emergency-medicine",
  }
]
