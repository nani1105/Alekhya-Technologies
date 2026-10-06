import React from 'react';
import { Clock } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import amcContractsImg from '../../Logo/Technical Consultancy  Audits.jpg';
import bufferStockImg from '../../Logo/Storage solutions.jpg';
import preventiveCareImg from '../../Logo/Tech1.jpg';

const SupportMaintenance: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <SEO 
        title="Enterprise Support & IT AMC Maintenance in Hyderabad"
        description="Comprehensive IT AMC contracts with guaranteed SLAs, fast hardware replacement, standby buffer equipment, and periodic preventive health checks across Hyderabad."
        keywords="IT AMC support Hyderabad, Hardware maintenance contract Hyderabad, Computer repair AMC HITEC City, Server emergency maintenance Gachibowli, Annual maintenance SLA Telangana"
        canonicalPath="/services/support-maintenance"
      />
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#fbbf24] [--base-gradient-color:#ffffff] dark:[--base-color:#fbbf24] dark:[--base-gradient-color:#ffffff]">
              SLA-Backed Annual Contracts
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Support & Maintenance (AMC)</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Comprehensive & non-comprehensive AMC support contracts backed by strict SLAs, emergency technical dispatch, and buffer spare stock management.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'SLA-Driven AMC Contracts',
              desc: 'Guaranteed 2-hour and 4-hour on-site response times backed by strict service level agreements.',
              image: amcContractsImg
            },
            {
              title: 'Buffer Stock & Spares',
              desc: 'Local warehouse stocking of critical network switches, router power supplies, and camera spares.',
              image: bufferStockImg
            },
            {
              title: 'Preventive Care Audits',
              desc: 'Quarterly physical cleaning, cable strain checks, firmware tuning, and safety compliance audits.',
              image: preventiveCareImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between">
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
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
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

export default SupportMaintenance;
