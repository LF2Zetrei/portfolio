import React from 'react';

const SplitSection = ({
  height,
  leftBgColor,
  rightBgColor,
  leftBgImage,
  rightBgImage,
  showDivider = false,
  leftContent,
  rightContent,
  padding = "none"
}) => {
  const halfStyle = (bgColor, bgImage) => ({
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
    padding,
  });

  const dividerStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '1px',
    backgroundColor: '#000',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <section
      style={{
        display: 'flex',
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        position: 'relative',
      }}
    >
      <div style={halfStyle(leftBgColor, leftBgImage)}>{leftContent}</div>
      <div style={halfStyle(rightBgColor, rightBgImage)}>{rightContent}</div>
      {showDivider && <div style={dividerStyle} />}
    </section>
  );
};

export default SplitSection;