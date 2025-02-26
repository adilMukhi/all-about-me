"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-teal-100 to-green-100 py-16">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl normal-case text-hover-effect"
          style={{ fontFamily: "DynaPuff, serif", letterSpacing: "0.1em" }}
        >
          Hi, I'm Adil Mukhi!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ fontFamily: "'Times New Roman', Times, latin" }}
        >
          I'm a passionate student and aspiring researcher with a strong interest in science, medicine, and research. I
          enjoy exploring complex topics, conducting research, and creating engaging content.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex gap-4 flex-wrap justify-center"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
