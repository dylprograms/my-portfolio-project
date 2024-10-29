import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <NavLink to="/about">About Me </NavLink>
            <NavLink to="/portfolio">My Portfolio</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
            <NavLink to="/resume">My Resume</NavLink>
        </nav>
    );
};
export default Navigation;