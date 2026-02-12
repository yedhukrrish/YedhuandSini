import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Heart, Sparkles, Cloud } from 'lucide-react';
import CinematicScene from '../CinematicScene';

// --- ORGANIC SILK PETAL SYSTEM ---
const SilkPetal = ({ delay }) => {
    const randomX = useMemo(() => Math.random() * 100, []);
    const randomRotate = useMemo(() => Math.random() * 360, []);
    const duration = useMemo(() => 10 + Math.random() * 15, []);
    const size = useMemo(() => 15 + Math.random() * 20, []);

    return (
        <motion.div
            initial={{ y: -50, x: `${randomX}%`, opacity: 0, rotate: randomRotate }}
            animate={{
                y: "110vh",
                x: [`${randomX}%`, `${randomX + (Math.random() - 0.5) * 10}%`, `${randomX}%`],
                opacity: [0, 0.8, 0.8, 0],
                rotate: randomRotate + 360
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
            className="absolute pointer-events-none z-0"
            style={{ width: size, height: size }}
        >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                <path d="M12 21.35C12 21.35 1 12.03 1 7C1 4.24 3.24 2 6 2C7.71 2 9.28 2.89 10.21 4.25L12 6.8L13.79 4.25C14.72 2.89 16.29 2 18 2C20.76 2 23 4.24 23 7C23 12.03 12 21.35 12 21.35Z" fill="#F43F5E" fillOpacity="0.4" />
            </svg>
        </motion.div>
    );
};

const Scene11_TheQuestion = ({ onAccept }) => {
    const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
    const [accepted, setAccepted] = useState(false);
    const [noHoverCount, setNoHoverCount] = useState(0);

    const handleOurStoryContinues = () => {
        const firstMeet = document.getElementById('first-meet');
        if (firstMeet) {
            firstMeet.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Parallax for Soulful Reveal
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });
    const parallaxX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
    const parallaxY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

    useEffect(() => {
        const handleMove = (e) => {
            mouseX.set(e.clientX / window.innerWidth - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    const handleNoHover = () => {
        const x = Math.random() * 400 - 200;
        const y = Math.random() * 300 - 150;
        setNoBtnPos({ x, y });
        setNoHoverCount(prev => prev + 1);
    };

    const handleYes = () => {
        setAccepted(true);
        if (onAccept) onAccept();
        if (window.switchToLoveSong) window.switchToLoveSong();

        // Final "Yay!" Celebration
        const yaySound = new Audio('/music/yay.mp3');
        yaySound.volume = 0.6;
        yaySound.play().catch(e => console.log("Yay sound file not found:", e));
    };

    const questionText = "Will you be my Valentine?".split(" ");

    return (
        <CinematicScene background="bg-[#0a0514]">
            {/* 1. WATERCOLOR BLOOM BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        background: accepted
                            ? [
                                "radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.2) 0%, transparent 80%)",
                                "radial-gradient(circle at 60% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 80%)",
                                "radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.2) 0%, transparent 80%)"
                            ]
                            : [
                                "radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)",
                                "radial-gradient(circle at 70% 70%, rgba(244, 63, 94, 0.1) 0%, transparent 60%)",
                                "radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)"
                            ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 scale-150 blur-3xl opacity-60"
                />
            </div>

            {/* 2. SILK PETAL RAIN (Active on acceptance) */}
            <AnimatePresence>
                {accepted && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(40)].map((_, i) => (
                            <SilkPetal key={i} delay={Math.random() * 10} />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <div className="relative flex flex-col items-center justify-center min-h-screen px-4 z-10 overflow-hidden">
                <AnimatePresence mode="wait">
                    {!accepted ? (
                        <motion.div
                            key="question"
                            className="text-center max-w-4xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(15px)" }}
                        >
                            {/* HERO IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
                                className="relative mb-12 inline-block"
                            >
                                {/* Glowing Background Aura */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-wednesday-purple-400/30 blur-[50px] rounded-full scale-125"
                                />
                                {/* Image Content */}
                                <div
                                    className="relative z-10 w-48 h-48 md:w-72 md:h-72 flex items-center justify-center overflow-visible"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to right, black 85%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to right, black 85%, transparent 100%)',
                                        maskComposite: 'intersect',
                                        WebkitMaskComposite: 'source-in'
                                    }}
                                >
                                    <img
                                        src="/images/myedhu.png"
                                        alt="Our Connection"
                                        className="max-w-[110%] max-h-[110%] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 z-20">
                                    <Sparkles className="w-8 h-8 text-wednesday-purple-300 animate-pulse" />
                                </div>
                            </motion.div>

                            {/* SOFT TEXT REVEAL */}
                            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-16 px-4">
                                {questionText.map((word, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + idx * 0.2, duration: 1.2, ease: "easeOut" }}
                                        className="text-4xl md:text-6xl font-serif text-white/90 drop-shadow-sm italic"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </div>

                            {/* ROMANTIC BUTTONS */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-16 relative">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleYes}
                                    className="px-16 py-7 bg-white/5 border border-white/20 backdrop-blur-xl text-white rounded-full font-serif italic text-2xl shadow-xl hover:bg-white/10 transition-all duration-500"
                                >
                                    YES! ❤️
                                </motion.button>

                                <div className="relative">
                                    <motion.button
                                        animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                                        onMouseEnter={handleNoHover}
                                        onTouchStart={handleNoHover}
                                        className="px-12 py-6 text-white/30 font-serif italic text-xl"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    >
                                        {noHoverCount > 0 ? "Maybe not? 😉" : "No"}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="accepted"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-center relative py-20 px-8 max-w-3xl"
                        >
                            {/* SOULFUL BREATHING HEART (Accepted State) */}
                            <motion.div
                                className="relative mb-8 inline-block"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-red-400/20 blur-[60px] rounded-full"
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                />
                                <div className="relative p-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Heart className="w-32 h-32 text-red-500/90 fill-red-500/20 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]" />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* HANDWRITTEN YAY */}
                            <div className="relative mb-8">
                                <motion.h2
                                    className="text-7xl md:text-[8rem] font-cursive text-white drop-shadow-2xl"
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    animate={{ opacity: 1, pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                >
                                    Yay! ❤️
                                </motion.h2>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {/* WHISPERED CLOUD CARD */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 1.5 }}
                                className="relative p-8 md:p-12 mb-12 group max-w-2xl mx-auto"
                            >
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 rotate-1 scale-105 group-hover:rotate-0 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 -rotate-1 group-hover:rotate-0 transition-transform duration-1000" />

                                <div className="relative z-10 space-y-6">
                                    <p className="text-3xl md:text-4xl text-white font-serif italic leading-tight">
                                        "I'm the luckiest version of me."
                                    </p>
                                    <p className="text-lg md:text-xl text-white/60 font-serif max-w-xl mx-auto leading-relaxed">
                                        Let’s make every sunrise as beautiful as this one.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.5, duration: 1 }}
                                onClick={handleOurStoryContinues}
                                className="px-16 py-7 text-white/40 font-serif italic text-2xl hover:text-white/80 transition-all duration-700 underline underline-offset-8 decoration-white/10"
                            >
                                Our story continues...
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </CinematicScene>
    );
};

export default Scene11_TheQuestion;
