
import React, { useState } from 'react';
import { Cookie, PastTheme } from '../types';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cookies: Cookie[];
  onUpdateCookie: (id: string, field: keyof Cookie, value: any) => void;
  onAddCookie: () => void;
  onDeleteCookie: (id: string) => void;
  pastThemes: PastTheme[];
  onUpdateTheme: (id: string, field: keyof PastTheme, value: any) => void;
  onAddTheme: () => void;
  onDeleteTheme: (id: string) => void;
  siteContent: {
    hero: any;
    about: any;
    features: any[];
  };
  onUpdateContent: (section: string, field: string, value: any, index?: number) => void;
  onLogout: () => void;
}

const AdminDrawer: React.FC<AdminDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cookies, 
  onUpdateCookie, 
  onAddCookie,
  onDeleteCookie,
  pastThemes,
  onUpdateTheme,
  onAddTheme,
  onDeleteTheme,
  siteContent, 
  onUpdateContent, 
  onLogout 
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'batches' | 'landing'>('products');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <p className="text-[10px] text-purple-400 uppercase font-black tracking-widest">Manajemen Konten Imersif</p>
            </div>
            <div className="flex gap-2">
              <button onClick={onLogout} className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all text-xs font-bold px-3">
                Logout
              </button>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          </div>
          
          <div className="flex bg-white/5 rounded-xl p-1 gap-1">
            {(['products', 'batches', 'landing'] as const).map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${activeTab === tab ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                {tab === 'products' ? 'Produk' : tab === 'batches' ? 'Batch' : 'Landing'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-10">
          {/* Tab: Produk */}
          {activeTab === 'products' && (
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-bold text-slate-900">Daftar Cookies Batch Aktif</h3>
                <button 
                  onClick={onAddCookie}
                  className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  Tambah Produk
                </button>
              </div>
              <div className="space-y-4">
                {cookies.map((cookie) => (
                  <div key={cookie.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 relative group">
                    <button 
                      onClick={() => onDeleteCookie(cookie.id)}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                    </button>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Nama</label>
                        <input 
                          type="text" 
                          value={cookie.name}
                          onChange={(e) => onUpdateCookie(cookie.id, 'name', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold outline-none focus:ring-1 focus:ring-purple-600"
                        />
                      </div>
                      <div>
                        <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Harga (Rp)</label>
                        <input 
                          type="number" 
                          value={cookie.price}
                          onChange={(e) => onUpdateCookie(cookie.id, 'price', parseInt(e.target.value))}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-purple-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Deskripsi</label>
                      <textarea 
                        value={cookie.description}
                        onChange={(e) => onUpdateCookie(cookie.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-purple-600 resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tab: Batches */}
          {activeTab === 'batches' && (
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-bold text-slate-900">Arsip Chapter / Batch</h3>
                <button 
                  onClick={onAddTheme}
                  className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  Chapter Baru
                </button>
              </div>
              <div className="space-y-8">
                {pastThemes.map((theme) => (
                  <div key={theme.id} className="p-6 rounded-[2rem] bg-slate-50 border border-slate-200 relative group">
                    <button 
                      onClick={() => onDeleteTheme(theme.id)}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                    </button>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="col-span-2">
                        <label className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Judul Chapter</label>
                        <input 
                          type="text" 
                          value={theme.title}
                          onChange={(e) => onUpdateTheme(theme.id, 'title', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold outline-none focus:ring-1 focus:ring-purple-600"
                        />
                      </div>
                      <div>
                        <label className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Icon/Emoji</label>
                        <input 
                          type="text" 
                          value={theme.icon}
                          onChange={(e) => onUpdateTheme(theme.id, 'icon', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-center text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <label className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Deskripsi Singkat (Landing Page)</label>
                        <textarea 
                          value={theme.description}
                          onChange={(e) => onUpdateTheme(theme.id, 'description', e.target.value)}
                          rows={2}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-purple-600 resize-none"
                        />
                      </div>
                      <div>
                        <label className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Cerita Lengkap (Halaman Detail)</label>
                        <textarea 
                          value={theme.fullStory}
                          onChange={(e) => onUpdateTheme(theme.id, 'fullStory', e.target.value)}
                          rows={4}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-purple-600 resize-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase text-slate-400 border-b pb-1">Dokumentasi (URL Foto)</h4>
                      <div className="space-y-2">
                        {theme.images.map((img, idx) => (
                          <div key={idx} className="flex gap-2">
                            <input 
                              type="text" 
                              value={img}
                              onChange={(e) => {
                                const newImages = [...theme.images];
                                newImages[idx] = e.target.value;
                                onUpdateTheme(theme.id, 'images', newImages);
                              }}
                              className="flex-grow bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-[10px] outline-none"
                            />
                            <button 
                              onClick={() => {
                                const newImages = theme.images.filter((_, i) => i !== idx);
                                onUpdateTheme(theme.id, 'images', newImages);
                              }}
                              className="px-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                          </div>
                        ))}
                        <button 
                          onClick={() => onUpdateTheme(theme.id, 'images', [...theme.images, ''])}
                          className="w-full py-1.5 border-2 border-dashed border-slate-200 rounded-lg text-[10px] text-slate-400 font-bold hover:border-purple-300 hover:text-purple-500 transition-all"
                        >
                          + Tambah URL Foto
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tab: Landing */}
          {activeTab === 'landing' && (
            <div className="space-y-12">
              <section className="space-y-6">
                <h3 className="font-bold text-slate-900 border-b pb-2">Hero Section</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Judul Utama</label>
                    <textarea 
                      value={siteContent.hero.title}
                      onChange={(e) => onUpdateContent('hero', 'title', e.target.value)}
                      rows={2}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Deskripsi Hero</label>
                    <textarea 
                      value={siteContent.hero.description}
                      onChange={(e) => onUpdateContent('hero', 'description', e.target.value)}
                      rows={3}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="font-bold text-slate-900 border-b pb-2">About / Visi Section</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Philosophy Quote</label>
                    <input 
                      type="text"
                      value={siteContent.about.philosophy}
                      onChange={(e) => onUpdateContent('about', 'philosophy', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm italic outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <div className="bg-purple-100 p-4 rounded-xl text-purple-700 text-[10px] leading-relaxed font-black uppercase tracking-widest text-center">
            Perubahan Bersifat Real-Time & Lokal
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDrawer;
