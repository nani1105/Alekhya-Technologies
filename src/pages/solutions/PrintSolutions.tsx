import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, FileText, Shield } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';

import mfpImg from '../../Logo/Multifunction Photocopiers.jpg';
import mpsImg from '../../Logo/Managed print services.jpg';
import commercialPrinterImg from '../../Logo/Commercial laser printer.jpg';
import countingMachinesImg from '../../Logo/Counting machines.jpg';
import tonerSupplyImg from '../../Logo/Toner supply.jpg';
import copierRentalImg from '../../Logo/copier rental.jpg';

const PrintSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs sm:text-sm font-semibold mb-4">
            <Printer className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#fbbf24] [--base-gradient-color:#ffffff] dark:[--base-color:#fbbf24] dark:[--base-gradient-color:#ffffff]">
              Commercial Printing & Managed Services
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Print Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Providing enterprise multifunction photocopiers (MFP), Managed Print Services (MPS), production printers, note-counting machines, toner cartridges, and rental options.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
              <Link to="/contact-us">Request Printer / Copier Rental Quote</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Printer,
              title: 'Multifunction Photocopiers (MFP)',
              desc: 'High-speed monochrome and color A3/A4 network photocopiers from Canon, Xerox, Konica Minolta, and HP.',
              image: mfpImg
            },
            {
              icon: FileText,
              title: 'Managed Print Services (MPS)',
              desc: 'Optimizing print fleet costs with pay-per-page models, automated toner replenishment, and print audit software.',
              image: mpsImg
            },
            {
              icon: Printer,
              title: 'Commercial & Laser Printers',
              desc: 'Heavy-duty office laser printers, wireless network printers, and high-resolution graphic scanners.',
              image: commercialPrinterImg
            },
            {
              icon: FileText,
              title: 'Currency & Note Counting Machines',
              desc: 'Precision fake-note detection counting units for banking, finance, retail counters, and government offices.',
              image: countingMachinesImg
            },
            {
              icon: Shield,
              title: 'Toner & Consumables Supply',
              desc: 'Genuine original OEM and high-yield compatible toner cartridges with doorstep delivery contracts.',
              image: tonerSupplyImg
            },
            {
              icon: Printer,
              title: 'Copier Rental & Leasing Plans',
              desc: 'Flexible short-term and long-term printer rental options for startups, events, and government projects.',
              image: copierRentalImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-amber-600/80 backdrop-blur-md text-white rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <Link to="/contact-us" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300">
                  <span>Inquire for Rental & AMC</span>
                  <Printer className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrintSolutions;
