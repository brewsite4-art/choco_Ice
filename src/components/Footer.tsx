import { Truck, Instagram, Facebook, Phone, Clock, Mail, MapPin } from 'lucide-react';
import { deliveryFees } from '@/data/menuData';
import { useLanguage } from '@/contexts/LanguageContext';

export const DeliveryBanner = () => {
  const { t } = useLanguage();
  /* Delivery Banner */
  return (
    <div className="bg-chocolate text-cream py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-gold" />
          <span>{t('delivery.banner', { tetouan: deliveryFees['Tétouan'], martil: deliveryFees['Martil'] })}</span>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-coffee text-cream py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Choco ICE Centré au-dessus */}
        <div className="text-center mb-10">
          <h3 className="text-4xl font-playfair font-bold">
            <span className="text-gold">Choco</span> ICE
          </h3>

          <p className="text-cream/80 leading-relaxed mt-3 max-w-md mx-auto">
            {t('footer.description')}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-8">
          <p className="text-cream/90 font-medium mb-3">
            {t('footer.followUs')}
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/choco_ice_tetouan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gold" />
            </a>

            <a
              href="https://www.facebook.com/Chocoice99/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-gold" />
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${t('footer.email')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Gmail"
            >
              <Mail className="w-6 h-6 text-gold" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
