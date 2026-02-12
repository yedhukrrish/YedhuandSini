import React from 'react';
import { motion } from 'framer-motion';
import CinematicScene from '../CinematicScene';
import { Sparkles } from 'lucide-react';

const Scene1_OpeningCredits = () => {
    // Generate 20 random particles for the bokeh effect
    const particles = Array.from({ length: 20 });

    const titleWords = "And the Girl Who Never Let Go".split(" ");

    return (
        <CinematicScene background="bg-[#0a0514]">
            {/* AMBIENT BOKEH PARTICLES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-wednesday-purple-500/10 blur-xl"
                        initial={{
                            width: Math.random() * 200 + 50,
                            height: Math.random() * 200 + 50,
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            x: [null, Math.random() * 100 + "%"],
                            y: [null, Math.random() * 100 + "%"],
                            opacity: [0, 0.3, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* DRAMATIC SHUTTER INTRO */}
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
                style={{ originY: 0 }}
                className="absolute inset-x-0 top-0 h-1/2 bg-black z-50 pointer-events-none"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
                style={{ originY: 1 }}
                className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-50 pointer-events-none"
            />

            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10 py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl w-full"
                >
                    {/* BREATHE-IN SUBTITLE */}
                    <motion.p
                        className="text-wednesday-purple-300/60 text-sm md:text-base uppercase tracking-[0.5em] mb-12 font-light"
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 3, delay: 1 }}
                    >
                        A journey of 49 rejections, endless patience...
                    </motion.p>

                    {/* STAGGERED MAIN TITLE */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-12">
                        {titleWords.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 1.5, delay: 2 + (i * 0.2), ease: "easeOut" }}
                                className={`text-3xl md:text-5xl font-serif text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] ${i === 2 || i === 6 ? 'font-cursive text-wednesday-purple-200' : ''}`}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    <motion.div
                        className="w-48 h-px bg-gradient-to-r from-transparent via-wednesday-purple-500/50 to-transparent mx-auto mb-16"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, delay: 3.5 }}
                    />

                    {/* ETHEREAL FLOATING PORTRAIT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 2, delay: 4 }}
                        className="relative mx-auto flex justify-center group"
                    >
                        {/* Aura Glow */}
                        <motion.div
                            className="absolute inset-0 bg-wednesday-purple-500/20 blur-[80px] rounded-full scale-110"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <img
                                src="/images/sini/sini1.png"
                                alt="The Girl Who Never Let Go"
                                className="max-h-[45vh] w-auto object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.3)] filter contrast-[1.05] brightness-[1.1]"
                            />
                            <div className="absolute -top-4 -right-4">
                                <Sparkles className="w-10 h-10 text-wednesday-purple-200 animate-pulse opacity-60" />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* SCROLL INDICATOR */}
                <motion.div
                    className="absolute bottom-12 flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 6, duration: 2 }}
                >
                    <span className="text-white/30 text-[10px] uppercase tracking-[0.6em] font-light">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-px h-12 bg-gradient-to-b from-wednesday-purple-500 to-transparent"
                    />
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene1_OpeningCredits;
