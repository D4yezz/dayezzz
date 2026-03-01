"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LocationTimezone() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

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
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-8 py-24 overflow-hidden text-gray-300 lg:px-16 bg-zinc-800 font-instrument-sans"
    >
      <motion.div style={{ opacity }} className="w-full max-w-5xl mx-auto">
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
          <div className="lg:w-1/2">
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
                Malang
                <span className="text-gray-500">, Indonesia</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-500 lg:text-xl">
                East Java — a city known for its cool climate, creative
                communities, and growing tech scene.
              </p>
              <div className="w-36 h-0.5 bg-linear-to-r from-gray-500 to-transparent" />
            </motion.div>
          </div>

          <div className="lg:w-1/2">
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
              <div className="p-8 border border-gray-300/10 hover:border-gray-300/20 transition-colors duration-500">
                <span className="text-xs font-medium tracking-widest uppercase text-gray-500">
                  Local Time (GMT+7 / WIB)
                </span>
                <div className="mt-4 font-mono text-5xl font-bold text-gray-300 lg:text-6xl tabular-nums">
                  {currentTime || "--:--:--"}
                </div>
              </div>

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
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 py-4 border-b border-gray-300/10"
                  >
                    <span className="text-xs font-medium tracking-widest uppercase text-gray-500">
                      {item.label}
                    </span>
                    <span className="text-base text-gray-300 lg:text-lg">
                      {item.value}
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
