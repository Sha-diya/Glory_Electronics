// src/Gallery.jsx
import React from "react";

const Gallery = () => {
  const images = Array.from({ length: 20 }, (_, i) => 
    `/img${i + 1}.jpg`
  );

  return (
    <div className="gallery-page">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
