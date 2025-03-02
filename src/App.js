import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPython, FaJsSquare, FaGitAlt, FaGraduationCap } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiJira, SiPostman } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { BsFillPencilFill } from 'react-icons/bs';
import logo from './Yejun_headshot.jpg';

function App() {
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
              <li className="active"><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#photos">Photos</a></li>
            </ul>
          </nav>
          
          <section className="about-section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="underline"></div>
            
            <p className="about-text">
              Hello! I'm Jun Kim, an aspiring IT professional with a passion for creating innovative solutions. With a strong foundation in computer science and a keen eye for detail, I thrive on transforming ideas into reality through technology.
            </p>
            
            <p className="about-text">
              My journey in the tech world has been marked by a relentless pursuit of knowledge and a commitment to excellence. I believe in the power of collaboration and continuous learning, always seeking new challenges to expand my skill set.
            </p>
          </section>
          
          <section className="services-section">
            <h2 className="section-title">What I'm Doing</h2>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <div className="icon-container">
                    <FaGraduationCap />
                  </div>
                </div>
                <h3 className="service-title">Computer Science Degree</h3>
                <p className="service-description">
                  Senior Computer Science Student at Abilene Christian University.
                </p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <div className="icon-container">
                    <DiReact />
                  </div>
                </div>
                <h3 className="service-title">Web Development</h3>
                <p className="service-description">
                  High-quality development of sites at the professional level.
                </p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <div className="icon-container">
                    <BsFillPencilFill />
                  </div>
                </div>
                <h3 className="service-title">UI/UX Design</h3>
                <p className="service-description">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <div className="icon-container">
                    <SiFirebase />
                  </div>
                </div>
                <h3 className="service-title">Backend Development</h3>
                <p className="service-description">
                  High-performance backend services designed for scalability and seamless user experience.
                </p>
              </div>
            </div>
          </section>
          
          <section className="skills-section">
            <h2 className="section-title">Skills</h2>
            
            <div className="skills-grid">
              <div className="skills-track">
                <div className="skill-card">
                  <SiFlutter className="skill-icon flutter" />
                </div>
                
                <div className="skill-card">
                  <DiReact className="skill-icon react" />
                </div>
                
                <div className="skill-card">
                  <SiFirebase className="skill-icon firebase" />
                </div>
                
                <div className="skill-card">
                  <BsFillPencilFill className="skill-icon design" />
                </div>
                
                <div className="skill-card">
                  <FaPython className="skill-icon python" style={{ color: '#3776AB' }} />
                </div>
                
                <div className="skill-card">
                  <FaJsSquare className="skill-icon javascript" style={{ color: '#F7DF1E' }} />
                </div>
                
                <div className="skill-card">
                  <FaGitAlt className="skill-icon git" style={{ color: '#F05032' }} />
                </div>
                
                <div className="skill-card">
                  <SiJira className="skill-icon jira" style={{ color: '#0052CC' }} />
                </div>
                
                <div className="skill-card">
                  <SiPostman className="skill-icon postman" style={{ color: '#FF6C37' }} />
                </div>

                {/* Duplicate first few skills to make the animation loop seamlessly */}
                <div className="skill-card">
                  <SiFlutter className="skill-icon flutter" />
                </div>
                
                <div className="skill-card">
                  <DiReact className="skill-icon react" />
                </div>
                
                <div className="skill-card">
                  <SiFirebase className="skill-icon firebase" />
                </div>
                
                <div className="skill-card">
                  <BsFillPencilFill className="skill-icon design" />
                </div>
              </div>
            </div>
            
            <div className="progress-bars">
              <div className="progress-bar active"></div>
              <div className="progress-bar"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;