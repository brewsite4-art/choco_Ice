export type Language = 'fr' | 'ar';

export interface Translations {
  [key: string]: {
    fr: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Hero Section
  'hero.tagline': {
    fr: 'Salon de Thé & Café',
    ar: 'صالون الشاي والقهوة',
  },
  'hero.description': {
    fr: 'Découvrez nos crêpes gourmandes, gaufres croustillantes, milkshakes onctueux et boissons chaudes dans une ambiance chaleureuse',
    ar: 'اكتشف كريباتنا اللذيذة، الوافل المقرمش، الميلك شيك الكريمي والمشروبات الساخنة في أجواء دافئة',
  },
  'hero.viewMenu': {
    fr: 'Voir le Menu',
    ar: 'عرض القائمة',
  },
  'hero.whatsappMessage': {
    fr: 'Bonjour, je souhaite passer une commande',
    ar: 'مرحباً، أريد أن أطلب',
  },

  // Menu Section
  'menu.title': {
    fr: 'Notre Menu',
    ar: 'قائمتنا',
  },
  'menu.description': {
    fr: 'Découvrez nos délicieuses créations, préparées avec amour et des ingrédients de qualité',
    ar: 'اكتشف إبداعاتنا اللذيذة، المحضرة بحب ومكونات عالية الجودة',
  },
  'menu.chooseYourFlavour': {
    fr: 'Choose your flavour',
    ar: 'اختر نكهتك',
  },

  // Categories
  'category.hotDrinks': {
    fr: 'Boissons Chaudes',
    ar: 'المشروبات الساخنة',
  },
  'category.milkshakes': {
    fr: 'Milkshakes',
    ar: 'ميلك شيك',
  },
  'category.mocktails': {
    fr: 'Mocktails',
    ar: 'موكتيل',
  },
  'category.crepes': {
    fr: 'Crêpes',
    ar: 'كريب',
  },
  'category.waffles': {
    fr: 'Gaufres',
    ar: 'وافل',
  },
  'category.chocoCups': {
    fr: 'Choco Cups',
    ar: 'أكواب الشوكولاتة',
  },

  // Cart
  'cart.title': {
    fr: 'Votre Panier',
    ar: 'سلتك',
  },
  'cart.empty': {
    fr: 'Votre panier est vide',
    ar: 'سلتك فارغة',
  },
  'cart.emptyHint': {
    fr: 'Ajoutez des articles depuis notre menu',
    ar: 'أضف منتجات من قائمتنا',
  },
  'cart.delivery': {
    fr: 'Livraison',
    ar: 'التوصيل',
  },
  'cart.subtotal': {
    fr: 'Sous-total',
    ar: 'المجموع الفرعي',
  },
  'cart.total': {
    fr: 'Total',
    ar: 'المجموع',
  },
  'cart.orderViaWhatsapp': {
    fr: 'Commander via WhatsApp',
    ar: 'اطلب عبر واتساب',
  },
  'cart.clearCart': {
    fr: 'Vider le panier',
    ar: 'إفراغ السلة',
  },
  'cart.addedToCart': {
    fr: 'Ajouté au panier',
    ar: 'تمت الإضافة إلى السلة',
  },
  'cart.cartCleared': {
    fr: 'Panier vidé',
    ar: 'تم إفراغ السلة',
  },
  'cart.allItemsRemoved': {
    fr: 'Tous les articles ont été supprimés',
    ar: 'تم حذف جميع المنتجات',
  },

  // Delivery Banner
  'delivery.banner': {
    fr: 'Livraison: Tétouan {tetouan} DH • Martil {martil} DH',
    ar: 'التوصيل: تطوان {tetouan} درهم • مرتيل {martil} درهم',
  },

  // Footer
  'footer.description': {
    fr: 'Votre salon de thé préféré à Tétouan. Des moments de douceur et de gourmandise.',
    ar: 'صالون الشاي المفضل لديك في تطوان. لحظات من الحلاوة واللذة.',
  },
  'footer.contact': {
    fr: 'Contact',
    ar: 'اتصل بنا',
  },
  'footer.hours': {
    fr: 'Horaires',
    ar: 'أوقات العمل',
  },
  'footer.monSat': {
    fr: 'Lun - Sam: 9h00 - 23h00',
    ar: 'الإثنين - السبت: 9:00 - 23:00',
  },
  'footer.sunday': {
    fr: 'Dimanche: 10h00 - 22h00',
    ar: 'الأحد: 10:00 - 22:00',
  },
  'footer.rights': {
    fr: '© 2026 Choco ICE. Tous droits réservés.',
    ar: '© 2026 شوكو آيس. جميع الحقوق محفوظة.',
  },

  // WhatsApp Order Message
  'order.whatsappMessage': {
    fr: 'Bonjour! Je souhaite commander:\n{items}\n\nLivraison: {location}\nTotal: {total} DH',
    ar: 'مرحباً! أريد أن أطلب:\n{items}\n\nالتوصيل: {location}\nالمجموع: {total} درهم',
  },

  // Language Selector
  'language.french': {
    fr: 'Français',
    ar: 'الفرنسية',
  },
  'language.arabic': {
    fr: 'العربية',
    ar: 'العربية',
  },

  // Common
  'common.add': {
    fr: 'Ajouter',
    ar: 'إضافة',
  },
};

// Category mapping for translations
export const categoryTranslationKeys: { [key: string]: string } = {
  'Boissons Chaudes': 'category.hotDrinks',
  'Milkshakes': 'category.milkshakes',
  'Mocktails': 'category.mocktails',
  'Crêpes': 'category.crepes',
  'Gaufres': 'category.waffles',
  'Choco Cups': 'category.chocoCups',
};
