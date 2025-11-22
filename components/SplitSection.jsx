"use client";

import React, { useEffect, useRef, useState } from "react";
import "@/transitions/transitions.css"

const paddingToString = ({ top = "0", right = "0", bottom = "0", left = "0" }) =>
  `${top} ${right} ${bottom} ${left}`;

const SplitSection = ({
  className = 'none',
  leftBgColor,
  rightBgColor,
  leftBgImage,
  rightBgImage,
  showDivider = false,
  leftContent,
  rightContent,
  leftPadding = { top: "0", right: "0", bottom: "0", left: "0" },
  rightPadding = { top: "0", right: "0", bottom: "0", left: "0" },
  borderTopStyle = { line: "solid", size: "1px", color: "#000" },
  borderBottomStyle = { line: "solid", size: "1px", color: "#000" },
}) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      const leftHeight = leftRef.current?.offsetHeight || 0;
      const rightHeight = rightRef.current?.offsetHeight || 0;
      setHeight(Math.max(leftHeight, rightHeight));
    }

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [leftContent, rightContent]);

  const halfStyle = (bgColor, bgImage, padding) => ({
    flex: 1,
    height: height ? `${height}px` : "auto",
    backgroundColor: bgColor,
    backgroundImage: bgImage ? `url(${bgImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: paddingToString(padding),
    boxSizing: "border-box",
  });

  const dividerStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "1px",
    backgroundColor: "#000",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const borderTop = `${borderTopStyle.size} ${borderTopStyle.line} ${borderTopStyle.color}`;
  const borderBottom = `${borderBottomStyle.size} ${borderBottomStyle.line} ${borderBottomStyle.color}`;

  return (
    <section
      className={className}
      style={{
        display: "flex",
        width: "100%",
        position: "relative",
        borderTop,
        borderBottom,
        alignItems: "stretch",
      }}
    >
      <div
        
        style={halfStyle(leftBgColor, leftBgImage, leftPadding)}
      >
        {leftContent}
      </div>
      <div
        style={halfStyle(rightBgColor, rightBgImage, rightPadding)}
      >
        {rightContent}
      </div>
      {showDivider && <div style={dividerStyle} />}
    </section>
  );
};

export default SplitSection;