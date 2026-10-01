import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const SupportMaintenance: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            <span>SLA-Backed Annual Contracts</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Support & Maintenance (AMC)</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Comprehensive & non-comprehensive AMC support contracts backed by strict SLAs, emergency technical dispatch, and buffer spare stock management.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'SLA-Driven AMC Contracts', desc: 'Guaranteed 2-hour and 4-hour on-site response times backed by strict service level agreements.' },
            { title: 'Buffer Stock & Spares', desc: 'Local warehouse stocking of critical network switches, router power supplies, and camera spares.' },
            { title: 'Preventive Care Audits', desc: 'Quarterly physical cleaning, cable strain checks, firmware tuning, and safety compliance audits.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SupportMaintenance;
