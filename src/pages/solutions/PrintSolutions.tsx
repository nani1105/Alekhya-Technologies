import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, FileText, Shield } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';

const PrintSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-sm font-semibold mb-6">
            <Printer className="w-4 h-4" />
            <span>Commercial Printing & Managed Services</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Print Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Providing enterprise multifunction photocopiers (MFP), Managed Print Services (MPS), production printers, note-counting machines, toner cartridges, and rental options.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm">
              <Link to="/contact-us">Request Printer / Copier Rental Quote</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Printer,
              title: 'Multifunction Photocopiers (MFP)',
              desc: 'High-speed monochrome and color A3/A4 network photocopiers from Canon, Xerox, Konica Minolta, and HP.'
            },
            {
              icon: FileText,
              title: 'Managed Print Services (MPS)',
              desc: 'Optimizing print fleet costs with pay-per-page models, automated toner replenishment, and print audit software.'
            },
            {
              icon: Printer,
              title: 'Commercial & Laser Printers',
              desc: 'Heavy-duty office laser printers, wireless network printers, and high-resolution graphic scanners.'
            },
            {
              icon: FileText,
              title: 'Currency & Note Counting Machines',
              desc: 'Precision fake-note detection counting units for banking, finance, retail counters, and government offices.'
            },
            {
              icon: Shield,
              title: 'Toner & Consumables Supply',
              desc: 'Genuine original OEM and high-yield compatible toner cartridges with doorstep delivery contracts.'
            },
            {
              icon: Printer,
              title: 'Copier Rental & Leasing Plans',
              desc: 'Flexible short-term and long-term printer rental options for startups, events, and government projects.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all backdrop-blur-sm">
              <div className="w-12 h-12 bg-amber-600/20 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PrintSolutions;
