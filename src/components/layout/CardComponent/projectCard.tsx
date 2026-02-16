"use client";

import { CometCard } from "@/components/ui/comet-card";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { CalendarFold } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  year?: string;
  children?: ReactNode;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  tags = [],
  year,
}: ProjectCardProps) {
  const router = useRouter();
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  return (
    <CometCard>
      <div className="relative w-full group">
        <div
          onClick={() => {
            if (isDekstop) router.push("/projects/" + id);
          }}
          className="block"
        >
          <div className="relative w-full overflow-hidden transition-all duration-300 border rounded-2xl bg-zinc-800 backdrop-blur-sm border-gray-600/30 group-hover:border-gray-600/60">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-500/50 to-transparent" />

            <div className="relative overflow-hidden aspect-video bg-zinc-800">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-500 ease-out grayscale-100 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 transition-opacity duration-300 bg-linear-to-t from-zinc-800 via-transparent to-transparent opacity-60 group-hover:opacity-40" />
            </div>
            <div className="p-5 space-y-4 md:p-6">
              <div className="space-y-2">
                <div className="relative inline-block">
                  <h2 className="text-xl font-semibold text-gray-200 transition-colors duration-300 md:text-2xl font-geist-sans group-hover:text-gray-100">
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

              <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 md:text-base line-clamp-2 group-hover:text-gray-300">
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
                      className="px-3 py-1 text-xs text-gray-400 transition-all duration-300 border rounded-full bg-gray-700/30 border-gray-600/40 hover:bg-gray-700/50 hover:text-gray-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between w-full pt-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <CalendarFold size={18} />
                  <span>{year}</span>
                </div>
                <div
                  onClick={() => {
                    if (!isDekstop) router.push("/project/" + id);
                  }}
                  className="flex items-center gap-2 text-gray-500 transition-colors duration-300 group-hover:text-gray-400"
                >
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
        </div>
      </div>
    </CometCard>
  );
}
