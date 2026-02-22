import { CardSimple } from "@/components/layout/CardComponent/cardSimple";
import { ProjectCard } from "@/components/layout/CardComponent/projectCard";
import { projects } from "@/utils/projects";
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
    <section className="w-full flex flex-col items-center justify-center gap-8 px-12 py-18 font-instrument-sans">
      <h2 className="text-4xl font-semibold tracking-wide font-geist-sans uppercase text-gray-300/75">
        More Projects
      </h2>
      <div className="flex gap-8  justify-center w-full">
        {nextProjects.map((project) => (
          <div key={project.id} className="w-160 h-170">
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
    </section>
  );
}
