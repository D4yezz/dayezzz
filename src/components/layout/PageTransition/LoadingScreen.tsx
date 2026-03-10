"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getGreeting() {
  const date = new Date();
  const hour = date.getHours();

  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon";
  } else if (hour < 20) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

const loadingSteps = [
  { text: getGreeting(), min: 30 },
  { text: "As a Fullstack Web Developer", min: 60 },
  { text: "I Am Dayezzz", min: 90 },
];

// const cubicEase = [0.22, 1, 0.36, 1] as const;
const exitEase = [0.76, 0, 0.24, 1] as const;

export default function LoadingScreen() {
  const visited =
    typeof window !== "undefined" && sessionStorage.getItem("hasVisited");
  const [isLoading, setIsLoading] = useState(!visited);
  const [progress, setProgress] = useState(0);
  const activeText =
    [...loadingSteps].reverse().find((s) => progress >= s.min)?.text ??
    loadingSteps[0].text;

  useEffect(() => {
    if (visited) {
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 7300);

    return () => clearTimeout(timer);
  }, [visited]);

  if (visited) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-9999 bg-zinc-800 flex flex-col items-center justify-center overflow-hidden font-(--font-instrument-sans)"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: exitEase },
          }}
        >
          <div className="relative z-10 flex flex-col items-center gap-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeText}
                className="lg:text-[4rem] text-4xl text-center font-semibold tracking-wider font-geist-sans uppercase text-transparent bg-linear-to-r from-gray-400/90 via-gray-300 to-gray-400/90 bg-clip-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                {activeText}
              </motion.p>
            </AnimatePresence>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:mt-17 mt-20 gap-2 flex flex-col items-center justify-center">
              <div className="w-[40vw] h-1.5 bg-gray-700/50 rounded-[2px] overflow-hidden">
                <motion.div
                  className="h-full  bg-linear-to-r from-gray-400/90 via-gray-300 to-gray-400/90 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.4,
                    duration: 7.0,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <LoadingCounter onUpdate={setProgress} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LoadingCounter({ onUpdate }: { onUpdate: (v: number) => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 7000;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const value = Math.round(eased * 100);
      setCount(value);
      onUpdate(value);

      if (progress < 1) requestAnimationFrame(tick);
    };

    const delay = setTimeout(() => {
      requestAnimationFrame(tick);
    }, 400);

    return () => clearTimeout(delay);
  }, [onUpdate]);

  return (
    <span className="text-xl uppercase text-gray-300 font-medium font-montserrat tabular-nums">
      {count}%
    </span>
  );
}
