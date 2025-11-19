"use client";

import { useDatas } from "@/hooks/useDatas";
import Media from "@/components/Media";

export default function Footer({
  backgroundColor = "#fff",
  paddingLeft = "20px",
  paddingRight = "20px",
  gap = "15px",
}) {
  const { socials, footer } = useDatas();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft,
        paddingRight,
        gap,
        boxSizing: "border-box",
        backgroundColor,
      }}
    >
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
  );
}