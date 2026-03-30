import { ProjectCard } from "@/components/layout/CardComponent/projectCard";
import SeparatorSection from "@/components/layout/SeparatorSection";
import Magnet from "@/components/ReactBites/Magnet";
import useMediaQuery from "@/hooks/useMediaQuery";
import { projects } from "@/utils/projects";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { FolderCode, Star } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Projects() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [fixed, setFixed] = useState(false);
  const [activeCard, setActiveCard] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.001 && v < 0.98) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.4) {
      setActiveCard(1);
    } else if (v < 0.6) {
      setActiveCard(2);
    } else {
      setActiveCard(3);
    }
  });

  const divY = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0],
  );

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
          className={`${fixed ? "fixed top-0" : "absolute top-0"} flex flex-col items-center w-full min-h-screen px-8 py-12 overflow-hidden font-sans text-gray-300`}
        >
          <SeparatorSection
            scrollYProgress={scrollYProgress}
            number="04"
            title="Projects"
            description="What I've Built"
          />

          <div className="flex items-center mt-12 overflow-hidden font-semibold text-gray-300 gap-30">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: isDekstop ? 200 : 100,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ opacity, y: divY }}
              className="lg:text-[12rem] text-[8rem] font-sans font-semibold flex lg:gap-26 gap-8 tracking-tight whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-0 z-0"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center gap-8 lg:gap-26 w-fit"
                >
                  FEATURED PROJECTS
                  <Star
                    size={isDekstop ? 120 : 80}
                    fill="#d1d5dc"
                    strokeWidth={0}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-full lg:max-w-xl lg:px-12 perspective-distant">
            <motion.div
              style={{
                y: card1Y,
                opacity: card1Opacity,
                x: isDekstop ? card1X : 0,
                rotateX: rotate1X,
                scale: useTransform(
                  scrollYProgress,
                  [0.35, 0.5, 0.8, 0.95],
                  [1, 0.85, 0.85, 1],
                ),
                filter: useTransform(
                  scrollYProgress,
                  [0.35, 0.5, 0.8, 0.8],
                  ["blur(0px)", "blur(4px)", "blur(1px)", "blur(0px)"],
                ),
                transformStyle: "preserve-3d",
              }}
              className={`absolute top-0 left-0 lg:right-full right-0 mx-auto lg:w-120 w-[80vw] ${activeCard === 1 ? "z-40" : "z-10"}`}
            >
              <ProjectCard
                id={projects[idProject.projectOne].id}
                title={projects[idProject.projectOne].name}
                description={projects[idProject.projectOne].description}
                image={projects[idProject.projectOne].images[0]}
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
                  [1, 0.85, 0.85, 1],
                ),
                filter: useTransform(
                  scrollYProgress,
                  [0.5, 0.65, 0.8, 0.8],
                  ["blur(0px)", "blur(4px)", "blur(1px)", "blur(0px)"],
                ),
                transformStyle: "preserve-3d",
              }}
              className={`absolute top-0 -translate-x-1/2 left-1/2 lg:w-120 w-[80vw] ${activeCard === 2 ? "z-40" : "z-20"}`}
            >
              <ProjectCard
                id={projects[idProject.projectTwo].id}
                title={projects[idProject.projectTwo].name}
                description={projects[idProject.projectTwo].description}
                image={projects[idProject.projectTwo].images[0]}
                tags={projects[idProject.projectTwo].tags}
                year={projects[idProject.projectTwo].year}
              />
            </motion.div>

            <motion.div
              style={{
                y: card3Y,
                opacity: card3Opacity,
                x: isDekstop ? card3X : 0,
                rotateX: rotate3X,
                scale: useTransform(
                  scrollYProgress,
                  [0.65, 0.8, 0.8, 0.95],
                  [1, 0.85, 0.85, 1],
                ),
                filter: useTransform(
                  scrollYProgress,
                  [0.65, 0.8, 0.8, 0.8],
                  ["blur(0px)", "blur(1px)", "blur(1px)", "blur(0px)"],
                ),
                transformStyle: "preserve-3d",
              }}
              className={`absolute top-0 right-0 lg:left-1/6 left-0 mx-auto lg:w-120 w-[80vw] ${activeCard === 3 ? "z-40" : "z-30"}`}
            >
              <ProjectCard
                id={projects[idProject.projectThree].id}
                title={projects[idProject.projectThree].name}
                description={projects[idProject.projectThree].description}
                image={projects[idProject.projectThree].images[0]}
                tags={projects[idProject.projectThree].tags}
                year={projects[idProject.projectThree].year}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Link
        href={"/projects"}
        className="w-full bg-gray-300 text-zinc-800 flex items-center font-instrument-sans justify-center py-6 mx-auto border-t border-gray-300 z-80 relative"
      >
        <Magnet
          paddingX={300}
          paddingY={50}
          disabled={false}
          magnetStrength={10}
        >
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <FolderCode strokeWidth={2} size={24} />
            View all projects
          </h3>
        </Magnet>
      </Link>
    </>
  );
}
