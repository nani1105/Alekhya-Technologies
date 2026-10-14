import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Fingerprint, 
  ScanFace, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Lock, 
  Users, 
  CloudRain, 
  Server
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import biometricAccessImg from '../../Logo/Biometric access control.jpg';
import biometricWebp from '../../Logo/biometric.webp';
import gateAutomationImg from '../../Logo/Gate Automation.jpg';

const BiometricDevices: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="Biometric Attendance & Access Control Devices in Hyderabad | Alekhya Technologies"
        description="Authorized supply and installation of eSSL, Mantra, Morpho, Realtime, and CP Plus biometric devices in Hyderabad. Facial recognition, optical fingerprint attendance, multi-door access controllers, and Cloud HRMS sync."
        keywords="Biometric devices Hyderabad, Face recognition attendance HITEC City, eSSL biometric dealers Hyderabad, Access control systems Secunderabad, Mantra fingerprint scanner Gachibowli, RFID card attendance system"
        canonicalPath="/products/biometric-devices"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Fingerprint className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              Biometric Access Control & Attendance Specialists
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            Biometric Devices & Access Control
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Secure your premises and automate workforce attendance with touchless AI face recognition terminals, 
            high-precision optical fingerprint scanners, multi-door magnetic interlocks, and seamless cloud payroll HRMS synchronization.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Request Biometric Demonstration</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Biometric Solutions Consultant</span>
            </a>
          </div>

          {/* Brands Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <span className="text-base font-black text-slate-800 tracking-wider">eSSL</span>
              <span className="text-xs text-slate-500">Authorized Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">MANTRA</span>
              <span className="text-xs text-slate-500">STQC Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">REALTIME</span>
              <span className="text-xs text-slate-500">Biometrics & AI</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-black text-slate-800">CP PLUS</span>
              <span className="text-xs text-slate-500">Access Control</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Enterprise Biometric Solutions Lineup
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by corporate IT parks, banks, schools, hospitals, manufacturing plants, and government facilities across Telangana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "AI Touchless Face Recognition Terminals",
              tag: "HIGH SPEED // ZERO TOUCH",
              badge: "Modern Standard",
              desc: "Deep learning facial recognition terminals recognizing authorized personnel in under 0.2 seconds. Detects mask, anti-spoofing photo protection, and dual-camera infrared verification.",
              image: biometricAccessImg,
              features: ["Capacity up to 50,000 Faces", "Visible Light & Infrared Dual Lens", "Live Face Anti-Spoofing Algorithm", "Wi-Fi, 4G SIM & TCP/IP Network Ready"]
            },
            {
              title: "Optical & Fingerprint Attendance Devices",
              tag: "TIME-OFFICE AUTOMATION",
              badge: "Workforce Favorite",
              desc: "Rugged optical and capacitive fingerprint terminals from eSSL and Mantra with built-in battery backup, voice prompts, and large color display for real-time punch logs.",
              image: biometricWebp,
              features: ["Dry, Wet & Rough Fingerprint Identification", "360° Angle Recognition Sensor", "Internal Battery Backup (up to 4 hours)", "Automated Sound & Visual Notifications"]
            },
            {
              title: "Multi-Door Access Controllers & Locks",
              tag: "PHYSICAL PERIMETER SECURITY",
              badge: "High Security",
              desc: "1, 2, and 4-door centralized access controllers integrating EM electromagnetic magnetic locks (600 lbs / 1200 lbs), exit push switches, and fire alarm breakout triggers.",
              image: biometricAccessImg,
              features: ["Anti-Passback & Interlocking Logic", "Emergency Fire Alarm Automatic Unlock", "Magnetic Door Status Sensor Alerts", "Wiegand 26/34 Protocol Compatible"]
            },
            {
              title: "Turnstiles, Flap Barriers & Boom Gates",
              tag: "LOBBY & VEHICLE AUTOMATION",
              badge: "Commercial Lobby",
              desc: "Tripod turnstiles, optical speed flap barriers, and automatic boom barriers for corporate lobby pedestrian throughput and gated parking vehicle verification.",
              image: gateAutomationImg,
              features: ["High Throughput 35 Persons/Minute", "Biometric / RFID Card / QR Code Reader", "Heavy-Duty Stainless Steel (SUS304)", "Emergency Drop-Arm Evacuation Mode"]
            },
            {
              title: "RFID & Smart Proximity Card Readers",
              tag: "CONTACTLESS ID ACCESS",
              badge: "Campus Ready",
              desc: "Mifare 13.56MHz and EM 125KHz smart card authentication systems for large corporate campuses, universities, gym memberships, and hospital staff management.",
              image: biometricWebp,
              features: ["Encrypted Card Sector Writing & Reading", "Supports Dual RFID + Pin Code Input", "Compact Weatherproof IP65 Form Factor", "Instant Reader Feedback Beep & LED"]
            },
            {
              title: "Cloud Time-Office & HRMS Integration",
              tag: "PAYROLL & REPORT SYNC",
              badge: "Seamless Software",
              desc: "Centralized attendance software with automated sync to SAP, Zoho People, GreyHR, Darwinbox, and custom ERPs. Real-time mobile GPS geofenced attendance for field teams.",
              image: biometricAccessImg,
              features: ["Automated Late Comers & Shift Tracking", "Direct Excel / CSV Payroll Export", "Multi-Branch Centralized Cloud Monitoring", "Automated Daily SMS / WhatsApp Alerts"]
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
                  <span>Request Biometric Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specifications Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">Enterprise Ready</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Key Specifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <ScanFace className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#00B4D8] mb-1">&lt; 0.2 Sec</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Face Match Speed</div>
              <p className="text-xs text-slate-300 mt-2">Zero wait queues during morning peak office hours.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Users className="w-6 h-6 text-[#38BDF8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#38BDF8] mb-1">50,000 Users</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Internal Storage</div>
              <p className="text-xs text-slate-300 mt-2">Scales smoothly from small 10-person firms to multi-plant factories.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Server className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#0077B6] mb-1">REST API</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Software Sync</div>
              <p className="text-xs text-slate-300 mt-2">Direct JSON webhook & SQL database sync for HR payroll engines.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-2xl font-black text-[#00B4D8] mb-1">STQC / UIDAI</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Govt Approved</div>
              <p className="text-xs text-slate-300 mt-2">Compliant with Aadhaar verification and institutional audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Upgrade to Smart Facial Recognition or Access Control Today
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get an on-site installation evaluation, free software demo, and quote for your office or campus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Request Free Biometric Audit
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20am%20interested%20in%20Biometric%20Attendance/Access%20Control." 
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

export default BiometricDevices;
