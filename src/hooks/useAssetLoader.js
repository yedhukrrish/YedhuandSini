import { useState, useEffect } from 'react';

const useAssetLoader = (assets) => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadAssets = async () => {
            const totalAssets = assets.audio.length + assets.images.length;
            let loadedCount = 0;

            const updateProgress = () => {
                loadedCount++;
                setProgress(Math.round((loadedCount / totalAssets) * 100));
            };

            const loadAudio = (src) => {
                return new Promise((resolve) => {
                    const audio = new Audio();
                    audio.oncanplaythrough = resolve;
                    audio.onerror = resolve; // Continue even if one fails
                    audio.src = src;
                    audio.load(); // Force load
                    // Fallback timeout in case oncanplaythrough never fires
                    setTimeout(resolve, 5000); 
                }).then(updateProgress);
            };

            const loadImage = (src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = resolve;
                    img.src = src;
                }).then(updateProgress);
            };

            try {
                const audioPromises = assets.audio.map(loadAudio);
                const imagePromises = assets.images.map(loadImage);

                await Promise.all([...audioPromises, ...imagePromises]);
            } catch (err) {
                console.error("Asset loading error:", err);
            } finally {
                setIsLoading(false);
            }
        };

        loadAssets();
    }, [assets]);

    return { progress, isLoading };
};

export default useAssetLoader;
