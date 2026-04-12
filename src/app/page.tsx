"use client";
import Navbar from "@/components/layout/navbar";
import Welcome from "@/components/views/home-page/welcome";
import Philosophy from "@/components/views/home-page/philosophy";
import Skills from "@/components/views/home-page/skills";
import Tech from "@/components/views/home-page/tech";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Projects from "@/components/views/home-page/projects";
import Footer from "@/components/views/footer";
import CallToAction from "@/components/views/cta";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Home() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const [showNavbar, setShowNavbar] = useState(false);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: welcomeProgress } = useScroll({
    target: welcomeRef,
    offset: ["start start", "end end"],
  });
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mainProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(mainProgress, "change", (v) => {
    // if (isDekstop) {
    if (v > 0.02 && v < 0.9) {
      setShowNavbar(true);
      console.log("welcomeProgress", showNavbar);
    } else {
      setShowNavbar(false);
      console.log("welcomeProgress", showNavbar);
    }
    // } else if (v > 0.05 && v < 0.9) {
    //   setShowNavbar(true);
    //   console.log("welcomeProgress", showNavbar);
    // } else {
    //   setShowNavbar(false);
    //   console.log("welcomeProgress", showNavbar);
    // }
  });

  return (
    <main ref={mainRef} className="relative w-full text-zinc-800 bg-zinc-800">
      {showNavbar ? (
        isDekstop ? (
          <motion.div className="text-gray-300 relative">
            <Navbar welcome={false} />
          </motion.div>
        ) : (
          <motion.div className="text-gray-300 relative">
            <Navbar welcome={false} />
          </motion.div>
        )
      ) : (
        <Navbar />
      )}
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
      <CallToAction />
      <Footer />
    </main>
  );
}
