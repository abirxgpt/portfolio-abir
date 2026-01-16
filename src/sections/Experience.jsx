import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    // Resume Data
    const jobs = [
        {
            company: "MNIT Jaipur",
            role: "Research Intern",
            range: "May 2025 – Oct 2025",
            url: "http://mnit.ac.in/", // Placeholder
            descriptions: [
                "Spearheaded the development of a bilingual (Hindi/English) XAI-based annotation tool, enabling frame-level deepfake artifact labeling. This spatial-temporal explainability feature significantly improved the interpretability of subsequent detection models.",
                "Architected a novel hybrid deepfake detection model (TCAN-STIL) by fusing Transformers with CNNs. This approach outperformed standard baselines, achieving state-of-the-art temporal-spatial accuracy on complex benchmark datasets.",
                "Led the curation of the HiSAG dataset, compiling over 13,000 Hindi news samples and generating adversarial AI variants using GPT-4 and Gemini to robustly test low-resource text detection systems.",
                "Constructed the HID-DF benchmark, a diverse collection of 1,200 Indian-context videos, directly addressing and mitigating the demographic bias prevalent in existing western-centric deepfake datasets."
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" style={{ maxWidth: '700px', margin: '0 auto', padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-accent)', marginRight: '1rem', fontFamily: 'var(--font-mono)' }}>02.</span>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Where I've Worked</h2>
                    <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1, marginLeft: '20px', maxWidth: '300px', opacity: 0.3 }}></div>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid var(--bg-secondary)' }}>
                        {jobs.map((job, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                style={{
                                    background: activeTab === index ? 'var(--bg-glass)' : 'transparent',
                                    border: 'none',
                                    borderLeft: `2px solid ${activeTab === index ? 'var(--text-accent)' : 'transparent'}`,
                                    padding: '1rem',
                                    textAlign: 'left',
                                    color: activeTab === index ? 'var(--text-accent)' : 'var(--text-secondary)',
                                    fontFamily: 'var(--font-mono)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    marginLeft: '-2px',
                                    width: '150px'
                                }}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>

                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            {jobs[activeTab].role} <span style={{ color: 'var(--text-accent)' }}>@ {jobs[activeTab].company}</span>
                        </h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            {jobs[activeTab].range}
                        </p>
                        <ul className="job-list">
                            {jobs[activeTab].descriptions.map((desc, i) => (
                                <li key={i} style={{
                                    marginBottom: '1rem',
                                    position: 'relative',
                                    paddingLeft: '20px',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-accent)' }}>▹</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
