'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ images }) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [direction, setDirection] = useState(null); // 'left' | 'right'

  if (!images || images.length === 0) return null;

  const prev = () => {
    setDirection('right');
    setCurrent((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setDirection('left');
    setCurrent((i) => (i + 1) % images.length);
  };

  // Calcule la position de chaque image par rapport à l'image courante
  const getImageStyle = (idx) => {
    const total = images.length;
    const diff = ((idx - current + total) % total);
    const normalizedDiff = diff > total / 2 ? diff - total : diff;
    // normalizedDiff : -n (à gauche) ... 0 (actif) ... +n (à droite)

    const absD = Math.abs(normalizedDiff);
    const side = normalizedDiff > 0 ? 1 : -1;

    if (normalizedDiff === 0) {
      // Image active — au premier plan
      return {
        zIndex: 10,
        transform: 'translateX(0%) scale(1)',
        opacity: 1,
        filter: 'none',
      };
    }

    if (absD === 1) {
      // Images directement adjacentes
      return {
        zIndex: 10 - absD,
        transform: `translateX(${side * 45}%) scale(0.85)`,
        opacity: 0.6,
        filter: 'brightness(0.6)',
      };
    }

    if (absD === 2) {
      return {
        zIndex: 10 - absD,
        transform: `translateX(${side * 70}%) scale(0.72)`,
        opacity: 0.35,
        filter: 'brightness(0.4)',
      };
    }

    // Images trop loin — cachées
    return {
      zIndex: 0,
      transform: `translateX(${side * 80}%) scale(0.6)`,
      opacity: 0,
      filter: 'brightness(0.2)',
      pointerEvents: 'none',
    };
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-6">

        {/* Pile de cartes */}
        <div className="relative w-full flex items-center justify-center overflow-hidden"
             style={{ height: '280px' }}>

          {images.map((img, idx) => {
            const style = getImageStyle(idx);
            return (
              <div
                key={idx}
                onClick={() => idx === current && setModalOpen(true)}
                style={{
                  position: 'absolute',
                  width: '60%',
                  aspectRatio: '16/9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: idx === current ? 'pointer' : 'default',
                  backgroundColor: '#1e2130',
                  ...style,
                }}
              >
                <Image
                  src={img}
                  alt={`Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-contain"
                  quality={idx === current ? 90 : 50}
                  priority={idx === current}
                />
              </div>
            );
          })}
        </div>

        {/* Flèches uniquement */}
        {images.length > 1 && (
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[#1e2130] text-white text-xl
                         flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              ‹
            </button>
            <span className="text-sm text-[#1e2130]/50">
              {current + 1} / {images.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#1e2130] text-white text-xl
                         flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Modal plein écran */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="fixed top-4 right-6 text-white text-4xl z-50 bg-transparent border-none cursor-pointer"
            onClick={() => setModalOpen(false)}
          >
            &times;
          </button>
          <div
            className="relative w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt="Enlarged view"
              fill
              sizes="90vw"
              quality={95}
              className="object-contain"
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="fixed left-4 text-white text-4xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="fixed right-4 text-white text-4xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}