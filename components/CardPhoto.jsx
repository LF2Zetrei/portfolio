import React from 'react';

const CardPhoto = ({
  imageUrl,
  width = '300px',
  height = '400px',
  backgroundColor = '#eee',
}) => {
  const cardStyle = {
    width,
    height,
    backgroundColor,
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return <div style={cardStyle} />;
};

export default CardPhoto;