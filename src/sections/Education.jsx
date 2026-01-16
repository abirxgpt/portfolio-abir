import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" style={{ maxWidth: '800px', padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '2rem', textAlign: 'center' }}>Education & Achievements</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
                    <div className="glass" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Bachelor of Technology (B.Tech) in CS</h4>
                            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-accent)' }}>Nov 2022 – May 2026</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Government Engineering College, Ajmer</p>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>CGPA: 8.56</p>
                    </div>

                    <div className="glass" style={{ padding: '2rem' }}>
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Achievements</h4>
                        <ul style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>▹ Global Rank 1 in SQL on HackerRank (2024)</li>
                            <li style={{ marginBottom: '0.5rem' }}>▹ Secretary and Vice President, Programming & Competitive Coding Club</li>
                            <li style={{ marginBottom: '0.5rem' }}>▹ Gold Medal in Python Programming by HackerRank</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
