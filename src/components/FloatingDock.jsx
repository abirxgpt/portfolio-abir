import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';

// Use vanilla CSS classes map or inline styles since we don't have tailwind
// simulating "flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({ items, className }) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ position: 'relative', display: 'block' }} className={`mobile-dock ${className}`}>
            {/* Simplified mobile view: just a toggle list */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        style={{
                            position: 'absolute', bottom: '100%', marginBottom: '10px',
                            flexDirection: 'column', display: 'flex', gap: '8px'
                        }}
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <a
                                    href={item.href}
                                    target="_blank" rel="noopener noreferrer"
                                    style={{
                                        display: 'flex', width: '40px', height: '40px',
                                        alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '50%', background: '#262626', color: 'white'
                                    }}
                                >
                                    <div style={{ width: '16px', height: '16px' }}>{item.icon}</div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    display: 'flex', width: '40px', height: '40px',
                    alignItems: 'center', justifyContent: 'center',
                    borderRadius: '50%', background: '#262626', border: 'none', color: '#a1a1aa'
                }}
            >
                <IconLayoutNavbarCollapse size={20} />
            </button>

            <style>{`
          @media (min-width: 768px) {
              .mobile-dock { display: none !important; }
              .desktop-dock { display: flex !important; }
          }
           @media (max-width: 767px) {
              .mobile-dock { display: block !important; }
              .desktop-dock { display: none !important; }
          }
      `}</style>
        </div>
    );
};

const FloatingDockDesktop = ({ items, className }) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`desktop-dock ${className}`}
            style={{
                margin: '0 auto',
                height: '64px',
                alignItems: 'flex-end',
                gap: '16px',
                padding: '0 16px 12px 16px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.05)', // Glass effect
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
            }}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({ mouseX, title, icon, href }) {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
    let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

    const [hovered, setHovered] = useState(false);

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <motion.div
                ref={ref}
                style={{
                    width, height,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '50%', background: '#262626', position: 'relative'
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            style={{
                                position: 'absolute', top: '-35px', left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '4px 8px', borderRadius: '4px',
                                background: '#171717', border: '1px solid #404040',
                                color: 'white', fontSize: '10px', whiteSpace: 'nowrap'
                            }}
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4d4d8' }}
                >
                    {icon}
                </motion.div>
            </motion.div>
        </a>
    );
}
