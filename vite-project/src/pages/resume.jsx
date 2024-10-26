import React from 'react';

const Resume = () => {
    return (
        <div>
            <h1>John Doe</h1>
            <p>Email: john.doe@example.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>Education</h2>
            <ul>
                <li>
                    <strong>University of Example</strong> (2017 - 2021)
                </li>
            </ul>

            <h2>Experience</h2>
            <ul>
                <li>
                    <strong>Software Engineer</strong> at Example Corp (2021 - Present)
                    <p>Developed and maintained web applications using React and Node.js.</p>
                </li>
                <li>
                    <strong>Intern</strong> at Another Example Inc (2020 - 2021)
                    <p>Assisted in the development of internal tools and automation scripts.</p>
                </li>
            </ul>

            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML/CSS</li>
                <li>Git</li>
            </ul>
        </div>
    );
};

export default Resume;