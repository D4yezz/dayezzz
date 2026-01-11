"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import ScrollVelocity from "@/components/ReactBites/ScrollVelocity";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    title: "Attention to Detail",
    description:
      "Refining spacing, motion, and layout to deliver polished user experiences.",
  },
  {
    title: "Modern UI Design",
    description: "Implementing clean, reusable components with modern design.",
  },
  {
    title: "Fullstack Web Apps",
    description:
      "Handling frontend, backend logic, and integrations with React & NextJS.",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.7], [120, -120]);

  const card2Y = useTransform(scrollYProgress, [0.15, 0.45], [100, 0]);

  return (
    <section ref={ref} className="relative h-[430vh] bg-zinc-800">
      <motion.section
        style={{ y, opacity }}
        className="w-full h-fit top-0 sticky px-8 py-24 text-gray-300 flex flex-col items-center justify-center font-instrument-sans overflow-hidden bg-zinc-800"
      >
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="02"
          title="Skills & Expertise"
          description="What I Do"
        />
        <div className="w-full h-fit my-8">
          <ScrollVelocity
            scrollerClassName="text-[10rem]"
            texts={["frontend developer", "frontend developer"]}
            velocity={70}
            className="custom-scroll-text uppercase font-instrument-sans"
          />
        </div>

        <div className="w-full border-b-2 border-gray-300" />

        <div className="flex flex-col items-center justify-center w-full">
          <p className="mt-20 mb-12 text-3xl text-center">
            Building modern interfaces with <br />
            attention to detail and performance.
          </p>

          <motion.div
            style={{ y: card2Y }}
            className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-20"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gray-300 border-2 border-gray-300 p-8 transition-all duration-500 hover:bg-zinc-800 hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-400 group-hover:text-gray-300 opacity-20 transition-all duration-500">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 text-zinc-800 group-hover:text-gray-300 transition-colors duration-500">
                    {skill.title}
                  </h3>
                  <p className="text-lg text-zinc-700 group-hover:text-gray-400 transition-colors duration-500 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-1 bg-zinc-800 group-hover:bg-gray-300 group-hover:w-24 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
