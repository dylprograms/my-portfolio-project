import React from 'react';
import ProjectCard from './projectcard';

const projects = [
    {
        id: 1,
        title: 'vehicle tester',

        imageUrl: 'https://doschdesign.com/images/image/Generic_01.jpg',
        link: 'https://github.com/dylprograms/Vehicle-Tester',
    },
    {
        id: 2,
        title: 'README Creator',
        imageUrl: 'https://framerusercontent.com/images/jjNrjcmevLma5KdjAQ6VycoAP9A.svg',
        link: 'https://github.com/dylprograms/README-Creator',
    },
    {
        id: 3,
        title: 'Portfolio Project',
        imageUrl: 'https://ezahn47ugtf.exactdn.com/wp-content/uploads/2022/05/portfolio-book-creation-scaled.jpg?strip=all&lossy=1&ssl=1',
        link: 'https://github.com/dylprograms/my-portfolio-project',
    },
    {
        id: 4,
        title: 'First Project',
        imageUrl: 'https://assets.asana.biz/m/3b1624db68c5ce62/webimage-Article-project-planning-project-initiation-2x.jpg',
        link: 'https://github.com/dylprograms/first-day-repo',
    },
    {
        id: 5,
        title: 'My Weather Cast',
        imageUrl: 'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2000x1332+0+0/resize/1100/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F81%2F92%2Fcd9f968749878b371043ed3acb18%2Fap24032704255688.jpg',
        link: 'https://github.com/dylprograms/My-Weather-Cast',
    },
    {
        id: 6,
        title: 'Study Guide',
        imageUrl: 'https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg',
        link: 'https://github.com/dylprograms/prework-study-guide',
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