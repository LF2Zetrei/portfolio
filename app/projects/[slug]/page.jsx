"use client";
import { useParams } from "next/navigation";
import { useDatas } from "@/hooks/useDatas";
import Gallery from "@/components/Gallery";
import Link from "next/link";

export default function ProjectPage() {
  const { slug } = useParams();
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <p>Projet non trouvé</p>;

  return (
    <div className="w-full">

      {/* === HERO — Titre + Subtitle === */}
      <div
        className="w-full px-6 py-12 md:px-20 md:py-16"
        style={{ backgroundColor: "#edb7b3" }}
      >
        <p className="text-sm uppercase tracking-widest text-[#1e2130]/60 mb-2">
          Project
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#1e2130] mb-4 max-w-3xl">
          {project.long_title}
        </h1>
        <p className="text-base md:text-lg text-[#1e2130]/70 max-w-xl">
          {project.subtitle}
        </p>

        {/* Liens */}
        <div className="flex gap-4 mt-6 flex-wrap">
          {project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              className="px-5 py-2 rounded-full border border-[#1e2130] text-sm font-medium text-[#1e2130] hover:bg-[#1e2130] hover:text-white transition-colors"
            >
              GitHub →
            </Link>
          )}
          {project.extra_url && (
            <Link
              href={project.extra_url}
              target="_blank"
              className="px-5 py-2 rounded-full bg-[#1e2130] text-sm font-medium text-white hover:opacity-80 transition-opacity"
            >
              See it live →
            </Link>
          )}
        </div>
      </div>

      {/* === CONTENU PRINCIPAL === */}
      <div className="w-full flex flex-col lg:flex-row">

        {/* Colonne gauche — textes */}
        <div
          className="w-full lg:w-2/5 px-6 py-10 md:px-12 flex flex-col gap-8"
          style={{ backgroundColor: "#ece9e5" }}
        >
          {/* Description non-technique */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#1e2130]/50 mb-3">
              In a nutshell
            </h3>
            <p className="text-sm md:text-base text-justify leading-relaxed">
              {project.non_technical_description}
            </p>
          </div>

          {/* Description technique */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#1e2130]/50 mb-3">
              Under the hood
            </h3>
            <p className="text-sm md:text-base text-justify leading-relaxed">
              {project.technical_description}
            </p>
          </div>
        </div>

        {/* Colonne droite — galerie */}
        <div
          className="w-full lg:w-3/5 px-6 py-10 md:px-12 flex flex-col justify-center overflow-hidden"
          style={{ backgroundColor: "#c6c2cd" }}
        >
          <h3 className="text-xs uppercase tracking-widest text-[#1e2130]/50 mb-6">
            Screenshots
          </h3>
          <div className="w-full overflow-hidden">
            <Gallery images={project.images} />
          </div>
        </div>
      </div>

      {/* === RÉSUMÉ === */}
      <div
        className="w-full px-6 py-12 md:px-20 md:py-16"
        style={{ backgroundColor: "#c1b580" }}
      >
        <h3 className="text-xs uppercase tracking-widest text-[#1e2130]/50 mb-4">
          {project.summary_title}
        </h3>
        <p className="text-base md:text-lg text-justify leading-relaxed max-w-3xl">
          {project.global_summary}
        </p>
      </div>

    </div>
  );
}