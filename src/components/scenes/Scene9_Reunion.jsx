import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene9_Reunion = () => {
    return (
        <CinematicScene background="bg-gradient-to-b from-wednesday-purple-900 to-wednesday-purple-900">
            <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    <motion.p
                        className="text-purple-300 text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        September 2026
                    </motion.p>

                    <motion.div
                        className="mb-12"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        <GraduationCap className="w-32 h-32 text-purple-400 mx-auto" />
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        The Reunion
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        My turn to join her in Paris.
                        <br />
                        <span className="text-purple-300">MBA. New chapter. Together again.</span>
                    </motion.p>

                    <motion.div
                        className="flex items-center justify-center gap-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 }}
                    >
                        <Calendar className="w-8 h-8 text-wednesday-purple-500" />
                        <span className="text-2xl font-cursive text-white">
                            Under the same sky, finally.
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene9_Reunion;
