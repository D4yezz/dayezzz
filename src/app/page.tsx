"use client";
import Navbar from "@/components/navbar";
import Welcome from "@/components/views/welcome";
import Philosophy from "@/components/views/philosophy";
import Skills from "@/components/views/skills";
import Tech from "@/components/views/tech";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Projects from "@/components/views/projects";
import Contact from "@/components/views/contact";

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: welcomeProgress } = useScroll({
    target: welcomeRef,
    offset: ["start start", "end end"],
  });
  return (
    <section className="w-full text-zinc-800 bg-zinc-800 relative">
      <Navbar />
      <section
        ref={welcomeRef}
        className="relative h-[200vh] bg-zinc-800 overflow-hidden"
      >
        <Welcome scrollYProgress={welcomeProgress} />
        <Philosophy scrollYProgress={welcomeProgress} />
      </section>
      <Skills />
      <Tech />
      <Projects />
      <Contact />
      <section className="w-full h-screen flex items-center justify-center font-montserrat bg-linear-to-br from-gray-600 to-zinc-800 text-gray-300">
        <h1 className="font-bold text-4xl">Coming Soon...</h1>
      </section>
    </section>
  );
}
