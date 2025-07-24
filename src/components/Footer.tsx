import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Enrique Devars. {t('footer.rights')}
            </p>
          </div>
          <div className="text-sm text-primary-foreground/80">
            Built with ❤️ using React & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
}