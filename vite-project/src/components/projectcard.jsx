import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
            </a>
        </div>
    );
};

export default ProjectCard;
