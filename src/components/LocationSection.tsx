
import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LocationSection = () => {
  

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/place/Glacier+Choco+ice-Wilaya/@35.5857592,-5.3413507,17z/data=!4m14!1m7!3m6!1s0xd0b43004042461f:0xed673242e766d5df!2sGlacier+Choco+ice-Wilaya!8m2!3d35.5857592!4d-5.3413507!16s%2Fg%2F11wbjygd24!3m5!1s0xd0b43004042461f:0xed673242e766d5df!8m2!3d35.5857592!4d-5.3413507!16s%2Fg%2F11wbjygd24!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D"
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
                    
                  </h3>
                  
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
                    
                  </h3>
                  
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
