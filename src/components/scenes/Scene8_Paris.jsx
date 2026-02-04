import React from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene8_Paris = () => {
    return (
        <CinematicScene background="bg-gradient-to-b from-wednesday-purple-900 via-wednesday-purple-900 to-wednesday-purple-900">
            <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <motion.p
                        className="text-blue-300 text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        January 2025
                    </motion.p>

                    <motion.div
                        className="mb-12"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                    >
                        <Plane className="w-32 h-32 text-blue-400 mx-auto" />
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        Paris Bound
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        She left for France to pursue her Master's.
                        <br />
                        <span className="text-blue-300">Thousands of miles apart...</span>
                    </motion.p>

                    <motion.div
                        className="flex items-center justify-center gap-4 text-gray-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                    >
                        <MapPin className="w-6 h-6" />
                        <span className="text-lg">But distance is just a test of how far love can travel.</span>
                    </motion.div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene8_Paris;
