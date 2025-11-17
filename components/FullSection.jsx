import React from 'react';

const FullSection = ({
  height,
  bgColor,
  bgImage,
  children,
  padding = "none",
  borderTopStyle = { line: "solid", size: "2px", color: "#000" },
  borderBottomStyle = { line: "solid", size: "2px", color: "#000" },
}) => {
  const style = (bgColor, bgImage, padding) => ({
    flex: 1,
    height: '100%',
    backgroundColor: bgColor,
    backgroundImage: bgImage ? `url(${bgImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: padding,
  });

  const borderTop = `${borderTopStyle.size} ${borderTopStyle.line} ${borderTopStyle.color}`;
  const borderBottom = `${borderBottomStyle.size} ${borderBottomStyle.line} ${borderBottomStyle.color}`;

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        position: 'relative',
        borderTop,
        borderBottom,
      }}
    >
      <div style={style(bgColor, bgImage, padding)}>{children}</div>
    </section>
  );
};

export default FullSection;