"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import AnimatedText from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { motion, MotionValue, useTransform } from "framer-motion";
import { GlareCard } from "@/components/ui/glare-card";
import TiltCard from "@/components/ui/tiltCard";
import { Code, Send } from "lucide-react";

export default function Welcome({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  // const { open } = useMenuStore();
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
    <section className="bg-gray-300 w-full h-screen font-instrument-sans px-16 flex flex-col items-center overflow-y-hidden sticky top-0">
      <motion.div
        style={{ scale, opacity, filter: blur }}
        className="w-[80%] h-full flex flex-col items-center justify-center gap-6 overflow-y-hidden"
      >
        <motion.h1
          style={{ y: titleY }}
          className="text-7xl font-bold text-center w-220"
        >
          Hi, I&lsquo;m <Cover>Dayezzz</Cover> i turn ideas into interactive
          web experiences.
        </motion.h1>
        <motion.div style={{ y: subtitleY }}>
          <AnimatedText
            text="Web Developer specializing in ReactJS & NextJS, crafting modern UI with smooth animations and clean architecture."
            className="font-medium text-xl text-balance w-180 text-center text-zinc-700"
          />
        </motion.div>
        <div className="flex gap-4">
          <Button className="w-60 h-10 bg-zinc-800 hover:bg-zinc-900 text-gray-300 font-semibold border border-zinc-800 hover:text-white cursor-pointer">
            <Send size={18} />
            Let&lsquo;s Work Together
          </Button>
          <Button className="w-60 h-10 bg-gray-300 text-zinc-800 font-semibold border border-zinc-800 hover:bg-zinc-800 hover:text-gray-300 cursor-pointer">
            <Code size={18} /> View Projects
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
