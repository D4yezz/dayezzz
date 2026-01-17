"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Code, Send } from "lucide-react";

export default function Welcome({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(8px)"]
  );
  return (
    <section className="relative top-0 flex flex-col items-center w-full h-screen px-8 overflow-y-hidden bg-gray-300 font-instrument-sans lg:px-16 md:sticky">
      <motion.div
        style={{ scale, opacity, filter: blur }}
        className="md:w-[80%] w-full h-full flex flex-col items-center justify-center gap-6 lg:overflow-y-hidden"
      >
        <motion.h1
          style={{ y: titleY }}
          className="w-full text-5xl font-bold text-center text-balance md:text-7xl lg:w-220"
        >
          Hi, I&lsquo;m <Cover>Dayezzz</Cover> i turn ideas into interactive
          web experiences.
        </motion.h1>
        <motion.div style={{ y: subtitleY }}>
          <AnimatedText
            text="Web Developer specializing in ReactJS & NextJS, crafting modern UI with smooth animations and clean architecture."
            className="w-full text-xl font-medium text-center text-balance md:w-180 text-zinc-700"
          />
        </motion.div>
        <div className="flex gap-4">
          <Button className="h-10 font-semibold text-gray-300 border cursor-pointer md:w-60 bg-zinc-800 hover:bg-zinc-900 border-zinc-800 hover:text-white">
            <Send size={18} />
            Let&lsquo;s Work Together
          </Button>
          <Button className="h-10 font-semibold bg-gray-300 border cursor-pointer md:w-60 text-zinc-800 border-zinc-800 hover:bg-zinc-800 hover:text-gray-300">
            <Code size={18} /> View Projects
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
