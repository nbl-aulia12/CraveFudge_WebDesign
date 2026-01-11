
import React from 'react';
import { PastTheme } from '../types';

interface PastThemesProps {
  themes: PastTheme[];
  onSelectTheme: (theme: PastTheme) => void;
}

const PastThemes: React.FC<PastThemesProps> = ({ themes, onSelectTheme }) => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Arsip Petualangan</h2>
            <p className="text-slate-500">Klik setiap chapter untuk melihat dokumentasi dan cerita di baliknya.</p>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Total {themes.length} Chapter Selesai
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme, i) => (
            <button 
              key={theme.id} 
              onClick={() => onSelectTheme(theme)}
              className="group text-left bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-50 group-hover:bg-purple-600 group-hover:text-white rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-colors duration-500">
                  {theme.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em] mb-2 block">
                    {theme.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">{theme.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {theme.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 group-hover:translate-x-2 transition-transform">
                    Buka Dokumentasi & Menu 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
          
          <div className="bg-purple-600 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center text-white space-y-4 shadow-xl shadow-purple-100">
             <div className="text-4xl animate-bounce">⏳</div>
             <h3 className="text-xl font-bold">Chapter Berikutnya?</h3>
             <p className="text-purple-100 text-sm">Kami sedang menyiapkan panggung baru. <br/> Nantikan kejutan atraksi selanjutnya!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastThemes;
