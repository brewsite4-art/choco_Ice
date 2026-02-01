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
    fr: 'Boutique de Glaces et Desserts',
    ar: 'متجر المثلجات والحلويات',
  },
  'hero.description': {
    fr: 'Découvrez nos glaces artisanales et nos tartes gourmandes glacées, spécialement conçues pour les traiteurs et les professionnels de la restauration.',
    ar: 'اكتشفوا المثلجات المصنوعة يدوياً وفطائرنا المثلجة الشهية، المصممة خصيصاً لمقدمي خدمات التموين والمتخصصين في مجال المطاعم.'
  },
  'hero.viewMenu': {
    fr: 'Voir le Menu',
    ar: 'عرض القائمة',
  },
  'hero.whatsappMessage': {
    fr: 'Bonjour, je souhaite passer une commande',
    ar: 'مرحباً، أريد أن أطلب',
  },
  // History Section
  'history.title': {
    fr: 'Notre Histoire',
    ar: 'قصتنا',
  },
  'history.content': {
    fr: 'Depuis 1989, Choco Ice vous accueille dans un cadre convivial et moderne. Animés par la passion des glaces et des desserts de qualité, nous mettons notre savoir-faire au service de la qualité en sélectionnant soigneusement nos ingrédients afin d’offrir des saveurs authentiques et une expérience rafraîchissante à chaque visite.',
    ar: 'منذ 1989، يرحب بكم شوكو آيس في أجواء ودية وعصرية. مدفوعين بشغفنا للآيس كريم والحلويات عالية الجودة، نضع خبرتنا في خدمة الجودة من خلال اختيار مكوناتنا بعناية لتقديم نكهات أصلية وتجربة منعشة في كل زيارة.',
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
  'menu.qrCodeText': {
    fr: 'Scannez le QR code pour découvrir notre carte complète',
    ar: 'امسح رمز الاستجابة السريعة لاكتشاف قائمتنا الكاملة',
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

  // Locations Section
  'locations.title': {
    fr: 'Nos Emplacements',
    ar: 'مواقعنا',
  },
  'locations.description': {
    fr: 'Retrouvez-nous dans nos 3 points de vente à Tétouan et Martil',
    ar: 'تجدوننا في نقاط البيع الثلاثة في تطوان ومرتيل',
  },
  'locations.ainKhabaz': {
    fr: 'Ain Khabaz',
    ar: 'عين خباز',
  },
  'locations.wilayaCentre': {
    fr: 'Wilaya Centre',
    ar: 'وسط المدينة',
  },
  'locations.martil': {
    fr: 'Martil',
    ar: 'مارتيل',
  },

  // Footer
  'footer.description': {
    fr: 'Votre boutique de glace préféré à Tétouan. Des moments de douceur et de gourmandise.',
    ar: 'متجر المثلجات المفضل لديكم في تطوان. لحظات من الحلاوة واللذة.',
  },
  'footer.followUs': {
    fr: 'Suivez-nous',
    ar: 'تابعنا',
  },
  'footer.location': {
    fr: 'Localisation',
    ar: 'الموقع',
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
  'footer.phone': {
    fr: '0659-944838',
    ar: '0659-944838',
  },
  'footer.email': {
    fr: 'icechoco253@gmail.com',
    ar: 'icechoco253@gmail.com',
  },
  'footer.schedule': {
    fr: 'Ouvert dans l’après-midi et jusque tard dans la nuit (12 h 00 – 03 h 00)',
    ar: 'مفتوح في فترة بعد الظهر وحتى وقت متأخر من الليل (12:00 – 03:00)',
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
