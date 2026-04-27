"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { IProject } from "@/types/global";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TextProject({
  project,
  parentRef,
  mainProgress,
}: {
  project: IProject;
  parentRef: React.RefObject<HTMLDivElement>;
  mainProgress: MotionValue<number>;
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [parentHeight, setParentHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    if (!parentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setParentHeight(entry.contentRect.height);
      }
    });

    observer.observe(parentRef.current);

    return () => observer.disconnect();
  }, [parentRef]);

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const elementY = useTransform(scrollYProgress, [0, 0.6], [40, 0]);
  const elementY2 = useTransform(mainProgress, [0, 1], [0, parentHeight * 0.5]);

  return (
    <motion.div
      ref={ref}
      style={{ y: isDesktop ? elementY2 : 0 }}
      className={`lg:w-[40%] w-full lg:h-fit lg:min-h-1/3 lg:mt-0 lg:py-14 py-8 flex items-center lg:order-3 order-1 font-instrument-sans lg:absolute relative top-20 right-0`}
    >
      <div className="lg:px-16 px-8 lg:py-0 py-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ opacity, x: elementY }}
          className="space-y-6"
        >
          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-5 block">
              Features
            </span>

            <div className="flex flex-col">
              {project.features.map((f, index) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative flex items-start gap-2 py-2 border-b border-zinc-700/40 first:border-t hover:bg-zinc-700/10 transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  <span className="shrink-0 pl-3 text-[0.7rem] font-mono tracking-wider text-zinc-500 pt-0.5 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className=" leading-relaxed text-gray-300/90 group-hover:text-gray-200 transition-colors duration-300">
                    {f}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-3 block">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="px-3 py-1.5 text-xs select-none font-mono bg-zinc-700/50 border border-zinc-600/50 rounded text-zinc-300 hover:bg-zinc-600/50 hover:border-zinc-500/60 transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4 border-t border-zinc-700/60"
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-4 block">
              Links
            </span>
            <div className="flex items-center gap-3">
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-2.5 border border-zinc-600/50 rounded-full bg-zinc-800/60 hover:bg-zinc-700/60 hover:border-zinc-500/70 transition-all duration-400"
              >
                <Github
                  size={16}
                  className="text-zinc-400 group-hover:text-gray-200 transition-colors duration-400"
                />
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 group-hover:text-gray-200 transition-colors duration-400">
                  Code
                </span>
              </Link>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-2.5 border border-zinc-600/50 rounded-full bg-zinc-800/60 hover:bg-zinc-700/60 hover:border-zinc-500/70 transition-all duration-400"
              >
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 group-hover:text-gray-200 transition-colors duration-400">
                  View Live
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-zinc-400 group-hover:text-gray-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-400"
                />
              </Link>
            </div>
          </motion.div>
          {project.accDemo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4 border-t border-zinc-700/60"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-4 block">
                Account Demo
              </span>
              <ul className="flex items-center gap-3">
                {project.accDemo?.map((demo, index) => (
                  <li
                    key={index.toString().padStart(2, "0")}
                    className="flex relative flex-col justify-center w-full items-start border text-gray-300/80 border-zinc-500 p-4 rounded-md bg-zinc-700/40"
                  >
                    <p className="absolute top-3 right-3 text-5xl font-bold font-inter opacity-40">
                      {index + 1}
                    </p>
                    <h3 className="text-2xl font-medium opacity-80 mb-3">
                      {demo.name}
                    </h3>
                    <p className="text-gray-300"> {demo.email}</p>
                    <div className="flex gap-1 text-gray-300">
                      <p>Password :</p>
                      <p>{demo.pass}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
