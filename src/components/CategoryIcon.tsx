import { Coffee, IceCream, GlassWater, Cookie, Cherry } from 'lucide-react';

interface CategoryIconProps {
  category: string;
  className?: string;
}

export const CategoryIcon = ({ category, className = "w-6 h-6" }: CategoryIconProps) => {
  switch (category) {
    case 'Boissons Chaudes':
      return <Coffee className={className} />;
    case 'Milkshakes':
      return <IceCream className={className} />;
    case 'Mocktails':
      return <GlassWater className={className} />;
    case 'Crêpes':
    case 'Gaufres':
      return <Cookie className={className} />;
    case 'Choco Cups':
      return <Cherry className={className} />;
    default:
      return <Coffee className={className} />;
  }
};
