# Portfolio Template

A modern, responsive portfolio website template built with React, TypeScript, Tailwind CSS, and Vite. This template is designed to be easily customizable and ready to deploy.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme support
- 🌍 Multi-language support (English/Spanish)
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 📧 Contact form
- 🔧 Fully configurable

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide React** - Icons
- **Radix UI** - Accessible components
- **React Query** - Data fetching

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Quick Setup

Run the interactive setup script to quickly configure your portfolio:

```bash
npm run setup
```

This will guide you through entering your personal information and automatically generate the configuration file.

## Configuration

All personal data is stored in the configuration file at `src/config/portfolio.ts`. Update this file with your information:

### Personal Information

```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  greeting: "Hello, I'm",
  profilePhoto: "/path/to/your/photo.jpg",
  cvUrl: "/path/to/your/cv.pdf" // Optional
}
```

### Contact Information

```typescript
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
}
```

### About Section

```typescript
about: {
  description: "Your description here...",
  experience: "Your experience description...",
  highlights: [
    {
      icon: "Code2", // Lucide React icon name
      title: "5+ Years",
      description: "Professional Experience"
    }
    // Add more highlights...
  ]
}
```

### Projects

```typescript
projects: [
  {
    title: "Project Title",
    description: "Project description...",
    image: "/path/to/project/image.jpg",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.vercel.app"
  }
  // Add more projects...
]
```

### Skills

```typescript
skills: {
  categories: [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 }
        // Add more skills...
      ]
    }
    // Add more categories...
  ],
  technologies: ["React", "TypeScript", "Node.js"] // Technology badges
}
```

## Customization

### Styling

The template uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the color scheme in `tailwind.config.ts`
2. Updating CSS variables in `src/index.css`
3. Adding custom classes to components

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to the main page in `src/pages/Index.tsx`
3. Update the navigation if needed

### Adding New Languages

1. Add translations to `src/contexts/LanguageContext.tsx`
2. Update the language selector component

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms

The template works with any static hosting service. Just run `npm run build` and upload the `dist` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects section
│   └── Skills.tsx      # Skills section
├── config/             # Configuration files
│   └── portfolio.ts    # Main portfolio configuration
├── contexts/           # React contexts
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ using React & TypeScript
