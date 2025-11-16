"use client";

import Link from "next/link";
import { useDatas } from "@/hooks/useDatas";

export default function Projects() {
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Mes Projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: "20px" }}>
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <Link href={`/projects/${project.slug}`}>Voir le projet</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}