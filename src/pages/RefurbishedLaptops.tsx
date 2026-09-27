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
    <div ref={containerRef} className="min-h-screen py-12 bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-gray-900 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="gsap-laptop-badge bg-emerald-600 text-xs sm:text-sm font-semibold uppercase px-4 py-1.5 rounded-full inline-block mb-4 tracking-wider shadow-md">
            100% Tested & Certified Hardware
          </span>
          <h1 className="gsap-laptop-title text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            A-Grade <span className="text-emerald-400">Refurbished Laptops</span>
          </h1>
          <p className="gsap-laptop-subtitle text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Enterprise-grade commercial laptops from Lenovo ThinkPad, Dell Latitude, HP EliteBook & Apple MacBook. Certified A-Grade quality with warranty at 50-70% lower costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Quality Guarantee Standards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: '25+ Point Inspection', desc: 'Hardware diagnostics on RAM, SSD, Ports, Screen & Keyboard.', icon: <CheckCircle2 className="h-8 w-8 text-emerald-500" /> },
            { title: '80%+ Battery Health Guarantee', desc: 'Original battery performance tested with hours of backup.', icon: <Battery className="h-8 w-8 text-blue-500" /> },
            { title: 'A-Grade Cosmetic State', desc: 'Zero dents, pristine screen & clean enterprise chassis.', icon: <Star className="h-8 w-8 text-amber-500" /> },
            { title: 'Warranty & Support', desc: 'Up to 1-Year replacement warranty & dedicated tech support.', icon: <ShieldCheck className="h-8 w-8 text-purple-500" /> },
          ].map(item => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Laptop Catalog Filter */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured A-Grade Laptops</h2>
              <p className="text-gray-600">Perfect for schools, startups, CA firms, and corporate procurement</p>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg border shadow-sm">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter Brand:</span>
              {['All', 'Lenovo', 'Dell', 'HP', 'Apple'].map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    selectedBrand === brand ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredLaptops.map(laptop => (
              <div key={laptop.id} className="gsap-laptop-card bg-white rounded-2xl shadow-md border overflow-hidden flex flex-col sm:flex-row transition-all">
                <div className="sm:w-2/5 h-64 sm:h-auto bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <img src={laptop.img} alt={laptop.name} className="w-full h-full object-cover p-2" />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {laptop.grade}
                  </span>
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{laptop.brand}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{laptop.name}</h3>
                    <p className="text-xs text-gray-600 mb-4 bg-gray-50 p-2.5 rounded-lg border font-mono">
                      {laptop.specs}
                    </p>
                    <div className="space-y-1 mb-4 text-xs text-gray-600">
                      <p><strong>Ideal For:</strong> {laptop.idealFor}</p>
                      <p className="text-emerald-700 font-medium"><strong>Warranty:</strong> {laptop.warranty}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 block">Bulk Price Range</span>
                      <span className="text-lg font-extrabold text-blue-600">{laptop.price}</span>
                    </div>
                    <Link to="/contact">
                      <GradientButton className="text-xs px-4 py-2">Get Quote</GradientButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Buy Refurbished Laptops From Us */}
        <section className="bg-white p-8 sm:p-12 rounded-2xl shadow-md border">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Buy Refurbished From Alekhya Technologies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Commercial Build Quality</h3>
              <p className="text-gray-600 text-sm">We only stock enterprise series (ThinkPad, Latitude, EliteBook) engineered for 8-10 years of durable performance.</p>
            </div>
            <div className="text-center p-4">
              <Cpu className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Pre-Configured & Loaded</h3>
              <p className="text-gray-600 text-sm">Delivered ready-to-use with Windows 10/11 Pro, MS Office, and security software installed.</p>
            </div>
            <div className="text-center p-4">
              <ShieldCheck className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Bulk School & Startup Orders</h3>
              <p className="text-gray-600 text-sm">Special discounted tier pricing for orders of 5 to 100+ units with hassle-free replacement warranties.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefurbishedLaptops;
