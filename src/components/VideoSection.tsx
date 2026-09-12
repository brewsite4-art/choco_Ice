import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const videos = [
    '/assets/Video.mp4'
];

export const VideoSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { t } = useLanguage();

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const nextVideo = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            if (isPlaying) {
                videoRef.current.play().catch(error => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
            }
        }
    }, [currentIndex]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0
        })
    };

    return (
        <section className="py-14 md:py-20 bg-chocolate text-cream overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="w-full lg:w-[45%] space-y-6 md:space-y-8 animate-fade-in">
                        <div className="space-y-4">
                            <span className="text-gold uppercase tracking-widest text-sm font-bold border-b-2 border-gold pb-1 inline-block">
                                {t('video.savoirFaire')}
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                                {t('video.title')}
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light">
                            {t('video.subtitle')}
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-8 pt-2 md:pt-4">
                            <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden">
                                <span className="block text-2xl md:text-4xl font-black text-gold mb-1 break-words leading-tight">100%</span>
                                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-cream/70 leading-snug">
                                    {t('video.handmade')}
                                </span>
                            </div>
                            <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden">
                                <span className="block text-2xl md:text-4xl font-black text-gold mb-1 break-words leading-tight">Premium</span>
                                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-cream/70 leading-snug">
                                    {t('video.ingredients')}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[55%] flex flex-col items-center gap-6">
                        <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/10 bg-black group">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="absolute inset-0"
                                >
                                    <video
                                        ref={videoRef}
                                        src={videos[currentIndex]}
                                        className="w-full h-full object-cover"
                                        loop
                                        muted
                                        playsInline
                                        autoPlay
                                        onClick={togglePlay}
                                    />

                                    {!isPlaying && (
                                        <div
                                            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-all active:scale-95"
                                            onClick={togglePlay}
                                        >
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center pl-1 shadow-2xl">
                                                <Play className="w-6 h-6 md:w-8 md:h-8 text-chocolate fill-current" />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                        </div>

                        {/* Navigation Controls (only shown if more than 1 video) */}
                        {videos.length > 1 && (
                            <div className="flex gap-4 items-center">
                                <Button
                                    onClick={prevVideo}
                                    variant="outline"
                                    size="icon"
                                    className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/5 hover:bg-gold hover:border-gold hover:text-chocolate transition-all group"
                                >
                                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </Button>

                                <Button
                                    onClick={nextVideo}
                                    variant="outline"
                                    size="icon"
                                    className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/5 hover:bg-gold hover:border-gold hover:text-chocolate transition-all group"
                                >
                                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
