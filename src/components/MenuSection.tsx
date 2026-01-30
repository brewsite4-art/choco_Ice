import { useState } from 'react';

import { menuData, categories } from '@/data/menuData';
import type { MenuItem } from '@/data/menuData';
import { MenuItemCard } from './MenuItemCard';
import { CategoryIcon } from './CategoryIcon';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { categoryTranslationKeys } from '@/i18n/translations';


interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('Boissons Chaudes');
  const { t } = useLanguage();


  const filteredItems = menuData.filter(item => item.category === activeCategory);

  const getTranslatedCategory = (category: string) => {
    const key = categoryTranslationKeys[category];
    return key ? t(key) : category;
  };

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('menu.description')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isChocoCups = category === 'Choco Cups';
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex flex-col items-center gap-1 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-chocolate text-cream shadow-card scale-105'
                    : 'bg-cream text-chocolate hover:bg-cream-dark'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <CategoryIcon category={category} className="w-5 h-5" />
                  {getTranslatedCategory(category)}
                </div>
                {isChocoCups && (
                  <span className="text-xs italic opacity-80">{t('menu.chooseYourFlavour')}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-up">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
        {/* QR Code Section */}
        <div className="mt-16 text-center">
          <Card className="inline-block shadow-xl border-none bg-card p-8">
            <CardContent className="p-0">
              <div className="w-48 h-48 mx-auto bg-background rounded-xl flex items-center justify-center mb-4 border-2 border-border">
                <QrCode className="w-32 h-32 text-foreground" />
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
