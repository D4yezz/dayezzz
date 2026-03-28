"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import TechCard from "@/components/layout/CardComponent/techCard";
import { techStack } from "@/utils/techStack";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Tech() {
  const techRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: techRef,
    offset: ["start end", "end start"],
  });
  const divY = useTransform(scrollYProgress, [0, 0.1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const scaleSecond = useTransform(scrollYProgress, [0, 0.7], [0.2, 1]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const card2Y = useTransform(scrollYProgress, [0.15, 0.45], [100, 0]);
  const card3Y = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const card4Y = useTransform(scrollYProgress, [0.4, 0.9], [100, 0]);

  return (
    <section ref={techRef} className="relative lg:h-[200vh] h-fit bg-zinc-800">
      <motion.div
        style={{ opacity }}
        className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 overflow-hidden text-gray-300 lg:px-8 lg:py-34 font-instrument-sans bg-zinc-800"
      >
        <motion.div style={{ y: divY }} className="w-full">
          <SeparatorSection
            scrollYProgress={scrollYProgress}
            number="03"
            title="Tech Stack"
            description="What I Use"
          />

          <motion.div
            style={{ y: card1Y, scale }}
            className="mt-10 mb-12 lg:mt-20"
          >
            <h2 className="mb-4 text-4xl font-bold text-center lg:text-5xl">
              Tools & Technologies
            </h2>
            <p className="text-xl text-center text-gray-400">
              Modern stack for building exceptional web experiences
            </p>
          </motion.div>
          <motion.div
            style={{ y: card2Y }}
            className="relative flex flex-wrap items-center justify-center flex-initial gap-2 lg:gap-6 lg:mb-8"
          >
            {techStack.map((tech, index) => (
              <TechCard key={index} tech={tech} index={index} />
            ))}
          </motion.div>
          <motion.div
            style={{ scale: scaleSecond, opacity, y: card4Y }}
            className="flex items-center justify-center w-full py-3 mx-auto border-t-2 border-gray-300 lg:w-3xl"
          >
            <h2>And keep learning...</h2>
          </motion.div>

          <motion.div
            style={{ y: card3Y }}
            className="px-8 py-16 text-center lg:py-22 lg:px-0"
          >
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-400 lg:text-3xl">
              Combining these tools to create{" "}
              <span className="font-semibold text-gray-300">
                performant, beautiful, and interactive
              </span>{" "}
              web applications that users love.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
