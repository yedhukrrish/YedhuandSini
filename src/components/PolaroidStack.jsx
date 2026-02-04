import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PolaroidStack = () => {
    const [flippedId, setFlippedId] = useState(null);

    const photos = [
        { id: 1, title: 'The First Day', note: 'I was so nervous. You looked beautiful.', color: 'bg-white' },
        { id: 2, title: 'The Long Talk', note: '3 hours felt like 3 minutes with you.', color: 'bg-white' },
        { id: 3, title: 'The Proposal', note: 'My heart almost jumped out. Best "Yes" ever.', color: 'bg-white' },
        { id: 4, title: 'Paris Vibes', note: 'Miss you every second since I left.', color: 'bg-white' }
    ];

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            <h3 className="absolute top-8 text-3xl font-cursive text-white z-20">Your Physical Memories</h3>
            <p className="absolute top-20 text-gray-400 z-20">Drag them around... click to see my hidden notes.</p>

            <div className="relative w-96 h-96">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        drag
                        dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                        initial={{
                            rotate: (Math.random() - 0.5) * 40,
                            x: (Math.random() - 0.5) * 100,
                            y: (Math.random() - 0.5) * 100
                        }}
                        style={{ zIndex: photos.length - index }}
                        className="absolute cursor-grab active:cursor-grabbing"
                    >
                        <motion.div
                            animate={{ rotateY: flippedId === photo.id ? 180 : 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                            className="relative w-64 h-80 preserve-3d"
                            onClick={() => setFlippedId(flippedId === photo.id ? null : photo.id)}
                        >
                            {/* Front of Polaroid */}
                            <div className="absolute inset-0 backface-hidden bg-white p-4 shadow-xl border border-gray-200 flex flex-col items-center">
                                <div className="w-full h-4/5 bg-gray-100 flex items-center justify-center overflow-hidden mb-4 rounded-sm border border-black/5">
                                    <div className="text-gray-300">
                                        📷 Photo Placeholder {photo.id}
                                    </div>
                                </div>
                                <p className="font-cursive text-gray-800 text-lg">{photo.title}</p>
                            </div>

                            {/* Back of Polaroid */}
                            <div className="absolute inset-0 backface-hidden bg-white p-8 shadow-xl border border-gray-200 flex flex-col items-center justify-center text-center rotate-y-180">
                                <p className="font-cursive text-wednesday-purple-500 text-xl leading-relaxed">
                                    {photo.note}
                                </p>
                                <div className="mt-8 text-sm text-gray-400 font-serif">
                                    - Yedhu
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </div>
    );
};

export default PolaroidStack;
