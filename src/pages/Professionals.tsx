import { useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Truck, Award, DollarSign, Users, ChefHat, IceCream, Cake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Professionals = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { t } = useLanguage();

    const openWhatsApp = () => {
        window.open(
            `https://wa.me/212600000000?text=${encodeURIComponent(t('professionals.whatsappMessage'))}`,
            '_blank'
        );
    };

    const advantages = [
        {
            icon: Truck,
            title: t('professionals.advantage1.title'),
            desc: t('professionals.advantage1.desc'),
        },
        {
            icon: Award,
            title: t('professionals.advantage2.title'),
            desc: t('professionals.advantage2.desc'),
        },
        {
            icon: DollarSign,
            title: t('professionals.advantage3.title'),
            desc: t('professionals.advantage3.desc'),
        },
        {
            icon: Users,
            title: t('professionals.advantage4.title'),
            desc: t('professionals.advantage4.desc'),
        },
    ];

    const products = [
        {
            icon: Cake,
            name: t('professionals.product1.name'),
            desc: t('professionals.product1.desc'),
        },
        {
            icon: IceCream,
            name: t('professionals.product2.name'),
            desc: t('professionals.product2.desc'),
        },
        {
            icon: ChefHat,
            name: t('professionals.product3.name'),
            desc: t('professionals.product3.desc'),
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-coffee/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-gold uppercase tracking-widest text-sm font-semibold">
                        B2B Solutions
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gradient mt-4 mb-6">
                        {t('professionals.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-4">
                        {t('professionals.subtitle')}
                    </p>
                    <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                        {t('professionals.intro')}
                    </p>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-16 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-gradient mb-12">
                        {t('professionals.whyChooseUs')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {advantages.map((advantage, index) => {
                            const Icon = advantage.icon;
                            return (
                                <Card key={index} className="border-none shadow-card hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-chocolate/10 p-3 rounded-full">
                                                <Icon className="w-6 h-6 text-chocolate" />
                                            </div>
                                            <div>
                                                <h3 className="font-playfair font-bold text-xl text-chocolate mb-2">
                                                    {advantage.title}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {advantage.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-16 px-4 bg-gradient-to-b from-background to-coffee/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-gradient mb-12">
                        {t('professionals.productsTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.map((product, index) => {
                            const Icon = product.icon;
                            return (
                                <Card key={index} className="border-none shadow-card hover:shadow-lg transition-all hover:scale-105 duration-300">
                                    <CardContent className="p-6 text-center">
                                        <div className="bg-gradient-to-br from-chocolate to-mocha p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-cream" />
                                        </div>
                                        <h3 className="font-playfair font-bold text-xl text-chocolate mb-3">
                                            {product.name}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {product.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-coffee/5 to-background">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient mb-6">
                        {t('professionals.contactTitle')}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        {t('professionals.contactDesc')}
                    </p>
                    <button
                        onClick={openWhatsApp}
                        className="btn-accent text-lg px-10 py-4 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all"
                    >
                        <MessageCircle className="w-6 h-6" />
                        {t('professionals.contactButton')}
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Professionals;
