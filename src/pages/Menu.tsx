import { useEffect } from "react";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";

const Menu = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Simple Navigation Header - Should be extracted to a reusable Navbar component later */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="font-playfair text-2xl font-bold text-chocolate">Choco Ice</a>
                    <nav className="hidden md:flex gap-6">
                        <a href="/" className="text-foreground hover:text-chocolate transition-colors">Accueil</a>
                        <a href="/menu" className="text-chocolate font-semibold">Menu</a>
                        <a href="/contact" className="text-foreground hover:text-chocolate transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="flex-grow pt-8">
                {/* Page Title */}
                <div className="container mx-auto px-4 text-center mb-8">
                    <span className="text-gold uppercase tracking-widest text-sm font-semibold">Délices Artisanaux</span>
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mt-2">Notre Carte Complète</h1>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Découvrez toutes nos créations, des boissons chaudes réconfortantes aux desserts glacés spectaculaires.
                        Commandez directement en ligne.
                    </p>
                </div>

                <MenuSection />
            </main>

            <Cart /> {/* Ensure cart is available here too */}
            <Footer />
        </div>
    );
};
export default Menu;
