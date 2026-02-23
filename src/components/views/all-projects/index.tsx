import { CardSimple } from "@/components/layout/CardComponent/cardSimple";
import useMediaQuery from "@/hooks/useMediaQuery";
import { projects } from "@/utils/projects";

export default function AllProjects() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");
  return (
    <section className="flex lg:flex-row flex-col min-h-screen">
      <div className="lg:w-1/3 w-full lg:px-16 px-8 lg:py-22 pt-26 flex items-end">
        <div className="sticky bottom-28 lg:space-y-6 space-y-3">
          <h1 className="lg:text-[5.5rem] text-7xl font-bold lg:leading-23 font-geist-sans">
            Things <br /> I&lsquo;ve Built
          </h1>
          <p className="text-lg text-zinc-500">
            Fullstack projects crafted with scalability, performance, and
            thoughtful user experience.
          </p>
        </div>
      </div>
      {!isDekstop && (
        <div className="lg:invisible visible w-[90%] rounded-full mx-auto h-px bg-linear-to-r from-zinc-700/40 via-gray-300/90 to-zinc-700/40 my-12" />
      )}
      <div className="lg:w-2/3 w-full lg:px-36 px-8 lg:py-32 space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="w-full lg:h-[85vh] h-[65vh]">
            <CardSimple
              key={project.id}
              id={project.id}
              title={project.name}
              description={project.description}
              image={project.images[0]}
              tags={project.tags}
              year={project.year}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
