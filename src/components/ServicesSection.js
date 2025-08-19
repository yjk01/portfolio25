import React from 'react';
import { FaGraduationCap, FaServer } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { BsFillPencilFill } from 'react-icons/bs';
import { SiFirebase } from 'react-icons/si';

const ServicesSection = () => {
  return (
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
             Computer Science Graduate from Abilene Christian University.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <div className="icon-container">
              <FaServer />
            </div>
          </div>
          <h3 className="service-title">IT infrastructure Management</h3>
          <p className="service-description">
            Experience in managing IT infrastructure, including network administration and system support.
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
            Passionate about web development with a focus on creating responsive and user-friendly applications.
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
  );
};

export default ServicesSection;