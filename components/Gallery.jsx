'use client';

import React, { useState, useEffect, useCallback } from 'react';

const Gallery = ({ images }) => {
  const DISPLAY_COUNT = 6;

  const getNextImages = useCallback(() => {
    if (images.length <= DISPLAY_COUNT) {
      return images;
    }
    const offset = Date.now() / 60000; // minutes elapsed
    const startIndex = Math.floor(offset) % images.length;
    const selected = [];
    for (let i = 0; i < DISPLAY_COUNT; i++) {
      selected.push(images[(startIndex + i) % images.length]);
    }
    return selected;
  }, [images]);

  const [displayImages, setDisplayImages] = useState(getNextImages());
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayImages(getNextImages());
    }, 60000);

    return () => clearInterval(intervalId);
  }, [getNextImages]);

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 200px)',
    gap: '16px',
    maxWidth: '900px',
    margin: '40px auto',
    backgroundColor: 'transparent',
    borderRadius: '0',
    overflow: 'hidden',
    boxShadow: 'none',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0',
    boxShadow: 'none',
    transition: 'transform 0.4s ease',
    cursor: 'pointer',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  // Modal styles
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalImageStyle = {
    maxWidth: '90vw',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(255,255,255,0.5)',
  };

  const closeButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '30px',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1001,
    userSelect: 'none',
    background: 'transparent',
    border: 'none',
  };

  return (
    <>
      <div style={galleryStyle}>
        {displayImages.map((imgUrl, idx) => (
          <img
            key={idx}
            src={imgUrl}
            alt={`Gallery image ${idx + 1}`}
            style={imageStyle}
            loading="lazy"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setModalImage(imgUrl)}
            draggable={false}
          />
        ))}
      </div>

      {modalImage && (
        <div
          style={modalOverlayStyle}
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            style={closeButtonStyle}
            aria-label="Close image modal"
            onClick={(e) => {
              e.stopPropagation();
              setModalImage(null);
            }}
          >
            &times;
          </button>
          <img
            src={modalImage}
            alt="Enlarged gallery view"
            style={modalImageStyle}
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;