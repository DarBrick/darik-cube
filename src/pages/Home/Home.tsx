import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="text-center px-6 animate-fadeIn">
        {/* Large logo */}
        <div className="mb-8">
          <img 
            src="/darikcube.svg" 
            alt={t('logoAlt')}
            className="w-64 h-64 mx-auto drop-shadow-lg"
          />
        </div>
        
        {/* Site name */}
        <h1 className="font-[var(--font-rokkitt)] text-7xl font-bold text-gray-900 mb-6">
          {t('siteName')}
        </h1>
        
        {/* Subheading */}
        <p className="font-[var(--font-lato)] text-2xl text-gray-600 font-light">
          {t('tagline')}
        </p>
      </div>
    </div>
  );
}
