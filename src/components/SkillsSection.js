import React from 'react';
import { FaPython, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiJira, SiPostman } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { BsFillPencilFill } from 'react-icons/bs';

const SkillsSection = () => {
  return (
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
  );
};

export default SkillsSection;