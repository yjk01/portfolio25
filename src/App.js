import React, { useState, useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from './Yejun_headshot.jpg';
import logo1 from './memoji.png';

// Import section components
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import PhotosSection from './components/PhotosSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import Avatar3D from './components/Avatar3D';

function App() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (e, section) => {
    e.preventDefault();
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
            <Avatar3D imageUrl={logo1} />
            
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
                <div className="contact-value">+1 ***-***-****</div>
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
                <a href="#" onClick={(e) => handleNavClick(e, 'resume')}>Experience</a>
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