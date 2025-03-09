import React from 'react';
import photo12 from '../photos/photo_12.jpg';
import photo13 from '../photos/photo_13.jpg';
import photo14 from '../photos/photo_14.jpg';
import photo15 from '../photos/photo_15.jpg';
import photo16 from '../photos/photo_16.jpg';
import photo17 from '../photos/photo_17.jpg';
import photo18 from '../photos/photo_18.jpg';
import photo19 from '../photos/photo_19.jpg';
import photo20 from '../photos/photo_20.jpg';
import photo21 from '../photos/photo_21.jpg';

const PhotosSection = () => {
  // Example photo gallery data
  const photos = [
    { id: 11, src: photo12, title: "Herman Lake, CO" },
    { id: 12, src: photo13, title: "Mt. Evans, CO" },
    { id: 13, src: photo14, title: "Longbeach, CA" },
    { id: 14, src: photo15, title: "Abilene, TX" },
    { id: 15, src: photo16, title: "Abilene, TX" },
    { id: 16, src: photo17, title: "6942, South Korea" },
    { id: 17, src: photo18, title: "Seoul, South Korea" },
    { id: 18, src: photo19, title: "Incheon, South Korea" },
    { id: 19, src: photo20, title: "Incheon, South Korea" },
    { id: 20, src: photo21, title: "Incheon, South Korea" }
  ];

  return (
    <section className="photos-section">
      <h2 className="section-title">Photos</h2>
      <div className="underline"></div>
      
      <div className="gallery-grid">
        {photos.map(photo => (
          <div className="gallery-item" key={photo.id}>
            <img 
              src={photo.src} 
              alt={photo.title} 
              className="gallery-img" 
            />
            <div className="gallery-caption">
              <h4>{photo.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotosSection;