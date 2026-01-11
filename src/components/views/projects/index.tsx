import { ProjectCard } from "@/components/layout/CardComponent/projectCard";
import SeparatorSection from "@/components/layout/SeparatorSection";
import Magnet from "@/components/ReactBites/Magnet";
import { projects } from "@/utils/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bug, FolderCode, GitBranch, Star } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const divY = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const card1Y = useTransform(scrollYProgress, [0.2, 0.35], [200, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const card1X = useTransform(scrollYProgress, [0.45, 0.5], [50, -400]);
  const rotate1X = useTransform(scrollYProgress, [0.2, 0.35], [20, 0]);
  const card2Y = useTransform(scrollYProgress, [0.35, 0.5], [200, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const card2X = useTransform(scrollYProgress, [0.5, 0.65], [0, 0]);
  const rotate2X = useTransform(scrollYProgress, [0.35, 0.5], [20, 0]);
  const card3Y = useTransform(scrollYProgress, [0.6, 0.65], [200, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
  const card3X = useTransform(scrollYProgress, [0.7, 0.8], [-50, 400]);
  const rotate3X = useTransform(scrollYProgress, [0.6, 0.7], [20, 0]);

  const idProject = {
    projectOne: projects.length - 3,
    projectTwo: projects.length - 2,
    projectThree: projects.length - 1,
  };

  return (
    <>
      <section ref={ref} className="w-full relative h-[600vh] bg-zinc-800">
        <motion.div
          style={{ opacity, y: divY }}
          className="w-full min-h-screen sticky top-0 px-8 py-12 text-gray-300 flex flex-col items-center font-sans overflow-hidden"
        >
          <SeparatorSection
            scrollYProgress={scrollYProgress}
            number="04"
            title="Projects"
            description="What I've Built"
          />

          <div className="flex gap-30 items-center mt-12 text-gray-300 font-semibold overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 200,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ opacity, y: divY }}
              className="text-[12rem] font-sans font-semibold flex gap-26 tracking-tight whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-0 z-0"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-row gap-26 items-center w-fit"
                >
                  FEATURED PROJECTS
                  <Star size={120} fill="#d1d5dc" strokeWidth={0} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-full max-w-xl px-12 perspective-distant">
            <motion.div
              style={{
                y: card1Y,
                opacity: card1Opacity,
                x: card1X,
                rotateX: rotate1X,
                scale: useTransform(
                  scrollYProgress,
                  [0.35, 0.5, 0.8, 0.95],
                  [1, 0.85, 0.85, 1]
                ),
                filter: useTransform(
                  scrollYProgress,
                  [0.35, 0.5, 0.8, 0.8],
                  ["blur(0px)", "blur(4px)", "blur(1px)", "blur(0px)"]
                ),
                transformStyle: "preserve-3d",
              }}
              className="absolute left-0 top-0 w-120 z-10"
            >
              <ProjectCard
                id={projects[idProject.projectOne].id}
                title={projects[idProject.projectOne].name}
                description={projects[idProject.projectOne].description}
                image={projects[idProject.projectOne].image}
                tags={projects[idProject.projectOne].tags}
                year={projects[idProject.projectOne].year}
              />
            </motion.div>

            <motion.div
              style={{
                y: card2Y,
                opacity: card2Opacity,
                x: card2X,
                rotateX: rotate2X,
                scale: useTransform(
                  scrollYProgress,
                  [0.5, 0.65, 0.8, 0.95],
                  [1, 0.85, 0.85, 1]
                ),
                filter: useTransform(
                  scrollYProgress,
                  [0.5, 0.65, 0.8, 0.8],
                  ["blur(0px)", "blur(4px)", "blur(1px)", "blur(0px)"]
                ),
                transformStyle: "preserve-3d",
              }}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-120 z-20"
            >
              <ProjectCard
                id={projects[idProject.projectTwo].id}
                title={projects[idProject.projectTwo].name}
                description={projects[idProject.projectTwo].description}
                image={projects[idProject.projectTwo].image}
                tags={projects[idProject.projectTwo].tags}
                year={projects[idProject.projectTwo].year}
              />
            </motion.div>

            <motion.div
              style={{
                y: card3Y,
                opacity: card3Opacity,
                x: card3X,
                rotateX: rotate3X,
                scale: useTransform(
                  scrollYProgress,
                  [0.65, 0.8, 0.8, 0.95],
                  [1, 0.85, 0.85, 1]
                ),
                filter: useTransform(
                  scrollYProgress,
                  [0.65, 0.8, 0.8, 0.8],
                  ["blur(0px)", "blur(1px)", "blur(1px)", "blur(0px)"]
                ),
                transformStyle: "preserve-3d",
              }}
              className="absolute right-0 top-0 w-120 z-30"
            >
              <ProjectCard
                id={projects[idProject.projectThree].id}
                title={projects[idProject.projectThree].name}
                description={projects[idProject.projectThree].description}
                image={projects[idProject.projectThree].image}
                tags={projects[idProject.projectThree].tags}
                year={projects[idProject.projectThree].year}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Link
        href={"/projects"}
        className="w-[85%] text-gray-300 bg-zinc-800 flex items-center font-instrument-sans justify-center py-6 mb-8 mx-auto border-t border-gray-300"
      >
        <Magnet
          paddingX={300}
          paddingY={50}
          disabled={false}
          magnetStrength={10}
        >
          <h3 className="text-xl  flex gap-2 items-center">
            <FolderCode strokeWidth={2} size={24} />
            View all projects
          </h3>
        </Magnet>
      </Link>
    </>
  );
}
