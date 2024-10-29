import React from 'react';

const Resume = () => {
    return (
        <div className='resumediv'>
            <h1 className='resume1'>Daniel</h1> 
            <a href="https://drive.google.com/uc?export=download&id=1dlcrT5emSx_hE80BpwN6Tc293rCwCFW8" download> Download Resume</a>
            <p>Email: john.doe@example.com</p>
            <p>Phone: (123) 456-7890</p>

            <h2>Education</h2>
            <ul>
                <li>
                    <strong>UNCC Bootcamp</strong> 2024
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