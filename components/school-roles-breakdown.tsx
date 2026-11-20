"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { SchoolRole } from "@/data/work-experience"

const gradeYears: Record<number, string> = {
  9: "2023 to 2024",
  10: "2024 to 2025",
  11: "2025 to 2026",
  12: "2026 to 2027",
}

// Grade and club names are headings one level below the "Roles" heading they sit under: h3 on full pages, h4 in pop ups
export default function SchoolRolesBreakdown({ roles, headingAs: Heading = "h4" }: { roles: SchoolRole[]; headingAs?: "h3" | "h4" }) {
  const grades = Array.from(new Set(roles.flatMap((r) => r.grades))).sort((a, b) => a - b)
  const clubs = Array.from(new Set(roles.map((r) => r.club)))

  return (
    <Tabs defaultValue="grade">
      <TabsList>
        <TabsTrigger value="grade">By Grade</TabsTrigger>
        <TabsTrigger value="club">By Club</TabsTrigger>
      </TabsList>
      <TabsContent value="grade" className="space-y-4">
        {grades.map((grade) => (
          <div key={grade}>
            <Heading className="font-semibold">
              Grade {grade} ({gradeYears[grade]})
            </Heading>
            <ul className="space-y-1">
              {roles
                .filter((r) => r.grades.includes(grade))
                .map((r) => (
                  <li key={`${r.club}-${r.role}`} className="flex items-start text-sm text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    <span>{r.gradeLabel}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="club" className="space-y-3">
        {clubs.map((club) => (
          <div key={club}>
            <Heading className="font-semibold">{club}</Heading>
            <p className="text-sm text-muted-foreground">
              {roles
                .filter((r) => r.club === club)
                .map((r) => `${r.role} (${r.period})`)
                .join(", then ")}
            </p>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
