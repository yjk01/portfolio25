import React, { useState, useRef, useEffect } from 'react';

const Avatar3D = ({ imageUrl }) => {
  const avatarRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
    isHovering: false
  });
  
  // Track if component is mounted to avoid memory leaks
  const isMounted = useRef(true);
  
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!avatarRef.current) return;
    
    const rect = avatarRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the avatar
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    // Normalize by container dimensions for consistent effect
    const rotateY = (mouseX / (rect.width / 2)) * 15; // Max 15 degrees
    const rotateX = ((mouseY / (rect.height / 2)) * -15); // Invert Y for natural tilt
    
    // Update transform with smoothed values
    setTransform({
      rotateX,
      rotateY,
      translateZ: 20,
      isHovering: true
    });
  };

  const handleMouseLeave = () => {
    // Create smooth return to resting position
    setTransform({
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      isHovering: false
    });
  };

  // Add smooth transition when not hovering
  const transitionStyle = transform.isHovering 
    ? 'transform 0.1s ease-out'  // Quick response when moving
    : 'transform 0.5s ease-out';  // Smooth return when leaving

  return (
    <div 
      className="avatar-container"
      ref={avatarRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="avatar-wrapper"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(${transform.translateZ}px)`,
          transition: transitionStyle
        }}
      >
        <img src={imageUrl} alt="Profile" className="avatar" />
      </div>
      <div className="online-indicator"></div>
    </div>
  );
};

export default Avatar3D;
