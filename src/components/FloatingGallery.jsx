import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const FloatingGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    // Solo images (1-13) - PNG
    const soloImages = Array.from({ length: 13 }, (_, i) => ({
        src: `/images/sini/sini${i + 1}.png`,
        type: 'solo'
    }));

    // Group images (16-23) - JPG
    const groupImages = Array.from({ length: 8 }, (_, i) => ({
        src: `/images/group/sini${i + 16}.jpg`,
        type: 'group'
    }));

    // Combine and shuffle slightly to mix them up
    const images = [...soloImages, ...groupImages].sort(() => Math.random() - 0.5);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            // Show only after passing Scene 1 (approx 100vh)
            if (latest > window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, [scrollY]);

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const newPositions = images.map((img) => {
            // Randomly choose Left (2-12%) or Right (78-88%) to avoid edges
            const isLeft = Math.random() > 0.5;
            const leftPos = isLeft ? Math.random() * 10 + 2 : Math.random() * 10 + 78;

            // Group images are larger, so give them more space/scale
            const isGroup = img.type === 'group';

            return {
                top: `${Math.random() * 1000 + 100}vh`, // Spread across more vertical space (10-11 screens)
                left: `${leftPos}%`,
                rotate: Math.random() * 20 - 10,
                scale: isGroup ? Math.random() * 0.3 + 0.8 : Math.random() * 0.4 + 0.6,
                duration: Math.random() * 5 + 4,
            };
        });
        setPositions(newPositions);
    }, []);

    return (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden h-full">
            {isVisible && positions.length > 0 && images.map((img, index) => (
                <motion.div
                    key={index}
                    className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
                    style={{
                        top: positions[index].top,
                        left: positions[index].left,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: positions[index].scale,
                        y: [0, -30, 0],
                        rotate: positions[index].rotate
                    }}
                    transition={{
                        y: {
                            duration: positions[index].duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        opacity: { duration: 0.8 }
                    }}
                    drag
                    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                    whileHover={{ scale: 1.1, zIndex: 100 }}
                    whileDrag={{ scale: 1.1, zIndex: 100 }}
                >
                    <img
                        src={img.src}
                        alt="Memory"
                        className={`object-cover transition-all duration-300 ${img.type === 'solo'
                            ? "w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-wednesday-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]"
                            : "w-28 h-28 md:w-40 md:h-40 rounded-xl border-4 border-pink-200 shadow-[0_0_25px_rgba(244,114,182,0.6)] hover:shadow-[0_0_35px_rgba(244,114,182,0.8)] hover:rotate-2"
                            }`}
                        draggable={false}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingGallery;
