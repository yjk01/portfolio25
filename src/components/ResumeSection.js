import React from 'react';
import { FaGraduationCap, FaServer, FaNetworkWired } from 'react-icons/fa';
import { DiReact, DiJava } from 'react-icons/di';
import { BsFillPencilFill } from 'react-icons/bs';
import { SiProxmox, SiMongodb, SiJira } from 'react-icons/si';

const ResumeSection = () => {
  return (
    <section className="resume-section">
      <h2 className="section-title">Experience</h2>
      <div className="underline"></div>
      
      <div className="resume-container">
        <div className="resume-section-header">
          <h3>Education</h3>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"><FaGraduationCap /></div>
            <div className="timeline-content">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5>Abilene Christian University</h5>
              <p className="timeline-date">May 2025 (Anticipated)</p>
              <ul>
                <li>GPA: 3.94</li>
                <li>Dean's List: Fall 2020 - Present</li>
                <li>Minor: Business Administration</li>
                <li>Relevant Coursework: Programming 2: Data Structures, Object Oriented Programming, Design and Analysis of Algorithms,
                Web App Development, Mobible App Development, Software Engineering: Agile Methods, Intro to DBMS, Human Computer Interaction, Data Mining,
                Programming Languages, Intro to AI</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-section-header">
          <h3>Experience</h3>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"><FaServer /></div>
            <div className="timeline-content">
              <h4>Student System Administrator</h4>
              <h5>Abilene Christian University</h5>
              <p className="timeline-date">Jan 2020 - Present</p>
              <ul>
                <li>Deployed and Managed over 300+ Dell and Apple devices on campus using tools such as KACE, JAMF, and Apple School Manager.</li>
                <li>Provided technical support for 200+ faculty & staff and administered Active Directory & Google Workspace accounts.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"><FaNetworkWired /></div>
            <div className="timeline-content">
              <h4>Student Network Administrator</h4>
              <h5>Abilene Christian University</h5>
              <p className="timeline-date">July 2023 - Present</p>
              <ul>
                <li>Configured and activated network ports, troubleshooting Layer 1 and Layer 2 connectivity issues using network switches, cable tracing tools, and network testers.</li>
                <li>Installed, maintained, and decommisioned network hardware, including wireless access points, structured cabling, and UPS battery backup systems.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"><SiJira /></div>
            <div className="timeline-content">
              <h4>Information Technology Intern</h4>
              <h5>Kodiak Building Partners</h5>
              <p className="timeline-date">Jun 2024 - Aug 2024</p>
              <ul>
                <li>Developed key functionalities and comprehensive documentation for an IT support AI chatbot.</li>
                <li>Configured Azure authentication, intergrated Jira API for ticket handling, and set up Power Automate flows to support future automation and deployment.</li>
                <li>Imaged 40+ devices to meet company standards, maintaining consistency and system integrity by utlizing tools like SmartDeploy and Jira.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-section-header">
          <h3>Certifications</h3>
        </div>
        
        <div className="certifications">
          <div className="certification-item">
            <BsFillPencilFill className="certification-icon" />
            <div className="certification-details">
              <h4>Testout Security Pro</h4>
            </div>
          </div>
          <div className="certification-item">
            <BsFillPencilFill className="certification-icon" />
            <div className="certification-details">
              <h4>Testout Network Pro</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
