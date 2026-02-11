import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stars, Sparkles, X, Heart } from 'lucide-react';

const ConstellationMap = () => {
    const [selectedStar, setSelectedStar] = useState(null);
    const [hoveredStar, setHoveredStar] = useState(null);

    const coreTruths = [
        {
            id: 1,
            x: '20%', y: '30%',
            title: 'The Resilience',
            message: 'No matter how hard things got, we never let go. Our strength isn\'t just in the good times, but in how we survived the storms together.',
            icon: '🛡️'
        },
        {
            id: 2,
            x: '50%', y: '15%',
            title: 'The Listening Heart',
            message: 'Those 3-hour rants werent just noise. They were the sound of two souls finally finding someone who actually hears them.',
            icon: '👂'
        },
        {
            id: 3,
            x: '80%', y: '40%',
            title: 'The Unspoken Vow',
            message: 'Even before the ring, there was a promise in every "goodnight" and every "I\'m here". A commitment that didn\'t need words.',
            icon: '✨'
        },
        {
            id: 4,
            x: '30%', y: '70%',
            title: 'The Future Promise',
            message: 'Paris is just the beginning. I promise to explore every corner of the world—and every corner of your heart—for the rest of our lives.',
            icon: '🌍'
        },
        {
            id: 5,
            x: '70%', y: '80%',
            title: 'Beyond the Story',
            message: 'You already know our story, but what\'s more impressive is that we\'re the ones writing the sequels. Every single day.',
            icon: '✍️'
        },
        {
            id: 6,
            x: '50%', y: '50%',
            title: 'The Center',
            message: 'You are the gravity that keeps my world in orbit. Everything else is just stars, but you are my sun.',
            icon: '☀️',
            isCenter: true
        }
    ];

    // Generate random background stars
    const bgStars = useMemo(() => {
        return [...Array(100)].map((_, i) => ({
            id: i,
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5
        }));
    }, []);

    // Constellation lines logic
    const lines = [
        [1, 2], [2, 3], [3, 5], [5, 4], [4, 1], // Outer ring
        [1, 6], [2, 6], [3, 6], [4, 6], [5, 6]  // Connecting to center
    ];

    const getStarCoords = (id) => {
        const star = coreTruths.find(s => s.id === id);
        return { x: star.x, y: star.y };
    };

    return (
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl border border-blue-900/50 overflow-hidden shadow-[0_0_100px_rgba(30,58,138,0.3)] p-8 select-none">
            {/* Twinkling Background Stars */}
            <div className="absolute inset-0 z-0">
                {bgStars.map(star => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            left: star.x,
                            top: star.y,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-full h-full">
                <div className="text-center mb-4">
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-cursive text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200"
                    >
                        The Constellation of Us
                    </motion.h3>
                    <p className="text-blue-300/60 text-sm tracking-widest uppercase mt-2">Connecting the truths that define our universe</p>
                </div>

                {/* Constellation Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                            <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {lines.map((line, idx) => {
                        const start = getStarCoords(line[0]);
                        const end = getStarCoords(line[1]);
                        return (
                            <motion.line
                                key={idx}
                                x1={start.x} y1={start.y}
                                x2={end.x} y2={end.y}
                                stroke="url(#lineGrad)"
                                strokeWidth="1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: 1,
                                    opacity: (hoveredStar === line[0] || hoveredStar === line[1]) ? 1 : 0.4
                                }}
                                transition={{ duration: 2, delay: idx * 0.1 }}
                            />
                        );
                    })}
                </svg>

                {/* Interactive Stars */}
                {coreTruths.map((star) => (
                    <motion.button
                        key={star.id}
                        style={{ left: star.x, top: star.y }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            boxShadow: hoveredStar === star.id ? "0 0 30px rgba(192, 132, 252, 0.8)" : "0 0 10px rgba(96, 165, 252, 0.4)"
                        }}
                        transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.5 + star.id * 0.1 }}
                        onMouseEnter={() => setHoveredStar(star.id)}
                        onMouseLeave={() => setHoveredStar(null)}
                        onClick={() => setSelectedStar(star)}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 w-4 h-4 rounded-full border border-white/50 backdrop-blur-sm transition-all
                            ${star.isCenter ? 'bg-yellow-400 w-6 h-6 z-30' : 'bg-white/80'}`}
                    >
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-20 bg-white
                            ${star.isCenter ? 'bg-yellow-400' : 'bg-blue-400'}`} />

                        <AnimatePresence>
                            {hoveredStar === star.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 whitespace-nowrap text-xs text-white"
                                >
                                    {star.title}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                ))}

                {/* Details Modal */}
                <AnimatePresence>
                    {selectedStar && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            className="absolute inset-0 m-auto w-full max-w-sm h-fit bg-gradient-to-br from-blue-950/90 to-purple-950/90 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl z-50 overflow-hidden"
                        >
                            {/* Decorative Sparkles */}
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Sparkles className="w-24 h-24 text-yellow-400" />
                            </div>

                            <button
                                onClick={() => setSelectedStar(null)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-4xl mb-4">{selectedStar.icon}</div>
                            <h4 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                                {selectedStar.title}
                            </h4>
                            <p className="text-blue-100/80 leading-relaxed italic text-lg">
                                "{selectedStar.message}"
                            </p>

                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                <span className="text-xs text-blue-400 uppercase tracking-widest font-bold">Star Manifested</span>
                                <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-blue-400/40 uppercase tracking-[0.3em] font-medium">
                Drag or hover to see the connections
            </div>
        </div>
    );
};

export default ConstellationMap;
