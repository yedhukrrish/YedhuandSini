import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScratchCard = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const container = containerRef.current;

        // Set canvas size to match container
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        // Fill with scratch layer
        ctx.fillStyle = '#CCCCCC'; // Silver
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Text on top layer
        ctx.fillStyle = '#666666';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("SCRATCH ME!", canvas.width / 2, canvas.height / 2);

        // Scratch logic
        let isDrawing = false;

        const getPosition = (e) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: (e.clientX || e.touches[0].clientX) - rect.left,
                y: (e.clientY || e.touches[0].clientY) - rect.top
            };
        };

        const scratch = (x, y) => {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
            checkReveal();
        };

        const handleStart = (e) => {
            isDrawing = true;
            const pos = getPosition(e);
            scratch(pos.x, pos.y);
        };

        const handleMove = (e) => {
            if (!isDrawing) return;
            e.preventDefault();
            const pos = getPosition(e);
            scratch(pos.x, pos.y);
        };

        const handleEnd = () => {
            isDrawing = false;
        };

        const checkReveal = () => {
            // Simple check: clear if enough pixels are transparent
            // Optimization: checking every move is expensive, maybe just check on end?
            // keeping it simple for now, just revealing logic outside canvas
        };

        canvas.addEventListener('mousedown', handleStart);
        canvas.addEventListener('mousemove', handleMove);
        canvas.addEventListener('mouseup', handleEnd);
        canvas.addEventListener('touchstart', handleStart);
        canvas.addEventListener('touchmove', handleMove);
        canvas.addEventListener('touchend', handleEnd);

        return () => {
            canvas.removeEventListener('mousedown', handleStart);
            canvas.removeEventListener('mousemove', handleMove);
            canvas.removeEventListener('mouseup', handleEnd);
            canvas.removeEventListener('touchstart', handleStart);
            canvas.removeEventListener('touchmove', handleMove);
            canvas.removeEventListener('touchend', handleEnd);
        };
    }, []);

    return (
        <section className="py-20 px-4 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-cursive text-love-red mb-12">Secret Surprise</h2>

            <div ref={containerRef} className="relative w-[300px] h-[300px] rounded-xl overflow-hidden shadow-2xl">
                {/* Hidden Content */}
                <div className="absolute inset-0 bg-yellow-100 flex items-center justify-center flex-col p-6 text-center">
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXN5aG55bnJ6aHZ5aG55bnJ6aHZ5aG55bnJ6aHZ5aG55bnJ6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriO0OEd9QIDdllqo/giphy.gif"
                        alt="Funny"
                        className="w-32 h-32 mb-4 rounded-full"
                    />
                    <h3 className="text-xl font-bold text-gray-800">You found me!</h3>
                    <p className="text-gray-600">I love you a latte! ☕</p>
                </div>

                {/* Scratch Layer */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-10 cursor-crosshair touch-none"
                />
            </div>
        </section>
    );
};

export default ScratchCard;
