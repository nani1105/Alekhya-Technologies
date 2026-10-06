import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Monitor, ArrowRight, Sparkles, Building, Layers, Volume2 } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';

import executiveBoardroomImg from '../../Logo/Executive boardroom.jpg';
import interactiveDisplayImg from '../../Logo/Interactive display.jpg';
import ledVideoWallsImg from '../../Logo/ledvideowalls.webp';
import ceilingMicrophonesImg from '../../Logo/ceilingmicrophones.jpg';
import signageImg from '../../Logo/signage.jpg';
import techClassroomsImg from '../../Logo/TEch.jpg';

const ProAvWorkplaces: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      {/* Hero Banner */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full text-purple-400 text-xs sm:text-sm font-semibold mb-4">
            <Tv className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#c084fc] [--base-gradient-color:#ffffff] dark:[--base-color:#c084fc] dark:[--base-gradient-color:#ffffff]">
              Enterprise Visuals & Workplaces
            </TextShimmer>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Building,
              title: 'Executive Boardroom Automation',
              desc: 'Integrated touch panel control for motorized screens, lighting scenes, acoustic microphones, and multi-display matrix switching.',
              image: executiveBoardroomImg
            },
            {
              icon: Monitor,
              title: 'Interactive Displays & IFPDs',
              desc: 'High-resolution 4K interactive flat panels equipped with multi-touch whiteboard software for active team brainstorming.',
              image: interactiveDisplayImg
            },
            {
              icon: Layers,
              title: 'Fine-Pitch LED & LCD Video Walls',
              desc: 'Direct-view LED displays and narrow-bezel LCD video walls for command centers, broadcast rooms, and corporate lobbies.',
              image: ledVideoWallsImg
            },
            {
              icon: Volume2,
              title: 'Acoustic DSP & Sound Systems',
              desc: 'Digital Signal Processors with Acoustic Echo Cancellation (AEC), ceiling beamforming microphones, and line-array speakers.',
              image: ceilingMicrophonesImg
            },
            {
              icon: Tv,
              title: 'Digital Signage Networks',
              desc: 'Centralized cloud-managed commercial displays for dynamic internal communications, welcome screens, and advertising.',
              image: signageImg
            },
            {
              icon: Sparkles,
              title: 'Smart Classrooms & Auditoriums',
              desc: 'High-lumen laser projectors, motorized projection screens, lecturer tracking cameras, and digital mixing consoles.',
              image: techClassroomsImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-purple-600/80 backdrop-blur-md text-white rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <Link to="/contact-us" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300">
                  <span>Inquire for Setup</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
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
