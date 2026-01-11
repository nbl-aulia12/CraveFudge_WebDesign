
import React from 'react';

interface HeroProps {
  content: {
    title: string;
    description: string;
    buttonPrimary: string;
    buttonSecondary: string;
  };
  isAdminMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ content, isAdminMode }) => {
  return (
    <section className={`relative overflow-hidden bg-white py-16 md:py-32 px-6 transition-all ${isAdminMode ? 'ring-2 ring-purple-200 ring-inset' : ''}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Bukan Sekadar Toko Kue
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] whitespace-pre-line">
            {content.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#menu" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 w-full sm:w-auto text-center">
              {content.buttonPrimary}
            </a>
            <a href="#experience" className="px-8 py-4 bg-white text-purple-600 font-bold border-2 border-purple-100 rounded-2xl hover:bg-purple-50 transition-all w-full sm:w-auto text-center">
              {content.buttonSecondary}
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative">
           <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-purple-100 rounded-[4rem] rotate-6 transform-gpu opacity-50"></div>
              <div className="absolute inset-0 bg-purple-600 rounded-[4rem] -rotate-3 transform-gpu shadow-2xl flex items-center justify-center p-12 overflow-hidden">
                 <div className="text-center text-white space-y-4 z-10">
                    <div className="text-7xl animate-bounce">🎭</div>
                    <div className="text-3xl font-bold italic">The Cookie Theater</div>
                    <div className="text-purple-100 text-sm">Masuklah ke dalam cerita kami, di mana setiap rasa memiliki narasinya sendiri.</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
