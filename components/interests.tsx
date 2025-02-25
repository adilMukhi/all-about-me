import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const interests = {
  sports: ["Badminton", "Tennis", "Volleyball"],
  hobbies: ["Photography", "Writing", "Chess"],
  teams: ["GFSS Tennis Team - ROPSSAA Quarter Finalist"],
}

export default function Interests() {
  return (
    <section id="interests" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Sour Gummy, latin"}}>Interests</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Sports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.sports.map((sport) => (
                <Badge key={sport} variant="secondary">
                  {sport}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Hobbies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.hobbies.map((hobby) => (
                <Badge key={hobby} variant="secondary">
                  {hobby}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover-effect">
          <CardHeader>
            <CardTitle>Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.teams.map((team) => (
                <Badge key={team} variant="secondary">
                  {team}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

