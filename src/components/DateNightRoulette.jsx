import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const DateNightRoulette = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [result, setResult] = useState(null);

    const prizes = [
        "Favorite Dinner Date",
        "Home Movie Marathon",
        "A Surprise Gift",
        "A Whole Day Together",
        "Sunset Picnic",
        "Weekend Getaway",
        "Long Drive + Music"
    ];

    const spin = () => {
        if (isSpinning) return;

        const newRotation = rotation + 1800 + Math.random() * 360;
        setRotation(newRotation);
        setIsSpinning(true);
        setResult(null);

        setTimeout(() => {
            setIsSpinning(false);
            const actualRotation = newRotation % 360;
            const segmentSize = 360 / prizes.length;
            const winningIndex = Math.floor((360 - actualRotation) / segmentSize) % prizes.length;
            setResult(prizes[winningIndex]);
        }, 4000);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-12">
            <h3 className="text-4xl font-cursive text-white text-center">Date Night Roulette</h3>
            <p className="text-gray-400">Spin the wheel to choose our next adventure...</p>

            <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Pointer */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-8 h-8 bg-white clip-path-triangle rotate-180 shadow-lg" />
                </div>

                {/* The Wheel */}
                <motion.div
                    animate={{ rotate: rotation }}
                    transition={{ duration: 4, ease: "circOut" }}
                    className="w-full h-full rounded-full border-8 border-wednesday-purple-900 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative overflow-hidden"
                    style={{
                        background: 'conic-gradient(#1e1b4b 0deg 51deg, #312e81 51deg 102deg, #1e1b4b 102deg 153deg, #312e81 153deg 204deg, #1e1b4b 204deg 255deg, #312e81 255deg 306deg, #1e1b4b 306deg 360deg)'
                    }}
                >
                    {prizes.map((prize, i) => (
                        <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 origin-center"
                            style={{ transform: `translateX(-50%) translateY(-50%) rotate(${i * (360 / prizes.length)}deg)` }}
                        >
                            <span
                                className="absolute top-8 left-1/2 -translate-x-1/2 text-white font-medium text-xs md:text-sm uppercase tracking-tighter text-center max-w-[50px]"
                                style={{ transform: 'rotate(0deg)' }}
                            >
                                {prize}
                            </span>
                        </div>
                    ))}

                    {/* Center Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center z-10">
                        <div className="w-12 h-12 border-4 border-wednesday-purple-500 rounded-full" />
                    </div>
                </motion.div>

                <button
                    onClick={spin}
                    disabled={isSpinning}
                    className={`mt-12 px-12 py-4 rounded-full font-bold text-xl transition-all ${isSpinning ? 'bg-gray-700 text-gray-500' : 'bg-wednesday-purple-500 text-white hover:scale-105 shadow-xl shadow-wednesday-purple-500/20'
                        }`}
                >
                    {isSpinning ? 'Spinning...' : 'SPIN! ✨'}
                </button>
            </div>

            <AnimatePresence>
                {result && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
                    >
                        <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h4 className="text-xl text-gray-200 uppercase tracking-widest mb-2">Our Next Date:</h4>
                        <p className="text-3xl font-cursive text-white italic">"{result}"</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .clip-path-triangle {
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }
            `}</style>
        </div>
    );
};

export default DateNightRoulette;
