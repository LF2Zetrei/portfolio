"use client";
import { useParams } from "next/navigation";
import { useDatas } from "@/hooks/useDatas";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import Button from "@/components/Button"

export default function ProjectPage() {
  const { slug } = useParams();
  const { projects } = useDatas();
  if (!projects) return <p>Chargement...</p>;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <p>Projet non trouvé</p>;

  return (
    <div className="w-full">

      {/* === HERO FULL WIDTH === */}
      <div
        className="w-full min-h-[40vh] px-6 py-16 md:px-24 md:py-24
                   flex flex-col justify-end relative"
        style={{ backgroundColor: "#edb7b3" }}
      >
        {/* Tag */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#1e2130]/40 mb-6">
          Project — {project.slug}
        </p>

        {/* Titre très grand */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1e2130]
                       leading-none max-w-5xl mb-8">
          {project.long_title}
        </h1>

        {/* Barre de séparation + subtitle + liens */}
        <div className="w-full h-[1px] bg-[#1e2130]/20 mb-8" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-base md:text-lg text-[#1e2130]/60 max-w-xl leading-relaxed">
            {project.subtitle}
          </p>
          {/* Liens */}
          <div className="flex gap-3 flex-shrink-0">
            {project.github_url && (
              <Button
                href={project.github_url}
                text="GitHub →"
                borderTBSize="1px"
                borderTBLine="#1e2130"
                borderSideLine="#1e2130"
                backgroundColor="#e1cf80"
                color="#1e2130"
              />
            )}
            {project.extra_url && (
              <Button
                href={project.extra_url}
                text="See it live →"
                borderTBSize="1px"
                borderTBLine="#1e2130"
                borderSideLine="#1e2130"
                backgroundColor="#e1cf80"
                color="#1e2130"
              />
            )}
          </div>
        </div>
      </div>

      {/* === GALERIE === */}
      <div style={{ backgroundColor: "#c6c2cd" }} className="w-full px-6 py-16 md:px-16 md:py-20">
        <Gallery images={project.images} />
      </div>

      {/* === TIMELINE DESCRIPTIONS === */}
      <div
        className="w-full px-6 py-16 md:px-24 md:py-24"
        style={{ backgroundColor: "#ece9e5" }}
      >
        {/* In a nutshell */}
        <FadeInSection direction="left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="md:w-1/4 flex-shrink-0">
              <span className="text-6xl font-bold text-[#e1cf80]">01</span>
              <p className="text-xs uppercase tracking-widest text-[#1e2130]/40 mt-2">
                In plain English
              </p>
            </div>
            <div className="md:w-3/4">
              <p className="text-base md:text-lg text-justify leading-relaxed text-[#1e2130]/80">
                {project.non_technical_description}
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Séparateur */}
        <div className="w-full h-[1px] bg-[#1e2130]/10 mb-16 md:mb-24" />

        {/* Under the hood */}
        <FadeInSection direction="right">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-1/4 flex-shrink-0">
              <span className="text-6xl font-bold text-[#e1cf80]">02</span>
              <p className="text-xs uppercase tracking-widest text-[#1e2130]/40 mt-2">
                For the curious
              </p>
            </div>
            <div className="md:w-3/4">
              <p className="text-base md:text-lg text-justify leading-relaxed text-[#1e2130]/80">
                {project.technical_description}
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* === RÉSUMÉ === */}
      <FadeInSection direction="left">
        <div
          className="w-full px-6 py-16 md:px-24 md:py-24 relative overflow-hidden"
          style={{ backgroundColor: "#e1cf80" }}
        >
          {/* Numéro décoratif en arrière plan */}
          <span className="absolute right-8 top-1/2 -translate-y-1/2
                           text-[200px] font-bold text-[#ece9e5] leading-none select-none
                           hidden md:block">
            03
          </span>

          <div className="relative z-10 max-w-3xl">
            <div className="w-12 h-[2px] bg-[#1e2130] mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e2130] mb-8">
              {project.summary_title}
            </h3>
            <p className="text-base md:text-xl text-justify leading-relaxed text-[#1e2130]/80">
              {project.global_summary}
            </p>
          </div>
        </div>
      </FadeInSection>

    </div>
  );
}