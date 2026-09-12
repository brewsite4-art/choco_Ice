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
  'hero.scrollToExplore': {
    fr: 'Scroll pour explorer',
    ar: 'مرر لاستكشاف',
  },
  // History Section
  'history.title': {
    fr: 'Notre Histoire',
    ar: 'قصتنا',
  },
  'history.content': {
    fr: 'Depuis 1989, Choco Ice sublime vos moments gourmands avec des glaces et desserts de qualité, élaborés à partir d’ingrédients soigneusement sélectionnés. Grâce à notre service de livraison par camions frigorifiques, nous garantissons fraîcheur et qualité dans toute la région de Tétouan.',
    ar: 'منذ سنة 1989، تقدم شوكوآيس تجربة ذوقية مميزة من خلال مثلجات وحلويات عالية الجودة، مع خدمة توصيل عبر شاحنات مبردة تضمن الطراوة في جميع أنحاء جهة تطوان.',
  },

  // Gallery Section
  'gallery.title': {
    fr: 'Nos Tartes Artisanales',
    ar: 'فطائرنا الحرفية',
  },
  'featured.subtitle': {
    fr: 'Une sélection de nos tartes glacées les plus appréciées, préparées chaque matin avec des produits de saison.',
    ar: 'مجموعة مختارة من فطائرنا المثلجة الأكثر شعبية، يتم تحضيرها كل صباح بمنتجات موسمية.',
  },
  'featured.viewMenu': {
    fr: 'Voir tout le menu',
    ar: 'عرض القائمة الكاملة',
  },
  'featured.badge': {
    fr: 'Tartes',
    ar: 'فطائر',
  },
  'featured.order': {
    fr: 'Commander',
    ar: 'اطلب الآن',
  },
  'gallery.order': {
    fr: 'Commander cette tarte',
    ar: 'اطلب هذه الفطيرة',
  },
  'gallery.addToCart': {
    fr: 'Ajouter au panier',
    ar: 'أضف إلى السلة',
  },
  'gallery.showMore': {
    fr: 'Voir plus',
    ar: 'عرض المزيد',
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
  'category.iceCream': {
    fr: 'Glaces',
    ar: 'مثلجات',
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
  'category.glace': {
    fr: 'Glace',
    ar: 'مثلجات',
  },
  'category.pancakes': {
    fr: 'Pancakes',
    ar: 'بان كيك',
  },
  'category.boissons': {
    fr: 'Boissons',
    ar: 'مشروبات',
  },

  // Subsections
  'subsection.potDeGlace': {
    fr: 'Pot De Glace',
    ar: 'علب المثلجات',
  },
  'subsection.packDeGlace': {
    fr: 'Pack De Glace',
    ar: 'باكات المثلجات',
  },
  'subsection.glacesAEmporter': {
    fr: 'Glace À Emporter',
    ar: 'مثلجات للأخذ',
  },

  // Menu controls
  'menu.seeMore': {
    fr: 'Voir plus',
    ar: 'عرض المزيد',
  },
  'menu.seeLess': {
    fr: 'Voir moins',
    ar: 'عرض أقل',
  },
  'menu.specialFlavors': {
    fr: 'Saveurs spéciales',
    ar: 'نكهات خاصة',
  },
  'menu.size': {
    fr: 'Taille',
    ar: 'الحجم',
  },
  'menu.chooseSize': {
    fr: 'Choisir la taille',
    ar: 'اختر الحجم',
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
  'locations.seeDetails': {
    fr: 'Voir détails',
    ar: 'عرض التفاصيل',
  },
  'locations.type.boutique': {
    fr: 'Ain Khabaz',
    ar: 'عين خباز',
  },
  'locations.type.cafe': {
    fr: 'Wilaya Centre',
    ar: 'وسط المدينة',
  },
  'locations.type.delivery': {
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
  // Navbar
  'navbar.home': {
    fr: 'Accueil',
    ar: 'الرئيسية',
  },
  'navbar.menu': {
    fr: 'Menu',
    ar: 'القائمة',
  },
  'navbar.gallery': {
    fr: 'Tartes',
    ar: 'فطائر',
  },
  'navbar.contact': {
    fr: 'Contact',
    ar: 'اتصل بنا',
  },
  'navbar.professionals': {
    fr: 'Professionnels',
    ar: 'المحترفون',
  },

  // Video Section
  'video.title': {
    fr: "L'Art de la Glace Artisanale",
    ar: 'فن الآيس كريم الحرفي',
  },
  'video.subtitle': {
    fr: "Plongez dans les coulisses de notre atelier. Chaque jour, nous sélectionnons les meilleurs ingrédients pour créer des glaces et des desserts d'exception.",
    ar: 'اكتشف كواليس ورشتنا. نختار يومياً أفضل المكونات لابتكار مثلجات وحلويات استثنائية.',
  },
  'video.handmade': {
    fr: 'Fait Maison',
    ar: 'صنع منزلي',
  },
  'video.ingredients': {
    fr: 'Ingrédients Premium',
    ar: 'مكونات فاخرة',
  },
  'video.savoirFaire': {
    fr: 'Savoir-Faire',
    ar: 'مهارة وخبرة',
  },

  // Reviews Section
  'reviews.title': {
    fr: 'Ce que disent nos clients',
    ar: 'ما يقوله عملاؤنا',
  },
  'reviews.subtitle': {
    fr: 'La satisfaction de nos gourmands est notre plus belle récompense. Découvrez les témoignages de notre communauté.',
    ar: 'رضا عملائنا هو أعظم مكافأة لنا. اكتشف شهادات مجتمعنا.',
  },
  'reviews.leaveReview': {
    fr: 'Laisser un avis',
    ar: 'اترك رأيك',
  },
  'reviews.seeMore': {
    fr: 'Voir plus d’avis',
    ar: 'عرض المزيد من الآراء',
  },
  'reviews.verified': {
    fr: 'Vérifié',
    ar: 'متحقق منه',
  },
  'reviews.form.title': {
    fr: 'Ajouter un avis',
    ar: 'إضافة رأي',
  },
  'reviews.form.name': {
    fr: 'Votre nom',
    ar: 'اسمك',
  },
  'reviews.form.rating': {
    fr: 'Votre note',
    ar: 'تقييمك',
  },
  'reviews.form.text': {
    fr: 'Votre commentaire',
    ar: 'تعليقك',
  },
  'reviews.form.submit': {
    fr: 'Publier l’avis',
    ar: 'نشر الرأي',
  },
  'reviews.form.success': {
    fr: 'Merci ! Votre avis a été enregistré.',
    ar: 'شكراً! تم تسجيل رأيك.',
  },
  'reviews.stats.basedOn': {
    fr: 'Basé sur {count} avis',
    ar: 'بناءً على {count} رأي',
  },
  'reviews.stats.avg': {
    fr: 'Moyenne',
    ar: 'المعدل',
  },

  // Contact Page
  'contact.pageTitle': {
    fr: 'Contactez-nous',
    ar: 'تواصل معنا',
  },
  'contact.pageSubtitle': {
    fr: 'Une question ? Une commande spéciale pour votre établissement ? Ou envie de réserver pour un événement ? Nous sommes à votre écoute.',
    ar: 'لديك سؤال؟ طلب خاص لمؤسستك؟ أو ترغب في الحجز لحدث ما؟ نحن في خدمتك.',
  },
  'contact.infoTitle': {
    fr: 'Nos Coordonnées',
    ar: 'معلومات الاتصال',
  },
  'contact.findUs': {
    fr: 'Retrouvez-nous',
    ar: 'مواقعنا',
  },
  'contact.callUs': {
    fr: 'Appelez-nous',
    ar: 'اتصل بنا',
  },
  'contact.formTitle': {
    fr: 'Envoyez-nous un message',
    ar: 'أرسل لنا رسالة',
  },
  'contact.form.name': {
    fr: 'Nom complet',
    ar: 'الاسم الكامل',
  },
  'contact.form.email': {
    fr: 'Email',
    ar: 'البريد الإلكتروني',
  },
  'contact.form.phone': {
    fr: 'Téléphone',
    ar: 'الهاتف',
  },
  'contact.form.type': {
    fr: 'Type de demande',
    ar: 'نوع الطلب',
  },
  'contact.form.message': {
    fr: 'Message',
    ar: 'الرسالة',
  },
  'contact.form.submit': {
    fr: 'Envoyer le message',
    ar: 'إرسال',
  },
  'contact.form.success': {
    fr: 'Message envoyé !',
    ar: 'تم الإرسال بنجاح!',
  },
  'contact.type.placeholder': {
    fr: 'Sélectionnez un sujet',
    ar: 'اختر الموضوع',
  },
  'contact.type.general': {
    fr: 'Question générale',
    ar: 'سؤال عام',
  },
  'contact.type.reservation': {
    fr: 'Réservation événement',
    ar: 'حجز مناسبة',
  },
  'contact.type.professional': {
    fr: 'Commande Professionnelle (B2B)',
    ar: 'طلب مهني (شركات)',
  },

  // Menu Details
  'menu.details': {
    fr: 'Détails & Ingrédients',
    ar: 'التفاصيل والمكونات',
  },
  'menu.ingredients': {
    fr: 'Ingrédients',
    ar: 'المكونات',
  },
  'menu.allergens': {
    fr: 'Allergènes',
    ar: 'مسببات الحساسية',
  },
  'menu.addToCart': {
    fr: 'Ajouter au panier',
    ar: 'أضف إلى السلة',
  },

  // Newsletter
  'newsletter.title': {
    fr: 'Newsletter',
    ar: 'النشرة البريدية',
  },
  'newsletter.description': {
    fr: 'Rejoignez notre programme de fidélité.',
    ar: 'انضم لبرنامج الولاء الخاص بنا.',
  },
  'newsletter.placeholder': {
    fr: 'Votre email',
    ar: 'بريدك الإلكتروني',
  },
  'newsletter.button': {
    fr: 'OK',
    ar: 'تأكيد',
  },

  // Professionals Page
  'professionals.title': {
    fr: 'Espace Professionnels',
    ar: 'فضاء المحترفين',
  },
  'professionals.subtitle': {
    fr: 'Partenaire de confiance pour les restaurants, hôtels et traiteurs',
    ar: 'شريك موثوق للمطاعم والفنادق ومقدمي الطعام',
  },
  'professionals.intro': {
    fr: 'Depuis 1989, Choco Ice accompagne les professionnels de la restauration avec des produits de qualité supérieure. Nos glaces et desserts glacés sont spécialement conçus pour répondre aux exigences des traiteurs, restaurants et hôtels.',
    ar: 'منذ عام 1989، ترافق شوكو آيس المحترفين في مجال المطاعم بمنتجات عالية الجودة. تم تصميم مثلجاتنا وحلوياتنا المثلجة خصيصاً لتلبية متطلبات مقدمي الطعام والمطاعم والفنادق.',
  },
  'professionals.whyChooseUs': {
    fr: 'Pourquoi nous choisir ?',
    ar: 'لماذا تختارنا؟',
  },
  'professionals.advantage1.title': {
    fr: 'Livraison Réfrigérée',
    ar: 'توصيل مبرد',
  },
  'professionals.advantage1.desc': {
    fr: 'Nos camions frigorifiques garantissent la fraîcheur de vos produits dans toute la région de Tétouan et Martil.',
    ar: 'تضمن شاحناتنا المبردة طراوة منتجاتكم في جميع أنحاء منطقة تطوان ومرتيل.',
  },
  'professionals.advantage2.title': {
    fr: 'Qualité Premium',
    ar: 'جودة فاخرة',
  },
  'professionals.advantage2.desc': {
    fr: 'Ingrédients sélectionnés avec soin et processus de fabrication artisanale pour des produits d\'exception.',
    ar: 'مكونات مختارة بعناية وعملية تصنيع حرفية لمنتجات استثنائية.',
  },
  'professionals.advantage3.title': {
    fr: 'Tarifs Professionnels',
    ar: 'أسعار احترافية',
  },
  'professionals.advantage3.desc': {
    fr: 'Des prix compétitifs adaptés aux volumes professionnels avec des remises sur quantité.',
    ar: 'أسعار تنافسية تتناسب مع الكميات الاحترافية مع خصومات على الكمية.',
  },
  'professionals.advantage4.title': {
    fr: 'Service Personnalisé',
    ar: 'خدمة مخصصة',
  },
  'professionals.advantage4.desc': {
    fr: 'Un accompagnement sur mesure pour répondre à vos besoins spécifiques et créer des produits exclusifs.',
    ar: 'مرافقة مخصصة لتلبية احتياجاتكم المحددة وإنشاء منتجات حصرية.',
  },
  'professionals.productsTitle': {
    fr: 'Nos Produits pour Professionnels',
    ar: 'منتجاتنا للمحترفين',
  },
  'professionals.product1.name': {
    fr: 'Tartes Glacées Artisanales',
    ar: 'فطائر مثلجة حرفية',
  },
  'professionals.product1.desc': {
    fr: 'Différentes tailles disponibles, parfaites pour vos événements et buffets.',
    ar: 'أحجام مختلفة متاحة، مثالية لمناسباتكم وبوفيهاتكم.',
  },
  'professionals.product2.name': {
    fr: 'Glaces en Gros Volume',
    ar: 'مثلجات بكميات كبيرة',
  },
  'professionals.product2.desc': {
    fr: 'Format professionnel pour vos glaciers et restaurants.',
    ar: 'حجم احترافي لمحلات المثلجات والمطاعم الخاصة بكم.',
  },
  'professionals.product3.name': {
    fr: 'Desserts Glacés Signature',
    ar: 'حلويات مثلجة مميزة',
  },
  'professionals.product3.desc': {
    fr: 'Créations exclusives pour impressionner vos clients.',
    ar: 'إبداعات حصرية لإبهار عملائكم.',
  },
  'professionals.contactTitle': {
    fr: 'Devenez Partenaire',
    ar: 'كن شريكاً',
  },
  'professionals.contactDesc': {
    fr: 'Contactez-nous pour obtenir un devis personnalisé et découvrir nos conditions professionnelles.',
    ar: 'اتصل بنا للحصول على عرض أسعار مخصص واكتشاف شروطنا الاحترافية.',
  },
  'professionals.contactButton': {
    fr: 'Demander un Devis',
    ar: 'طلب عرض أسعار',
  },
  'professionals.whatsappMessage': {
    fr: 'Bonjour, je suis un professionnel intéressé par vos produits. J\'aimerais obtenir plus d\'informations.',
    ar: 'مرحباً، أنا محترف مهتم بمنتجاتكم. أود الحصول على مزيد من المعلومات.',
  },
};

// Category mapping for translations
export const categoryTranslationKeys: { [key: string]: string } = {
  'Crêpes': 'category.crepes',
  'Gaufres': 'category.waffles',
  'Choco Cups': 'category.chocoCups',
  'Glaces': 'category.iceCream',
  'Glace': 'category.glace',
  'Pancakes': 'category.pancakes',
  'Boissons': 'category.boissons',
};
