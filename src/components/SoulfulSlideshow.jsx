import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2 } from 'lucide-react';
import useImagePreload from '../hooks/useImagePreload';

const SoulfulSlideshow = ({ onClose }) => {
    const images = [
        "/images/sini/sini1.png",
        "/images/sini/sini2.png",
        "/images/sini/sini3.png",
        "/images/sini/sini4.png",
        "/images/sini/sini5.png",
        "/images/sini/sini6.png",
        "/images/sini/sini9.png",
        "/images/sini/sini11.png",
        "/images/sini/sini15.jpg",
        "/images/sini/20231031_153610.jpg",
        "/images/sini/20231031_153614.jpg",
        "/images/sini/20231031_153618.jpg",
        "/images/group/sini16.jpg",
        "/images/group/sini17.jpg",
        "/images/group/sini18.jpg",
        "/images/group/sini19.jpg",
        "/images/group/sini20.jpg",
        "/images/group/sini21.jpg",
        "/images/group/sini22.jpg",
        "/images/group/sini23.jpg",
        "/images/dates/Our First ComicCon.jpg",
        "/images/dates/our first temple visit.jpg",
        "/images/dates/Favourite Photo of us from the temple.jpg",
        "/images/dates/she wearing saree.jpg",
        "/images/dates/Moon Restaurant with her photo.jpg",
        "/images/dates/Sowcarpet date.jpg"

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const audioRef = useRef(new Audio('/music/obunplugged.mp3'));

    // Preload slideshow images
    useImagePreload(images);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = 0.5;

        const handleEnd = () => setIsFinished(true);
        audio.addEventListener('ended', handleEnd);

        audio.play().catch(e => console.log("Audio play failed:", e));

        const timer = setInterval(() => {
            if (!isFinished) {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }
        }, 3000);

        return () => {
            clearInterval(timer);
            audio.removeEventListener('ended', handleEnd);
            audio.pause();
            audio.currentTime = 0;
        };
    }, [isFinished]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {!isFinished ? (
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Blurred BG */}
                        <img
                            src={images[currentIndex]}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                        />
                        {/* Main Image */}
                        <img
                            src={images[currentIndex]}
                            alt="Memories"
                            className="relative z-10 max-w-[90%] max-h-[85%] object-contain shadow-2xl rounded-sm border border-white/10"
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="finished"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-wednesday-black"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.5 }}
                            className="max-w-3xl space-y-12"
                        >
                            <p className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
                                "Every moment with you is a gift I'll cherish forever."
                            </p>
                            <p className="text-2xl md:text-3xl text-white/60 font-serif italic">
                                This is why I do it all – because you're my 'Why'. ❤️
                            </p>

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3 }}
                                onClick={onClose}
                                className="mt-16 px-12 py-4 bg-white/5 border border-white/20 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-all duration-500 font-serif italic text-xl"
                            >
                                Hehe Avelodha
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* OVERLAYS (Only show during slideshow) */}
            {!isFinished && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-[110] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-white transition-all group"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-4 text-white/50 animate-pulse">
                        <Volume2 className="w-5 h-5" />
                        <span className="text-xs uppercase tracking-[0.4em] font-light">Listening to Our Heartbeat</span>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default SoulfulSlideshow;
