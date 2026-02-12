/**
 * Preloads a single image and returns a promise that resolves when the image is loaded.
 * @param {string} src - The image URL to preload.
 * @returns {Promise}
 */
export const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
    });
};

/**
 * Preloads an array of images.
 * @param {string[]} sources - Array of image URLs.
 */
export const preloadImages = (sources) => {
    return Promise.all(sources.map(src => preloadImage(src)));
};
