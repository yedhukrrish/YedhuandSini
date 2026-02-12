import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoadingScreen = ({ progress }) => {
    const [quote, setQuote] = useState(0);
    const quotes = [
        "Gathering our memories...",
        "Tuning the heartstrings...",
        "Painting the skies of Paris...",
        "Wrapping up the love...",
        "Almost there, my love..."
    ];

    useEffect(() => {
        if (progress > 0 && progress < 100) {
            const interval = setInterval(() => {
                setQuote(prev => (prev + 1) % quotes.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [progress]);

    return (
        <div className="fixed inset-0 z-[9999] bg-wednesday-black flex flex-col items-center justify-center overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wednesday-purple-900/20 via-black to-black" />

            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Pulsing Heart - Progress Indicator */}
                <div className="relative">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-wednesday-purple-500/30 blur-2xl rounded-full"
                    />
                    <Heart
                        className="w-20 h-20 text-wednesday-purple-500 fill-wednesday-purple-500/20 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                        strokeWidth={1.5}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-serif text-sm font-bold tracking-widest">{progress}%</span>
                    </div>
                </div>

                {/* Text Update */}
                <motion.div
                    key={quote}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="h-8"
                >
                    <p className="text-white/60 font-serif italic text-lg tracking-wide">
                        {quotes[quote]}
                    </p>
                </motion.div>

                {/* Progress Bar Line */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                    <motion.div
                        className="h-full bg-gradient-to-r from-wednesday-purple-600 to-pink-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
