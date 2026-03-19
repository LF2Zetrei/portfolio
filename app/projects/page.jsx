"use client";
import Button from "@/components/Button";
import { useDatas } from "@/hooks/useDatas";
import SplitSection from "@/components/SplitSection";
import { useEffect, useState } from "react";
import CardPhoto from "@/components/CardPhoto"

export default function Projects() {
  const { projects } = useDatas();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!projects) return <p>Chargement...</p>;

  return (
    <div className="w-full">
      {projects.map((project) => {
        const isSpecial = project.id % 2 === 1; 

        const imageContent = (image) => (
          <div>
            <CardPhoto imageUrl={image}></CardPhoto>
          </div>
        )

        const projectContent = (bgColor) => (
          <div className="flex flex-col justify-center items-start w-full px-6 py-10 md:px-12 md:py-6 md:w-4/5">
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

        const getColors = (isSpecial, isMobile) => {
          if (isMobile) {
            // Mobile : même couleur des deux côtés, alterne selon le projet
            const bg = isSpecial ? "#edb7b3" : "#c1b580";
            return { left: bg, right: bg };
          }
          // Desktop : couleurs alternées gauche/droite
          return {
            left: isSpecial ? "#c1b580" : "#edb7b3",
            right: isSpecial ? "#c1b580" : "#edb7b3",
          };
        };

        const {left, right} = getColors(isSpecial, isMobile)

        return (
          <SplitSection
            key={project.id}
            className={isSpecial ? "slide-left" : "slide-right"}
            leftBgColor={left}
            rightBgColor={right}
            leftBgImage={isSpecial && !isMobile ? project.images[0] : ""}
            rightBgImage={isSpecial && !isMobile ? "" : project.images[0]}
            showDivider={false}
            leftContent={isSpecial && !isMobile ? null : projectContent("#ece9e5")}
            rightContent={isSpecial && !isMobile ? projectContent("#ece9e5") : null}
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
          />
        );
      })}
    </div>
  );
}