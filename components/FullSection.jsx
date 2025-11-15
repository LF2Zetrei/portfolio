import React from 'react';

const FullSection = ({
  height,
  bgColor,
  bgImage,
  children
}) => {
  const style = (bgColor, bgImage) => ({
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
      <div style={halfStyle(bgColor, bgColor)}>{children}</div>
    </section>
  );
};

export default SplitSection;