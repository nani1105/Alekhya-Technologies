import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, Battery, Star, Award, Phone, Filter, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { GradientButton } from '../components/ui/gradient-button';
import lenovoT480 from '../Logo/lenovo-t480.jpg';
import laptopImg from '../Logo/Laptop.jpeg';
import ThinkpadImg from '../Logo/Thinkpad.jpg';

const RefurbishedLaptops = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);

  const laptops = [
    {
      id: 1,
      name: 'Lenovo ThinkPad T480 / T490',
      brand: 'Lenovo',
      grade: 'A-Grade (Mint Condition)',
      specs: 'Intel Core i5 8th Gen | 16GB RAM | 512GB NVMe SSD | 14" FHD IPS Display',
      idealFor: 'Software Startups, CA Firms & Office Staff',
      warranty: '1 Year Warranty Included',
      price: '₹22,999 - ₹26,500',
      img: lenovoT480,
    },
    {
      id: 2,
      name: 'Dell Latitude 5400 / 7400 Series',
      brand: 'Dell',
      grade: 'A-Grade Commercial Series',
      specs: 'Intel Core i5/i7 8th/10th Gen | 16GB RAM | 512GB SSD | Backlit Keyboard',
      idealFor: 'Government Offices, Schools & Corporate Employees',
      warranty: '1 Year Warranty Included',
      price: '₹23,500 - ₹28,999',
      img: laptopImg,
    },
    {
      id: 3,
      name: 'HP EliteBook 840 G5 / G6',
      brand: 'HP',
      grade: 'A-Grade Aluminum Unibody',
      specs: 'Intel Core i5 8th Gen | 16GB RAM | 256GB/512GB SSD | Bang & Olufsen Audio',
      idealFor: 'Executives, Principals & Accountants',
      warranty: '1 Year Warranty Included',
      price: '₹24,000 - ₹29,500',
      img: ThinkpadImg,
    },
    {
      id: 4,
      name: 'Apple MacBook Pro / Air (Retina)',
      brand: 'Apple',
      grade: 'A-Grade Premium Clean',
      specs: 'Intel Core i5/M1 | 8GB/16GB RAM | 256GB SSD | Retina TrueTone Display',
      idealFor: 'Designers, Developers & Senior Leadership',
      warranty: '6 Months Warranty Included',
      price: '₹38,000 - ₹55,000',
      img: laptopImg,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.gsap-laptop-badge', { scale: 0.8, opacity: 0, duration: 0.5 })
        .from('.gsap-laptop-title', { y: 25, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('.gsap-laptop-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.gsap-laptop-cta', { opacity: 0, y: 15, duration: 0.5, stagger: 0.15 }, '-=0.2');

      // Laptop Cards Entrance Animation
      gsap.from('.gsap-laptop-card', {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Hover dynamic scale
      const cards = document.querySelectorAll('.gsap-laptop-card');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', duration: 0.3 });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selectedBrand]);

  const filteredLaptops = selectedBrand === 'All' 
    ? laptops 
    : laptops.filter(laptop => laptop.brand === selectedBrand);

  return (
    <div ref={containerRef} className="min-h-screen py-6 sm:py-8 bg-transparent text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-transparent text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="gsap-laptop-badge bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold uppercase px-4 py-1.5 rounded-full inline-block mb-3 tracking-wider shadow-md">
            100% Tested & Certified Hardware
          </span>
          <h1 className="gsap-laptop-title text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            A-Grade <span className="text-emerald-400">Refurbished Laptops</span>
          </h1>
          <p className="gsap-laptop-subtitle text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-6">
            Enterprise-grade commercial laptops from Lenovo ThinkPad, Dell Latitude, HP EliteBook & Apple MacBook. Certified A-Grade quality with warranty at 50-70% lower costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="gsap-laptop-cta">
              <GradientButton className="w-full sm:w-auto">Request Bulk Quote</GradientButton>
            </Link>
            <a href="tel:+919573376389" className="gsap-laptop-cta">
              <GradientButton variant="variant" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> Speak to Sales: +91 9573376389
              </GradientButton>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12">
        {/* Quality Guarantee Standards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { title: '25+ Point Inspection', desc: 'Hardware diagnostics on RAM, SSD, Ports, Screen & Keyboard.', icon: <CheckCircle2 className="h-7 w-7 text-emerald-400" /> },
            { title: '80%+ Battery Health Guarantee', desc: 'Original battery performance tested with hours of backup.', icon: <Battery className="h-7 w-7 text-blue-400" /> },
            { title: 'A-Grade Cosmetic State', desc: 'Zero dents, pristine screen & clean enterprise chassis.', icon: <Star className="h-7 w-7 text-amber-400" /> },
            { title: 'Warranty & Support', desc: 'Up to 1-Year replacement warranty & dedicated tech support.', icon: <ShieldCheck className="h-7 w-7 text-purple-400" /> },
          ].map(item => (
            <div key={item.title} className="bg-slate-900/80 p-5 rounded-xl shadow-xl border border-slate-800">
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Laptop Catalog Filter */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured A-Grade Laptops</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Perfect for schools, startups, CA firms, and corporate procurement</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 p-2 rounded-lg border border-slate-800 shadow-sm">
              <Filter className="h-4 w-4 text-slate-400" />
              <span className="text-xs sm:text-sm font-medium text-slate-300">Filter Brand:</span>
              {['All', 'Lenovo', 'Dell', 'HP', 'Apple'].map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    selectedBrand === brand ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLaptops.map(laptop => (
              <div key={laptop.id} className="gsap-laptop-card bg-slate-900/80 rounded-2xl shadow-xl border border-slate-800 overflow-hidden flex flex-col sm:flex-row transition-all hover:border-blue-500/50">
                <div className="sm:w-2/5 h-56 sm:h-auto bg-slate-950 relative overflow-hidden flex items-center justify-center">
                  <img src={laptop.img} alt={laptop.name} className="w-full h-full object-cover p-2" />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {laptop.grade}
                  </span>
                </div>
                <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{laptop.brand}</span>
                    <h3 className="text-lg font-bold text-white mb-1.5">{laptop.name}</h3>
                    <p className="text-xs text-slate-300 mb-3 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 font-mono">
                      {laptop.specs}
                    </p>
                    <div className="space-y-1 mb-3 text-xs text-slate-300">
                      <p><strong>Ideal For:</strong> {laptop.idealFor}</p>
                      <p className="text-emerald-400 font-medium"><strong>Warranty:</strong> {laptop.warranty}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Bulk Price Range</span>
                      <span className="text-base sm:text-lg font-extrabold text-blue-400">{laptop.price}</span>
                    </div>
                    <Link to="/contact">
                      <GradientButton className="text-xs px-3.5 py-1.5">Get Quote</GradientButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Buy Refurbished Laptops From Us */}
        <section className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Why Buy Refurbished From Alekhya Technologies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <Award className="h-10 w-10 text-blue-400 mx-auto mb-2.5" />
              <h3 className="font-bold text-base text-white mb-1.5">Commercial Build Quality</h3>
              <p className="text-slate-300 text-xs sm:text-sm">We only stock enterprise series (ThinkPad, Latitude, EliteBook) engineered for 8-10 years of durable performance.</p>
            </div>
            <div className="text-center p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <Cpu className="h-10 w-10 text-emerald-400 mx-auto mb-2.5" />
              <h3 className="font-bold text-base text-white mb-1.5">Pre-Configured & Loaded</h3>
              <p className="text-slate-300 text-xs sm:text-sm">Delivered ready-to-use with Windows 10/11 Pro, MS Office, and security software installed.</p>
            </div>
            <div className="text-center p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <ShieldCheck className="h-10 w-10 text-purple-400 mx-auto mb-2.5" />
              <h3 className="font-bold text-base text-white mb-1.5">Bulk School & Startup Orders</h3>
              <p className="text-slate-300 text-xs sm:text-sm">Special discounted tier pricing for orders of 5 to 100+ units with hassle-free replacement warranties.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefurbishedLaptops;
