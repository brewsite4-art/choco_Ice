import heroBg from '@/assets/glace2.jpg';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';

export const HeroSection = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open(`https://wa.me/212600000000?text=${encodeURIComponent(t('hero.whatsappMessage'))}`, '_blank');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Language Selector */}
      <div className="absolute top-4 end-4 z-20">
        <LanguageSelector />
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/60 to-coffee/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-cream mb-4 animate-fade-in-up">
          <span className="text-gold">Choco</span> ICE
        </h1>
        <p className="text-xl md:text-2xl text-cream/90 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.tagline')}
        </p>
        <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {t('hero.description')}
        </p>
        <a
          href="#menu"
          className="btn-accent text-lg px-10 py-4 animate-fade-in-up inline-block"
          style={{ animationDelay: '0.6s' }}
        >
          {t('hero.viewMenu')}
        </a>

      </div>

      {/* Decorative elements */}

    </section>
  );
};
