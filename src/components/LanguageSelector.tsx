import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export const LanguageSelector = ({ isDark }: { isDark?: boolean }) => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className={`flex items-center gap-2 transition-all ${isDark
                            ? 'text-chocolate hover:text-gold hover:bg-cream'
                            : 'text-cream hover:text-gold hover:bg-white/10'
                        }`}
                >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">
                        {language === 'fr' ? '🇫🇷 FR' : '🇲🇦 AR'}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem
                    onClick={() => setLanguage('fr')}
                    className={`cursor-pointer ${language === 'fr' ? 'bg-chocolate/20' : ''}`}
                >
                    <span className="mr-2">🇫🇷</span>
                    {t('language.french')}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLanguage('ar')}
                    className={`cursor-pointer ${language === 'ar' ? 'bg-chocolate/20' : ''}`}
                >
                    <span className="mr-2">🇲🇦</span>
                    {t('language.arabic')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
