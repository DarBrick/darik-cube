import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 no-print">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <img src="/darikcube.svg" alt={t('accessibility.logo')} className="h-8 w-8" />
            <span className="font-[var(--font-rokkitt)] text-xl font-bold text-white">
              darikcube
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:witowski.dar@gmail.com"
              className="hover:text-[var(--color-primary)] transition-colors"
              aria-label={t('footer.email')}
            >
              <FiMail className="text-2xl" />
            </a>
            <a
              href="https://github.com/DarBrick"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-primary)] transition-colors"
              aria-label={t('footer.github')}
            >
              <FiGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/dariusz-witowski-439b76113"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-primary)] transition-colors"
              aria-label={t('footer.linkedin')}
            >
              <FiLinkedin className="text-2xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="font-[var(--font-lato)] text-sm text-gray-400">
            © {currentYear} darikcube. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
