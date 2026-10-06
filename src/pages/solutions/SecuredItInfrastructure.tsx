import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Server, Shield, Radio, Lock, Cpu } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';

import switchingImg from '../../Logo/Enterprise L2L3 Switching  SD-WAN.jpg';
import wifiImg from '../../Logo/Wifi 6.jpg';
import structuredLanImg from '../../Logo/Structured LAN.jpg';
import datacenterRacksImg from '../../Logo/Data Center Racks.jpg';
import firewallsImg from '../../Logo/FIrewalls audits.jpg';
import storageImg from '../../Logo/Storage solutions.jpg';

const SecuredItInfrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Network className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#60a5fa] [--base-gradient-color:#ffffff] dark:[--base-color:#60a5fa] dark:[--base-gradient-color:#ffffff]">
              High-Availability Network Core
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Secured IT Infrastructure
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Engineering robust campus switching, enterprise Wi-Fi 6/6E mobility, structured fiber backbones, data center racks, and Next-Gen Firewall (NGFW) defense systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
              <Link to="/contact-us">Request Network Survey</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Network,
              title: 'Enterprise L2/L3 Switching & SD-WAN',
              desc: 'Stackable high-density managed switches, VLAN segmentation, zero-trust access, and intelligent WAN load balancing.',
              image: switchingImg
            },
            {
              icon: Radio,
              title: 'Wi-Fi 6 & 6E Enterprise Wireless',
              desc: 'High-density access points engineered for seamless roaming across multi-floor offices and educational campuses.',
              image: wifiImg
            },
            {
              icon: Cpu,
              title: 'Structured LAN & Fiber Cabling',
              desc: 'Certified Cat6A twisted pair and Single/Multi-mode optical fiber backbones with OTDR testing documentation.',
              image: structuredLanImg
            },
            {
              icon: Server,
              title: 'Data Center Racks & Precision Power',
              desc: 'Server enclosures, cable management, smart PDU monitoring, and online Uninterruptible Power Supply (UPS) backup.',
              image: datacenterRacksImg
            },
            {
              icon: Shield,
              title: 'Next-Gen Firewalls & Network Audits',
              desc: 'Deep packet inspection, intrusion prevention systems (IPS), SSL VPN gateways, and security vulnerability audits.',
              image: firewallsImg
            },
            {
              icon: Lock,
              title: 'Storage & Backup Solutions',
              desc: 'Enterprise SAN/NAS storage arrays, automated snapshot backups, and disaster recovery orchestration.',
              image: storageImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-blue-600/80 backdrop-blur-md text-white rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <Link to="/contact-us" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300">
                  <span>Explore Network Setup</span>
                  <Network className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SecuredItInfrastructure;
