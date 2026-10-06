import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Video, Headphones, Shield, Globe, Users } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';

const UnifiedCollaboration: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-cyan-400 text-sm font-semibold mb-6">
            <PhoneCall className="w-4 h-4" />
            <span>Unified Voice & Video Communication</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Unified Collaboration (UCC)
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Empowering hybrid teams with seamless IP PBX telephony, certified Microsoft Teams & Zoom video rooms, enterprise headsets, and cloud contact center architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm">
              <Link to="/contact-us">Request UCC Architecture Call</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-cyan-600/20 text-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UnifiedCollaboration;
