#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupPortfolio() {
  console.log('🎨 Portfolio Template Setup\n');
  console.log('This script will help you configure your portfolio with your personal information.\n');

  // Personal Information
  const name = await question('What is your full name? ');
  const title = await question('What is your professional title? ');
  const subtitle = await question('What is your subtitle or tagline? ');
  const email = await question('What is your email address? ');
  const phone = await question('What is your phone number? ');
  const location = await question('Where are you located? (City, Country) ');
  const github = await question('What is your GitHub username? ');
  const linkedin = await question('What is your LinkedIn username? ');

  // About Section
  const description = await question('Write a brief description about yourself: ');
  const experience = await question('Describe your experience and journey: ');

  // Spanish translations (optional)
  console.log('\n🌍 Spanish Translations (optional - press Enter to skip)');
  const titleEs = await question('Spanish title (e.g., "Ingeniero de Software"): ') || title;
  const subtitleEs = await question('Spanish subtitle: ') || subtitle;
  const descriptionEs = await question('Spanish description: ') || description;
  const experienceEs = await question('Spanish experience: ') || experience;

  // Generate the configuration with internationalization
  const config = `import { PortfolioConfig } from './portfolio.example';

// Language-specific content
const content = {
  en: {
    personal: {
      name: "${name}",
      title: "${title}",
      subtitle: "${subtitle}",
      greeting: "Hello, I'm",
      profilePhoto: "/src/assets/profile-photo.png",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "${description}",
      experience: "${experience}",
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
        title: "Project Name",
        description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
        image: "/src/assets/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/${github}/project",
        demo: "https://project-demo.vercel.app"
      }
      // Add more projects as needed
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
      title: "${name} - ${title}",
      description: "Personal portfolio of ${name}, a ${title.toLowerCase()} specializing in modern web technologies.",
      keywords: ["${title.toLowerCase()}", "web development", "portfolio", "react", "typescript"]
    }
  },
  es: {
    personal: {
      name: "${name}",
      title: "${titleEs}",
      subtitle: "${subtitleEs}",
      greeting: "Hola, soy",
      profilePhoto: "/src/assets/profile-photo.png",
      cvUrl: "/path-to-your-cv.pdf"
    },
    about: {
      description: "${descriptionEs}",
      experience: "${experienceEs}",
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
        title: "Nombre del Proyecto",
        description: "Describe tu proyecto aquí. Qué hace, qué problemas resuelve y qué tecnologías usaste.",
        image: "/src/assets/project-image.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        github: "https://github.com/${github}/project",
        demo: "https://project-demo.vercel.app"
      }
      // Agrega más proyectos según sea necesario
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
      title: "${name} - ${titleEs}",
      description: "Portfolio personal de ${name}, un ${titleEs.toLowerCase()} especializado en tecnologías web modernas.",
      keywords: ["${titleEs.toLowerCase()}", "desarrollo web", "portfolio", "react", "typescript"]
    }
  }
};

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "${name}",
    title: "${title}",
    subtitle: "${subtitle}",
    greeting: "Hello, I'm",
    profilePhoto: "/src/assets/profile-photo.png",
    cvUrl: "/path-to-your-cv.pdf" // Optional - update this path
  },

  contact: {
    email: "${email}",
    phone: "${phone}",
    location: "${location}",
    social: {
      github: "https://github.com/${github}",
      linkedin: "https://linkedin.com/in/${linkedin}",
      twitter: "https://twitter.com/${github}", // Optional - update if different
      instagram: "https://instagram.com/${github}" // Optional - update if different
    }
  },

  about: {
    description: "${description}",
    experience: "${experience}",
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
      title: "Project Name",
      description: "Describe your project here. What it does, what problems it solves, and what technologies you used.",
      image: "/src/assets/project-image.jpg",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/${github}/project",
      demo: "https://project-demo.vercel.app"
    }
    // Add more projects as needed
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
    title: "${name} - ${title}",
    description: "Personal portfolio of ${name}, a ${title.toLowerCase()} specializing in modern web technologies.",
    keywords: ["${title.toLowerCase()}", "web development", "portfolio", "react", "typescript"]
  }
};

// Export the content for use in components
export { content };
`;

  // Write the configuration file
  const configPath = path.join(__dirname, '..', 'src', 'config', 'portfolio.ts');
  fs.writeFileSync(configPath, config);

  // Update the HTML title
  const htmlPath = path.join(__dirname, '..', 'index.html');
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  htmlContent = htmlContent.replace(/Joane Smith/g, name);
  htmlContent = htmlContent.replace(/Software Engineer/g, title);
  fs.writeFileSync(htmlPath, htmlContent);

  console.log('\n✅ Portfolio configuration completed!');
  console.log('\n🌍 Internationalization Features:');
  console.log('• English and Spanish language support');
  console.log('• Language toggle in the header');
  console.log('• All content automatically translates');
  console.log('• Form placeholders and UI text translated');
  console.log('\n📝 Next steps:');
  console.log('1. Update your profile photo in src/assets/profile-photo.png');
  console.log('2. Add your project images to src/assets/');
  console.log('3. Update the projects section with your actual projects');
  console.log('4. Customize the skills section with your skills and levels');
  console.log('5. Update the about section highlights with your achievements');
  console.log('6. Add your CV file and update the cvUrl path');
  console.log('7. Customize Spanish translations in src/config/portfolio.ts');
  console.log('\n🚀 Run "npm run dev" to start the development server');

  rl.close();
}

setupPortfolio().catch(console.error); 