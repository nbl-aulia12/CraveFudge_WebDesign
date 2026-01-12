import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

interface AspectScore {
  label: string;
  average: number;
}

const FeedbackPage: React.FC = () => {
  const [aspects, setAspects] = useState<AspectScore[]>([]);
  const [respondents, setRespondents] = useState(0);

  useEffect(() => {
    fetch('/picture/Crave Fudge.xlsx')
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const wb = XLSX.read(buffer, { type: 'array' });
        const sheet = wb.Sheets[wb.SheetNames[0]];

        const rows: any[][] = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          raw: true,
        });

        // Ambil header yang berisi aspek (skip metadata awal)
        const headerIndex = rows.findIndex(r =>
          r?.some(cell => typeof cell === 'number')
        );

        const headers = rows[headerIndex - 1];
        const dataRows = rows.slice(headerIndex);

        const aspectsData = headers
          .map((h: any, i: number) => ({ h, i }))
          .filter(x => typeof x.h === 'string' && x.h.trim() !== '')
          .map(a => {
            const values = dataRows
              .map(r => r[a.i])
              .filter(v => typeof v === 'number');

            const avg =
              values.reduce((s, v) => s + v, 0) / values.length;

            return {
              label: a.h,
              average: Number(avg.toFixed(2)),
            };
          });

        setAspects(aspectsData);
        setRespondents(dataRows.length);
      });
  }, []);

  const overall =
    aspects.reduce((s, a) => s + a.average, 0) / aspects.length || 0;

  return (
    <div className="min-h-screen bg-slate-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-5xl">📊</div>
          <h1 className="text-5xl font-extrabold">
            Feedback <span className="text-purple-500">Evaluation</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Ringkasan hasil penilaian pengalaman CraveFudge
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Summary label="Average Score" value={overall.toFixed(2)} />
          <Summary label="Respondents" value={respondents} />
          <Summary label="Evaluated Aspects" value={aspects.length} />
        </div>

        {/* Aspects */}
        <div className="space-y-6">
          {aspects.map((a, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-sm font-bold">
                <span>{a.label}</span>
                <span className="text-purple-400">{a.average}</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600"
                  style={{ width: `${(a.average / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Download */}
        <div className="text-center space-y-4 pt-12 border-t border-white/10">
          <p className="text-slate-400 text-sm">
            Ingin melihat data evaluasi lengkap?
          </p>
          <a
            href="/feedback/feedback.xlsx"
            download
            className="inline-block px-8 py-4 bg-purple-600 rounded-2xl font-bold hover:bg-purple-500 transition"
          >
            Unduh File Feedback (.xlsx)
          </a>
        </div>
      </div>
    </div>
  );
};

const Summary = ({ label, value }: { label: string; value: any }) => (
  <div className="p-6 bg-white/5 rounded-2xl text-center">
    <div className="text-3xl font-black text-purple-400">{value}</div>
    <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest">
      {label}
    </p>
  </div>
);

export default FeedbackPage;