import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Map as MapIcon, Image as ImageIcon, Disc, HelpCircle, Heart } from 'lucide-react';
import MessageInABottle from './MessageInABottle';
import MemoryMap from './MemoryMap';
import PolaroidStack from './PolaroidStack';
import DateNightRoulette from './DateNightRoulette';
import StoryQuiz from './StoryQuiz';
import JarOfHearts from './JarOfHearts';

const BonusHub = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const features = [
        { id: 'bottle', name: 'Message in a Bottle', icon: Mail, color: 'text-blue-400' },
        { id: 'map', name: 'Memory Map', icon: MapIcon, color: 'text-green-400' },
        { id: 'polaroid', name: 'Polaroid Stack', icon: ImageIcon, color: 'text-purple-400' },
        { id: 'roulette', name: 'Date Night Roulette', icon: Disc, color: 'text-pink-400' },
        { id: 'quiz', name: 'She Knows Me?', icon: HelpCircle, color: 'text-yellow-400' },
        { id: 'hearts', name: 'Jar of Hearts', icon: Heart, color: 'text-red-400' },
    ];

    const renderFeature = () => {
        switch (activeFeature) {
            case 'bottle': return <MessageInABottle />;
            case 'map': return <MemoryMap />;
            case 'polaroid': return <PolaroidStack />;
            case 'roulette': return <DateNightRoulette />;
            case 'quiz': return <StoryQuiz />;
            case 'hearts': return <JarOfHearts />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-wednesday-black p-8 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(26,11,46,0.8)_100%)] pointer-events-none" />

            <AnimatePresence mode="wait">
                {!activeFeature ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="max-w-6xl w-full z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-cursive text-white text-center mb-12">
                            A Bonus for You...
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {features.map((feature) => (
                                <motion.button
                                    key={feature.id}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFeature(feature.id)}
                                    className="bg-wednesday-purple-900/40 backdrop-blur-md border border-wednesday-purple-500/30 p-8 rounded-3xl flex flex-col items-center justify-center group hover:border-wednesday-purple-400 transition-colors"
                                >
                                    <div className={`p-4 rounded-2xl ${feature.color}/20 mb-4 group-hover:scale-110 transition-transform`}>
                                        <feature.icon className={`w-10 h-10 text-white`} />
                                    </div>
                                    <span className="text-white font-medium tracking-wide text-center">
                                        {feature.name}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
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
