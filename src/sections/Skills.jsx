import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Languages": ["Python", "Java", "C", "SQL", "JavaScript"],
        "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Recommendation Systems", "Model Evaluation"],
        "Deep Learning": ["CNN", "Transformers", "GANs", "U-Net", "LSTM", "PyTorch", "TensorFlow"],
        "NLP & LLMs": ["Hugging Face", "RAG", "Fine-Tuning", "Tokenization"],
        "Tools": ["Git", "Docker", "Jupyter", "Google Colab", "VS Code"]
    };

    return (
        <section id="skills" style={{ padding: '100px 0', maxWidth: '800px' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-accent)', marginRight: '1rem', fontFamily: 'var(--font-mono)' }}>04.</span>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Technical Skills</h2>
                    <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1, marginLeft: '20px', maxWidth: '300px', opacity: 0.3 }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index}>
                            <h3 style={{ color: 'var(--text-accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>{category}</h3>
                            <ul style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                                {items.map((skill, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--text-accent)', marginRight: '8px', fontSize: '0.8rem' }}>▹</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center', padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>05. What's Next?</span>
                <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', margin: '1rem 0' }}>Get In Touch</h2>
                <p style={{ maxWidth: '500px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                    I am currently looking for new opportunities as an Assistant Software Developer or ML Engineer.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <a href="mailto:abir.guptaaa@gmail.com" style={{
                    padding: '1.25rem 1.75rem',
                    border: '1px solid var(--text-accent)',
                    borderRadius: '4px',
                    color: 'var(--text-accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    display: 'inline-block'
                }}>
                    Say Hello
                </a>

                <div style={{ marginTop: '5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    <p>Designed & Built by Abir Gupta</p>
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;
