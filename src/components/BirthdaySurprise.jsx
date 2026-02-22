import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Cake, Mail, PartyPopper } from 'lucide-react';
import { isBirthdayEve, isBirthday, getSecondsUntilMidnightInParis, formatTime } from '../utils/time';

// ─────────────────────────────────────────────
//  Sub-Components
// ─────────────────────────────────────────────

const Digit = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="relative bg-black/40 backdrop-blur-xl border border-wednesday-purple-500/30 rounded-2xl px-5 py-4 min-w-[80px] shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={value}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block text-5xl md:text-7xl font-mono font-bold text-white tabular-nums"
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </div>
        <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-wednesday-purple-400/60">{label}</span>
    </div>
);

const EiffelTower = () => (
    <img
        src="/images/eiffel_tower.png"
        alt="Eiffel Tower"
        className="w-28 md:w-40 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] opacity-90"
    />
);


const StarField = () => {
    const stars = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{ left: star.x, top: star.y, width: star.size, height: star.size }}
                    animate={{ opacity: [0.1, 1, 0.1] }}
                    transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
};

const BokehParticles = () => {
    const particles = Array.from({ length: 15 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-wednesday-purple-500/10 blur-xl"
                    initial={{
                        width: Math.random() * 150 + 50,
                        height: Math.random() * 150 + 50,
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0
                    }}
                    animate={{
                        x: [null, Math.random() * 100 + "%"],
                        y: [null, Math.random() * 100 + "%"],
                        opacity: [0, 0.2, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};

const CinematicText = ({ text, subtext, delay = 0 }) => {
    const words = text.split(" ");
    return (
        <div className="flex flex-col items-center">
            {subtext && (
                <motion.p
                    className="text-wednesday-purple-300/60 text-[10px] uppercase tracking-[0.5em] mb-8 font-light"
                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                    animate={{ opacity: 1, letterSpacing: "0.5em" }}
                    transition={{ duration: 2, delay: delay + 0.5 }}
                >
                    {subtext}
                </motion.p>
            )}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: delay + 1 + (i * 0.2), ease: "easeOut" }}
                        className={`text-4xl md:text-6xl text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] ${word.toLowerCase() === 'birthday' || word.toLowerCase() === 'sini' ? 'font-cursive text-wednesday-purple-200' : 'font-serif'}`}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

const PartyPoppers = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-20">
            {/* Left Popper */}
            <motion.div
                initial={{ opacity: 0, scale: 0, x: -100, y: 100, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", damping: 12, delay: 1 }}
                className="absolute left-4 bottom-20 md:left-20 md:bottom-40"
            >
                <div className="relative">
                    <PartyPopper className="w-16 h-16 md:w-24 md:h-24 text-wednesday-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, delay: 1.5, repeat: 3, repeatDelay: 2 }}
                        className="absolute -top-4 -right-4 bg-wednesday-purple-300 w-8 h-8 rounded-full blur-xl"
                    />
                </div>
            </motion.div>

            {/* Right Popper */}
            <motion.div
                initial={{ opacity: 0, scale: 0, x: 100, y: 100, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", damping: 12, delay: 1.2 }}
                className="absolute right-4 bottom-20 md:right-20 md:bottom-40"
            >
                <div className="relative">
                    <PartyPopper className="w-16 h-16 md:w-24 md:h-24 text-wednesday-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, delay: 1.7, repeat: 3, repeatDelay: 2 }}
                        className="absolute -top-4 -left-4 bg-wednesday-purple-300 w-8 h-8 rounded-full blur-xl"
                    />
                </div>
            </motion.div>
        </div>
    );
};

// ─────────────────────────────────────────────
//  Celebration View
// ─────────────────────────────────────────────

const BirthdayCelebration = ({ onEnter }) => {
    useEffect(() => {
        // Initial Big confetti burst
        const triggerConfetti = () => {
            const duration = 3 * 1000;
            const end = Date.now() + duration;

            const frame = () => {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#a855f7', '#d8b4fe', '#ffffff']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#a855f7', '#d8b4fe', '#ffffff']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            };
            frame();
        };

        triggerConfetti();

        // Extra bursts for the poppers
        const timeout1 = setTimeout(() => {
            confetti({ particleCount: 150, spread: 70, origin: { x: 0.2, y: 0.7 }, colors: ['#f472b6', '#a855f7', '#fff'] });
        }, 1500);

        const timeout2 = setTimeout(() => {
            confetti({ particleCount: 150, spread: 70, origin: { x: 0.8, y: 0.7 }, colors: ['#f472b6', '#a855f7', '#fff'] });
        }, 1700);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[200] bg-gradient-to-b from-[#0a0012] via-[#0f0025] to-[#1a003a] flex flex-col items-center justify-center text-white overflow-hidden p-6"
        >
            <StarField />
            <BokehParticles />
            <PartyPoppers />

            {/* Aura Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wednesday-purple-600/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
                {/* STAGGERED MAIN TITLE */}
                <CinematicText
                    subtext="Finally,"
                    text="Happy Birthday Sini"
                    delay={0.5}
                />

                {/* ETHEREAL FLOATING PORTRAIT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                    className="relative mb-8"
                >
                    {/* Portrait Glow */}
                    <motion.div
                        className="absolute inset-0 bg-wednesday-purple-500/20 blur-[60px] rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="p-3 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                            <img
                                src="/images/dates/Her First birthday celebration.png"
                                alt="Sini's Birthday"
                                className="max-h-[40vh] md:max-h-[50vh] w-auto rounded-[2rem] object-cover pointer-events-none"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6">
                            <Sparkles className="w-12 h-12 text-wednesday-purple-200 animate-pulse" />
                        </div>
                        <div className="absolute -bottom-6 -left-6">
                            <Sparkles className="w-12 h-12 text-wednesday-purple-200 animate-pulse delay-700" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* GIFT NOTE */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="text-wednesday-purple-200/80 text-lg md:text-xl font-light italic mb-12 tracking-wide"
                >
                    A special gift is coming your way at 12:00... keep an eye out! 🎁
                </motion.p>

                {/* CTA BUTTON */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(168,85,247,0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onEnter}
                        className="bg-gradient-to-r from-wednesday-purple-600 to-purple-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all flex items-center gap-3"
                    >
                        Continue to Our Story ✨
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

// ─────────────────────────────────────────────
//  Main Birthday Surprise Gate
// ─────────────────────────────────────────────

const BirthdaySurprise = ({ onEnter }) => {
    const [timeLeft, setTimeLeft] = useState(getSecondsUntilMidnightInParis());
    const [showCelebration, setShowCelebration] = useState(false);
    const isEve = isBirthdayEve();
    const isToday = isBirthday();

    useEffect(() => {
        if (!isEve) return;
        const id = setInterval(() => setTimeLeft(getSecondsUntilMidnightInParis()), 1000);
        return () => clearInterval(id);
    }, [isEve]);

    if (!isEve && !isToday) return null;

    // Button is locked on Feb 22nd until midnight
    const isLocked = isEve && timeLeft > 0;

    const { hours, minutes, seconds } = formatTime(timeLeft);

    if (showCelebration) {
        return <BirthdayCelebration onEnter={onEnter} />;
    }

    return (
        <motion.div
            className="fixed inset-0 z-[150] bg-gradient-to-b from-[#0a0012] via-[#0f0025] to-[#1a003a] flex flex-col items-center justify-center text-white overflow-hidden"
        >
            <StarField />
            <BokehParticles />

            {/* Soft gradient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wednesday-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full">
                <EiffelTower />

                <CinematicText
                    subtext="France"
                    text={isEve ? "Your Birthday is Almost Here" : "Happy Birthday Sini"}
                    delay={0.3}
                />

                {/* Countdown — always show on Eve */}
                {isEve && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-2 mb-10"
                    >
                        <Digit value={hours} label="Hours" />
                        <span className="text-4xl md:text-6xl text-wednesday-purple-400 pb-6">:</span>
                        <Digit value={minutes} label="Mins" />
                        <span className="text-4xl md:text-6xl text-wednesday-purple-400 pb-6">:</span>
                        <Digit value={seconds} label="Secs" />
                    </motion.div>
                )}

                {/* Teaser text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-wednesday-purple-200/60 italic text-base md:text-lg mb-10 max-w-md"
                >
                    {isLocked
                        ? "Your surprise will unlock at midnight… 🔒"
                        : isEve
                            ? "Your surprise is ready 🎁"
                            : "You deserve the most magical day. 💜"}
                </motion.p>

                {/* CTA Button — locked until midnight on eve */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                >
                    <motion.button
                        whileHover={!isLocked ? { scale: 1.06, boxShadow: '0 0 40px rgba(168,85,247,0.6)' } : {}}
                        whileTap={!isLocked ? { scale: 0.97 } : {}}
                        onClick={() => !isLocked && setShowCelebration(true)}
                        className={`relative px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3 overflow-hidden
                            ${isLocked
                                ? 'bg-wednesday-purple-900/40 border border-wednesday-purple-500/20 text-wednesday-purple-500/40 cursor-not-allowed'
                                : 'bg-gradient-to-r from-wednesday-purple-600 to-purple-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer'
                            }`}
                    >
                        <Sparkles className="w-5 h-5" />
                        {isLocked ? "Locked until midnight 🔒" : isEve ? "Peek at the Surprise 🎁" : "Open Your Gift 🎁"}
                        <Sparkles className="w-5 h-5" />

                        {/* Shimmer on locked state */}
                        {isLocked && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                                animate={{ translateX: ['-200%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            />
                        )}
                    </motion.button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 text-wednesday-purple-500/40 text-xs uppercase tracking-[0.3em]"
                >
                    Made with 🖤 for Sini
                </motion.p>
            </div>
        </motion.div>
    );
};

export default BirthdaySurprise;
