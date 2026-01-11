
import React from 'react';

interface ExperienceProps {
  features: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
  isAdminMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ features, isAdminMode }) => {
  return (
    <section id="experience" className={`py-24 px-6 bg-white transition-all ${isAdminMode ? 'ring-2 ring-purple-200 ring-inset' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-purple-600 font-bold uppercase tracking-widest text-sm">Model Bisnis Kami</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">FnB Bertemu Teater Interaktif</h3>
          <p className="text-slate-500">Di CraveFudge, kami menjual pengalaman. Setiap kali kami membuka pintu penjualan, kamu akan memasuki dunia yang berbeda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-white border-2 border-slate-50 hover:border-purple-200 transition-all duration-500 text-center">
              <div className="text-6xl mb-8 flex justify-center">{f.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{f.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
