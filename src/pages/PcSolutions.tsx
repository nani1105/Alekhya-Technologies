import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Server, CheckCircle, Phone, Layout } from 'lucide-react';
import gsap from 'gsap';
import { GradientButton } from '../components/ui/gradient-button';
import { TextShimmer } from '../components/ui/text-shimmer';
import aioPcImg from '../Logo/computer.png';
import customPcImg from '../Logo/TEch.jpg';
import serverRackImg from '../Logo/Data Center Racks.jpg';

const PcSolutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.gsap-pc-badge', { y: -20, opacity: 0, duration: 0.5 })
        .from('.gsap-pc-title', { y: 30, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('.gsap-pc-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.gsap-pc-cta', { scale: 0.9, opacity: 0, duration: 0.5, stagger: 0.15 }, '-=0.2');

      // PC Solution Cards Stagger
      gsap.from('.gsap-solution-card', {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Workflow Steps Animation
      gsap.from('.gsap-step-card', {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.5)',
      });

      // Hover interaction for solution cards
      const cards = document.querySelectorAll('.gsap-solution-card');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen py-6 sm:py-8 bg-transparent text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-transparent text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="gsap-pc-badge bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold uppercase px-4 py-1.5 rounded-full inline-block mb-3 tracking-wider shadow-md">
            <TextShimmer duration={2.5} className="[--base-color:#93c5fd] [--base-gradient-color:#ffffff] dark:[--base-color:#93c5fd] dark:[--base-gradient-color:#ffffff]">
              Customized Hardware Architecture
            </TextShimmer>
          </span>
          <h1 className="gsap-pc-title text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Custom & <span className="text-blue-400">All-in-One PC Solutions</span>
          </h1>
          <p className="gsap-pc-subtitle text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-6">
            Tailored Desktop Workstations, Space-Saving All-in-One (AIO) PCs, and Rack Server Installations for Government Offices, Schools, CA Firms & Startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="gsap-pc-cta">
              <GradientButton className="w-full sm:w-auto">Build Custom PC Quote</GradientButton>
            </Link>
            <a href="tel:+919573376389" className="gsap-pc-cta">
              <GradientButton variant="variant" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> Call Hardware Expert: +91 9573376389
              </GradientButton>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12">
        {/* Solution Categories */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: All-in-One PCs */}
          <div className="gsap-solution-card group bg-slate-900/80 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between transition-all hover:border-blue-500/50">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-4">
                <img src={aioPcImg} alt="All-in-One PCs" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-blue-600/80 backdrop-blur-md border border-blue-500/30 p-2 rounded-xl">
                  <Layout className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">All-in-One (AIO) PCs</h2>
                <p className="text-slate-300 mb-4 text-xs sm:text-sm">
                  Sleek, cable-free desktop solutions combining display & CPU in a single unit. Ideal for reception desks, school computer labs & CA offices.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> 21.5" & 23.8" Full HD IPS Displays</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Intel Core i3 / i5 / i7 Processors</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Built-in HD Camera, Mic & Speakers</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Low power consumption & compact footprint</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link to="/contact">
                <GradientButton className="w-full">Order AIO PCs</GradientButton>
              </Link>
            </div>
          </div>

          {/* Card 2: Custom PC Assemblies */}
          <div className="gsap-solution-card group bg-slate-900/80 rounded-2xl overflow-hidden shadow-xl border-2 border-blue-500/70 relative flex flex-col justify-between transition-all">
            <span className="absolute top-3 right-3 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow">
              Most Popular
            </span>
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img src={customPcImg} alt="Custom Assembled PCs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                <div className="absolute top-3 left-3 bg-blue-600/80 backdrop-blur-md border border-blue-500/30 p-2 rounded-xl">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Custom Assembled PCs</h2>
                <p className="text-slate-300 mb-4 text-xs sm:text-sm">
                  Specially configured desktop towers for high-performance workloads such as CAD, video editing, software compilation, and heavy database work.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Custom Intel & AMD Ryzen configurations</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> High-speed NVMe SSDs + DDR4/DDR5 RAM</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Dedicated NVIDIA GPU options for rendering</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Heavy-duty power supply & liquid cooling</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link to="/contact">
                <GradientButton className="w-full">Configure Custom PC</GradientButton>
              </Link>
            </div>
          </div>

          {/* Card 3: Server & Networking */}
          <div className="gsap-solution-card group bg-slate-900/80 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between transition-all hover:border-purple-500/50">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img src={serverRackImg} alt="Server & Network Rigging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                <div className="absolute top-3 left-3 bg-purple-600/80 backdrop-blur-md border border-purple-500/30 p-2 rounded-xl">
                  <Server className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Server & Network Rigging</h2>
                <p className="text-slate-300 mb-4 text-xs sm:text-sm">
                  Complete server infrastructure for multi-user office environments, central file storage, Tally server hosting, and security firewalls.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Windows & Linux Tower/Rack Servers</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> RAID storage setups & automated backups</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Structured CAT6 & Fiber LAN Cabling</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Firewall, Router & Switch Configs</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link to="/contact">
                <GradientButton variant="variant" className="w-full">Consult Server Specialist</GradientButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-800">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Our Customized Build & Deployment Process</h2>
            <p className="text-slate-300 text-base">How we deliver turnkey PC solutions for institutions and offices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { step: '01', title: 'Requirement Audit', desc: 'We assess software requirements, performance needs & budget constraints.' },
              { step: '02', title: 'Component Selection', desc: 'Hand-picked certified motherboards, CPUs, RAM & SSDs for maximum synergy.' },
              { step: '03', title: 'Stress Testing & Burn-In', desc: '48-hour hardware benchmark & temperature testing before delivery.' },
              { step: '04', title: 'On-Site Deployment', desc: 'Complete installation, networking setup & ongoing AMC support.' },
            ].map(proc => (
              <div key={proc.step} className="gsap-step-card p-5 bg-slate-950/60 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 block mb-1.5">{proc.step}</span>
                <h3 className="font-bold text-white text-base mb-1.5">{proc.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PcSolutions;
