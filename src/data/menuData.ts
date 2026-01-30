export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const menuData: MenuItem[] = [
  // Boissons Chaudes
  { id: 'bc-1', name: 'Thé Vert', price: 12, category: 'Boissons Chaudes', description: 'Thé vert naturel' },
  { id: 'bc-2', name: 'Café Noir', price: 14, category: 'Boissons Chaudes', description: 'Café arabica intense' },
  { id: 'bc-3', name: 'Latte Macchiato', price: 25, category: 'Boissons Chaudes', description: 'Espresso et lait mousseux' },
  { id: 'bc-4', name: 'Colacao', price: 14, category: 'Boissons Chaudes', description: 'Chocolat chaud onctueux' },
  
  // Milkshakes
  { id: 'ms-1', name: 'Milkshake Normal', price: 30, category: 'Milkshakes', description: 'Vanille crémeuse' },
  { id: 'ms-2', name: 'Milkshake Spécial', price: 35, category: 'Milkshakes', description: 'Notre recette maison' },
  { id: 'ms-3', name: 'Milkshake Pistache', price: 40, category: 'Milkshakes', description: 'Pistache premium' },
  
  // Mocktails
  { id: 'mc-1', name: 'Virgin Mocktail', price: 30, category: 'Mocktails', description: 'Cocktail fruité sans alcool' },
  { id: 'mc-2', name: 'Strawberry Mocktail', price: 35, category: 'Mocktails', description: 'Fraise fraîche et menthe' },
  
  // Crêpes
  { id: 'cr-1', name: 'Crêpe Nutella', price: 25, category: 'Crêpes', description: 'Nutella fondant' },
  { id: 'cr-2', name: 'Crêpe Nutella Banane', price: 30, category: 'Crêpes', description: 'Nutella et banane fraîche' },
  { id: 'cr-3', name: 'Crêpe 3 Chocolats', price: 28, category: 'Crêpes', description: 'Noir, lait et blanc' },
  
  // Gaufres
  { id: 'gf-1', name: 'Gaufre Nature', price: 20, category: 'Gaufres', description: 'Gaufre dorée classique' },
  { id: 'gf-2', name: 'Gaufre Nutella', price: 30, category: 'Gaufres', description: 'Nappage Nutella généreux' },
  { id: 'gf-3', name: 'Gaufre Oreo-Snickers-Kinder', price: 35, category: 'Gaufres', description: 'Trio gourmand irrésistible' },
  { id: 'gf-4', name: 'Gaufre Pistache', price: 40, category: 'Gaufres', description: 'Crème pistache premium' },
  
  // Choco Cups
  { id: 'cc-1', name: 'Dubai Cup L', price: 45, category: 'Choco Cups', description: 'Saveur Dubai premium' },
  { id: 'cc-2', name: 'Dubai Cup XL', price: 50, category: 'Choco Cups', description: 'Saveur Dubai premium - Grande taille' },
  { id: 'cc-3', name: 'Lotus Cup L', price: 35, category: 'Choco Cups', description: 'Biscuit Lotus crémeux' },
  { id: 'cc-4', name: 'Lotus Cup XL', price: 40, category: 'Choco Cups', description: 'Biscuit Lotus crémeux - Grande taille' },
  { id: 'cc-5', name: 'Oreo Cup L', price: 35, category: 'Choco Cups', description: 'Oreo croustillant' },
  { id: 'cc-6', name: 'Oreo Cup XL', price: 40, category: 'Choco Cups', description: 'Oreo croustillant - Grande taille' },
  { id: 'cc-7', name: 'Choco Cup L', price: 35, category: 'Choco Cups', description: 'Chocolat fondant' },
  { id: 'cc-8', name: 'Choco Cup XL', price: 40, category: 'Choco Cups', description: 'Chocolat fondant - Grande taille' },
];

export const categories = ['Boissons Chaudes', 'Milkshakes', 'Mocktails', 'Crêpes', 'Gaufres', 'Choco Cups'];

export const deliveryFees = {
  'Tétouan': 5,
  'Martil': 6,
};
