import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = '919573376389';
  const prefilledMessage = encodeURIComponent(
    'Hello Alekhya Technologies, I would like to inquire about your IT, Surveillance, Networking, and Office Solutions. Please provide more details.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      <div className="flex flex-col items-end space-y-3 pointer-events-auto">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-900/60 border border-emerald-400/40 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute right-full mr-3 hidden sm:group-hover:inline-block px-3 py-1.5 bg-slate-900/95 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-700 whitespace-nowrap backdrop-blur-sm">
            Chat on WhatsApp
          </span>
          <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919573376389"
          className="group relative flex items-center bg-blue-600 hover:bg-blue-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-blue-900/60 border border-blue-400/40 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Call Alekhya Technologies"
        >
          <span className="absolute right-full mr-3 hidden sm:group-hover:inline-block px-3 py-1.5 bg-slate-900/95 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-700 whitespace-nowrap backdrop-blur-sm">
            Call +91 95733 76389
          </span>
          <Phone className="w-6 h-6" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white p-3 rounded-full shadow-lg border border-slate-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </aside>
  );
};

export default FloatingCTA;
