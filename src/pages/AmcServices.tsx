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
    <div ref={containerRef} className="min-h-screen py-12 bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto text-center">
          <span className="gsap-hero-badge bg-blue-600 text-xs sm:text-sm font-semibold uppercase px-4 py-1.5 rounded-full inline-block mb-4 tracking-wider shadow-md">
            15+ Years Industry Leader
          </span>
          <h1 className="gsap-hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Enterprise <span className="text-blue-300">IT AMC Services</span>
          </h1>
          <p className="gsap-hero-desc text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            SLA-Driven Annual Maintenance Contracts for Computer Systems, Servers, Photocopiers, Currency Counting Machines, Printers, & CCTV Infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Target Sectors */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Needs Our AMC Solutions?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Customized maintenance agreements tailored for organization-specific uptime requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'State & Central Govt',
                desc: 'Compliant contracts, defense-grade security protocols, and audited SLA deliverables.',
                badge: 'Govt & Defense',
                icon: <Shield className="h-8 w-8 text-blue-600" />,
              },
              {
                title: 'Schools & Colleges',
                desc: 'Lab computers, staff workstations, exam photocopier maintenance & campus CCTV.',
                badge: 'Education',
                icon: <Users className="h-8 w-8 text-green-600" />,
              },
              {
                title: 'CA & Financial Firms',
                desc: 'Tax season high-speed printer support, currency counter servicing & server reliability.',
                badge: 'Finance & Banking',
                icon: <FileCheck className="h-8 w-8 text-purple-600" />,
              },
              {
                title: 'Software Startups',
                desc: 'Scalable workstation maintenance, LAN router/switch configs & 24/7 IT helpdesk.',
                badge: 'IT & Startups',
                icon: <Server className="h-8 w-8 text-amber-600" />,
              },
            ].map((sector) => (
              <div key={sector.title} className="gsap-sector-card gsap-hover-card bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-shadow">
                <div className="mb-4">{sector.icon}</div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{sector.badge}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{sector.title}</h3>
                <p className="text-gray-600 text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment Covered Under AMC */}
        <section className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Covered Under Our AMC</h2>
            <p className="text-gray-600 text-lg">Single-window support for all electronic & computing assets in your institution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gsap-equip-card gsap-hover-card p-6 bg-gray-50 rounded-xl border border-gray-200">
              <Monitor className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Computer & Server Systems</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Desktops, Laptops & Workstations</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Windows & Linux Rack Servers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Motherboard & Storage Repair</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Virus Cleanup & OS Maintenance</li>
              </ul>
            </div>

            <div className="gsap-equip-card gsap-hover-card p-6 bg-gray-50 rounded-xl border border-gray-200">
              <Printer className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Photocopiers & Printers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> All-in-One Xerox & Canon Copiers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Laser, Inkjet & Dot Matrix Printers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Drum & Roller Replacements</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Genuine Toner & Refill Logistics</li>
              </ul>
            </div>

            <div className="gsap-equip-card gsap-hover-card p-6 bg-gray-50 rounded-xl border border-gray-200">
              <FileCheck className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Counting & Security Devices</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Currency & Note Counting Machines</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Fake Note Detector Calibration</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> 4K CCTV Cameras & DVR/NVR Racks</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Biometric Attendance & Access Control</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contract Tiers */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible AMC Plans</h2>
            <p className="text-gray-600 text-lg">Choose comprehensive coverage with parts included or labor-only plans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gsap-hover-card bg-white p-8 rounded-xl shadow-md border border-gray-200 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive AMC</h3>
              <p className="text-blue-600 font-semibold mb-6">Full Risk Coverage (Labor + All Hardware Spare Parts Included)</p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Includes motherboard, power supply & part replacements</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Free standby equipment during major repairs</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Scheduled monthly preventive maintenance visits</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Priority 2-4 Hour On-Site SLA Response</li>
              </ul>
              <Link to="/contact">
                <GradientButton className="w-full">Get Comprehensive AMC Quote</GradientButton>
              </Link>
            </div>

            <div className="gsap-hover-card bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Comprehensive AMC</h3>
              <p className="text-purple-600 font-semibold mb-6">Service & Maintenance Labor Only (Parts Billed Separately)</p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Unlimited breakdown resolution visits</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Full software, OS, network & driver support</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Original manufacturer spare parts at wholesale rates</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Dedicated account manager & audit reports</li>
              </ul>
              <Link to="/contact">
                <GradientButton variant="variant" className="w-full">Get Labor AMC Quote</GradientButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials & Trust */}
        <section className="bg-blue-900 text-white rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Trusted by Premier Government & Defense Organizations</h2>
          <p className="text-blue-200 max-w-3xl mx-auto mb-8 text-lg">
            We hold an unblemished track record of executing AMC contracts for DRDO, National Banks, NABARD, India Meteorological Department (IMD), and Air Force School.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-3 rounded-lg w-32 flex justify-center">
              <img src={drdoLogo} alt="DRDO" className="h-12 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-lg w-32 flex justify-center">
              <img src={nabardLogo} alt="NABARD" className="h-12 object-contain" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AmcServices;
