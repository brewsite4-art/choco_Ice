import { MapPin, Clock, Phone, Truck } from 'lucide-react';
import { deliveryFees } from '@/data/menuData';
import { useLanguage } from '@/contexts/LanguageContext';

export const DeliveryBanner = () => {
  const { t } = useLanguage();

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-4">
              <span className="text-gold">Choco</span> ICE
            </h3>
            <p className="text-cream/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-xl mb-4 text-gold">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/80">Wilaya centre, Tétouan 93020</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-cream/80">+212 600 000 000</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair font-semibold text-xl mb-4 text-gold">{t('footer.hours')}</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-cream/80">
                <p>{t('footer.monSat')}</p>
                <p>{t('footer.sunday')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-10 pt-6 text-center">
          <p className="text-cream/60 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
