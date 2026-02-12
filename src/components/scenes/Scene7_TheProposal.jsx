import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Star, Sparkle } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene7_TheProposal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const stars = Array.from({ length: 20 });

    return (
        <CinematicScene background="bg-[#0a0514]">
            {/* Atmospheric Starry Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {stars.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: Math.random() * 2 + 1,
                            height: Math.random() * 2 + 1,
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    >
                        <Star className="w-full h-full text-wednesday-purple-400/30 fill-current" />
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl w-full"
                >
                    <motion.p
                        className="text-wednesday-purple-400 text-sm uppercase tracking-[0.4em] mb-12 font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        January 1, 2024 • The Big Question
                    </motion.p>

                    {/* Interactive Moment Box */}
                    <motion.div
                        layout
                        onClick={() => setIsOpen(!isOpen)}
                        className={`cursor-pointer mx-auto relative overflow-hidden backdrop-blur-xl border border-wednesday-purple-500/20 bg-wednesday-purple-900/10 p-8 rounded-[2rem] shadow-[0_0_50px_rgba(123,79,160,0.2)] transition-all duration-700 group ${isOpen ? 'max-w-2xl bg-wednesday-purple-900/30' : 'max-w-xs hover:border-wednesday-purple-500/40 hover:shadow-[0_0_60px_rgba(123,79,160,0.3)]'
                            }`}
                        whileHover={{ scale: 1.02 }}
                    >
                        <AnimatePresence mode="wait">
                            {!isOpen ? (
                                <motion.div
                                    key="closed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center gap-6 py-6"
                                >
                                    <div className="relative">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute inset-0 bg-wednesday-purple-500/20 blur-2xl rounded-full"
                                        />
                                        <Sparkles className="w-20 h-20 text-wednesday-purple-400 relative z-10" />
                                    </div>
                                    <p className="text-white font-serif italic text-xl">
                                        Wait... I have something to ask.
                                    </p>
                                    <p className="text-wednesday-purple-500/60 text-[10px] uppercase tracking-widest animate-pulse">
                                        Tap to open this moment
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center gap-8 py-4"
                                >
                                    <motion.h2
                                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        I Finally Asked
                                    </motion.h2>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full animate-pulse" />
                                        <Heart className="w-24 h-24 text-wednesday-purple-500 fill-current drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]" />
                                    </motion.div>

                                    <motion.div
                                        className="space-y-4"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-serif italic">
                                            "The best decision I ever made was finally matching your commitment."
                                        </p>
                                        <p className="text-wednesday-purple-400 text-3xl md:text-5xl font-bold uppercase tracking-tighter">
                                            She Said Yes!
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="pt-8 flex gap-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <Sparkle className="w-4 h-4 text-white/20" />
                                        <span className="text-[10px] text-white/30 uppercase tracking-[0.5em]">Together Forever</span>
                                        <Sparkle className="w-4 h-4 text-white/20" />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene7_TheProposal;
