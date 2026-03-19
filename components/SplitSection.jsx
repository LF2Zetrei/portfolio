"use client";
import React from "react";
import Image from "next/image";
import "@/transitions/transitions.css";

const SplitSection = ({
  className = "",
  leftBgColor,
  rightBgColor,
  leftBgImage = "",
  rightBgImage = "",
  showDivider = false,
  leftContent,
  rightContent,
  borderTopStyle = { line: "solid", size: "1px", color: "#000" },
  borderBottomStyle = { line: "solid", size: "1px", color: "#000" },
}) => {
  const borderTop = `${borderTopStyle.size} ${borderTopStyle.line} ${borderTopStyle.color}`;
  const borderBottom = `${borderBottomStyle.size} ${borderBottomStyle.line} ${borderBottomStyle.color}`;

  const Half = ({ bgColor, bgImage, content, side }) => (
    <div
      className="relative w-full md:w-1/2 flex justify-center items-center
                 px-4 py-8 md:px-8 box-border min-h-[300px] md:min-h-[400px]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Image Next.js en background */}
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          quality={75}
          loading="lazy"
        />
      )}
      {/* Contenu par dessus l'image */}
      {content && (
        <div className="relative z-10 w-full">
          {content}
        </div>
      )}
    </div>
  );

  return (
    <section
      className={`flex flex-col md:flex-row w-full ${className}`}
      style={{ borderTop, borderBottom, position: "relative" }}
    >
      <Half bgColor={leftBgColor} bgImage={leftBgImage} content={leftContent} side="left" />
      <Half bgColor={rightBgColor} bgImage={rightBgImage} content={rightContent} side="right" />

      {showDivider && (
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          width: "1px", backgroundColor: "#000",
          left: "50%", transform: "translateX(-50%)",
        }} />
      )}
    </section>
  );
};

export default SplitSection;