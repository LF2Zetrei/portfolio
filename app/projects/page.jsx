"use client";

import Link from "next/link";
import { useDatas } from "@/hooks/useDatas";
import SplitSection from "@/components/SplitSection";

export default function Projects() {
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;

  return (
    <div>
      {projects.map((project) => {
        
        const isSpecial = project.id%2 == 1;

        const leftContent = isSpecial ? null : (
          <div>
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <Link href={`/projects/${project.slug}`}>Voir le projet</Link>
          </div>
        );
        const rightContent = isSpecial ? (
          <div>
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <Link href={`/projects/${project.slug}`}>Voir le projet</Link>
          </div>
        ) : null;

        const leftBgImage = isSpecial
          ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          : "";

        const rightBgImage = isSpecial
          ? ""
          : "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

        return (
          <SplitSection
            key={project.id}
            height={300}
            leftBgColor="#f0f0f0"
            rightBgColor="#f0f0f0"
            leftBgImage={leftBgImage}
            rightBgImage={rightBgImage}
            showDivider={false}
            leftContent={leftContent}
            rightContent={rightContent}
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
          />
        );
      })}
    </div>
  );
}