import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    Review,
    addReview as firebaseAddReview,
    subscribeToApprovedReviews,
} from '@/services/reviewService';

export type { Review };

interface ReviewsContextType {
    reviews: Review[];
    addReview: (review: Omit<Review, 'id' | 'date' | 'verified' | 'approved' | 'createdAt'>) => Promise<void>;
    averageRating: number;
    totalReviews: number;
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

export const ReviewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        // Subscribe to real-time approved reviews from Firestore
        const unsubscribe = subscribeToApprovedReviews((approvedReviews) => {
            setReviews(approvedReviews);
        });
        return () => unsubscribe();
    }, []);

    const addReview = async (newReview: Omit<Review, 'id' | 'date' | 'verified' | 'approved' | 'createdAt'>) => {
        await firebaseAddReview(newReview.name, newReview.text, newReview.rating);
    };

    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0
        ? reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews
        : 0;

    return (
        <ReviewsContext.Provider value={{ reviews, addReview, averageRating, totalReviews }}>
            {children}
        </ReviewsContext.Provider>
    );
};

export const useReviews = () => {
    const context = useContext(ReviewsContext);
    if (!context) {
        throw new Error('useReviews must be used within a ReviewsProvider');
    }
    return context;
};
