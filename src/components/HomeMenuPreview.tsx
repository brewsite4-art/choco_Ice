import { useState } from 'react';
import { menuData, categories } from '@/data/menuData';
import { MenuItemCard } from './MenuItemCard';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { categoryTranslationKeys } from '@/i18n/translations';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CategoryIcon } from './CategoryIcon';

export const HomeMenuPreview = () => {
    const [activeCategory, setActiveCategory] = useState<string>('Glace');
    const { addToCart } = useCart();
    const { t } = useLanguage();

    const getTranslatedCategory = (category: string) => {
        const key = categoryTranslationKeys[category];
        return key ? t(key) : category;
    };

    // Filter items for the active category
    const categoryItems = menuData.filter(item => item.category === activeCategory);

    // Select 3 random items
    const randomItems = categoryItems
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    return (
        <section className="py-8 px-4 bg-gradient-to-b from-background to-cream/20">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-6">
                    {/* Main Title - Compact */}
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate mb-6">
                        {t('menu.title')}
                    </h2>

                    {/* Category Tabs - Compact Style */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            const isChocoCups = category === 'Choco Cups';

                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`
                                        flex flex-col items-center justify-center gap-1 px-6 py-2.5 rounded-full transition-all duration-300 min-w-[120px]
                                        ${isActive
                                            ? 'bg-chocolate text-cream shadow-md scale-105'
                                            : 'bg-[#FAF3E0] text-chocolate hover:bg-[#F0E6D2]'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-2 font-medium text-base">
                                        <CategoryIcon category={category} className={`w-4 h-4 ${isActive ? 'text-cream' : 'text-chocolate'}`} />
                                        <span>{getTranslatedCategory(category)}</span>
                                    </div>
                                    {isChocoCups && (
                                        <span className={`text-xs italic ${isActive ? 'text-cream/90' : 'text-chocolate/80'} mt-0.5`}>
                                            {t('menu.chooseYourFlavour')}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Items Grid - Compact Gap */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 animate-fade-in-up">
                    {randomItems.map((item) => (
                        <MenuItemCard key={item.id} item={item} onAddToCart={addToCart} />
                    ))}
                </div>

                {/* See More Button - Compact */}
                <div className="text-center">
                    <Link
                        to="/menu"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-chocolate text-chocolate rounded-full font-semibold text-base hover:bg-chocolate hover:text-white transform hover:scale-105 transition-all duration-300 shadow-sm"
                    >
                        {t('menu.seeMore')}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
