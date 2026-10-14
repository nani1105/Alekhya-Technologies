import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Monitor, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Zap, 
  RefreshCw,
  Wrench
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import laptopImg from '../../Logo/Laptop.jpeg';
import thinkpadImg from '../../Logo/Thinkpad.jpg';
import computerImg from '../../Logo/computer-transparent.png';
import lenovoT480Img from '../../Logo/lenovo-t480.jpg';
import dellLogo from '../../Logo/Dell_Logo.webp';
import hpLogo from '../../Logo/Hp1.png';
import macImg from '../../Logo/Mac.avif';

const LaptopDesktops: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="Laptops & Desktops Sales, Refurbished & AMC in Hyderabad | Alekhya Technologies"
        description="Enterprise ThinkPad, Dell Latitude, HP EliteBook, Apple MacBook, custom workstation PCs, and certified refurbished corporate laptops in Hyderabad. Bulk corporate supply, rentals, and hardware repair."
        keywords="Laptops sales Hyderabad, ThinkPad dealers Hyderabad, Refurbished laptops Secunderabad, Dell Latitude laptops HITEC City, HP desktop AMC, Custom PC build Hyderabad, Corporate laptop rental"
        canonicalPath="/products/laptop-desktops"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Laptop className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              Enterprise Hardware & Workstation Provider
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            Laptops & Desktop Workstations
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Powering IT enterprises, call centers, developers, and corporate workforces with top-tier business laptops, 
            powerful custom desktop towers, certified Grade-A refurbished devices, and lifecycle IT AMC support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Request Bulk Hardware Pricing</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Direct Hardware Hotline</span>
            </a>
          </div>

          {/* Brands Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-black text-slate-800">ThinkPad</span>
              <span className="text-xs text-slate-500">Authorized Series</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={dellLogo} alt="Dell" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">Latitude & Precision</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={hpLogo} alt="HP" className="h-7 object-contain" />
              <span className="text-xs text-slate-500">EliteBook & ZBook</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-slate-800">Apple</span>
              <span className="text-xs text-slate-500">MacBook Pro / Air</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Corporate IT Compute Ecosystem
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            Equip your workforce with proven hardware backed by 1-year warranties, prompt battery & SSD upgrades, and quick chip-level repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Lenovo ThinkPad Enterprise Series",
              tag: "MIL-SPEC DURABILITY",
              badge: "High Demand",
              desc: "Legendary ThinkPad T480, T490, X1 Carbon, and E-series laptops featuring spill-resistant keyboards, rapid charge, and dTPM 2.0 hardware security.",
              image: thinkpadImg,
              features: ["Intel Core i5 / i7 / vPro Processors", "Up to 32GB RAM & 1TB NVMe SSD", "14\" FHD IPS Anti-Glare Displays", "Dual Battery Options with Bridge Tech"]
            },
            {
              title: "Dell Latitude & Precision Laptops",
              tag: "BUSINESS CLASS & CAD",
              badge: "Workhorse",
              desc: "Designed for corporate productivity and graphic processing. Robust aluminum chassis, ExpressCharge, and enterprise remote management capabilities.",
              image: laptopImg,
              features: ["Dell Latitude 7400/7490/5400 Series", "NVIDIA Dedicated Graphic Options", "Thunderbolt 3/4 Docking Connectivity", "Tested for 24/7 Intense Compute"]
            },
            {
              title: "HP EliteBook & ProBook Systems",
              tag: "ULTRABOOK MOBILITY",
              badge: "Corporate Choice",
              desc: "Sleek, lightweight executive notebooks with Bang & Olufsen audio, HP Sure View privacy screens, and all-day battery life for travelling professionals.",
              image: lenovoT480Img,
              features: ["HP Sure Start Self-Healing BIOS", "Lightweight Precision Aluminum Body", "Backlit Spill-Proof Keyboard", "Wi-Fi 6 & Fast Cellular 4G LTE"]
            },
            {
              title: "Certified Grade-A Refurbished Laptops",
              tag: "COST OPTIMIZED (-60%)",
              badge: "Best Value",
              desc: "Pristine corporate-lease returns thoroughly audited across 40+ hardware checkpoints. New SSD, tested battery, clean OS, and comprehensive replacement warranty.",
              image: laptopImg,
              features: ["100% Genuine OEM Components", "Fresh Thermal Paste & Clean Cooling", "Tested High-Health Battery Packs", "6 Months to 1 Year Warranty Included"]
            },
            {
              title: "Commercial Desktops & Tower Workstations",
              tag: "POWER COMPUTING",
              badge: "High Reliability",
              desc: "Space-saving Small Form Factor (SFF), Micro Desktops, and heavy-duty Tower PCs from Dell OptiPlex, HP ProDesk, and Lenovo ThinkCentre.",
              image: computerImg,
              features: ["Multi-Monitor Display Outputs (DP/HDMI)", "Tool-Less Upgradable Chassis", "Intel Core i3/i5/i7/i9 Workstations", "Customizable for Tally, Dev & CAD"]
            },
            {
              title: "Apple MacBook Pro & Air (M1/M2/Intel)",
              tag: "CREATIVE & DEV WORKFLOWS",
              badge: "Premium Grade",
              desc: "MacBook Air and MacBook Pro laptops for UI/UX designers, iOS developers, and leadership executives requiring Retina resolution and extreme power efficiency.",
              image: macImg,
              features: ["Apple Silicon High Performance Architecture", "Liquid Retina XDR Display", "TrueTone & Wide P3 Color Gamut", "Silent Fanless & Long Battery Life"]
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -6 }}
              className="bg-slate-950/85 backdrop-blur-md border border-slate-800 hover:border-cyan-400/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_12px_32px_rgba(0,180,216,0.18)] transition-all duration-300 group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-slate-200 bg-black/75 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#00B4D8] uppercase tracking-wider font-semibold">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-0">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[#00B4D8] hover:text-[#38BDF8] transition-colors"
                >
                  <span>Inquire Stock & Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Included */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">End-To-End Support</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Lifecycle Laptop & Desktop Services</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <Wrench className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Chip-Level Repair</div>
              <p className="text-xs text-slate-300">Motherboard diagnostics, screen replacements, keyboard swaps & hinge fixes.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <Zap className="w-6 h-6 text-[#38BDF8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">SSD & RAM Boost</div>
              <p className="text-xs text-slate-300">Same-day speed upgrades up to 2TB NVMe PCIe 4.0 SSD and 64GB DDR4/DDR5.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <RefreshCw className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Bulk Rentals & Leases</div>
              <p className="text-xs text-slate-300">Short-term and long-term laptop rental setups for corporate training & hackathons.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Enterprise AMC</div>
              <p className="text-xs text-slate-300">Preventive dust cleanups, OS maintenance, antivirus audits, and guaranteed SLAs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Need 10 to 500+ Laptops or Desktops for Your Office?
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get instant competitive B2B wholesale quotation, demo units delivered, and doorstep warranty setup across Hyderabad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Request Corporate Quote
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20am%20looking%20for%20Laptop/Desktop%20purchases%20or%20rentals." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaptopDesktops;
