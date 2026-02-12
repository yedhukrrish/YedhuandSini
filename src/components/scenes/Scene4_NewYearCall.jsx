import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene4_NewYearCall = () => {
    const stardust = Array.from({ length: 25 });
    const rings = [1, 2, 3];

    return (
        <CinematicScene background="bg-[#0a0514]">
            {/* Digital Stardust Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {stardust.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-blue-400/20 rounded-full"
                        style={{
                            width: Math.random() * 2 + 1,
                            height: Math.random() * 2 + 1,
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                        }}
                        animate={{
                            opacity: [0.1, 0.4, 0.1],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl w-full"
                >
                    <motion.p
                        className="text-wednesday-purple-400 text-sm uppercase tracking-[0.4em] mb-4 font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        January 1, 2023 • The First Signal
                    </motion.p>

                    {/* Pulsing Phone Hero */}
                    <div className="relative mb-16 inline-block">
                        {/* Audio Wave Rings */}
                        {rings.map((ring) => (
                            <motion.div
                                key={ring}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-wednesday-purple-500/30 rounded-full"
                                initial={{ width: 100, height: 100, opacity: 0.5 }}
                                animate={{
                                    width: [100, 300],
                                    height: [100, 300],
                                    opacity: [0.5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: ring * 0.8,
                                    ease: "easeOut"
                                }}
                            />
                        ))}

                        <motion.div
                            className="relative z-10 p-10 rounded-full bg-wednesday-purple-900/20 backdrop-blur-sm border border-wednesday-purple-500/20"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 0.2,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        >
                            <motion.div
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-wednesday-purple-500/20 blur-2xl rounded-full"
                            />
                            <Phone className="w-20 h-20 text-wednesday-purple-400 relative z-10" />
                        </motion.div>
                    </div>

                    <motion.h2
                        className="text-6xl md:text-8xl font-bold text-white mb-8 font-serif tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        The <span className="text-wednesday-purple-500">Call</span>
                    </motion.h2>

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-2xl md:text-4xl text-white font-serif italic tracking-tighter">
                            "Happy New Year!"
                        </p>
                        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-serif">
                            Three hours flew by. We talked about everything and nothing—and suddenly, a date was whispered.
                        </p>
                        <motion.div
                            className="flex items-center justify-center gap-4 text-wednesday-purple-400/50 pt-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm uppercase tracking-[0.3em]">Something was starting...</span>
                            <Sparkles className="w-4 h-4" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene4_NewYearCall;
