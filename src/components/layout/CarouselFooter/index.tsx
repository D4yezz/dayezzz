"use client";

import { motion } from "framer-motion";

export default function CarouselFooter({ menu }: { menu: string }) {
  const items = [...Array(10)].map((_, idx) => (
    <div className="flex items-center shrink-0" key={idx}>
      <span className="whitespace-nowrap uppercase font-medium leading-none px-[1vw]">
        {menu}
      </span>
    </div>
  ));

  return (
    <div className="h-full w-full overflow-hidden relative">
      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 26,
            ease: "linear",
          },
        }}
      >
        {items}
        {items}
      </motion.div>
    </div>
  );
}
