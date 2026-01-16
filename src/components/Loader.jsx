import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [text, setText] = useState("INITIALIZING...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Progress bar simulation
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 5) + 1;
            });
        }, 50);

        // Text replacement
        const texts = ["LOADING MODULES...", "CONNECTING TO GITHUB...", "TRAINING MODELS...", "SYSTEM READY."];
        let msgIndex = 0;
        const textInterval = setInterval(() => {
            if (msgIndex < texts.length) {
                setText(texts[msgIndex]);
                msgIndex++;
            }
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        }
    }, []);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(onComplete, 1000); // Wait a bit after 100%
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#020c1b',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Hexagon or Logo Pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    width: '80px',
                    height: '80px',
                    border: '4px solid var(--text-accent)',
                    marginBottom: '2rem',
                    position: 'relative'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '20px',
                    height: '20px',
                    background: 'var(--text-accent)',
                    borderRadius: '50%'
                }}></div>
            </motion.div>

            <div style={{ width: '300px', height: '2px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden', marginBottom: '1rem' }}>
                <motion.div
                    style={{ height: '100%', background: 'var(--text-accent)' }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            <motion.p
                key={text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    letterSpacing: '2px'
                }}
            >
                {text} <span style={{ color: 'var(--text-accent)' }}>{Math.min(progress, 100)}%</span>
            </motion.p>
        </motion.div>
    );
};

export default Loader;
