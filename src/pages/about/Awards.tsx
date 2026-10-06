import React from 'react';
import { Trophy } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const Awards: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full text-purple-400 text-xs sm:text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            <span>OEM Recognition & Honors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Awards & Achievements</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Recognized by global technology leaders for outstanding system integration excellence, certified engineering deployment, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: 'Best Enterprise System Integrator', year: '2025', by: 'Cisco Technology Summit' },
            { title: 'Excellence in Pro AV Integration', year: '2024', by: 'Poly Enterprise Partner Awards' },
            { title: 'Top Security System Partner', year: '2024', by: 'Hikvision Global Partner Meet' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-center backdrop-blur-sm">
              <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-purple-400 font-semibold mb-1">{item.year}</p>
              <p className="text-xs sm:text-sm text-slate-400">{item.by}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Awards;
