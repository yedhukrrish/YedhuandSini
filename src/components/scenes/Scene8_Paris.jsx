import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plane, MapPin, Globe, CreditCard } from 'lucide-react';
import CinematicScene from '../CinematicScene';

const Scene8_Paris = () => {
    const [isPassportOpen, setIsPassportOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const warpScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const warpOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const cloudSpeedMult = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const planeX = useTransform(scrollYProgress, [0.5, 1], [0, 1000]);
    const planeY = useTransform(scrollYProgress, [0.5, 1], [0, -300]);
    const planeRotate = useTransform(scrollYProgress, [0.5, 1], [-12, -45]);
    const planeOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const flashOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 0.4]);

    return (
        <CinematicScene
            containerRef={containerRef}
            background="bg-gradient-to-b from-wednesday-black via-[#1a0b2e] to-wednesday-purple-950"
        >
            {/* Animated Clouds Background with Warp Speed */}
            <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none opacity-30"
                style={{ scale: warpScale, opacity: warpOpacity }}
            >
                {[...Array(8)].map((_, i) => (
                    <CloudLayer key={i} speedMult={cloudSpeedMult} />
                ))}
            </motion.div>

            {/* Flash Overlay for the warp peak */}
            <motion.div
                className="absolute inset-0 bg-white pointer-events-none z-50"
                style={{ opacity: flashOpacity }}
            />

            <div className="flex flex-col items-center justify-center h-screen px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl"
                >
                    {/* Departure Board Style Header */}
                    <div className="mb-12 inline-block">
                        <motion.div
                            initial={{ rotateX: 90 }}
                            whileInView={{ rotateX: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="bg-black/80 p-4 rounded-lg border border-white/20 shadow-2xl backdrop-blur-md"
                        >
                            <div className="flex gap-2 text-2xl md:text-4xl font-mono text-wednesday-purple-400 tracking-tighter uppercase">
                                <span className="bg-wednesday-purple-950 px-2 py-1 rounded">P</span>
                                <span className="bg-wednesday-purple-950 px-2 py-1 rounded">A</span>
                                <span className="bg-wednesday-purple-950 px-2 py-1 rounded">R</span>
                                <span className="bg-wednesday-purple-950 px-2 py-1 rounded">I</span>
                                <span className="bg-wednesday-purple-950 px-2 py-1 rounded">S</span>
                                <span className="text-white/20 mx-2">BOUND</span>
                            </div>
                        </motion.div>
                        <motion.p
                            className="text-wednesday-purple-300/60 text-xs font-mono mt-2 tracking-[0.5em] uppercase"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            FLIGHT AI2025 • DEPARTING JAN 2025
                        </motion.p>
                    </div>

                    <div className="relative mb-16">
                        <motion.div
                            style={{ x: planeX, y: planeY, rotate: planeRotate, opacity: planeOpacity }}
                            initial={{ x: -300, y: 100, opacity: 0, scale: 0.5 }}
                            whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
                            className="relative z-20"
                        >
                            <Plane className="w-24 h-24 text-wednesday-purple-400/80 mx-auto" />
                        </motion.div>

                        {/* Abstract Flight Path */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 opacity-20" viewBox="0 0 200 100">
                            <motion.path
                                d="M 0 80 Q 50 10 100 50 T 200 20"
                                fill="transparent"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 1 }}
                            />
                        </svg>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        The Bittersweet <span className="text-wednesday-purple-400">Departure</span>
                    </h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        She left for France to pursue her Master's.
                        A dream taking flight, leaving a quiet void back home.
                    </motion.p>

                    {/* Interactive Passport Element */}
                    <div className="flex flex-col items-center">
                        <motion.div
                            layout
                            onClick={() => setIsPassportOpen(!isPassportOpen)}
                            className={`cursor-pointer relative overflow-hidden backdrop-blur-xl border border-wednesday-purple-400/20 bg-wednesday-purple-900/10 p-6 rounded-2xl shadow-2xl transition-all duration-700 group ${isPassportOpen ? 'max-w-2xl bg-wednesday-purple-900/30' : 'max-w-xs hover:border-wednesday-purple-400/40'}`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-wednesday-purple-400/20 p-3 rounded-full">
                                    <Globe className={`w-8 h-8 text-wednesday-purple-400 transition-transform duration-700 ${isPassportOpen ? 'rotate-180' : ''}`} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-white font-bold">Personal Note</h3>
                                    <p className="text-wednesday-purple-300/60 text-xs font-mono">STAMPED • JAN 2025</p>
                                </div>
                            </div>

                            <AnimatePresence>
                                {isPassportOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="mt-6 border-t border-wednesday-purple-400/10 pt-6"
                                    >
                                        <p className="text-2xl md:text-3xl font-cursive text-wednesday-purple-100/90 leading-relaxed italic">
                                            "Thousands of miles apart, yet closer than ever.
                                            Distance is just a test of how far love can travel."
                                        </p>
                                        <div className="mt-6 flex justify-between items-center text-wednesday-purple-300/40 font-mono text-[10px] tracking-widest">
                                            <span>DESTINATION: PARIS</span>
                                            <span>PASSENGER: SINI</span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {!isPassportOpen && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%]"
                                    animate={{ translateX: ['200%', '-200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            )}
                        </motion.div>
                        <p className="text-wednesday-purple-400/40 text-[10px] mt-2 uppercase tracking-widest animate-pulse">
                            Tap to view passport note
                        </p>
                    </div>
                </motion.div>
            </div>
        </CinematicScene>
    );
};

const CloudLayer = ({ speedMult }) => {
    const [config] = useState(() => ({
        width: Math.random() * 400 + 200,
        height: Math.random() * 200 + 100,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * -20
    }));

    // We can't easily animate duration with speedMult directly in a springy way, 
    // but we can use an internal motion value if we wanted more complexity.
    // For now, simple scaling and faster translate will do.

    return (
        <motion.div
            className="absolute bg-white/10 blur-3xl rounded-full"
            style={{
                width: config.width,
                height: config.height,
                left: `-20%`,
                top: config.top,
            }}
            animate={{
                x: ['0vw', '130vw'],
            }}
            transition={{
                duration: config.duration,
                repeat: Infinity,
                ease: "linear",
                delay: config.delay,
            }}
        />
    );
};

export default Scene8_Paris;
