import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Server, Shield, Radio, CheckCircle2, ArrowRight, Lock, Cpu } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import cctvImage from '../../Logo/cctv1.jpg';

const SecuredItInfrastructure: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center border-b border-slate-800"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.98)), url(${cctvImage})` }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Network className="w-4 h-4" />
            <span>High-Availability Network Core</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Secured IT Infrastructure
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Engineering robust campus switching, enterprise Wi-Fi 6/6E mobility, structured fiber backbones, data center racks, and Next-Gen Firewall (NGFW) defense systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm">
              <Link to="/contact-us">Request Network Survey</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Network,
              title: 'Enterprise L2/L3 Switching & SD-WAN',
              desc: 'Stackable high-density managed switches, VLAN segmentation, zero-trust access, and intelligent WAN load balancing.'
            },
            {
              icon: Radio,
              title: 'Wi-Fi 6 & 6E Enterprise Wireless',
              desc: 'High-density access points engineered for seamless roaming across multi-floor offices and educational campuses.'
            },
            {
              icon: Cpu,
              title: 'Structured LAN & Fiber Cabling',
              desc: 'Certified Cat6A twisted pair and Single/Multi-mode optical fiber backbones with OTDR testing documentation.'
            },
            {
              icon: Server,
              title: 'Data Center Racks & Precision Power',
              desc: 'Server enclosures, cable management, smart PDU monitoring, and online Uninterruptible Power Supply (UPS) backup.'
            },
            {
              icon: Shield,
              title: 'Next-Gen Firewalls & Network Audits',
              desc: 'Deep packet inspection, intrusion prevention systems (IPS), SSL VPN gateways, and security vulnerability audits.'
            },
            {
              icon: Lock,
              title: 'Storage & Backup Solutions',
              desc: 'Enterprise SAN/NAS storage arrays, automated snapshot backups, and disaster recovery orchestration.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
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

export default SecuredItInfrastructure;
