import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Curtain = ({ onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Triggered when drag goes far enough
    const handleDragEnd = (e, info) => {
        if (info.offset.x < -100 || info.offset.x > 100) {
            triggerOpen();
        }
    };

    const triggerOpen = () => {
        setIsOpen(true);
        // Be generous with the timeout to allow animation to start
        setTimeout(() => {
            if (window.playBackgroundMusic) window.playBackgroundMusic();
            onOpen();
        }, 800);
    };

    return (
        <AnimatePresence>
            {!isOpen && (
                <div className="fixed inset-0 z-[100] flex overflow-hidden cursor-grab active:cursor-grabbing">
                    {/* Left Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={{ x: "-100%", transition: { duration: 1.5, ease: "easeInOut" } }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }} // Lock normal movement, we just want the gesture to trigger exit
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        onClick={triggerOpen} // Fallback for simple click
                        className="w-1/2 h-full bg-wednesday-purple-900 relative shadow-[10px_0_20px_rgba(0,0,0,0.5)] flex items-center justify-end"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, #1A0B2E 0px, #2D1B4E 40px, #1A0B2E 80px)', // Purple velvet texture
                        }}
                    >
                        {/* Left Purple Tassel (Decoration) */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-32 bg-wednesday-purple-400/50 rounded-full blur-sm"></div>
                    </motion.div>

                    {/* Right Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={{ x: "100%", transition: { duration: 1.5, ease: "easeInOut" } }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        onClick={triggerOpen}
                        className="w-1/2 h-full bg-wednesday-purple-900 relative shadow-[-10px_0_20px_rgba(0,0,0,0.5)] flex items-center justify-start"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, #1A0B2E 0px, #2D1B4E 40px, #1A0B2E 80px)',
                        }}
                    >
                        {/* Right Purple Tassel */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-32 bg-wednesday-purple-400/50 rounded-full blur-sm"></div>
                    </motion.div>

                    {/* Center Text Hint */}
                    <motion.div
                        exit={{ opacity: 0 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
                    >
                        <h1 className="text-3xl md:text-5xl font-cursive text-wednesday-purple-400 drop-shadow-md mb-4 brightness-125 px-4">
                            Every reason I'm thankful you stayed...
                        </h1>
                        <p className="text-wednesday-purple-500/80 animate-pulse text-sm uppercase tracking-widest">
                            Drag or Click to Open
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Curtain;
