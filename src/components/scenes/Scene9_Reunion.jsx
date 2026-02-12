import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, MapPin, Plane, Heart, Clock, Ticket } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene9_Reunion = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const arrivalScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const arrivalOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Plane Journey Sync
    const planeX = useTransform(scrollYProgress, [0, 0.5], [-1000, 0]);
    const planeY = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
    const planeRotate = useTransform(scrollYProgress, [0, 0.5], [-45, 0]);

    const particles = Array.from({ length: 15 });

    return (
        <CinematicScene
            containerRef={containerRef}
            background="bg-[#0a0514]"
        >
            <motion.div
                className="w-full h-full"
                style={{ scale: arrivalScale, opacity: arrivalOpacity }}
            >
                {/* Animated Bokeh Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particles.map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-wednesday-purple-500/10 blur-xl"
                            initial={{
                                width: Math.random() * 200 + 100,
                                height: Math.random() * 200 + 100,
                                x: Math.random() * 100 + "%",
                                y: Math.random() * 100 + "%",
                                opacity: Math.random() * 0.3
                            }}
                            animate={{
                                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                {/* Parallax Floating Icons */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <motion.div
                        style={{ x: planeX, y: planeY, rotate: planeRotate }}
                        animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/4 left-1/4"
                    >
                        <Plane className="w-16 h-16 text-wednesday-purple-400" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-1/4 right-1/4"
                    >
                        <MapPin className="w-12 h-12 text-wednesday-purple-300" />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute top-2/3 left-1/2"
                    >
                        <Heart className="w-8 h-8 text-wednesday-purple-500" />
                    </motion.div>
                </div>

                <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl w-full"
                    >
                        <motion.p
                            className="text-purple-300 text-sm uppercase tracking-[0.3em] mb-4 font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            September 2026 • The Promise
                        </motion.p>

                        <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 drop-shadow-2xl">
                            The <span className="text-wednesday-purple-500">Reunion</span>
                        </h2>

                        {/* Interactive Boarding Pass */}
                        <motion.div
                            layout
                            onClick={() => setIsRevealed(!isRevealed)}
                            className={`cursor-pointer mx-auto relative overflow-hidden backdrop-blur-md border border-white/10 bg-white/5 p-6 md:p-10 rounded-3xl shadow-2xl transition-all duration-500 group ${isRevealed ? 'max-w-2xl' : 'max-w-md'
                                }`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Ticket className="w-6 h-6 text-wednesday-purple-400" />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                                    <div className="text-left">
                                        <p className="text-[10px] text-purple-300 uppercase tracking-widest">Passenger</p>
                                        <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter font-serif">Yedhu</p>
                                    </div>
                                    <div className="text-center px-4">
                                        <motion.div
                                            animate={{ x: isRevealed ? [0, 5, 0] : 0 }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <Plane className="w-8 h-8 text-wednesday-purple-500" />
                                        </motion.div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-purple-300 uppercase tracking-widest">Destination</p>
                                        <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter font-serif">Sini • Paris</p>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {!isRevealed ? (
                                        <motion.div
                                            key="collapsed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="py-4"
                                        >
                                            <p className="text-wednesday-purple-400 font-cursive text-2xl animate-pulse">
                                                Tap to reveal the journey
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="expanded"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-left space-y-6 overflow-hidden"
                                        >
                                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic font-serif">
                                                "Three years of miles, minutes, and memories. Now, the distance finally dissolves. My turn to fly across the world, not for a visit, but to stay."
                                            </p>

                                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-full bg-wednesday-purple-500/20">
                                                        <GraduationCap className="w-5 h-5 text-wednesday-purple-400" />
                                                    </div>
                                                    <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">MBA Chapter</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-full bg-wednesday-purple-500/20">
                                                        <Heart className="w-5 h-5 text-wednesday-purple-400" />
                                                    </div>
                                                    <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">Together Again</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Ticket Decorative Elements */}
                            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a0514] border-r border-white/5" />
                            <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a0514] border-l border-white/5" />

                            {/* Perforated Line */}
                            <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-white/10 pointer-events-none opacity-20" />
                        </motion.div>

                        <motion.div
                            className="mt-16 flex flex-col items-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div className="flex items-center gap-4 text-wednesday-purple-400/50">
                                <div className="h-[1px] w-12 bg-current" />
                                <Clock className="w-4 h-4" />
                                <div className="h-[1px] w-12 bg-current" />
                            </div>
                            <p className="text-2xl md:text-3xl font-cursive text-wednesday-purple-200">
                                Under the same sky, finally.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </CinematicScene>
    );
};

export default Scene9_Reunion;
