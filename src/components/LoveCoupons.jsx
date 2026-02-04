import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';

const coupons = [
    { text: "One Back Massage", color: "bg-red-300" },
    { text: "Dinner Date (Your Choice)", color: "bg-pink-300" },
    { text: "Movie Night + Popcorn", color: "bg-purple-300" },
    { text: "Breakfast in Bed", color: "bg-orange-300" },
    { text: "No Chores for a Day", color: "bg-teal-300" },
    { text: "Yes Day (Within Reason!)", color: "bg-yellow-300" }
];

const Coupon = ({ text, color }) => {
    const handleRedeem = () => {
        // Basic mobile check or just open web whatsapp
        const message = encodeURIComponent(`Hi! I'm redeeming my coupon for: ${text} ❤️`);
        window.open(`https://wa.me/?text=${message}`, '_blank');
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`relative h-40 rounded-xl overflow-hidden shadow-lg ${color} flex`}
        >
            {/* Perforated Edge */}
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-evenly">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-pink-50 rounded-full -ml-2"></div>
                ))}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center border-l-2 border-dashed border-white/30 ml-4">
                <Ticket className="text-white/80 w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold text-white shadow-sm">{text}</h3>
                <button
                    onClick={handleRedeem}
                    className="mt-4 px-4 py-1 bg-white text-gray-800 text-sm font-bold rounded-full shadow hover:bg-gray-100 transition-colors"
                >
                    Redeem
                </button>
            </div>
        </motion.div>
    );
};

const LoveCoupons = () => {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-16">Love Coupons</h2>
            <p className="text-center text-gray-600 mb-10 -mt-10">Click "Redeem" to send me a request instantly!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coupons.map((c, i) => (
                    <Coupon key={i} {...c} />
                ))}
            </div>
        </section>
    );
};

export default LoveCoupons;
