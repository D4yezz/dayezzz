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
  const divY = useTransform(scrollYProgress, [0, 0.3], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const scaleSecond = useTransform(scrollYProgress, [0, 0.7], [0.2, 1]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const card2Y = useTransform(scrollYProgress, [0.15, 0.45], [100, 0]);
  const card3Y = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const card4Y = useTransform(scrollYProgress, [0.4, 0.9], [100, 0]);

  return (
    <section ref={techRef} className="relative h-[160vh] bg-zinc-800">
      <motion.div
        style={{ opacity }}
        className="w-full min-h-screen px-8 py-34 text-gray-300 flex flex-col items-center justify-center font-instrument-sans overflow-hidden relative bg-zinc-800"
      >
        <motion.div style={{ y: divY }} className="w-full">
          <SeparatorSection
            scrollYProgress={scrollYProgress}
            number="03"
            title="Tech Stack"
            description="What I Use"
          />

          <motion.div style={{ y: card1Y, scale }} className="mt-20 mb-12">
            <h2 className="text-5xl font-bold text-center mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-center text-gray-400">
              Modern stack for building exceptional web experiences
            </p>
          </motion.div>
          <motion.div
            style={{ y: card2Y }}
            className="relative flex flex-wrap flex-initial items-center justify-center gap-6 mb-8"
          >
            {techStack.map((tech, index) => (
              <TechCard key={index} tech={tech} index={index} />
            ))}
          </motion.div>
          <motion.div
            style={{ scale: scaleSecond, opacity, y: card4Y }}
            className="w-3xl border-t-2 border-gray-300 flex items-center justify-center mx-auto py-3"
          >
            <h2>And keep learning...</h2>
          </motion.div>

          <motion.div style={{ y: card3Y }} className="text-center py-22">
            <p className="text-3xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Combining these tools to create{" "}
              <span className="text-gray-300 font-semibold">
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
