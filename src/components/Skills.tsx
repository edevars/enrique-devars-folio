import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 78 }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 82 },
        { name: 'Git', level: 92 },
        { name: 'Jest', level: 88 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('skills.title')}
            </h2>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="group hover:shadow-medium transition-all duration-300 hover:scale-[1.02] border-border/50"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center bg-gradient-accent bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Icons/Badges */}
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 
                'MongoDB', 'GraphQL', 'Jest', 'Tailwind CSS', 'Next.js', 'Vue.js'
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
                >
                  <span className="font-medium text-sm group-hover:text-primary transition-colors duration-200">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}