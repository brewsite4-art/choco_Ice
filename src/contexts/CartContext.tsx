import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { CartItem, MenuItem } from '@/data/menuData';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface CartContextType {
    items: CartItem[];
    addToCart: (item: MenuItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    deliveryLocation: 'Tétouan' | 'Martil';
    setDeliveryLocation: (location: 'Tétouan' | 'Martil') => void;
    itemCount: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        const savedItems = localStorage.getItem('choco-ice-cart');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [deliveryLocation, setDeliveryLocation] = useState<'Tétouan' | 'Martil'>(() => {
        const savedLocation = localStorage.getItem('choco-ice-delivery-location');
        return (savedLocation as 'Tétouan' | 'Martil') || 'Tétouan';
    });
    const { toast } = useToast();
    const { t } = useLanguage();

    useEffect(() => {
        localStorage.setItem('choco-ice-cart', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        localStorage.setItem('choco-ice-delivery-location', deliveryLocation);
    }, [deliveryLocation]);

    const addToCart = (item: MenuItem) => {
        setItems(prev => {
            const existingItem = prev.find(i => i.id === item.id);
            if (existingItem) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(id);
            return;
        }
        setItems(prev =>
            prev.map(i => i.id === id ? { ...i, quantity } : i)
        );
    };

    const removeFromCart = (id: string) => {
        setItems(prev => prev.filter(i => i.id !== id));
    };

    const clearCart = () => {
        setItems([]);
        toast({
            title: t('cart.cartCleared') || "Cart cleared",
            description: t('cart.allItemsRemoved') || "All items removed",
        });
    };

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            deliveryLocation,
            setDeliveryLocation,
            itemCount,
            subtotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
