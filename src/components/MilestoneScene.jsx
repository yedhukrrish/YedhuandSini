import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import CinematicScene from './CinematicScene';

const MilestoneScene = ({ id, title, date, context, icon: Icon, color, bg, image }) => {
    return (
        <section id={id} className="min-h-screen relative overflow-hidden bg-[#0a0514]">
            {/* Soft Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className={`absolute inset-0 ${bg} blur-[120px] opacity-20`}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 max-w-4xl mx-auto text-center">
                {/* Milestone Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`w-20 h-20 ${bg} rounded-3xl flex items-center justify-center mb-10 shadow-lg`}
                >
                    {Icon && <Icon className={`w-10 h-10 ${color}`} />}
                </motion.div>

                {/* Milestone Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative w-full"
                >
                    <div className="absolute -top-6 -right-6">
                        <Sparkles className={`w-12 h-12 ${color} opacity-40 animate-pulse`} />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-4">
                        {title}
                    </h2>
                    <p className={`text-sm tracking-[0.4em] uppercase font-bold ${color} mb-12`}>
                        {date}
                    </p>

                    {/* Image Frame */}
                    <div className="w-full aspect-video bg-white/5 rounded-3xl mb-12 flex items-center justify-center border border-white/5 relative group overflow-hidden shadow-2xl">
                        {image ? (
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Blurred Background to fill space */}
                                <img
                                    src={image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40"
                                />
                                {/* Full Image - No Crop */}
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    src={image}
                                    alt={title}
                                    className="relative z-10 max-w-full max-h-full object-contain"
                                />
                            </div>
                        ) : (
                            <>
                                <CameraIcon className="w-16 h-16 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                                <span className="text-white/20 text-[10px] mt-6 leading-none uppercase tracking-[0.3em]">
                                    Capture the Moment
                                </span>
                            </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-xl md:text-2xl text-white/80 font-serif italic leading-relaxed max-w-2xl mx-auto">
                        "{context}"
                    </p>
                </motion.div>

                {/* Vertical Connector Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            <Heart className="absolute top-20 right-20 w-32 h-32 text-white/5 pointer-events-none -rotate-12" />
        </section>
    );
};

const CameraIcon = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
    </svg>
);

export default MilestoneScene;
