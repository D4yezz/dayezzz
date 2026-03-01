"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { CodeXml, Eye, MessageCircleMore } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    title: "Clean & Modern Code",
    description:
      "I write maintainable, well-structured code using the latest technologies. Every line has a purpose — no bloat, no shortcuts.",
    icon: <CodeXml />,
  },
  {
    title: "Detail-Oriented Design",
    description:
      "From pixel-perfect layouts to smooth micro-animations, I obsess over the little things that elevate a good product into a great one.",
    icon: <Eye />,
  },
  {
    title: "Reliable & Communicative",
    description:
      "I believe great work comes from great communication. Expect transparent updates, honest timelines, and a collaborative mindset.",
    icon: <MessageCircleMore />,
  },
];

export default function WhyWorkWithMe() {
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
          number="03"
          title="Why Work With Me?"
          description="What Sets Me Apart"
        />

        <motion.div style={{ y }} className="mt-16 lg:mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16 text-3xl font-bold lg:text-4xl"
          >
            I bring more than just code,{" "}
            <span className="text-gray-500">I bring commitment to craft.</span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative p-8 transition-all duration-500 border group border-gray-300/10 hover:border-gray-300/30 bg-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    0{index + 1}
                  </span>
                  <div className="flex-1 h-px bg-gray-300/10 group-hover:bg-gray-300/20 transition-colors duration-500" />
                </div>

                <div className="mb-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-300">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {item.description}
                </p>

                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gray-300/10 group-hover:border-gray-300/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
