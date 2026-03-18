import React from 'react';

const CardPhoto = ({
  imageUrl,
  backgroundColor = '#eee',
}) => {
  return (
    <div
      style={{ backgroundColor, backgroundImage: `url(${imageUrl})` }}
      className="w-64 h-80 sm:w-72 sm:h-96 md:w-70 md:h-[400px]
                 rounded-xl overflow-hidden
                 bg-cover bg-center
                 max-w-full"
    />
  );
};

export default CardPhoto;