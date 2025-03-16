import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaTimes } from 'react-icons/fa';

// Import markdown files directly
// This ensures webpack processes them at build time
import proxmoxHomeserverMd from '../content/projects/proxmox-homeserver.md';
import aiChatbotMd from '../content/projects/ai-chatbot.md';
import compressionAlgorithmsMd from '../content/projects/compression-algorithms.md';

// Map of project IDs to their markdown content
const PROJECT_CONTENT = {
  'proxmox-homeserver': proxmoxHomeserverMd,
  'ai-chatbot': aiChatbotMd,
  'compression-algorithms': compressionAlgorithmsMd,
  // Add other projects as they are created
};

const ProjectDetailModal = ({ isOpen, onClose, projectId }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen || !projectId) return;

    const loadProjectContent = () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Get the content from our preloaded map
        const markdownContent = PROJECT_CONTENT[projectId];
        
        if (!markdownContent) {
          throw new Error(`Project content for "${projectId}" not found.`);
        }
        
        console.log("Loading project:", projectId);
        console.log("Content available:", !!markdownContent);
        
        // Extract title from the first line (assumes # Title format)
        const lines = markdownContent.split('\n');
        let projectTitle = '';
        let projectTechnologies = [];
        
        // Simple parser for frontmatter-like content
        let inFrontmatter = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          
          // Check for frontmatter markers
          if (line === '---') {
            inFrontmatter = !inFrontmatter;
            continue;
          }
          
          if (inFrontmatter) {
            // Parse title
            if (line.startsWith('title:')) {
              projectTitle = line.substring(6).trim().replace(/"/g, '');
            }
            
            // Parse technologies array
            if (line.startsWith('technologies:')) {
              const techLine = line.substring(13).trim();
              if (techLine.startsWith('[') && techLine.endsWith(']')) {
                projectTechnologies = techLine
                  .substring(1, techLine.length - 1)
                  .split(',')
                  .map(tech => tech.trim().replace(/"/g, ''));
              }
            }
          } else if (line.startsWith('# ') && !projectTitle) {
            // Fallback to using first h1 if no frontmatter title
            projectTitle = line.substring(2).trim();
          }
        }
        
        // Remove frontmatter for rendering
        let cleanContent = markdownContent;
        const firstFM = markdownContent.indexOf('---');
        if (firstFM === 0) {
          const secondFM = markdownContent.indexOf('---', firstFM + 3);
          if (secondFM > 0) {
            cleanContent = markdownContent.substring(secondFM + 3);
          }
        }
        
        setTitle(projectTitle);
        setTechnologies(projectTechnologies);
        setContent(cleanContent);
      } catch (err) {
        console.error('Failed to load project details:', err);
        setError(`Failed to load project details: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjectContent();
  }, [isOpen, projectId]);

  // Don't render anything if the modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {title && <h2 className="modal-title">{title}</h2>}
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          {isLoading ? (
            <div className="modal-loading">Loading project details...</div>
          ) : error ? (
            <div className="modal-error">{error}</div>
          ) : (
            <div className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
              
              {technologies && technologies.length > 0 && (
                <div className="project-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
