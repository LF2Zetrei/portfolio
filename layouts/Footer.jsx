"use client";
import { useDatas } from "@/hooks/useDatas";
import Media from "@/components/Media";

export default function Footer({ backgroundColor = "#fff" }) {
  const { socials } = useDatas();

  return (
    <footer
      style={{ backgroundColor }}
      className="w-full flex flex-col items-center py-4"
    >
      {/* Socials */}
      <div className="flex flex-wrap justify-center items-center gap-4 w-full px-4 md:px-12">
        {socials.map((s, index) => (
          <Media
            key={index}
            url={s.url}
            icon={s.icon}
            name={s.name}
            iconColor={s.style["icon-color"]}
            nameColor={s.style["name-color"]}
            descriptionColor={s.style.color}
          />
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-sm px-4 mt-2">
        © Thank you Pierre for the illustration.
      </p>
    </footer>
  );
}