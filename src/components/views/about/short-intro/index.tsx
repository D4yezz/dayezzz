"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import { projects } from "@/utils/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ShortIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  const yearsLearning = new Date().getFullYear() - 2024;

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-8 py-24 overflow-hidden text-gray-300 lg:px-16 bg-zinc-800 font-instrument-sans"
    >
      <motion.div style={{ opacity }} className="w-full max-w-5xl mx-auto">
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="01"
          title="Introduction"
          description="Who I Am"
        />

        <motion.div
          style={{ y }}
          className="flex flex-col gap-12 mt-16 lg:mt-24 lg:flex-row lg:gap-20"
        >
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400">
                Hello, I&apos;m
              </span>
              <h2 className="text-4xl font-bold lg:text-6xl">Dias</h2>
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
              className="flex flex-col gap-8"
            >
              <p className="text-xl leading-relaxed lg:text-2xl text-gray-400">
                A passionate{" "}
                <span className="font-semibold text-gray-300">
                  Fullstack Web Developer
                </span>{" "}
                based in Malang, Indonesia. I specialize in building modern,
                interactive web applications that blend clean code with
                purposeful design.
              </p>
              <p className="text-lg leading-relaxed text-gray-500 lg:text-xl">
                I love turning complex ideas into elegant, user-friendly digital
                experiences — from crafting pixel-perfect interfaces to
                engineering robust backend systems using React, Next.js, and
                modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-12 pt-8 mt-10 border-t border-gray-300/10 lg:gap-20"
            >
              {[
                { number: projects.length, label: "Projects" },
                { number: yearsLearning + "+", label: "Years of Experience" },
                { number: "∞", label: "Curiosity" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 font-inter">
                  <span className="text-3xl font-bold lg:text-4xl text-gray-300">
                    {stat.number}
                  </span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ width: lineWidth }}
        className="absolute bottom-0 left-0 h-px bg-linear-to-r from-transparent via-gray-300/20 to-transparent"
      />
    </section>
  );
}
