import React from 'react';
import { Shield } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { TextShimmer } from '../../components/ui/text-shimmer';

import residentEngineersImg from '../../Logo/TEch.jpg';
import nocMonitoringImg from '../../Logo/FIrewalls audits.jpg';
import assetMgmtImg from '../../Logo/Data Center Racks.jpg';

const ManagedServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#34d399] [--base-gradient-color:#ffffff] dark:[--base-color:#34d399] dark:[--base-gradient-color:#ffffff]">
              Dedicated Operations & Monitoring
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Managed Services</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            On-site resident engineers, 24/7 Network Operations Center (NOC) remote monitoring, and proactive infrastructure lifecycle management.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'On-Site Resident Engineers',
              desc: 'Stationing skilled certified engineers at your facility for day-to-day operations and instant troubleshooting.',
              image: residentEngineersImg
            },
            {
              title: '24/7 NOC Monitoring',
              desc: 'Continuous surveillance of server health, bandwidth latency, wireless APs, and security firewalls.',
              image: nocMonitoringImg
            },
            {
              title: 'Proactive Asset Management',
              desc: 'Automated patch management, firmware lifecycle upgrades, and hardware health reporting.',
              image: assetMgmtImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-emerald-500/50 transition-all shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;
