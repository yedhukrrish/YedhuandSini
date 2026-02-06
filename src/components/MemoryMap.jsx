import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';

const MemoryMap = () => {
    const [selectedPin, setSelectedPin] = useState(null);

    const pins = [
        {
            id: 1,
            top: '30%', left: '25%',
            title: 'The First Snap',
            date: 'Sept 2021',
            desc: 'Where it all began. That random Snapchat notification that changed everything.'
        },
        {
            id: 2,
            top: '50%', left: '70%',
            title: 'The 3-Hour Rant',
            date: 'Oct 2021',
            desc: 'The night I listened to you ramble for 3 hours straight. That\'s when I knew I wanted to listen to you forever.'
        },
        {
            id: 3,
            top: '75%', left: '40%',
            title: 'The "Yes" Moment',
            date: 'Jan 1, 2024',
            desc: 'The New Year\'s proposal. When I finally matched your commitment and promised you my forever.'
        },
        {
            id: 4,
            top: '20%', left: '80%',
            title: 'Paris Arrival',
            date: 'Jan 2025',
            desc: 'The beginning of our newest chapter across oceans.'
        }
    ];

    return (
        <div className="relative w-full max-w-5xl aspect-video bg-wednesday-purple-900/20 backdrop-blur-sm rounded-3xl border border-wednesday-purple-500/30 overflow-hidden shadow-2xl p-8">
            <h3 className="text-3xl font-cursive text-white text-center mb-4">Our Map of Moments</h3>
            <p className="text-gray-400 text-center mb-12">Click the glowing pins to revisit our journey...</p>

            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 200C150 150 250 250 350 200S500 100 600 200S750 300 700 400S500 450 400 400S200 350 100 400S0 300 100 200Z" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
                </svg>
            </div>

            <div className="relative w-full h-full">
                {pins.map((pin) => (
                    <motion.button
                        key={pin.id}
                        style={{ top: pin.top, left: pin.left }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setSelectedPin(pin)}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
                    >
                        <div className="relative">
                            <MapPin className="w-8 h-8 text-wednesday-purple-400 fill-wednesday-purple-500/20 group-hover:text-white transition-colors" />
                            <div className="absolute inset-0 -z-10 bg-wednesday-purple-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity animate-pulse" />
                            <div className="absolute -top-1 w-2 h-2 bg-white rounded-full left-1/2 -translate-x-1/2 blur-[1px]" />
                        </div>
                    </motion.button>
                ))}

                <AnimatePresence>
                    {selectedPin && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="absolute inset-0 m-auto w-full max-w-md h-fit bg-wednesday-purple-900/90 backdrop-blur-xl border border-wednesday-purple-400/50 p-8 rounded-2xl shadow-2xl z-20 pointer-events-auto"
                        >
                            <button
                                onClick={() => setSelectedPin(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <span className="text-wednesday-purple-400 font-medium tracking-widest text-sm uppercase block mb-2">
                                {selectedPin.date}
                            </span>
                            <h4 className="text-2xl font-bold text-white mb-4">{selectedPin.title}</h4>
                            <p className="text-gray-300 leading-relaxed italic">
                                "{selectedPin.desc}"
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Legend / Distance Line */}
            <div className="absolute bottom-4 right-8 flex items-center gap-4">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-wednesday-purple-500 to-transparent" />
                <span className="text-wednesday-purple-500 text-xs tracking-widest uppercase">The Endless Mile</span>
            </div>
        </div>
    );
};

export default MemoryMap;
