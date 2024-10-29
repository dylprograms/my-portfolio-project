import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';

const Header = () => {
    return (
        <header>
            <h1>Daniel</h1>
            <Navigation />
        </header>
    );
};

export default Header;