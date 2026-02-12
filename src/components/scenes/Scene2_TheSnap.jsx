import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Camera, Sparkle, Battery } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene2_TheSnap = () => {
    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set((mouseX / width) - 0.5);
        y.set((mouseY / height) - 0.5);
    };

    return (
        <CinematicScene background="bg-[#05020a]">
            {/* 1. CAMERA HUD OVERLAY */}
            <div className="absolute inset-0 pointer-events-none z-20 border-[20px] border-black/40">
                {/* Corner Brackets */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/20" />
                <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/20" />
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/20" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/20" />

                {/* HUD Info */}
                <div className="absolute top-10 left-10 flex items-center gap-3 text-white/40 font-mono text-[10px] tracking-widest">
                    <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-2 bg-red-600 rounded-full"
                    />
                    <span>REC // 00:12:20:22</span>
                </div>

                <div className="absolute bottom-10 right-10 flex items-center gap-3 text-white/40 font-mono text-[10px]">
                    <Battery className="w-3 h-3" />
                    <span>84% ISO 1600</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div
                className="flex flex-col items-center justify-center min-h-screen py-32 px-4 text-center relative z-10"
                onMouseMove={handleMouseMove}
            >
                <motion.div
                    className="relative w-full max-w-5xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* THE 3D POLAROID */}
                    <motion.div
                        style={{ rotateX, rotateY, perspective: 1200 }}
                        className="relative z-10 p-2 inline-block mb-12"
                    >
                        <div className="bg-white p-5 pb-16 shadow-[0_40px_80px_rgba(0,0,0,0.8)] rounded-sm relative overflow-hidden">
                            <div className="aspect-square bg-[#0a0514] rounded-sm mb-5 flex flex-col items-center justify-center p-8 border border-black/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-wednesday-purple-500/10 to-transparent opacity-30" />
                                <Camera className="w-12 h-12 text-wednesday-purple-500 mb-6" />
                                <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tighter">Dec 22</h3>
                                <p className="text-wednesday-purple-400 font-mono text-[10px] uppercase mt-2 font-bold tracking-widest">The First Snap</p>
                            </div>
                            <p className="font-cursive text-gray-800 text-3xl">Where it all began.</p>
                        </div>
                    </motion.div>

                    {/* RESOLVED TEXT & CHAT */}
                    <div className="space-y-10">
                        <div className="max-w-xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6 tracking-tight">
                                The <span className="text-wednesday-purple-500">Origin</span>
                            </h2>
                            <p className="text-lg md:text-2xl text-gray-300 font-serif italic leading-relaxed">
                                "Our worlds collided in a single frame. <br />
                                Little did I know, this random photo was the start of everything."
                            </p>
                        </div>

                        {/* CHAT BUBBLES */}
                        <div className="flex flex-col items-center gap-6">
                            <motion.div
                                className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl text-left max-w-xs shadow-xl"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                <p className="text-gray-200 font-serif text-lg italic">"Are you an alcoholic? 😂"</p>
                            </motion.div>

                            <motion.div
                                className="bg-wednesday-purple-600/20 border border-wednesday-purple-500/20 backdrop-blur-xl p-5 rounded-2xl text-right max-w-xs shadow-xl"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, type: "spring" }}
                            >
                                <p className="text-wednesday-purple-100 font-serif text-lg font-bold">"WHAT?! NO! It was juice!"</p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex items-center justify-center gap-4 pt-10 opacity-20"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Sparkle className="w-4 h-4" />
                            <span className="text-[9px] uppercase tracking-[0.6em] font-bold">Signal Acquired // Dec 2022</span>
                            <Sparkle className="w-4 h-4" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

export default Scene2_TheSnap;
