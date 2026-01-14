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
      className="group w-60 cursor-none relative overflow-hidden bg-zinc-900 border-2 border-gray-300/20 p-6 hover:border-gray-300"
    >
      {hovered && (
        <motion.img
          src={"/tech/" + tech.url}
          alt={tech.name}
          className="pointer-events-none absolute w-10 h-10 z-10 opacity-90"
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

      <div className="absolute top-2 right-2 text-xs font-mono text-gray-500 z-20">
        {tech.category}
      </div>

      <div className="flex items-center justify-center h-24 z-20 relative">
        <h3 className="text-2xl font-bold text-gray-300 text-center">
          {tech.name}
        </h3>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-300 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
