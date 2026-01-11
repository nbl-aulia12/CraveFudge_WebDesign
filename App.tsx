
import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import PastThemes from './components/PastThemes';
import ProductCard from './components/ProductCard';
import AssistantDrawer from './components/AssistantDrawer';
import AdminDrawer from './components/AdminDrawer';
import ThemeDetail from './components/ThemeDetail';
import BMCPage from './components/BMCPage';
import PitchDeckPage from './components/PitchDeckPage';
import { COOKIES as INITIAL_COOKIES, PAST_THEMES as INITIAL_THEMES } from './constants';
import { Cookie, PastTheme } from './types';

const App: React.FC = () => {
  const [cookies, setCookies] = useState<Cookie[]>(INITIAL_COOKIES);
  const [pastThemes, setPastThemes] = useState<PastTheme[]>(INITIAL_THEMES);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'theme-detail' | 'bmc' | 'pitch-deck'>('home');
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);

  // Editable Site Content State
  const [siteContent, setSiteContent] = useState({
    hero: {
      title: "Setiap Gigitan Adalah Pertunjukan.",
      description: "Di CraveFudge, kami mengubah momen membeli cookies menjadi petualangan magis lewat permainan interaktif, atraksi unik, dan dongeng singkat di setiap kepingnya.",
      buttonPrimary: "Pilih Petualanganmu",
      buttonSecondary: "Lihat Atraksi"
    },
    about: {
      title: "Visi Dibalik CraveFudge",
      description: "Kami menyadari bahwa di dunia yang serba cepat ini, orang-orang merindukan koneksi dan cerita. Itulah mengapa kami mengemas cookies premium kami dengan narasi yang berubah setiap waktu, membuat setiap kunjunganmu menjadi pengalaman yang unik dan tidak terulang.",
      philosophy: "Life is a performance, and so is eating cookies."
    },
    features: [
      {
        icon: "🎭",
        title: "Unique Theme",
        desc: "Setiap periode penjualan memiliki tema cerita dan visual yang berbeda total dari sebelumnya."
      },
      {
        icon: "✨",
        title: "Themed Attraction",
        desc: "Atraksi penyajian berubah sesuai tema—mulai dari meracik ramuan hingga misi petualangan."
      },
      {
        icon: "🎲",
        title: "Mini Games",
        desc: "Permainan interaktif unik di setiap batch untuk menentukan diskon atau kejutan rasa."
      }
    ]
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleEditClick = () => {
    if (isAdminMode) {
      setIsAdminOpen(true);
      return;
    }

    const password = window.prompt("Masukkan Password Admin:");
    if (password === "raihan_ganteng123") {
      setIsAdminMode(true);
      setIsAdminOpen(true);
    } else if (password !== null) {
      alert("Password Salah!");
    }
  };

  const handleUpdateCookie = (id: string, field: keyof Cookie, value: any) => {
    setCookies(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const handleAddCookie = () => {
    const newCookie: Cookie = {
      id: `cf-${Date.now()}`,
      name: 'Produk Baru',
      description: 'Deskripsi produk baru...',
      price: 0,
      category: 'New',
      tags: ['New']
    };
    setCookies(prev => [...prev, newCookie]);
  };

  const handleDeleteCookie = (id: string) => {
    if (window.confirm("Hapus produk ini?")) {
      setCookies(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleUpdateTheme = (id: string, field: keyof PastTheme, value: any) => {
    setPastThemes(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  const handleAddTheme = () => {
    const newTheme: PastTheme = {
      id: `batch-${Date.now()}`,
      title: "Chapter Baru",
      year: `Batch #${pastThemes.length + 1}`,
      icon: "✨",
      description: "Deskripsi singkat chapter baru...",
      fullStory: "Cerita lengkap chapter baru...",
      attraction: "Atraksi unik batch ini...",
      images: [],
      cookies: []
    };
    setPastThemes(prev => [...prev, newTheme]);
  };

  const handleDeleteTheme = (id: string) => {
    if (window.confirm("Hapus Chapter ini dari arsip?")) {
      setPastThemes(prev => prev.filter(t => t.id !== id));
    }
  };

  const handleUpdateContent = (section: string, field: string, value: any, index?: number) => {
    setSiteContent(prev => {
      const newContent = { ...prev };
      if (index !== undefined && Array.isArray((newContent as any)[section])) {
        (newContent as any)[section][index][field] = value;
      } else {
        (newContent as any)[section][field] = value;
      }
      return { ...newContent };
    });
  };

  const handleLogout = () => {
    setIsAdminMode(false);
    setIsAdminOpen(false);
  };

  const handleSelectTheme = (theme: PastTheme) => {
    setSelectedThemeId(theme.id);
    setCurrentView('theme-detail');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedThemeId(null);
  };

  const handleNavigate = (view: 'home' | 'bmc' | 'pitch-deck') => {
    setCurrentView(view);
    setSelectedThemeId(null);
  };

  const renderContent = () => {
    if (currentView === 'theme-detail') {
      const selectedTheme = pastThemes.find(t => t.id === selectedThemeId);
      return selectedTheme ? <ThemeDetail theme={selectedTheme} onBack={handleBackToHome} /> : null;
    }

    if (currentView === 'bmc') {
      return <BMCPage />;
    }

    if (currentView === 'pitch-deck') {
      return <PitchDeckPage />;
    }

    return (
      <main className="animate-in fade-in duration-500">
        <Hero 
          content={siteContent.hero} 
          isAdminMode={isAdminMode} 
        />
        
        <Experience 
          features={siteContent.features} 
          isAdminMode={isAdminMode} 
        />

        <PastThemes themes={pastThemes} onSelectTheme={handleSelectTheme} />

        <section id="menu" className={`py-24 px-6 bg-slate-50/50 transition-all ${isAdminMode ? 'ring-2 ring-purple-200 ring-inset' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Koleksi Batch Saat Ini</h2>
                <p className="text-slate-500 max-w-lg">Pilih tiket manismu untuk menikmati petualangan dan atraksi di toko kami.</p>
              </div>
              {isAdminMode && <div className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 uppercase tracking-widest">Bagian Menu Editable</div>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cookies.map(cookie => (
                <ProductCard 
                  key={cookie.id} 
                  product={cookie} 
                  onAddToCart={() => {}} 
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={`py-24 px-6 bg-white transition-all ${isAdminMode ? 'ring-2 ring-purple-200 ring-inset' : ''}`}>
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                 <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{siteContent.about.title}</h2>
                 <p className="text-slate-600 leading-relaxed">
                   {siteContent.about.description}
                 </p>
              </div>
              <div className="flex-1 relative">
                 <div className="aspect-square bg-slate-900 rounded-[3rem] flex items-center justify-center p-12 text-center text-white">
                    <div className="space-y-4">
                       <div className="text-6xl mb-6">🎭</div>
                       <h3 className="text-2xl font-bold italic">"{siteContent.about.philosophy}"</h3>
                       <p className="text-slate-400 text-sm">— CraveFudge Philosophy</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
    );
  };

  return (
    <div className="min-h-screen selection:bg-purple-100 selection:text-purple-900 bg-white">
      <Navbar 
        onEditClick={handleEditClick}
        onGoHome={handleBackToHome}
        onNavigate={handleNavigate}
        isAdmin={isAdminMode}
      />

      {isAdminMode && (
        <div className="fixed bottom-6 left-6 z-[90] animate-bounce">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-50 shadow-xl shadow-purple-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Admin Mode Active
          </div>
        </div>
      )}

      {renderContent()}

      <footer className="bg-slate-900 text-white py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-2 justify-center md:justify-start cursor-pointer" onClick={handleBackToHome}>
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">C</div>
              <span className="text-xl font-bold tracking-tight text-white">Crave<span className="text-purple-400">Fudge</span></span>
            </div>
            <p className="text-slate-400 text-xs">Premium Artisanal Cookies & Immersive Theater Experience.</p>
          </div>
          <div className="flex gap-8 justify-center md:justify-start">
             <button onClick={() => handleNavigate('bmc')} className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest">BMC</button>
             <button onClick={() => handleNavigate('pitch-deck')} className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest">Pitch Deck</button>
          </div>
        </div>
      </footer>

      <AssistantDrawer isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
      
      <AdminDrawer 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
        cookies={cookies}
        onUpdateCookie={handleUpdateCookie}
        onAddCookie={handleAddCookie}
        onDeleteCookie={handleDeleteCookie}
        pastThemes={pastThemes}
        onUpdateTheme={handleUpdateTheme}
        onAddTheme={handleAddTheme}
        onDeleteTheme={handleDeleteTheme}
        siteContent={siteContent}
        onUpdateContent={handleUpdateContent}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default App;
