import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReviews } from '@/contexts/ReviewsContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, ArrowLeft, Send, Check, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Reviews = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { t, language } = useLanguage();
    const { reviews, addReview, averageRating, totalReviews } = useReviews();
    const { toast } = useToast();

    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !text) {
            toast({
                title: "Erreur",
                description: "Veuillez remplir tous les champs.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);
        try {
            await addReview({ name, rating, text });
            setName('');
            setRating(5);
            setText('');
            setSubmitted(true);
        } catch (err) {
            toast({
                title: "Erreur",
                description: "Impossible d'envoyer l'avis. Réessayez.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Navbar />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4 max-w-5xl">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-chocolate hover:text-mocha transition-colors mb-8"
                    >
                        <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                        {t('navbar.home')}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Left Col: Header & Stats */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h1 className="text-4xl font-playfair font-bold text-chocolate mb-4">
                                    {t('reviews.title')}
                                </h1>
                                <p className="text-muted-foreground">
                                    {t('reviews.subtitle')}
                                </p>
                            </div>

                            <div className="bg-chocolate text-cream p-8 rounded-3xl shadow-xl">
                                <div className="text-center">
                                    <span className="block text-6xl font-bold mb-2">{averageRating.toFixed(1)}</span>
                                    <div className="flex justify-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-6 h-6 ${i < Math.round(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-cream/30'}`} />
                                        ))}
                                    </div>
                                    <p className="text-cream/80 text-sm">
                                        {t('reviews.stats.basedOn').replace('{count}', totalReviews.toString())}
                                    </p>
                                </div>
                            </div>

                            {/* Add Review Form */}
                            <div className="bg-white p-6 rounded-3xl shadow-lg border border-border/50">
                                <h3 className="text-xl font-bold text-chocolate mb-6">{t('reviews.form.title')}</h3>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center gap-3 py-6 text-center"
                                    >
                                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                                            <Clock className="w-7 h-7 text-amber-600" />
                                        </div>
                                        <p className="font-semibold text-chocolate">Merci pour votre avis !</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Votre avis a été envoyé et sera affiché après validation par notre équipe.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-sm text-chocolate underline mt-2"
                                        >
                                            Laisser un autre avis
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">{t('reviews.form.name')}</label>
                                            <Input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Ex: Fatima Zahra"
                                                className="rounded-xl border-border/60"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">{t('reviews.form.rating')}</label>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                    <button
                                                        key={num}
                                                        type="button"
                                                        onClick={() => setRating(num)}
                                                        className="transition-transform active:scale-90"
                                                    >
                                                        <Star className={`w-8 h-8 ${num <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">{t('reviews.form.text')}</label>
                                            <Textarea
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                placeholder="Comment était votre expérience ?"
                                                className="rounded-xl min-h-[120px] border-border/60"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-chocolate hover:bg-mocha text-cream h-12 rounded-xl text-lg flex gap-2 items-center justify-center font-semibold transition-all"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Envoi..." : t('reviews.form.submit')}
                                            {!isSubmitting && <Send className="w-4 h-4" />}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Right Col: Approved Reviews List */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                {reviews.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground"
                                    >
                                        <Star className="w-12 h-12 mb-4 text-yellow-300" />
                                        <p className="text-lg font-medium">Aucun avis pour l'instant.</p>
                                        <p className="text-sm mt-1">Soyez le premier à partager votre expérience !</p>
                                    </motion.div>
                                ) : (
                                    <AnimatePresence mode="popLayout">
                                        {reviews.map((review, index) => (
                                            <motion.div
                                                key={review.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="bg-white p-6 rounded-3xl shadow-sm border border-border/40 hover:shadow-md transition-all group"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-chocolate font-bold text-lg">
                                                            {review.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-chocolate">{review.name}</h4>
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                                                                    ))}
                                                                </div>
                                                                {review.verified && (
                                                                    <span className="flex items-center gap-1 text-[10px] text-green-600 font-bold uppercase tracking-wider">
                                                                        <Check className="w-3 h-3" /> {t('reviews.verified')}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs text-muted-foreground font-medium">{review.date}</span>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed italic group-hover:text-foreground transition-colors">
                                                    "{review.text}"
                                                </p>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Reviews;
