import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const ThenVsNow = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    return (
        <section className="py-20 px-4">
            <h2 className="text-4xl font-cursive text-center text-love-red mb-12">How It Started vs How It's Going</h2>

            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div
                    ref={containerRef}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-col-resize select-none"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                >
                    {/* Image 2 (Right/Top layer - Full width but clipped) */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://picsum.photos/id/1025/1200/800')`, // "Now" Photo
                            clipPath: `inset(0 0 0 ${sliderPosition}%)`
                        }}
                    />

                    {/* Image 1 (Left/Bottom layer) */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://picsum.photos/id/1024/1200/800')`, // "Then" Photo
                            width: `${sliderPosition}%`
                        }}
                    />

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="bg-white rounded-full p-2 shadow-lg text-love-red">
                            <ArrowLeftRight size={20} />
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm pointer-events-none">
                        Then
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm pointer-events-none">
                        Now
                    </div>
                </div>
                <p className="mt-4 text-gray-500 italic">Drag the slider to time travel</p>
            </div>
        </section>
    );
};

export default ThenVsNow;
