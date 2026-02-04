import React from 'react';
import { motion } from 'framer-motion';
import { Plane, GraduationCap, MapPin } from 'lucide-react';

const FutureCard = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Stars */}
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute top-1/2 right-10 w-2 h-2 bg-pink-400 rounded-full blur-sm"></div>

                    <div className="relative z-10 text-center">
                        <div className="flex justify-center gap-4 mb-8">
                            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                                <Plane className="w-8 h-8 text-pink-300" />
                            </div>
                            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                                <GraduationCap className="w-8 h-8 text-pink-300" />
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Next Big Step</h2>
                        <p className="text-xl md:text-2xl text-pink-200 mb-12 font-cursive leading-relaxed">
                            "Counting down to September 2026. From Paris with Love, I'm coming to stay with you while I do my MBA."
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/10 pt-12">
                            <div className="flex items-center gap-3">
                                <MapPin className="text-pink-400" />
                                <span className="text-lg font-medium">Paris, France</span>
                            </div>
                            <div className="h-px md:h-8 w-20 md:w-px bg-white/20"></div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-bold text-pink-300">Countdown:</span>
                                <span className="text-lg italic opacity-80">Soon we'll be under the same sky.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FutureCard;
