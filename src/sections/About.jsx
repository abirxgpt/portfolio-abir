import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg'; // Import the image

const About = () => {
    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-accent)', marginRight: '1rem', fontFamily: 'var(--font-mono)' }}>01.</span>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>About Me</h2>
                    <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1, marginLeft: '20px', maxWidth: '300px', opacity: 0.3 }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'start' }}>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            Hello! My name is Abir and I enjoy building intelligent systems that live on the internet. My interest in Machine Learning started when I experimented with datasets and realized the power of data-driven decisions.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            Fast-forward to today, I’ve had the privilege of working at <span style={{ color: 'var(--text-accent)' }}>MNIT Jaipur</span> as a Research Intern, where I tackled Deepfake Detection and Explainable AI.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            I am currently a B.Tech student at <span style={{ color: 'var(--text-accent)' }}>Government Engineering College, Ajmer</span>, maintaining a CGPA of 8.56. I love bridging the gap between theoretical research and practical applications.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            When I'm not coding, I'm likely exploring the latest in Generative AI, reading philosophical discourses, or optimizing my system configuration.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '1rem',
                            fontFamily: 'var(--font-mono)', fontSize: '0.9rem'
                        }}>
                            <li>▹ Python</li>
                            <li>▹ PyTorch</li>
                            <li>▹ LLMs (Llama, GPT)</li>
                            <li>▹ React Three Fiber</li>
                            <li>▹ Computer Vision</li>
                            <li>▹ SQL</li>
                        </ul>
                    </div>

                    <div className="img-container" style={{ position: 'relative', justifySelf: 'center' }}>
                        <div style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: 'var(--radius)',
                            position: 'relative',
                            zIndex: 1,
                            overflow: 'hidden' // Ensure image stays within radius
                        }}>
                            {/* Image Filter Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'var(--text-accent)',
                                mixBlendMode: 'multiply',
                                opacity: 0.4,
                                transition: 'var(--transition)',
                                zIndex: 2,
                                cursor: 'pointer'
                            }}
                                className="img-overlay"
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.4'}
                            ></div>

                            <img
                                src={profileImg}
                                alt="Abir Gupta"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%)',
                                    transition: 'var(--transition)',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.filter = 'none'}
                                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                            />
                        </div>

                        {/* Border Frame */}
                        <div style={{
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            border: '2px solid var(--text-accent)',
                            borderRadius: 'var(--radius)',
                            top: '20px',
                            left: '20px',
                            zIndex: 0,
                            transition: 'var(--transition)'
                        }} className="img-frame"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
