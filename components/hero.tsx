import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-primary/10 py-16">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h1
          className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl normal-case text-hover-effect"
          style={{ fontFamily: "DynaPuff, serif", letterSpacing: "0.1em" }}
        >
          Hi, I'm Adil Mukhi!
        </h1>
        <p
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ fontFamily: "'Times New Roman', Times, latin" }}
        >
          I'm a passionate student and aspiring researcher with a strong interest in science, medicine, and research. I
          enjoy exploring complex topics, conducting research, and creating engaging content.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button asChild className="button-hover-effect">
            <a href="#contact">Contact Me!</a>
          </Button>
          <Button variant="secondary" asChild className="button-hover-effect">
            <a
              href="https://drive.google.com/file/d/1pcggPR8oLREeZlc2H5wCt1O_DxVH2fQ7/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
          <Button variant="secondary" asChild className="button-hover-effect">
            <a
              href="https://drive.google.com/file/d/1xIuHrE6H3Lf-Oj3S-PrXI15dIHi9XtDi/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Resume
            </a>
          </Button>
          <Button asChild className="button-hover-effect">
            <a href="#about">See More!</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
