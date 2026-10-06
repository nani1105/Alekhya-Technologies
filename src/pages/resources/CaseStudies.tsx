import React from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../../components/ParticlesBackground';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';
import cctvImg from '../../Logo/4k cctv.jpg';
import datacenterImg from '../../Logo/Data Center Racks.jpg';
import smartClassImg from '../../Logo/Interactive display.jpg';
import boardroomImg from '../../Logo/Executive boardroom.jpg';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <SEO 
        title="Enterprise Case Studies & Deployments in Hyderabad | DRDO, NABARD & Institutions"
        description="Explore real-world case studies of mission-critical IT infrastructure, surveillance, and smart boardroom deployments for DRDO, NABARD, Air Force School, and national enterprises."
        keywords="IT case studies Hyderabad, DRDO IT projects Hyderabad, NABARD system integration Telangana, Boardroom installation case study, CCTV deployment success stories"
        canonicalPath="/case-studies"
      />
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-1.5 rounded-full text-indigo-400 text-xs sm:text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#818cf8] [--base-gradient-color:#ffffff] dark:[--base-color:#818cf8] dark:[--base-gradient-color:#ffffff]">
              Proven Enterprise Success Stories
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Case Studies</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Real-world system integration deployments for defense laboratories, national banks, universities, and corporate headquarters.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              client: 'Defense Research & Development (DRDO)',
              domain: 'High-Security Network & 4K AI CCTV',
              outcome: 'Zero downtime campus LAN deployment with 200+ facial recognition cameras, thermal perimeter sensors, and central VMS.',
              image: cctvImg,
              tag: 'Defense & Surveillance'
            },
            {
              client: 'National Banking Institution (NABARD)',
              domain: 'Pan-India SLA Managed AMC & Server Racks',
              outcome: '99.9% uptime SLA compliance across multi-branch IT hardware, precision power UPS, and datacenter rack maintenance.',
              image: datacenterImg,
              tag: 'Banking & IT AMC'
            },
            {
              client: 'Air Force School & Campus Labs',
              domain: 'Interactive IFPD Classrooms & High-Density Wi-Fi',
              outcome: 'Equipped 30+ smart classrooms with 4K touch displays, interactive whiteboard software, and campus-wide Wi-Fi 6 coverage.',
              image: smartClassImg,
              tag: 'Smart Education'
            },
            {
              client: 'Corporate Executive Headquarters',
              domain: 'Turnkey Executive Boardroom & Teams Room AV',
              outcome: 'Integrated fine-pitch LED video wall, ceiling beamforming microphones, and native Microsoft Teams one-touch touch consoles.',
              image: boardroomImg,
              tag: 'Workplace AV'
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-indigo-500/50 transition-all shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 bg-indigo-600/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-indigo-400 transition-colors">{item.client}</h3>
                  <p className="text-xs text-indigo-400 font-semibold mb-3">{item.domain}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{item.outcome}</p>
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Successfully Commissioned & Under Active SLA</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link to="/contact-us" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                  <span>Inquire Similar Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
