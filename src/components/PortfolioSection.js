import React from 'react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      category: "Web Development",
      image: "portfolio-placeholder.jpg",
      description: "A responsive personal portfolio website built with React."
    },
    {
      id: 2,
      title: "E-commerce Application",
      category: "Web & Mobile Development",
      image: "ecommerce-placeholder.jpg",
      description: "A full-stack e-commerce platform with user authentication and payment processing."
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Mobile Development",
      image: "task-app-placeholder.jpg",
      description: "A Flutter-based task management application with Firebase backend."
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
              <img src={`/placeholder-images/${project.image}`} alt={project.title} className="portfolio-img" />
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