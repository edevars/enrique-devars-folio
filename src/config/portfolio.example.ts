// This is an example configuration file
// Copy this file to portfolio.ts and update it with your information

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

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    subtitle: "Your subtitle or tagline",
    greeting: "Hello, I'm",
    profilePhoto: "/src/assets/profile-photo.jpg",
    cvUrl: "/path-to-your-cv.pdf" // Optional
  },

  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername", // Optional
      instagram: "https://instagram.com/yourusername" // Optional
    }
  },

  about: {
    description: "Write your personal description here. Talk about your passion, experience, and what drives you in your field.",
    experience: "Describe your journey, how you got started, and what you've learned along the way.",
    highlights: [
      {
        icon: "Code2", // Use Lucide React icon names
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
      github: "https://github.com/yourusername/project",
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
    title: "Your Name - Your Title",
    description: "Personal portfolio of [Your Name], a [your profession] specializing in [your specialties].",
    keywords: ["your profession", "your skills", "portfolio", "web development"]
  }
}; 