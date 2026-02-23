import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    // Set document title
    document.title = '404 - Page Not Found | darikcube';
    
    // Add meta tag for status code (for crawlers)
    const metaStatus = document.createElement('meta');
    metaStatus.name = 'prerender-status-code';
    metaStatus.content = '404';
    document.head.appendChild(metaStatus);
    
    // Add robots meta tag
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, follow';
    document.head.appendChild(metaRobots);
    
    return () => {
      // Cleanup meta tags when component unmounts
      document.head.removeChild(metaStatus);
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center max-w-2xl mx-auto animate-fadeIn">
        <h1 className="text-9xl font-bold text-primary font-rokkitt mb-4">
          404
        </h1>
        <h2 className="text-4xl font-rokkitt font-normal text-accent mb-6">
          {t('notFound.title', 'Page Not Found')}
        </h2>
        <p className="text-lg text-secondary mb-8 opacity-90">
          {t('notFound.description', "The page you're looking for doesn't exist or has been moved.")}
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-primary text-gray-900 font-semibold rounded hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {t('notFound.backHome', 'Back to Home')}
        </Link>
        <p className="mt-8 text-sm text-primary opacity-60 font-mono">
          ERROR_404_PAGE_NOT_FOUND
        </p>
      </div>
    </div>
  );
}

export default NotFound;
