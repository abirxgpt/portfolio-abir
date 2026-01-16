import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }} className="glass">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-accent)' }}>
                AG<span style={{ color: 'var(--text-primary)' }}>.</span>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="#about" className="nav-link">About</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#skills" className="nav-link">Skills</a>
            </div>

            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
                <a href="https://github.com/abirxgpt" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/abirxgpt" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </nav>
    );
};

export default Navbar;
