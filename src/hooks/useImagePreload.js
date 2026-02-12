import { useEffect } from 'react';
import { preloadImages } from '../utils/imagePreloader';

/**
 * Custom hook to preload a list of images.
 * @param {string[]} images - The list of image URLs to preload.
 */
const useImagePreload = (images) => {
    useEffect(() => {
        if (images && images.length > 0) {
            preloadImages(images).catch(err => {
                console.warn('Failed to preload some images:', err);
            });
        }
    }, [images]);
};

export default useImagePreload;
