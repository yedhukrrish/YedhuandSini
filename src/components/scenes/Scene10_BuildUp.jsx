import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Heart, Sparkles, Cloud } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene10_BuildUp = () => {
    // Parallax Values for the "Storm"
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const bgX = useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]);
    const bgY = useTransform(springY, [-0.5, 0.5], ["-5%", "5%"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    const storyPoints = [
        "From a random Snapchat...",
        "To a 3-hour rant...",
        "Through 49 playful rejections...",
        "To family weddings and real commitments...",
        "Across oceans and time zones..."
    ];

    return (
        <CinematicScene background="bg-[#0a0514]">
            <div
                className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-32 px-4"
                onMouseMove={handleMouseMove}
            >
                {/* 1. THE TURBULENT STORM (Background Layers) */}
                <motion.div
                    style={{ x: bgX, y: bgY }}
                    className="absolute inset-x-[-10%] inset-y-[-10%] z-0 pointer-events-none"
                >
                    {/* Nebula Clouds */}
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-wednesday-purple-900/20 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full [animation-delay:2s] animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wednesday-purple-600/5 blur-[150px] rounded-full" />

                    {/* Moving Particle Storm */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white/10 w-1 h-1 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -200],
                                x: [0, (Math.random() - 0.5) * 100],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </motion.div>

                {/* 2. THE STEADY ANCHOR (The Constant) */}
                <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative mb-12"
                    >
                        {/* Glowing Aura */}
                        <motion.div
                            className="absolute inset-0 bg-wednesday-purple-500/40 blur-3xl rounded-full"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        <div className="relative p-10 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-full shadow-[0_0_50px_rgba(147,51,234,0.3)]">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Heart className="w-20 h-20 text-wednesday-purple-500 fill-wednesday-purple-500/20" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 3. THE NARRATIVE CARD */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            {storyPoints.map((text, idx) => (
                                <motion.p
                                    key={idx}
                                    className="text-lg md:text-xl text-white/40 font-serif lowercase tracking-wider italic"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.4 + 0.5 }}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5 }}
                            className="relative group mt-12"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-wednesday-purple-600/20 via-transparent to-wednesday-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="relative p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl overflow-hidden">
                                {/* Iridescent Polish */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight tracking-tight">
                                    Through every up and down, <br />
                                    you were the <motion.span
                                        className="text-wednesday-purple-500 relative inline-block font-bold"
                                        animate={{ textShadow: ["0 0 10px rgba(168,85,247,0)", "0 0 20px rgba(168,85,247,0.5)", "0 0 10px rgba(168,85,247,0)"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >constant</motion.span> I didn't know I needed.
                                </h2>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex items-center justify-center gap-4 mt-20 opacity-10"
                        animate={{ opacity: [0.05, 0.2, 0.05] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <Cloud className="w-4 h-4" />
                        <span className="text-[10px] uppercase tracking-[1em] font-bold">The Anchor Points</span>
                        <Sparkles className="w-4 h-4" />
                    </motion.div>
                </div>
            </div>
        </CinematicScene>
    );
};

export default Scene10_BuildUp;
