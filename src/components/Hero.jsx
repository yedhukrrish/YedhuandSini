import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-pink-50 text-love-red">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute"
                    >
                        <Heart size={Math.random() * 30 + 10} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <div className="z-10 text-center px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-cursive mb-6"
                >
                    Happy Valentine's Day
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl md:text-2xl text-gray-700 font-sans font-light"
                >
                    <p className="mb-2">To my favorite person in the world.</p>
                    <p>Every moment with you is a treasure.</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10"
            >
                <span className="text-sm tracking-widest uppercase text-love-pink">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
