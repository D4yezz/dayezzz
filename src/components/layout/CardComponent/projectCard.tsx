"use client";

import { CometCard } from "@/components/ui/comet-card";
import { motion } from "framer-motion";
import { Calendar, CalendarFold } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
  year?: string;
  children?: ReactNode;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  tags = [],
  link = "#",
  year,
}: ProjectCardProps) {
  return (
    <CometCard>
      <div className="group relative w-full">
        <Link href={"/project/" + id} className="block">
          <div className="relative w-full rounded-2xl bg-zinc-800 backdrop-blur-sm border border-gray-600/30 overflow-hidden group-hover:border-gray-600/60 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-500/50 to-transparent" />

            <div className="relative aspect-video overflow-hidden bg-zinc-800">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover grayscale-100 group-hover:grayscale-0 duration-500 ease-out transition-all group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-zinc-800 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <div className="p-5 md:p-6 space-y-4">
              <div className="space-y-2">
                <div className="relative inline-block">
                  <h2 className="text-xl md:text-2xl font-semibold font-geist-sans text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                    {title}
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute bottom-0 left-0 h-px bg-linear-to-r from-gray-500 to-transparent"
                  />
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                {description}
              </p>
              <div className="h-px bg-linear-to-r from-gray-600/40 via-gray-600/20 to-transparent" />
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
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

              <div className="flex justify-between items-center w-full pt-2">
                <div className="flex gap-2 items-center text-gray-400">
                  <CalendarFold size={18} />
                  <span>{year}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  <span className="text-xs font-medium">VIEW PROJECT</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-px bg-linear-to-r from-gray-500 to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </CometCard>
  );
}
