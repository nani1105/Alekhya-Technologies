import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full text-purple-400 text-sm font-semibold mb-6">
            <Calendar className="w-4 h-4" />
            <span>Tech Expos & Webinars</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Events</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Stay updated with upcoming OEM technology showcases, smart workplace webinars, and system integration expos across India.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          {[
            { title: 'Next-Gen Pro AV & Smart Boardrooms Summit 2026', date: 'October 25, 2026', loc: 'Hyderabad Convention Center' },
            { title: 'Enterprise Cyber Security & AI Surveillance Workshop', date: 'November 12, 2026', loc: 'Mumbai Technology Hub' }
          ].map((evt, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{evt.title}</h3>
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <span className="flex items-center space-x-1"><Calendar className="w-3.5 h-3.5 text-purple-400" /><span>{evt.date}</span></span>
                  <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-blue-400" /><span>{evt.loc}</span></span>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg">Register for Event</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
