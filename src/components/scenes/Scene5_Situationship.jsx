import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene5_Situationship = () => {
    const [count, setCount] = useState(0);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (!startCount) return;
        const timer = setTimeout(() => {
            if (count < 49) {
                setCount(count + 1);
            }
        }, 30);
        return () => clearTimeout(timer);
    }, [count, startCount]);

    const hearts = Array.from({ length: 8 });

    return (
        <CinematicScene background="bg-[#0a0514]">
            {/* Shifting Shadow/Light Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-radial from-wednesday-purple-500/10 to-transparent"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                {hearts.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-wednesday-purple-500/5 blur-sm"
                        style={{
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.05, 0.1, 0.05],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    >
                        <Heart className="w-32 h-32 fill-current" />
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setStartCount(true)}
                    className="max-w-4xl w-full"
                >
                    <motion.p
                        className="text-wednesday-purple-400 text-sm uppercase tracking-[0.4em] mb-4 font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        2023 - 2024 • The In Between
                    </motion.p>

                    <motion.h2
                        className="text-5xl md:text-8xl font-bold text-white mb-12 font-serif tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        The <span className="text-wednesday-purple-500">Situationship</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-3xl text-gray-200 mb-16 leading-relaxed font-serif italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        "Too close to be just friends. <br />
                        Too scared to admit we were more."
                    </motion.p>

                    <motion.div
                        className="mb-8 relative inline-block"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, type: "spring" }}
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 bg-wednesday-purple-500/20 blur-3xl rounded-full"
                        />
                        <div className="text-9xl md:text-[14rem] font-bold text-white relative z-10 tracking-tighter drop-shadow-[0_0_30px_rgba(123,79,160,0.4)]">
                            {count}
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <p className="text-2xl md:text-4xl text-gray-300 font-serif">
                            49 times I was stubborn. 49 times you stayed.
                        </p>
                        <p className="text-wednesday-purple-500 text-3xl md:text-5xl font-bold uppercase tracking-tighter">
                            You didn't give up on us.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene5_Situationship;
