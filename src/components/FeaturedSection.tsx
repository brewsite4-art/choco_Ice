import { useLanguage } from '@/contexts/LanguageContext';
import { featuredProducts } from '@/data/menuData';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { getGalleryImage } from '@/utils/assetUtils';

export const FeaturedSection = () => {
    const { t, language } = useLanguage();
    const { addToCart } = useCart();

    const handleAddToCart = (product: any) => {
        addToCart({ ...product, quantity: 1 });
    };

    return (
        <section className="py-20 bg-cream/30 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
                        {t('gallery.title')}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t('featured.subtitle')}
                    </p>

                    <Link
                        to="/gallery"
                        className="group flex items-center gap-2 text-chocolate font-semibold hover:opacity-80 transition-all"
                    >
                        {t('featured.viewMenu')}
                        <ChevronRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                    </Link>
                </div>

                {/* Grid Container with Horizontal Scroll on Mobile */}
                <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {featuredProducts.map((product, index) => {
                        const displayName = language === 'ar' && product.nameAr ? product.nameAr : product.name;
                        const displayDescription = language === 'ar' && product.descriptionAr ? product.descriptionAr : product.description;

                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="min-w-[280px] md:min-w-0 bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group border border-border/40"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={getGalleryImage(product.image || '')}
                                        alt={displayName}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 bg-chocolate/80 backdrop-blur-md text-cream text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {t('featured.badge')}
                                    </div>

                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2 group-hover:text-gold transition-colors">
                                        <h3 className="text-lg font-bold text-chocolate truncate pr-2">
                                            {displayName}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 min-h-[40px]">
                                        {displayDescription}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-chocolate leading-none">
                                                {product.price.toFixed(2)}
                                            </span>
                                            <span className="text-sm font-bold text-muted-foreground uppercase mt-1">DH</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Button
                                                onClick={() => handleAddToCart(product)}
                                                className="bg-chocolate hover:bg-mocha text-cream gap-2 rounded-2xl px-6 h-12 shadow-lg shadow-chocolate/20 active:scale-95 transition-transform font-bold"
                                            >
                                                <ShoppingCart className="w-5 h-5" />
                                                {t('featured.order')}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};
