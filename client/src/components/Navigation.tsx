import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'units', label: t('nav.units') },
    { id: 'territory', label: t('nav.territory') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onNavigate?.(id);

    // Espera a que cierre el menú y se re-renderice
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const element = document.getElementById(id);
        const nav = document.querySelector('nav');

        if (!element) return;

        const navHeight = nav ? nav.getBoundingClientRect().height : 0;
        const extraOffset = window.innerWidth < 1024 ? 0 : 0;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          navHeight -
          extraOffset;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      });
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center py-3 md:py-4 gap-4">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center flex-shrink-0"
        >
          <img
            src="/images/La-Colectiva-Logo-Nuevo-Curvas.webp"
            alt="La Colectiva"
            className="h-16 md:h-20 w-auto"
          />
        </button>

        <div className="hidden lg:flex items-center justify-center  gap-8 xl:gap-10 flex-1 ml-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm xl:text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}

          <a
          href={t('donate.link')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90"
          >
          {t('nav.donate')}
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <div className="flex gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === 'es'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-3 ml-auto">
          <div className="flex gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === 'es'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}

            <div className="flex justify-center mt-4">
            <a
              href={t('donate.link')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 text-center w-full max-w-xs"
            >
              {t('nav.donate')}
            </a>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
}