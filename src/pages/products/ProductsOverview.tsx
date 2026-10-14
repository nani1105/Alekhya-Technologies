import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  Laptop, 
  Copy, 
  Camera, 
  Fingerprint, 
  Presentation, 
  PhoneCall, 
  Tv, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Phone,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import mfpImg from '../../Logo/Multifunction Photocopiers.jpg';
import laptopImg from '../../Logo/Laptop.jpeg';
import commercialPrinterImg from '../../Logo/Commercial laser printer.jpg';
import cctv4kImg from '../../Logo/4k cctv.jpg';
import biometricAccessImg from '../../Logo/Biometric access control.jpg';
import boardroomImg from '../../Logo/Executive boardroom.jpg';
import ipbxImg from '../../Logo/ipbx.jpg';
import ledVideoWallImg from '../../Logo/ledvideowalls.webp';

const productsList = [
  {
    title: "Photocopier",
    desc: "Authorized Konica Minolta bizhub, Canon, and Xerox A3/A4 multifunction digital copiers, rental options, and 24/7 SLA maintenance.",
    icon: Copy,
    link: "/products/photocopier",
    image: mfpImg,
    tag: "COPIERS // BIZHUB",
    badge: "Official Dealer",
    highlights: ["A3/A4 Color & Monochrome", "Flexible Monthly Rental Plans", "Original Toners & Spare Parts"]
  },
  {
    title: "Laptop & Desktops",
    desc: "Enterprise Lenovo ThinkPad, Dell Latitude, HP EliteBook, Apple MacBook, custom workstation towers, and certified refurbished corporate laptops.",
    icon: Laptop,
    link: "/products/laptop-desktops",
    image: laptopImg,
    tag: "COMPUTE // WORKSTATIONS",
    badge: "Bulk Stock",
    highlights: ["Grade-A Refurbished with Warranty", "Chip-Level Motherboard Repair", "Corporate Bulk Supply & Leasing"]
  },
  {
    title: "LaserJet & Dot Matrix",
    desc: "Commercial HP LaserJet printers, continuous multi-part invoice tractor Dot Matrix printers, passbook printers, and bulk toner cartridges.",
    icon: Printer,
    link: "/products/laserjet-dot-matrix",
    image: commercialPrinterImg,
    tag: "PRINT // LOGISTICS",
    badge: "Heavy Duty",
    highlights: ["24-Pin Multi-Copy Billing Printers", "High-Yield Original OEM Toners", "Onsite Printer Repair & Servicing"]
  },
  {
    title: "CCTV Systems & Video Wall",
    desc: "4K Ultra-HD AI IP cameras from Hikvision, Dahua, CP Plus, NVR servers, perimeter thermal detection, and command center LED video walls.",
    icon: Camera,
    link: "/products/cctv-video-wall",
    image: cctv4kImg,
    tag: "4K AI SURVEILLANCE",
    badge: "Security Core",
    highlights: ["24/7 Vivid Color Night Vision", "Seamless Bezel-Free LED Walls", "AI License Plate & Face Recognition"]
  },
  {
    title: "Biometric Devices",
    desc: "Touchless AI facial recognition terminals, optical fingerprint scanners from eSSL, Mantra, Realtime, multi-door controllers, and cloud HRMS sync.",
    icon: Fingerprint,
    link: "/products/biometric-devices",
    image: biometricAccessImg,
    tag: "ACCESS // ATTENDANCE",
    badge: "STQC Approved",
    highlights: ["<0.2s Touchless Face Match", "Multi-Door Magnetic Interlocks", "Direct API Payroll & Attendance Sync"]
  },
  {
    title: "Projectors",
    desc: "High-lumen 4K solid-state laser projectors from Epson, Sony, BenQ, ultra-short throw interactive displays, and motorized ALR screens.",
    icon: Presentation,
    link: "/products/projectors",
    image: boardroomImg,
    tag: "PROJECTION // AV",
    badge: "4K Laser",
    highlights: ["30,000 Hours Lamp-Free Life", "Motorized ALR Ceiling Screens", "One-Click Wireless Screen Sharing"]
  },
  {
    title: "IP Intercom System",
    desc: "On-premise IP PBX servers from Grandstream, Yealink, Cisco, multi-tenant video door stations, SIP executive desk phones, and public address paging.",
    icon: PhoneCall,
    link: "/products/ip-intercom-systems",
    image: ipbxImg,
    tag: "VOIP // TELEPHONY",
    badge: "Zero License Fee",
    highlights: ["10 to 5,000+ Extension Sizing", "Smartphone Softphone App Sync", "Free Inter-Branch Branch Calling"]
  },
  {
    title: "Large LED Display Panel",
    desc: "Ultra-fine pitch indoor seamless active LED walls, interactive flat panels (IFPD) up to 98\", weatherproof outdoor billboards, and digital standees.",
    icon: Tv,
    link: "/products/large-led-display-panel",
    image: ledVideoWallImg,
    tag: "ACTIVE LED // IFPD",
    badge: "Next-Gen Visuals",
    highlights: ["P1.2 - P2.5 Seamless Modular Display", "40-Point Multi-Touch Interactive IFPD", "Centralized Cloud Digital Signage CMS"]
  }
];

const ProductsOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="Products Portfolio | Alekhya Technologies Hyderabad"
        description="Explore Alekhya Technologies' commercial products catalog: Photocopiers, Laptops, Desktops, LaserJet & Dot Matrix printers, 4K CCTV systems, Video Walls, Biometrics, Projectors, IP Intercoms & Large LED Panels."
        keywords="Electronics sales Hyderabad, Office equipment Hyderabad, Photocopiers, Laptops, CCTV, Biometric, Projectors, Intercom, LED displays"
        canonicalPath="/products"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              Comprehensive Technology & Hardware Portfolio
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            Products & Hardware Portfolio
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Explore our complete range of certified commercial equipment, smart automation devices, computing hardware, and display systems. 
            Official authorized sales, customized rental options, and 24/7 SLA maintenance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Request Product Catalog & Price List</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Call +91 95733 76389</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8 Products Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsList.map((prod, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-slate-950/85 backdrop-blur-md border border-slate-800 hover:border-cyan-400/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_12px_32px_rgba(0,180,216,0.18)] transition-all duration-300 group"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] backdrop-blur-md text-white p-2 rounded-xl border border-white/20 shadow-md">
                    <prod.icon className="w-4 h-4" />
                  </div>
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-200 bg-black/75 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full">
                    {prod.badge}
                  </span>
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono text-[#00B4D8] uppercase tracking-wider font-semibold">
                    {prod.tag}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#00B4D8] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {prod.desc}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-800/80">
                    {prod.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-[#00B4D8] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <Link
                  to={prod.link}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#00B4D8] hover:text-[#38BDF8] transition-colors"
                >
                  <span>Explore {prod.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Looking for Custom Product Sourcing or Bulk Corporate Deals?
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            We provide multi-vendor hardware integration, OEM staging, GST billing, and SLA-backed maintenance contracts across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Request Custom Product Quote
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20am%20inquiring%20about%20your%20products%20catalog." 
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

export default ProductsOverview;
