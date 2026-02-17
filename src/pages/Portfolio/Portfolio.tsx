import { projects, professionalProjects } from '../../data/content';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t } = useTranslation('portfolio');

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page title */}
        <h1 className="font-[var(--font-rokkitt)] text-5xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="font-[var(--font-lato)] text-xl text-gray-600 mb-12">
          {t('subtitle')}
        </p>

        {/* Personal Projects Section */}
        <section className="mb-16">
          <h2 className="font-[var(--font-rokkitt)] text-3xl font-bold text-gray-900 mb-8">
            {t('personalProjectsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const projectKey = project.name.toLowerCase();
              return (
                <div
                  key={project.name}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100"
                >
                  {/* Project header with logo */}
                  <div className="flex items-center gap-4 mb-4">
                    {project.logo && (
                      <img 
                        src={project.logo} 
                        alt={`${t(`projects.${projectKey}.name`)} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    )}
                    <h3 className="font-[var(--font-rokkitt)] text-2xl font-bold text-gray-900">
                      {t(`projects.${projectKey}.name`)}
                    </h3>
                  </div>
                  
                  <p className="font-[var(--font-lato)] text-gray-600 mb-6 leading-relaxed">
                    {t(`projects.${projectKey}.description`)}
                  </p>

                  {/* Link */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-[var(--font-lato)] text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors font-semibold"
                    >
                      {t('visitProject')} <FiExternalLink />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-[var(--font-lato)] text-gray-400 font-semibold">
                      {t('comingSoon')}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section>
          <h2 className="font-[var(--font-rokkitt)] text-3xl font-bold text-gray-900 mb-8">
            {t('professionalExperienceTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalProjects.map((project) => {
              const projectKey = project.company.toLowerCase().replace(/\s+/g, '');
              return (
                <div
                  key={project.company}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100"
                >
                  {/* Company name and role */}
                  <div className="mb-4">
                    <h3 className="font-[var(--font-rokkitt)] text-2xl font-bold text-gray-900 mb-2">
                      {t(`professional.${projectKey}.company`)}
                    </h3>
                    <p className="font-[var(--font-lato)] text-base text-[var(--color-primary)] font-semibold">
                      {t(`professional.${projectKey}.role`)}
                    </p>
                  </div>
                  
                  <p className="font-[var(--font-lato)] text-gray-600 mb-6 leading-relaxed">
                    {t(`professional.${projectKey}.description`)}
                  </p>

                  {/* Company link */}
                  {project.companyUrl && (
                    <a
                      href={project.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-[var(--font-lato)] text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors font-semibold"
                    >
                      {t('learnMore')} <FiExternalLink />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
