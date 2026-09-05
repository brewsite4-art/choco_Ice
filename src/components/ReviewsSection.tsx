import { Star, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from '@/contexts/LanguageContext';
import { useReviews } from '@/contexts/ReviewsContext';
import { Button } from '@/components/ui/button';

export const ReviewsSection = () => {
    const { t, language } = useLanguage();
    const { reviews } = useReviews();

    // Show only the 6 most recent reviews in the carousel
    const previewReviews = reviews.slice(0, 6);

    return (
        <section className="py-20 bg-cream/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate mb-4">
                            {t('reviews.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {t('reviews.subtitle')}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Link to="/reviews" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full border-chocolate text-chocolate hover:bg-chocolate hover:text-white rounded-full px-8 h-12 gap-2">
                                {t('reviews.seeMore')}
                                <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                            </Button>
                        </Link>
                        <Link to="/reviews" className="w-full sm:w-auto">
                            <Button className="w-full bg-chocolate hover:bg-mocha text-cream rounded-full px-8 h-12 gap-2 shadow-lg hover:shadow-xl transition-all">
                                <MessageCircle className="w-4 h-4" />
                                {t('reviews.leaveReview')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <Carousel className="w-full max-w-6xl mx-auto">
                    <CarouselContent className="-ml-4">
                        {previewReviews.map((review) => (
                            <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/40 h-full flex flex-col hover:shadow-md transition-shadow group">
                                    <div className="flex gap-1 mb-4 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-200'}`} />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground italic mb-8 flex-grow leading-relaxed group-hover:text-foreground transition-colors">
                                        "{review.text}"
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-chocolate">{review.name}</h4>
                                            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">{review.date}</span>
                                        </div>
                                        <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-chocolate font-bold">
                                            {review.name.charAt(0)}
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white" />
                </Carousel>
            </div>
        </section>
    );
};
