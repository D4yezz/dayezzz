"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { CodeXml, Eye, MessageCircleMore } from "lucide-react";
import { JSX, useRef, useState } from "react";

const values = [
  {
    title: "Clean & Modern Code",
    description:
      "I write maintainable, well-structured code using the latest technologies. Every line has a purpose — no bloat, no shortcuts.",
    icon: <CodeXml size={30} />,
  },
  {
    title: "Detail-Oriented Design",
    description:
      "From pixel-perfect layouts to smooth micro-animations, I obsess over the little things that elevate a good product into a great one.",
    icon: <Eye size={30} />,
  },
  {
    title: "Reliable & Communicative",
    description:
      "I believe great work comes from great communication. Expect transparent updates, honest timelines, and a collaborative mindset.",
    icon: <MessageCircleMore size={30} />,
  },
];

export default function WhyWorkWithMe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [fixed, setFixed] = useState(false);
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.001 && v < 0.98) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const divY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [350, 0, 0, -350],
  );

  const xSpan1 = useTransform(scrollYProgress, [0, 0.7], [-100, 0]);
  const xSpan2 = useTransform(scrollYProgress, [0, 0.7], [100, 0]);

  const xSpan1Mobile = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const xSpan2Mobile = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const opacityH2 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full min-h-screen lg:h-[300vh] h-fit px-0 py-24 overflow-hidden text-gray-300 lg:px-16 bg-zinc-800 font-instrument-sans z-20"
    >
      <motion.div
        style={{ y: isDekstop ? divY : 0, opacity }}
        className={`${fixed ? "lg:fixed relative top-0" : "lg:absolute relative top-0"} w-full mx-auto lg:px-16 px-8 lg:py-24 py-8`}
      >
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="03"
          title="Why Work With Me?"
          description="What Sets Me Apart"
        />

        <div className="flex flex-col items-center gap-8 mt-16 lg:gap-16">
          <motion.h2
            style={{ opacity: opacityH2 }}
            className="text-3xl font-bold lg:text-[3.5rem] flex flex-col w-full text-center lg:gap-4 gap-2"
          >
            <motion.span
              style={{ x: isDekstop ? xSpan1 : xSpan1Mobile }}
              className="lg:mr-[20%] mr-0"
            >
              I bring more than just code,
            </motion.span>{" "}
            <motion.span
              style={{ x: isDekstop ? xSpan2 : xSpan2Mobile }}
              className="text-gray-500 lg:ml-[20%] ml-0 lg:text-[3.5rem] text-2xl"
            >
              I bring commitment to craft.
            </motion.span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((item, index) => (
              <ValueList
                key={index}
                item={item}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ValueList({
  item,
  index,
  scrollYProgress,
}: {
  item: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const value = index + 1;

  const y = useTransform(
    scrollYProgress,
    [value * 0.15, value * 0.05 + 0.65],
    [180, 0],
  );
  const x = useTransform(
    scrollYProgress,
    [value * 0.05, value * 0.05 + 0.45],
    [-120, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [value * 0.1, value * 0.05 + 0.5],
    [0, 1],
  );
  const opacityMobile = useTransform(
    scrollYProgress,
    [value * 0.1, value * 0.05 + 0.4],
    [0, 1],
  );
  return (
    <motion.div
      style={{
        y: isDekstop ? y : 0,
        x: isDekstop ? 0 : x,
        opacity: isDekstop ? opacity : opacityMobile,
      }}
      className="relative p-6 border group border-gray-300/10 hover:border-gray-300/30 bg-zinc-800/50"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
          0{index + 1}
        </span>
        <div className="flex-1 h-px transition-colors duration-500 bg-gray-300/10 group-hover:bg-gray-300/20" />
      </div>

      <div className="mb-4 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
        {item.icon}
      </div>

      <h3 className="mb-4 text-xl font-bold text-gray-300 lg:text-2xl">
        {item.title}
      </h3>
      <p className="pr-2 text-sm leading-relaxed text-gray-500 transition-colors duration-300 lg:text-md lg:pr-6 group-hover:text-gray-400">
        {item.description}
      </p>

      <div className="absolute bottom-0 right-0 w-8 h-8 transition-colors duration-500 border-b border-r border-gray-300/10 group-hover:border-gray-300/30" />
    </motion.div>
  );
}
