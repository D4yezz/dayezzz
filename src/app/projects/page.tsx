"use client";
import Navbar from "@/components/layout/navbar";
import SeparatorLinear from "@/components/layout/SeparatorSection/separatorLinear";
import GradualBlurMemo from "@/components/ReactBites/GradualBlur";
import AllProjects from "@/components/views/all-projects";
import Contact from "@/components/views/contact";
import Footer from "@/components/views/footer";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectsPage() {
  const refPage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: refPage,
    offset: ["start start", "end end"],
  });
  const blurOpacity = useTransform(scrollYProgress, [0.93, 1], [1, 0]);

  return (
    <main ref={refPage} className="relative w-full text-gray-300 bg-zinc-800">
      <Navbar welcome={false} />
      <AllProjects />
      <SeparatorLinear />
      <Contact />
      <Footer />
      <motion.div style={{ opacity: blurOpacity }}>
        <GradualBlurMemo
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </motion.div>
    </main>
  );
}
