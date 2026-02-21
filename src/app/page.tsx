"use client";
import Navbar from "@/components/layout/navbar";
import Welcome from "@/components/views/home-page/welcome";
import Philosophy from "@/components/views/home-page/philosophy";
import Skills from "@/components/views/home-page/skills";
import Tech from "@/components/views/home-page/tech";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Projects from "@/components/views/home-page/projects";
import Contact from "@/components/views/contact";
import Footer from "@/components/views/footer";

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: welcomeProgress } = useScroll({
    target: welcomeRef,
    offset: ["start start", "end end"],
  });
  return (
    <main className="relative w-full text-zinc-800 bg-zinc-800">
      <Navbar />
      <section
        ref={welcomeRef}
        className="relative lg:h-[200vh] h-fit bg-zinc-800 overflow-hidden"
      >
        <Welcome scrollYProgress={welcomeProgress} />
        <Philosophy refMobile={welcomeRef} scrollYProgress={welcomeProgress} />
      </section>
      <Skills />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
