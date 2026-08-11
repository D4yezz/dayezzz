"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
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
];

export default function Availability() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  const rotateY1 = useTransform(scrollYProgress, [0, 0.5], [90, 0]);
  const rotateY2 = useTransform(scrollYProgress, [0, 0.5], [-90, 0]);

  const rotateX1 = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const yDesc = useTransform(scrollYProgress, [0, 0.3], [-150, 0]);

  return (
    <section
      ref={ref}
      className="relative z-30 flex flex-col items-center justify-center w-full min-h-screen px-8 py-24 overflow-hidden text-gray-300 lg:px-16 bg-zinc-800 font-instrument-sans"
    >
      <motion.div
        style={{ opacity: isDekstop ? opacity : 1 }}
        className="w-full mx-auto"
      >
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
          <div
            style={{
              perspective: "1200px",
            }}
            className="relative lg:w-1/3"
          >
            <motion.div
              style={{
                rotateY: isDekstop ? rotateY1 : 0,
                rotateX: isDekstop ? 0 : rotateX1,
                transformOrigin: isDekstop ? "left center" : "bottom center",
                transformStyle: "preserve-3d",
                opacity: isDekstop ? 1 : opacity1,
              }}
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
              <h2 className="text-6xl font-bold lg:text-[10vh] lg:leading-20 text-gray-300">
                Open for
                <br />
                <span className="text-gray-500 lg:text-[8vh] text-5xl">
                  Opportunities
                </span>
              </h2>

              <div className="w-[60%] h-0.5 bg-linear-to-r from-gray-500 to-transparent" />
            </motion.div>
          </div>

          <div
            style={{
              perspective: "1200px",
            }}
            className="lg:w-2/3"
          >
            <motion.div
              style={{
                rotateY: isDekstop ? rotateY2 : 0,
                transformOrigin: isDekstop ? "right center" : "center center",
                transformStyle: "preserve-3d",
                opacity: isDekstop ? 1 : opacity1,
              }}
              className="flex flex-col gap-10"
            >
              <motion.p
                style={{ y: isDekstop ? 0 : yDesc }}
                className="text-xl leading-relaxed text-gray-400 lg:text-2xl"
              >
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
              </motion.p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {content.map((item, i) => (
                  <ListContent
                    key={i}
                    content={item}
                    scrollYProgress={scrollYProgress}
                    i={i}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ListContent({
  content,
  scrollYProgress,
  i,
}: {
  content: { title: string; desc: string };
  i: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const value = i + 1;

  const x = useTransform(
    scrollYProgress,
    [value * 0.08, value * 0.05 + 0.4],
    [-120, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [value * 0.1, value * 0.05 + 0.4],
    [0, 1],
  );
  return (
    <motion.div
      style={{ x: isDekstop ? 0 : x, opacity: isDekstop ? 1 : opacity }}
      className="flex flex-col gap-2 p-6 border border-gray-300/10 hover:border-gray-300/20"
    >
      <span className="text-2xl font-semibold tracking-wide text-gray-300">
        {content.title}
      </span>
      <span className="leading-relaxed text-gray-500 text-md">
        {content.desc}
      </span>
    </motion.div>
  );
}
