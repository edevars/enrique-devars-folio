import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Home section
    'home.cta': 'Get In Touch',
    'home.downloadCv': 'Download CV',
    
    // About section
    'about.title': 'About Me',
    
    // Projects section
    'projects.title': 'Featured Projects',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    
    // Skills section
    'skills.title': 'Skills & Technologies',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    
    // Contact section
    'contact.title': 'Get In Touch',
    'contact.description': 'Have a project in mind or want to collaborate? I\'d love to hear from you.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! Your message has been sent.',
    'contact.successDescription': 'I\'ll get back to you as soon as possible.',
    'contact.getInTouch': 'Get in Touch',
    'contact.followMe': 'Follow Me',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.emailLabel': 'Email',
    'contact.locationLabel': 'Location',
    'contact.phoneLabel': 'Phone',
    'contact.githubLabel': 'GitHub',
    'contact.linkedinLabel': 'LinkedIn',
    
    // Footer
    'footer.copyright': 'All rights reserved.',
    'footer.builtWith': 'Built with ❤️ using React & TypeScript',
    
    // About highlights
    'about.highlights.experience': 'Professional Experience',
    'about.highlights.projects': 'Successfully Delivered',
    'about.highlights.tech': 'Latest Technologies',
    'about.highlights.quality': 'Best Practices',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Home section
    'home.cta': 'Contáctame',
    'home.downloadCv': 'Descargar CV',
    
    // About section
    'about.title': 'Acerca de Mí',
    
    // Projects section
    'projects.title': 'Proyectos Destacados',
    'projects.viewCode': 'Ver Código',
    'projects.liveDemo': 'Demo en Vivo',
    
    // Skills section
    'skills.title': 'Habilidades y Tecnologías',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas y Otros',
    
    // Contact section
    'contact.title': 'Contáctame',
    'contact.description': '¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escucharte.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Gracias! Tu mensaje ha sido enviado.',
    'contact.successDescription': 'Te responderé lo antes posible.',
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.followMe': 'Sígueme',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.emailLabel': 'Correo',
    'contact.locationLabel': 'Ubicación',
    'contact.phoneLabel': 'Teléfono',
    'contact.githubLabel': 'GitHub',
    'contact.linkedinLabel': 'LinkedIn',
    
    // Footer
    'footer.copyright': 'Todos los derechos reservados.',
    'footer.builtWith': 'Construido con ❤️ usando React & TypeScript',
    
    // About highlights
    'about.highlights.experience': 'Experiencia Profesional',
    'about.highlights.projects': 'Proyectos Entregados',
    'about.highlights.tech': 'Tecnologías Modernas',
    'about.highlights.quality': 'Mejores Prácticas',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}