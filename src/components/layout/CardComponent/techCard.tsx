import { useFollowInside } from "@/hooks/useFollowInside";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function TechCard({
  tech,
  index,
  techLength,
}: {
  tech: { name: string; category: string; url: string };
  index: number;
  techLength: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowInside(ref);
  const [hovered, setHovered] = useState(false);
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const styleCol = () => {
    if (isDekstop) {
      if (index === techLength - 2) {
        return "col-span-2";
      }
    } else {
      if (index === techLength - 1) {
        return "col-span-2";
      }
    }
  };

  return (
    <motion.div
      data-hide-cursor
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -6 }}
      className={`relative w-full mx-auto p-6 overflow-hidden border-2 group cursor-none bg-zinc-900 border-gray-300/20 hover:border-gray-300 duration-500 ease-in-out ${styleCol()}`}
    >
      {hovered && (
        <motion.img
          src={"/tech/" + tech.url}
          alt={tech.name}
          className="absolute z-10 pointer-events-none w-11 h-11 opacity-90"
          style={{
            x,
            y,
            translateX: "-120%",
            translateY: "-120%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.1,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="absolute z-20 font-mono text-xs text-gray-500 top-2 right-2">
        {tech.category}
      </div>

      <div className="relative z-20 flex items-center justify-center h-24">
        <h3 className="text-xl font-bold text-center text-gray-300 lg:text-2xl">
          {tech.name}
        </h3>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 bg-gray-300 group-hover:w-full" />
    </motion.div>
  );
}
