import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MessageInABottle = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
            <AnimatePresence>
                {!isOpen ? (
                    <motion.div
                        key="bottle"
                        initial={{ y: 20, rotate: -5 }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [-5, 5, -5]
                        }}
                        transition={{
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="cursor-pointer relative group"
                        onClick={() => setIsOpen(true)}
                    >
                        {/* The Bottle */}
                        <div className="w-24 h-64 bg-blue-200/20 backdrop-blur-sm border-2 border-white/30 rounded-t-full rounded-b-3xl relative overflow-hidden">
                            <div className="absolute top-0 w-full h-8 bg-blue-300/30 rounded-t-full" />
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-32 bg-yellow-100/40 rounded-sm rotate-3 shadow-sm" />
                        </div>

                        {/* Floating Glow */}
                        <div className="absolute inset-0 bg-blue-400/20 blur-3xl -z-10 animate-pulse" />

                        <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-wednesday-purple-400 font-cursive text-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to Open...
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="scroll"
                        initial={{ scale: 0, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="w-full max-w-2xl bg-[#fdf6e3] p-12 rounded-sm shadow-2xl relative overflow-hidden"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #fdf6e3 0%, #f4ecd8 100%)',
                            boxShadow: '0 0 50px rgba(0,0,0,0.5), inset 0 0 100px rgba(139, 69, 19, 0.1)'
                        }}
                    >
                        {/* Scroll Texture/Edges */}
                        <div className="absolute top-0 left-0 w-full h-4 bg-[#e2d6b5] shadow-inner" />
                        <div className="absolute bottom-0 left-0 w-full h-4 bg-[#e2d6b5] shadow-inner" />

                        <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                            <h3 className="text-3xl font-cursive text-brown-900 mb-8 text-center text-[#5d4037]">
                                To the Girl Who Never Let Go
                            </h3>

                            <div className="space-y-6 text-[#5d4037] font-serif leading-relaxed text-lg italic">
                                <p>My Dearest Sini,</p>
                                <p>
                                    As I write this, I'm thinking about the person who sat by me when I was at my most stubborn.
                                    49 times I said "no," not because I didn't want you, but because I was afraid of how much I already did.
                                </p>
                                <p>
                                    Thank you for your endless patience. Thank you for the 3-hour rants you listened to with a smile.
                                    Thank you for believing in "Us" even when I pretended I didn't.
                                </p>
                                <p>
                                    Matched with your commitment, my life finally found its constant.
                                    You are, and always will be, the best decision I ever made.
                                </p>
                                <p className="text-right mt-12">Yours Forever, <br /> Yedhu</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-8 w-full py-3 bg-[#5d4037] text-white rounded-lg font-medium hover:bg-[#3e2723] transition-colors"
                        >
                            Seal the Bottle 🍾
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Ocean Waves Effect */}
            <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-30">
                <motion.div
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[120%] h-full bg-blue-500/10 rounded-[100%] blur-2xl"
                />
            </div>
        </div>
    );
};

export default MessageInABottle;
