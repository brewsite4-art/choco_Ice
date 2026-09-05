/**
 * Utility to resolve image assets for production builds.
 * Vite's import.meta.glob ensures these files are processed and hashed during build.
 */

// Eagerly load all images from gallery folder
const galleryImages = import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,webp,svg}', { eager: true });

/**
 * Resolves a gallery image URL given its filename.
 * @param filename - The basename of the file (e.g., 'cake1.jpg')
 * @returns The resolved URL or a fallback
 */
export const getGalleryImage = (filename: string): string => {
    if (!filename) return '';

    // Try to find the image in the gallery glob
    // import.meta.glob keys look like '/src/assets/gallery/filename.ext'
    const path = Object.keys(galleryImages).find(key => key.endsWith(`/${filename}`));

    if (path) {
        const module = galleryImages[path] as any;
        return module.default || module;
    }

    // Return original as fallback
    return filename;
};
