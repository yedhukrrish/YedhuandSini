import React from 'react';
import { motion } from 'framer-motion';

const CinematicScene = ({
    children,
    background = 'bg-gradient-to-b from-wednesday-purple-900 to-wednesday-purple-800',
    className = '',
    parallax = false,
    containerRef = null
}) => {
    return (
        <motion.section
            ref={containerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className={`min-h-screen w-full flex items-center justify-center relative overflow-hidden ${background} ${className}`}
        >
            {/* Film grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

            {/* Vignette effect - Wednesday theme */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-wednesday-black/80" />

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.section>
    );
};

export default CinematicScene;
