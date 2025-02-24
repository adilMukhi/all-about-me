import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { Bangers, KirangHaerang, BubblegumSans } from 'next/font/google';

const bangers = Bangers({
  subsets: ['latin'],
  weight: ['400'],
});

const kirangHaerang = KirangHaerang({
  subsets: ['latin'],
  weight: ['400'],
});

const bubblegumSans = BubblegumSans({
  subsets: ['latin'],
  weight: ['400'],
});

export { bangers, kirangHaerang, bubblegumSans };

export default function Contact() {
  return (
    <section id="contact" className="container py-16">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ fontFamily: "Bangers, cursive" }}>Contact Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Fill out the form below to send me a message</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="Your Email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Textarea id="message" placeholder="Your Message" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Send Message</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

