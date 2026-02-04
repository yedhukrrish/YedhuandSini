import React from 'react';
import { motion } from 'framer-motion';
import CinematicScene from '../CinematicScene';

const Scene10_BuildUp = () => {
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
                        className="text-xl md:text-2xl text-gray-200 leading-relaxed space-y-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            From a random Snapchat...
                        </motion.span>

                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            To a 3-hour rant...
                        </motion.span>

                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            Through 49 playful rejections...
                        </motion.span>

                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            To family weddings and real commitments...
                        </motion.span>

                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7 }}
                        >
                            Across oceans and time zones...
                        </motion.span>
                    </motion.p>

                    <motion.h2
                        className="text-4xl md:text-5xl font-cursive text-white mt-16 leading-relaxed"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.2, type: "spring" }}
                    >
                        Through every up and down, <br /> you were the constant I didn't know I needed.
                    </motion.h2>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene10_BuildUp;
