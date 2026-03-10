"use client";

import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-yellow-300 z-50"
      initial={{ y: "100%" }}
      animate={{ y: "100%" }}
      exit={{ y: "0%" }}
      transition={{
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
    />
  );
}
