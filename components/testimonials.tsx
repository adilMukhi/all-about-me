import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Riya Dutta",
    role: "Founder & CEO @ Restoring Rainbows Southlake",
    relationship: "Direct Manager",
    timeKnown: "October 2024",
    connection: "Research Aid for international research collaboration",
    testimonial:
      "I have had the pleasure of directly managing Adil as a Research Aid for the international research collaboration at my youth non-profit, Restoring Rainbows Southlake. From the very beginning, Adil has demonstrated an incredible work ethic and a level of motivation that is truly commendable. He consistently approaches his tasks with a proactive mindset, often being two steps ahead. What sets Adil apart is not just his reliability, but also his keen attention to detail. He brings a high level of precision and thoughtfulness to every part of his research, making sure that all parts are thoroughly organized. Adil is an excellent communicator. I can always trust him to handle responsibilities, knowing that he will follow through with integrity and professionalism. I have no doubt that he will continue to excel in any future endeavors he takes on. I highly recommend him to any team or organization looking for someone who reliable, hardworking, and dedicated.",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Peace Mukazi Ndekezi, Ph.D.",
    role: "PhD in Conflict Studies | Women-Led Peacebuilding & Community-Based Approaches",
    relationship: "Senior Colleague",
    timeKnown: "February 2024",
    connection: "Results Canada volunteer collaboration",
    testimonial:
      "I met Adil on February 1st at the Volunteer MBC fair, where he expressed interest to join Results Canada. Since then, Adil has been a transformational advocate and a star volunteer. As of now Adil got two letters to the editor published which is an important tool of advocacy. Adil is straightforward, passionate and committed to end poverty by advocating for neglected International Development issues. I am confident in Adil's ability to perform in any role given.",
    image: "/placeholder-jehdj.png",
  },
  {
    name: "Muhammad Idrees",
    role: "Results Mississauga Group Leader",
    relationship: "Direct Manager",
    timeKnown: "April 2024",
    connection: "Results volunteer advocacy work",
    testimonial:
      "As a volunteer at Results, Adil is a diligent and hard-working advocate. In the short time that I've known him, he's made a significant impact through social media, LTEs and interacting with his MPs. Furthermore, he is always an engaged in group discussions and is eager to learn and try. I am happy to have him as a member of the Results Mississauga group!",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Richard Laurente RSSW",
    role: "Library Outreach Worker",
    relationship: "Teacher/Facilitator",
    timeKnown: "March 2024",
    connection: "Youth on the Rise Workshop Series",
    testimonial:
      "I am writing this recommendation for Adil Mukhi due to his exceptional participation in DBNC's 'Youth on the Rise' 6-Week Employment and Empowerment Workshop Series. As the founder & facilitator of this program, I had the privilege of witnessing Adil's growth, dedication, and remarkable commitment to personal and professional development. Throughout our workshop series, Adil consistently demonstrated a thirst for knowledge and a genuine eagerness to learn. His active engagement in the sessions, thoughtful contributions, and insightful questions showcased his deep understanding of the workshop topics and his ability to apply the concepts to real-world situations. Adil exhibited a remarkable level of professionalism and enthusiasm throughout the entire program. He actively sought feedback, embraced constructive criticism, and implemented suggestions to enhance his skills and abilities. His dedication to continuous self-improvement was evident in his consistent efforts to apply the knowledge gained from the workshop series to his professional endeavors. Moreover, Adil proved to be an exceptional team player and collaborator. Adil actively participated in group activities, demonstrated effective communication skills, and displayed a remarkable ability to foster a supportive and inclusive environment. His positive energy and willingness to help others made him an invaluable asset to his group of peers and to the enrichment of the program itself. Adil's strong work ethic, passion for self-improvement, and ability to adapt to new challenges make him an ideal candidate for future opportunities. In conclusion, I wholeheartedly recommend Adil for any endeavors he may pursue in his professional journey. Adil's remarkable commitment to personal and professional development, combined with his strong interpersonal skills makes him an asset to any team or organization. I am confident that he will continue to thrive and achieve great success on his life journey.",
    image: "/placeholder-uhusa.png",
  },
]

export default function Testimonials() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Bubblegum Sans, latin" }}>
          What People Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Recommendations and testimonials from colleagues, mentors, and collaborators who have worked with me.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50"
          >
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Section */}
                <div className="flex-shrink-0 lg:w-80">
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="relative mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{testimonial.role}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-1">
                        <span className="font-medium text-blue-600">Relationship:</span>
                        <span className="text-muted-foreground">{testimonial.relationship}</span>
                      </div>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-1">
                        <span className="font-medium text-blue-600">Since:</span>
                        <span className="text-muted-foreground">{testimonial.timeKnown}</span>
                      </div>
                      <div className="flex flex-col lg:flex-row lg:items-start gap-1">
                        <span className="font-medium text-blue-600">Context:</span>
                        <span className="text-muted-foreground leading-relaxed">{testimonial.connection}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-blue-500/20 mb-4" />
                  <blockquote className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    "{testimonial.testimonial}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
