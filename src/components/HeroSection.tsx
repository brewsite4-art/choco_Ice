import heroBg from '@/assets/back.svg';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';


export const HeroSection = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open(`https://wa.me/212600000000?text=${encodeURIComponent(t('hero.whatsappMessage'))}`, '_blank');
  };

  return (
    <section className="relative min-h-[80vh] flex items-center md:items-end justify-center overflow-hidden pb-12 md:pb-4 transition-all duration-300">


      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/60 to-coffee/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-32 md:pt-0">
        <h1
          className="font-playfair font-bold mb-3 md:mb-6 animate-fade-in-up leading-tight"
          style={{ fontSize: 'clamp(72px, 8vw, 120px)' }}
        >
          <span className="text-[#E8A317]">Choco</span> <span className="text-white">ICE</span>
        </h1>
        <p
          className="text-white mb-4 md:mb-8 font-poppins font-normal tracking-wide animate-fade-in-up"
          style={{ fontSize: '22px', animationDelay: '0.2s' }}
        >
          {t('hero.tagline')}
        </p>
        {/* Description Text */}
        <p
          className="text-white/90 font-poppins font-light animate-fade-in-up mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: '17px', animationDelay: '0.3s' }}
        >
          {t('hero.description')}
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/menu"
            className="btn-accent px-8 py-3 md:px-10 md:py-4 inline-flex items-center gap-2 rounded-full shadow-lg"
            style={{ fontSize: '17px' }}
          >
            {t('hero.viewMenu')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <button
            onClick={openWhatsApp}
            className="bg-transparent border-2 border-cream text-cream hover:bg-cream hover:text-chocolate transition-all duration-300 px-8 py-3 md:px-10 md:py-4 rounded-full inline-flex items-center gap-2"
            style={{ fontSize: '17px' }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>
        </div>

        {/* Scroll to Explore Indicator - Below Buttons */}
        <a
          href="#history"
          className="flex flex-col items-center gap-3 animate-fade-in-up cursor-pointer hover:opacity-80 transition-opacity"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-cream/90 font-light" style={{ fontSize: '18px' }}>{t('hero.scrollToExplore')}</p>
          <svg className="w-9 h-9 text-cream/90 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

      </div>

      {/* Decorative elements */}

    </section>
  );
};
