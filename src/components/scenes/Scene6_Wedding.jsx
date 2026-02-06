import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene6_Wedding = () => {
    return (
        <CinematicScene background="bg-gradient-to-b from-wednesday-purple-900 to-wednesday-purple-500">
            <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <motion.p
                        className="text-wednesday-purple-500 text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        May 2023
                    </motion.p>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold text-white mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Meeting the Family
                    </motion.h2>

                    <motion.div
                        className="mb-12"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        <Heart className="w-32 h-32 text-wednesday-purple-500 mx-auto fill-current" />
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        I took her to my sister's wedding.
                        <br />
                        <span className="text-wednesday-purple-500">She met my family. They loved her.</span>
                    </motion.p>

                    <motion.p
                        className="text-3xl font-cursive text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 }}
                    >
                        Things got real.
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-0 right-0 md:bottom-10 md:right-10 z-10 pointer-events-none"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <img
                    src="/images/familyphoto.png"
                    alt="My Family"
                    className="w-72 md:w-[32rem] h-auto object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                />
            </motion.div>
        </CinematicScene>
    );
};

export default Scene6_Wedding;
