import React from 'react';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Engineering Team</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Careers</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Build your career with India's leading technology system integrator. Explore current opportunities across IT networking, AV automation, and field engineering.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          {[
            { title: 'Senior Network Solutions Architect', location: 'Hyderabad / On-Site', type: 'Full-time' },
            { title: 'Pro AV Project Engineer', location: 'Mumbai / Pan-India', type: 'Full-time' },
            { title: 'IP CCTV & Security Specialist', location: 'Hyderabad', type: 'Full-time' },
            { title: 'Field Technical Support Resident Engineer', location: 'Multiple Locations', type: 'Full-time' }
          ].map((job, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 backdrop-blur-sm">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{job.title}</h3>
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-blue-400" /><span>{job.location}</span></span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <a href="mailto:careers@alekhyatechnologies.com" className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center space-x-1">
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
