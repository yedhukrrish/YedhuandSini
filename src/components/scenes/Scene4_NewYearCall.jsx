import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene4_NewYearCall = () => {
    return (
        <CinematicScene background="bg-gradient-to-b from-wednesday-purple-900 to-wednesday-purple-900">
            <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <motion.p
                        className="text-blue-300 text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        January 1, 2022
                    </motion.p>

                    <motion.div
                        className="mb-12"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                        <Phone className="w-24 h-24 text-green-400 mx-auto" />
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        The Call
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        "Happy New Year!"
                        <br />
                        <span className="text-blue-300">We talked. We laughed. We planned a date.</span>
                        <br />
                        <span className="text-sm text-gray-300 mt-4 block">Something was starting...</span>
                    </motion.p>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene4_NewYearCall;
