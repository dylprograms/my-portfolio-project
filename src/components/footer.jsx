import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <a href="https://www.linkedin.com/in/daniel-young-69b888335/">Linkdin </a>
            &nbsp;
            &nbsp;
            <a href="https://github.com/dylprograms">Github </a>
            &nbsp;
            &nbsp;
            <a href="https://stackoverflow.com/users/26118896/daniel-young">Stack-overflow</a>
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>

        </footer>
    );
};

const footerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '1em 0',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
};

export default Footer;