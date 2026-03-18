"use client";
import React from "react";
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
  leftPadding = { top: "0", right: "0", bottom: "0", left: "0" },
  rightPadding = { top: "0", right: "0", bottom: "0", left: "0" },
  borderTopStyle = { line: "solid", size: "1px", color: "#000" },
  borderBottomStyle = { line: "solid", size: "1px", color: "#000" },
}) => {
  const borderTop = `${borderTopStyle.size} ${borderTopStyle.line} ${borderTopStyle.color}`;
  const borderBottom = `${borderBottomStyle.size} ${borderBottomStyle.line} ${borderBottomStyle.color}`;

  const halfStyle = (bgColor, bgImage) => ({
    backgroundColor: bgColor,
    backgroundImage: bgImage ? `url(${bgImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <section
      className={`flex flex-col md:flex-row w-full ${className}`}
      style={{ borderTop, borderBottom, position: "relative" }}
    >
      {/* Colonne gauche */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center
                   px-4 py-8 md:px-8 lg:px-12 box-border"
        style={halfStyle(leftBgColor, leftBgImage)}
      >
        {leftContent}
      </div>

      {/* Colonne droite */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center
                   px-4 py-8 md:px-8 lg:px-12 box-border"
        style={halfStyle(rightBgColor, rightBgImage)}
      >
        {rightContent}
      </div>

      {showDivider && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "1px",
            backgroundColor: "#000",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
    </section>
  );
};

export default SplitSection;