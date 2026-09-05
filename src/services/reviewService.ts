import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Review {
    id: string;
    name: string;
    rating: number;
    text: string;
    date: string;
    verified: boolean;
    approved: boolean;
    createdAt: Timestamp;
}

const COLLECTION = "reviews";

/** Called when a user submits a review — stored as pending (approved: false) */
export const addReview = async (
    name: string,
    text: string,
    rating: number
): Promise<void> => {
    await addDoc(collection(db, COLLECTION), {
        name,
        text,
        rating,
        approved: false,
        verified: false,
        createdAt: Timestamp.now(),
        date: new Date().toLocaleDateString("fr-FR"),
    });
};

/** Real-time listener for approved reviews only (public display) */
export const subscribeToApprovedReviews = (
    callback: (reviews: Review[]) => void
): (() => void) => {
    const q = query(
        collection(db, COLLECTION),
        where("approved", "==", true),
        orderBy("createdAt", "desc")
    );
    return onSnapshot(q, (snapshot) => {
        const reviews: Review[] = snapshot.docs.map((d) => ({
            id: d.id,
            ...(d.data() as Omit<Review, "id">),
        }));
        callback(reviews);
    });
};

/** Fetch ALL reviews (pending + approved) — used by admin */
export const getAllReviews = async (): Promise<Review[]> => {
    const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Review, "id">),
    }));
};

/** Admin: approve a review */
export const approveReview = async (id: string): Promise<void> => {
    await updateDoc(doc(db, COLLECTION, id), { approved: true, verified: true });
};

/** Admin: delete a review */
export const deleteReview = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, COLLECTION, id));
};
