import React, { useState } from 'react';
import huffman from '../photos/Huffman.jpg';
import ProjectDetailModal from './ProjectDetailModal';

const PortfolioSection = () => {
  // State for the modal
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Project data - this acts as a registry for our markdown files
  const projects = [
    {
      id: 'proxmox-homeserver',
      title: "Proxmox Homeserver",
      category: "System Administration",
      image: huffman,
      description: "A Proxmox-based home server setup to self host applications and practice system administration fundamentals."
    },
    {
      id: 'ai-chatbot',
      title: "AI Chatbot",
      category: "AI & Automation",
      image: huffman,
      description: "A Microsoft Copilot Studio based AI chatbot for IT services. Utilized Azure, Jira API, and Power Automate."
    },
    {
      id: 'compression-algorithms',
      title: "LZW / Huffman Compression",
      category: "Software Development",
      image: huffman,
      description: "A java console application that implements LZW and Huffman compression algorithms for efficient data storage and transmission."
    },
    {
      id: 'cramvas',
      title: "Cramvas",
      category: "Web Development",
      image: huffman,
      description: "A simple Web interface designed to help students study using quizzes from Canvas."
    },
    {
      id: 'macro-tracker',
      title: "Macro Tracker",
      category: "Mobile Development",
      image: huffman,
      description: "A kotlin based android app designed to track personal macros through out the day."
    }
  ];

  // Open modal with specific project
  const openProjectDetail = (projectId) => {
    setActiveProject(projectId);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeProjectDetail = () => {
    setIsModalOpen(false);
    setActiveProject(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="underline"></div>
      
      <div className="portfolio-filter">
        <button className="filter-item active">All</button>
        <button className="filter-item">Web</button>
        <button className="filter-item">Mobile</button>
        <button className="filter-item">System</button>
      </div>
      
      <div className="portfolio-grid">
        {projects.map(project => (
          <div 
            className="portfolio-item" 
            key={project.id}
            onClick={() => openProjectDetail(project.id)}
          >
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
      
      {/* Project Detail Modal */}
      <ProjectDetailModal 
        isOpen={isModalOpen}
        onClose={closeProjectDetail}
        projectId={activeProject}
      />
    </section>
  );
};

export default PortfolioSection;