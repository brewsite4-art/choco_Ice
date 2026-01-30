import { Plus } from 'lucide-react';
import type { MenuItem } from '@/data/menuData';
import { CategoryIcon } from './CategoryIcon';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  return (
    <div className="card-menu group cursor-pointer" onClick={() => onAddToCart(item)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <CategoryIcon category={item.category} className="w-4 h-4 text-chocolate-light" />
            <h3 className="font-playfair font-semibold text-foreground text-lg group-hover:text-chocolate transition-colors">
              {item.name}
            </h3>
          </div>
          {item.description && (
            <p className="text-muted-foreground text-sm">{item.description}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="price-tag">{item.price} DH</span>
          <button 
            className="w-8 h-8 rounded-full bg-chocolate text-cream flex items-center justify-center 
                       opacity-0 group-hover:opacity-100 transition-all duration-300 
                       hover:bg-mocha hover:scale-110 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item);
            }}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
