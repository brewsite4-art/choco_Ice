import { useState, useCallback } from 'react';
import { HeroSection } from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import GallerySection from '@/components/GallerySection';
import { MenuSection } from '@/components/MenuSection';
import { Cart } from '@/components/Cart';
import { DeliveryBanner, Footer } from '@/components/Footer';
import type { MenuItem, CartItem } from '@/data/menuData';
import { toast } from '@/hooks/use-toast';
import LocationSection from '@/components/LocationSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { t } = useLanguage();

  const handleAddToCart = useCallback((item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    toast({
      title: t('cart.addedToCart'),
      description: `${item.name} - ${item.price} DH`,
    });
  }, [t]);

  const handleUpdateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      setCartItems(prev => prev.filter(i => i.id !== id));
      return;
    }
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, quantity } : i)
    );
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
    toast({
      title: t('cart.cartCleared'),
      description: t('cart.allItemsRemoved'),
    });
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <DeliveryBanner />
      <HeroSection />
      <HistorySection />
      <GallerySection />
      <MenuSection onAddToCart={handleAddToCart} />
      <LocationSection />
      <Footer />
      <Cart
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default Index;
