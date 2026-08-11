"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LocationTimezone() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const xLeft = useTransform(scrollYProgress, [0, 0.45], [-80, 0]);
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
  const rotateXMobile = useTransform(scrollYProgress, [0, 0.6], [-90, 0]);

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setCurrentTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-40 flex flex-col items-center justify-center w-full min-h-screen px-8 py-24 overflow-hidden text-gray-300 border-gray-600 lg:border-t lg:px-16 bg-zinc-800 font-instrument-sans"
    >
      <motion.div style={{ opacity }} className="w-full mx-auto">
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="04"
          title="Location"
          description="Where I'm Based"
        />

        <motion.div
          style={{ y }}
          className="flex flex-col gap-16 mt-16 lg:mt-24 lg:flex-row lg:gap-20"
        >
          <motion.div style={{ x: xLeft }} className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-400">
                Based In
              </span>
              <h2 className="text-4xl font-bold lg:text-6xl">
                Malang,{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-b from-[#ff0000] to-white from-58% to-42%">
                  Indonesia
                </span>
              </h2>
              <p className="pr-8 text-lg leading-relaxed text-gray-400 lg:text-xl">
                A major educational and tech hub in East Java, combining fresh
                ideas with a cool mountain atmosphere
              </p>
              <div className="w-[50%] h-0.5 bg-linear-to-r from-gray-500 to-transparent" />
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2">
            <div
              style={{
                perspective: "1200px",
              }}
              className="flex flex-col gap-8"
            >
              <motion.div
                style={{
                  rotateX: isDekstop ? rotateX : rotateXMobile,
                  transformOrigin: "center top",
                  transformStyle: "preserve-3d",
                }}
                className="flex flex-col items-center p-8 transition-colors duration-500 border border-gray-300/10 hover:border-gray-300/20"
              >
                <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                  Local Time (GMT+7 / WIB)
                </span>
                <div className="mt-4 font-mono text-5xl font-bold text-gray-300 lg:text-6xl tabular-nums">
                  {currentTime || "--:--:--"}
                </div>
              </motion.div>

              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Timezone",
                    value: "GMT+7 — Western Indonesian Time (WIB)",
                  },
                  {
                    label: "Languages",
                    value: "Indonesian (Native), English (Professional)",
                  },
                  {
                    label: "Remote",
                    value: "Open to worldwide remote collaboration",
                  },
                ].map((item, i) => (
                  <ListContent
                    key={i}
                    item={item}
                    scrollYProgress={scrollYProgress}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ListContent({
  item,
  scrollYProgress,
  index,
}: {
  item: { label: string; value: string };
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const value = index + 1;

  const x = useTransform(
    scrollYProgress,
    [value * 0.08, value * 0.05 + 0.4],
    [120, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [value * 0.1, value * 0.05 + 0.5],
    [0, 1],
  );
  return (
    <motion.div
      style={{ x, opacity: isDekstop ? opacity : 1 }}
      className="flex flex-col gap-1 py-4 border-b border-gray-300/10"
    >
      <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
        {item.label}
      </span>
      <span className="text-base text-gray-300 lg:text-lg">{item.value}</span>
    </motion.div>
  );
}
