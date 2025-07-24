import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import dashboardImg from '@/assets/project-dashboard.jpg';
import mobileImg from '@/assets/project-mobile.jpg';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, payment processing, and admin dashboard.',
      image: ecommerceImg,
      technologies: ['React', 'TypeScript', 'Node.js', 'Stripe', 'MongoDB'],
      github: 'https://github.com/enriquedevars/ecommerce',
      demo: 'https://ecommerce-demo.vercel.app'
    },
    {
      title: 'Project Management Dashboard',
      description: 'A comprehensive project management tool with task tracking, team collaboration, and real-time updates. Built with modern React patterns and state management.',
      image: dashboardImg,
      technologies: ['React', 'Redux', 'Chart.js', 'Socket.io', 'Express'],
      github: 'https://github.com/enriquedevars/pm-dashboard',
      demo: 'https://pm-dashboard.vercel.app'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and financial insights. Optimized for performance and security.',
      image: mobileImg,
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometrics', 'Chart.js'],
      github: 'https://github.com/enriquedevars/mobile-banking',
      demo: 'https://banking-app-demo.vercel.app'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-large transition-all duration-300 hover:scale-[1.02] border-border/50"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group-hover:border-primary/40 transition-colors duration-200"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {t('projects.viewCode')}
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-accent hover:opacity-90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t('projects.liveDemo')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}