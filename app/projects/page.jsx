"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import FadeInSection from "@/components/FadeInSection";
import { useDatas } from "@/hooks/useDatas";

const NAVY = "#1e2130";
const CREAM = "#ece9e5";
const LAVENDER = "#c6c2cd";
const GOLD = "#e1cf80";
const PINK = "#edb7b3";

const ALL = "All";
const FEATURED_COUNT = 4;

const pad = (n) => String(n).padStart(2, "0");

// Grande ligne éditoriale pour les projets mis en avant
function FeaturedProject({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <FadeInSection direction={reversed ? "right" : "left"}>
      <article
        className={`flex flex-col gap-8 md:gap-16 md:items-center
                    ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group relative block w-full md:w-7/12 aspect-[16/10] rounded-xl overflow-hidden"
          style={{ backgroundColor: NAVY }}
        >
          {project.images[0] && (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              priority={index === 0}
            />
          )}
        </Link>

        <div className="w-full md:w-5/12">
          <span className="block text-6xl md:text-7xl font-bold leading-none" style={{ color: GOLD }}>
            {pad(index + 1)}
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-[#1e2130]/50 mt-3 mb-6">
            {project.category}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {project.title}
          </h2>
          <p className="text-base text-[#1e2130]/70 leading-relaxed mb-8">
            {project.short_description}
          </p>
          <Button
            href={`/projects/${project.slug}`}
            text="See the project →"
            borderTBSize="1px"
            borderSideSize="1px"
            borderTBLine={NAVY}
            borderSideLine={NAVY}
            backgroundColor={GOLD}
            color={NAVY}
          />
        </div>
      </article>
    </FadeInSection>
  );
}

// Carte compacte pour la grille
function ProjectCard({ project, number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full rounded-xl overflow-hidden
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ backgroundColor: CREAM }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ backgroundColor: NAVY }}>
        {project.images[0] && (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <span className="text-2xl font-bold" style={{ color: GOLD }}>
            {pad(number)}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#1e2130]/50 text-right">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold leading-snug mb-2">{project.title}</h3>
        <p className="text-sm text-[#1e2130]/70 leading-relaxed line-clamp-3 mb-6">
          {project.short_description}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#1e2130]">
          <span className="h-[2px] w-6 transition-all duration-300 group-hover:w-10" style={{ backgroundColor: NAVY }} />
          See more
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const { projects } = useDatas();
  const [filter, setFilter] = useState(ALL);

  if (!projects) return <p>Chargement...</p>;

  const categories = [ALL, ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const filtered = filter === ALL ? projects : projects.filter((p) => p.category === filter);
  const featured = filter === ALL ? filtered.slice(0, FEATURED_COUNT) : [];
  const others = filter === ALL ? filtered.slice(FEATURED_COUNT) : filtered;

  return (
    <div className="w-full">

      {/* === HERO === */}
      <section
        className="w-full px-6 pt-16 pb-12 md:px-24 md:pt-24 md:pb-16"
        style={{ backgroundColor: PINK }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-[#1e2130]/40 mb-6">
          Portfolio — {projects.length} projects
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none max-w-5xl mb-8">
          Things I&apos;ve built
        </h1>
        <div className="w-full h-[1px] bg-[#1e2130]/20 mb-8" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <p className="text-base md:text-lg text-[#1e2130]/60 max-w-xl leading-relaxed">
            From a cloud provider written from scratch to the server hosting this very page,
            here is everything I&apos;ve shipped, the most significant first.
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === filter;
              const count = c === ALL ? projects.length : projects.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className="rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer"
                  style={{
                    border: `1px solid ${NAVY}`,
                    backgroundColor: active ? NAVY : "transparent",
                    color: active ? CREAM : NAVY,
                  }}
                >
                  {c} <span className="opacity-50 ml-1">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* === PROJETS PHARES === */}
      {featured.length > 0 && (
        <section className="w-full px-6 py-16 md:px-24 md:py-24" style={{ backgroundColor: CREAM }}>
          <p className="text-xs uppercase tracking-[0.3em] text-[#1e2130]/40 mb-12 md:mb-16">
            Highlights
          </p>
          <div className="flex flex-col gap-20 md:gap-28">
            {featured.map((project, i) => (
              <FeaturedProject key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* === GRILLE === */}
      <section className="w-full px-6 py-16 md:px-16 md:py-24" style={{ backgroundColor: LAVENDER }}>
        <p className="text-xs uppercase tracking-[0.3em] text-[#1e2130]/50 mb-10 md:px-8">
          {filter === ALL ? "More projects" : `${filter} — ${filtered.length} projects`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 md:px-8">
          {others.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={projects.indexOf(project) + 1}
            />
          ))}
        </div>
      </section>

      {/* === APPEL AU CONTACT === */}
      <section
        className="w-full px-6 py-16 md:px-24 md:py-20 relative overflow-hidden"
        style={{ backgroundColor: GOLD }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: NAVY }} />
            <h2 className="text-2xl md:text-4xl font-bold max-w-2xl">
              One of these caught your eye?
            </h2>
          </div>
          <Button
            href="/contact"
            text="Let's talk →"
            borderTBSize="1px"
            borderSideSize="1px"
            borderTBLine={NAVY}
            borderSideLine={NAVY}
            backgroundColor={CREAM}
            color={NAVY}
          />
        </div>
      </section>

    </div>
  );
}
