"use client";

import { useLenis } from "@/components/providers/LenisProvider";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  images: string[];
};

export default function ImageProject({ project }: { project: Project }) {
  const [open, setOpen] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (open) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "auto";
    }
  }, [open, lenis]);
  return (
    <>
      <div className="lg:w-[60%] w-full lg:px-20 px-6 lg:py-26 py-14 lg:order-1 order-3 relative">
        <div className="lg:space-y-16 space-y-8">
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative"
              onClick={() => setOpen(img)}
            >
              <div className="relative overflow-hidden lg:rounded-lg rounded-xl border border-zinc-700/50">
                <div className="relative w-full h-full aspect-video inset-shadow-2xs">
                  <Image
                    src={img}
                    alt={`${project.name} - Screenshot ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-80 group-hover:grayscale-0"
                    priority={index === 0}
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 via-transparent to-zinc-900/20 pointer-events-none" />

                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-zinc-500/30" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-zinc-500/30" />
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="w-8 h-px bg-zinc-600/60" />
                <span className="text-[0.65rem] font-mono tracking-[0.25em] text-zinc-500 select-none">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(project.images.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}

          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="w-30 h-[1.5px] bg-linear-to-l from-zinc-500 to-transparent" />
            <span className="text-[0.8rem] font-mono tracking-[0.3em] uppercase text-gray-400">
              End of gallery
            </span>
            <div className="w-30 h-[1.5px] bg-linear-to-r from-zinc-500 to-transparent" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
              onClick={() => setOpen(null)}
            />
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40, scale: 0.7 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, y: 40, scale: 0.7 }}
              transition={{ ease: easeInOut, duration: 0.4 }}
              onClick={() => setOpen(null)}
              className="fixed inset-0 z-50  w-full h-full flex items-center justify-center mx-auto"
            >
              <div className="absolute lg:visible invisible top-14 right-14">
                <button
                  onClick={() => setOpen(null)}
                  className="text-white cursor-pointer lg:rounded-lg rounded-xl p-2 hover:bg-gray-400/20"
                >
                  <X />
                </button>
              </div>
              <div className="rounded-lg w-fit lg:h-fit h-fit max-w-[90%] overflow-hidden">
                <Image
                  src={open}
                  alt={`${project.name} - Fullscreen`}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
