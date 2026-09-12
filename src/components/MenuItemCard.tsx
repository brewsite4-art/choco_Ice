import { useState } from 'react';
import { Plus, Info } from 'lucide-react';
import type { MenuItem } from '@/data/menuData';
import { CategoryIcon } from './CategoryIcon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from '@/contexts/LanguageContext';
import { getGalleryImage } from '@/utils/assetUtils';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  const { t, language } = useLanguage();
  const [selectedSize, setSelectedSize] = useState<string>(
    item.sizes && item.sizes.length > 0 ? item.sizes[0].size : ''
  );

  const activeSizeObj = item.sizes?.find(s => s.size === selectedSize);
  const currentPrice = activeSizeObj ? activeSizeObj.price : item.price;

  const displayName = language === 'ar' && item.nameAr ? item.nameAr : item.name;
  const displayDescription = language === 'ar' && item.descriptionAr ? item.descriptionAr : item.description;

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (item.sizes && item.sizes.length > 0) {
      const sizeOpt = activeSizeObj || item.sizes[0];
      const sizedItem: MenuItem = {
        ...item,
        id: `${item.id}-${sizeOpt.size}`,
        name: `${item.name} (${sizeOpt.size})`,
        nameAr: item.nameAr ? `${item.nameAr} (${sizeOpt.size})` : `${item.name} (${sizeOpt.size})`,
        price: sizeOpt.price,
        selectedSize: sizeOpt.size,
      };
      onAddToCart(sizedItem);
    } else {
      onAddToCart(item);
    }
  };

  const getImageSrc = (image?: string) => {
    if (!image) return '';
    if (
      image.startsWith('crepes/') ||
      image.startsWith('gaufres/') ||
      image.startsWith('cups/') ||
      image.startsWith('pot/') ||
      image.startsWith('pack/') ||
      image.startsWith('pancakes/') ||
      image.startsWith('pancake/') ||
      image.startsWith('boissons/')
    ) {
      return `/assets/menu/${image}`;
    }
    const gallerySrc = getGalleryImage(image);
    return gallerySrc || `/assets/menu/${image}`;
  };

  return (
    <div className="card-menu group cursor-pointer relative overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-muted">
        {item.image ? (
          <img
            src={getImageSrc(item.image)}
            alt={displayName}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg'; // Fallback
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/30">
            <CategoryIcon category={item.category} className="w-12 h-12 text-muted-foreground/50" />
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="font-bold text-chocolate">{currentPrice} DH</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-playfair font-semibold text-foreground text-lg group-hover:text-chocolate transition-colors line-clamp-1">
            {displayName}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-3 flex-1">
          {displayDescription}
        </p>

        {/* Size Selection (e.g. for Choco Cups L / XL) */}
        {item.sizes && item.sizes.length > 0 && (
          <div className="flex items-center justify-between gap-2 mb-3 px-2.5 py-1.5 rounded-lg bg-[#FAF3E0]/80 border border-chocolate/15">
            <span className="text-xs font-semibold text-chocolate">
              {t('menu.size') || (language === 'ar' ? 'الحجم:' : 'Taille:')}
            </span>
            <div className="flex items-center gap-1.5">
              {item.sizes.map((s) => (
                <button
                  key={s.size}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(s.size);
                  }}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 ${selectedSize === s.size
                      ? 'bg-chocolate text-cream shadow-sm scale-105'
                      : 'bg-white/80 text-chocolate hover:bg-cream-dark/60'
                    }`}
                >
                  {s.size} <span className="opacity-80 font-normal">({s.price} DH)</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          {/* Details Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-chocolate hover:underline flex items-center gap-1"
              >
                <Info className="w-3 h-3" />
                {t('menu.details')}
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl text-chocolate">{displayName}</DialogTitle>
                <DialogDescription>
                  {displayDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                {item.image && (
                  <div className="rounded-lg overflow-hidden h-48 w-full mb-4">
                    <img src={getImageSrc(item.image)} alt={displayName} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Dialog Size Selector */}
                {item.sizes && item.sizes.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">
                      {t('menu.chooseSize') || (language === 'ar' ? 'اختر الحجم:' : 'Choisir la taille:')}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.sizes.map((s) => (
                        <button
                          key={s.size}
                          type="button"
                          onClick={() => setSelectedSize(s.size)}
                          className={`py-2 px-3 rounded-lg text-sm font-semibold border flex items-center justify-between transition-all ${selectedSize === s.size
                              ? 'bg-chocolate text-cream border-chocolate shadow-sm'
                              : 'bg-muted border-border hover:bg-cream-dark text-foreground'
                            }`}
                        >
                          <span>{s.size}</span>
                          <span className="font-bold">{s.price} DH</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {item.ingredients && item.ingredients.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2">{t('menu.ingredients')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ing, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-cream text-chocolate-dark">{ing}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {item.allergens && item.allergens.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive/80">{t('menu.allergens')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.allergens.map((alg, idx) => (
                        <Badge key={idx} variant="outline" className="border-destructive/30 text-destructive">{alg}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-border mt-4">
                  <span className="text-2xl font-bold text-chocolate">{currentPrice} DH</span>
                  <button
                    onClick={() => handleAddToCart()}
                    className="bg-chocolate text-cream px-6 py-2 rounded-full hover:bg-mocha transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {t('menu.addToCart')}
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Add Button */}
          <button
            className="h-10 w-10 rounded-full bg-chocolate text-cream flex items-center justify-center 
                               shadow-md transition-all duration-300 
                               hover:bg-mocha hover:scale-105 active:scale-95"
            onClick={handleAddToCart}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
