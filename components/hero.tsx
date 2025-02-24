import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-primary/10 py-16">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm Your Name
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I'm a passionate developer specializing in web development and creating beautiful, functional applications.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

