"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Code, Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Welcome() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [fixed, setFixed] = useState(false);
  const [allowedCursor, setAllowedCursor] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.001 && v < 0.98) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.6 && v < 1) {
      setAllowedCursor(true);
    } else {
      setAllowedCursor(false);
    }
  });

  const titleY = useTransform(scrollYProgress, [0.6, 1], [0, -200]);
  const subtitleY = useTransform(scrollYProgress, [0.6, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.9]);
  const blur = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["blur(0px)", "blur(8px)"],
  );

  return (
    <section
      ref={ref}
      className="relative z-0 top-0 flex flex-col items-center w-full h-[130vh] px-8 overflow-y-hidden overflow-x-hidden bg-gray-300 font-instrument-sans lg:px-16 md:sticky selection:bg-gray-400"
    >
      {allowedCursor && (
        <div className="w-screen h-[135vh] bg-transparent absolute inset-0 z-20"></div>
      )}
      <motion.div
        style={{
          scale,
          opacity,
          filter: blur,
        }}
        className={`${fixed ? "fixed top-0" : "absolute top-0"} ${allowedCursor ? "select-none" : "select-auto"} md:w-[80%] z-10 w-full h-full flex flex-col items-center justify-center gap-6 lg:overflow-y-hidden`}
      >
        <motion.h1
          style={{ y: titleY }}
          className="w-full text-5xl font-bold text-center text-balance md:text-7xl lg:w-220"
        >
          Hi, I&lsquo;m <Cover>Dayezzz</Cover> i turn ideas into interactive web
          experiences.
        </motion.h1>
        <motion.div style={{ y: subtitleY }}>
          <AnimatedText
            text="Web Developer building scalable web applications with React.js & Next.js, from modern user interfaces to backend logic and integrations."
            className="w-full lg:text-xl text-md font-medium text-center md:px-0 px-6 md:w-150 text-zinc-700"
          />
        </motion.div>
        <div className="flex gap-4">
          <Button
            asChild
            className="h-10 font-semibold text-gray-300 border cursor-pointer md:w-60 bg-zinc-800 hover:bg-zinc-900 border-zinc-800 hover:text-white"
          >
            <Link href={"/contact"}>
              <Send size={18} />
              Let&lsquo;s Work Together
            </Link>
          </Button>
          <Button
            asChild
            className="h-10 font-semibold bg-gray-300 border cursor-pointer md:w-60 text-zinc-800 border-zinc-800 hover:bg-zinc-800 hover:text-gray-300"
          >
            <Link href="/projects">
              <Code size={18} /> View Projects
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
