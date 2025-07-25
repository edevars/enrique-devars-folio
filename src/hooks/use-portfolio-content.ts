import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/config/portfolio';

export function usePortfolioContent() {
  const { language } = useLanguage();
  
  return {
    personal: content[language].personal,
    about: content[language].about,
    projects: content[language].projects,
    skills: content[language].skills,
    meta: content[language].meta,
  };
} 