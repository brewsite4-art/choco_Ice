import { Translations } from "@/i18n/translations";

export interface SizeOption {
  size: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  nameAr?: string;
  price: number;
  category: string;
  subsection?: string; // For subcategories like "Pot de glace" or "Pack de glace"
  description?: string;
  descriptionAr?: string;
  image?: string;
  ingredients?: string[];
  allergens?: string[];
  flavors?: string[]; // For special items with multiple flavor options
  sizes?: SizeOption[]; // For items with selectable sizes (e.g. L, XL)
  selectedSize?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const menuData: MenuItem[] = [
  // Glaces - Pot de glace
  {
    id: 'pot-1',
    name: 'Cône fruits rouges & chocolat',
    nameAr: 'مثلجات بنكهة الفواكه الحمراء و الشوكولاتة',
    price: 30,
    category: 'Glace',
    subsection: 'Pot de glace',
    description: 'Cône enrobé d\'éclats de noisettes, glace fraise/vanille marbrée, framboise, mûre, grenade et filet de chocolat.',
    descriptionAr: 'مخروط مغطى برقائق البندق، مثلجات بنكهة الفراولة والفانيليا، توت العليق، التوت الأسود، الرمان وقطرات الشوكولاتة.',
    image: 'pot/Cône_fruits_rouges_&_chocolat.webp',
    allergens: ['Lait', 'fruits secs', 'gluten']
  },
  {
    id: 'pot-2',
    name: 'Pot double pistache',
    nameAr: 'مزدوج بنكهة الفستق',
    price: 32,
    category: 'Glace',
    subsection: 'Pot de glace',
    description: 'Glace pistache claire et crème pistache foncée.',
    descriptionAr: ' مثلجات الفستق والكراميل بالفستق',
    image: 'pot/Duo_Pistache_Royale.webp',
    allergens: ['Lait', 'pistache']
  },
  {
    id: 'pot-3',
    name: 'Pot fruits rouges & pistache',
    nameAr: 'فواكه حمراء وفستق',
    price: 35,
    category: 'Glace',
    subsection: 'Pot de glace',
    description: 'Crème glacée vanille marbrée avec framboises fraîches, coulis de fruits rouges et éclats de pistache.',
    descriptionAr: 'كريمة مثلجة بالفانيليا مع التوت الأحمر الطازج، صلصة الفواكه وقطع الفستق.',
    image: 'pot/Pot_fruits_rouges_&_pistache.webp',
    allergens: ['Lait', 'pistache', 'fruits rouges']
  },
  {
    id: 'pot-4',
    name: 'Coupe Choco Ice Signature',
    nameAr: 'كوب «شوكو آيس» المميز',
    price: 45,
    category: 'Glace',
    subsection: 'Pot de glace',
    description: ' Vanille, chocolat, pistache et biscuit croquant, nappés de sauce chocolat, décorés d\'un éclat de chocolat fourré et de snikers .',
    descriptionAr: 'كريمة مثلجة بالفانيليا مع الشوكولاتة والفستق والبسكويت المقرمش، مغطاة بصلصة الشوكولاتة، ومزينة بقطع الشوكولاتة المحشوة و سنيكرز.',
    image: 'pot/Sundae_Prestige_Choco_Ice.webp',
    allergens: ['Lait', 'cacahuètes', ' Gluten',]
  },
  {
    id: 'pot-5',
    name: 'Trio Gourmand Lotus-Chocolat',
    nameAr: 'ثلاثية لوتس والشوكولاتة الشهية ',
    price: 38,
    category: 'Glace',
    subsection: 'Pot de glace',
    description: 'Biscuit lotus, chocolat noir intense et vanille, décorées d\'un morceau de chocolat fourré caramel.',
    descriptionAr: ' بسكويت لوتس وشوكولاتة داكنة مكثفة وفانيليا، مزينة بقطعة شوكولاتة محشوة بالكراميل.',
    image: 'pot/Trio_Gourmand_Lotus_Chocolat.webp',
    allergens: ['Lait', 'Gluten']
  },
  {
    id: 'pot-6',
    name: 'Vanille Cerise Rouge',
    nameAr: ' الفانيليا والكرز الأحمر',
    price: 28,
    category: 'Glace',
    subsection: 'Pot de glace',
    description: 'Glace vanille marbrée coulis cerise, garnie de deux cerises fraîches entières.',
    descriptionAr: 'آيس كريم الفانيليا المرقط بصلصة الكرز، مزين بكرزتين طازجتين كاملتين.',
    image: 'pot/Vanille_Cerise_Rouge.webp',
    allergens: ['Lait', 'cerises']
  },

  // Glaces - Pack de glace
  {
    id: 'pack-1',
    name: 'Trio Classique',
    nameAr: 'ثلاثية كلاسيكية',
    price: 45,
    category: 'Glace',
    subsection: 'Pack de glace',
    description: 'Trois saveurs classiques : vanille, fraise et chocolat noir, parfaites pour tous les goûts.',
    descriptionAr: 'ثلاث نكهات كلاسيكية: الفانيليا، الفراولة والشوكولاتة الداكنة، مثالية لجميع الأذواق.',
    image: 'pack/Trio_classique.webp',
    allergens: ['Lait'],
    sizes: [
      { size: 'M', price: 45 },
      { size: 'XL', price: 75 },
      { size: 'XXL', price: 100 },
    ]
  },
  {
    id: 'pack-2',
    name: 'Pack 4 glaces pastel',
    nameAr: 'مجموعة من 4 آيس كريم بألوان الباستيل',
    price: 48,
    category: 'Glace',
    subsection: 'Pack de glace',
    description: 'Quatre saveurs pastel douces et rafraîchissantes, parfaites pour un moment de douceur.',
    descriptionAr: 'أربع نكهات باستيل ناعمة ومنعشة، مثالية للحظة من الحلاوة.',
    image: 'pack/pack_4_glaces.webp',
    allergens: ['Lait'],
    sizes: [
      { size: 'M', price: 48 },
      { size: 'XL', price: 80 },
      { size: 'XXL', price: 110 },
    ]
  },
  {
    id: 'pack-3',
    name: 'Grand Assortiment Choco Ice',
    nameAr: 'مجموعة متنوعة كبيرة من «شوكو آيس»',
    price: 55,
    category: 'Glace',
    subsection: 'Pack de glace',
    description: 'Large assortiment de nos saveurs signature, parfait pour partager ou pour les gourmands.',
    descriptionAr: 'تشكيلة كبيرة من النكهات المميزة لدينا، مثالية للمشاركة أو لعشاق الحلويات.',
    image: 'pack/Grand_Assortiment_Choco_Ice.webp',
    allergens: ['Lait'],
    sizes: [
      { size: 'M', price: 55 },
      { size: 'XL', price: 90 },
      { size: 'XXL', price: 120 },
    ]
  },
  {
    id: 'pack-4',
    name: 'Pack 6 glaces',
    nameAr: 'باك 6 آيس كريم',
    price: 50,
    category: 'Glace',
    subsection: 'Pack de glace',
    description: 'vanille, bleu bubble gum, chocolat, vanille jaune, fraise, pistache.',
    descriptionAr: 'الفانيليا، الأزرق اللون العلكة، الشوكولاتة، الفانيليا الصفراء، الفراولة، الفستق.',
    image: 'pack/pack_6_glaces.webp',
    flavors: ['Tiramisu', 'Noix', 'Brownie', 'Lotus', 'Granola', 'Kinder Bueno', 'Red Velvet', 'Cheesecake'],
    allergens: ['Lait', 'Gluten'],
    sizes: [
      { size: 'M', price: 50 },
      { size: 'XL', price: 85 },
      { size: 'XXL', price: 115 },
    ]
  },

  // Crêpes
  {
    id: 'cr-1',
    name: 'Crêpe Nutella',
    nameAr: 'كريب نوتيلا',
    price: 25,
    category: 'Crêpes',
    description: 'Crêpe fine au Nutella fondant',
    descriptionAr: 'كريب رفيع بالنوتيلا الذائبة',
    image: 'crepes/Nutella.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Nutella'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Noisettes']
  },
  {
    id: 'cr-2',
    name: 'Crêpe 3 Chocolats',
    nameAr: 'كريب ٣ شوكولاتات',
    price: 28,
    category: 'Crêpes',
    description: 'Mélange divin de trois chocolats',
    descriptionAr: 'مزيج رائع من ثلاثة أنواع الشوكولاتة',
    image: 'crepes/3_CHOCOLATS.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Chocolat noir', 'Chocolat lait', 'Chocolat blanc'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Soja']
  },
  {
    id: 'cr-3',
    name: 'Crêpe Dubai Chocolate',
    nameAr: 'كريب شوكولاتة دبي',
    price: 45,
    category: 'Crêpes',
    description: 'Crêpe inspirée du célèbre chocolat Dubaï à la pistache et kunafa',
    descriptionAr: 'كريب مستوحى من شوكولاتة دبي الشهيرة بالفستق والكنافة',
    image: 'crepes/DUBAI_CHOCOLATE.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Chocolat', 'Pistache', 'Kunafa'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Pistache']
  },
  {
    id: 'cr-4',
    name: 'Crêpe Ferrero Rocher',
    nameAr: 'كريب فيريرو روشيه',
    price: 40,
    category: 'Crêpes',
    description: 'Crêpe garnie de Ferrero Rocher et crème pralinée',
    descriptionAr: 'كريب بحبات فيريرو روشيه وكريمة البراليني',
    image: 'crepes/FERRERO_ROCHER.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Ferrero Rocher', 'Crème pralinée'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Noisettes']
  },
  {
    id: 'cr-5',
    name: 'Crêpe KitKat',
    nameAr: 'كريب كيت كات',
    price: 35,
    category: 'Crêpes',
    description: 'Crêpe croustillante avec des morceaux de KitKat',
    descriptionAr: 'كريب مقرمش مع قطع كيت كات',
    image: 'crepes/KIKAT.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'KitKat', 'Chocolat'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Soja']
  },
  {
    id: 'cr-6',
    name: 'Crêpe Kinder Bueno',
    nameAr: 'كريب كيندر بوينو',
    price: 40,
    category: 'Crêpes',
    description: 'Crêpe fondante aux barres Kinder Bueno',
    descriptionAr: 'كريب ناعم بأصابع كيندر بوينو',
    image: 'crepes/KINDER_BUENO.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Kinder Bueno', 'Crème noisette'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Noisettes']
  },
  {
    id: 'cr-7',
    name: 'Crêpe Lotus Biscoff',
    nameAr: 'كريب لوتس بيسكوف',
    price: 40,
    category: 'Crêpes',
    description: 'Crêpe à la crème de spéculoos Lotus Biscoff',
    descriptionAr: 'كريب بكريمة لوتس بيسكوف الناعمة',
    image: 'crepes/LOTUS_BISCOFF.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Crème Lotus', 'Biscuit Biscoff'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Soja']
  },
  {
    id: 'cr-8',
    name: "Crêpe M&M's",
    nameAr: "كريب إم آند إم",
    price: 35,
    category: 'Crêpes',
    description: "Crêpe colorée garnie de M&M's et de chocolat",
    descriptionAr: "كريب ملون بحبات إم آند إم والشوكولاتة",
    image: "crepes/M&M's.webp",
    ingredients: ["Farine", "Oeufs", "Lait", "M&M's", "Chocolat"],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Arachides', 'Soja']
  },
  {
    id: 'cr-9',
    name: 'Crêpe Pistachio',
    nameAr: 'كريب فستق',
    price: 45,
    category: 'Crêpes',
    description: 'Crêpe à la crème de pistache premium',
    descriptionAr: 'كريب بكريمة الفستق الفاخرة',
    image: 'crepes/PISTACHIO.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Crème pistache', 'Éclats de pistache'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Pistache']
  },
  {
    id: 'cr-10',
    name: 'Crêpe Snickers',
    nameAr: 'كريب سنيكرز',
    price: 40,
    category: 'Crêpes',
    description: 'Crêpe garnie de caramel, cacahuètes et Snickers',
    descriptionAr: 'كريب بالكراميل والفول السوداني وسنيكرز',
    image: 'crepes/SNICKERS.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Snickers', 'Caramel', 'Cacahuètes'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Arachides']
  },
  {
    id: 'cr-11',
    name: 'Crêpe Tiramisu',
    nameAr: 'كريب تيراميسو',
    price: 35,
    category: 'Crêpes',
    description: 'Crêpe inspirée du tiramisu avec mascarpone et café',
    descriptionAr: 'كريب مستوحى من التيراميسو بالماسكاربوني والقهوة',
    image: 'crepes/TIRAMISU.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Mascarpone', 'Café', 'Cacao'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },
  {
    id: 'cr-12',
    name: 'Crêpe Twix',
    nameAr: 'كريب تويكس',
    price: 35,
    category: 'Crêpes',
    description: 'Crêpe au caramel et biscuit façon Twix',
    descriptionAr: 'كريب بالكراميل والبسكويت على طريقة تويكس',
    image: 'crepes/TWIX.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Twix', 'Caramel', 'Chocolat'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Soja']
  },
  {
    id: 'cr-13',
    name: 'Crêpe Nutella Banane',
    nameAr: 'كريب نوتيلا وموز',
    price: 35,
    category: 'Crêpes',
    description: 'Crêpe garnie façon maison',
    descriptionAr: 'كريب بالنوتيلا والموز الطازج',
    image: 'crepes/nutella_banane.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Nutella', 'Banane'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Noisettes']
  },
  {
    id: 'cr-14',
    name: 'Crêpe Signature',
    nameAr: 'كريب سيغناتشر',
    price: 28,
    category: 'Crêpes',
    description: 'Notre crêpe signature aux saveurs uniques',
    descriptionAr: 'كريبنا المميز بنكهات فريدة',
    image: 'crepes/3.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Garniture signature'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },
  {
    id: 'cr-15',
    name: 'Crêpe Gourmande',
    nameAr: 'كريب الشره',
    price: 35,
    category: 'Crêpes',
    description: 'Crêpe généreuse pour les vrais gourmands',
    descriptionAr: 'كريب سخي لمحبي الحلويات الكبار',
    image: 'crepes/16.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Garniture premium'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },
  {
    id: 'cr-16',
    name: 'Crêpe cake',
    nameAr: 'كريب كيك',
    price: 35,
    category: 'Crêpes',
    description: 'Crêpe généreuse aux saveurs de gâteau',
    descriptionAr: 'كريب فاخر بنكهات الكيكة',
    image: 'crepes/11.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Garniture premium'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },
  {
    id: 'cr-17',
    name: 'Crêpe fruits',
    nameAr: 'كريب بالفواكه',
    price: 35,
    category: 'Crêpes',
    description: 'Crêpe aux saveurs de fruits',
    descriptionAr: 'كريب بالفواكه',
    image: 'crepes/6.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Garniture fruits'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },

  // Gaufres
  {
    id: 'gf-1',
    name: 'Gaufre Nature',
    nameAr: 'وافل سادة',
    price: 20,
    category: 'Gaufres',
    description: 'Gaufre de Liège dorée et croustillante',
    descriptionAr: 'وافل لييج ذهبي ومقرمش',
    image: '',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Sucre perlé'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },
  {
    id: 'gf-2',
    name: 'Gaufre Nutella',
    nameAr: 'وافل نوتيلا',
    price: 30,
    category: 'Gaufres',
    description: 'Gaufre croustillante nappée de Nutella',
    descriptionAr: 'وافل مقرمش مغطى بالنوتيلا',
    image: '',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Nutella'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Noisettes']
  },
  {
    id: 'gf-3',
    name: 'Gaufre Oreo-Snickers-Kinder',
    nameAr: 'وافل اوريو-سنيكرز-كيندر',
    price: 35,
    category: 'Gaufres',
    description: 'Trio Oreo, Snickers et Kinder',
    descriptionAr: 'ثلاثي أوريو وسنيكرز وكيندر',
    image: 'gaufres/O_S_K.webp',
    ingredients: ['Gaufre', 'Oreo', 'Snickers', 'Kinder', 'Chocolat'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Arachides', 'Soja']
  },
  {
    id: 'gf-4',
    name: 'Gaufre Pistachio',
    nameAr: 'وافل فستق',
    price: 45,
    category: 'Gaufres',
    description: 'Gaufre avec crème pistache premium',
    descriptionAr: 'وافل بكريمة الفستق الفاخرة',
    image: 'gaufres/PISTACHE.webp',
    ingredients: ['Gaufre', 'Crème pistache', 'Éclats de pistache'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Pistache']
  },
  {
    id: 'gf-5',
    name: 'Gaufre Fruits',
    nameAr: 'وافل فواكه',
    price: 45,
    category: 'Gaufres',
    description: 'Gaufre croustillante nappée de fruits',
    descriptionAr: 'وافل مقرمش مغطى بالفواكه',
    image: 'gaufres/FRUIT.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Fraise', 'Mangue', 'Banane', 'Framboise'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Fruits']
  },
  {
    id: 'gf-6',
    name: 'Dubai Chocolate',
    nameAr: 'دبي تشوكلت',
    price: 45,
    category: 'Gaufres',
    description: 'Gaufre avec crème et chocolat',
    descriptionAr: 'وافل بالكريمة والشوكولاتة',
    image: 'gaufres/CREME.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Chocolat'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Chocolat']
  },
  {
    id: 'gf-7',
    name: 'Kinder Bueno',
    nameAr: 'كيندر بوينو',
    price: 40,
    category: 'Gaufres',
    description: 'Gaufre avec kinder Bueno',
    descriptionAr: 'وافل بكيندر بوينو',
    image: 'gaufres/O_S_K.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Kinder Bueno'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },
  {
    id: 'gf-8',
    name: 'Nutella Banane',
    nameAr: 'نوتيلا وموز',
    price: 35,
    category: 'Gaufres',
    description: 'Gaufre croustillante avec nutella et banane',
    descriptionAr: 'وافل مقرمش بالنوتيلا والموز',
    image: 'gaufres/Nutella_Banane.webp',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Nutella', 'Banane'],
    allergens: ['Gluten', 'Oeufs', 'Lait']
  },

  // Choco Cups
  {
    id: 'cc-1',
    name: 'Dubai Cup',
    nameAr: 'كوب دبي',
    price: 45,
    category: 'Choco Cups',
    description: 'L\'expérience chocolatée ultime de Dubaï avec pistache et kunafa croustillante',
    descriptionAr: 'تجربة الشوكولاتة الدبياوية الفاخرة بالفستق والكنافة المقرمشة',
    image: 'cups/dubai_cup.webp',
    ingredients: ['Chocolat', 'Pistache', 'Kunafa', 'Crème'],
    allergens: ['Lait', 'Pistache', 'Gluten'],
    sizes: [
      { size: 'L', price: 45 },
      { size: 'XL', price: 50 },
    ]
  },
  {
    id: 'cc-2',
    name: 'Lotus Cup',
    nameAr: 'كوب لوتس',
    price: 35,
    category: 'Choco Cups',
    description: 'Crème de spéculoos Lotus onctueuse et brisures de biscuit croquantes',
    descriptionAr: 'كريمة لوتس بيسكوف ناعمة ومخملية مع قطع البسكويت المقرمشة',
    image: 'cups/lotus_cup.webp',
    ingredients: ['Biscuit Lotus', 'Crème spéculoos', 'Chocolat blanc'],
    allergens: ['Lait', 'Gluten'],
    sizes: [
      { size: 'L', price: 35 },
      { size: 'XL', price: 40 },
    ]
  },
  {
    id: 'cc-3',
    name: 'Oreo Cup',
    nameAr: 'كوب أوريو',
    price: 35,
    category: 'Choco Cups',
    description: 'Oreo croustillant et crème fondante au chocolat blanc',
    descriptionAr: 'أوريو مقرمش مع كريمة ناعمة وشوكولاتة بيضاء غنية',
    image: 'cups/oreo_cup.webp',
    ingredients: ['Oreo', 'Chocolat blanc', 'Crème'],
    allergens: ['Lait', 'Gluten', 'Soja'],
    sizes: [
      { size: 'L', price: 35 },
      { size: 'XL', price: 40 },
    ]
  },
  {
    id: 'cc-4',
    name: 'Kinder Bueno Cup',
    nameAr: 'كوب كيندر بوينو',
    price: 40,
    category: 'Choco Cups',
    description: 'Crème noisette onctueuse et morceaux de Kinder Bueno',
    descriptionAr: 'كريمة البندق الناعمة مع قطع كيندر بوينو اللذيذة',
    image: 'cups/kinder_cup.webp',
    ingredients: ['Kinder Bueno', 'Chocolat au lait', 'Crème noisette'],
    allergens: ['Lait', 'Noisettes', 'Gluten'],
    sizes: [
      { size: 'L', price: 40 },
      { size: 'XL', price: 45 },
    ]
  },
  {
    id: 'cc-5',
    name: 'Choco Cup',
    nameAr: 'كوب شوكو',
    price: 45,
    category: 'Choco Cups',
    description: 'Un mélange raffiné de crème au chocolat et de fraises fraîches',
    descriptionAr: 'مزيج فاخر من كريمة الشوكولاتة والفراولة الطازجة',
    image: 'cups/choco_cup.webp',
    ingredients: ['Chocolat', 'Fraise'],
    allergens: ['Lait'],
    sizes: [
      { size: 'L', price: 35 },
      { size: 'XL', price: 40 },
    ]
  },

  // Tartes Artisanales
  {
    id: 'tarte-1',
    name: 'Tarte Royale Chocolat Crunch',
    nameAr: 'تارت ملكي بالشوكولاتة المقرمشة',
    price: 180,
    category: 'Tartes',
    description: 'Pâte sablée pur beurre, ganache chocolat noir intense et croustillant praliné.',
    descriptionAr: 'عجينة صابلي بالزبدة النقية، غاناش الشوكولاتة الداكنة وبراليني مقرمش.',
    image: 'cake1.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs', 'Noisettes']
  },
  {
    id: 'tarte-2',
    name: 'Tarte Forêt Noire & Fruits Rouges',
    nameAr: 'تارت الغابة السوداء والفواكه الحمراء',
    price: 190,
    category: 'Tartes',
    description: 'Chocolat moelleux, crème chantilly légère et cerises amarena avec coulis de fruits rouges.',
    descriptionAr: 'كيك الشوكولاتة الهش، كريمة خفيفة وكرز أمارين مع صلصة الفواكه الحمراء.',
    image: 'cake2.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-3',
    name: 'Tarte Pistache Précieuse',
    nameAr: 'تارت الفستق الملكي الفاخر',
    price: 220,
    category: 'Tartes',
    description: 'Crème onctueuse à la pistache de Sicile, éclats de pistaches torréfiées et biscuit moelleux.',
    descriptionAr: 'كريمة فستق صقلية فاخرة، حبات فستق محمصة وبسكويت طري.',
    image: 'cake3.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs', 'Pistache']
  },
  {
    id: 'tarte-4',
    name: 'Tarte Délice Framboise & Vanille',
    nameAr: 'تارت ديليس التوت والفانيليا',
    price: 190,
    category: 'Tartes',
    description: 'Framboises fraîches gorgées de soleil sur un lit de crème diplomate à la vanille de Madagascar.',
    descriptionAr: 'توت أحمر طازج على طبقة من كريمة الدبلوماسي بفانيليا مدغشقر.',
    image: 'cake4.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-5',
    name: 'Tarte Spéculoos Lotus Caramel',
    nameAr: 'تارت لوتس بسكوف بالكراميل',
    price: 200,
    category: 'Tartes',
    description: 'Fond croustillant au spéculoos, crème onctueuse Lotus et caramel au beurre salé.',
    descriptionAr: 'قاعدة مقرمشة ببسكويت لوتس، كريمة لوتس غنية وكراميل الزبدة المملحة.',
    image: 'cake5.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs', 'Soja']
  },
  {
    id: 'tarte-6',
    name: 'Tarte Oreo Chocolat Blanc',
    nameAr: 'تارت أوريو والشوكولاتة البيضاء',
    price: 180,
    category: 'Tartes',
    description: 'Biscuit Oreo croquant, mousse fondante au chocolat blanc et ganache onctueuse.',
    descriptionAr: 'بسكويت أوريو مقرمش، موس الشوكولاتة البيضاء وغاناش ناعم.',
    image: 'cake6.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs', 'Soja']
  },
  {
    id: 'tarte-7',
    name: 'Tarte Kinder Bueno & Noisette',
    nameAr: 'تارت كيندر بوينو والبندق',
    price: 210,
    category: 'Tartes',
    description: 'Crème pralinée noisette, morceaux de Kinder Bueno et nappage chocolat au lait.',
    descriptionAr: 'كريمة البندق والبراليني، قطع كيندر بوينو وتغطية بالشوكولاتة بالحليب.',
    image: 'cake7.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs', 'Noisettes']
  },
  {
    id: 'tarte-8',
    name: 'Tarte Dubai Pistache & Kunafa',
    nameAr: 'تارت دبي بالفستق والكنافة',
    price: 250,
    category: 'Tartes',
    description: 'La fameuse création inspirée de Dubaï : kunafa croustillante, crème de pistache pure et chocolat belge.',
    descriptionAr: 'ابتكار دبي الشهير: كنافة مقرمشة، كريمة الفستق الصافي وشوكولاتة بلجيكية فاخرة.',
    image: 'cake8.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs', 'Pistache']
  },
  {
    id: 'tarte-9',
    name: 'Tarte Raffaello Coco & Amandes',
    nameAr: 'تارت رافايلو بجوز الهند واللوز',
    price: 200,
    category: 'Tartes',
    description: 'Crème légère à la noix de coco, amandes effilées toastées et chocolat blanc velouté.',
    descriptionAr: 'كريمة جوز الهند الخفيفة، رقائق اللوز المحمص وشوكولاتة بيضاء ناعمة.',
    image: 'cake9.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs', 'Amandes']
  },
  {
    id: 'tarte-10',
    name: 'Tarte Choco Intense Glacée',
    nameAr: 'تارت الشوكولاتة المركزة المثلجة',
    price: 190,
    category: 'Tartes',
    description: 'Mousse glacée au cacao 70%, cœur coulant caramel et finition miroir chocolat.',
    descriptionAr: 'موس مثلج بالكاكاو 70%، قلب من الكراميل وتغليف لامع بالشوكولاتة.',
    image: 'cake10.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-11',
    name: 'Tarte Artisanale Choco Ice',
    nameAr: 'تارت «شوكو آيس» الحرفية الخاصة',
    price: 200,
    category: 'Tartes',
    description: 'Notre création signature exclusive aux saveurs raffinées et ingrédients d\'exception.',
    descriptionAr: 'إبداعنا الحصري بنكهات راقية ومكونات استثنائية عالية الجودة.',
    image: 'cake11.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-12',
    name: 'Tarte Artisanale Choco Ice',
    nameAr: 'تارت «شوكو آيس» الحرفية الخاصة',
    price: 200,
    category: 'Tartes',
    description: 'Notre création signature exclusive aux saveurs raffinées et ingrédients d\'exception.',
    descriptionAr: 'إبداعنا الحصري بنكهات راقية ومكونات استثنائية عالية الجودة.',
    image: 'cake12.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-13',
    name: 'Tarte Artisanale Choco Ice',
    nameAr: 'تارت «شوكو آيس» الحرفية الخاصة',
    price: 200,
    category: 'Tartes',
    description: 'Notre création signature exclusive aux saveurs raffinées et ingrédients d\'exception.',
    descriptionAr: 'إبداعنا الحصري بنكهات راقية ومكونات استثنائية عالية الجودة.',
    image: 'cake13.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-14',
    name: 'Tarte Artisanale Choco Ice',
    nameAr: 'تارت «شوكو آيس» الحرفية الخاصة',
    price: 200,
    category: 'Tartes',
    description: 'Notre création signature exclusive aux saveurs raffinées et ingrédients d\'exception.',
    descriptionAr: 'إبداعنا الحصري بنكهات راقية ومكونات استثنائية عالية الجودة.',
    image: 'cake14.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-15',
    name: 'Tarte Artisanale Choco Ice',
    nameAr: 'تارت «شوكو آيس» الحرفية الخاصة',
    price: 200,
    category: 'Tartes',
    description: 'Notre création signature exclusive aux saveurs raffinées et ingrédients d\'exception.',
    descriptionAr: 'إبداعنا الحصري بنكهات راقية ومكونات استثنائية عالية الجودة.',
    image: 'cake15.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },
  {
    id: 'tarte-16',
    name: 'Tarte Artisanale Choco Ice',
    nameAr: 'تارت «شوكو آيس» الحرفية الخاصة',
    price: 200,
    category: 'Tartes',
    description: 'Notre création signature exclusive aux saveurs raffinées et ingrédients d\'exception.',
    descriptionAr: 'إبداعنا الحصري بنكهات راقية ومكونات استثنائية عالية الجودة.',
    image: 'cake16.webp',
    allergens: ['Gluten', 'Lait', 'Oeufs']
  },

  // Pancakes
  {
    id: 'pc-1',
    name: 'Pancake Nutella',
    nameAr: 'بان كيك نوتيلا',
    price: 30,
    category: 'Pancakes',
    description: 'Pancakes moelleux et dorés, généreusement nappés de Nutella fondant.',
    descriptionAr: 'بان كيك طري وذهبي، مغطى بسخاء بالنوتيلا الذائبة.',
    image: '',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Nutella'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Noisettes']
  },
  {
    id: 'pc-2',
    name: 'Pancake Lotus',
    nameAr: 'بان كيك لوتس',
    price: 35,
    category: 'Pancakes',
    description: 'Pancakes moelleux nappés d\'une onctueuse crème de spéculoos Lotus et éclats de biscuit.',
    descriptionAr: 'بان كيك طري مغطى بكريمة لوتس بيسكوف اللذيذة وقطع البسكويت المقرمشة.',
    image: '',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Crème Lotus', 'Biscuit Biscoff'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Soja']
  },
  {
    id: 'pc-3',
    name: 'Pancake Oreo',
    nameAr: 'بان كيك أوريو',
    price: 35,
    category: 'Pancakes',
    description: 'Pancakes moelleux garnis de crème chocolat blanc et brisures de biscuits Oreo.',
    descriptionAr: 'بان كيك طري مع كريمة الشوكولاتة البيضاء وقطع بسكويت أوريو المقرمشة.',
    image: '',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Oreo', 'Chocolat'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Soja']
  },
  {
    id: 'pc-4',
    name: 'Pancake Kinder Bueno',
    nameAr: 'بان كيك كيندر بوينو',
    price: 40,
    category: 'Pancakes',
    description: 'Pancakes moelleux recouverts de crème noisette et morceaux croustillants de Kinder Bueno.',
    descriptionAr: 'بان كيك طري مغطى بكريمة البندق وقطع كيندر بوينو اللذيذة.',
    image: '',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Kinder Bueno', 'Crème noisette'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Noisettes']
  },
  {
    id: 'pc-5',
    name: 'Pancake Pistachio',
    nameAr: 'بان كيك فستق',
    price: 45,
    category: 'Pancakes',
    description: 'Pancakes moelleux avec crème de pistache raffinée et éclats de pistaches torréfiées.',
    descriptionAr: 'بان كيك طري بكريمة الفستق الفاخرة وقطع الفستق المحمص.',
    image: '',
    ingredients: ['Farine', 'Oeufs', 'Lait', 'Crème pistache', 'Éclats de pistache'],
    allergens: ['Gluten', 'Oeufs', 'Lait', 'Pistache']
  },

  // =====================
  // Boissons
  // =====================
  {
    id: 'bo-1',
    name: 'Blue Berry Mojito',
    nameAr: 'بلو بيري موهيتو',
    price: 30,
    category: 'Boissons',
    description: 'Mojito rafraîchissant aux myrtilles fraîches, menthe et jus de citron vert.',
    descriptionAr: 'موهيتو منعش بالتوت الأزرق الطازج، النعناع وعصير الليمون الأخضر.',
    image: 'boissons/Blue_Berry_Mojito.webp',
    ingredients: ['Myrtilles', 'Menthe', 'Citron vert', 'Sucre', 'Eau gazeuse'],
    allergens: []
  },
  {
    id: 'bo-2',
    name: 'Blue Lagoon',
    nameAr: 'بلو لاغون',
    price: 32,
    category: 'Boissons',
    description: 'Boisson légère et colorée aux saveurs tropicales bleutées, fraîche et désaltérante.',
    descriptionAr: 'مشروب خفيف وملوَّن بنكهات استوائية زرقاء، منعش ومرطب.',
    image: 'boissons/Blue_Lagoon.webp',
    ingredients: ['Sirop bleu', 'Citron', 'Eau gazeuse', 'Glaçons'],
    allergens: []
  },
  {
    id: 'bo-3',
    name: 'Creamy Pineapple',
    nameAr: 'كريمي بينابل',
    price: 35,
    category: 'Boissons',
    description: 'Smoothie crémeux à l\'ananas tropical, onctueux et rafraîchissant.',
    descriptionAr: 'سموذي كريمي بالأناناس الاستوائي، ناعم ومنعش.',
    image: 'boissons/Creamy_Pineapple.webp',
    ingredients: ['Ananas', 'Lait de coco', 'Crème', 'Glaçons'],
    allergens: ['Lait']
  },
  {
    id: 'bo-4',
    name: 'Hot Chocolate Viennois',
    nameAr: 'شوكولاتة ساخنة فيينوا',
    price: 30,
    category: 'Boissons',
    description: 'Chocolat chaud onctueux à la viennoise, surmonté d\'une généreuse couche de chantilly.',
    descriptionAr: 'شوكولاتة ساخنة ناعمة على الطريقة الفيينية، مع طبقة سخية من الكريمة المخفوقة.',
    image: 'boissons/Hot_Chocolate_Viennois.webp',
    ingredients: ['Chocolat', 'Lait', 'Crème chantilly'],
    allergens: ['Lait', 'Soja']
  },
  {
    id: 'bo-5',
    name: 'Iced Latte',
    nameAr: 'آيسد لاتيه',
    price: 28,
    category: 'Boissons',
    description: 'Café latte glacé, espresso intense sur lit de glaçons et lait frais.',
    descriptionAr: 'لاتيه مثلج، إسبريسو قوي على قاعدة من الثلج والحليب الطازج.',
    image: 'boissons/Iced_Latte.webp',
    ingredients: ['Espresso', 'Lait', 'Glaçons', 'Sirop vanille'],
    allergens: ['Lait']
  },
  {
    id: 'bo-6',
    name: 'Mango Berry Smoothie',
    nameAr: 'سموذي المانغو والتوت',
    price: 35,
    category: 'Boissons',
    description: 'Smoothie tropical à la mangue juteuse et fruits rouges, vitaminé et coloré.',
    descriptionAr: 'سموذي استوائي بالمانغو العصيرية والفواكه الحمراء، غني بالفيتامينات.',
    image: 'boissons/Mango_Berry_Smoothie.webp',
    ingredients: ['Mangue', 'Fraise', 'Framboise', 'Yaourt', 'Miel'],
    allergens: ['Lait']
  },
  {
    id: 'bo-7',
    name: 'Oreo Milkshake',
    nameAr: 'ميلك شيك أوريو',
    price: 38,
    category: 'Boissons',
    description: 'Milkshake épais et gourmand aux biscuits Oreo, crème glacée vanille et chantilly.',
    descriptionAr: 'ميلك شيك كثيف ولذيذ ببسكويت أوريو، آيس كريم الفانيليا والكريمة المخفوقة.',
    image: 'boissons/Oreo_Milkshake.webp',
    ingredients: ['Oreo', 'Glace vanille', 'Lait', 'Crème chantilly'],
    allergens: ['Lait', 'Gluten', 'Soja']
  },
  {
    id: 'bo-8',
    name: 'Pistachio Latte',
    nameAr: 'لاتيه الفستق',
    price: 35,
    category: 'Boissons',
    description: 'Latte au café avec crème de pistache onctueuse et lait chaud moussu.',
    descriptionAr: 'لاتيه بالقهوة مع كريمة الفستق الناعمة والحليب الساخن الرغوي.',
    image: 'boissons/Pistachio_Latte.webp',
    ingredients: ['Espresso', 'Lait', 'Crème pistache', 'Mousse de lait'],
    allergens: ['Lait', 'Pistache']
  },
  {
    id: 'bo-9',
    name: 'Strawberry Lemonade',
    nameAr: 'ليمونادة الفراولة',
    price: 30,
    category: 'Boissons',
    description: 'Limonade pétillante à la fraise fraîche, acidulée et sucrée à la fois.',
    descriptionAr: 'ليمونادة مفعمة بالحيوية بالفراولة الطازجة، حامضة وحلوة في آنٍ واحد.',
    image: 'boissons/Strawberry_Lemonade.webp',
    ingredients: ['Fraise', 'Citron', 'Sucre', 'Eau gazeuse', 'Menthe'],
    allergens: []
  }

];

export const featuredProducts: MenuItem[] = menuData.filter(item => item.category === 'Tartes').slice(0, 4);

export const categories = ['Glace', 'Choco Cups', 'Gaufres', 'Crêpes', 'Pancakes', 'Boissons'];

export const deliveryFees = {
  'Tétouan': 5,
  'Martil': 6,
};


