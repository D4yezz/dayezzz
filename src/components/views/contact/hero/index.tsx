"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-zinc-800 font-instrument-sans"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: orb1Y }}
          className="absolute -top-20 -right-20 w-125 h-125 rounded-full opacity-[0.04]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.04 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="w-full h-full rounded-full bg-linear-to-br from-gray-300 via-gray-400 to-transparent" />
        </motion.div>

        <motion.div
          style={{ y: orb2Y }}
          className="absolute -bottom-32 -left-32 w-100 h-100 rounded-full opacity-[0.03]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
        >
          <div className="w-full h-full rounded-full bg-linear-to-tr from-gray-300 via-gray-500 to-transparent" />
        </motion.div>

        <motion.div
          style={{ y: orb3Y }}
          className="absolute w-62.5 h-62.5 top-1/3 left-1/4 rounded-full opacity-[0.025]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.025 }}
          transition={{ duration: 3, delay: 0.6, ease: "easeOut" }}
        >
          <div className="w-full h-full rounded-full bg-linear-to-b from-gray-200 to-transparent" />
        </motion.div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 w-full h-px bg-gray-300"
            style={{
              top: `${20 + i * 15}%`,
              opacity: 0.03 + i * 0.005,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.8 + i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        <motion.div
          className="absolute left-1/2 top-0 w-px h-full bg-linear-to-b from-transparent via-gray-300/10 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 flex flex-col items-center justify-center gap-8 px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-px bg-gray-300/40" />
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-gray-400">
            Get In Touch
          </span>
          <div className="w-12 h-px bg-gray-300/40" />
        </motion.div>

        <motion.h1
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-bold text-center text-gray-300 md:text-7xl lg:text-8xl"
        >
          Let&apos;s
          <br />
          <span className="text-gray-500">Connect</span>
        </motion.h1>

        <motion.p
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-lg text-center text-gray-500 md:text-xl"
        >
          Have a project in mind or just want to say hello?
          <br />
          I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute flex flex-col items-center gap-2 -bottom-32"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-linear-to-b from-gray-400 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
