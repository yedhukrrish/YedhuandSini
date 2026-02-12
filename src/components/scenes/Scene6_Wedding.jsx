import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkle } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene6_Wedding = () => {
    // Warm bokeh particles
    const particles = Array.from({ length: 15 });

    return (
        <CinematicScene background="bg-[#0a0514]">
            {/* Golden Bokeh Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-amber-400/10 blur-xl"
                        initial={{
                            width: Math.random() * 150 + 50,
                            height: Math.random() * 150 + 50,
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <motion.p
                        className="text-wednesday-purple-500 text-sm uppercase tracking-[0.4em] mb-4 font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        August 2023 • The Celebration
                    </motion.p>

                    <motion.h2
                        className="text-5xl md:text-8xl font-bold text-white mb-12 font-serif tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Meeting the <span className="text-wednesday-purple-500">Family</span>
                    </motion.h2>

                    <motion.div
                        className="mb-12 relative inline-block"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 bg-wednesday-purple-500/20 blur-2xl rounded-full"
                        />
                        <Heart className="w-32 h-32 text-wednesday-purple-500 mx-auto fill-current relative z-10 drop-shadow-[0_0_20px_rgba(123,79,160,0.5)]" />
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <p className="text-xl md:text-3xl text-gray-200 leading-relaxed font-serif italic">
                            "I took her to my sister's wedding. She met my family that day—but seeing her there, I realized I only loved her more."
                        </p>
                        <motion.div
                            className="flex items-center justify-center gap-4 text-wednesday-purple-400/60"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                        >
                            <Sparkle className="w-4 h-4" />
                            <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-white">
                                Things got real.
                            </span>
                            <Sparkle className="w-4 h-4" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Family Photo - Floating at bottom */}
            <motion.div
                className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 1, delay: 1.5 }
                }}
            >
                <div className="relative">
                    <img
                        src="/images/familyphoto.png"
                        alt="My Family"
                        className="w-48 md:w-80 h-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-wednesday-purple-600/80 text-white text-[8px] px-2 py-0.5 rounded-full font-bold tracking-widest uppercase z-20 shadow-lg backdrop-blur-sm">
                        Family
                    </div>
                </div>
            </motion.div>
        </CinematicScene>
    );
};

export default Scene6_Wedding;
