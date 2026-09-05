import { useState, useCallback } from 'react';
import { HeroSection } from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import { FeaturedSection } from '@/components/FeaturedSection';
import { HomeMenuPreview } from '@/components/HomeMenuPreview';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ReviewsSection } from '@/components/ReviewsSection';
import { VideoSection } from '@/components/VideoSection';
import type { MenuItem, CartItem } from '@/data/menuData';
import { toast } from '@/hooks/use-toast';
import { MapSection } from '@/components/MapSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  /* Removed local cart state logic as it is now in CartContext */
  /* const [cartItems, setCartItems] = useState... */
  /* Handlers removed... */

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HistorySection />
      <VideoSection />
      <FeaturedSection />
      <HomeMenuPreview />
      <ReviewsSection />
      <MapSection />
      <Footer />
      <Cart />
    </div>
  );
};

export default Index;
