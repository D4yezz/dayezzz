"use client";
import Navbar from "@/components/layout/navbar";
import Welcome from "@/components/views/home-page/welcome";
import Philosophy from "@/components/views/home-page/philosophy";
import Skills from "@/components/views/home-page/skills";
import Tech from "@/components/views/home-page/tech";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Projects from "@/components/views/home-page/projects";
import Footer from "@/components/views/footer";
import CallToAction from "@/components/views/cta";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Home() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const [showNavbar, setShowNavbar] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(mainProgress, "change", (v) => {
    if (isDekstop) {
      if (v > 0.07 && v < 0.9) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    } else {
      if (v > 0.05 && v < 0.93) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }
  });

  return (
    <main ref={mainRef} className="relative w-full text-zinc-800 bg-zinc-800">
      {showNavbar ? (
        <Navbar welcome={false} mainProgress={mainProgress} />
      ) : (
        <Navbar mainProgress={mainProgress} />
      )}
      <Welcome />
      <Philosophy />
      <Skills />
      <Tech />
      <Projects />
      <CallToAction />
      <Footer />
    </main>
  );
}
