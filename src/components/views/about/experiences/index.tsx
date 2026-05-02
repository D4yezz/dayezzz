"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import { useFollowInside } from "@/hooks/useFollowInside";
import { experiences } from "@/utils/experiences";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [hover, setHover] = useState<number | null>(null);
  const refThumb = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowInside(refThumb);

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const elementY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  const download = (href: string) => {
    const link = document.createElement("a");
    link.download = href.replace(/^.*[\\\/]/, "");
    link.href = href;
    link.click();
  };

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-8 py-24 overflow-hidden text-gray-300 lg:px-16 bg-zinc-800 font-instrument-sans"
    >
      <motion.div style={{ opacity }} className="w-full max-w-5xl mx-auto">
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="03"
          title="Experience"
          description="What I've Been Through"
        />

        <motion.div style={{ y: elementY }} className="mt-16 lg:mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-center lg:text-4xl"
          >
            Journey & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16 text-lg text-center text-gray-500"
          >
            Professional experience and achievements that have shaped my journey
            as a programmer.
          </motion.p>

          <div ref={refThumb} className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div key={index}>
                <motion.div
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  onClick={() => {
                    if (exp.file) {
                      download(exp.file);
                    }
                  }}
                  className="group relative flex flex-col p-6 lg:p-8 border border-gray-300/10 hover:border-gray-300/25 bg-zinc-800/50 transition-all duration-500 hover:bg-zinc-700/20"
                >
                  <div className="absolute text-6xl font-bold select-none top-4 right-6 text-gray-300/3 group-hover:text-gray-300/[0.07] transition-all duration-500">
                    0{index + 1}
                  </div>

                  <div className="flex flex-col gap-3 relative text-left z-10">
                    <div className="flex flex-col md:flex-row md:items-center text-left md:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-300 lg:text-2xl group-hover:text-white transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-base text-gray-500 mt-1">
                          {exp.organization}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider border border-gray-300/20 text-gray-400">
                          {exp.type}
                        </span>
                        <span className="px-3 py-1 text-sm font-medium border border-gray-300/20 text-gray-400">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-500 mt-2 max-w-3xl">
                      {exp.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gray-300/40 group-hover:w-full transition-all duration-700" />
                </motion.div>
                {exp.thumbnail && hover === index && (
                  <motion.div
                    style={{
                      x,
                      y,
                      translateX: "-80%",
                      translateY: "-400%",
                    }}
                    className="w-50 h-fit bg-white p-1 rounded-lg flex flex-col justify-center items-center gap-1 overflow-hidden absolute z-20 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <Image
                      src={exp.thumbnail}
                      alt={exp.title}
                      width={400}
                      height={400}
                      className="w-full h-full rounded-lg"
                    />
                    <span className="text-gray-500 text-center w-full font-medium text-sm">
                      Download
                    </span>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
