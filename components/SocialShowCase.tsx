import { SOCIAL_MEDIA } from '../constants';

const SocialShowcase = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Temui Kami di Platform Digital
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Dokumentasi, distribusi, dan kehadiran CraveFudge di berbagai media.
          </p>
        </div>

        {/* ================= SIMPLE PLATFORMS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_MEDIA.filter(p => !p.screenshots).map(p => (
            <div
              key={p.platform}
              className="p-8 rounded-3xl border border-slate-200 flex flex-col items-center text-center gap-4 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {p.platform}
              </h3>

              <p className="text-slate-600">{p.username}</p>

              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-all shadow-md shadow-purple-200"
                >
                  Kunjungi Profil
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ================= SCREENSHOT SHOWCASE ================= */}
        {SOCIAL_MEDIA.filter(p => p.screenshots).map(p => (
          <div key={p.platform} className="space-y-12">

            {/* Header + CTA */}
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-extrabold text-slate-900">
                {p.platform}
              </h3>
              <p className="text-slate-500">{p.username}</p>

              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-all shadow-lg shadow-purple-200"
                >
                  Kunjungi Bisanara
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>

            {/* Screenshot Carousel */}
            <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
              {p.screenshots!.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${p.platform} screenshot ${i + 1}`}
                  className="w-72 rounded-2xl shadow-lg flex-shrink-0 hover:scale-[1.02] transition-transform"
                />
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default SocialShowcase;