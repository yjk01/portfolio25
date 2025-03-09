import React from 'react';
import huffman from '../photos/Huffman.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Proxmox Homeserver",
      category: "Web & Mobile Development",
      image: huffman,
      description: "A Proxmox-based home server setup to self host applications and practice system administration fundementals."
    },
    {
      id: 2,
      title: "LZW / Huffman Compression",
      category: "Web Development",
      image: huffman, // Using the same image temporarily - should be replaced with a specific image
      description: "A java console application that implements LZW and Huffman compression algorithms for efficient data storage and transmission."
    }
  ];

  return (
    <section className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="underline"></div>
      
      <div className="portfolio-filter">
        <button className="filter-item active">All</button>
        <button className="filter-item">Web</button>
        <button className="filter-item">Mobile</button>
        <button className="filter-item">Design</button>
      </div>
      
      <div className="portfolio-grid">
        {projects.map(project => (
          <div className="portfolio-item" key={project.id}>
            <div className="portfolio-img-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio-img" 
              />
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;