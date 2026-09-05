import { IceCream, Cookie, Cherry } from 'lucide-react';

interface CategoryIconProps {
  category: string;
  className?: string;
}

export const CategoryIcon = ({ category, className = "w-6 h-6" }: CategoryIconProps) => {
  switch (category) {
    case 'Glaces':
    case 'Glace':
      return <IceCream className={className} />;
    case 'Crêpes':
    case 'Gaufres':
    case 'Pancakes':
      return <Cookie className={className} />;
    case 'Choco Cups':
      return <Cherry className={className} />;
    default:
      return <IceCream className={className} />;
  }
};
