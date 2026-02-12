import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene3_TheRant = () => {
    const backgroundWords = [
        "And then...", "So I said...", "Wait...", "Exactly!",
        "It was juice!", "I'm telling you...", "Listen...",
        "3 hours...", "Non-stop", "Memory", "Story", "Voice"
    ];

    const messages = [
        "I'm NOT an alcoholic!",
        "It was just juice!",
        "Why would you even say that?",
        "Do I look like someone who drinks?",
        "Let me tell you about..."
    ];

    // Generate random word stream for the background
    const wordStream = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        text: backgroundWords[Math.floor(Math.random() * backgroundWords.length)],
        x: Math.random() * 100 + "%",
        delay: Math.random() * 10,
        duration: Math.random() * 15 + 10,
        fontSize: Math.random() * 20 + 20
    }));

    return (
        <CinematicScene background="bg-[#0a0514]">
            {/* Waterfall of Words Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {wordStream.map((word) => (
                    <motion.div
                        key={word.id}
                        className="absolute text-wednesday-purple-400 font-serif whitespace-nowrap blur-[1px]"
                        style={{
                            left: word.x,
                            fontSize: word.fontSize,
                            top: -100
                        }}
                        animate={{
                            y: ["0vh", "110vh"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: word.duration,
                            repeat: Infinity,
                            delay: word.delay,
                            ease: "linear"
                        }}
                    >
                        {word.text}
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
                <motion.div
                    className="max-w-4xl w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <Quote className="w-12 h-12 text-wednesday-purple-500 mx-auto opacity-50 mb-4" />
                        <motion.h2
                            className="text-4xl md:text-8xl font-bold text-white mb-2 font-serif tracking-tighter"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            The <span className="text-wednesday-purple-500">3-Hour</span> Rant
                        </motion.h2>
                        <p className="text-wednesday-purple-400 uppercase tracking-[0.4em] text-sm font-bold">
                            A Masterclass in Persuasion
                        </p>
                    </motion.div>

                    <div className="relative py-12">
                        {/* Narrative Echo */}
                        <motion.div
                            className="bg-wednesday-purple-500/5 backdrop-blur-md border border-wednesday-purple-500/10 p-8 md:p-16 rounded-[3rem] relative z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="space-y-8">
                                <p className="text-xl md:text-3xl text-gray-200 leading-relaxed font-serif italic">
                                    "I'm NOT an alcoholic! It was just juice! Why would you even say that?"
                                </p>
                                <div className="h-px w-24 bg-wednesday-purple-500/30 mx-auto" />
                                <p className="text-2xl md:text-4xl text-white font-serif font-bold">
                                    You spoke for 3 hours straight.
                                </p>
                            </div>
                        </motion.div>

                        {/* Pulsing Aura */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 bg-wednesday-purple-500/20 blur-[100px] rounded-full"
                        />
                    </div>

                    <motion.p
                        className="text-wednesday-purple-400 text-xl md:text-2xl mt-12 font-serif"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        Thank you for letting me listen <br />
                        to <span className="text-white border-b border-wednesday-purple-500/50">every single word.</span>
                    </motion.p>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene3_TheRant;
