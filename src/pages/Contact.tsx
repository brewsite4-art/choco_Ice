
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send, Phone, MapPin, Mail, Clock } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Cart } from "@/components/Cart";
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Le nom doit contenir au moins 2 caractères.",
    }),
    email: z.string().email({
        message: "Email invalide.",
    }),
    phone: z.string().min(10, {
        message: "Numéro de téléphone invalide.",
    }),
    type: z.enum(["general", "reservation"], {
        required_error: "Veuillez sélectionner un type de demande.",
    }),
    message: z.string().min(100, {
        message: "Votre message doit contenir au moins 100 caractères.",
    }),
});

const Contact = () => {
    const { toast } = useToast();
    const { t } = useLanguage();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            phone: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        // Simulation of sending
        toast({
            title: t('contact.toast.successTitle'),
            description: t('contact.toast.successDescription'),
        });
        form.reset();
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navbar is used in App, so header here might be redundant if Layout is used. 
           But sticking to previous design: */}

            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" className="font-playfair text-2xl font-bold text-chocolate">Choco Ice </a>
                    <nav className="hidden md:flex gap-6">
                        <a href="/" className="text-foreground hover:text-chocolate transition-colors">{t('navbar.home')}</a>
                        <a href="/menu" className="text-foreground hover:text-chocolate transition-colors">{t('navbar.menu')}</a>
                        <a href="/contact" className="text-chocolate font-semibold">{t('navbar.contact')}</a>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Contact */}
                <section className="bg-chocolate text-cream py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{t('contact.pageTitle')}</h1>
                        <p className="text-lg max-w-2xl mx-auto opacity-90">
                            {t('contact.pageSubtitle')}
                        </p>
                    </div>
                </section>

                <section className="py-16 container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                                <h3 className="text-2xl font-playfair font-bold text-chocolate mb-6">{t('contact.infoTitle')}</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-chocolate shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div className="mt-1">
                                            <h4 className="font-semibold text-lg text-foreground">{t('contact.findUs')}</h4>
                                            <p className="text-muted-foreground">{t('locations.wilayaCentre')}, Tétouan</p>
                                            <p className="text-muted-foreground">{t('locations.martil')}, Corniche</p>
                                            <p className="text-muted-foreground">{t('locations.ainKhabaz')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-chocolate shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div className="mt-1">
                                            <h4 className="font-semibold text-lg text-foreground">{t('contact.callUs')}</h4>
                                            <p className="text-muted-foreground">+212 656-508859</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-chocolate shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div className="mt-1">
                                            <h4 className="font-semibold text-lg text-foreground">{t('footer.hours')}</h4>
                                            <p className="text-muted-foreground">{t('footer.monSat')}</p>
                                            <p className="text-muted-foreground">{t('footer.sunday')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-playfair font-bold text-chocolate mb-6">{t('contact.formTitle')}</h3>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t('contact.form.name')}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={t('contact.form.name')} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t('contact.form.email')}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="email@exemple.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t('contact.form.phone')}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="06..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t('contact.form.type')}</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder={t('contact.type.placeholder')} />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="general">{t('contact.type.general')}</SelectItem>
                                                        <SelectItem value="reservation">{t('contact.type.reservation')}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormDescription>
                                                    {/* Description omitted or translated if crucial */}
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t('contact.form.message')}</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder={t('contact.form.message')}
                                                        className="min-h-[120px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full bg-chocolate hover:bg-mocha text-cream text-lg py-6">
                                        {t('contact.form.submit')} <Send className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                            </Form>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
            <Cart />
        </div>
    );
};

export default Contact;
