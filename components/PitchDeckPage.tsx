import React, { useState } from 'react';

const TOTAL_PAGES = 12;

const PitchDeckPage: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header tetap (tidak aku ubah) */}
        <div className="flex flex-col items-center text-center space-y-12 mb-20">
          <div className="w-20 h-20 bg-purple-600 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl shadow-purple-600/20">
            📊
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Investor <span className="text-purple-500">Pitch Deck</span>
          </h1>
        </div>

        {/* SLIDE VIEWER */}
        <div className="relative group">
          <div className="relative bg-white/5 border border-white/10 rounded-[4rem] p-4 backdrop-blur-xl">
            <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 relative">

              {/* PDF FRAME */}
              <iframe
                key={page}
                src={`/picture/Pitch Deck.pdf#page=${page}&toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full pointer-events-none"
                title="CraveFudge Pitch Deck"
              />

              {/* NAVIGATION */}
              <div className="absolute inset-0 flex items-center justify-between px-6">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  className="w-14 h-14 bg-black/40 hover:bg-purple-600 text-white rounded-full backdrop-blur transition"
                >
                  ◀
                </button>

                <button
                  onClick={() => setPage(p => Math.min(TOTAL_PAGES, p + 1))}
                  className="w-14 h-14 bg-black/40 hover:bg-purple-600 text-white rounded-full backdrop-blur transition"
                >
                  ▶
                </button>
              </div>

            </div>

            {/* PAGE INDICATOR */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i + 1 === page ? 'bg-purple-500' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PitchDeckPage;