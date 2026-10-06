import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Monitor, ArrowRight, Sparkles, Building, Layers, Volume2 } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';

const ProAvWorkplaces: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      {/* Hero Banner */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full text-purple-400 text-xs sm:text-sm font-semibold mb-4">
            <Tv className="w-4 h-4" />
            <span>Enterprise Visuals & Workplaces</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            PRO AV & Smart Workplaces
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Transforming corporate meeting spaces, auditoriums, and executive boardrooms into intelligent, automated digital environments with state-of-the-art visual displays, acoustic DSP engineering, and one-touch collaboration controls.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
              <Link to="/contact-us">Request AV Site Audit</Link>
            </GradientButton>
            <a
              href="#av-offerings"
              className="inline-flex items-center space-x-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold border border-slate-700 text-xs sm:text-sm"
            >
              <span>Explore AV Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="av-offerings" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">Pro AV Practice Areas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-base">Tailored audio-visual integration designed for enterprise scale and intuitive user experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: Building,
              title: 'Executive Boardroom Automation',
              desc: 'Integrated touch panel control for motorized screens, lighting scenes, acoustic microphones, and multi-display matrix switching.'
            },
            {
              icon: Monitor,
              title: 'Interactive Displays & IFPDs',
              desc: 'High-resolution 4K interactive flat panels equipped with multi-touch whiteboard software for active team brainstorming.'
            },
            {
              icon: Layers,
              title: 'Fine-Pitch LED & LCD Video Walls',
              desc: 'Direct-view LED displays and narrow-bezel LCD video walls for command centers, broadcast rooms, and corporate lobbies.'
            },
            {
              icon: Volume2,
              title: 'Acoustic DSP & Sound Systems',
              desc: 'Digital Signal Processors with Acoustic Echo Cancellation (AEC), ceiling beamforming microphones, and line-array speakers.'
            },
            {
              icon: Tv,
              title: 'Digital Signage Networks',
              desc: 'Centralized cloud-managed commercial displays for dynamic internal communications, welcome screens, and advertising.'
            },
            {
              icon: Sparkles,
              title: 'Smart Classrooms & Auditoriums',
              desc: 'High-lumen laser projectors, motorized projection screens, lecturer tracking cameras, and digital mixing consoles.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-purple-500/50 transition-all backdrop-blur-sm">
              <div className="w-10 h-10 bg-purple-600/20 text-purple-400 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OEM Partners Bar */}
      <section className="py-8 sm:py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-400 block mb-4">Featured AV OEM Partners</span>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-slate-300 text-xs sm:text-sm font-semibold">
            <span className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur-sm">Poly</span>
            <span className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur-sm">Logitech</span>
            <span className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur-sm">Samsung Commercial</span>
            <span className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur-sm">LG Business</span>
            <span className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur-sm">Epson</span>
            <span className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur-sm">Crestron</span>
            <span className="px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg backdrop-blur-sm">Bose Professional</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProAvWorkplaces;
