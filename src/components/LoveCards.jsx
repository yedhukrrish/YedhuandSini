import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reasons = [
    "Your smile lights up my darkest days",
    "You make the best coffee",
    "How you always know when I need a hug",
    "Your terrible jokes (I secretly love them)",
    "The way you look at me",
    "You support my dreams no matter what"
];

const Card = ({ reason, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div
            className="w-64 h-80 cursor-pointer perspective-1000"
            onClick={handleFlip}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
                className="w-full h-full relative preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-pink-100 p-8 text-center bg-love-pattern">
                    <div className="border-2 border-dashed border-pink-200 rounded-xl w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-cursive text-love-red">#{index + 1}</span>
                    </div>
                    <span className="absolute bottom-4 text-xs text-gray-400">Tap to flip</span>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-love-red to-love-pink rounded-2xl shadow-xl flex items-center justify-center p-6 text-center text-white rotate-y-180"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <p className="text-xl font-cursive font-bold leading-relaxed">
                        "{reason}"
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const LoveCards = () => {
    return (
        <section className="py-20 bg-pink-50 min-hm-screen">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-16">Why I Love You</h2>
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                {reasons.map((reason, index) => (
                    <Card key={index} reason={reason} index={index} />
                ))}
            </div>
        </section>
    );
};

export default LoveCards;
