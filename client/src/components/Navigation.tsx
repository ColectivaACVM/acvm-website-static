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
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'mission', label: t('nav.mission') },
    { id: 'organization', label: t('nav.organization') },
    { id: 'units', label: t('nav.units') },
    { id: 'territory', label: t('nav.territory') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onNavigate?.(id);
    // Scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center py-4">
        {/* Logo/Brand - Left Side */}
        <button onClick={() => handleNavClick('home')} className="flex items-center flex-shrink-0">
          <span className="text-lg font-bold text-primary">ACVM</span>
        </button>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center gap-12 flex-1 ml-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu - Right Side */}
        <div className="flex items-center gap-4 ml-auto">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
          </div>
        </div>
      )}
    </nav>
  );
}
