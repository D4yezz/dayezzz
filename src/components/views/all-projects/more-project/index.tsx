import { CardSimple } from "@/components/layout/CardComponent/cardSimple";
import Magnet from "@/components/ReactBites/Magnet";
import { projects } from "@/utils/projects";
import { FolderCode } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MoreProject() {
  const { id } = useParams();

  const currentIndex = projects.findIndex((p) => String(p.id) === String(id));

  const total = projects.length;

  const nextProjects = [
    projects[(currentIndex + 1) % total],
    projects[(currentIndex + 2) % total],
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 lg:px-12 px-6 py-18 font-instrument-sans">
      <h2 className="text-4xl font-semibold tracking-wide font-geist-sans uppercase text-gray-300/75">
        More Projects
      </h2>
      <div className="flex gap-8 lg:flex-row flex-col justify-center w-full">
        {nextProjects.map((project) => (
          <div key={project.id} className="lg:w-160 w-full lg:h-170 h-[70vh]">
            <CardSimple
              key={project.id}
              id={project.id}
              title={project.name}
              image={project.images[0]}
              description={project.description}
              tags={project.tags}
              year={project.year}
            />
          </div>
        ))}
      </div>
      <Link
        href={"/projects"}
        className="w-[85%] text-gray-300 bg-zinc-800 flex items-center font-instrument-sans justify-center py-6 mb-8 mx-auto border-t border-gray-300/80"
      >
        <Magnet
          paddingX={300}
          paddingY={50}
          disabled={false}
          magnetStrength={10}
        >
          <h3 className="flex items-center gap-2 text-xl">
            <FolderCode strokeWidth={2} size={24} />
            View all projects
          </h3>
        </Magnet>
      </Link>
    </section>
  );
}
