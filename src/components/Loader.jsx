import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EncryptedText from './EncryptedText';

const Loader = ({ onComplete }) => {
    const [stage, setStage] = useState(0);
    const [complete, setComplete] = useState(false);

    const sequences = [
        "INITIALIZING SYSTEM...",
        "ACCESSING NEURAL CORE...",
        "LOADING MEMORY MODULES...",
        "WELCOME, USER."
    ];

    const handleSequenceComplete = () => {
        // Delay before moving to next stage
        setTimeout(() => {
            if (stage < sequences.length - 1) {
                setStage(prev => prev + 1);
            } else {
                setComplete(true);
                setTimeout(onComplete, 800); // Slight delay before unmounting
            }
        }, 500); // Pause between lines
    };

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
            <div style={{
                fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                textAlign: 'center',
                minHeight: '2em' // prevent layout shift
            }}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={stage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <EncryptedText
                            text={sequences[stage]}
                            onComplete={handleSequenceComplete}
                            revealDelayMs={30} // Faster typing
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Optional Progress Bar or Decoration */}
            <div style={{ width: '200px', height: '2px', background: 'var(--bg-secondary)', marginTop: '2rem', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div
                    style={{ height: '100%', background: 'var(--text-accent)' }}
                    animate={{ width: `${((stage + 1) / sequences.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </motion.div>
    );
};

export default Loader;
