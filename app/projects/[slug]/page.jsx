"use client";

import { useParams } from "next/navigation";
import { useDatas } from "@/hooks/useDatas";
import Gallery from "@/components/Gallery";

export default function ProjectPage() {
  const { slug } = useParams();
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Projet non trouvé</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Technologies :</h3>
      <ul>
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
      )}
      {project.images && <Gallery images={project.images} />}
    </div>
  );
}