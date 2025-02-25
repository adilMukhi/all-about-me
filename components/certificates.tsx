"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    name: "First Aid & CPR/AED Level C",
    issuer: "Canadian Red Cross",
    date: "Mar 2024 · Expires Mar 2027",
    description: "Credential ID 104841756. Skills: AED · First Aid · CPR · Healthcare · Medical Communications.",
  },
  {
    name: "Food Handler Certification",
    issuer: "Food Safety Training Canada",
    date: "Feb 2024 · Expires Feb 2029",
    description: "Credential ID 65bfe7f5-ebec-4b7a-a3f2-61a57f000001. Skills: Health & Safety · Healthcare · Food Safety.",
  },
  {
    name: "High-Five Training (PCHD)",
    issuer: "HIGH FIVE® Global",
    date: "Jun 2024",
    description: "Credential ID 779313. Skills: Health & Safety · Reading Comprehension · Soft Skills · Youth Development · Child Development · Counselor Training · Leadership.",
  },
  {
    name: "Be There Certificate",
    issuer: "Born This Way Foundation",
    date: "Oct 2024",
    description: "Skills: Youth Development · Child Development · Healthcare · Health & Safety",
  },
  {
    name: "Leaders In Training",
    issuer: "Dixie Bloor Neighbourhood Centre",
    date: "Jun 2024",
    description: "Skills: AED · First Aid · Health & Safety · Leadership · Event Planning · Time Management.",
  },
  {
    name: "Youth On The Rise",
    issuer: "Dixie Bloor Neighbourhood Centre",
    date: "Mar 2024",
    description: "Skills: AED · First Aid · Youth Development · Project Management · Event Planning · Leadership.",
  },
  {
    name: "Ministry of Labour, Training and Skills Development - Worker Health and Safety Awareness",
    issuer: "Labour, Immigration, Training and Skills Development",
    date: "Jun 2024",
    description: "Skills: Health & Safety · Accessibility.",
  },
  {
    name: "AODA & Ontario Human Rights Code",
    issuer: "Ontario Human Rights Commission",
    date: "Feb 2024",
    description: "Skills: Critical Thinking · Accessibility · Healthcare · Human Rights.",
  },
  {
    name: "NHCPS – Save a Life PALS Certification 2024",
    issuer: "The Postgraduate Institute for Medicine",
    date: "Feb 2024",
    description: "Skills: AED · Science · Critical Thinking · Health & Safety · First Aid · Medical Communications · Accessibility · Healthcare · Pediatric Advanced Life Support (PALS) · Cardiopulmonary Resuscitation (CPR).",
  },
  // Add more certificates as needed
];

export default function Certificates() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6)

  return (
    <section id="certificates" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl normal-case"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Certificates
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleCertificates.map((cert, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800"
            onMouseEnter={() => toggleExpand(index)}
            onMouseLeave={() => toggleExpand(null)}
          >
            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{cert.name}</CardTitle>
              <CardDescription>
                {cert.issuer} | {cert.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{cert.description}</p>
              {expandedCard === index && (
                <div className="mt-4">
                  <Image
                    src={`/certificate-${index + 1}.jpg`}
                    alt={cert.name}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover mb-4"
                  />
                  <h4 className="font-semibold">Skills Learned:</h4>
                  <ul className="list-disc list-inside">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                  </ul>
                  <Button className="mt-4">See More</Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {!showAll && certificates.length > 6 && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(true)}>Show More</Button>
        </div>
      )}
    </section>
  )
}

