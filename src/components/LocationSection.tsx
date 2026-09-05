import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LocationSection = () => {
  const { t, language } = useLanguage();

  const locations = [
    {
      nameKey: 'locations.ainKhabaz',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3245.4921097387396!2d-5.383430824217379!3d35.56624367262459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDMzJzU4LjUiTiA1wrAyMic1MS4xIlc!5e0!3m2!1sfr!2sma!4v1769949545198!5m2!1sfr!2sma',
    },
    {
      nameKey: 'locations.wilayaCentre',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3244.7014844369874!2d-5.343925624216558!3d35.58575917261831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM1JzA4LjciTiA1wrAyMCcyOC45Ilc!5e0!3m2!1sfr!2sma!4v1769949490782!5m2!1sfr!2sma',
    },
    {
      nameKey: 'locations.martil',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3242.921764160296!2d-5.277106424214564!3d35.6296551726039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM3JzQ2LjgiTiA1wrAxNicyOC4zIlc!5e0!3m2!1sfr!2sma!4v1769949580424!5m2!1sfr!2sma',
    },
  ];

  return (
    <section id="location" className="py-20 bg-background overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('locations.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('locations.description')}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {locations.map((location, index) => (
                <CarouselItem key={index} className="basis-1/1">
                  <Card className="shadow-lg border-none bg-card overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 bg-chocolate text-cream flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-6 w-6 text-gold" />
                          <h3 className="font-serif text-2xl font-bold">
                            {t(location.nameKey)}
                          </h3>
                        </div>
                      </div>
                      <div className="h-[400px]">
                        <iframe
                          src={location.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${t(location.nameKey)} Location`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white text-chocolate border-chocolate hover:bg-chocolate hover:text-white" />
            <CarouselNext className="hidden md:flex bg-white text-chocolate border-chocolate hover:bg-chocolate hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
