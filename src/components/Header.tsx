import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Moon, Sun, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { usePortfolioContent } from '@/hooks/use-portfolio-content';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { personal } = usePortfolioContent();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20">
              <img 
                src={personal.profilePhoto} 
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Logo */}
            <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              {personal.name}
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                {t(`nav.${section}`)}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}