import { aboutContent } from '../../data/content';
import { FiMail, FiGithub, FiLinkedin, FiCode, FiTrendingUp, FiActivity, FiHeart } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<any> } = {
  FiCode,
  FiTrendingUp,
  FiActivity,
  FiHeart
};

// Section keys mapping for translation
const sectionKeys = ['journey', 'mathematical', 'sports', 'family'];

export default function About() {
  const { t } = useTranslation('about');

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Avatar and Page title */}
        <div className="flex items-center gap-6 mb-12">
          <img 
            src="/avatar.png" 
            alt={t('title')}
            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
          />
          <h1 className="font-[var(--font-rokkitt)] text-5xl font-bold text-gray-900">
            {t('title')}
          </h1>
        </div>

        {/* Bio sections */}
        <section className="mb-16 space-y-8">
          {sectionKeys.map((key, index) => {
            const Icon = iconMap[aboutContent.sections[index].icon];
            return (
              <div key={key} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(142, 170, 178, 0.1)' }}>
                    {Icon && <Icon className="text-2xl" style={{ color: 'var(--color-primary)' }} />}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-[var(--font-rokkitt)] text-2xl font-bold text-gray-900 mb-3">
                    {t(`sections.${key}.title`)}
                  </h2>
                  <p className="font-[var(--font-lato)] text-lg text-gray-700 leading-relaxed">
                    {t(`sections.${key}.content`)}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Contact section */}
        <section className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <h2 className="font-[var(--font-rokkitt)] text-3xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${aboutContent.contact.email}`}
              className="flex items-center gap-3 font-[var(--font-lato)] text-lg text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              <FiMail className="text-2xl" />
              {aboutContent.contact.email}
            </a>

            {/* GitHub */}
            {aboutContent.contact.github && (
              <a
                href={aboutContent.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-[var(--font-lato)] text-lg text-gray-700 hover:text-[var(--color-primary)] transition-colors"
              >
                <FiGithub className="text-2xl" />
                {t('contact.github')}
              </a>
            )}

            {/* LinkedIn */}
            {aboutContent.contact.linkedin && (
              <a
                href={aboutContent.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-[var(--font-lato)] text-lg text-gray-700 hover:text-[var(--color-primary)] transition-colors"
              >
                <FiLinkedin className="text-2xl" />
                {t('contact.linkedin')}
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
