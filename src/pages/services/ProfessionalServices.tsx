import React from 'react';
import { Wrench } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const ProfessionalServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Wrench className="w-4 h-4" />
            <span>Turnkey Project Execution</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Professional Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Expert engineering design, technical consultancy, site assessments, staging, installation, testing, and project commissioning.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Technical Consultancy & Audits', desc: 'Comprehensive site assessment, network bandwidth audits, and technology roadmapping.' },
            { title: 'Solution Architecture & Design', desc: 'Preparing detailed BOQs, CAD rack layouts, optical loss budgets, and OEM staging blueprints.' },
            { title: 'Turnkey Implementation & QC', desc: 'Professional cable routing, rack wiring, IP staging, firmware updates, and rigorous QA certification.' }
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

export default ProfessionalServices;
