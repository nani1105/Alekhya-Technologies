import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Server, Monitor, Printer, FileCheck, Phone, Users, Award } from 'lucide-react';
import gsap from 'gsap';
import { GradientButton } from '../components/ui/gradient-button';
import drdoLogo from '../Logo/drdo.png';
import nabardLogo from '../Logo/NABARD1.png';

const AmcServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.gsap-hero-badge', { y: -20, opacity: 0, duration: 0.6 })
        .from('.gsap-hero-title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.gsap-hero-desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.gsap-hero-btn', { scale: 0.9, opacity: 0, duration: 0.5, stagger: 0.15 }, '-=0.3');

      // Cards Stagger Animation
      gsap.from('.gsap-sector-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from('.gsap-equip-card', {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.4)',
      });

      // Hover Animations for interactive elements
      const cards = document.querySelectorAll('.gsap-hover-card');
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
      <section ref={heroRef} className="bg-transparent text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="gsap-hero-badge bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold uppercase px-4 py-1.5 rounded-full inline-block mb-3 tracking-wider shadow-md">
            15+ Years Industry Leader
          </span>
          <h1 className="gsap-hero-title text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Enterprise <span className="text-blue-400">IT AMC Services</span>
          </h1>
          <p className="gsap-hero-desc text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-6">
            SLA-Driven Annual Maintenance Contracts for Computer Systems, Servers, Photocopiers, Currency Counting Machines, Printers, & CCTV Infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="gsap-hero-btn">
              <GradientButton className="w-full sm:w-auto">Request AMC Quote</GradientButton>
            </Link>
            <a href="tel:+919573376389" className="gsap-hero-btn">
              <GradientButton variant="variant" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> Call Specialist: +91 9573376389
              </GradientButton>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12">
        {/* Target Sectors */}
        <section>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Who Needs Our AMC Solutions?</h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Customized maintenance agreements tailored for organization-specific uptime requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: 'State & Central Govt',
                desc: 'Compliant contracts, defense-grade security protocols, and audited SLA deliverables.',
                badge: 'Govt & Defense',
                icon: <Shield className="h-7 w-7 text-blue-400" />,
              },
              {
                title: 'Schools & Colleges',
                desc: 'Lab computers, staff workstations, exam photocopier maintenance & campus CCTV.',
                badge: 'Education',
                icon: <Users className="h-7 w-7 text-emerald-400" />,
              },
              {
                title: 'CA & Financial Firms',
                desc: 'Tax season high-speed printer support, currency counter servicing & server reliability.',
                badge: 'Finance & Banking',
                icon: <FileCheck className="h-7 w-7 text-purple-400" />,
              },
              {
                title: 'Software Startups',
                desc: 'Scalable workstation maintenance, LAN router/switch configs & 24/7 IT helpdesk.',
                badge: 'IT & Startups',
                icon: <Server className="h-7 w-7 text-amber-400" />,
              },
            ].map((sector) => (
              <div key={sector.title} className="gsap-sector-card gsap-hover-card bg-slate-900/80 p-5 rounded-xl shadow-xl border border-slate-800 hover:border-blue-500/40 transition-all">
                <div className="mb-3">{sector.icon}</div>
                <span className="text-[11px] font-semibold text-blue-300 bg-blue-600/20 border border-blue-500/30 px-2 py-0.5 rounded-full">{sector.badge}</span>
                <h3 className="text-lg font-bold text-white mt-2.5 mb-1.5">{sector.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment Covered Under AMC */}
        <section className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-800">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Equipment Covered Under Our AMC</h2>
            <p className="text-slate-300 text-base">Single-window support for all electronic & computing assets in your institution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gsap-equip-card gsap-hover-card p-5 bg-slate-950/60 rounded-xl border border-slate-800">
              <Monitor className="h-8 w-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-bold mb-2 text-white">Computer & Server Systems</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Desktops, Laptops & Workstations</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Windows & Linux Rack Servers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Motherboard & Storage Repair</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Virus Cleanup & OS Maintenance</li>
              </ul>
            </div>

            <div className="gsap-equip-card gsap-hover-card p-5 bg-slate-950/60 rounded-xl border border-slate-800">
              <Printer className="h-8 w-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold mb-2 text-white">Photocopiers & Printers</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> All-in-One Xerox & Canon Copiers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Laser, Inkjet & Dot Matrix Printers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Drum & Roller Replacements</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Genuine Toner & Refill Logistics</li>
              </ul>
            </div>

            <div className="gsap-equip-card gsap-hover-card p-5 bg-slate-950/60 rounded-xl border border-slate-800">
              <FileCheck className="h-8 w-8 text-amber-400 mb-3" />
              <h3 className="text-lg font-bold mb-2 text-white">Counting & Security Devices</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Currency & Note Counting Machines</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Fake Note Detector Calibration</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> 4K CCTV Cameras & DVR/NVR Racks</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Biometric Attendance & Access Control</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contract Tiers */}
        <section>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Flexible AMC Plans</h2>
            <p className="text-slate-300 text-base">Choose comprehensive coverage with parts included or labor-only plans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gsap-hover-card bg-slate-900/80 p-6 sm:p-7 rounded-xl shadow-xl border border-slate-800 relative hover:border-blue-500/50">
              <h3 className="text-xl font-bold text-white mb-1">Comprehensive AMC</h3>
              <p className="text-blue-400 font-semibold mb-4 text-xs sm:text-sm">Full Risk Coverage (Labor + All Hardware Spare Parts Included)</p>
              <ul className="space-y-2 mb-6 text-slate-300 text-xs sm:text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Includes motherboard, power supply & part replacements</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Free standby equipment during major repairs</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Scheduled monthly preventive maintenance visits</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Priority 2-4 Hour On-Site SLA Response</li>
              </ul>
              <Link to="/contact">
                <GradientButton className="w-full">Get Comprehensive AMC Quote</GradientButton>
              </Link>
            </div>

            <div className="gsap-hover-card bg-slate-900/80 p-6 sm:p-7 rounded-xl shadow-xl border border-slate-800 hover:border-purple-500/50">
              <h3 className="text-xl font-bold text-white mb-1">Non-Comprehensive AMC</h3>
              <p className="text-purple-400 font-semibold mb-4 text-xs sm:text-sm">Service & Maintenance Labor Only (Parts Billed Separately)</p>
              <ul className="space-y-2 mb-6 text-slate-300 text-xs sm:text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Unlimited breakdown resolution visits</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Full software, OS, network & driver support</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Original manufacturer spare parts at wholesale rates</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Dedicated account manager & audit reports</li>
              </ul>
              <Link to="/contact">
                <GradientButton variant="variant" className="w-full">Get Labor AMC Quote</GradientButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials & Trust */}
        <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border border-slate-800 text-white rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
          <Award className="h-12 w-12 text-amber-400 mx-auto mb-3" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Trusted by Premier Government & Defense Organizations</h2>
          <p className="text-slate-300 max-w-3xl mx-auto mb-6 text-sm sm:text-base">
            We hold an unblemished track record of executing AMC contracts for DRDO, National Banks, NABARD, India Meteorological Department (IMD), and Air Force School.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-2.5 rounded-lg w-28 sm:w-32 flex justify-center shadow-lg">
              <img src={drdoLogo} alt="DRDO" className="h-10 sm:h-12 object-contain" />
            </div>
            <div className="bg-white p-2.5 rounded-lg w-28 sm:w-32 flex justify-center shadow-lg">
              <img src={nabardLogo} alt="NABARD" className="h-10 sm:h-12 object-contain" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AmcServices;
