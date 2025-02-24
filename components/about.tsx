import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bangers, BubblegumSans, TimesNewRoman } from 'next/font/google';

// Import fonts
const bangers = Bangers({ subsets: ['latin'], weight: ['400'] });
const bubblegumSans = BubblegumSans({ subsets: ['latin'], weight: ['400'] });
const timesNewRoman = TimesNewRoman({ subsets: ['latin'], weight: ['400'] });

export default function About() {
  return (
    <section id="about" className="container py-16" style={{ fontFamily: timesNewRoman.className }}>
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: bangers.className }}>About Me</h2>
      <div className="grid gap-12 lg:grid-cols-2">
        <Card className="bg-card shadow-md">
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>A Bit About Myself</CardTitle>
            <CardDescription>Get to know me better</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I'm a Grade 10 IB MYP student at Glenforest Secondary School who is dedicated to both academic success and 
              effective leadership. I am a curious student with a passion for improvement, knowledge and trying new things. 
              "With curiosity as my guide, I will never go wrong." Read the specifics below: 👇🏼
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I am a driven student leader, researcher, and advocate passionate about medicine and education. As the 
              President and Founder of Dr. Interested, I lead a global team to inspire future medical professionals 
              through mentorship and research. In the IB I maintain a 98% average while holding leadership roles 
              in French Club and STEM Fellowship, and actively helping in Peer Helpers. My research experience 
              includes studies on stress hormones and astrocytomas, and I serve as a Youth Advisor at the University of 
              Toronto Faculty of Kinesiology and Physical Education. I have earned Distinction in the Beaver Computing Challenge
               and am currently enrolled in UofT’s MedLinx Program, furthering my passion for healthcare and advocacy.
            </p>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
          <Image src="/profile-pic.jpg" alt="Your Name" width={600} height={400} className="rounded-full" />
        </div>
      </div>
    </section>
  )
}

