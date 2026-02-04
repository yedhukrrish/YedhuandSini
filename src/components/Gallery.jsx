import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
    "https://picsum.photos/id/101/400/300",
    "https://picsum.photos/id/102/300/400",
    "https://picsum.photos/id/103/400/400",
    "https://picsum.photos/id/104/300/300",
    "https://picsum.photos/id/106/400/300",
    "https://picsum.photos/id/108/300/400",
    "https://picsum.photos/id/109/400/400",
    "https://picsum.photos/id/110/300/300",
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-16">Our Memories</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <motion.div
                        layoutId={`card-${index}`}
                        key={index}
                        className={`cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow relative group ${index % 3 === 0 ? 'row-span-2' : ''
                            }`}
                        // Just a simple staggered grid effect by spanning rows
                        onClick={() => setSelectedId(index)}
                    >
                        <motion.img
                            src={img}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            alt="Memory"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox / Expanded View */}
            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                            >
                                <X size={24} />
                            </button>
                            <motion.img
                                src={images[selectedId]}
                                className="w-full h-full object-contain max-h-[90vh]"
                                alt="Memory Expanded"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
