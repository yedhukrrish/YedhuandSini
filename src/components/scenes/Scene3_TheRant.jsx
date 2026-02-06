import React from 'react';
import { motion } from 'framer-motion';
import CinematicScene from '../CinematicScene';

const Scene3_TheRant = () => {
    const messages = [
        "I'm NOT an alcoholic!",
        "It was just juice!",
        "Why would you even say that?",
        "Do I look like someone who drinks?",
        "Let me tell you about...",
    ];

    return (
        <CinematicScene background="bg-gradient-to-b from-wednesday-purple-900 to-wednesday-purple-900">
            <div className="flex flex-col items-center justify-center h-screen px-4">
                <motion.div
                    className="max-w-3xl w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        The 3-Hour Rant
                    </motion.h2>

                    <div className="space-y-6">
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                className="bg-wednesday-purple-500/20 backdrop-blur-sm border border-wednesday-purple-500/30 p-6 rounded-2xl"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.6 }}
                            >
                                <p className="text-white text-lg md:text-xl">{msg}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className="text-center text-wednesday-purple-500 text-xl md:text-2xl mt-16 font-cursive"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2 }}
                    >
                        You spoke for 3 hours straight. Thank you for letting me listen to every word.
                    </motion.p>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene3_TheRant;
