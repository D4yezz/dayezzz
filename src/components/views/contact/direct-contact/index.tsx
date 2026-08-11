"use client";

import SeparatorSection from "@/components/layout/SeparatorSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
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
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const opacityH2 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const xH2 = useTransform(scrollYProgress, [0, 0.5], [-120, 0]);
  const xSpan = useTransform(scrollYProgress, [0, 0.5], [-80, 0]);
  const xDesc = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);

  const xMobileH2 = useTransform(scrollYProgress, [0, 0.3], [-80, 0]);
  const xMobileSpan = useTransform(scrollYProgress, [0, 0.3], [-120, 0]);
  const xMobileDesc = useTransform(scrollYProgress, [0, 0.3], [-120, 0]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-8 py-24 overflow-hidden text-gray-300 lg:px-16 bg-zinc-800 font-instrument-sans"
    >
      <motion.div style={{ opacity }} className="w-full mx-auto">
        <SeparatorSection
          scrollYProgress={scrollYProgress}
          number="01"
          title="Contact"
          description="Reach Out Directly"
        />

        <motion.div className="flex flex-col items-center gap-8 mt-10 lg:mt-24 lg:flex-row lg:justify-between lg:gap-0">
          <motion.div
            style={{ opacity: opacityH2 }}
            className="flex flex-col lg:gap-12 gap-6 lg:w-[50%] w-full "
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ x: isDekstop ? xH2 : xMobileH2 }}
              className="text-7xl lg:w-[80%] w-full text-gray-300 font-bold uppercase lg:text-[9.5rem] lg:leading-30 lg:tracking-[-0.3rem] flex flex-col"
            >
              Get in
              <motion.span
                style={{ x: isDekstop ? xSpan : xMobileSpan }}
                className="ml-0 lg:ml-24"
              >
                Touch
              </motion.span>
            </motion.h2>
            <motion.div
              style={{
                x: isDekstop ? xDesc : xMobileDesc,
              }}
              className="flex gap-6 pl-0 lg:pl-12"
            >
              {isDekstop && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="text-gray-400 lg:size-14"
                  fill="currentColor"
                >
                  <g color="currentColor">
                    <path d="M221.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H196.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,181.66Z"></path>
                  </g>
                </svg>
              )}
              <p className="lg:text-2xl text-lg lg:max-w-[80%] max-w-[90%] text-gray-400">
                Get in touch to learn more about our automation platform and how
                we can help you achieve your business goals.
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col lg:w-[50%] w-full">
            {contactMethods.map((method, index) => (
              <ContactMethods
                key={method.label}
                item={method}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ContactMethods({
  item,
  index,
  scrollYProgress,
}: {
  item: {
    label: string;
    value: string;
    href: string;
    description: string;
  };
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
    [value * 0.1, value * 0.05 + 0.4],
    [0, 1],
  );

  return (
    <motion.a
      key={item.label}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x, opacity }}
      className="flex justify-between py-4 border-b cursor-pointer lg:py-8 group lg:items-center border-gray-300/10 hover:border-gray-300/30"
    >
      <div className="flex items-center gap-6 lg:gap-10">
        {isDekstop && (
          <span className="w-20 text-xs font-medium tracking-widest text-gray-500 uppercase">
            {item.label}
          </span>
        )}
        <div className="flex flex-col gap-1">
          <span className="text-xl font-semibold text-gray-300 transition-colors duration-300 lg:text-3xl group-hover:text-white">
            {item.value}
          </span>
          <span className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
            {item.description}
          </span>
        </div>
      </div>

      <motion.div className="flex items-center gap-2 mt-4 lg:mt-0">
        <span className="text-sm text-gray-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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
  );
}
