import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene7_TheProposal = () => {
    return (
        <CinematicScene background="bg-gradient-to-b from-wednesday-purple-500 to-wednesday-purple-800">
            <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <motion.div
                        className="mb-8"
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <Sparkles className="w-24 h-24 text-yellow-400 mx-auto" />
                    </motion.div>

                    <motion.p
                        className="text-yellow-300 text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        January 1, 2023
                    </motion.p>

                    <motion.h2
                        className="text-6xl md:text-8xl font-bold text-white mb-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        I Finally Asked
                    </motion.h2>

                    <motion.p
                        className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8 font-cursive"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        The best decision I ever made was <br /> finally matching your commitment.
                        <br />
                        <span className="text-wednesday-purple-500 text-4xl block mt-4">
                            She said yes.
                        </span>
                    </motion.p>

                    <motion.div
                        className="text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        ❤️
                    </motion.div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene7_TheProposal;
