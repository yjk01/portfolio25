import React from 'react';
import photo1 from '../photos/photo_1.jpg';
import photo2 from '../photos/photo_2.jpg';
import photo3 from '../photos/photo_3.jpg';
import photo4 from '../photos/photo_4.jpg';
import photo5 from '../photos/photo_5.jpg';
import photo6 from '../photos/photo_6.jpg';
import photo7 from '../photos/photo_7.jpg';
import photo8 from '../photos/photo_8.jpg';
import photo9 from '../photos/photo_9.jpg';
import photo10 from '../photos/photo_10.jpg';

const PhotosSection = () => {
  // Example photo gallery data
  const photos = [
    { id: 1, src: photo1, title: "Nice" },
    { id: 2, src: photo2, title: "NIce" },
    { id: 3, src: photo3, title: "NICe" },
    { id: 4, src: photo4, title: "NICE" },
    { id: 5, src: photo5, title: "Nicee" },
    { id: 6, src: photo6, title: "NIcee" },
    { id: 7, src: photo7, title: "NICee" },
    { id: 8, src: photo8, title: "NICEe" },
    { id: 9, src: photo9, title: "NICEEE" },
    { id: 10, src: photo10, title: "nice" }
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