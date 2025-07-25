export interface PortfolioConfig {
  // Personal Information
  personal: {
    name: string;
    title: string;
    subtitle: string;
    greeting: string;
    profilePhoto: string;
    cvUrl?: string;
  };

  // Contact Information
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      twitter?: string;
      instagram?: string;
    };
  };

  // About Section
  about: {
    description: string;
    experience: string;
    highlights: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  // Projects
  projects: Array<{
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
  }>;

  // Skills
  skills: {
    categories: Array<{
      title: string;
      skills: Array<{
        name: string;
        level: number;
      }>;
    }>;
    technologies: string[];
  };

  // Footer
  footer: {
    copyright: string;
    builtWith: string;
  };

  // Meta Information
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Language-specific content
const content = {
  en: {
    personal: {
      name: "Joane Smith",
      title: "Software Engineer",
      subtitle: "Building elegant solutions with modern technologies",
      greeting: "Hello, I'm",
      profilePhoto: "/src/assets/profile-photo.png",
      cvUrl: "/path-to-cv.pdf"
    },
    about: {
      description: "I'm a passionate software engineer with over 5 years of experience building web applications and digital solutions. I specialize in React, TypeScript, and modern web technologies, with a focus on creating user-friendly, scalable, and maintainable applications.",
      experience: "My journey in software development started with a curiosity about how things work behind the scenes. Today, I help businesses transform their ideas into digital reality, working with cross-functional teams to deliver high-quality software solutions.",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Years",
          description: "Professional Experience"
        },
        {
          icon: "Users",
          title: "20+ Projects",
          description: "Successfully Delivered"
        },
        {
          icon: "Lightbulb",
          title: "Modern Tech",
          description: "Latest Technologies"
        },
        {
          icon: "Award",
          title: "Quality Focus",
          description: "Best Practices"
        }
      ]
    },
    projects: [
      {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, payment processing, and admin dashboard.",
        image: "/src/assets/project-ecommerce.jpg",
        technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
        github: "https://github.com/joanesmith/ecommerce",
        demo: "https://ecommerce-demo.vercel.app"
      },
      {
        title: "Project Management Dashboard",
        description: "A comprehensive project management tool with task tracking, team collaboration, and real-time updates. Built with modern React patterns and state management.",
        image: "/src/assets/project-dashboard.jpg",
        technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
        github: "https://github.com/joanesmith/pm-dashboard",
        demo: "https://pm-dashboard.vercel.app"
      },
      {
        title: "Mobile Banking App",
        description: "A secure mobile banking application with biometric authentication, transaction history, and financial insights. Optimized for performance and security.",
        image: "/src/assets/project-mobile.jpg",
        technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
        github: "https://github.com/joanesmith/mobile-banking",
        demo: "https://banking-app-demo.vercel.app"
      }
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Tools & Others",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Joane Smith - Software Engineer",
      description: "Personal portfolio of Joane Smith, a software engineer specializing in React, TypeScript, and modern web technologies.",
      keywords: ["software engineer", "react", "typescript", "web development", "portfolio"]
    }
  },
  es: {
    personal: {
      name: "Joane Smith",
      title: "Ingeniera de Software",
      subtitle: "Construyendo soluciones elegantes con tecnologías modernas",
      greeting: "Hola, soy",
      profilePhoto: "/src/assets/profile-photo.png",
      cvUrl: "/path-to-cv.pdf"
    },
    about: {
      description: "Soy una ingeniera de software apasionada con más de 5 años de experiencia construyendo aplicaciones web y soluciones digitales. Me especializo en React, TypeScript y tecnologías web modernas, con un enfoque en crear aplicaciones amigables, escalables y mantenibles.",
      experience: "Mi viaje en el desarrollo de software comenzó con la curiosidad sobre cómo funcionan las cosas detrás de escena. Hoy, ayudo a las empresas a transformar sus ideas en realidad digital, trabajando con equipos multifuncionales para entregar soluciones de software de alta calidad.",
      highlights: [
        {
          icon: "Code2",
          title: "5+ Años",
          description: "Experiencia Profesional"
        },
        {
          icon: "Users",
          title: "20+ Proyectos",
          description: "Entregados Exitosamente"
        },
        {
          icon: "Lightbulb",
          title: "Tecnología Moderna",
          description: "Últimas Tecnologías"
        },
        {
          icon: "Award",
          title: "Enfoque en Calidad",
          description: "Mejores Prácticas"
        }
      ]
    },
    projects: [
      {
        title: "Plataforma de E-Commerce",
        description: "Una plataforma de e-commerce completa construida con React, TypeScript e integración de Stripe. Incluye catálogo de productos, carrito de compras, procesamiento de pagos y panel de administración.",
        image: "/src/assets/project-ecommerce.jpg",
        technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
        github: "https://github.com/joanesmith/ecommerce",
        demo: "https://ecommerce-demo.vercel.app"
      },
      {
        title: "Dashboard de Gestión de Proyectos",
        description: "Una herramienta completa de gestión de proyectos con seguimiento de tareas, colaboración en equipo y actualizaciones en tiempo real. Construida con patrones modernos de React y gestión de estado.",
        image: "/src/assets/project-dashboard.jpg",
        technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
        github: "https://github.com/joanesmith/pm-dashboard",
        demo: "https://pm-dashboard.vercel.app"
      },
      {
        title: "Aplicación de Banca Móvil",
        description: "Una aplicación de banca móvil segura con autenticación biométrica, historial de transacciones e insights financieros. Optimizada para rendimiento y seguridad.",
        image: "/src/assets/project-mobile.jpg",
        technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
        github: "https://github.com/joanesmith/mobile-banking",
        demo: "https://banking-app-demo.vercel.app"
      }
    ],
    skills: {
      categories: [
        {
          title: "Frontend",
          skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 88 },
            { name: "Vue.js", level: 75 }
          ]
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 78 }
          ]
        },
        {
          title: "Herramientas y Otros",
          skills: [
            { name: "AWS", level: 85 },
            { name: "Docker", level: 82 },
            { name: "Git", level: 92 },
            { name: "Jest", level: 88 },
            { name: "Figma", level: 75 }
          ]
        }
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
        "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
      ]
    },
    meta: {
      title: "Joane Smith - Ingeniera de Software",
      description: "Portfolio personal de Joane Smith, una ingeniera de software especializada en React, TypeScript y tecnologías web modernas.",
      keywords: ["ingeniera de software", "react", "typescript", "desarrollo web", "portfolio"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Joane Smith",
    title: "Software Engineer",
    subtitle: "Building elegant solutions with modern technologies",
    greeting: "Hello, I'm",
    profilePhoto: "/src/assets/profile-photo.png",
    cvUrl: "/path-to-cv.pdf"
  },

  contact: {
    email: "joane.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    social: {
      github: "https://github.com/joanesmith",
      linkedin: "https://linkedin.com/in/joanesmith",
      twitter: "https://twitter.com/joanesmith",
      instagram: "https://instagram.com/joanesmith"
    }
  },

  about: {
    description: "I'm a passionate software engineer with over 5 years of experience building web applications and digital solutions. I specialize in React, TypeScript, and modern web technologies, with a focus on creating user-friendly, scalable, and maintainable applications.",
    experience: "My journey in software development started with a curiosity about how things work behind the scenes. Today, I help businesses transform their ideas into digital reality, working with cross-functional teams to deliver high-quality software solutions.",
    highlights: [
      {
        icon: "Code2",
        title: "5+ Years",
        description: "Professional Experience"
      },
      {
        icon: "Users",
        title: "20+ Projects",
        description: "Successfully Delivered"
      },
      {
        icon: "Lightbulb",
        title: "Modern Tech",
        description: "Latest Technologies"
      },
      {
        icon: "Award",
        title: "Quality Focus",
        description: "Best Practices"
      }
    ]
  },

  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, payment processing, and admin dashboard.",
      image: "/src/assets/project-ecommerce.jpg",
      technologies: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
      github: "https://github.com/joanesmith/ecommerce",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Project Management Dashboard",
      description: "A comprehensive project management tool with task tracking, team collaboration, and real-time updates. Built with modern React patterns and state management.",
      image: "/src/assets/project-dashboard.jpg",
      technologies: ["React", "Redux", "Chart.js", "Socket.io", "Express"],
      github: "https://github.com/joanesmith/pm-dashboard",
      demo: "https://pm-dashboard.vercel.app"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and financial insights. Optimized for performance and security.",
      image: "/src/assets/project-mobile.jpg",
      technologies: ["React Native", "TypeScript", "Firebase", "Biometrics", "Chart.js"],
      github: "https://github.com/joanesmith/mobile-banking",
      demo: "https://banking-app-demo.vercel.app"
    }
  ],

  skills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "Tailwind CSS", level: 88 },
          { name: "Vue.js", level: 75 }
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 88 },
          { name: "Python", level: 82 },
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "GraphQL", level: 78 }
        ]
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "AWS", level: 85 },
          { name: "Docker", level: 82 },
          { name: "Git", level: 92 },
          { name: "Jest", level: 88 },
          { name: "Figma", level: 75 }
        ]
      }
    ],
    technologies: [
      "React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", 
      "MongoDB", "GraphQL", "Jest", "Tailwind CSS", "Next.js", "Vue.js"
    ]
  },

  footer: {
    copyright: "All rights reserved.",
    builtWith: "Built with ❤️ using React & TypeScript"
  },

  meta: {
    title: "Joane Smith - Software Engineer",
    description: "Personal portfolio of Joane Smith, a software engineer specializing in React, TypeScript, and modern web technologies.",
    keywords: ["software engineer", "react", "typescript", "web development", "portfolio"]
  }
};

// Export the content for use in components
export { content }; 