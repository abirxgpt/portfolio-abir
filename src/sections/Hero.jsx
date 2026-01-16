import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import ColourfulText from '../components/ColourfulText';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'row', // Changed to row for side-by-side if needed, but currently overlay
            alignItems: 'center',
            position: 'relative',
            overflow: 'visible' // Allow 3D to spill if needed
        }}>
            {/* 3D Scene Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: '-20%', // Shift to right
                width: '70%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none' // Allow clicking through
            }}>
                <Suspense fallback={null}>
                    <Scene3D />
                </Suspense>
            </div>

            <div style={{ zIndex: 1, paddingRight: '20px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{ color: 'var(--text-accent)', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>
                        Hi, my name is
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1
                        className="glitch-wrapper"
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 5rem)',
                            fontWeight: 'bold',
                            color: 'var(--text-primary)',
                            lineHeight: 1.1,
                            marginTop: '1rem',
                        }}
                    >
                        <div className="glitch" data-text="Abir Gupta.">Abir Gupta.</div>
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: 'bold',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.1,
                    }}
                >
                    I build <ColourfulText text="intelligent systems." />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        maxWidth: '600px',
                        marginTop: '2rem',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                    }}
                >
                    I am a <span className="gradient-text">Machine Learning Engineer</span> specializing in Computer Vision, NLP, and Explainable AI.
                    I turn data into decisions and models into products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ marginTop: '3rem' }}
                >
                    <a href="#projects" className="glass" style={{
                        padding: '1rem 2rem',
                        border: '1px solid var(--text-accent)',
                        borderRadius: '4px',
                        color: 'var(--text-accent)',
                        fontFamily: 'var(--font-mono)',
                        background: 'transparent', // let glass class handle it
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}>
                        Check out my work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
