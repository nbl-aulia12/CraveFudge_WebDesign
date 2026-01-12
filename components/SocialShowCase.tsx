import { SOCIAL_MEDIA } from '../constants';

const SocialShowcase = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Temui Kami di Platform Digital
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Dokumentasi dan distribusi CraveFudge di berbagai media.
          </p>
        </div>

        {/* Simple platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_MEDIA.filter(p => !p.screenshots).map(p => (
            <div
              key={p.platform}
              className="p-8 rounded-3xl border border-slate-200 flex flex-col items-center text-center gap-4"
            >
              <h3 className="text-xl font-bold">{p.platform}</h3>
              <p className="text-slate-600">{p.username}</p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold"
                >
                  Kunjungi Profil
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Screenshot showcase */}
        {SOCIAL_MEDIA.filter(p => p.screenshots).map(p => (
          <div key={p.platform} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold">{p.platform}</h3>
              <p className="text-slate-500">{p.username}</p>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4">
              {p.screenshots!.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${p.platform} screenshot ${i + 1}`}
                  className="w-72 rounded-2xl shadow-lg flex-shrink-0"
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