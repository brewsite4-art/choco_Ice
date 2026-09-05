import { useState, useEffect } from 'react';
import { menuData, categories } from '@/data/menuData';
import type { MenuItem } from '@/data/menuData';
import { MenuItemCard } from './MenuItemCard';
import { CategoryIcon } from './CategoryIcon';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { categoryTranslationKeys } from '@/i18n/translations';
import { useCart } from '@/contexts/CartContext';
import { ChevronDown, ChevronUp, QrCode, ArrowRight } from 'lucide-react';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Glace');
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();
  const { addToCart } = useCart();

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  const getTranslatedCategory = (category: string) => {
    const key = categoryTranslationKeys[category];
    return key ? t(key) : category;
  };

  // Group items by subsection for the Glace category
  const groupedBySubsection = filteredItems.reduce((acc, item) => {
    const subsection = item.subsection || 'default';
    if (!acc[subsection]) {
      acc[subsection] = [];
    }
    acc[subsection].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const hasSubsections = activeCategory === 'Glace' && Object.keys(groupedBySubsection).length > 1;

  // Determine if we need a "Show More" button
  // For nested sections, hard to calc total hidden easily without complex logic, 
  // but we can check if any subsection has > 3 items.
  // For flat sections, check filteredItems.length > 3.
  const ITEMS_LIMIT = 3;

  const shouldShowButton = hasSubsections
    ? Object.values(groupedBySubsection).some(items => items.length > ITEMS_LIMIT)
    : filteredItems.length > ITEMS_LIMIT;

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Section header content if needed */}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isChocoCups = category === 'Choco Cups';
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex flex-col items-center justify-center gap-0.5 px-6 py-2.5 rounded-full font-medium transition-all duration-300 min-w-[120px] ${activeCategory === category
                  ? 'bg-chocolate text-cream shadow-md scale-105'
                  : 'bg-[#FAF3E0] text-chocolate hover:bg-cream-dark'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <CategoryIcon category={category} className="w-5 h-5" />
                  <span>{getTranslatedCategory(category)}</span>
                </div>
                {isChocoCups && (
                  <span className={`text-xs italic ${activeCategory === category ? 'text-cream/90' : 'text-chocolate/80'}`}>
                    {t('menu.chooseYourFlavour')}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="animate-fade-in-up space-y-12">
          {hasSubsections ? (
            <>
              {Object.entries(groupedBySubsection).map(([subsection, items]) => {
                const displayItems = showAll ? items : items.slice(0, ITEMS_LIMIT);
                const subsectionKey = subsection === 'Pot de glace' ? 'subsection.potDeGlace' : (subsection === 'Pack de glace' ? 'subsection.packDeGlace' : '');

                if (!items || items.length === 0) return null;

                return (
                  <div key={subsection}>
                    <div className="flex items-center justify-center mb-6">
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-chocolate/30 to-transparent"></div>
                      <h3 className="px-6 text-2xl md:text-3xl font-playfair font-bold text-chocolate">
                        {subsectionKey ? t(subsectionKey) : subsection}
                      </h3>
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-chocolate/30 to-transparent"></div>
                    </div>
                    {subsection === 'Pot de glace' && (
                      <p className="text-center text-muted-foreground mb-6">{t('subsection.glacesAEmporter')}</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {displayItems.map((item) => (
                        <MenuItemCard key={item.id} item={item} onAddToCart={addToCart} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(showAll ? filteredItems : filteredItems.slice(0, ITEMS_LIMIT)).map((item) => (
                <MenuItemCard key={item.id} item={item} onAddToCart={addToCart} />
              ))}
            </div>
          )}
        </div>

        {/* Show More / Show Less Button */}
        {shouldShowButton && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-chocolate text-chocolate rounded-full font-medium hover:bg-chocolate hover:text-white transition-all duration-300 shadow-sm"
            >
              {showAll ? (
                <>
                  {t('menu.seeLess')}
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  {t('menu.seeMore')}
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* QR Code Section */}
        <div className="mt-16 text-center">
          <Card className="inline-block shadow-xl border-none bg-card p-8">
            <CardContent className="p-0">
              <div className="w-48 h-48 mx-auto bg-background rounded-xl flex items-center justify-center mb-4 border-2 border-border overflow-hidden">
                <img
                  src="/assets/qr-code.jpg"
                  alt="QR Code Menu"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="/assets/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-3 w-full justify-between bg-chocolate hover:bg-mocha text-cream px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 shrink-0" />
                  Scannez le QR
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
