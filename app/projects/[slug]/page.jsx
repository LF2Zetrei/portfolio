"use client";

import { useParams } from "next/navigation";
import { useDatas } from "@/hooks/useDatas";
import Gallery from "@/components/Gallery";
import SplitSection from "@/components/SplitSection";

export default function ProjectPage() {
  const { slug } = useParams();
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Projet non trouvé</p>;

  return (
    <div>
      <SplitSection
            key={project.id}
            height={100}
            leftBgColor="#f0f0f0"
            rightBgColor="#f0f0f0"
            leftBgImage={null}
            rightBgImage={null}
            showDivider={false}
            leftContent={<div><h1>{project.title}</h1> <p>{project.description}</p> <h3>Technologies :</h3></div>}
            rightContent={<div> <ul>
        {project.technologies.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      {project.github && (
        <p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Voir sur GitHub
          </a>
        </p>
      )}
      {project.demo && (
        <p>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Voir la démo
          </a>
        </p>
      )}</div>}
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
          />  
    </div>
  );
}