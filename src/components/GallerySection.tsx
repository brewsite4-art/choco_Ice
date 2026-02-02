import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo } from 'react';

const GallerySection = () => {
    const { t } = useLanguage();

    // Load images synchronously with Vite (correct syntax)
    const galleryImages = useMemo(() => {
        const modules = import.meta.glob('@/assets/gallery/*', {
            eager: true,
            query: '?url',
            import: 'default',
        });
        return Object.values(modules) as string[];
    }, []);

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-gradient mb-12">
                    {t('gallery.title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((imageSrc, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-80"
                        >
                            <img
                                src={imageSrc}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <a
                                    href={`https://wa.me/212600000000?text=${encodeURIComponent(
                                        `Bonjour, je suis intéressé par cette tarte (Image ${index + 1})`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/90 hover:bg-white text-coffee px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                >
                                    {t('gallery.order')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
