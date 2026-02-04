import React from 'react';
import { motion } from 'framer-motion';

const photos = [
    { url: "https://picsum.photos/id/1011/300/300", caption: "Our first coffee", rotate: 2 },
    { url: "https://picsum.photos/id/1012/300/400", caption: "Adventure time", rotate: -5 },
    { url: "https://picsum.photos/id/1013/400/300", caption: "Silly faces", rotate: 6 },
    { url: "https://picsum.photos/id/1014/300/300", caption: "Just us", rotate: -3 },
    { url: "https://picsum.photos/id/1015/300/450", caption: "Beach day", rotate: 4 },
];

const PolaroidItem = ({ photo, index }) => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            whileHover={{ scale: 1.1, zIndex: 100, rotate: 0 }}
            whileTap={{ scale: 1.1, zIndex: 100 }}
            initial={{ rotate: photo.rotate, x: Math.random() * 50 - 25, y: Math.random() * 50 - 25 }}
            className="absolute bg-white p-4 pb-12 shadow-xl w-64 cursor-grab active:cursor-grabbing"
            style={{
                transform: `rotate(${photo.rotate}deg)`,
                left: `calc(50% + ${(index - 2) * 150}px)`,
                top: '50%',
                marginLeft: '-128px', // half width
                marginTop: '-160px' // half height approx
            }}
        >
            <div className="w-full h-48 bg-gray-200 overflow-hidden mb-4">
                <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover pointer-events-none" />
            </div>
            <p className="font-cursive text-xl text-center text-gray-700 -rotate-1">{photo.caption}</p>
        </motion.div>
    );
};

const Polaroid = () => {
    return (
        <section className="py-20 px-4 min-h-[600px] relative overflow-hidden bg-orange-50/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-cursive text-love-red mb-2">Our Moments</h2>
                <p className="text-gray-500 text-sm">Drag the photos around!</p>
            </div>

            <div className="relative w-full h-[400px] flex items-center justify-center">
                {photos.map((photo, index) => (
                    <PolaroidItem key={index} photo={photo} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Polaroid;
