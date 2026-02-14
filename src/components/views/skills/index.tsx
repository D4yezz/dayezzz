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
    <section ref={ref} className="relative lg:h-[430vh] h-[200vh] bg-zinc-800">
      <motion.section
        style={{ y, opacity }}
        className="sticky top-0 flex flex-col items-center justify-center w-full px-8 py-24 overflow-hidden text-gray-300 h-fit font-instrument-sans bg-zinc-800"
      >
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="02"
          title="Skills & Expertise"
          description="What I Do"
        />
        <div className="relative w-full my-4 overflow-hidden lg:my-8 h-fit">
          <div className="absolute top-0 left-0 z-10 w-10 h-full md:w-40 bg-linear-to-r from-zinc-800 to-transparent " />
          <ScrollVelocity
            scrollerClassName="lg:text-[10rem] text-[4rem] lg:leading-34 leading-16"
            texts={["fullstack developer", "fullstack developer"]}
            velocity={70}
            className="uppercase custom-scroll-text font-instrument-sans"
          />
          <div className="absolute top-0 right-0 z-10 w-10 h-full md:w-40 bg-linear-to-l from-zinc-800 to-transparent " />
        </div>

        <div className="w-full border-b-2 border-gray-300" />

        <div className="flex flex-col items-center justify-center w-full">
          <p className="my-10 text-2xl text-center lg:mt-20 lg:mb-12 lg:text-3xl">
            Building modern interfaces with <br />
            attention to detail and performance.
          </p>

          <motion.div
            style={{ y: card2Y }}
            className="grid w-full grid-cols-1 gap-6 pb-20 mx-auto max-w-7xl md:grid-cols-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-8 transition-all duration-500 bg-gray-300 border-2 border-gray-300 group hover:bg-zinc-800 hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute text-6xl font-bold text-gray-400 transition-all duration-500 select-none top-4 right-4 group-hover:text-gray-300 opacity-20">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="mb-4 text-3xl font-bold transition-colors duration-500 text-zinc-800 group-hover:text-gray-300">
                    {skill.title}
                  </h3>
                  <p className="text-lg leading-relaxed transition-colors duration-500 text-zinc-700 group-hover:text-gray-400">
                    {skill.description}
                  </p>
                </div>
                <div className="absolute w-12 h-1 transition-all duration-500 bottom-4 left-4 bg-zinc-800 group-hover:bg-gray-300 group-hover:w-24" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
