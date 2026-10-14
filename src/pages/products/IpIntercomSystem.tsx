import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Phone, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Volume2, 
  Headphones, 
  Network, 
  Radio, 
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import ipbxImg from '../../Logo/ipbx.jpg';
import voipGatewayImg from '../../Logo/VoIP Gateways SIP Phones.jpg';
import teamsRoomsImg from '../../Logo/Teams  Zoom Room Systems.jpg';
import contactCenterImg from '../../Logo/contactcenter.jpg';
import grandstreamLogo from '../../Logo/Grandstream-transparent.png';
import yealinkLogo from '../../Logo/Yealink_logo-transparent.png';
import ciscoLogo from '../../Logo/Cisco_logo.svg-transparent.png';

const IpIntercomSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="IP Intercom Systems, IP PBX & VoIP Telephony in Hyderabad | Alekhya Technologies"
        description="Enterprise IP intercom systems, IP PBX servers, and SIP door phones in Hyderabad. Grandstream, Yealink, Cisco, and Matrix VoIP telephony, multi-apartment intercom, and paging solutions."
        keywords="IP Intercom systems Hyderabad, IP PBX dealers Hyderabad, Grandstream SIP phones HITEC City, Yealink VoIP phones Secunderabad, Multi apartment video intercom, EPABX system AMC Hyderabad"
        canonicalPath="/products/ip-intercom-systems"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <PhoneCall className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              Next-Gen Voice, IP PBX & Door Intercom Networks
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            IP Intercom & Telephony Systems
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Connect offices, residential gated communities, hospitals, and industrial warehouses with unified SIP communications. 
            On-premise IP PBX servers, executive HD desk phones, two-way video door stations, and mobile softphones.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Get Intercom Architecture & Quote</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Voice & Telecom Engineer</span>
            </a>
          </div>

          {/* Brands Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <img src={grandstreamLogo} alt="Grandstream" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">UCM & GXP Series</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={yealinkLogo} alt="Yealink" className="h-5 object-contain" />
              <span className="text-xs text-slate-500">T4U / T5W Series</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={ciscoLogo} alt="Cisco" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">Unified IP Voice</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-bold text-slate-800">MATRIX</span>
              <span className="text-xs text-slate-500">Telecom & Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            IP Voice & Intercom Solutions
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            Scalable voice architectures with zero license recurring fees, crystal clear Opus HD voice codecs, and mobile smartphone extensions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Enterprise IP PBX Appliance Servers",
              tag: "10 TO 5,000+ EXTENSIONS",
              badge: "Core Telephony",
              desc: "Grandstream UCM6300, Matrix, and Yeastar IP PBX servers supporting multi-level IVR, call recording, voicemail-to-email, conferencing bridges, and automated ring groups.",
              image: ipbxImg,
              features: ["Zero Annual License Fees (One-Time Cost)", "Integrated Multi-Level Interactive Voice Response (IVR)", "Automated Call Recording & Audit Storage", "Multi-Office Inter-Branch Free Calling"]
            },
            {
              title: "Executive & Gigabit SIP Desk Phones",
              tag: "HD OPUS AUDIO // POE",
              badge: "Desktop Standard",
              desc: "Grandstream, Yealink, and Cisco color-screen desktop phones featuring dual Gigabit Ethernet, PoE power, programmable BLF speed dials, Bluetooth, and Wi-Fi.",
              image: voipGatewayImg,
              features: ["HD Handset & Full Duplex Speakerphone", "Color LCD Displays with Backlight", "Supports 2 to 16 SIP Accounts", "EHS Headset & Bluetooth Headset Ready"]
            },
            {
              title: "Multi-Apartment & Villa Video Door Phones",
              tag: "SMART VISITOR VERIFICATION",
              badge: "Residential & Commercial",
              desc: "IP-based video intercom door stations with wide-angle camera, RFID badge access, touchscreen indoor monitors, and instant mobile smartphone video call ring.",
              image: teamsRoomsImg,
              features: ["2-Way Full Duplex Audio & 1080p Video", "Door Remote Unlock via Indoor Screen or Mobile", "Night Vision Infrared Camera & Keypad", "Vandal-Resistant Weatherproof IP65 Rating"]
            },
            {
              title: "Wireless IP DECT & Wi-Fi Handsets",
              tag: "CAMPUS WIDE ROAMING",
              badge: "Mobility",
              desc: "Long-range wireless cordless DECT phones and Wi-Fi handsets engineered for hotel staff, hospital nurses, large warehouses, factory supervisors, and restaurants.",
              image: voipGatewayImg,
              features: ["Up to 400m Outdoor & 50m Indoor Range", "Push-to-Talk (PTT) Instant Broadcast", "Up to 30 Hours Talk Time Battery Life", "Seamless Handover Between Base Stations"]
            },
            {
              title: "SIP Paging & Public Address (PA) Systems",
              tag: "EMERGENCY BROADCAST",
              badge: "Industrial & School",
              desc: "Network IP ceiling speakers, horn speakers, intercom panic call boxes, and paging microphones for emergency mass alerts, bells, and background music.",
              image: contactCenterImg,
              features: ["PoE Powered IP Horns & Ceiling Speakers", "Scheduled Automated School / Shift Bells", "Zoned Paging & Global Emergency Broadcast", "Two-Way SOS Help Point Intercom Pillars"]
            },
            {
              title: "Analog to VoIP Gateways & GSM Trunks",
              tag: "LEGACY LINE MIGRATION",
              badge: "Cost Reduction",
              desc: "FXS / FXO media gateways and 4G GSM SIM gateways enabling seamless interconnection with legacy BSNL/Airtel PRI lines, analog intercoms, and telecom carriers.",
              image: ipbxImg,
              features: ["4 to 48 Port FXS/FXO Gateway Modules", "Automatic PSTN / Cellular Failover Backup", "T.38 Fax Support with High Reliability", "Seamless SIP Trunking & Cost Optimization"]
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
                  <span>Request PBX / Intercom Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Telephony Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">Modern Telephony</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Key Enterprise Features</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Smartphone className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Mobile Softphone App</div>
              <p className="text-xs text-slate-300">Carry your office extension anywhere on Android & iPhone with encrypted VoIP.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Radio className="w-6 h-6 text-[#38BDF8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Zero Call Bills Between Sites</div>
              <p className="text-xs text-slate-300">Inter-branch VPN trunking lets regional branches talk for 100% free.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Headphones className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Call Center Suite</div>
              <p className="text-xs text-slate-300">ACD queues, agent login/logout, live supervisor whisper, and call analytics.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Encrypted Calls (TLS/SRTP)</div>
              <p className="text-xs text-slate-300">Bank-grade encryption prevents eavesdropping or unauthorized wiretapping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Upgrade Your Facility to Seamless IP Intercom & EPABX
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get an on-site telecom audit, line capacity sizing, and turnkey quotation from certified network engineers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Request Free Telecom Assessment
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20am%20interested%20in%20IP%20Intercom%20or%20IP%20PBX%20systems." 
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

export default IpIntercomSystem;
