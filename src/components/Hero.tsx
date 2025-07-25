import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';
import { usePortfolioContent } from '@/hooks/use-portfolio-content';

export function Hero() {
  const { t } = useLanguage();
  const { contact } = portfolioConfig;
  const { personal } = usePortfolioContent();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <p className="text-muted-foreground text-lg mb-4 animate-slide-in">
              {personal.greeting}
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-slide-in">
              {personal.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/90 mb-6 animate-slide-in">
              {personal.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-in">
              {personal.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-accent hover:opacity-90 text-accent-foreground border-0 shadow-medium transition-all duration-300 hover:scale-105"
              >
                {t('home.cta')}
              </Button>
              {personal.cvUrl && (
                <Button 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/5"
                  asChild
                >
                  <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer">
                    {t('home.downloadCv')}
                  </a>
                </Button>
              )}
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in">
              <a 
                href={contact.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href={contact.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large animate-float">
                <img 
                  src={personal.profilePhoto} 
                  alt={personal.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}