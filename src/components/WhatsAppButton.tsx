import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/212600000000?text=Bonjour, je souhaite passer une commande', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Commander sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" />
    </button>
  );
};

export default WhatsAppButton;
