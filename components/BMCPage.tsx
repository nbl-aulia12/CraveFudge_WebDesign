
import React from 'react';

const BMCPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-black uppercase tracking-widest">
            Strategic Roadmap
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Business Model Canvas</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Visualisasi strategi inti CraveFudge untuk menghadirkan kebahagiaan di setiap gigitan dan cerita.
          </p>
        </div>

        {/* Image Container */}
        <div className="relative group max-w-6xl mx-auto">
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-white p-4 md:p-8 rounded-[3rem] shadow-2xl shadow-purple-100/50 border border-slate-100 overflow-hidden">
            <div className="aspect-[16/9] w-full bg-slate-100 rounded-[2rem] overflow-hidden flex items-center justify-center">
              {/* Note: User should ensure the image file is named correctly or update this src */}
              <img 
                src="/picture/BMC.jpeg"
                alt="CraveFudge Business Model Canvas Table"
                className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
                title="Klik untuk melihat lebih detail"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/1200x675/f3f4f6/6b21a8?text=Silakan+Unggah+Gambar+BMC+Anda+Disini';
                }}
              />
            </div>

            {/* Aesthetic Meta Info */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-50 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-200">
                  CF
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">CraveFudge BMC v2.0</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-black">Internal Strategy Document</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-purple-600 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Unduh PDF
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                   Perbesar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Descriptive Footer */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 text-sm leading-relaxed">
           <div className="space-y-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Visi Strategis</h3>
              <p>Gambar di atas merepresentasikan bagaimana CraveFudge menghubungkan Key Partners dari supplier premium hingga platform delivery untuk menciptakan Value Proposition yang unik bagi Mahasiswa dan pecinta fantasi.</p>
           </div>
           <div className="space-y-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Fokus Eksekusi</h3>
              <p>Kami berfokus pada Key Activities seperti Role-playing dan desain Potion Quest untuk memastikan Customer Relationships tetap interaktif dan personal di setiap interaksi online maupun offline.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BMCPage;
