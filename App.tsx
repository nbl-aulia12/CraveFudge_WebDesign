import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import SocialShowcase from './components/SocialShowCase';
import PastThemes from './components/PastThemes';
import ProductCard from './components/ProductCard';
import AssistantDrawer from './components/AssistantDrawer';
import AdminDrawer from './components/AdminDrawer';
import ThemeDetail from './components/ThemeDetail';
import BMCPage from './components/BMCPage';
import PitchDeckPage from './components/PitchDeckPage';
import FeedbackPage from './components/FeedBack';

import {
  COOKIES as INITIAL_COOKIES,
  PAST_THEMES as INITIAL_THEMES,
} from './constants';

import { Cookie, PastTheme } from './types';

/* =======================
   VIEW TYPE
======================= */
type View =
  | 'home'
  | 'theme-detail'
  | 'bmc'
  | 'pitch-deck'
  | 'feedback';

/* =======================
   APP
======================= */
const App: React.FC = () => {
  const [cookies, setCookies] = useState<Cookie[]>(INITIAL_COOKIES);
  const [pastThemes, setPastThemes] = useState<PastTheme[]>(INITIAL_THEMES);

  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);

  /* =======================
     EDITABLE CONTENT
  ======================= */
  const [siteContent] = useState({
    hero: {
      title: 'Setiap Gigitan Adalah Pertunjukan.',
      description:
        'Di CraveFudge, kami mengubah momen membeli cookies menjadi petualangan magis lewat permainan interaktif, atraksi unik, dan dongeng singkat di setiap kepingnya.',
      buttonPrimary: 'Pilih Petualanganmu',
      buttonSecondary: 'Lihat Atraksi',
    },
    features: [
      {
        icon: '🎭',
        title: 'Unique Theme',
        desc: 'Setiap periode penjualan memiliki tema cerita dan visual berbeda.',
      },
      {
        icon: '✨',
        title: 'Themed Attraction',
        desc: 'Atraksi penyajian berubah sesuai tema.',
      },
      {
        icon: '🎲',
        title: 'Mini Games',
        desc: 'Permainan interaktif unik di setiap batch.',
      },
    ],
  });

  /* =======================
     EFFECT
  ======================= */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  /* =======================
     HANDLERS
  ======================= */
  const handleEditClick = () => {
    if (isAdminMode) {
      setIsAdminOpen(true);
      return;
    }

    const password = window.prompt('Masukkan Password Admin:');
    if (password === 'raihan_ganteng123') {
      setIsAdminMode(true);
      setIsAdminOpen(true);
    } else if (password !== null) {
      alert('Password Salah!');
    }
  };

  const handleSelectTheme = (theme: PastTheme) => {
    setSelectedThemeId(theme.id);
    setCurrentView('theme-detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedThemeId(null);
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSelectedThemeId(null);
  };

  /* =======================
     RENDER CONTENT
  ======================= */
  const renderContent = () => {
    if (currentView === 'theme-detail') {
      const selectedTheme = pastThemes.find(
        t => t.id === selectedThemeId
      );
      return selectedTheme ? (
        <ThemeDetail theme={selectedTheme} onBack={handleBackToHome} />
      ) : null;
    }

    if (currentView === 'bmc') return <BMCPage />;
    if (currentView === 'pitch-deck') return <PitchDeckPage />;
    if (currentView === 'feedback') return <FeedbackPage />;

    /* ===== HOME ===== */
    return (
      <main className="animate-in fade-in duration-500">
        <Hero content={siteContent.hero} isAdminMode={isAdminMode} />

        <Experience
          features={siteContent.features}
          isAdminMode={isAdminMode}
        />

        {/* === SOCIAL MEDIA SECTION === */}
        <SocialShowcase />

        <PastThemes
          themes={pastThemes}
          onSelectTheme={handleSelectTheme}
        />

        {/* === PRODUCT SECTION === */}
        <section className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cookies.map(cookie => (
              <ProductCard
                key={cookie.id}
                product={cookie}
                onAddToCart={() => {}}
              />
            ))}
          </div>
        </section>
      </main>
    );
  };

  /* =======================
     RETURN
  ======================= */
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onEditClick={handleEditClick}
        onGoHome={handleBackToHome}
        onNavigate={handleNavigate}
        isAdmin={isAdminMode}
      />

      {renderContent()}

      {/* === FOOTER === */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex gap-8 justify-center">
          <button onClick={() => handleNavigate('bmc')}>BMC</button>
          <button onClick={() => handleNavigate('pitch-deck')}>
            Pitch Deck
          </button>
          <button onClick={() => handleNavigate('feedback')}>
            Feedback
          </button>
        </div>
      </footer>

      <AssistantDrawer
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        cookies={cookies}
        pastThemes={pastThemes}
        siteContent={siteContent}
        onLogout={() => setIsAdminMode(false)}
        onUpdateCookie={() => {}}
        onAddCookie={() => {}}
        onDeleteCookie={() => {}}
        onUpdateTheme={() => {}}
        onAddTheme={() => {}}
        onDeleteTheme={() => {}}
        onUpdateContent={() => {}}
      />
    </div>
  );
};

export default App;