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
    'home.greeting': 'Hello, I\'m',
    'home.title': 'Software Engineer',
    'home.subtitle': 'Building elegant solutions with modern technologies',
    'home.cta': 'Get In Touch',
    
    // About section
    'about.title': 'About Me',
    'about.description': 'I\'m a passionate software engineer with over 5 years of experience building web applications and digital solutions. I specialize in React, TypeScript, and modern web technologies, with a focus on creating user-friendly, scalable, and maintainable applications.',
    'about.experience': 'My journey in software development started with a curiosity about how things work behind the scenes. Today, I help businesses transform their ideas into digital reality, working with cross-functional teams to deliver high-quality software solutions.',
    
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
    'contact.success': 'Thank you! Your message has been sent.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Home section
    'home.greeting': 'Hola, soy',
    'home.title': 'Ingeniero de Software',
    'home.subtitle': 'Construyendo soluciones elegantes con tecnologías modernas',
    'home.cta': 'Contáctame',
    
    // About section
    'about.title': 'Acerca de Mí',
    'about.description': 'Soy un ingeniero de software apasionado con más de 5 años de experiencia desarrollando aplicaciones web y soluciones digitales. Me especializo en React, TypeScript y tecnologías web modernas, enfocándome en crear aplicaciones amigables, escalables y mantenibles.',
    'about.experience': 'Mi camino en el desarrollo de software comenzó con la curiosidad sobre cómo funcionan las cosas detrás de escena. Hoy, ayudo a las empresas a transformar sus ideas en realidad digital, trabajando con equipos multifuncionales para entregar soluciones de software de alta calidad.',
    
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
    'contact.success': '¡Gracias! Tu mensaje ha sido enviado.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
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