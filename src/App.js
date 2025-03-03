import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from './Yejun_headshot.jpg';

// Import section components
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import PhotosSection from './components/PhotosSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';

function App() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('about');

  // Function to handle navigation clicks
  const handleNavClick = (e, section) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveSection(section);
  };

  // Scroll to the active section when it changes
  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="app-container">
      <div className="portfolio-container">
        <div className="sidebar">
          <div className="profile-container">
            <div className="avatar-container">
              <img src={logo} alt="Profile" className="avatar" />
              <div className="online-indicator"></div>
            </div>
            <h2 className="name">Jun Kim</h2>
            <p className="profession">Aspiring IT Professional</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <div className="contact-label">EMAIL</div>
                <div className="contact-value">realyejunkim@gmail.com</div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="icon" />
                <div className="contact-label">PHONE</div>
                <div className="contact-value">+1 662-298-6132</div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <div className="contact-label">LOCATION</div>
                <div className="contact-value">Abilene, TX</div>
              </div>
            </div>
            
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/yejun-kim/" className="social-icon"><FaLinkedin /></a>
              <a href="https://github.com/yjk01" className="social-icon"><FaGithub /></a>
              <a href="https://www.google.com/" className="social-icon"><FaGoogle /></a>
              <a href="https://www.x.com/" className="social-icon"><FaTwitter /></a>
            </div>
          </div>
        </div>
        
        <div className="main-content">
          <nav className="navigation">
            <ul>
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#" onClick={(e) => handleNavClick(e, 'about')}>About</a>
              </li>
              <li className={activeSection === 'resume' ? 'active' : ''}>
                <a href="#" onClick={(e) => handleNavClick(e, 'resume')}>Resume</a>
              </li>
              <li className={activeSection === 'portfolio' ? 'active' : ''}>
                <a href="#" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
              </li>
              <li className={activeSection === 'photos' ? 'active' : ''}>
                <a href="#" onClick={(e) => handleNavClick(e, 'photos')}>Photos</a>
              </li>
            </ul>
          </nav>
          
          <div className="sections-container">
            {/* Show only the active section */}
            {activeSection === 'about' && (
              <>
                <AboutSection />
                <ServicesSection />
                <SkillsSection />
              </>
            )}
            
            {activeSection === 'resume' && <ResumeSection />}
            {activeSection === 'portfolio' && <PortfolioSection />}
            {activeSection === 'photos' && <PhotosSection />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;