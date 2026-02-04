import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';

const reasons = [
    "You aren't afraid to be yourself.",
    "You give the best hugs.",
    "You make me laugh even when I don't want to.",
    "You're my biggest supporter.",
    "The way you scrunch your nose when you're thinking.",
    "Your kindness extends to everyone.",
    "You always know the right song to play.",
    "You make ordinary moments feel magical.",
    "I can be completely weird around you.",
    "You challenge me to be better.",
    "Your passion for your hobbies is inspiring.",
    "You smell amazing.",
    "You're my safe place.",
    "We can talk for hours about nothing."
];

const ReasonGen = () => {
    const [currentReason, setCurrentReason] = useState(reasons[0]);
    const [isSpinning, setIsSpinning] = useState(false);

    const generateReason = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        let count = 0;
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * reasons.length);
            setCurrentReason(reasons[randomIndex]);
            count++;

            if (count > 10) {
                clearInterval(interval);
                setIsSpinning(false);
            }
        }, 100); // Fast cycle effect
    };

    return (
        <section className="py-20 px-4 text-center">
            <div className="max-w-xl mx-auto bg-gradient-to-br from-love-red to-love-pink p-1 rounded-3xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-[20px] p-10 flex flex-col items-center">
                    <div className="bg-pink-100 p-3 rounded-full mb-6">
                        <Sparkles className="text-love-red w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Why I Love You</h3>
                    <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest font-bold">Reason Generator 3000</p>

                    <div className="h-32 flex items-center justify-center w-full mb-8">
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={currentReason}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-2xl font-cursive text-gray-700 leading-snug px-4"
                            >
                                "{currentReason}"
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={generateReason}
                        disabled={isSpinning}
                        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        <RefreshCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
                        Tell Me Another
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default ReasonGen;
