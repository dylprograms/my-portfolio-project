import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <Link to="/about">About Me</Link>
            <Link to="/portfolio">My Portfolio</Link>
            <Link to="/contact">Contact Me</Link>
            <Link to="/resume">My Resume</Link>
        </nav>
    );
};
export default Navigation;