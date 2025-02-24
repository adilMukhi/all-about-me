import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    degree: "High School Diploma, International Baccalaureate",
    institution: "Glenforest Secondary School",
    period: "Sep 2023 - Jun 2027",
    description: "Grade 9-12. Active in leadership roles such as Vice President of the French Club and STEM Fellowship Chapter. Participates in DECA, HOSA, Peer Helper Tutor.",
  },
  {
    degree: "MedLinx Program",
    institution: "The University of Toronto, Temerty Faculty of Medicine, Office of Access and Outreach",
    period: "Dec 2024 - Apr 2025",
    description: "Real-world experience in healthcare through hands-on activities, mentorship, and academic workshops. I took the UfT course Introduction to the Role of the Human Development Index and Social Determinants of Health on the Global Burden of Disease - Taught by Dr. Andrea K. Boggild, BSc, MSc, MD",
  },
  {
    degree: "IB MYP and IB DP Diploma, Core",
    institution: "International Baccalaureate",
    period: "Sep 2023 - May 2027",
    description: "Global education framework focusing on research, communication, and global understanding skills.",
  },
  // Add more education entries as needed
]

export default function Education() {
  return (
    <section id="education" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case" style={{ fontFamily: "Bangers, latin", letterSpacing: '0.1em'}}>Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
              <CardDescription>
                {edu.institution} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

