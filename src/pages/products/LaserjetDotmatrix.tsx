import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  FileSpreadsheet, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Wrench, 
  Truck,
  Repeat
} from 'lucide-react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import commercialPrinterImg from '../../Logo/Commercial laser printer.jpg';
import printerImg from '../../Logo/printer.webp';
import tonerImg from '../../Logo/Toner supply.jpg';
import epsonLogo from '../../Logo/Epson_.png';
import canonLogo from '../../Logo/Canon.png';
import brotherLogo from '../../Logo/brother-log-transparent.png';

const LaserjetDotmatrix: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <SEO 
        title="LaserJet & Dot Matrix Printers Sales, Service & Supplies in Hyderabad | Alekhya Technologies"
        description="Authorized dealer for HP LaserJet, Canon, Epson EcoTank, TVS, and Epson Dot Matrix continuous form printers in Hyderabad. High-yield toners, printer ribbons, passbook printers & repair services."
        keywords="LaserJet printer Hyderabad, Dot Matrix printer dealers Hyderabad, HP printer repair Secunderabad, Epson passbook printer Hyderabad, Printer toner cartridges HITEC City, Commercial barcode printer"
        canonicalPath="/products/laserjet-dot-matrix"
      />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Printer className="w-4 h-4 text-[#00B4D8]" />
            <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
              Commercial Printing Systems & Supplies
            </TextShimmer>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
            LaserJet & Dot Matrix Printers
          </h1>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
            Complete commercial printing equipment for logistics, banking counters, corporate offices, and billing environments. 
            Providing high-speed single/multi-function laser printers, heavy-duty 24-pin continuous paper printers, original toners, and doorstep repair.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm shadow-md">
              <Link to="/contact-us">Request Printer Price List</Link>
            </GradientButton>
            <a 
              href="tel:+919573376389" 
              className="inline-flex items-center space-x-2 bg-white/80 hover:bg-white text-[#0077B6] font-bold px-6 py-3 rounded-xl border border-cyan-500/30 shadow-sm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              <span>Contact Printer Specialist</span>
            </a>
          </div>

          {/* Brands Bar */}
          <div className="mt-10 pt-6 border-t border-cyan-500/15 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            <div className="flex items-center space-x-2">
              <span className="text-base font-black text-slate-800">HP LaserJet</span>
              <span className="text-xs text-slate-500">Enterprise Series</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={epsonLogo} alt="Epson" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">LQ / PLQ Series</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={canonLogo} alt="Canon" className="h-7 object-contain" />
              <span className="text-xs text-slate-500">imageCLASS</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={brotherLogo} alt="Brother" className="h-6 object-contain" />
              <span className="text-xs text-slate-500">Laser & Tank</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Heavy-Duty Printing Categories
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
            Engineered for high-volume output, multi-copy invoices, passbooks, barcodes, and crisp professional documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Enterprise Monochrome LaserJet Printers",
              tag: "HIGH SPEED // LOW COST",
              badge: "Office Essential",
              desc: "Heavy-duty monochrome single-function and multifunction laser printers from HP, Canon, and Brother. Speeds up to 45 PPM with auto-duplexing and network LAN/Wi-Fi.",
              image: commercialPrinterImg,
              features: ["35 - 55 Pages Per Minute", "Automatic Two-Sided Printing", "Gigabit Ethernet & Mobile Printing", "High-Yield 10,000+ Page Cartridges"]
            },
            {
              title: "Continuous Form Dot Matrix Printers",
              tag: "24-PIN MULTI-PART FORMS",
              badge: "Logistics Choice",
              desc: "Industry-standard 9-pin and 24-pin continuous tractor-feed printers from Epson (LQ-310, LQ-2090) and TVS. Perfect for warehouse dispatch bills, invoices & delivery challans.",
              image: printerImg,
              features: ["1 Original + 4 to 6 Carbon Copies", "Continuous Tractor Feed & Paper Roll", "High Mean Time Between Failure (MTBF)", "Long-Lasting Fabric Ribbon Cartridges"]
            },
            {
              title: "Specialized Banking Passbook Printers",
              tag: "FINANCIAL SECTOR",
              badge: "NABARD & Bank Tested",
              desc: "Heavy-duty magnetic stripe and optical character passbook printers (Epson PLQ-20 / PLQ-30) trusted across nationalized banks, cooperative societies, and post offices.",
              image: commercialPrinterImg,
              features: ["Auto-Sheet Alignment & Thickness Adjustment", "Magnetic Stripe Read/Write (MSRW)", "Passbook & Cheque Endorsement", "Serial, USB & Parallel Connectivity"]
            },
            {
              title: "Color LaserJet & EcoTank Systems",
              tag: "VIBRANT COLOR // LOW TCO",
              badge: "Low Cost Per Page",
              desc: "Commercial color laser printers and high-yield refillable ink tank printers for vibrant marketing collaterals, certificates, architectural drafts, and presentations.",
              image: printerImg,
              features: ["Ultra Low Cost (10 to 20 Paise per page)", "Photo Quality 4800 x 1200 DPI Output", "Spill-Free Keyed Ink Bottle Filling", "Wi-Fi Direct & Cloud Mobile Printing"]
            },
            {
              title: "Original Toner Cartridges & Ribbons",
              tag: "CONSUMABLES & SUPPLIES",
              badge: "Doorstep Supply",
              desc: "100% genuine OEM toner cartridges (HP 88A, 12A, 05A, Canon 328, NPG) and heavy-duty ribbons with guaranteed page yield and zero leakage warranty.",
              image: tonerImg,
              features: ["Genuine HP, Canon & Epson Supplies", "High-Yield Premium Compatible Options", "Bulk Corporate Monthly Supply Deals", "Free Empty Cartridge Eco-Disposal"]
            },
            {
              title: "Printer Repair & Comprehensive AMC",
              tag: "ON-SITE SLA SERVICE",
              badge: "Rapid Response",
              desc: "Complete hardware servicing including fuser unit repair, paper pickup roller replacements, logic board diagnostics, print head alignment, and preventive cleaning.",
              image: commercialPrinterImg,
              features: ["4-Hour Onsite SLA in Hyderabad", "Standby Backup Printer During Overhauls", "Original Teflon, Gear & Drum Replacements", "Certified Technicians for All Brands"]
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
                  <span>Request Printer / Supply Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-[#00B4D8] font-semibold">Applications</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Key Industry Use Cases</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <FileSpreadsheet className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Banking & Finance</div>
              <p className="text-xs text-slate-300">Passbook updating, cheque leaf printing, loan statement batch generation.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Truck className="w-6 h-6 text-[#38BDF8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Logistics & Warehouses</div>
              <p className="text-xs text-slate-300">Continuous 4-part delivery challans, e-way bills & barcode dispatch labels.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Layers className="w-6 h-6 text-[#0077B6] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">CA & Legal Firms</div>
              <p className="text-xs text-slate-300">High-volume tax audit filings, court documentation, legal bond paper printing.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Wrench className="w-6 h-6 text-[#00B4D8] mx-auto mb-2" />
              <div className="text-base font-bold text-white mb-1">Diagnostic Labs & Retail</div>
              <p className="text-xs text-slate-300">Patient pathology reports, automated billing receipts & GST invoice printers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-950 via-[#041d33] to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Looking for Reliable Printers or Bulk Toner Cartridges?
          </h2>
          <p className="text-sm sm:text-base text-cyan-100 max-w-2xl mx-auto mb-6">
            Get competitive corporate rates, prompt delivery across Hyderabad, and certified AMC maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us">
              <GradientButton className="px-8 py-3 text-sm">
                Get Printer Price Quote
              </GradientButton>
            </Link>
            <a 
              href="https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies,%20I%20need%20pricing%20for%20LaserJet/DotMatrix%20printers%20or%20toner." 
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

export default LaserjetDotmatrix;
