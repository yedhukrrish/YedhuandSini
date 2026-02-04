import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const JarOfHearts = () => {
    const [hearts, setHearts] = useState([]);

    const reasons = [
        "You never gave up on me.",
        "Your smile lightens up my world.",
        "You listened to my 3-hour rants.",
        "You matched my commitment.",
        "You're my constant support.",
        "You're the best decision I ever made.",
        "You loved me even when I was stubborn.",
        "You stayed when most would have left.",
        "You make every New Year special.",
        "Your patience is my favorite thing.",
        "You're the one I want to start forever with.",
        "I'm so glad you didn't give up on us."
    ];

    const addHeart = () => {
        const newHeart = {
            id: Date.now(),
            message: reasons[Math.floor(Math.random() * reasons.length)],
            x: Math.random() * 80 - 40, // Random x position inside jar
            y: -100, // Start above
            rotate: Math.random() * 40 - 20
        };
        setHearts(prev => [...prev, newHeart]);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-8 w-full h-[600px]">
            <h3 className="text-3xl font-cursive text-white">Our Jar of Reassurance</h3>
            <p className="text-gray-400">Add a heart to the jar whenever you need a reminder...</p>

            <div className="relative w-72 h-96">
                {/* The Jar Container */}
                <div className="absolute inset-0 border-4 border-white/20 rounded-b-[40%] rounded-t-[10%] backdrop-blur-sm overflow-hidden jar-shine shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-8 bg-white/10" />

                    {/* Hearts inside */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                        <AnimatePresence>
                            {hearts.map((heart) => (
                                <motion.div
                                    key={heart.id}
                                    initial={{ y: heart.y, opacity: 0, scale: 0.5 }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                        x: heart.x,
                                        rotate: heart.rotate
                                    }}
                                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                                    className="absolute cursor-help"
                                    title={heart.message}
                                >
                                    <div className="group relative">
                                        <Heart
                                            className="w-10 h-10 text-pink-500 fill-pink-500 hover:scale-125 transition-transform"
                                            strokeWidth={1}
                                        />
                                        <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-white text-wednesday-purple-900 rounded-xl text-sm font-medium shadow-xl pointer-events-none z-50">
                                            {heart.message}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 -mt-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Jar Lid */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-wednesday-purple-900 rounded-full border-2 border-wednesday-purple-400 z-10" />
            </div>

            <button
                onClick={addHeart}
                className="group relative px-12 py-4 bg-pink-500 text-white rounded-full font-bold text-xl hover:bg-pink-400 transition-all shadow-xl shadow-pink-500/20 active:scale-95"
            >
                Add a Heart ❤️
                <span className="absolute -top-2 -right-2 bg-white text-pink-500 w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-md group-hover:animate-bounce">
                    +
                </span>
            </button>

            <style jsx>{`
                .jar-shine::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 20%;
                    width: 10%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                }
            `}</style>
        </div>
    );
};

export default JarOfHearts;
