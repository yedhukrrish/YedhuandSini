import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar } from 'lucide-react';

const timelineData = [
    {
        date: 'Sept 2021',
        title: "The 'Alcoholic' Rant",
        desc: "Connected on Snapchat. You sent a snap of you drinking, I called you an alcoholic, and you ranted for 3 hours! That's when I knew you were special.",
    },
    {
        date: 'Jan 1, 2022',
        title: 'The New Year Call',
        desc: "You called to wish me, we planned our first date, and slowly you started showing interest.",
    },
    {
        date: '2022-2023',
        title: 'The Situationship',
        desc: "Too hard to admit we were in a relationship, too close to be just friends. The 49 rejections saga!",
    },
    {
        date: 'August 2023',
        title: "Sister's Wedding",
        desc: "Taking you to my sister's wedding—the day things felt truly real.",
    },
    {
        date: 'Jan 1, 2024',
        title: 'Finally, I Proposed',
        desc: "No more rejections. I finally asked you properly on New Year's Day.",
    },
    {
        date: 'Jan 2025',
        title: 'Paris Bound',
        desc: "You left for France for your Masters. Distance is just a test of love's strength.",
    },
    {
        date: 'Sept 2026',
        title: 'MBA & Reunion',
        desc: "September 2026 can't come soon enough. Finally being back under the same sky.",
    }
];

const TimelineItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex items-center gap-8 mb-24 w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Content Side */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-pink-100">
                    <span className="inline-block px-3 py-1 bg-pink-100 text-love-red rounded-full text-sm font-bold mb-2">
                        {item.date}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                </div>
            </div>

            {/* Center Point */}
            <div className="relative flex-shrink-0 z-10 p-2 bg-white rounded-full border-4 border-pink-200">
                <Calendar size={24} className="text-love-red" />
            </div>

            {/* Empty Side for balance */}
            <div className="w-1/2" />
        </motion.div>
    );
};

const Timeline = () => {
    // Scroll progress for the vertical line
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={ref} className="py-20 relative max-w-5xl mx-auto px-4 overflow-hidden">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-16">Our Journey</h2>

            {/* The Central Line */}
            <div className="absolute left-1/2 top-40 bottom-40 w-1 bg-pink-100 -translate-x-1/2 rounded-full" />
            <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute left-1/2 top-40 bottom-40 w-1 bg-gradient-to-b from-love-red to-love-pink -translate-x-1/2 rounded-full origin-top"
            />

            <div className="relative">
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;
