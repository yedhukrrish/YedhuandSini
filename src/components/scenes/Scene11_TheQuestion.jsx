import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene11_TheQuestion = () => {
    const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
    const [accepted, setAccepted] = useState(false);
    const [noHoverCount, setNoHoverCount] = useState(0);

    const handleNoHover = () => {
        const x = Math.random() * 400 - 200;
        const y = Math.random() * 400 - 200;
        setNoBtnPos({ x, y });
        setNoHoverCount(prev => prev + 1);
    };

    const handleYes = () => {
        setAccepted(true);

        // Switch to "Perfect" song
        if (window.switchToLoveSong) {
            window.switchToLoveSong();
        }

        // Epic confetti
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    return (
        <CinematicScene background="bg-gradient-to-br from-wednesday-purple-500 via-wednesday-purple-900 to-wednesday-purple-800">
            <div className="flex flex-col items-center justify-center h-screen px-4">
                <AnimatePresence mode="wait">
                    {!accepted ? (
                        <motion.div
                            key="question"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            className="text-center max-w-3xl"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="mb-12"
                            >
                                <Heart className="w-32 h-32 text-wednesday-purple-500 fill-current mx-auto" />
                            </motion.div>

                            <motion.h2
                                className="text-5xl md:text-7xl font-cursive text-white mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Will you be my Valentine?
                            </motion.h2>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleYes}
                                    className="px-16 py-6 bg-wednesday-purple-500 text-white rounded-full font-bold text-2xl shadow-2xl hover:shadow-wednesday-purple-500/50 transition-all z-10"
                                >
                                    YES! ❤️
                                </motion.button>

                                <motion.button
                                    animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                                    onMouseEnter={handleNoHover}
                                    onTouchStart={handleNoHover}
                                    className="px-16 py-6 bg-gray-700 text-gray-200 rounded-full font-bold text-2xl"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                >
                                    {noHoverCount > 5 ? "Come on... 😢" : "No"}
                                </motion.button>
                            </div>

                            {noHoverCount > 3 && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-wednesday-purple-500 mt-8 text-lg italic"
                                >
                                    The "No" button is shy... just like I was for 49 times 😉
                                </motion.p>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="accepted"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <Sparkles className="w-32 h-32 text-yellow-400 mx-auto mb-8 animate-spin-slow" />

                            <h2 className="text-6xl md:text-9xl font-cursive text-white mb-12">
                                Yay! ❤️
                            </h2>

                            <p className="text-3xl md:text-4xl text-wednesday-purple-500 font-cursive mb-8">
                                I'm the luckiest person in the world.
                            </p>

                            <p className="text-xl text-gray-200">
                                See you soon, my Valentine. 💕
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </CinematicScene>
    );
};

export default Scene11_TheQuestion;
