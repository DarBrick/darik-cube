import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 transition-colors hover:text-[var(--color-primary)] ${
      isActive ? 'text-[var(--color-primary)] font-semibold' : 'text-gray-700'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-6 py-3 text-lg transition-colors hover:bg-gray-100 hover:text-[var(--color-primary)] ${
      isActive ? 'text-[var(--color-primary)] font-semibold bg-gray-50' : 'text-gray-700'
    }`;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pl' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = i18n.language === 'pl' ? 'PL' : 'EN';
  const currentFlag = i18n.language === 'pl' ? '🇵🇱' : '🇬🇧';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and brand name */}
        <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/darikcube.svg" alt={t('accessibility.logo')} className="h-10 w-10" />
          <span className="font-[var(--font-rokkitt)] text-2xl font-bold text-gray-900">
            darikcube
          </span>
        </NavLink>

        {/* Mobile Controls - Language Switcher + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors px-2 py-1"
            aria-label={currentLanguage === 'EN' ? 'Switch to Polish' : 'Switch to English'}
            title={currentLanguage === 'EN' ? 'Switch to Polish' : 'Przełącz na Angielski'}
          >
            <span className="text-xl">{currentFlag}</span>
            <span className="font-medium text-xs">{currentLanguage}</span>
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors -mr-2"
            aria-label={t('nav.toggleMenu')}
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6 text-gray-700" />
            ) : (
              <HiMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex items-center gap-2 font-[var(--font-lato)]">
          <NavLink to="/" end className={navLinkClass}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>
            {t('nav.portfolio')}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {t('nav.about')}
          </NavLink>
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="ml-3 pl-3 border-l border-gray-300 flex items-center gap-1.5 text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors"
            aria-label={currentLanguage === 'EN' ? 'Switch to Polish' : 'Switch to English'}
            title={currentLanguage === 'EN' ? 'Switch to Polish' : 'Przełącz na Angielski'}
          >
            <span className="text-xl">{currentFlag}</span>
            <span className="font-medium">{currentLanguage}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-200 font-[var(--font-lato)]">
          <NavLink to="/" end className={mobileNavLinkClass} onClick={handleLinkClick}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/portfolio" className={mobileNavLinkClass} onClick={handleLinkClick}>
            {t('nav.portfolio')}
          </NavLink>
          <NavLink to="/about" className={mobileNavLinkClass} onClick={handleLinkClick}>
            {t('nav.about')}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
