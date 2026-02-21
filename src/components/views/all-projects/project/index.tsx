"use client";

import ImageProject from "@/components/layout/project/image";
import TextProject from "@/components/layout/project/text";
import { projects } from "@/utils/projects";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return notFound();

  return (
    <section className="relative flex lg:flex-row flex-col min-h-screen">
      <ImageProject project={project} />

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="lg:hidden visible w-[90%] lg:order-2 order-2 rounded-full mx-auto h-px bg-linear-to-r from-zinc-700/40 via-gray-300/90 to-zinc-700/40 lg:my-12 my-6"
      />

      <TextProject project={project} />
    </section>
  );
}
