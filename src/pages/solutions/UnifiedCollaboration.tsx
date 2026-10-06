import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Video, Headphones, Shield, Globe, Users } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import ipbxImg from '../../Logo/ipbx.jpg';
import teamsZoomImg from '../../Logo/Teams  Zoom Room Systems.jpg';
import contactCenterImg from '../../Logo/contactcenter.jpg';
import voipGatewaysImg from '../../Logo/VoIP Gateways SIP Phones.jpg';
import hybridWorkspaceImg from '../../Logo/Hybrid Workspace Endpoints.jpg';
import voiceSecurityImg from '../../Logo/Voice Security & SBC.jpg';

const UnifiedCollaboration: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <SEO 
        title="IP PBX Telephony, VoIP & Video Collaboration in Hyderabad"
        description="Enterprise IP PBX telephony, VoIP SIP gateways, Yealink desk phones, Grandstream communication servers, and MS Teams / Zoom Rooms for enterprises in Hyderabad & Cyberabad."
        keywords="IP PBX Hyderabad, VoIP phone system Hyderabad, Grandstream PBX Telangana, Yealink phones HITEC City, Contact center setup Hyderabad, Enterprise voice communication Gachibowli"
        canonicalPath="/solutions/unified-collaboration"
      />
      <ParticlesBackground />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-cyan-400 text-xs sm:text-sm font-semibold mb-4">
            <PhoneCall className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#22d3ee] [--base-gradient-color:#ffffff] dark:[--base-color:#22d3ee] dark:[--base-gradient-color:#ffffff]">
              Unified Voice & Video Communication
            </TextShimmer>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: PhoneCall,
              title: 'Enterprise IP PBX Telephony',
              desc: 'On-premise and hosted cloud IP PBX systems with multi-level IVR, extension roaming, and SIP trunking.',
              image: ipbxImg
            },
            {
              icon: Video,
              title: 'Teams & Zoom Room Systems',
              desc: 'Native video conferencing room kits with touch consoles, AI PTZ cameras, and wireless sharing.',
              image: teamsZoomImg
            },
            {
              icon: Headphones,
              title: 'Contact Center Solutions',
              desc: 'Omnichannel customer support queues, call recording, softphone extensions, and agent performance dashboards.',
              image: contactCenterImg
            },
            {
              icon: Globe,
              title: 'VoIP Gateways & SIP Phones',
              desc: 'High-definition executive desk phones, video phones, wireless DECT handsets, and analog PSTN gateways.',
              image: voipGatewaysImg
            },
            {
              icon: Users,
              title: 'Hybrid Workspace Endpoints',
              desc: 'Personal video bars, active noise-canceling headsets, and portable speakerphones for remote executives.',
              image: hybridWorkspaceImg
            },
            {
              icon: Shield,
              title: 'Voice Security & SBC',
              desc: 'Session Border Controllers (SBC) protecting voice networks against SIP hacking and toll fraud.',
              image: voiceSecurityImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-cyan-600/80 backdrop-blur-md text-white rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <Link to="/contact-us" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                  <span>Consult Specialist</span>
                  <PhoneCall className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UnifiedCollaboration;
