import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';
import { menuData } from '@/data/menuData';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { Cart } from '@/components/Cart';
import { getGalleryImage } from '@/utils/assetUtils';

const Gallery = () => {
    const { t, language } = useLanguage();
    const { addToCart } = useCart();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter products for Tartes category
    const galleryItems = menuData.filter(item => item.category === 'Tartes' || item.image?.startsWith('cake') || item.image?.startsWith('tarte'));

    const handleAddToCart = (product: any) => {
        addToCart({ ...product, quantity: 1 });
        toast.success(t('cart.addedToCart') || (language === 'ar' ? 'تمت الإضافة إلى السلة' : 'Ajouté au panier'), { duration: 1500 });
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold uppercase tracking-widest text-sm font-semibold"
                        >
                            {t('navbar.gallery')}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-playfair font-bold text-chocolate mt-2"
                        >
                            {t('gallery.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
                        >
                            {t('featured.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {galleryItems.map((item, index) => {
                            const displayName = language === 'ar' && item.nameAr ? item.nameAr : item.name;
                            const displayDescription = language === 'ar' && item.descriptionAr ? item.descriptionAr : item.description;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group flex flex-col h-full bg-white rounded-[2rem] p-4 shadow-md hover:shadow-xl transition-all border border-border/40"
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-[1.8rem] bg-muted mb-4 border-2 border-border/50">
                                        <img
                                            src={getGalleryImage(item.image || '')}
                                            alt={displayName}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/placeholder.svg';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                onClick={() => handleAddToCart(item)}
                                                className="bg-white text-chocolate hover:bg-chocolate hover:text-white rounded-full px-6 py-5 font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all gap-2"
                                            >
                                                <ShoppingCart className="w-5 h-5" />
                                                {t('featured.order')}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="text-center px-2 flex flex-col flex-1">
                                        <h3 className="text-lg font-playfair font-bold text-chocolate mb-1">
                                            {displayName}
                                        </h3>
                                        {displayDescription && (
                                            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                                {displayDescription}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-center gap-1 mt-auto pt-2 border-t border-border/50">
                                            <span className="text-2xl font-black text-gold">
                                                {item.price.toFixed(2)}
                                            </span>
                                            <span className="text-xs font-bold text-muted-foreground uppercase">DH</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </main>

            <Footer />
            <Cart />
        </div>
    );
};

export default Gallery;
