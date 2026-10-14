import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Tv, 
  ShieldCheck, 
  Eye, 
  HardDrive, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Maximize2, 
  Activity, 
  Lock
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import cctv4kImg from '../../Logo/4k cctv.jpg';
import cctv2Img from '../../Logo/Cctv2.jpg';
import videoWallImg from '../../Logo/ledvideowalls.webp';
import nvrStorageImg from '../../Logo/Central VMS NVR storage.jpg';
import deepAnalysisImg from '../../Logo/Deep video analysis.jpg';
import thermalImg from '../../Logo/Thermal perimeter security.jpg';
import hikvisionLogo from '../../Logo/Hikvision_logo.svg';
import dahuaLogo from '../../Logo/Dahua_Technology_logo.svg';
import honeywellLogo from '../../Logo/Honeywell-transparent.png';

const CctvVideoWall: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="4K CCTV Systems & Command Room Video Walls in Hyderabad | Alekhya Technologies"
        description="Turnkey 4K AI CCTV surveillance systems and seamless indoor/outdoor LED video walls in Hyderabad. Hikvision, Dahua, CP Plus IP cameras, NVR servers, AI analytics, and 24/7 security control room displays."
        keywords="CCTV camera installation Hyderabad, CCTV AMC Secunderabad, Video wall dealers Hyderabad, Hikvision 4K cameras HITEC City, Control room LED display Telangana, Dahua CCTV system Gachibowli"
        canonicalPath="/products/cctv-video-wall"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Camera className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              Wholesale CCTV & Command Room Video Wall Solutions
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            CCTV Systems & Video Wall
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Complete surveillance architectures combining ultra-high definition 4K AI cameras, long-range thermal detection, 
            multi-terabyte RAID NVR storage, and bezel-less command center LED video walls for round-the-clock enterprise situational awareness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Request Surveillance & Video Wall Survey</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Surveillance Engineer Line</span>
            </a>
          </div>

          {/* Brands Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <img src={hikvisionLogo} alt="Hikvision" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">ColorVu & AcuSense</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={dahuaLogo} alt="Dahua" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">WizSense & TiOC</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={honeywellLogo} alt="Honeywell" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-black text-slate-800">CP PLUS</span>
              <span className="text-xs text-slate-500">Authorized Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Surveillance & Video Wall Portfolio
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            From smart retail shops and gated communities to high-security defense installations, IT campuses, and municipal control centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "4K AI ColorVu & WizSense IP Cameras",
              tag: "24/7 VIVID COLOR NIGHT VISION",
              badge: "Flagship Security",
              desc: "Ultra-HD 8MP IP bullet and dome cameras featuring human/vehicle target classification, strobe light deterrents, built-in two-way audio, and zero false alarms.",
              image: cctv4kImg,
              features: ["3840 x 2160 4K Ultra-HD Resolution", "Full Color at 0.0005 Lux Ultra Low Light", "Smart Human & Vehicle Filtering", "PoE (Power over Ethernet) Plug & Play"]
            },
            {
              title: "Control Room Seamless LED Video Walls",
              tag: "ULTRA-FINE PITCH BEZEL-LESS",
              badge: "Command Center",
              desc: "Modular indoor active LED video walls (P1.2, P1.5, P1.8) designed for 24/7 continuous operation in police control rooms, emergency dispatch, and corporate SOCs.",
              image: videoWallImg,
              features: ["True Bezel-Free Seamless Mosaic Canvas", "Multi-Window IP Camera Stream Matrix", "High 3840Hz Refresh Rate (No Flickering)", "Redundant Power & Controller Failover"]
            },
            {
              title: "PTZ Speed Dome & Long-Range Zoom",
              tag: "360° CONTINUOUS PAN & TILT",
              badge: "Perimeter Defense",
              desc: "High-speed optical tracking cameras with 25x to 45x optical zoom, infrared illumination up to 300 meters, smart auto-tracking, and laser night vision.",
              image: cctv2Img,
              features: ["360° Endless Pan / 90° Auto-Flip Tilt", "Laser IR Distance 200m - 500m", "Smart Perimeter Auto-Tracking", "Vandal-Resistant IK10 & Weatherproof IP67"]
            },
            {
              title: "Centralized NVR & Enterprise Storage",
              tag: "MULTI-BAY RAID REDUNDANCY",
              badge: "Safe Evidence",
              desc: "16, 32, 64, and 128-channel network video recorders with hot-swappable enterprise hard drives, RAID 5/6 protection, and cloud backup integration.",
              image: nvrStorageImg,
              features: ["H.265+ Ultra Compression (Save 75% Storage)", "Up to 16 Hot-Swappable SATA Bays", "Dual Gigabit LAN Network Ports", "Mobile Live View via Android & iOS App"]
            },
            {
              title: "AI Video Analytics & ANPR Software",
              tag: "INTELLIGENT INSIGHTS",
              badge: "Smart Automation",
              desc: "Automated Number Plate Recognition (ANPR) for gates, facial recognition attendance sync, crowd density detection, heatmaps, and left-luggage alerts.",
              image: deepAnalysisImg,
              features: ["Automatic Gate Barrier ANPR Integration", "Blacklist / Whitelist Face Recognition", "Perimeter Tripwire & Intrusion Zones", "Centralized VMS Dashboard Software"]
            },
            {
              title: "Thermal & Explosion-Proof Cameras",
              tag: "CRITICAL INFRASTRUCTURE",
              badge: "Industrial Grade",
              desc: "Bi-spectrum optical and thermal sensors detecting heat anomalies, early fire warnings, pipeline leaks, and intrusion through heavy smoke, fog, and total darkness.",
              image: thermalImg,
              features: ["Early Fire Detection & Temperature Alarm", "Long-Range Border Perimeter Monitoring", "Explosion-Proof Stainless Steel Housing", "High Reliability in Extreme Environments"]
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
                  <span>Request System Architecture & Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Control Room & AMC Capabilities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">Reliability & SLA</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">24/7 Surveillance Support Standards</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Activity className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Camera Health Check</div>
              <p className="text-xs text-slate-300">Continuous ping monitoring for disconnected cameras, HDD failure & lens obstructions.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Maximize2 className="w-6 h-6 text-[#38BDF8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Video Wall Calibration</div>
              <p className="text-xs text-slate-300">Color temperature, brightness matching, and seamless tile alignment for control centers.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Lock className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Cyber-Secure Cameras</div>
              <p className="text-xs text-slate-300">Hardened firmware, VLAN segregation, and HTTPS encrypted streams preventing unauthorized breaches.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Comprehensive AMC</div>
              <p className="text-xs text-slate-300">Quarterly lens cleaning, cable re-termination, NVR firmware updates, and standby hardware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Secure Your Facility with 4K CCTV or Setup a Command Video Wall
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get a free on-site camera placement survey, storage calculation, and custom system design proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Book Free Site Survey
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20am%20interested%20in%20CCTV%20systems%20or%20Video%20Walls." 
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

export default CctvVideoWall;
