"use client";
import Button from "@/components/Button";
import { useDatas } from "@/hooks/useDatas";
import SplitSection from "@/components/SplitSection";

export default function Projects() {
  const { projects } = useDatas();
  if (!projects) return <p>Chargement...</p>;

  return (
    <div className="w-full">
      {projects.map((project) => {
        const isSpecial = project.id % 2 === 1;

        const projectContent = (bgColor) => (
          <div className="flex flex-col justify-center items-start w-full px-6 py-10 md:px-12 md:py-16 md:w-4/5">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              {project.title}
            </h2>
            <p className="text-sm md:text-base mb-6">
              {project.short_description}
            </p>
            <Button
              href={`/projects/${project.slug}`}
              text="See more"
              borderTBSize="1px"
              borderTBLine="#1e2130"
              borderSideLine="#1e2130"
              backgroundColor={bgColor}
              color="#1e2130"
            />
          </div>
        );

        return (
          <SplitSection
            key={project.id}
            className={isSpecial ? "slide-left" : "slide-right"}
            leftBgColor="#edb7b3"
            rightBgColor="#c1b580"
            leftBgImage={isSpecial ? project.images[0] : ""}
            rightBgImage={isSpecial ? "" : project.images[0]}
            showDivider={false}
            leftContent={isSpecial ? null : projectContent("#ece9e5")}
            rightContent={isSpecial ? projectContent("#edb7b3") : null}
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
          />
        );
      })}
    </div>
  );
}