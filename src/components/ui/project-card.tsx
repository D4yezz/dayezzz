"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { CometCard } from "./comet-card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
  children?: ReactNode;
}

export function ProjectCard({
  title,
  description,
  image,
  tags = [],
  link = "#",
}: ProjectCardProps) {
  return (
    <CometCard>
    <div
      className="group relative w-full"
    >
      <a href={link} className="block">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 via-zinc-800/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

        {/* Card Container */}
        <div className="relative rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-gray-600/30 overflow-hidden group-hover:border-gray-600/60 transition-all duration-300">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />

          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden bg-zinc-800">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale-75 group-hover:grayscale-0 duration-500 ease-out transition-all group-hover:scale-105"
              loading="lazy"
            />

            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

            {/* Corner Accents */}
            <div className="absolute top-3 right-3 w-8 h-8 border border-gray-400/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border border-gray-400/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Container */}
          <div className="p-5 md:p-6 space-y-4">
            {/* Title with animated underline */}
            <div className="space-y-2">
              <div className="relative inline-block">
                <h2 className="text-xl md:text-2xl font-semibold font-geist-sans text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                  {title}
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gray-500 to-transparent"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>

            {/* Divider Line */}
            <div className="h-px bg-gradient-to-r from-gray-600/40 via-gray-600/20 to-transparent" />

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-xs px-3 py-1 rounded-full bg-gray-700/30 text-gray-400 border border-gray-600/40 hover:bg-gray-700/50 hover:text-gray-300 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Bottom Action Line */}
            <div className="pt-2 flex items-center gap-2 text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
              <span className="text-xs font-medium">VIEW PROJECT</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-px bg-gradient-to-r from-gray-500 to-transparent"
              />
            </div>
          </div>

          {/* Right Border Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600/40 via-transparent to-gray-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>
    </div>
    </CometCard>
  );
}

// Grid Layout Component for Multiple Project Cards
export function ProjectsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-6 md:gap-8 w-full mt-12">
      {children}
    </div>
  );
}
