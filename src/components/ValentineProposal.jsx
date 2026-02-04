import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Stars } from 'lucide-react';

const ValentineProposal = () => {
    const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
    const [accepted, setAccepted] = useState(false);

    const handleNoHover = () => {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 300 - 150;
        setNoBtnPos({ x, y });
    };

    const handleYes = () => {
        setAccepted(true);
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

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
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 p-4 sticky top-0 z-50">
            <AnimatePresence>
                {!accepted ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        className="bg-white/80 backdrop-blur-md p-12 rounded-[3rem] shadow-2xl border-4 border-white text-center max-w-lg w-full"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="inline-block mb-8"
                        >
                            <Heart className="w-20 h-20 text-love-red fill-current" />
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-cursive text-gray-800 mb-12">
                            Will you be my Valentine?
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleYes}
                                className="px-12 py-4 bg-love-red text-white rounded-full font-bold text-xl shadow-lg hover:shadow-love-red/50 transition-shadow"
                            >
                                YES! ❤️
                            </motion.button>

                            <motion.button
                                animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                                onMouseEnter={handleNoHover}
                                className="px-12 py-4 bg-gray-200 text-gray-600 rounded-full font-bold text-xl"
                            >
                                No 😢
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="accepted"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <Stars className="w-24 h-24 text-yellow-400 mx-auto mb-6 animate-spin-slow" />
                        <h2 className="text-6xl md:text-8xl font-cursive text-love-red mb-8">
                            Yay! See you soon! ❤️
                        </h2>
                        <p className="text-2xl text-gray-600 font-medium">
                            I'm the luckiest person in the world.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ValentineProposal;
