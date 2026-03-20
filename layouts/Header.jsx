'use client';
import Link from "next/link";
import Button from "@/components/Button";
import { useDatas } from "@/hooks/useDatas";
import { useEffect, useState } from "react";

export default function Header() {
  const { header } = useDatas();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setVisible(true);   // ← scroll vers le haut → affiche
      } else {
        setVisible(false);  // ← scroll vers le bas → cache
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!header) return null;

  return (
    <header
      style={{ backgroundColor: header.style["bg-color"] }}
      className={`fixed left-0 w-full z-50 px-4 py-3 md:px-12
                  flex items-center justify-between
                  transition-transform duration-300
                  bottom-0 md:bottom-auto md:top-0
                  ${visible 
                    ? 'translate-y-0' 
                    : 'translate-y-full md:-translate-y-full'}`}
    >
      <Link href="/">
        <p style={{ color: header.style["color"] }} className="m-0 text-xl font-semibold">
          {header.title}
        </p>
      </Link>

      <nav className="flex items-center gap-4 md:gap-8">
        <Link
          href={header["link-link"]}
          style={{ color: header.style["color"] }}
          className="text-sm md:text-base hover:underline"
        >
          {header["link-text"]}
        </Link>
        <Button
          href={header["button-link"]}
          text={header["button-text"]}
          borderTBSize="1px"
          backgroundColor={header.style["button-color"]}
          color={header.style["color"]}
          borderBTLine={header.style["borderBTLine"]}
        />
      </nav>
    </header>
  );
}