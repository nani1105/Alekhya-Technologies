import React from 'react';
import { Building2 } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const WhoWeAre: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" />
            <span>30+ Years of Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Who We Are</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Alekhya Technologies is a premier Pan-India System Integrator bringing diverse technologies into cohesive, secure enterprise environments where everything connects effortlessly.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-3xl font-extrabold text-blue-400 mb-2">30+</h3>
            <p className="text-slate-300 text-sm">Years Industry Leadership</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-3xl font-extrabold text-indigo-400 mb-2">5000+</h3>
            <p className="text-slate-300 text-sm">Enterprise Deployments</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-3xl font-extrabold text-emerald-400 mb-2">Pan-India</h3>
            <p className="text-slate-300 text-sm">Support & Operations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
