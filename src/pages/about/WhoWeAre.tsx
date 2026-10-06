import React from 'react';
import { Building2, Compass, ShieldCheck, Target } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';
import journeyImg from '../../Logo/journey.jpg';
import valuesImg from '../../Logo/Values.avif';

const WhoWeAre: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <SEO 
        title="About Alekhya Technologies | Premier System Integrator in Hyderabad"
        description="Learn about Alekhya Technologies' 30+ year legacy as a trusted Pan-India Enterprise System Integrator based in Hyderabad. Serving DRDO, NABARD, defense, banking, and commercial institutions."
        keywords="About Alekhya Technologies, System integrator company Hyderabad, IT leadership Telangana, Enterprise IT contractor Hyderabad"
        canonicalPath="/about-us/who-we-are"
      />
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#60a5fa] [--base-gradient-color:#ffffff] dark:[--base-color:#60a5fa] dark:[--base-gradient-color:#ffffff]">
              30+ Years of Excellence
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Who We Are</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Alekhya Technologies is a premier Pan-India System Integrator bringing diverse technologies into cohesive, secure enterprise environments where everything connects effortlessly.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">30+</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Years Industry Leadership</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mb-1">5000+</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Enterprise Deployments</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">Pan-India</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Support & Operations</p>
          </div>
        </div>
      </section>

      {/* Visual Journey & Values Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm group hover:border-blue-500/50 transition-all">
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <img src={journeyImg} alt="Our Journey" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
              <div className="absolute top-4 left-4 bg-blue-600/80 backdrop-blur-md text-white p-2 rounded-xl flex items-center space-x-2 text-xs font-bold">
                <Compass className="w-4 h-4" />
                <span>Our Heritage</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Our Innovation Journey</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Founded with a mission to deliver resilient IT and electronic communication backbones, Alekhya Technologies has grown from regional computer servicing to engineering mission-critical command centers, high-security CCTV grids, and automated boardrooms.
              </p>
              <div className="flex items-center space-x-2 text-xs text-blue-400 font-semibold">
                <Target className="w-4 h-4" />
                <span>Trusted by Defense, Banking & Government Bodies</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm group hover:border-indigo-500/50 transition-all">
            <div className="relative h-60 w-full overflow-hidden bg-slate-950">
              <img src={valuesImg} alt="Our Values" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
              <div className="absolute top-4 left-4 bg-indigo-600/80 backdrop-blur-md text-white p-2 rounded-xl flex items-center space-x-2 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Core Values</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">Our Foundational Values</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                We believe in zero-compromise engineering, rapid SLA response times, transparent OEM warranties, and long-term client stewardship across every deployment we undertake.
              </p>
              <div className="flex items-center space-x-2 text-xs text-indigo-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% SLA Guarantee & Dedicated Account Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
