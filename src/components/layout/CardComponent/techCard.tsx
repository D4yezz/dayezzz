import { useFollowInside } from "@/hooks/useFollowInside";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TechCard({
  tech,
  index,
}: {
  tech: { name: string; category: string; url: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowInside(ref);
  const [hovered, setHovered] = useState(false);

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
      className="relative w-40 p-6 overflow-hidden border-2 group lg:w-60 cursor-none bg-zinc-900 border-gray-300/20 hover:border-gray-300"
    >
      {hovered && (
        <motion.img
          src={"/tech/" + tech.url}
          alt={tech.name}
          className="absolute z-10 w-10 h-10 pointer-events-none opacity-90"
          style={{
            x,
            y,
            translateX: "-80%",
            translateY: "-80%",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
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
