import { projects } from "@/utils/projects";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function HeaderProject() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return notFound();
  return (
    <section className="w-full px-8 pt-24 pb-16 overflow-hidden lg:px-16">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col items-center justify-center gap-4 text-center"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="text-md font-mono tracking-[0.3em] uppercase text-gray-400">
            {project.year}
          </span>
        </div>

        <h1 className="text-5xl font-bold leading-tight text-gray-300 lg:text-6xl font-geist-sans">
          {project.name}
        </h1>

        <div className="w-48 h-[1.5px] bg-linear-to-r from-transparent via-gray-400 to-transparent" />

        <p className="max-w-3xl text-base leading-relaxed text-zinc-400">
          {project.longDesc || project.description}
        </p>

        <span className="px-3 py-1 font-mono font-thin tracking-wider text-gray-300 uppercase border rounded-full select-none border-zinc-600">
          {project.role}
        </span>
      </motion.div>
    </section>
  );
}
