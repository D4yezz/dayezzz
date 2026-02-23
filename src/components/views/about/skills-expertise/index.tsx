"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: ["Supabase", "REST API", "Prisma", "MySQL"],
  },
  {
    category: "Tools & Others",
    skills: ["Git & GitHub", "Figma", "Vercel", "VS Code", "Playwright"],
  },
];

export default function SkillsExpertise() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-8 py-24 overflow-hidden text-gray-300 lg:px-16 bg-zinc-800 font-instrument-sans"
    >
      <motion.div style={{ opacity }} className="w-full max-w-5xl mx-auto">
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="02"
          title="Skills & Expertise"
          description="What I Work With"
        />

        <motion.div style={{ y }} className="mt-16 lg:mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-3xl font-bold text-center lg:text-4xl"
          >
            Technologies & Tools
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: catIndex * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative p-8 transition-all duration-500 border group border-gray-300/10 hover:border-gray-300/30 bg-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    0{catIndex + 1}
                  </span>
                  <div className="flex-1 h-px bg-gray-300/10 group-hover:bg-gray-300/20 transition-colors duration-500" />
                </div>
                <h3 className="mb-6 text-2xl font-bold text-gray-300">
                  {cat.category}
                </h3>

                <ul className="flex flex-col gap-3">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-gray-400 group/item hover:text-gray-300 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover/item:bg-gray-300 transition-colors duration-300" />
                      <span className="text-base lg:text-lg">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gray-300/10 group-hover:border-gray-300/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
