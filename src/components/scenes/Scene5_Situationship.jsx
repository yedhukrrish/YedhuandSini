import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CinematicScene from '../CinematicScene';

const Scene5_Situationship = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count < 49) {
                setCount(count + 1);
            }
        }, 30);
        return () => clearTimeout(timer);
    }, [count]);

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
                        2022 - 2023
                    </motion.p>

                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        The Situationship
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 mb-16 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Too close to be just friends.
                        <br />
                        Too scared to admit we were more.
                    </motion.p>

                    <motion.div
                        className="mb-8"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, type: "spring" }}
                    >
                        <div className="text-9xl md:text-[12rem] font-bold text-wednesday-purple-500">
                            {count}
                        </div>
                    </motion.div>

                    <motion.p
                        className="text-2xl md:text-3xl text-gray-300 font-cursive"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        49 times I was stubborn. 49 times you stayed.
                        <br />
                        <span className="text-wednesday-purple-500">I'm so glad you didn't give up on us.</span>
                    </motion.p>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene5_Situationship;
