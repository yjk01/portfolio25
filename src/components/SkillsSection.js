import React, { useState, useRef, useEffect } from 'react';
import { FaPython, FaJsSquare, FaGitAlt, FaNodeJs, FaLinux } from 'react-icons/fa';
import { SiFlutter, SiJira, SiPostman, SiCplusplus, SiPostgresql, SiExpress, SiApache, SiAdobephotoshop } from 'react-icons/si';
import { DiReact, DiJava } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';

const SkillsSection = () => {
  // References
  const skillsContainerRef = useRef(null);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);
  
  // State for tooltip and thumb size
  const [thumbWidth, setThumbWidth] = useState(20);
  const [hoverSkill, setHoverSkill] = useState(null);
  
  // Mutable ref values for scroll handling
  const dragInfo = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    thumbPosition: 0,
    maxThumbPosition: 0,
    contentWidth: 0,
    containerWidth: 0,
    scrollableDistance: 0
  });
  
  // Skills data
  const skills = [
    { 
      icon: <FaPython className="skill-icon python" style={{ color: '#3776AB' }} />, 
      name: "Python", 
      url: "https://www.python.org/" 
    },
    { 
      icon: <SiCplusplus className="skill-icon cplusplus" style={{ color: '#00599C' }} />, 
      name: "C++", 
      url: "https://isocpp.org/" 
    },
    { 
      icon: <DiReact className="skill-icon react" style={{color: '#61DAFB'}} />, 
      name: "React", 
      url: "https://reactjs.org/" 
    },
    { 
      icon: <FaJsSquare className="skill-icon javascript" style={{ color: '#F7DF1E' }} />, 
      name: "JavaScript", 
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
    },
    { 
      icon: <SiExpress className="skill-icon express" style={{ color: '#FFFFFF' }} />, 
      name: "Express", 
      url: "https://expressjs.com/" 
    },
    { 
      icon: <FaNodeJs className="skill-icon nodejs" style={{ color: '#339933' }} />, 
      name: "Node.js", 
      url: "https://nodejs.org/" 
    },
    { 
      icon: <DiJava className="skill-icon java" style={{ color: '#007396' }} />, 
      name: "Java", 
      url: "https://www.java.com/" 
    },
    { 
      icon: <SiPostgresql className="skill-icon postgres" style={{ color: '#336791' }} />, 
      name: "PostgreSQL", 
      url: "https://www.postgresql.org/" 
    },
    { 
      icon: <SiApache className="skill-icon apache" style={{ color: '#D22128' }} />, 
      name: "Apache", 
      url: "https://httpd.apache.org/" 
    },
    { 
      icon: <FaLinux className="skill-icon linux" style={{ color: '#FCC624' }} />, 
      name: "Linux", 
      url: "https://www.linux.org/" 
    },
    { 
      icon: <FaGitAlt className="skill-icon git" style={{ color: '#F05032' }} />, 
      name: "Git", 
      url: "https://git-scm.com/" 
    },
    { 
      icon: <SiJira className="skill-icon jira" style={{ color: '#0052CC' }} />, 
      name: "Jira", 
      url: "https://www.atlassian.com/software/jira" 
    },
    { 
      icon: <SiPostman className="skill-icon postman" style={{ color: '#FF6C37' }} />, 
      name: "Postman", 
      url: "https://www.postman.com/" 
    },
    { 
      icon: <SiAdobephotoshop className="skill-icon photoshop" style={{ color: '#31A8FF' }} />, 
      name: "Photoshop", 
      url: "https://www.adobe.com/products/photoshop.html" 
    }
  ];
  
  const updateScrollThumbPosition = () => {
    if (!skillsContainerRef.current || !thumbRef.current || dragInfo.current.isDragging) {
      return;
    }
    
    const container = skillsContainerRef.current;
    const contentWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;
    const scrollableDistance = contentWidth - containerWidth;
    
    // Calculate thumb width
    const newThumbWidth = Math.max(10, (containerWidth / contentWidth) * 100);
    setThumbWidth(newThumbWidth);
    
    // Calculate thumb position
    const maxPosition = 100 - newThumbWidth;
    const scrollPercentage = scrollableDistance > 0 
      ? container.scrollLeft / scrollableDistance 
      : 0;
    const thumbPosition = scrollPercentage * maxPosition;
    
    // Update thumb position directly
    thumbRef.current.style.width = `${newThumbWidth}%`;
    thumbRef.current.style.left = `${thumbPosition}%`;
    
    // Update dragInfo
    dragInfo.current.contentWidth = contentWidth;
    dragInfo.current.containerWidth = containerWidth;
    dragInfo.current.maxThumbPosition = maxPosition;
    dragInfo.current.scrollableDistance = scrollableDistance;
    dragInfo.current.thumbPosition = thumbPosition;
  };

  // Set up listeners for scroll and resize
  useEffect(() => {
    const container = skillsContainerRef.current;
    if (container) {
      // Initial setup
      updateScrollThumbPosition();
      
      // Event listeners
      container.addEventListener('scroll', updateScrollThumbPosition);
      window.addEventListener('resize', updateScrollThumbPosition);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateScrollThumbPosition);
        window.removeEventListener('resize', updateScrollThumbPosition);
      }
    };
  }, []);

  // Mouse wheel event handler for horizontal scrolling
  const handleWheel = (e) => {
    if (skillsContainerRef.current) {
      e.preventDefault();
      skillsContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  // Scrollbar thumb drag handlers
  const handleThumbMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    const dragData = dragInfo.current;
    dragData.isDragging = true;
    dragData.startX = e.clientX;
    
    document.body.style.cursor = 'grabbing';
    document.addEventListener('mousemove', handleThumbDrag);
    document.addEventListener('mouseup', handleThumbRelease);
  };

  const handleThumbDrag = (e) => {
    if (!dragInfo.current.isDragging || !scrollbarRef.current || !skillsContainerRef.current) {
      return;
    }
    
    const dragData = dragInfo.current;
    const scrollbar = scrollbarRef.current;
    const scrollbarRect = scrollbar.getBoundingClientRect();
    const scrollbarWidth = scrollbarRect.width;
    const container = skillsContainerRef.current;
    
    // Calculate movement delta in pixels
    const deltaX = e.clientX - dragData.startX;
    
    // Convert to percentage of scrollbar width
    const deltaPercentage = (deltaX / scrollbarWidth) * 100;
    
    // Calculate new thumb position with constraints
    let newThumbPosition = dragData.thumbPosition + deltaPercentage;
    newThumbPosition = Math.max(0, Math.min(dragData.maxThumbPosition, newThumbPosition));
    
    // Update thumb position visually
    thumbRef.current.style.left = `${newThumbPosition}%`;
    
    // Calculate and set the container scroll position
    const scrollPosition = (newThumbPosition / dragData.maxThumbPosition) * dragData.scrollableDistance;
    container.scrollLeft = scrollPosition;
    
    // Update drag info
    dragData.startX = e.clientX;
    dragData.thumbPosition = newThumbPosition;
  };

  const handleThumbRelease = () => {
    dragInfo.current.isDragging = false;
    document.body.style.cursor = '';
    document.removeEventListener('mousemove', handleThumbDrag);
    document.removeEventListener('mouseup', handleThumbRelease);
  };

  // Handle clicks on the scrollbar track
  const handleTrackClick = (e) => {
    // Don't process if the click was on the thumb
    if (e.target === thumbRef.current || !skillsContainerRef.current) {
      return;
    }
    
    const scrollbar = scrollbarRef.current;
    const scrollbarRect = scrollbar.getBoundingClientRect();
    const clickPosition = (e.clientX - scrollbarRect.left) / scrollbarRect.width;
    const container = skillsContainerRef.current;
    
    // Jump to the clicked position (center the thumb)
    const scrollPosition = clickPosition * dragInfo.current.scrollableDistance;
    container.scrollLeft = scrollPosition;
  };
  
  // Handler for skill icon click
  const handleSkillClick = (url) => {
    window.open(url, '_blank');
  };
  
  // Touch event handlers for mobile devices
  const handleTouchStart = (e) => {
    if (skillsContainerRef.current) {
      const touch = e.touches[0];
      const touchStartX = touch.clientX;
      const initialScrollLeft = skillsContainerRef.current.scrollLeft;
      
      const handleTouchMove = (moveEvent) => {
        const touchX = moveEvent.touches[0].clientX;
        const deltaX = touchStartX - touchX;
        skillsContainerRef.current.scrollLeft = initialScrollLeft + deltaX;
      };
      
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }
  };
  
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-scrollarea">
        <div 
          className="skills-container"
          ref={skillsContainerRef}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
        >
          <div className="skills-track">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                onMouseEnter={() => setHoverSkill(index)}
                onMouseLeave={() => setHoverSkill(null)}
                onClick={() => handleSkillClick(skill.url)}
              >
                {skill.icon}
                {hoverSkill === index && (
                  <div className="skill-tooltip">{skill.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className="scrollbar"
          ref={scrollbarRef}
          onClick={handleTrackClick}
        >
          <div 
            className="scrollbar-thumb"
            ref={thumbRef}
            style={{ width: `${thumbWidth}%` }}
            onMouseDown={handleThumbMouseDown}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;