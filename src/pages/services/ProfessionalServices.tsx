import React from 'react';
import { Wrench } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const ProfessionalServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            <span>Turnkey Project Execution</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Professional Services</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Expert engineering design, technical consultancy, site assessments, staging, installation, testing, and project commissioning.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: 'Technical Consultancy & Audits', desc: 'Comprehensive site assessment, network bandwidth audits, and technology roadmapping.' },
            { title: 'Solution Architecture & Design', desc: 'Preparing detailed BOQs, CAD rack layouts, optical loss budgets, and OEM staging blueprints.' },
            { title: 'Turnkey Implementation & QC', desc: 'Professional cable routing, rack wiring, IP staging, firmware updates, and rigorous QA certification.' }
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

export default ProfessionalServices;
