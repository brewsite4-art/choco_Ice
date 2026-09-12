import { useState } from 'react';
import { ShoppingCart, X, Minus, Plus, Truck } from 'lucide-react';
import { deliveryFees } from '@/data/menuData';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { getGalleryImage } from '@/utils/assetUtils';

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    deliveryLocation,
    setDeliveryLocation,
    itemCount,
    subtotal
  } = useCart();

  const { t, language } = useLanguage();

  const deliveryFee = deliveryFees[deliveryLocation];
  const total = subtotal + deliveryFee;

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

  const handleOrder = () => {
    const orderDetails = items
      .map(item => `${item.quantity}x ${language === 'ar' && item.nameAr ? item.nameAr : item.name}`)
      .join(', ');
    const message = t('order.whatsappMessage', {
      items: orderDetails,
      location: deliveryLocation,
      total: total,
    });
    // Fallback if translation fails to interpolate or is missing
    const finalMessage = message.includes('{')
      ? `Bonjour, je voudrais commander: ${orderDetails}. Livraison à ${deliveryLocation}. Total: ${total} DH`
      : message;

    const whatsappUrl = `https://wa.me/212656508859?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 end-6 z-40 w-16 h-16 rounded-full bg-chocolate text-cream 
                   shadow-elevated flex items-center justify-center hover:bg-mocha 
                   transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <ShoppingCart className="w-7 h-7" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -end-2 w-7 h-7 rounded-full bg-gold text-coffee 
                          text-sm font-bold flex items-center justify-center animate-scale-in">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-coffee/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} top-0 h-full w-full max-w-md bg-background shadow-elevated 
                          animate-slide-in-right overflow-y-auto`}>
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-2xl font-playfair font-bold text-foreground flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-chocolate" />
                {t('cart.title')}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center 
                           hover:bg-cream-dark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="p-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">{t('cart.empty')}</p>
                  <p className="text-muted-foreground text-sm mt-2">{t('cart.emptyHint')}</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="card-menu flex items-center gap-3">
                        {/* Tiny thumbnail if available */}
                        {item.image && (
                            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border">
                              <img src={getImageSrc(item.image)} alt={language === 'ar' && item.nameAr ? item.nameAr : item.name} loading="lazy" decoding="async" className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback logic
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm">{language === 'ar' && item.nameAr ? item.nameAr : item.name}</h4>
                          <p className="text-gold font-medium text-sm">{item.price} DH</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center 
                                       hover:bg-cream-dark transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-semibold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-chocolate text-cream flex items-center justify-center 
                                       hover:bg-mocha transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-7 h-7 rounded-full bg-destructive/10 text-destructive 
                                       flex items-center justify-center hover:bg-destructive/20 transition-colors ms-1"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Selection */}
                  <div className="glass-card p-4 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Truck className="w-5 h-5 text-chocolate" />
                      <span className="font-semibold text-sm">{t('cart.delivery')}</span>
                    </div>
                    <div className="flex gap-2">
                      {(Object.keys(deliveryFees) as Array<'Tétouan' | 'Martil'>).map((location) => (
                        <button
                          key={location}
                          onClick={() => setDeliveryLocation(location)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${deliveryLocation === location
                            ? 'bg-chocolate text-cream'
                            : 'bg-muted hover:bg-cream-dark'
                            }`}
                        >
                          {location} ({deliveryFees[location]} DH)
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2 mb-6 p-4 bg-muted rounded-lg text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('cart.subtotal')}</span>
                      <span className="font-medium">{subtotal} DH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('cart.delivery')} ({deliveryLocation})</span>
                      <span className="font-medium">{deliveryFee} DH</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-bold text-lg">{t('cart.total')}</span>
                        <span className="font-bold text-lg text-gold">{total} DH</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <button
                      onClick={handleOrder}
                      className="w-full btn-accent py-3 text-lg flex items-center justify-center gap-2"
                    >
                      {t('cart.orderViaWhatsapp')}
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full py-2 px-4 rounded-lg border border-border text-muted-foreground 
                                 hover:bg-muted transition-colors text-sm"
                    >
                      {t('cart.clearCart')}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
