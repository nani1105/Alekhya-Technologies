import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Tv, 
  Monitor, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Sun, 
  Eye, 
  Layers, 
  Wifi,
  Cloud
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import ledVideoWallImg from '../../Logo/ledvideowalls.webp';
import interactiveDisplayImg from '../../Logo/Interactive display.jpg';
import signageImg from '../../Logo/signage.jpg';
import techAvImg from '../../Logo/TEch.jpg';

const LargeLedDisplayPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="Large LED Display Panels, Interactive Flat Panels & Video Walls in Hyderabad | Alekhya Technologies"
        description="Active indoor and outdoor LED display panels, Interactive Flat Panels (IFPD), and digital signage kiosks in Hyderabad. High-resolution P1.2, P1.8, P2.5, P3 seamless LED walls for corporate lobbies, retail & auditoriums."
        keywords="Large LED display panel Hyderabad, Interactive flat panel display HITEC City, Commercial LED video wall Hyderabad, Digital signage kiosk Secunderabad, P2.5 indoor LED wall, Maxhub interactive display dealer"
        canonicalPath="/products/large-led-display-panel"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Tv className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              High-Grade Commercial Display Panels & Seamless Active Video Walls
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            Large LED Display Panels
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Captivate audiences with breathtaking visual grandeur. Ultra-fine pitch indoor seamless LED walls, 
            weatherproof high-brightness outdoor LED displays, 4K Interactive Flat Panels (IFPD), and cloud-managed digital signage kiosks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Request LED Display Demonstration & Quote</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Talk to Display Engineer</span>
            </a>
          </div>

          {/* Brands Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <span className="text-base font-black text-slate-800">MAXHUB</span>
              <span className="text-xs text-slate-500">Interactive IFPD</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">SAMSUNG</span>
              <span className="text-xs text-slate-500">The Wall / SMART Signage</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">LG</span>
              <span className="text-xs text-slate-500">Commercial OLED / LED</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">ViewSonic</span>
              <span className="text-xs text-slate-500">ViewBoard 4K</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Commercial LED Display Categories
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            Custom engineered in any dimension, curve, aspect ratio, or pixel pitch to fit your architectural space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Ultra-Fine Pitch Indoor Active LED Walls",
              tag: "SEAMLESS // P1.2 TO P2.5",
              badge: "Executive Lobbies",
              desc: "Bezel-free modular LED cabinets creating a seamless giant screen for corporate lobbies, boardroom presentation backdrops, experience centers, and auditorium stages.",
              image: ledVideoWallImg,
              features: ["Zero Bezel Grid Lines Across Entire Canvas", "High Refresh Rate 3840Hz (Broadcast Quality)", "Front Serviceable Magnet Module Maintenance", "Die-Cast Aluminum Precision Engineered Cabinets"]
            },
            {
              title: "4K Interactive Flat Panels (IFPD)",
              tag: "MULTI-TOUCH COLLABORATION",
              badge: "Smart Boardrooms",
              desc: "65\", 75\", 86\", and 98\" 4K UHD interactive touchscreens with anti-glare toughened glass, integrated 4K camera with auto-framing, 8-array mics, and dual OS (Android + Windows OPS).",
              image: interactiveDisplayImg,
              features: ["40-Point Multi-Touch Handwriting Latency < 5ms", "Built-In AI 4K ePTZ Camera & Beamforming Mics", "One-Click Wireless Screen Sharing for 4 Devices", "Integrated Whiteboard Software with Cloud Save"]
            },
            {
              title: "High-Brightness Outdoor LED Billboards",
              tag: "WEATHERPROOF IP65 // P3 - P10",
              badge: "High Visibility",
              desc: "Daylight-visible outdoor LED display screens (6,500+ nits) engineered to withstand harsh sun, tropical rain, humidity, and dust for commercial advertising and facades.",
              image: signageImg,
              features: ["6,500 to 10,000 Nits Sunlight-Readable Brightness", "IP65 Waterproof & Dustproof Front / Rear Seal", "Automated Light Sensor Ambient Dimming Control", "Energy-Efficient Common-Cathode Technology"]
            },
            {
              title: "Standalone Digital Signage Kiosks & Standees",
              tag: "PORTRAIT TOUCH KIOSKS",
              badge: "Retail & Malls",
              desc: "Sleek 43\", 55\", and 65\" vertical digital advertising totems featuring commercial grade panels, tempered glass protection, built-in wheels, and cloud content updates.",
              image: signageImg,
              features: ["24/7 Continuous Operation Rated Commercial Panel", "Optional 10-Point Infrared / Capacitive Touch", "Integrated Android / Windows Media Player", "Heavy-Duty Weighted Base with Internal Lock"]
            },
            {
              title: "Auditorium & Stage LED Backdrop Screens",
              tag: "CURVED & RENTAL CABINETS",
              badge: "Convention Scale",
              desc: "Curved and ultra-large staging LED displays for university convocations, corporate annual meetings, hotel ballrooms, and political address convention halls.",
              image: techAvImg,
              features: ["Concave & Convex Curve Adjustment Locks", "NovaStar High-End Video Processing Controller", "HDR10 Wide Color Gamut & Ultra-Deep Blacks", "Lightweight Quick-Lock Modular Rigging"]
            },
            {
              title: "Cloud Digital Signage CMS Software",
              tag: "REMOTE SCHEDULING",
              badge: "Central Control",
              desc: "Manage 1 to 1,000+ screens across Pan-India from a single web browser. Schedule promotional videos, emergency announcements, live scrolling tickers, and split layouts.",
              image: ledVideoWallImg,
              features: ["Drag-and-Drop Visual Canvas Layout Creator", "Live Weather, News, Ticker & RSS Feed Widgets", "Automated Screen Power On / Off Scheduling", "Offline Playback Cache (Continues Without Internet)"]
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
                  <span>Request Display Sizing & Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optical & Technical Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">Engineering Highlights</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">LED Visual Advantages</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Sun className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#00B4D8] mb-1">100,000 Hours</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">LED Diode Lifespan</div>
              <p className="text-xs text-slate-300 mt-2">Over 10 years of continuous 24/7 brilliant operation.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Maximize2 className="w-6 h-6 text-[#38BDF8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#38BDF8] mb-1">P1.2 - P10</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Pixel Pitches</div>
              <p className="text-xs text-slate-300 mt-2">Custom options tailored for viewing distances from 1 meter to 50+ meters.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Eye className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#0077B6] mb-1">160° / 160°</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Viewing Angle</div>
              <p className="text-xs text-slate-300 mt-2">Flawless color accuracy and brightness from any corner of the room.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Cloud className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#00B4D8] mb-1">Cloud CMS</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Content Control</div>
              <p className="text-xs text-slate-300 mt-2">Instantly update posters, videos, and flash notifications remotely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Looking to Install a Video Wall or Interactive Touch Display?
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get architectural structural feasibility, pixel pitch recommendation, and wholesale quote customized for your facility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Request Free Site Measurement
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20am%20interested%20in%20Large%20LED%20Display%20Panels%20or%20Interactive%20Panels." 
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

export default LargeLedDisplayPanel;
