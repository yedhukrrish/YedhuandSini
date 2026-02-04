import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';

const LoginGate = ({ onLogin }) => {
    const [inputDate, setInputDate] = useState('');
    const [error, setError] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);

    // Anniversary / Proposal Date
    const TARGET_DATE = '2023-01-01';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputDate === TARGET_DATE) {
            setIsUnlocked(true);
            setTimeout(() => {
                if (window.playBackgroundMusic) window.playBackgroundMusic();
                onLogin();
            }, 1000); // Wait for unlock animation
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <AnimatePresence>
            {!isUnlocked && (
                <motion.div
                    className="fixed inset-0 z-[60] bg-wednesday-black flex flex-col items-center justify-center text-white overflow-hidden"
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Left Photo - Your Photo */}
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, -5, 0],
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            {/* Photo placeholder - will be replaced with actual image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-wednesday-purple-600 to-wednesday-purple-900 border-4 border-wednesday-purple-400 shadow-2xl shadow-wednesday-purple-500/50 flex items-center justify-center overflow-hidden">
                                <img src="/images/yedhubg.png" alt="You" className="w-full h-full object-cover" />
                            </div>
                            {/* Wine glass */}
                            <motion.div
                                animate={{
                                    rotate: [0, 15, 0],
                                    x: [0, 20, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-4 -right-4 text-5xl"
                            >
                                🥂
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Photo - Her Photo */}
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 5, 0],
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.2
                            }}
                            className="relative"
                        >
                            {/* Photo placeholder - will be replaced with actual image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-wednesday-purple-600 to-wednesday-purple-900 border-4 border-wednesday-purple-400 shadow-2xl shadow-wednesday-purple-500/50 flex items-center justify-center overflow-hidden">
                                <img src="/images/sinibg.png" alt="Her" className="w-full h-full object-cover" />
                            </div>
                            {/* Wine glass */}
                            <motion.div
                                animate={{
                                    rotate: [0, -15, 0],
                                    x: [0, -20, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2
                                }}
                                className="absolute -bottom-4 -left-4 text-5xl"
                            >
                                🥂
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Sparkles between photos */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 text-4xl"
                    >
                        ✨
                    </motion.div>

                    {/* Center Login Form */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center p-8 max-w-2xl w-full relative z-10"
                    >
                        <Heart className="w-16 h-16 mx-auto mb-10 text-wednesday-purple-400 animate-bounce" fill="currentColor" />
                        <h1 className="text-3xl md:text-4xl font-cursive mb-12 leading-relaxed">
                            When did I finally say "Yes" to our forever?
                        </h1>

                        <form onSubmit={handleSubmit} className="relative">
                            <motion.div
                                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex items-center bg-wednesday-purple-900/40 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-transparent focus-within:border-wednesday-purple-500 transition-all">
                                    <Lock className="w-5 h-5 mr-3 text-wednesday-purple-400" />
                                    <input
                                        type="date"
                                        value={inputDate}
                                        onChange={(e) => setInputDate(e.target.value)}
                                        className="bg-transparent border-none outline-none text-white placeholder-wednesday-purple-400 w-full font-sans tracking-widest uppercase date-input-white"
                                        placeholder="YYYY-MM-DD"
                                    />
                                    <button
                                        type="submit"
                                        className="ml-3 bg-wednesday-purple-500 text-white rounded-full p-2 hover:bg-wednesday-purple-600 transition-colors"
                                    >
                                        Enter
                                    </button>
                                </div>
                            </motion.div>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute -bottom-8 left-0 right-0 text-wednesday-purple-400 text-sm"
                                >
                                    Oops! That's not it... (Try 2023-01-01)
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                    <p className="absolute bottom-8 text-wednesday-purple-500/50 text-xs">
                        Made with 🖤 for you
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginGate;
