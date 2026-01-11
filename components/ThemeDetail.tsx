
import React from 'react';
import { PastTheme } from '../types';

interface ThemeDetailProps {
  theme: PastTheme;
  onBack: () => void;
}

const ThemeDetail: React.FC<ThemeDetailProps> = ({ theme, onBack }) => {
  return (
    <div className="min-h-screen bg-white pb-24 animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-purple-600 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-purple-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Kembali ke Beranda
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur rounded-[2rem] flex items-center justify-center text-5xl md:text-6xl border border-white/20">
              {theme.icon}
            </div>
            <div>
              <span className="text-purple-400 font-black uppercase tracking-[0.3em] text-sm mb-2 block">{theme.year}</span>
              <h1 className="text-4xl md:text-6xl font-extrabold">{theme.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Content Side */}
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
              Kisah Balik Layar
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
              {theme.fullStory}
            </p>
          </section>

          <section className="p-8 bg-purple-50 rounded-[2.5rem] border border-purple-100 space-y-4">
            <h3 className="text-xl font-bold text-purple-900">Atraksi Utama</h3>
            <p className="text-slate-700 leading-relaxed">
              {theme.attraction}
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
              Dokumentasi Event
            </h2>
            
            {/* Masonry Grid Implementation */}
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              {theme.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="break-inside-avoid relative rounded-3xl overflow-hidden group shadow-lg border border-slate-100 mb-4"
                >
                   <img 
                    src={img} 
                    alt={`Dokumentasi ${theme.title} ${idx + 1}`} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                   />
                   <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Menu at the time */}
        <div className="space-y-8">
          <div className="sticky top-24 p-8 border-2 border-slate-50 rounded-[3rem] bg-white space-y-8 shadow-xl shadow-slate-100">
            <h2 className="text-xl font-extrabold text-slate-900">Menu Eksklusif {theme.year}</h2>
            <div className="space-y-6">
              {theme.cookies.map(cookie => (
                <div key={cookie.id} className="group pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{cookie.name}</h4>
                    <span className="text-xs font-bold text-slate-400">Rp {cookie.price.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{cookie.description}</p>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-slate-100">
              <div className="bg-slate-900 p-6 rounded-2xl text-center">
                 <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Status Chapter</p>
                 <p className="text-white font-bold text-sm">Sudah Berakhir (Limited Edition)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDetail;
