import { useEffect } from 'react';

const useHeartTrail = () => {
    useEffect(() => {
        const createHeart = (e) => {
            const heart = document.createElement('div');
            heart.classList.add('heart-trail');
            
            // Random size between 10px and 30px
            const size = Math.random() * 20 + 10;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            
            heart.style.left = `${e.clientX}px`;
            heart.style.top = `${e.clientY}px`;
            
            // Random color from our palette
            const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ff8fa3'];
            heart.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1000);
        };

        const handleMouseMove = (e) => {
            // Throttle to avoid too many elements
            if (Math.random() > 0.8) {
                createHeart(e);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Inject styles dynamically if not present
        if (!document.getElementById('heart-trail-style')) {
            const style = document.createElement('style');
            style.id = 'heart-trail-style';
            style.innerHTML = `
                .heart-trail {
                    position: fixed;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E") no-repeat center;
                    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/%3E%3C/svg%3E") no-repeat center;
                    mask-size: contain;
                    -webkit-mask-size: contain;
                    z-index: 9999;
                    animation: floatUp 1s ease-out forwards;
                }
                
                @keyframes floatUp {
                    0% {
                        transform: translate(-50%, -50%) scale(0.5);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -150%) scale(1.5);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
};

export default useHeartTrail;
