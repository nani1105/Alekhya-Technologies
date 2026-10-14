import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Tv, 
  Presentation, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Sun, 
  Volume2, 
  Wifi, 
  Cast
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import techAvImg from '../../Logo/TEch.jpg';
import boardroomImg from '../../Logo/Executive boardroom.jpg';
import ifpdImg from '../../Logo/Interactive display.jpg';
import ceilingMicImg from '../../Logo/ceilingmicrophones.jpg';
import epsonLogo from '../../Logo/Epson_.png';
import polyLogo from '../../Logo/hppoly-transparent.png';

const Projectors: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="Commercial Projectors, Laser AV & Screens in Hyderabad | Alekhya Technologies"
        description="Authorized sales and turnkey installation of Epson, Sony, BenQ, and Optoma 4K laser projectors in Hyderabad. Ultra-short throw projectors, motorized electric screens, and smart classroom setups."
        keywords="Projectors sales Hyderabad, 4K laser projector HITEC City, Epson projector dealer Hyderabad, Boardroom projector installation Secunderabad, Motorized projection screen, Auditorium AV setup"
        canonicalPath="/products/projectors"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Presentation className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              High-Lumen Commercial Projection & Audio-Visual Systems
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            Commercial Projector Solutions
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Elevate hybrid boardrooms, educational auditoriums, smart classrooms, and conference halls with 
            crystal-clear 4K laser projection, ultra-short throw interactive displays, motorized ALR screens, and wireless screen mirroring.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Request Projector & Screen Quote</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Talk to AV Projection Engineer</span>
            </a>
          </div>

          {/* Brands Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <img src={epsonLogo} alt="Epson" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">3LCD Technology</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">SONY</span>
              <span className="text-xs text-slate-500">Laser SXRD</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">BenQ</span>
              <span className="text-xs text-slate-500">DLP 4K HDR</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">Optoma</span>
              <span className="text-xs text-slate-500">High Lumen Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Projection Equipment & Staging Lineup
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            From 4,000 to 20,000+ ANSI lumens, our laser projection systems deliver vivid contrast even in sunlit boardrooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "4K UHD Solid-State Laser Projectors",
              tag: "30,000 HRS LAMP-FREE",
              badge: "Executive Boardrooms",
              desc: "True 4K UHD resolution laser projectors delivering instant on/off, zero filter maintenance, high dynamic contrast ratio of 2,500,000:1, and ultra-quiet cooling fan technology.",
              image: boardroomImg,
              features: ["5,000 to 10,000 ANSI Lumens", "Instant Startup (< 5 Seconds)", "Supports HDR10 & HLG Formats", "360-Degree Flexible Angle Mounting"]
            },
            {
              title: "Ultra-Short Throw (UST) Interactive Projectors",
              tag: "ZERO SHADOWS // SMART CLASS",
              badge: "Education Favorite",
              desc: "Mounts inches from the wall to project a massive 100\" to 130\" diagonal display without throwing shadows onto the presenter. Turn any wall into a multi-touch collaborative whiteboard.",
              image: ifpdImg,
              features: ["Finger Touch & Dual Interactive Stylus", "0.23:1 Ultra-Short Throw Ratio", "Built-In Whiteboard Software", "Wireless Split-Screen up to 4 Devices"]
            },
            {
              title: "High-Lumen Auditorium & Hall Projectors",
              tag: "10,000 - 25,000+ LUMENS",
              badge: "Large Venue",
              desc: "Interchangeable powered motorized lens projectors designed for university auditoriums, convention centers, hotel ballrooms, and outdoor projection mapping.",
              image: techAvImg,
              features: ["Motorized Lens Shift, Zoom & Focus", "Edge Blending & Geometric Geometry Correction", "Dual Laser Light Source with Failover", "HDBaseT Long-Distance CAT6 Cable Input"]
            },
            {
              title: "Motorized Electric & Fixed ALR Screens",
              tag: "AMBIENT LIGHT REJECTION",
              badge: "Cinema Optics",
              desc: "Tab-tensioned electric motorized ceiling-recessed screens and ultra-thin bezel fixed frame screens crafted with high-contrast optical ambient light rejecting (ALR) fabric.",
              image: techAvImg,
              features: ["Wireless RF & 12V Trigger Synchronization", "Sizes from 84\" to 300\" Diagonal", "Acoustically Transparent Perforations Available", "Anti-Crease Fiberglass Backed Fabric"]
            },
            {
              title: "Wireless Presentation & Screen Sharing",
              tag: "ONE-CLICK COLLABORATION",
              badge: "Plug & Play",
              desc: "Eliminate messy table cables. Wireless screen transmitters (ClickShare, Miracast, AirPlay) enabling laptops, tablets, and mobile phones to beam to the projector instantly.",
              image: boardroomImg,
              features: ["Zero App Installation USB Dongle Connect", "Simultaneous 4-Screen Quad Display", "Enterprise 802.1X Network Encryption", "Compatible with Windows, Mac, iOS & Android"]
            },
            {
              title: "Ceiling Mount Rigging & Audio Integration",
              tag: "TURNKEY INSTALLATION",
              badge: "Certified Engineering",
              desc: "Concealed ceiling rigging, motorized projector scissor lifts, motorized HDMI/CAT6 faceplates, surround sound speakers, and acoustic wall panel treatment.",
              image: ceilingMicImg,
              features: ["Vibration-Free Precision Universal Mounts", "Motorized In-Ceiling Scissor Drops", "Crestron / Extron Control Integration", "Complete Cable Concealment & Cable Cubbies"]
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
                  <span>Request Model Specs & Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projection Comparison Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">Optical Advantages</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Why Laser Projection for Modern Spaces?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Sun className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#00B4D8] mb-1">Up to 20K Lumens</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Daylight Visibility</div>
              <p className="text-xs text-slate-300 mt-2">No need to dim lights or draw blinds during business meetings.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Maximize2 className="w-6 h-6 text-[#38BDF8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#38BDF8] mb-1">300\" Diagonal</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Massive Scale</div>
              <p className="text-xs text-slate-300 mt-2">Achieve cinematic scale for far lower cost per square inch than TVs.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Cast className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#0077B6] mb-1">Zero Latency</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Wireless Casting</div>
              <p className="text-xs text-slate-300 mt-2">Smooth 60 FPS presentation slides and 4K video playback.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Volume2 className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#00B4D8] mb-1">22 dB Quiet</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Silent Operation</div>
              <p className="text-xs text-slate-300 mt-2">Whisper-quiet acoustic design ensures crystal clear speech audibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Planning a Boardroom, Auditorium or Classroom AV Setup?
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get an on-site room acoustic calculation, throw distance evaluation, and customized quote from certified AV specialists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Request Free AV Room Survey
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20am%20interested%20in%20Projector%20and%20Screen%20solutions." 
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

export default Projectors;
