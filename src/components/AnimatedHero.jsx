import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedHero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 0.5;
                this.baseX = x;
                this.baseY = y;
                this.density = (Math.random() * 30) + 1;
                this.color = `hsla(${Math.random() * 60 + 330}, 100%, 70%, 0.8)`; // Pink/Red hues
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update(mouse) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = 100;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }
            }
        }

        const init = () => {
            particles = [];
            // Create a heart shape of particles
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Random background particles
            for (let i = 0; i < 500; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }

            // Text particles? Or just floaty ones.
            // Let's stick to floaty ambient particles for elegance + interactivity
        };

        const mouse = {
            x: null,
            y: null,
            radius: 100
        }

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update(mouse);
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 to-white">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            <div className="z-10 text-center pointer-events-none px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="text-6xl md:text-9xl font-cursive text-love-red mb-4 drop-shadow-lg"
                >
                    Our Story
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xl md:text-2xl text-love-pink tracking-widest uppercase"
                >
                    From a random snap to forever
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-love-red"
            >
                <p className="text-sm uppercase tracking-widest mb-2">Scroll Down</p>
            </motion.div>
        </section>
    );
};

export default AnimatedHero;
