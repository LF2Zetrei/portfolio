'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/images/about/charlie1.jpg',
  '/images/about/charlie2.png',
  '/images/about/charlie3.png',
  '/images/about/charlie4.png',
];

export default function WhoIsLucas() {
  const [todayImage, setTodayImage] = useState(null);

  useEffect(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
    );
    setTodayImage(images[dayOfYear % images.length]);
  }, []);

  if (!todayImage) return null;

  return (
    <div className="w-full px-6 py-12 md:px-24 md:py-16" style={{ backgroundColor: "#ece9e5" }}>

      {/* Titre */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-[#1e2130]/40 mb-2">
          About me
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e2130]">
          Can you guess my hobbies ? 
        </h2>
        <p className="text-sm text-[#1e2130]/60 mt-2">
          A new scene every day — explore it to learn a bit more about who I am.
        </p>
      </div>

      {/* Image */}
      <div
        className="relative w-full rounded-xl overflow-hidden"
        style={{ aspectRatio: '16/9' }}
      >
        <Image
          src={todayImage}
          alt="A scene about Lucas"
          fill
          sizes="100vw"
          className="object-cover"
          quality={95}
          priority
        />
      </div>

    </div>
  );
}