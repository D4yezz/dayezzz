"use client";

import { motion, Variants } from "framer-motion";

type Props = {
  text: string;
};

const container = {
  rest: {},
  hover: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const letter: Variants = {
  rest: { y: "0%" },
  hover: {
    y: "-100%",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TextHover({ text }: Props) {
  return (
    <motion.span
      className="relative flex items-center justify-center overflow-hidden w-full h-full"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={container}
    >
      <span className="flex">
        {text.split("").map((char, i) => (
          <span key={i} className="relative flex ">
            <motion.span variants={letter} className="flex">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </span>

      <span className="absolute top-full flex">
        {text.split("").map((char, i) => (
          <span key={i} className="relative flex ">
            <motion.span variants={letter} className="flex">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.span>
  );
}
