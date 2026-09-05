import { Map, Marker, Overlay } from 'pigeon-maps';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Info, X, LocateFixed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Location {
    id: number;
    nameKey: string;
    city: string;
    typeKey: string;
    coords: [number, number];
    color: string;
}

const locations: Location[] = [
    {
        id: 1,
        nameKey: 'locations.ainKhabaz',
        city: 'Tétouan',
        typeKey: 'locations.type.boutique',
        coords: [35.5662, -5.3834],
        color: '#10b981', // Emerald-500
    },
    {
        id: 2,
        nameKey: 'locations.wilayaCentre',
        city: 'Tétouan',
        typeKey: 'locations.type.cafe',
        coords: [35.5857, -5.3439],
        color: '#f59e0b', // Amber-500
    },
    {
        id: 3,
        nameKey: 'locations.martil',
        city: 'Martil',
        typeKey: 'locations.type.delivery',
        coords: [35.6296, -5.2771],
        color: '#3b82f6', // Blue-500
    }
];

export const MapSection = () => {
    const { t, language } = useLanguage();
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [mapCenter, setMapCenter] = useState<[number, number]>([35.59, -5.35]);
    const [mapZoom, setMapZoom] = useState(12);

    const defaultCenter: [number, number] = [35.59, -5.35];
    const defaultZoom = 12;

    const resetView = () => {
        setMapCenter(defaultCenter);
        setMapZoom(defaultZoom);
    };

    return (
        <section id="location" className="py-20 bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate mb-4">
                        {t('locations.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('locations.description')}
                    </p>
                </div>

                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white h-[400px] bg-cream/20">
                    <Map
                        height={400}
                        center={mapCenter}
                        zoom={mapZoom}
                        onBoundsChanged={({ center, zoom }) => { setMapCenter(center); setMapZoom(zoom); }}
                        metaWheelZoom={true}
                    >
                        {locations.map((loc) => (
                            <Marker
                                key={loc.id}
                                width={50}
                                anchor={loc.coords}
                                color={loc.color}
                                onClick={() => setSelectedLocation(loc)}
                            />
                        ))}

                        {selectedLocation && (
                            <Overlay anchor={selectedLocation.coords} offset={[0, 0]}>
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                        animate={{ opacity: 1, scale: 1, y: -180 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                        className="bg-white p-5 rounded-3xl shadow-2xl border border-border/50 min-w-[280px] relative z-50 overflow-visible"
                                        dir={language === 'ar' ? 'rtl' : 'ltr'}
                                    >
                                        {/* Triangle pointer */}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-border/50"></div>

                                        <button
                                            onClick={() => setSelectedLocation(null)}
                                            className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <X className="w-4 h-4 text-gray-400" />
                                        </button>

                                        <div className="flex items-center gap-3 mb-3 pt-1">
                                            <div className="p-2 rounded-2xl bg-cream/30">
                                                <MapPin className="w-6 h-6" style={{ color: selectedLocation.color }} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-chocolate text-lg leading-tight">
                                                    {t(selectedLocation.nameKey)}
                                                </h4>
                                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                                    {selectedLocation.city}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-5">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Info className="w-4 h-4 text-chocolate/50" />
                                                <span>{t(selectedLocation.typeKey)}</span>
                                            </div>
                                        </div>

                                        <Button className="w-full bg-chocolate hover:bg-mocha text-cream rounded-xl h-11 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-chocolate/20 transition-all active:scale-95">
                                            <Navigation className="w-4 h-4" />
                                            {t('locations.seeDetails')}
                                        </Button>
                                    </motion.div>
                                </AnimatePresence>
                            </Overlay>
                        )}
                    </Map>

                    {/* Floating Interaction Hint (Desktop) */}
                    <div className="absolute top-6 left-6 z-[100] bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-border/50 hidden md:flex items-center gap-2 text-xs font-medium text-chocolate/70">
                        <Info className="w-4 h-4" />
                        Cliquez sur un marqueur pour voir les détails
                    </div>

                    {/* Reset View Button */}
                    <button
                        onClick={resetView}
                        title="Retour aux boutiques"
                        className="absolute bottom-10 left-6 z-[100] bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-border/50 flex items-center gap-2 text-xs font-semibold text-chocolate hover:bg-chocolate hover:text-cream transition-all duration-200 group"
                    >
                        <LocateFixed className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="hidden md:inline">Nos boutiques</span>
                    </button>

                    {/* Legend */}
                    <div className="absolute bottom-10 right-10 z-[100] bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-border/50 hidden md:block min-w-[220px]">
                        <h5 className="font-bold text-chocolate text-sm mb-4 border-b border-border/50 pb-2">Sections & Points de Vente</h5>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/20 group-hover:scale-125 transition-transform"></div>
                                <span className="text-xs font-bold text-chocolate/80">{t('locations.type.boutique')}</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-4 h-4 rounded-full bg-amber-500 shadow-md shadow-amber-500/20 group-hover:scale-125 transition-transform"></div>
                                <span className="text-xs font-bold text-chocolate/80">{t('locations.type.cafe')}</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-md shadow-blue-500/20 group-hover:scale-125 transition-transform"></div>
                                <span className="text-xs font-bold text-chocolate/80">{t('locations.type.delivery')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
