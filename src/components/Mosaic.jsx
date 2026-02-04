import React from 'react';
import { motion } from 'framer-motion';

const images = Array.from({ length: 50 }, (_, i) => `https://picsum.photos/id/${100 + i}/100/100`);

// Component for Heart Mosaic

const Mosaic = () => {
    return (
        <section className="py-20 px-4 bg-white overflow-hidden">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-16">A Million Little Pieces of Us</h2>

            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">
                <div className="absolute inset-0 grid grid-cols-8 gap-1 rotate-45 scale-75 md:scale-100 transform-gpu">
                    {images.slice(0, 48).map((src, i) => {
                        // Creating a heart shape mask by hiding corners
                        // A crude but effective grid heart
                        const isCorner =
                            (i < 2) || (i > 5 && i < 8) || // Top row corners
                            (i > 40 && i % 8 === 0) || (i > 45) // Bottom corners

                        if (isCorner && i !== 42 && i !== 43) return <div key={i} className="bg-transparent" />

                        return (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: i * 0.01 }}
                                className="overflow-hidden rounded-sm"
                            >
                                <img src={src} className="w-full h-full object-cover hover:scale-150 transition-transform duration-300" alt="" />
                            </motion.div>
                        )
                    })}
                </div>
                {/* Heart Overlay for shape reinforcement */}
                <div className="absolute inset-0 pointer-events-none mix-blend-color bg-love-red/20 heart-clip-path"></div>
            </div>
        </section>
    );
};

export default Mosaic;
