'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import MetaballBackground from '@/components/MetaBallBackground';
import { useDatas } from '@/hooks/useDatas';
import '@/transitions/transitions.css';

const NAVY = '#1e2130';

// Position, couleur et mouvement de chaque pilule autour de la vidéo (grand écran)
const ORBIT = [
  { pos: 'top-[4%] left-[6%]', bg: '#edb7b3', tilt: '-4deg', duration: '6s', delay: '0s', drift: ['6px', '-10px'] },
  { pos: 'top-[2%] right-[10%]', bg: '#e1cf80', tilt: '3deg', duration: '7s', delay: '-2s', drift: ['-8px', '-8px'] },
  { pos: 'top-[44%] -left-[2%]', bg: '#ece9e5', tilt: '2deg', duration: '5.5s', delay: '-1s', drift: ['8px', '6px'] },
  { pos: 'bottom-[6%] left-[16%]', bg: '#c6c2cd', tilt: '-2deg', duration: '6.5s', delay: '-3s', drift: ['-6px', '-12px'] },
  { pos: 'bottom-[14%] right-[3%]', bg: '#edb7b3', tilt: '5deg', duration: '7.5s', delay: '-4s', drift: ['6px', '10px'] },
];

function HobbyPill({ hobby, style, className = '', compact = false }) {
  return (
    <div
      className={`rounded-full px-5 py-2.5 shadow-md whitespace-nowrap ${className}`}
      style={{ border: `1px solid ${NAVY}`, ...style }}
    >
      <span className="font-bold text-[#1e2130]">{hobby.name}</span>
      {!compact && <span className="text-sm text-[#1e2130]/60 ml-2">{hobby.tagline}</span>}
    </div>
  );
}

// Miniature locale ; le lecteur YouTube (sans cookies) ne se charge qu'au clic
function VideoPreview({ speedrun }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
         style={{ backgroundColor: NAVY, border: '6px solid #ece9e5' }}>
      {playing ? (
        // Le jeu n'occupe que le coin haut-gauche de la vidéo (80 % x 80 %) :
        // le lecteur est agrandi à 125 % pour ne montrer que cette zone.
        <iframe
          className="absolute top-0 left-0 w-[125%] h-[125%]"
          src={`https://www.youtube-nocookie.com/embed/${speedrun['video-id']}?autoplay=1&controls=0&rel=0&playsinline=1&modestbranding=1`}
          title={`${speedrun.category} speedrun in ${speedrun.time}`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : null}

      {playing ? (
        // Calque transparent : capte le clic (pas d'interface YouTube) et arrête la vidéo
        <button
          type="button"
          onClick={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full cursor-pointer"
          aria-label="Stop the video"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label={`Play my ${speedrun.category} speedrun`}
        >
          <Image
            src={speedrun.thumbnail}
            alt={`${speedrun.category} speedrun`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
                             transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: '#e1cf80', border: `1px solid ${NAVY}` }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill={NAVY} aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function WhoIsLucas() {
  const { aboutMe } = useDatas();
  if (!aboutMe) return null;
  const { speedrun, hobbies } = aboutMe;

  return (
    <section className="w-full flex flex-col lg:flex-row border-t border-[#1e2130]/10" style={{ backgroundColor: '#ece9e5' }}>

      {/* Texte — colonne étroite */}
      <div className="w-full lg:w-5/12 px-6 py-16 md:px-24 lg:pl-24 lg:pr-12 lg:py-24 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#1e2130]/40 mb-4">
          {aboutMe.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2130] mb-6">
          {aboutMe.title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#1e2130]/80 mb-4">
          {aboutMe.intro}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-[#1e2130]/80 mb-8">
          {aboutMe['speedrun-text']}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            href={speedrun['run-url']}
            text="My run on speedrun.com →"
            borderTBSize="1px"
            borderTBLine={NAVY}
            borderSideLine={NAVY}
            backgroundColor="#e1cf80"
            color={NAVY}
          />
          <Button
            href={speedrun['video-url']}
            text="Watch on YouTube →"
            borderTBSize="1px"
            borderTBLine={NAVY}
            borderSideLine={NAVY}
            backgroundColor="#edb7b3"
            color={NAVY}
          />
        </div>
      </div>

      {/* Vidéo + passions en orbite, sur les metaballs */}
      <div className="w-full lg:w-7/12 relative min-h-[420px] lg:min-h-[640px]">
        <div className="absolute inset-0">
          <MetaballBackground speed={0.5} bgColor="0.93, 0.91, 0.90" gradientColor="0.78, 0.76, 0.80" />
        </div>

        <div className="relative z-10 min-h-[420px] lg:min-h-[640px] flex flex-col items-center justify-center gap-8 px-6 py-12 lg:py-0">
          {/* Vidéo légèrement inclinée, avec son étiquette */}
          <div className="relative w-full max-w-xl lg:w-[64%] -rotate-2">
            <VideoPreview speedrun={speedrun} />
            <div
              className="absolute -top-5 -right-4 md:-right-8 rotate-6 rounded-full px-5 py-2 shadow-md"
              style={{ backgroundColor: '#e1cf80', border: `1px solid ${NAVY}` }}
            >
              <span className="font-bold text-[#1e2130] tabular-nums">{speedrun.time}</span>
              <span className="text-sm text-[#1e2130]/70 ml-2">{speedrun.category}</span>
            </div>
          </div>

          {/* Grand écran : les passions gravitent autour */}
          {hobbies.map((hobby, i) => {
            const o = ORBIT[i % ORBIT.length];
            return (
              <div key={hobby.name} className={`hidden lg:block absolute ${o.pos}`}>
                <HobbyPill
                  hobby={hobby}
                  className="orbit-float"
                  style={{
                    backgroundColor: o.bg,
                    '--tilt': o.tilt,
                    '--duration': o.duration,
                    '--delay': o.delay,
                    '--drift-x': o.drift[0],
                    '--drift-y': o.drift[1],
                  }}
                />
              </div>
            );
          })}

          {/* Mobile / tablette : nuage de pilules sous la vidéo */}
          <div className="lg:hidden flex flex-wrap justify-center gap-3">
            {hobbies.map((hobby, i) => (
              <HobbyPill
                key={hobby.name}
                hobby={hobby}
                compact
                style={{ backgroundColor: ORBIT[i % ORBIT.length].bg, transform: `rotate(${ORBIT[i % ORBIT.length].tilt})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
