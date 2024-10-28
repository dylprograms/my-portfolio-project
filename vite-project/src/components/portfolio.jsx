import React from 'react';
import ProjectCard from './projectcard';

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is a description for project one.',
        imageUrl: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/51343/2025-Hyundai-Elantra-front_51343_032_1842x743_W6H_cropped.png',
        link: 'https://github.com/dylprograms/Vehicle-Tester',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is a description for project two.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/README-cURL_black_trimmed.png',
        link: 'https://github.com/dylprograms/README-Creator',
    },
    // Add more projects as needed
];

const Portfolio = () => {
    return (
        <div className="portfolio">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    projectUrl={project.link}
                    imageUrl={project.imageUrl}
                />
            ))}
        </div>
    );
};

export default Portfolio;