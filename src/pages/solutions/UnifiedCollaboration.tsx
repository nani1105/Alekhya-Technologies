import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Video, Headphones, Shield, Globe, Users } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';

const UnifiedCollaboration: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-cyan-400 text-xs sm:text-sm font-semibold mb-4">
            <PhoneCall className="w-4 h-4" />
            <span>Unified Voice & Video Communication</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Unified Collaboration (UCC)
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Empowering hybrid teams with seamless IP PBX telephony, certified Microsoft Teams & Zoom video rooms, enterprise headsets, and cloud contact center architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
              <Link to="/contact-us">Request UCC Architecture Call</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: PhoneCall,
              title: 'Enterprise IP PBX Telephony',
              desc: 'On-premise and hosted cloud IP PBX systems with multi-level IVR, extension roaming, and SIP trunking.'
            },
            {
              icon: Video,
              title: 'Teams & Zoom Room Systems',
              desc: 'Native video conferencing room kits with touch consoles, AI PTZ cameras, and wireless sharing.'
            },
            {
              icon: Headphones,
              title: 'Contact Center Solutions',
              desc: 'Omnichannel customer support queues, call recording, softphone extensions, and agent performance dashboards.'
            },
            {
              icon: Globe,
              title: 'VoIP Gateways & SIP Phones',
              desc: 'High-definition executive desk phones, video phones, wireless DECT handsets, and analog PSTN gateways.'
            },
            {
              icon: Users,
              title: 'Hybrid Workspace Endpoints',
              desc: 'Personal video bars, active noise-canceling headsets, and portable speakerphones for remote executives.'
            },
            {
              icon: Shield,
              title: 'Voice Security & SBC',
              desc: 'Session Border Controllers (SBC) protecting voice networks against SIP hacking and toll fraud.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all backdrop-blur-sm">
              <div className="w-10 h-10 bg-cyan-600/20 text-cyan-400 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UnifiedCollaboration;
