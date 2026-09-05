import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('navbar.home'), path: '/' },
        { name: t('navbar.menu'), path: '/menu' },
        { name: t('navbar.gallery'), path: '/gallery' },
        { name: t('navbar.professionals'), path: '/professionals' },
        { name: t('navbar.contact'), path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span
                        className={`font-playfair font-bold text-2xl transition-opacity duration-300
                            ${scrolled ? 'text-chocolate' : 'text-cream shadow-text'}
                            ${location.pathname === '/' && !scrolled ? 'opacity-0' : 'opacity-100'}
                        `}
                    >
                        Choco Ice
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium text-lg transition-colors hover:text-gold ${location.pathname === link.path
                                    ? 'text-gold'
                                    : (scrolled ? 'text-foreground' : 'text-cream/90 hover:text-white')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <LanguageSelector isDark={scrolled} />
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-cream'}`} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-slide-in-right md:hidden flex flex-col gap-4 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg font-medium py-2 px-4 hover:bg-muted rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-4">
                            <LanguageSelector isDark={true} />
                        </div>

                    </div>
                )}
            </div>
        </nav>
    );
};
