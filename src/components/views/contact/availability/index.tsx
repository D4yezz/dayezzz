"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Availability() {
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
          title="Availability"
          description="Current Status"
        />

        <motion.div
          style={{ y }}
          className="flex flex-col gap-16 mt-16 lg:mt-24 lg:flex-row lg:gap-20"
        >
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 rounded-full bg-emerald-400"
                />
                <span className="text-sm font-semibold tracking-[0.3em] uppercase text-emerald-400">
                  Available
                </span>
              </div>

              <h2 className="text-3xl font-bold lg:text-5xl text-gray-300">
                Open for
                <br />
                <span className="text-gray-500">Opportunities</span>
              </h2>

              <div className="w-36 h-0.5 bg-linear-to-r from-gray-500 to-transparent" />
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <p className="text-xl leading-relaxed text-gray-400 lg:text-2xl">
                Currently accepting{" "}
                <span className="font-semibold text-gray-300">
                  freelance projects
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-300">
                  collaboration opportunities
                </span>
                . I&apos;m passionate about building meaningful digital
                experiences.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Freelance & Contract",
                    desc: "Short to mid-term web development projects with clear deliverables.",
                  },
                  {
                    title: "Collaboration",
                    desc: "Open source or team projects where I can contribute and learn.",
                  },
                  {
                    title: "Full-Time Developer Role",
                    desc: "Ready to join a team and contribute across frontend, backend, and testing to deliver reliable and scalable applications.",
                  },
                  {
                    title: "Response Time",
                    desc: "Usually within 24 hours. I value clear and prompt communication.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2 p-6 border border-gray-300/10 hover:border-gray-300/20 transition-colors duration-500"
                  >
                    <span className="text-sm font-semibold tracking-wide text-gray-300">
                      {item.title}
                    </span>
                    <span className="text-sm leading-relaxed text-gray-500">
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
