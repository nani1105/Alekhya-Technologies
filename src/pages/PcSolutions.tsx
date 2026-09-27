import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Server, CheckCircle, Phone, Layout } from 'lucide-react';
import gsap from 'gsap';
import { GradientButton } from '../components/ui/gradient-button';

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
    <div ref={containerRef} className="min-h-screen py-12 bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-950 via-blue-900 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="gsap-pc-badge bg-indigo-600 text-xs sm:text-sm font-semibold uppercase px-4 py-1.5 rounded-full inline-block mb-4 tracking-wider shadow-md">
            Customized Hardware Architecture
          </span>
          <h1 className="gsap-pc-title text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Custom & <span className="text-indigo-300">All-in-One PC Solutions</span>
          </h1>
          <p className="gsap-pc-subtitle text-lg sm:text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">
            Tailored Desktop Workstations, Space-Saving All-in-One (AIO) PCs, and Rack Server Installations for Government Offices, Schools, CA Firms & Startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Solution Categories */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: All-in-One PCs */}
          <div className="gsap-solution-card bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col justify-between transition-shadow">
            <div>
              <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Layout className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">All-in-One (AIO) PCs</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Sleek, cable-free desktop solutions combining display & CPU in a single unit. Ideal for reception desks, school computer labs & CA offices.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> 21.5" & 23.8" Full HD IPS Displays</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Intel Core i3 / i5 / i7 Processors</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Built-in HD Camera, Mic & Speakers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Low power consumption & compact footprint</li>
              </ul>
            </div>
            <Link to="/contact">
              <GradientButton className="w-full">Order AIO PCs</GradientButton>
            </Link>
          </div>

          {/* Card 2: Custom PC Assemblies */}
          <div className="gsap-solution-card bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 relative flex flex-col justify-between transition-shadow">
            <span className="absolute -top-3.5 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow">
              Most Popular
            </span>
            <div>
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Custom Assembled PCs</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Specially configured desktop towers for high-performance workloads such as CAD, video editing, software compilation, and heavy database work.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Custom Intel & AMD Ryzen configurations</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> High-speed NVMe SSDs + DDR4/DDR5 RAM</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Dedicated NVIDIA GPU options for rendering</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Heavy-duty power supply & liquid cooling</li>
              </ul>
            </div>
            <Link to="/contact">
              <GradientButton className="w-full">Configure Custom PC</GradientButton>
            </Link>
          </div>

          {/* Card 3: Server & Networking */}
          <div className="gsap-solution-card bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col justify-between transition-shadow">
            <div>
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Server className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Server & Network Rigging</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Complete server infrastructure for multi-user office environments, central file storage, Tally server hosting, and security firewalls.
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Windows & Linux Tower/Rack Servers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> RAID storage setups & automated backups</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Structured CAT6 & Fiber LAN Cabling</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Firewall, Router & Switch Configs</li>
              </ul>
            </div>
            <Link to="/contact">
              <GradientButton variant="variant" className="w-full">Consult Server Specialist</GradientButton>
            </Link>
          </div>
        </section>

        {/* Process Flow */}
        <section className="bg-white p-8 sm:p-12 rounded-2xl shadow-md border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Customized Build & Deployment Process</h2>
            <p className="text-gray-600 text-lg">How we deliver turnkey PC solutions for institutions and offices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Requirement Audit', desc: 'We assess software requirements, performance needs & budget constraints.' },
              { step: '02', title: 'Component Selection', desc: 'Hand-picked certified motherboards, CPUs, RAM & SSDs for maximum synergy.' },
              { step: '03', title: 'Stress Testing & Burn-In', desc: '48-hour hardware benchmark & temperature testing before delivery.' },
              { step: '04', title: 'On-Site Deployment', desc: 'Complete installation, networking setup & ongoing AMC support.' },
            ].map(proc => (
              <div key={proc.step} className="gsap-step-card p-6 bg-gray-50 rounded-xl border hover:border-blue-300 transition-colors">
                <span className="text-3xl font-extrabold text-blue-600 block mb-2">{proc.step}</span>
                <h3 className="font-bold text-gray-900 mb-2">{proc.title}</h3>
                <p className="text-gray-600 text-sm">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PcSolutions;
