import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-teal-100 to-green-100 py-16">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h1
          className="animate-fade-in-up text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl normal-case text-hover-effect"
          style={{ fontFamily: "DynaPuff, serif", letterSpacing: "0.1em" }}
        >
          Hi, I'm Adil Mukhi!
        </h1>
        <p
          className="animate-fade-in-up max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{
            fontFamily: "'Times New Roman', Times, latin",
            animationDelay: "200ms",
          }}
        >
          I'm a passionate student and aspiring researcher with a strong interest in science, medicine, and research. I
          enjoy exploring complex topics, conducting research, and creating engaging content.
        </p>
        <div className="animate-fade-in-up flex gap-4 flex-wrap justify-center" style={{ animationDelay: "400ms" }}>
          <Button asChild className="button-hover-effect bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <a href="#contact">Contact Me!</a>
          </Button>
          <Button
            variant="secondary"
            asChild
            className="button-hover-effect bg-gradient-to-r from-teal-500 to-green-500 text-white"
          >
            <a
              href="https://drive.google.com/file/d/1pcggPR8oLREeZlc2H5wCt1O_DxVH2fQ7/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
          <Button
            variant="secondary"
            asChild
            className="button-hover-effect bg-gradient-to-r from-green-500 to-blue-500 text-white"
          >
            <a
              href="https://drive.google.com/file/d/1xIuHrE6H3Lf-Oj3S-PrXI15dIHi9XtDi/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Resume
            </a>
          </Button>
          <Button asChild className="button-hover-effect bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <a href="#about">See More!</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
