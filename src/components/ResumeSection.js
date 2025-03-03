import React from 'react';
import { FaGraduationCap, FaServer, FaNetworkWired } from 'react-icons/fa';
import { DiReact, DiJava } from 'react-icons/di';
import { BsFillPencilFill } from 'react-icons/bs';
import { SiProxmox, SiMongodb, SiJira } from 'react-icons/si';

const ResumeSection = () => {
  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>
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
              <p>Minoring in Business Administration, GPA: 3.94</p>
              <p>Relevant coursework: Data Structures, Algorithms, Web & Mobile App Development, Agile Software Engineering, Databases, Data Mining.</p>
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
              <p>Managed over 500 campus devices using JAMF & Apple School Manager. Provided technical support for 200+ faculty & staff and administered Active Directory & Google Workspace accounts.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"><FaNetworkWired /></div>
            <div className="timeline-content">
              <h4>Student Network Administrator</h4>
              <h5>Abilene Christian University</h5>
              <p className="timeline-date">July 2023 - Present</p>
              <p>Configured network ports, resolved Layer 1 & Layer 2 issues, installed & maintained network hardware, and provided VoIP support for Zoom (Yealink) phones.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"><SiJira /></div>
            <div className="timeline-content">
              <h4>Information Technology Intern</h4>
              <h5>Kodiak Building Partners</h5>
              <p className="timeline-date">Jun 2024 - Aug 2024</p>
              <p>Developed key functionalities & documentation for an AI chatbot, integrated Jira API for ticketing, set up Power Automate workflows, and imaged systems with SmartDeploy.</p>
            </div>
          </div>
        </div>
        
        <div className="resume-section-header">
          <h3>Projects</h3>
        </div>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"><DiJava /></div>
            <div className="timeline-content">
              <h4>File Compression/Archive Utility</h4>
              <p>Developed a Java-based console application using Huffman & LZW Encoding for compression. Used Maven for build automation and Git for version control.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"><SiProxmox /></div>
            <div className="timeline-content">
              <h4>Home Lab Virtualization</h4>
              <p>Built a home lab with Proxmox, managing VMs, Active Directory, DNS, DHCP, Samba, pfSense firewall, VLAN segmentation, and Grafana for monitoring.</p>
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
