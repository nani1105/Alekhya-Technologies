import React from 'react';
import { Shield } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const ManagedServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            <span>Dedicated Operations & Monitoring</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Managed Services</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            On-site resident engineers, 24/7 Network Operations Center (NOC) remote monitoring, and proactive infrastructure lifecycle management.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: 'On-Site Resident Engineers', desc: 'Stationing skilled certified engineers at your facility for day-to-day operations and instant troubleshooting.' },
            { title: '24/7 NOC Monitoring', desc: 'Continuous surveillance of server health, bandwidth latency, wireless APs, and security firewalls.' },
            { title: 'Proactive Asset Management', desc: 'Automated patch management, firmware lifecycle upgrades, and hardware health reporting.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 sm:p-7 rounded-2xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;
