import { useLanguage } from '@/contexts/LanguageContext';

const HistorySection = () => {
    const { t } = useLanguage();

    return (
        <section id="history" className="py-16 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
                        {t('history.title')}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t('history.content')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
