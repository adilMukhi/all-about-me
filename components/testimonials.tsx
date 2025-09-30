import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Peace Mukazi Ndekezi, Ph.D.",
    role: "PhD in Conflict Studies | Women-Led Peacebuilding & Community-Based Approaches | Researcher | Public Engagement and Advocacy",
    relationship: "Senior Colleague",
    timeKnown: "September 17, 2025",
    connection: "Results Canada volunteer collaboration",
    testimonial:
      "I have had the privilege of working with Adil through his volunteer engagement with Results Canada, and I have been continually impressed by his leadership, dedication, and passion for advocacy.\n\nAs the High-School Advocacy Group Lead, Adil successfully guided a team of 49 members across the country, fostering collaboration and empowering youth to use their voices for change. His commitment is evident in the more than 200 hours he contributed, as well as his impressive record of 12+ published LTEs. Beyond his written advocacy, Adil has also demonstrated strong communication and public-speaking skills—most notably as a panel speaker at the Results Action Kickoff in May 2025.\n\nAdil’s excellence and impact have been recognized nationally, earning him one of only two Outstanding Youth Awards, as well as being featured in World Youth Skills Day in both 2024 and 2025. His ability to lead, inspire, and drive meaningful action makes him an asset in any setting.\n\nI highly recommend Adil for opportunities where leadership, advocacy, and collaboration are valued. He consistently brings dedication, insight, and heart to all that he does.",
    image: "/Peace-Mukazi-Ndekei.jpg",
  },
  {
    name: "Kai Flicker",
    role: "Youth Program Coordinator at Children First Canada | University of Ottawa Student",
    relationship: "Direct Manager",
    timeKnown: "September 15, 2025",
    connection: "SDG Accelerator Program Facilitator",
    testimonial:
      "I had the pleasure of working with Adil during the SDG Accelerator Program at Children First Canada, where he served as a Facilitator. Throughout the program, Adil demonstrated an impressive level of responsibility and professionalism. He was always punctual and well-prepared, setting a strong example for both his peers and the youth he worked with.\n\nAdil also took initiative in this leadership role, whether that meant guiding his group through complex ideas, facilitating engaging discussions, or stepping in to support the broader program team when needed. He balanced patience and clarity in his teaching with confidence in leading workshops, which created an inclusive and productive environment for young participants.",
    image: "/KaiFlicker.jpg",
  },
    {
    name: "Kate Tucker",
    role: "Medical Student at NOSM U",
    relationship: "Mentor",
    timeKnown: "September 29, 2025",
    connection: "STEM Fellowship mentorship program",
    testimonial:
      "I had the pleasure of mentoring Adil through the STEM Fellowship mentorship program. Since first meeting him, he has impressed me with his drive, leadership, and curiosity. Our first project together was to write and publish a paper titled From Stress to Forgetfulness: Understanding How Stress Hormones Shape Your Memory—an exploration into the neuroscience and psychology of stress and memory. His keen interest in developing his research skills, attention to detail, and interdisciplinary thinking of medicine and social sciences were instrumental in pushing the work to completion and transferring the skills he tested to many other aspects of his life.\n\nBeyond research, I also had the opportunity to mentor him in his leadership role with Dr. Interested, a youth advocacy initiative that he helped scale to reach over 60,000 youth, with 900+ members, 70 executives, and 13 active programs. Adil seeks opportunity to learn, network, and expand his thinking in all aspects of his life and so I was excited to support him when he asked for support in sharing those skills and tools with other high school students interested in medicine by founding Dr. Interested. Since then, his leadership, strategic thinking, collaborative spirit, and ability to bring others together have been key to its success—culminating in an impressive marketing reach, excellent and accessible resources, and a bright vision for the future of the club.\n\nWhether in academic research, mentorship, or youth leadership, Adil brings integrity, creativity, and a relentless drive to all that he does. It has been my pleasure to work and learn alongside him, his future collaborators will surely be as impressed as I have been.",
    image: "/KateTucker.jpg",
  },
  {
    name: "Michael Furdyk",
    role: "Co-founder & Director of Innovation, TakingITGlobal",
    relationship: "Client",
    timeKnown: "September 23, 2025",
    connection: "Curriculum review for YVIP AI lessons and modules",
    testimonial:
      "We appreciate [Adil's] insights in your review of our new Artificial Intelligence lessons and curriculum modules, helping us tailor them to students across middle and high school, and ensuring they have the greatest impact possible.",
    image: "/MichaelFurdyk.jpg",
  },
  {
    name: "Zeynep Kaya",
    role: "Cyber Valkyries / Keynote Coordinator",
    relationship: "Client",
    timeKnown: "September 2025",
    connection: "Keynote Speaker at CyberValkyrie Cybersecurity Summit",
    testimonial:
      "Adil was truly an inspiring presence in the webinar. His words of advice were like that of a brother's, sweet and heartfelt. Not only did we feel seen and heard by listening to his story, but we also got an idea of how to pave our own way. I'll be forever grateful for Adil's participation as a speaker.",
    image: "/ZeynepKaya.jpg",
  },
  {
    name: "Favour Yakubu",
    role: "President, Harmony Health Initiative",
    relationship: "Direct Manager",
    timeKnown: "September 22, 2025",
    connection: "Assistant Director of Publications, HHI",
    testimonial:
      "I am pleased to write this letter for Adil Mukhi. Over the past year, I have had the privilege of working with Adil in his role as the Assistant Director of Publications for Harmony Health Initiative, HHI. Adil consistently produces high quality health magazines and newsletters, ensuring well written and edited factual articles. His creativity and attention to detail have resulted in visually compelling materials, bringing our ideas to life while effectively communicating the message. Adil's ability to work under deadlines while maintaining standards has made him an indispensable part of our team.\n\nI wholeheartedly recommend Adil for any opportunities, as I can affirm that he is a creative, talented and reliable leader and team member. He would be an asset to any community of which he is part.",
    image: "/HHI.jpg",
  },
  {
    name: "Riya Dutta",
    role: "CSHS '26 | Founder & CEO @ Restoring Rainbows Southlake | Policy Researcher @ Perrin Institution | Advocacy & Civic Engagement Intern @ Coptic Solidarity",
    relationship: "Direct Manager",
    timeKnown: "October 6, 2024",
    connection: "Research Aid for international research collaboration",
    testimonial:
      "I have had the pleasure of directly managing Adil as a Research Aid for the international research collaboration at my youth non-profit, Restoring Rainbows Southlake. From the very beginning, Adil has demonstrated an incredible work ethic and a level of motivation that is truly commendable. He consistently approaches his tasks with a proactive mindset, often being two steps ahead.\n\nWhat sets Adil apart is not just his reliability, but also his keen attention to detail. He brings a high level of precision and thoughtfulness to every part of his research, making sure that all parts are thoroughly organized.\n\nAdil is an excellent communicator. I can always trust him to handle responsibilities, knowing that he will follow through with integrity and professionalism.\n\nI have no doubt that he will continue to excel in any future endeavors he takes on. I highly recommend him to any team or organization looking for someone who is reliable, hardworking, and dedicated.",
    image: "/RiyaDutta.jpeg",
  },
  {
    name: "Muhammad Idrees",
    role: "Results Mississauga Group Leader",
    relationship: "Direct Manager",
    timeKnown: "April 2, 2024",
    connection: "Results volunteer advocacy work",
    testimonial:
      "As a volunteer at Results, Adil is a diligent and hard-working advocate. In the short time that I've known him, he's made a significant impact through social media, LTEs and interacting with his MPs. Furthermore, he is always engaged in group discussions and is eager to learn and try. I am happy to have him as a member of the Results Mississauga group!",
    image: "/MuhammadIdrees.jpeg",
  },
  {
    name: "Richard Laurente RSSW",
    role: "Library Outreach Worker",
    relationship: "Teacher/Facilitator",
    timeKnown: "March 8, 2024",
    connection: "Youth on the Rise Workshop Series",
    testimonial:
      "I am writing this recommendation for Adil Mukhi due to his exceptional participation in DBNC's 'Youth on the Rise' 6-Week Employment and Empowerment Workshop Series. As the founder & facilitator of this program, I had the privilege of witnessing Adil’s growth, dedication, and remarkable commitment to personal and professional development. Throughout our workshop series, Adil consistently demonstrated a thirst for knowledge and a genuine eagerness to learn. His active engagement in the sessions, thoughtful contributions, and insightful questions showcased his deep understanding of the workshop topics and his ability to apply the concepts to real-world situations. Adil exhibited a remarkable level of professionalism and enthusiasm throughout the entire program. He actively sought feedback, embraced constructive criticism, and implemented suggestions to enhance his skills and abilities. His dedication to continuous self-improvement was evident in his consistent efforts to apply the knowledge gained from the workshop series to his professional endeavors.\n\nMoreover, Adil proved to be an exceptional team player and collaborator. Adil actively participated in group activities, demonstrated effective communication skills, and displayed a remarkable ability to foster a supportive and inclusive environment. His positive energy and willingness to help others made him an invaluable asset to his group of peers and to the enrichment of the program itself. Adil’s strong work ethic, passion for self-improvement, and ability to adapt to new challenges make him an ideal candidate for future opportunities.\n\nIn conclusion, I wholeheartedly recommend Adil for any endeavors he may pursue in his professional journey. Adil’s remarkable commitment to personal and professional development, combined with his strong interpersonal skills makes him an asset to any team or organization. I am confident that he will continue to thrive and achieve great success on his life journey.",
    image: "/RichardLaurente.jpeg",
  },
  {
    name: "Kishan Suhirthan",
    role: "Logistics at Innovire | Deputy Executive Director at Dr. Interested | Glenforest SS IB ’27 | Exploring Engineering",
    relationship: "Directly Reported to Me",
    timeKnown: "September 23, 2025",
    connection: "Kishan is the Deputy Executive Director at Dr. Interested",
    testimonial:
      "It has been a pleasure working alongside Adil, both in Dr. Interested and at school, to create better opportunities for youth. Through Dr. Interested, we’ve engaged over 60,000 students across 70+ countries, reached more than 600,000 people, and built a community of 900+ active members.\n\nAdil’s leadership and problem-solving skills have been key in turning challenges into opportunities, and his positive energy motivates everyone around him to aim higher. He consistently goes above and beyond in his work, setting a strong example for peers and younger students alike. I’m looking forward to continuing our collaboration and empowering even more youth together!",
    image: "/KishanSuhirthan.jpg",
  },
  {
    name: "Arghya Vyas",
    role: "Grade 11 IB1 Student at Glenforest Secondary School | Vex Robotics @31331 | Director of IT @Youth Venture International & @Dr. Interested | Design and Development @FutureMD",
    relationship: "Directly Reported to Me",
    timeKnown: "September 16, 2025",
    connection: "Arghya is the Director of Technology at Dr. Interested",
    testimonial:
      "It has been a pleasure working with Adil, and helping to create better opportunities for youth through Dr. Interested. Adil is strong at persevering with his goals, and always goes above and beyond when working. Looking forward to continuing working with him!",
    image: "/ArghyaVyas.jpg",
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
