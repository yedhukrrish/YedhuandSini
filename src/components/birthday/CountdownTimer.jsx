import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import { getSecondsUntilMidnightInParis, formatTime } from '../../utils/time';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(getSecondsUntilMidnightInParis());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getSecondsUntilMidnightInParis());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (timeLeft <= 0) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
            <div className="bg-black/60 backdrop-blur-xl border border-wednesday-purple-500/30 px-6 py-4 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.2)] flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-wednesday-purple-400 animate-pulse" />
                    <span className="text-wednesday-purple-200 uppercase tracking-[0.2em] text-[10px] font-bold">
                        Journey to Her Birthday
                    </span>
                    <Sparkles className="w-4 h-4 text-wednesday-purple-400 animate-bounce" />
                </div>

                <div className="text-3xl md:text-5xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-wednesday-purple-200 to-white tabular-nums tracking-tighter">
                    {formatTime(timeLeft)}
                </div>

                <div className="text-wednesday-purple-400/60 text-[8px] uppercase tracking-[0.3em]">
                    Time in Paris
                </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-wednesday-purple-500/10 blur-3xl -z-10 rounded-full" />
        </motion.div>
    );
};

export default CountdownTimer;
