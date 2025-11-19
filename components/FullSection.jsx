"use client";

import React from 'react';

const paddingToString = ({ top = "0", right = "0", bottom = "0", left = "0" }) =>
  `${top} ${right} ${bottom} ${left}`;

const FullSection = ({
  height = "auto",
  bgColor,
  bgImage,
  children,
  padding = { top: "0", right: "0", bottom: "0", left: "0" },
  borderTopStyle = { line: "solid", size: "2px", color: "#000" },
  borderBottomStyle = { line: "solid", size: "2px", color: "#000" },
}) => {
  const containerHeight = typeof height === "number" ? `${height}px` : height;

  const style = {
    flex: 1,
    height: "100%",
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
  };

  const borderTop = `${borderTopStyle.size} ${borderTopStyle.line} ${borderTopStyle.color}`;
  const borderBottom = `${borderBottomStyle.size} ${borderBottomStyle.line} ${borderBottomStyle.color}`;

  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        height: containerHeight,
        position: "relative",
        borderTop,
        borderBottom,
      }}
    >
      <div style={style}>{children}</div>
    </section>
  );
};

export default FullSection;