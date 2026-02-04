import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';

const letters = [
    {
        id: 1,
        title: "Open When You're Sad",
        content: "Remember that you are loved more than words can say. I'm always here for you...",
        color: "bg-blue-100"
    },
    {
        id: 2,
        title: "Open When You Miss Me",
        content: "Close your eyes and think of our favorite spot. I'm right there with you in spirit...",
        color: "bg-pink-100"
    },
    {
        id: 3,
        title: "Open When You're Happy",
        content: "I love seeing that smile! I hope I can be the reason for many more...",
        color: "bg-yellow-100"
    }
];

const LetterModal = ({ letter, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.5, y: 100, rotate: -10 }}
                animate={{ scale: 1, y: 0, rotate: 0 }}
                exit={{ scale: 0.5, y: 100, rotate: 10 }}
                className={`bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative paper-texture`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <X size={24} />
                </button>

                <h3 className="text-2xl font-cursive text-love-red mb-6 border-b pb-4">{letter.title}</h3>
                <p className="text-gray-700 font-serif leading-relaxed text-lg whitespace-pre-wrap">
                    {letter.content}
                </p>
                <div className="mt-8 text-right font-cursive text-xl text-love-pink">
                    - Forever Yours
                </div>
            </motion.div>
        </motion.div>
    );
}

const Envelope = ({ letter, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(letter)}
            className="w-full max-w-sm cursor-pointer"
        >
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative border-t-4 border-love-red">
                <div className="p-6 flex flex-col items-center justify-center h-48 bg-pink-50/50">
                    <Mail size={48} className="text-love-red mb-4" />
                    <h3 className="font-bold text-gray-800 text-lg text-center">{letter.title}</h3>
                </div>
                {/* Envelope Flap Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[150px] border-l-transparent border-t-[100px] border-t-love-red/10 border-r-[150px] border-r-transparent pointer-events-none"></div>
            </div>
        </motion.div>
    )
}

const Letters = () => {
    const [selectedLetter, setSelectedLetter] = useState(null);

    return (
        <section className="py-20 px-4">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-16">Open When...</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {letters.map((letter) => (
                    <Envelope key={letter.id} letter={letter} onClick={setSelectedLetter} />
                ))}
            </div>

            <AnimatePresence>
                {selectedLetter && (
                    <LetterModal letter={selectedLetter} onClose={() => setSelectedLetter(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Letters;
