import React from 'react';

const FullSection = ({
  height,
  bgColor,
  bgImage,
  children,
  padding = "none",
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

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        position: 'relative',
      }}
    >
      <div style={style(bgColor, bgColor, padding)}>{children}</div>
    </section>
  );
};

export default FullSection;