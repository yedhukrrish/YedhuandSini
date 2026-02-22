import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Cake, Heart, Sparkles, Star } from 'lucide-react';

const BirthdayCelebration = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Trigger initial confetti
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        // Show content after a slight delay
        const timeout = setTimeout(() => setShowContent(true), 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {showContent && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Darkened Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Celebration Card */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="relative max-w-2xl w-full bg-gradient-to-br from-wednesday-purple-900/40 to-black/60 border border-wednesday-purple-500/30 p-8 md:p-12 rounded-[2rem] shadow-[0_0_100px_rgba(168,85,247,0.3)] text-center overflow-hidden"
                    >
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 180, 270, 360],
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-1/2 -right-1/2 w-full h-full bg-wednesday-purple-500/5 blur-[120px] rounded-full"
                            />
                        </div>

                        <motion.div
                            initial={{ rotate: -10 }}
                            animate={{ rotate: 0 }}
                            className="inline-block mb-8"
                        >
                            <div className="relative">
                                <Cake className="w-20 h-20 text-wednesday-purple-400 mx-auto" />
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-2 -right-2"
                                >
                                    <Sparkles className="w-8 h-8 text-yellow-400" />
                                </motion.div>
                            </div>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-wednesday-purple-200 to-white">
                            Happy Birthday, Sini!
                        </h1>

                        <p className="text-xl md:text-2xl text-wednesday-purple-200/80 font-cursive italic leading-relaxed mb-10">
                            "Across the miles, from the city of lights to your heart.
                            May your day be as magical as the Paris sky and as beautiful as the love we share."
                        </p>

                        <div className="flex justify-center gap-6 mb-8">
                            {[Heart, Star, Heart].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                                >
                                    <Icon className={`w-8 h-8 ${i === 1 ? 'text-yellow-400' : 'text-rose-400'}`} />
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowContent(false)}
                            className="bg-wednesday-purple-600 hover:bg-wednesday-purple-500 text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        >
                            Continue the Story
                        </motion.button>

                        <div className="mt-8 text-wednesday-purple-400/40 font-mono text-xs tracking-widest uppercase">
                            Sent with love • Paris 2026
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BirthdayCelebration;
