import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Map as MapIcon, Image as ImageIcon, Disc, HelpCircle, Heart, Stars, Volume2 } from 'lucide-react';
import MessageInABottle from './MessageInABottle';
import DateNightRoulette from './DateNightRoulette';
import JarOfHearts from './JarOfHearts';
import SoulfulSlideshow from './SoulfulSlideshow';

const BonusHub = () => {
    const [activeFeature, setActiveFeature] = useState(null);
    const [showSlideshow, setShowSlideshow] = useState(false);

    const features = [
        { id: 'bottle', name: 'Message in a Bottle', icon: Mail, color: 'text-blue-400' },
        { id: 'roulette', name: 'Date Night Roulette', icon: Disc, color: 'text-pink-400' },
        { id: 'hearts', name: 'Jar of Hearts', icon: Heart, color: 'text-red-400' },
    ];

    const handleOpenSlideshow = () => {
        if (window.pauseBackgroundMusic) window.pauseBackgroundMusic();
        setShowSlideshow(true);
    };

    const handleCloseSlideshow = () => {
        setShowSlideshow(false);
        if (window.playBackgroundMusic) window.playBackgroundMusic();
    };

    const renderFeature = () => {
        switch (activeFeature) {
            case 'bottle': return <MessageInABottle />;
            case 'roulette': return <DateNightRoulette />;
            case 'hearts': return <JarOfHearts />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-wednesday-black p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(26,11,46,0.8)_100%)] pointer-events-none" />

            <AnimatePresence mode="wait">
                {showSlideshow && (
                    <SoulfulSlideshow onClose={handleCloseSlideshow} />
                )}

                {!activeFeature ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="max-w-6xl w-full z-10 flex flex-col items-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-cursive text-white text-center mb-12">
                            A Bonus for You...
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
                            {features.map((feature) => (
                                <motion.button
                                    key={feature.id}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFeature(feature.id)}
                                    className="bg-wednesday-purple-900/40 backdrop-blur-md border border-wednesday-purple-500/30 p-10 rounded-3xl flex flex-col items-center justify-center group hover:border-wednesday-purple-400 transition-colors"
                                >
                                    <div className={`p-5 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform`}>
                                        <feature.icon className={`w-12 h-12 text-wednesday-purple-400`} />
                                    </div>
                                    <span className="text-white text-xl font-medium tracking-wide text-center">
                                        {feature.name}
                                    </span>
                                </motion.button>
                            ))}
                        </div>

                        {/* FINAL TOUCH: DEVADAS QUESTION */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center"
                        >
                            <p className="text-white/60 text-lg mb-6 leading-relaxed italic">
                                "If you have a question of – ina devadas sir enakhu aga en ivalo panringa"
                            </p>
                            <button
                                onClick={handleOpenSlideshow}
                                className="group relative px-8 py-3 bg-wednesday-purple-600/20 hover:bg-wednesday-purple-600/30 border border-wednesday-purple-500/50 rounded-full text-wednesday-purple-300 transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-medium tracking-widest uppercase text-sm">
                                    <Volume2 className="w-4 h-4 animate-pulse" />
                                    idha kelu
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-wednesday-purple-500/10"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </button>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="w-full h-full z-20"
                    >
                        <button
                            onClick={() => setActiveFeature(null)}
                            className="absolute top-8 left-8 text-wednesday-purple-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
                        >
                            ← Back to Hub
                        </button>

                        <div className="w-full h-full min-h-[70vh] flex items-center justify-center p-4">
                            {renderFeature()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BonusHub;
