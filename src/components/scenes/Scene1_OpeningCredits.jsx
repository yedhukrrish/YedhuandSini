import React from 'react';
import { motion } from 'framer-motion';
import CinematicScene from '../CinematicScene';

const Scene1_OpeningCredits = () => {
    return (
        <CinematicScene background="bg-wednesday-black">
            <div className="flex flex-col items-center justify-center h-screen text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    <motion.p
                        className="text-gray-300 text-sm uppercase tracking-[0.2em] mb-8 leading-relaxed max-w-lg mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        A journey of 49 rejections, endless patience...
                    </motion.p>

                    <motion.h1
                        className="text-4xl md:text-6xl font-cursive text-white mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 2 }}
                    >
                        And the Girl Who Never Let Go
                    </motion.h1>

                    <motion.div
                        className="w-32 h-0.5 bg-gradient-to-r from-transparent via-wednesday-purple-500 to-transparent mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 3 }}
                    />
                </motion.div>

                <motion.p
                    className="absolute bottom-20 text-gray-400 text-xs uppercase tracking-widest animate-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                >
                    Scroll to begin
                </motion.p>
            </div>
        </CinematicScene>
    );
};

export default Scene1_OpeningCredits;
