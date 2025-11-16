'use client';

import React, { useState, useEffect, useCallback } from 'react';
import CardPhoto from './CardPhoto';

const Gallery = ({ images }) => {
  const getRandomImages = useCallback(() => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }, [images]);

  const [selectedImages, setSelectedImages] = useState(getRandomImages());

  const imageSizes = [
    { width: '180px', height: '120px' },
    { width: '140px', height: '210px' },
    { width: '220px', height: '160px' },
    { width: '160px', height: '160px' },
    { width: '200px', height: '140px' },
    { width: '150px', height: '190px' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImages(getRandomImages());
    }, 60000);

    return () => clearInterval(intervalId);
  }, [getRandomImages]);

  const galleryStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
    maxWidth: '900px',
    margin: 'auto',
  };

  return (
    <div style={galleryStyle}>
      {imageSizes.map((size, idx) => (
        <CardPhoto
          key={idx}
          imageUrl={selectedImages[idx]}
          width={size.width}
          height={size.height}
          backgroundColor="transparent"
        />
      ))}
    </div>
  );
};

export default Gallery;