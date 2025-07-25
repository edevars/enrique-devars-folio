import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { getIconComponent } from '@/lib/icon-utils';
import { portfolioConfig } from '@/config/portfolio';

export function About() {
  const { t } = useLanguage();
  const { about } = portfolioConfig;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.experience}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((highlight, index) => {
                const Icon = getIconComponent(highlight.icon);
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}