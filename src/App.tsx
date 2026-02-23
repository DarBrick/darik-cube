import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Update page title based on current route
  useEffect(() => {
    const getPageTitle = () => {
      const path = location.pathname;
      if (path === '/portfolio') return t('pageTitle.portfolio');
      if (path === '/about') return t('pageTitle.about');
      if (path === '/') return t('pageTitle.home');
      // For 404 pages, let the NotFound component handle the title
      return null;
    };
    const title = getPageTitle();
    if (title) {
      document.title = title;
    }
  }, [location.pathname, t]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
