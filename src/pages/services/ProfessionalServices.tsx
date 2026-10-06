import React from 'react';
import { Wrench } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import techConsultancyImg from '../../Logo/Technical Consultancy  Audits.jpg';
import solutionArchImg from '../../Logo/solution architecture.jpg';
import turnkeyImplImg from '../../Logo/Tech1.jpg';

const ProfessionalServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <SEO 
        title="Enterprise Professional Services & IT Consultancy in Hyderabad"
        description="Engineering design, technical audits, site assessments, BOQ scoping, staging, and turnkey installation commissioning for enterprise IT & AV projects in Hyderabad."
        keywords="IT consultancy Hyderabad, IT project management Hyderabad, Network site audit HITEC City, Professional IT services Telangana, System integration consultancy Madhapur"
        canonicalPath="/services/professional-services"
      />
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#60a5fa] [--base-gradient-color:#ffffff] dark:[--base-color:#60a5fa] dark:[--base-gradient-color:#ffffff]">
              Turnkey Project Execution
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Professional Services</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Expert engineering design, technical consultancy, site assessments, staging, installation, testing, and project commissioning.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Technical Consultancy & Audits',
              desc: 'Comprehensive site assessment, network bandwidth audits, and technology roadmapping.',
              image: techConsultancyImg
            },
            {
              title: 'Solution Architecture & Design',
              desc: 'Preparing detailed BOQs, CAD rack layouts, optical loss budgets, and OEM staging blueprints.',
              image: solutionArchImg
            },
            {
              title: 'Turnkey Implementation & QC',
              desc: 'Professional cable routing, rack wiring, IP staging, firmware updates, and rigorous QA certification.',
              image: turnkeyImplImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all shadow-xl flex flex-col justify-between">
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
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
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

export default ProfessionalServices;
