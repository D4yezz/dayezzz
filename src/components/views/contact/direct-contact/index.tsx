"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const contactMethods = [
  {
    label: "Email",
    value: "adiasmuhsin1206@gmail.com",
    href: "mailto:adiasmuhsin1206@gmail.com",
    description: "For serious inquiries & collaborations",
  },
  {
    label: "LinkedIn",
    value: "Dias Adi",
    href: "https://www.linkedin.com/in/dias-adi-711832303",
    description: "Let's connect professionally",
  },
  {
    label: "GitHub",
    value: "D4yezz",
    href: "https://github.com/D4yezz",
    description: "Check out my open source work",
  },
  {
    label: "Instagram",
    value: "@adidiasz",
    href: "https://www.instagram.com/adidiasz",
    description: "Follow my creative journey",
  },
];

export default function DirectContact() {
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
          number="01"
          title="Contact"
          description="Reach Out Directly"
        />

        <motion.div style={{ y }} className="mt-16 lg:mt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16 text-lg text-gray-500 lg:text-xl"
          >
            No forms, no barriers — reach me directly through any of these
            channels. I typically respond within 24 hours.
          </motion.p>

          <div className="flex flex-col gap-0">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 border-b border-gray-300/10 hover:border-gray-300/30 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-6 lg:gap-10">
                  <span className="text-xs font-medium tracking-widest uppercase text-gray-500 w-20">
                    {method.label}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-semibold text-gray-300 lg:text-3xl group-hover:text-white transition-colors duration-300">
                      {method.value}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {method.description}
                    </span>
                  </div>
                </div>

                <motion.div className="flex items-center gap-2 mt-4 lg:mt-0">
                  <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Open
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-all duration-300 group-hover:text-gray-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
