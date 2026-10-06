import React from 'react';
import { Layers } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-1.5 rounded-full text-indigo-400 text-xs sm:text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" />
            <span>Proven Enterprise Success Stories</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Case Studies</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Real-world system integration deployments for defense laboratories, national banks, universities, and corporate headquarters.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            { client: 'Defense Research Organization (DRDO)', domain: 'High-Security Network & 4K AI CCTV', outcome: 'Zero downtime campus LAN deployment with 200+ facial recognition cameras.' },
            { client: 'National Banking Institution (NABARD)', domain: 'Pan-India SLA Managed AMC', outcome: '99.9% uptime SLA compliance across multi-branch IT hardware and server racks.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 sm:p-7 rounded-2xl backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">{item.client}</h3>
              <p className="text-xs text-indigo-400 font-semibold mb-3">{item.domain}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.outcome}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
