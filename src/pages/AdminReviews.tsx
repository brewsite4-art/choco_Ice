import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, Check, Trash2, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Review,
    getAllReviews,
    approveReview,
    deleteReview,
} from '@/services/reviewService';

const ADMIN_PASSWORD = 'chocoice2024';

const AdminReviews = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState('');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === ADMIN_PASSWORD) {
            setAuthenticated(true);
            setError('');
        } else {
            setError('Mot de passe incorrect.');
        }
    };

    const fetchReviews = async () => {
        setLoading(true);
        const all = await getAllReviews();
        setReviews(all);
        setLoading(false);
    };

    useEffect(() => {
        if (authenticated) fetchReviews();
    }, [authenticated]);

    const handleApprove = async (id: string) => {
        await approveReview(id);
        setReviews((prev) =>
            prev.map((r) => (r.id === id ? { ...r, approved: true, verified: true } : r))
        );
    };

    const handleDelete = async (id: string) => {
        await deleteReview(id);
        setReviews((prev) => prev.filter((r) => r.id !== id));
    };

    const pending = reviews.filter((r) => !r.approved);
    const approved = reviews.filter((r) => r.approved);

    if (!authenticated) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm text-center"
                >
                    <ShieldCheck className="w-12 h-12 text-chocolate mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-chocolate mb-6">Admin — Avis</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            placeholder="Mot de passe"
                            className="w-full border border-border/60 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-chocolate/30"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-chocolate text-cream rounded-xl py-3 font-semibold hover:bg-mocha transition-colors"
                        >
                            Connexion
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex items-center justify-between mb-10">
                        <h1 className="text-3xl font-bold text-chocolate">Modération des avis</h1>
                        <button
                            onClick={fetchReviews}
                            className="text-sm text-chocolate underline"
                        >
                            Actualiser
                        </button>
                    </div>

                    {loading ? (
                        <p className="text-center text-muted-foreground py-20">Chargement...</p>
                    ) : (
                        <>
                            {/* PENDING */}
                            <section className="mb-12">
                                <h2 className="text-xl font-semibold text-amber-700 mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5" /> En attente ({pending.length})
                                </h2>
                                {pending.length === 0 ? (
                                    <p className="text-muted-foreground text-sm">Aucun avis en attente.</p>
                                ) : (
                                    <AnimatePresence>
                                        {pending.map((review) => (
                                            <motion.div
                                                key={review.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="bg-amber-50 border border-amber-200 p-5 rounded-2xl mb-4"
                                            >
                                                <ReviewCard review={review} />
                                                <div className="flex gap-3 mt-4">
                                                    <button
                                                        onClick={() => handleApprove(review.id)}
                                                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-xl transition-colors"
                                                    >
                                                        <Check className="w-4 h-4" /> Approuver
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(review.id)}
                                                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-xl transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" /> Supprimer
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                )}
                            </section>

                            {/* APPROVED */}
                            <section>
                                <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                                    <Check className="w-5 h-5" /> Approuvés ({approved.length})
                                </h2>
                                {approved.length === 0 ? (
                                    <p className="text-muted-foreground text-sm">Aucun avis approuvé.</p>
                                ) : (
                                    <AnimatePresence>
                                        {approved.map((review) => (
                                            <motion.div
                                                key={review.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="bg-green-50 border border-green-200 p-5 rounded-2xl mb-4"
                                            >
                                                <ReviewCard review={review} />
                                                <div className="flex gap-3 mt-4">
                                                    <button
                                                        onClick={() => handleDelete(review.id)}
                                                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-xl transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" /> Supprimer
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                )}
                            </section>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

const ReviewCard = ({ review }: { review: Review }) => (
    <div>
        <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-chocolate font-bold">
                {review.name.charAt(0)}
            </div>
            <div>
                <p className="font-bold text-chocolate text-sm">{review.name}</p>
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                        />
                    ))}
                </div>
            </div>
            <span className="ml-auto text-xs text-muted-foreground">{review.date}</span>
        </div>
        <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
    </div>
);

export default AdminReviews;
