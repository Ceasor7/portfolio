'use client';
import { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md z-10"
        onClick={prevImage}
      >
        <img src="/left.svg" className="h-7 w-7" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md z-10"
        onClick={nextImage}
      >
        <img src="/right.svg" className="h-7 w-7" />
      </button>
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="h-auto w-full rounded-xl"
      />
    </div>
  );
};

export default ImageCarousel;
