import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaStar, FaCode } from 'react-icons/fa';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetch public repos
                const response = await fetch('https://api.github.com/users/abirxgpt/repos?sort=updated&per_page=10');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();

                // Filter out forks if desired, or just take top results
                // For now, we take non-forks or impactful ones
                const filtered = data
                    .filter(repo => !repo.fork) // Optional: remove forks
                    .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
                    .slice(0, 6); // Take top 6

                setRepos(filtered);
            } catch (err) {
                console.error("GitHub fetch failed, using fallback data", err);
                // Fallback or empty state could go here, but for now we leave it
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" style={{ padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--text-accent)', marginRight: '1rem', fontFamily: 'var(--font-mono)' }}>03.</span>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Some Things I've Built</h2>
                    <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1, marginLeft: '20px', maxWidth: '300px', opacity: 0.3 }}></div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading GitHub projects...</div>
                ) : (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '20px'
                        }}
                    >
                        {repos.map((repo) => (
                            <motion.div
                                key={repo.id}
                                variants={item}
                                whileHover={{ y: -10 }}
                                className="glass"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    cursor: 'default',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Shine Effect on Hover (CSS based usually, simplified here) */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--text-accent)' }}>
                                    <FaFolder size={40} />
                                    <div style={{ display: 'flex', gap: '15px', zIndex: 10 }}>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}><FaGithub size={20} /></a>
                                        {repo.homepage && <a href={repo.homepage} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}><FaExternalLinkAlt size={18} /></a>}
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{repo.name}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', flex: 1, marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                    {repo.description || "No description available."}
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        {repo.language && <span>{repo.language}</span>}
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaStar color="var(--text-accent)" /> {repo.stargazers_count}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="https://github.com/abirxgpt" target="_blank" rel="noopener noreferrer" className="nav-link" style={{
                        padding: '1rem 2rem',
                        border: '1px solid var(--text-accent)',
                        borderRadius: 'var(--radius)',
                        color: 'var(--text-accent)'
                    }}>
                        View Full Project Archive
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
