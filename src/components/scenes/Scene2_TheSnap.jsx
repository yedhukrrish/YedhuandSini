import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CinematicScene from '../CinematicScene';

const Scene2_TheSnap = () => {
    const [showChat, setShowChat] = useState(false);

    return (
        <CinematicScene background="bg-gradient-to-b from-wednesday-purple-900 to-wednesday-purple-900">
            <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                >
                    <motion.p
                        className="text-wednesday-purple-500 text-sm uppercase tracking-widest mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        September 2021
                    </motion.p>

                    <motion.h2
                        className="text-5xl md:text-7xl font-bold text-white mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        It Started with a Snap
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        A random day. A random photo. She was drinking something.
                    </motion.p>

                    {/* Interactive element */}
                    <motion.button
                        onClick={() => setShowChat(true)}
                        className="px-8 py-4 bg-wednesday-purple-500 text-white rounded-full font-bold hover:bg-wednesday-purple-500 transition-colors shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 1 }}
                    >
                        What happened next?
                    </motion.button>

                    {/* Chat reveal */}
                    {showChat && (
                        <motion.div
                            className="mt-12 space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <motion.div
                                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl text-left max-w-md mx-auto"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-gray-200">"Are you an alcoholic? 😂"</p>
                            </motion.div>

                            <motion.div
                                className="bg-wednesday-purple-500/30 backdrop-blur-sm p-4 rounded-2xl text-left max-w-md mx-auto"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p className="text-wednesday-purple-500">"WHAT?! NO! Let me explain..."</p>
                            </motion.div>

                            <motion.p
                                className="text-gray-300 italic text-sm mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                (She ranted for the next 3 hours)
                            </motion.p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene2_TheSnap;
