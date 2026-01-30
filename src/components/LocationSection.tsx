
import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">

        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://maps.app.goo.gl/ZzcwzK8UmiWeD7Ww6"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ChocoIce Location"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="shadow-lg border-none bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {t('footer.location')}
                  </h3>
                  <p className="text-muted-foreground">Wilaya centre, Tétouan 93020</p>

                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {t('footer.hours')}
                  </h3>
                  <div className="text-muted-foreground">
                    <p>{t('footer.monSat')}</p>
                    <p>{t('footer.sunday')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {t('footer.contact')}
                  </h3>
                  <p className="text-muted-foreground">+212 600 000 000</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
