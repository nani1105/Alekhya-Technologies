import React from 'react';
import { Building2 } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const WhoWeAre: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            <span>30+ Years of Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Who We Are</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Alekhya Technologies is a premier Pan-India System Integrator bringing diverse technologies into cohesive, secure enterprise environments where everything connects effortlessly.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">30+</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Years Industry Leadership</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mb-1">5000+</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Enterprise Deployments</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">Pan-India</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Support & Operations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
