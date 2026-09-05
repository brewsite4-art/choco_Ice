import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { getGalleryImage } from '@/utils/assetUtils';

// This component can still use glob locally or we can use the centralized utility
const imageModules = import.meta.glob('@/assets/gallery/*.jpg', { eager: true });

// Configuration Cloudinary (à remplir par l'utilisateur)
const CLOUDINARY_CLOUD_NAME = ''; // ex: 'votre_cloud_name'
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

const getImageUrl = (src: string) => {
    if (!CLOUDINARY_CLOUD_NAME) return src;
    return src;
};

const GallerySection = () => {
    const { t } = useLanguage();
    const [images, setImages] = useState<string[]>([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const loadedPaths = Object.values(imageModules).map((module: any) => module.default || module);
        setImages(loadedPaths);
    }, []);

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 6);
    };

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    };

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
                    {t('gallery.title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.slice(0, displayCount).map((src, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg h-80 bg-muted"
                        >
                            {/* Blur Placeholder */}
                            <div
                                className={`absolute inset-0 bg-coffee/10 backdrop-blur-xl transition-opacity duration-500 ${loadedImages[index] ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />

                            <img
                                src={getImageUrl(src)}
                                alt={`Tarte ${index + 1}`}
                                loading="lazy"
                                decoding="async"
                                onLoad={() => handleImageLoad(index)}
                                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages[index] ? 'scale-100 blur-0' : 'scale-105 blur-lg'
                                    }`}
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <a
                                    href={`https://wa.me/212600000000?text=${encodeURIComponent(
                                        `Bonjour, je suis intéressé par cette tarte (Image ${index + 1})`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white px-6 py-2 rounded-full font-medium translate-y-4 group-hover:translate-y-0 transition-all hover:bg-coffee hover:text-white"
                                >
                                    {t('gallery.order')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {displayCount < images.length && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="bg-coffee text-white px-8 py-3 rounded-full font-medium hover:bg-coffee/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {t('gallery.showMore') || 'Voir plus'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
