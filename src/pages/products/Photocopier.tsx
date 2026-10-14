import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  Copy, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Settings, 
  Layers, 
  FileText,
  DollarSign
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import mfpImg from '../../Logo/Multifunction Photocopiers.jpg';
import copierRentalImg from '../../Logo/copier rental.jpg';
import photocopyImg from '../../Logo/photocopy.webp';
import konicaLogo from '../../Logo/Konica1.png';
import canonLogo from '../../Logo/Canon.png';
import xeroxLogo from '../../Logo/Xerox-logo-transparent.png';
import tonerImg from '../../Logo/Toner supply.jpg';

const Photocopier: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="Photocopier Machines Sales, Rentals & AMC in Hyderabad | Alekhya Technologies"
        description="Authorized sales, rental, and AMC dealer for Konica Minolta bizhub, Canon imageRUNNER, and Xerox digital photocopiers in Hyderabad. A3/A4 color & monochrome multifunction printers with 24/7 SLA repair."
        keywords="Photocopier sales Hyderabad, Konica Minolta bizhub dealer Hyderabad, Canon photocopier AMC HITEC City, Xerox copier rental Hyderabad, Multifunction A3 printer Secunderabad, Office photocopier repair"
        canonicalPath="/products/photocopier"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Copy className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              Authorized Multifunctional Photocopier Dealer
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            Digital Photocopier Solutions
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Empower your office workflows with high-speed digital photocopiers and multi-functional printing systems. 
            Official authorized sales, customized monthly rental plans, original toner consumables, and 24/7 SLA maintenance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Get Photocopier Quote & Demo</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Talk to Copier Expert</span>
            </a>
          </div>

          {/* OEM Brand Logos Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <img src={konicaLogo} alt="Konica Minolta" className="h-8 object-contain" />
              <span className="text-xs font-semibold text-slate-600">bizhub Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={canonLogo} alt="Canon" className="h-7 object-contain" />
              <span className="text-xs font-semibold text-slate-600">imageRUNNER</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={xeroxLogo} alt="Xerox" className="h-7 object-contain" />
              <span className="text-xs font-semibold text-slate-600">WorkCentre</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories & Lineup */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Heavy-Duty Office & Commercial Photocopiers
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            From compact A4 desktop workgroup copiers to ultra-high-volume A3 color production machines, we deliver turnkey installation with complete lifecycle support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Konica Minolta bizhub i-Series",
              tag: "A3/A4 COLOR & MONO",
              badge: "Best Seller",
              desc: "Next-gen multi-functional bizhub copiers offering 22 to 75 PPM, dual-scan document feeder, smartphone touch UI, and high-volume monthly duty cycle.",
              image: mfpImg,
              features: ["25 - 65 Pages Per Minute", "AirPrint & Mobile Cloud Connect", "Heavy Duty A3 / A4 Duplex", "Low Cost Per Copy (CPC)"]
            },
            {
              title: "Canon imageRUNNER ADVANCE",
              tag: "ENTERPRISE WORKFLOW",
              badge: "High Reliability",
              desc: "Robust network multifunction digital copiers engineered for heavy daily loads, banks, CA firms, educational universities, and corporate back-offices.",
              image: photocopyImg,
              features: ["Multi-Tray Paper Feed 2,300+ sheets", "Encrypted Secure Print & Scan", "Low Maintenance Downtime", "Original Drum & Toner Life"]
            },
            {
              title: "Xerox WorkCentre & VersaLink",
              tag: "CONNECTKEY ECOSYSTEM",
              badge: "Cloud Ready",
              desc: "High-security workplace assistants with cloud connectivity, optical character recognition (OCR), and comprehensive access audit logging.",
              image: copierRentalImg,
              features: ["Instant Cloud Scan to OneDrive/Drive", "1200 x 2400 DPI High Resolution", "Automated Stapling & Finishing", "Remote Meter Diagnostics"]
            },
            {
              title: "Photocopier Rental & Lease Plans",
              tag: "ZERO CAPITAL EXPENDITURE",
              badge: "Flexible Plans",
              desc: "Avoid large upfront machine costs. Rent high-end Konica Minolta and Canon copiers with free toner, drum maintenance, and onsite operator support included.",
              image: copierRentalImg,
              features: ["Transparent Pay-Per-Page Model", "Free Onsite Technician & Toner", "Same-Day Standby Machine Replacement", "Monthly / Yearly Scalable Contracts"]
            },
            {
              title: "Comprehensive Photocopier AMC",
              tag: "ANNUAL MAINTENANCE (SLA)",
              badge: "Certified Techs",
              desc: "All-inclusive maintenance contracts protecting your equipment. Regular preventive servicing, drum cleaning, laser unit inspection, and zero downtime.",
              image: mfpImg,
              features: ["4-Hour Rapid Dispatch in Hyderabad", "100% Genuine Spare Parts Guaranteed", "Preventive Monthly Health Audits", "Senior Resident Technicians"]
            },
            {
              title: "OEM Toner & Consumables Supply",
              tag: "GENUINE CARTRIDGES",
              badge: "Immediate Delivery",
              desc: "Wholesale supply of original Konica Minolta Simitri HD toners, Canon NPG series cartridges, developer units, and transfer rollers across Telangana.",
              image: tonerImg,
              features: ["100% High Page Yield Guarantee", "Crisp Text & Vibrant Color Depth", "Doorstep Dispatch Within Hours", "Bulk Corporate Discount Pricing"]
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
                  <span>Request Specific Model Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photocopier Specifications Comparison */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">Technical Highlights</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Key Machine Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-[#00B4D8] mb-1">Up to 75 PPM</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Engine Speed</div>
              <p className="text-xs text-slate-300 mt-2">Ultra-fast first-copy-out time under 3.8 seconds.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-[#38BDF8] mb-1">A3 / A4 / SRA3</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Media Handling</div>
              <p className="text-xs text-slate-300 mt-2">Up to 300 GSM cardstock, bypass envelopes & banners.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-[#0077B6] mb-1">10.1" Tablet UI</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Smart Control</div>
              <p className="text-xs text-slate-300 mt-2">Customizable touch panel with multi-language support.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-[#00B4D8] mb-1">4-Hour SLA</div>
              <div className="text-xs uppercase text-slate-400 font-bold tracking-wider">Hyderabad Onsite</div>
              <p className="text-xs text-slate-300 mt-2">Quick response time for repairs and consumable top-ups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Looking for a Copier on Rent or Machine Purchase in Hyderabad?
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get personalized recommendation, price quote, or a demo machine setup for your office within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Request Free Copier Assessment
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20need%20a%20Photocopier%20machine%20quotation/rental." 
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

export default Photocopier;
