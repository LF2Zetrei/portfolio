"use client";
import React from "react";

const FullSection = ({
  height = "auto",
  bgColor,
  bgImage = "",
  children,
  className = "",
  borderTopStyle = { line: "solid", size: "2px", color: "#000" },
  borderBottomStyle = { line: "solid", size: "2px", color: "#000" },
}) => {
  const containerHeight = typeof height === "number" ? `${height}px` : height;
  const borderTop = `${borderTopStyle.size} ${borderTopStyle.line} ${borderTopStyle.color}`;
  const borderBottom = `${borderBottomStyle.size} ${borderBottomStyle.line} ${borderBottomStyle.color}`;

  return (
    <section
      className={`w-full flex ${className}`}
      style={{ height: containerHeight, borderTop, borderBottom, position: "relative" }}
    >
      <div
        className="w-full flex justify-center items-center px-4 py-6 md:px-8 md:py-10 box-border"
        style={{
          backgroundColor: bgColor,
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default FullSection;